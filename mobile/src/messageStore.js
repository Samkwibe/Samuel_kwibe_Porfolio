import { initializeApp } from 'firebase/app'
import {
  addDoc,
  collection,
  getFirestore,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  doc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID
}

const hasFirebaseConfig = Object.values(firebaseConfig).every(Boolean)
let db = null

if (hasFirebaseConfig) {
  db = getFirestore(initializeApp(firebaseConfig))
}

let demoMessages = []
const demoListeners = new Set()

function notifyDemoListeners() {
  const snapshot = [...demoMessages].sort((a, b) => b.createdAtMs - a.createdAtMs)
  demoListeners.forEach((listener) => listener(snapshot))
}

export function isMessageStoreConfigured() {
  return hasFirebaseConfig
}

export async function saveContactMessage({ name, email, message }) {
  const payload = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    message: message.trim(),
    status: 'new',
    source: 'mobile-app'
  }

  if (db) {
    await addDoc(collection(db, 'contactMessages'), {
      ...payload,
      createdAt: serverTimestamp()
    })
    return
  }

  demoMessages = [
    {
      id: `${Date.now()}`,
      ...payload,
      createdAtMs: Date.now(),
      createdAtLabel: new Date().toLocaleString()
    },
    ...demoMessages
  ]
  notifyDemoListeners()
}

export function subscribeToContactMessages(onMessages, onError) {
  if (db) {
    const messagesQuery = query(
      collection(db, 'contactMessages'),
      orderBy('createdAt', 'desc'),
      limit(50)
    )

    return onSnapshot(
      messagesQuery,
      (snapshot) => {
        onMessages(snapshot.docs.map((messageDoc) => {
          const data = messageDoc.data()
          return {
            id: messageDoc.id,
            ...data,
            createdAtLabel: data.createdAt?.toDate
              ? data.createdAt.toDate().toLocaleString()
              : 'Just now'
          }
        }))
      },
      onError
    )
  }

  demoListeners.add(onMessages)
  onMessages([...demoMessages])
  return () => demoListeners.delete(onMessages)
}

export async function markContactMessageRead(messageId) {
  if (db) {
    await updateDoc(doc(db, 'contactMessages', messageId), { status: 'read' })
    return
  }

  demoMessages = demoMessages.map((message) => (
    message.id === messageId ? { ...message, status: 'read' } : message
  ))
  notifyDemoListeners()
}
