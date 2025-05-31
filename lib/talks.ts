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
    id: "aws-summit-2024",
    title: "Cloud Architecture Patterns for High-Traffic Applications",
    description: "Learn how to design and implement cloud-native architectures that can handle millions of requests. We'll explore AWS services, microservices patterns, and real-world case studies.",
    event: "AWS Summit 2024",
    date: "2024-03-20",
    location: "New York, NY",
    video: "https://www.youtube.com/watch?v=example2",
    slides: "https://speakerdeck.com/example2",
    tags: ["aws", "cloud", "architecture", "microservices"],
  },
]

export async function getTalks(): Promise<Talk[]> {
  return talks
}

export async function getFeaturedTalks(): Promise<Talk[]> {
  const allTalks = await getTalks()
  return allTalks.filter(talk => talk.featured)
} 