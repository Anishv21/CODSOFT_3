Task 3: Job Portal
# CareerHub – Job Portal

## Project Overview
CareerHub is a modern full-stack job portal that connects job seekers and recruiters through a single platform. Candidates can explore job opportunities, apply for positions, and upload resumes, while recruiters can publish and manage job listings.

## Features
- Browse available job opportunities
- Search job listings
- View job details
- Apply for jobs
- Upload PDF resumes
- Recruiter dashboard
- Publish new job openings
- Manage job applications
- PostgreSQL database integration

## Technology Stack
- Next.js
- React.js
- Node.js
- TypeScript
- Tailwind CSS
- PostgreSQL
- Prisma ORM
- Cloudinary (optional resume storage)

## Installation & Setup

1. Download or extract the project.
2. Open `CareerHub_FullStack` in VS Code.
3. Open the terminal.
4. Install dependencies:

```bash
npm.cmd install
```

5. Create a PostgreSQL database named `careerhub`.

6. Copy `.env.example` and rename the copy to `.env`.

7. Add your PostgreSQL connection details:

```env
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/careerhub?schema=public"

CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""
```

8. Run database migration:

```bash
npx.cmd prisma migrate dev --name init
```

9. Add sample job data:

```bash
npx.cmd prisma db seed
```

10. Start the development server:

```bash
npm.cmd run dev
```

11. Open in browser:

http://localhost:3000

## Project Purpose
The main purpose of CareerHub is to simplify the recruitment process by connecting candidates and recruiters through an easy-to-use digital platform.

## Future Improvements
- User authentication
- Candidate profile management
- Advanced job filtering
- Email notifications
- Recruiter account management
- Application status tracking

## Author
Developed as an internship project.
