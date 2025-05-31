import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const rootDirectory = path.join(process.cwd(), 'content/blog')

export type BlogPost = {
  slug: string
  title: string
  date: string
  description?: string
  excerpt?: string
  content: string
  readingTime?: string
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const files = fs.readdirSync(rootDirectory)
  
  const posts = files
    .filter((file) => path.extname(file) === '.mdx')
    .map((file) => {
      const filePath = path.join(rootDirectory, file)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContent)
      const slug = path.basename(file, '.mdx')
      
      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        excerpt: data.excerpt,
        content,
        readingTime: calculateReadingTime(content)
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  
  return posts
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContent)
    
    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      excerpt: data.excerpt,
      content,
      readingTime: calculateReadingTime(content)
    }
  } catch (error) {
    return null
  }
}

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min read`
} 