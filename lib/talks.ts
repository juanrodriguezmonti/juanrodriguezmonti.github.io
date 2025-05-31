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
    id: "pycon-2024",
    title: "Building Scalable Python Applications with FastAPI",
    description: "A deep dive into building high-performance, scalable web applications using FastAPI and modern Python features. We'll cover async/await, dependency injection, and best practices for structuring large applications.",
    event: "PyCon US 2024",
    date: "2024-05-15",
    location: "Pittsburgh, PA",
    video: "https://www.youtube.com/watch?v=example",
    slides: "https://speakerdeck.com/example",
    tags: ["python", "fastapi", "web", "async"],
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