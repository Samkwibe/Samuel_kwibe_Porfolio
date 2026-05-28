# Samuel Kwibe Mobile App

Expo React Native version of the Samuel Kwibe portfolio.

## Run on iPhone

```bash
cd mobile
npm install
npm run ios
```

You can also run `npm start` and scan the QR code with Expo Go.

## iPhone/iPad Compatibility

Expo Go must match the app's Expo SDK version. If Expo Go says the project is incompatible, use a development or preview build instead. This creates a real installable app and avoids Expo Go version mismatch problems.

Install/login to EAS:

```bash
npm install -g eas-cli
eas login
```

Create a development build for a physical iPhone/iPad:

```bash
cd mobile
npm run build:ios:dev
```

After installing that build on the device, start Metro with:

```bash
npm run start:dev-client
```

For a shareable internal test build:

```bash
npm run build:ios:preview
```

Current iOS deployment target is `15.1`, and iPad support is enabled.

## Admin Inbox

The Contact screen saves messages to an Admin inbox.

For local testing, the app uses an in-memory demo inbox and the default PIN is `1234`.

For real messages across devices, create `mobile/.env` from `.env.example` and add your Firebase web app config:

```bash
cp .env.example .env
```

Then set:

- `EXPO_PUBLIC_ADMIN_PIN`
- `EXPO_PUBLIC_FIREBASE_API_KEY`
- `EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `EXPO_PUBLIC_FIREBASE_PROJECT_ID`
- `EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `EXPO_PUBLIC_FIREBASE_APP_ID`

Messages are stored in the Firestore collection `contactMessages`.

Before publishing publicly, replace the demo PIN gate with Firebase Authentication and Firestore security rules.

## Data Source

The app imports the existing portfolio data from:

- `../src/data/profile.js`
- `../src/data/projects.js`

Update those files once and both the web portfolio and mobile app can use the same content.
