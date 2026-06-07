# 🏗️ Infrastructure & Deployment Reference

> **Last updated:** June 6, 2026
> **Project:** Samuel Kwibe Portfolio

---

## 🌐 Domain

| Detail          | Value                                              |
| --------------- | -------------------------------------------------- |
| **Domain**      | `samuelkwibe.tech`                                 |
| **Provider**    | [Namecheap](https://www.namecheap.com)             |
| **DNS Managed** | Namecheap Advanced DNS                             |
| **SSL**         | Auto-provisioned by Vercel (Let's Encrypt)         |

### DNS Records (configured on Namecheap)

| Type  | Host  | Value                  | TTL       |
| ----- | ----- | ---------------------- | --------- |
| A     | `@`   | `76.76.21.21`          | Automatic |
| CNAME | `www` | `cname.vercel-dns.com` | Automatic |

---

## 🚀 Hosting & Deployment

| Detail              | Value                                                                 |
| ------------------- | --------------------------------------------------------------------- |
| **Platform**        | [Vercel](https://vercel.com)                                          |
| **Vercel Project**  | `samuel-kwibe-porfolio`                                               |
| **Vercel URL**      | `samuel-kwibe-porfolio-nine.vercel.app`                               |
| **Custom Domain**   | `samuelkwibe.tech` → redirects to `www.samuelkwibe.tech`              |
| **Framework**       | Vite + React                                                          |
| **Build Command**   | `npm run build`                                                       |
| **Output Directory**| `dist`                                                                |
| **Node Version**    | 20.x                                                                  |
| **Auto-Deploy**     | Yes — every push to `main` on GitHub triggers a new deployment        |

---

## 📦 Source Code

| Detail         | Value                                                                            |
| -------------- | -------------------------------------------------------------------------------- |
| **Repository** | [github.com/Samkwibe/Samuel_kwibe_Porfolio](https://github.com/Samkwibe/Samuel_kwibe_Porfolio) |
| **Branch**     | `main`                                                                           |
| **Provider**   | [GitHub](https://github.com)                                                     |

---

## 🤖 AI Chat Backend

| Detail           | Value                                                           |
| ---------------- | --------------------------------------------------------------- |
| **Provider**     | [NVIDIA AI](https://build.nvidia.com) (free tier)               |
| **API Endpoint** | `https://integrate.api.nvidia.com/v1/chat/completions`          |
| **Default Model**| `meta/llama-3.1-8b-instruct`                                   |
| **Fallback Models** | `mistralai/mistral-7b-instruct-v0.3`, `google/gemma-2-2b-it`|
| **API Key Env**  | `NVIDIA_API_KEY` (set in Vercel Environment Variables)          |
| **Serverless Function** | `/api/chat` (Vercel serverless function)                 |

---

## 🔑 Environment Variables (Vercel)

These must be set in **Vercel → Project Settings → Environment Variables**:

| Variable         | Description                  | Where to get it                          |
| ---------------- | ---------------------------- | ---------------------------------------- |
| `NVIDIA_API_KEY` | NVIDIA AI API key            | [build.nvidia.com](https://build.nvidia.com) → API Keys |

---

## 🔗 Quick Access Links

| Service     | URL                                                                                  |
| ----------- | ------------------------------------------------------------------------------------ |
| **Live Site**   | [samuelkwibe.tech](https://samuelkwibe.tech)                                     |
| **Vercel Dashboard** | [vercel.com/sraymons-projects/samuel-kwibe-porfolio](https://vercel.com)      |
| **GitHub Repo**  | [github.com/Samkwibe/Samuel_kwibe_Porfolio](https://github.com/Samkwibe/Samuel_kwibe_Porfolio) |
| **Namecheap**    | [namecheap.com](https://www.namecheap.com) → Domain List → `samuelkwibe.tech`   |
| **NVIDIA AI**    | [build.nvidia.com](https://build.nvidia.com)                                     |

---

## 📝 How to Update

1. **Code changes:** Push to `main` on GitHub → Vercel auto-deploys in ~1 minute
2. **Environment variables:** Vercel Dashboard → Settings → Environment Variables
3. **Domain/DNS changes:** Namecheap → Domain List → Manage → Advanced DNS
4. **AI model changes:** Update `NVIDIA_MODEL` env variable on Vercel, or edit `server/openrouterProxy.js`
