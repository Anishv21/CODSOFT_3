import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const count = await prisma.job.count();
  if (count > 0) return;
  await prisma.job.createMany({ data: [
    { title: "Frontend Developer", company: "PixelCraft Technologies", location: "Noida, India", type: "Full-time", salary: "₹3–5 LPA", description: "Build responsive user interfaces using React, JavaScript and modern CSS. Work with designers and backend developers to deliver quality web experiences.", skills: "React, JavaScript, HTML, CSS, Tailwind CSS" },
    { title: "Java Developer Intern", company: "CodeBridge Solutions", location: "Remote", type: "Internship", salary: "₹10,000 / month", description: "Assist the engineering team in developing Java applications, writing clean code and testing REST APIs. Good opportunity for freshers.", skills: "Java, OOP, SQL, Spring Boot basics" },
    { title: "Full Stack Developer", company: "NextWave Digital", location: "Gurugram, India", type: "Full-time", salary: "₹4–7 LPA", description: "Develop end-to-end web features, integrate APIs and work with relational databases in a collaborative product team.", skills: "Next.js, Node.js, PostgreSQL, Prisma" },
    { title: "Backend Developer Intern", company: "DataNest Labs", location: "Delhi, India", type: "Internship", salary: "₹8,000 / month", description: "Create and test backend endpoints, work with databases and learn production software development practices.", skills: "Node.js, Express, PostgreSQL, REST API" },
    { title: "UI/UX Design Intern", company: "BrightPath Studio", location: "Remote", type: "Internship", salary: "₹7,000 / month", description: "Help create clean, accessible interfaces and prototypes for web and mobile products.", skills: "Figma, Wireframing, Prototyping, UI Design" }
  ] });
}
main().finally(() => prisma.$disconnect());
