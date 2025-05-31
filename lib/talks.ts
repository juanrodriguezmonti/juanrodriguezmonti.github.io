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
    title: "Mi experiencia organizando eventos Python usando Python!",
    description: "Contaré cómo es organizar un evento de Python utilizando herramientas desarrolladas en Python. Voy a presentar herramientas conocidas aplicadas a la organización de eventos y también otras que son desarrollos, de Software Libre, propios, y de colegas con los que hemos organizado varios eventos en Argentina, que simplificarán las tareas de organizadores y oradores. Busco dar una mirada integral de cómo es comenzar a organizar un evento desde el momento cero hasta sus partes más complejas.",
    event: "PyCon España 2016",
    date: "2016-05-07",
    location: "Almería, España",
    tags: ["python", "eventos", "organización", "comunidad"],
    featured: false,
  },
  {
    id: "pycon-es-2016-pyqt",
    title: "Introducción a PyQt",
    description: "Es una charla que pretende resolver una cuestión que suele surgir en todos los nuevos programadores que se acercan a PyQt y que es la curva de aprendizaje, dado que no es simple comenzar a usar PyQt para quienes recién comienzan. Introducción, presentación del framework, y varias cosas más.",
    event: "PyCon España 2016",
    date: "2016-05-07",
    location: "Almería, España",
    tags: ["python", "pyqt", "gui", "desarrollo"],
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