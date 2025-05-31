import { getTalks } from "@/lib/talks"
import { Calendar, MapPin, ExternalLink, Play, Star } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Speaking | Juan Rodriguez Monti",
  description: "Conference talks and presentations on Python, engineering leadership and cloud architecture",
}

export default async function TalksPage() {
  const talks = await getTalks()
  const featuredTalks = talks.filter((talk) => talk.featured)
  const otherTalks = talks.filter((talk) => !talk.featured)

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <header className="mb-16">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Speaking</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
          Conference talks, workshops, and presentations about Python development, engineering leadership, and building
          scalable systems.
        </p>
      </header>

      {/* Featured Talks */}
      {featuredTalks.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-500" />
            Featured Talk
          </h2>
          {featuredTalks.map((talk) => (
            <article
              key={talk.id}
              className="bg-gradient-to-r from-red-50 to-amber-50 dark:from-red-900/20 dark:to-amber-900/20 rounded-xl shadow-lg p-8 hover-card border border-red-200 dark:border-red-800"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="text-red-600 dark:text-red-400 font-medium text-sm">{talk.event}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{talk.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(talk.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    {talk.location && (
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {talk.location}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{talk.description}</p>
                  {talk.tags && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {talk.tags.map((tag) => (
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
                <div className="flex flex-col gap-4 lg:min-w-[200px]">
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
                  {talk.slides && (
                    <a
                      href={talk.slides}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors inline-flex items-center gap-2 justify-center"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Slides
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </section>
      )}

      {/* Other Talks */}
      {otherTalks.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">All Talks</h2>
          <div className="space-y-8">
            {otherTalks.map((talk) => (
              <article
                key={talk.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 hover-card border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{talk.title}</h3>
                    <p className="text-red-600 dark:text-red-400 font-medium mb-2">{talk.event}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    <Calendar className="w-4 h-4" />
                    <time>
                      {new Date(talk.date).toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                </div>

                {talk.location && (
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{talk.location}</span>
                  </div>
                )}

                {talk.description && (
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{talk.description}</p>
                )}

                <div className="flex flex-wrap gap-6 mb-6">
                  {talk.video && (
                    <a
                      href={talk.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
                    >
                      <Play className="w-4 h-4" />
                      Watch video
                    </a>
                  )}
                  {talk.slides && (
                    <a
                      href={talk.slides}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View slides
                    </a>
                  )}
                </div>

                {talk.tags && (
                  <div className="flex flex-wrap gap-2">
                    {talk.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      {talks.length === 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center shadow-sm border border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400">No talks yet.</p>
        </div>
      )}
    </div>
  )
}
