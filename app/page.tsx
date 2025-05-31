import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Users, Cloud, Shield, Zap, Play, Building2 } from "lucide-react"
import Terminal from "@/components/terminal"
import { getAllPosts } from "@/lib/mdx"
import { getFeaturedTalks } from "@/lib/talks"

export default async function Home() {
  const [posts, featuredTalks] = await Promise.all([getAllPosts(), getFeaturedTalks()])
  const recentPosts = posts.slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 md:py-32 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-gray-900 dark:text-white">
              Engineering Leader · Cloud Native and Security Focused Architect · 20+ Years in Scalable Systems
              </h1>
              <div className="flex items-center gap-3 mb-8">
                <Building2 className="w-6 h-6 text-red-600" />
                <span className="text-red-600 dark:text-red-400 font-medium">Currently working as Software Engineering Manager @ RELP</span>
              </div>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                20+ years leading high-impact engineering teams, driving cloud architecture, and delivering scalable
                solutions. Currently working as Software Engineering Manager at RELP.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <Link
                  href="/blog"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
                >
                  Read my articles <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors inline-flex items-center gap-2"
                >
                  More about me <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/juanitalia-GzqfGetOvoJ9T1geth8cRYnNA5jDEU.png"
                alt="Juan Rodriguez Monti"
                width={500}
                height={500}
                className="profile-image"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Talk */}
      {featuredTalks.length > 0 && (
        <section className="py-20 nature-section">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold">Featured Talk</h2>
              <Link
                href="/talks"
                className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors inline-flex items-center gap-2"
              >
                View all talks <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {featuredTalks.map((talk) => (
              <div
                key={talk.id}
                className="bg-gradient-to-r from-red-50 to-amber-50 dark:from-red-900/20 dark:to-amber-900/20 rounded-xl shadow-lg p-8 border border-red-200 dark:border-red-800"
              >
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-3 py-1 rounded-full text-sm font-medium">
                        Latest Talk
                      </span>
                      <span className="text-red-600 dark:text-red-400 font-medium text-sm">{talk.event}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{talk.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed line-clamp-3">
                      {talk.description}
                    </p>
                    {talk.tags && (
                      <div className="flex flex-wrap gap-2">
                        {talk.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-200 dark:border-gray-700"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-4">
                    {talk.video && (
                      <a
                        href={talk.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors inline-flex items-center gap-2 justify-center"
                      >
                        <Play className="w-4 h-4" />
                        Watch Video
                      </a>
                    )}
                    <Link
                      href="/talks"
                      className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors inline-flex items-center gap-2 justify-center"
                    >
                      View All Talks <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Recent Writing */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Recent Writing</h2>
            <Link
              href="/blog"
              className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors inline-flex items-center gap-2"
            >
              View all <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {recentPosts.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <article className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover-card h-full border border-gray-200 dark:border-gray-700">
                    <div className="p-6">
                      <time className="text-sm text-gray-500 dark:text-gray-400 mb-2 block">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{post.title}</h3>
                      {post.description && (
                        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">{post.description}</p>
                      )}
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center shadow-sm border border-gray-200 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-400">No posts yet. Start writing!</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 dark:bg-red-700 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities, collaborations, or just a good conversation about technology and
            engineering leadership.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:rmontijuan@gmail.com"
              className="bg-white text-red-600 hover:bg-red-50 px-6 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              Get in touch <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link
              href="/about"
              className="bg-red-700 hover:bg-red-800 dark:bg-red-800 dark:hover:bg-red-900 text-white px-6 py-3 rounded-lg transition-colors"
            >
              View my experience
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
