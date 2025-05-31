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
    description: "Unite a esta charla para descubrir cómo migré de Flask a FastAPI y transformé completamente el backend de una aplicación para mejorar su performance y escalabilidad. En esta sesión, compartiré mi experiencia y las lecciones aprendidas durante este proceso de migración, abarcando desde los motivos iniciales hasta los desafíos y beneficios obtenidos.\n\nEmpezaremos explorando las limitaciones y problemas que enfrentaba con Flask, y cómo estos me llevaron a considerar FastAPI como una alternativa. Veremos las diferencias fundamentales entre Flask y FastAPI en términos de arquitectura, rendimiento y facilidad de uso.\n\nLuego, nos adentraremos en el proceso de migración en sí, cubriendo cómo migrar rutas, gestionar dependencias y configurar middleware. Analizaremos cómo FastAPI facilita la creación de APIs rápidas y eficientes gracias a su integración con Pydantic y su capacidad para manejar asincronía de manera nativa.\n\nAdemás, discutiremos cómo mejoró la performance de la aplicación tras la migración, incluyendo pruebas de carga y benchmarks comparativos. También hablaré sobre la escalabilidad y cómo FastAPI, combinado con herramientas como Uvicorn y Docker, facilita el despliegue y la gestión en entornos de producción.\n\nFinalmente, compartiré consejos prácticos y mejores prácticas para aquellos que estén considerando una migración similar. Esta charla es ideal para desarrolladores que buscan modernizar sus aplicaciones backend, mejorar la performance y aprender sobre las ventajas de FastAPI frente a Flask.",
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