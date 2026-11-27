# CareerHub – Job Portal

A beginner-friendly full-stack job portal built with **Next.js, Node.js (Next.js route handlers), PostgreSQL, Prisma, Tailwind CSS and optional Cloudinary resume storage**.

## Features
- Candidate job listing and search
- Job details and application form
- Resume PDF upload endpoint (Cloudinary credentials are optional)
- Recruiter dashboard to publish jobs
- Applications dashboard
- PostgreSQL persistence using Prisma
- Demo job cards are shown if the database is not connected, so the UI can still be previewed

## 1. Requirements
- Node.js 20 or newer
- PostgreSQL 15 or newer
- VS Code

## 2. Open and install
Open this folder in VS Code. In Terminal → New Terminal, run:

```powershell
npm.cmd install
```

## 3. Create PostgreSQL database
In pgAdmin:
1. Connect to your PostgreSQL server.
2. Right-click **Databases** → **Create** → **Database**.
3. Enter database name: `careerhub`.
4. Owner: `postgres`.
5. Click Save.

## 4. Configure environment
1. Copy `.env.example` and rename the copy to `.env`.
2. Open `.env` and replace `YOUR_PASSWORD` with your PostgreSQL password.

Example (change the password to your own):

```env
DATABASE_URL="postgresql://postgres:MyPassword@localhost:5432/careerhub?schema=public"
CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""
```

Do not share your `.env` file or password.

## 5. Create database tables and sample jobs
Run these commands one at a time:

```powershell
npx.cmd prisma migrate dev --name init
npx.cmd prisma db seed
```

If Prisma asks to install or generate its client, allow it. The seed command adds sample jobs once.

## 6. Start the website

```powershell
npm.cmd run dev
```

Open **http://localhost:3000** in your browser.

## Cloudinary resume upload (optional)
The job portal and applications work without Cloudinary. To enable PDF resume uploads, create a Cloudinary account and add its cloud name, API key and API secret to `.env`. Restart the dev server after editing `.env`. PDF limit: 5 MB.

## Important notes
- This is a college project/demo, not a production hiring platform.
- Authentication, role permissions, email notifications and secure recruiter accounts are not implemented.
- If the database is not configured, the page displays demo jobs. Applying and posting jobs require the PostgreSQL database to be connected.
