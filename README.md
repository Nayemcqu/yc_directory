# YC Directory — Startup Discovery & Pitching Platform

YC Directory is a full-stack web application built with Next.js that helps entrepreneurs showcase startup ideas and discover innovative businesses. Users can explore startup pitches, share their own ideas, and browse a directory of startups through a modern, responsive interface.

The application uses Sanity CMS for content management and GitHub authentication to support authenticated user interactions.

## 🚀 Live Demo

[Visit YC Directory](https://yc-directory-five-chi.vercel.app/)

## 📂 GitHub Repository

[View Source Code](https://github.com/Nayemcqu/yc_directory)

## ✨ Features

- **Startup Discovery:** Browse startup pitches and explore innovative ideas.
- **Startup Pitch Submission:** Create and share startup ideas with relevant details.
- **GitHub Authentication:** Sign in using GitHub through Auth.js.
- **Content Management:** Manage startup content using Sanity CMS.
- **Search Functionality:** Find startups and explore relevant ideas.
- **Startup Profiles:** View startup information and associated pitch details.
- **Sanity Studio:** Access the embedded content management studio at `/studio`.
- **Error Monitoring:** Sentry integration for application monitoring.
- **Responsive Interface:** Modern UI designed for different screen sizes.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js | Full-stack React framework |
| React | Component-based UI |
| TypeScript | Type-safe development |
| Tailwind CSS | Responsive styling |
| Sanity CMS | Content management and data storage |
| Auth.js / NextAuth.js | GitHub authentication |
| Sentry | Error monitoring |
| Vercel | Application deployment |

## 🏗️ Project Structure

```text
yc_directory/
├── app/                 # Next.js application routes
├── components/          # Reusable UI components
├── hooks/               # Custom React hooks
├── lib/                 # Shared utilities and helpers
├── public/              # Static assets
├── sanity/              # Sanity schemas and configuration
├── auth.ts              # Authentication configuration
├── sanity.config.ts     # Sanity Studio configuration
├── next.config.ts       # Next.js configuration
├── package.json         # Dependencies and scripts
└── README.md
```

## ⚙️ Getting Started

### Prerequisites

- Node.js compatible with the project's dependencies
- npm
- A Sanity account and project
- GitHub OAuth application credentials

### 1. Clone the repository

```bash
git clone https://github.com/Nayemcqu/yc_directory.git
cd yc_directory
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root.

Add the variables required by your application:

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=
SANITY_API_READ_TOKEN=
SANITY_API_WRITE_TOKEN=

# Auth.js / GitHub OAuth
AUTH_SECRET=
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
```

Replace the placeholders with your actual configuration values. Confirm the exact variable names against your project's source code and Sanity configuration.

**Security:** Never commit `.env.local` or expose private API tokens in your repository.

### 4. Generate Sanity types

If your project uses the configured Sanity type-generation script, run:

```bash
npm run typegen
```

### 5. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 6. Open Sanity Studio

If the development server is running and Sanity is configured, visit:

[http://localhost:3000/studio](http://localhost:3000/studio)

Use the studio to manage the content defined by your Sanity schemas.

## 🔐 Authentication and Content Management

YC Directory combines GitHub authentication with Sanity CMS to support authenticated startup-pitch workflows and structured content management.

- Auth.js handles the authentication flow.
- Sanity stores and serves application content.
- TypeScript helps maintain consistency across application data and components.
- Sentry supports application error monitoring.

## 🌐 Deployment

The application can be deployed to Vercel.

1. Import the GitHub repository into Vercel.
2. Configure the required environment variables in the project settings.
3. Ensure the Sanity project and GitHub OAuth callback URLs are configured for the production domain.
4. Deploy the application and test authentication, content loading, and pitch submission.

## 📚 Key Learning Outcomes

This project provides practical experience with:

- Building full-stack applications with Next.js and TypeScript.
- Integrating a headless CMS into a React application.
- Implementing GitHub OAuth authentication.
- Structuring reusable components and application routes.
- Managing environment variables and third-party service integrations.
- Deploying a modern web application.
- Monitoring errors with Sentry.

## 🔮 Potential Future Improvements

- Add advanced startup filtering by category.
- Improve search with sorting and pagination.
- Add automated tests for authentication and pitch-submission flows.
- Improve accessibility and loading-state feedback.
- Add analytics to better understand startup discovery activity.

## 👨‍💻 Author

**Nayem Khan**

- GitHub: [@Nayemcqu](https://github.com/Nayemcqu)
- Project Repository: [YC Directory](https://github.com/Nayemcqu/yc_directory)

---

*YC Directory is an independent portfolio project for exploring startup discovery, content management, and full-stack web development.*
