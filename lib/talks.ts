import { z } from "zod"

const talkSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  event: z.string(),
  date: z.string(),
  location: z.string().optional(),
  video: z.string().optional(),
  slides: z.string().optional(),
  tags: z.array(z.string()).optional(),
  featured: z.boolean().default(false),
})

export type Talk = z.infer<typeof talkSchema>

const talks: Talk[] = [
  {
    id: "nerdearla-2024",
    title: "From Flask to FastAPI: A Journey to Better Performance and Scalability",
    description: "Join this talk to discover how I migrated from Flask to FastAPI and completely transformed a backend application to improve its performance and scalability. In this session, I'll share my experience and lessons learned during this migration process, from initial motivations to challenges and benefits obtained.\n\nWe'll start by exploring the limitations and issues I faced with Flask, and how these led me to consider FastAPI as an alternative. We'll look at the fundamental differences between Flask and FastAPI in terms of architecture, performance, and ease of use.\n\nThen, we'll dive into the migration process itself, covering how to migrate routes, manage dependencies, and configure middleware. We'll analyze how FastAPI facilitates the creation of fast and efficient APIs thanks to its integration with Pydantic and its native ability to handle asynchronicity.\n\nAdditionally, we'll discuss how the application's performance improved after the migration, including load tests and comparative benchmarks. I'll also talk about scalability and how FastAPI, combined with tools like Uvicorn and Docker, facilitates deployment and management in production environments.\n\nFinally, I'll share practical tips and best practices for those considering a similar migration. This talk is ideal for developers looking to modernize their backend applications, improve performance, and learn about the advantages of FastAPI over Flask.",
    event: "Nerdearla 2024",
    date: "2024-03-15",
    location: "Buenos Aires, Argentina",
    video: "https://www.youtube.com/watch?v=example",
    slides: "/JuanRodriguezMonti-FromFlasktoFastAPI-rev1.0.pdf",
    tags: ["python", "fastapi", "flask", "backend", "performance", "migration"],
    featured: true,
  },
  {
    id: "pycon-es-2016-events",
    title: "My Experience Organizing Python Events Using Python!",
    description: "I'll share how to organize a Python event using Python-developed tools. I'll present well-known tools applied to event organization and also other Free Software developments, both our own and from colleagues with whom we've organized several events in Argentina, that will simplify the tasks for organizers and speakers. I aim to provide a comprehensive view of how to start organizing an event from scratch to its most complex parts.",
    event: "PyCon España 2016",
    date: "2016-05-07",
    location: "Almería, Spain",
    video: "https://www.youtube.com/watch?v=6RGGFUY7quk",
    slides: "",
    tags: ["python", "events", "organization", "community"],
    featured: false,
  },
  {
    id: "pycon-es-2016-pyqt",
    title: "Introduction to PyQt",
    description: "This talk aims to address a common issue that arises for new programmers approaching PyQt: the learning curve, as it's not simple to start using PyQt for beginners. Introduction, framework presentation, and much more.",
    event: "PyCon España 2016",
    date: "2016-05-07",
    location: "Almería, Spain",
    video: "https://www.youtube.com/watch?v=fepmBpDjfNg",
    slides: "",
    tags: ["python", "pyqt", "gui", "development"],
    featured: false,
  }
]

export async function getTalks(): Promise<Talk[]> {
  return talks
}

export async function getFeaturedTalks(): Promise<Talk[]> {
  const allTalks = await getTalks()
  return allTalks.filter(talk => talk.featured)
} 