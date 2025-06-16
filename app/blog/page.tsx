import Link from 'next/link'
import { getAllPosts } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Writing | Juan Rodriguez Monti",
  description: "Insights on engineering leadership, cloud architecture, and building scalable systems",
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <header className="mb-16 max-w-4xl">
        <h1 className="text-5xl font-bold mb-8 gradient-text">Writing</h1>
        <p className="text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Insights on engineering leadership, cloud architecture, team management, and building scalable systems.
        </p>
      </header>

      {posts.length > 0 ? (
        <div className="grid gap-8">
          {posts.map((post, index) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 hover-card border border-red-100 dark:border-red-900/30 transition-all duration-200 hover:shadow-md">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <time dateTime={post.date} className="font-medium bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 px-3 py-1 rounded-full">
                    {formatDate(post.date)}
                  </time>
                  {post.readingTime && (
                    <>
                      <span className="text-gray-300 dark:text-gray-600">•</span>
                      <span>{post.readingTime}</span>
                    </>
                  )}
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{post.title}</h2>
                {post.description && (
                  <p className="text-gray-600 dark:text-gray-400 text-base line-clamp-3">
                    {post.description}
                  </p>
                )}
              </article>
            </Link>
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center shadow-sm border border-red-100 dark:border-red-900/30">
          <p className="text-gray-600 dark:text-gray-400">No articles yet.</p>
        </div>
      )}
    </div>
  )
}
