import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'
import { MDXContent } from '@/components/mdx/MDXContent'
import { ArrowLeft, Clock } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to all articles
      </Link>

      <article>
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 text-sm mb-8">
            <time dateTime={post.date} className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {formatDate(post.date)}
            </time>
            {post.readingTime && (
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readingTime}
              </span>
            )}
          </div>

          {post.excerpt && (
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed border-l-4 border-red-500 pl-6 italic">
              {post.excerpt}
            </p>
          )}
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <MDXContent source={post.content} />
        </div>

        <footer className="mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 border border-red-100 dark:border-red-900/30">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">About the Author</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Juan Rodriguez Monti is a Senior Backend Software Developer and University Professor specializing in Python,
              Algorithms, Machine Learning, and Data Structures. He loves coding, teaching, and sharing knowledge with the
              developer community.
            </p>
            <Link
              href="/about"
              className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 inline-flex items-center gap-2"
            >
              More about Juan
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </footer>
      </article>
    </div>
  )
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {}
  }

  return {
    title: `${post.title} | Juan Rodriguez Monti`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Juan Rodriguez Monti"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  }
}
