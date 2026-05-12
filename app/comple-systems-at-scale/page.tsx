import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const bookParts = [
  {
    title: "Part I - Foundations of Complex Systems",
    chapters: [
      "01. What Makes a System Complex - emergence, feedback loops, failure modes",
      "02. The Stack as a System - Next.js + FastAPI + AWS architecture map",
      "03. Designing for Scale from Day One - patterns that age well",
    ],
  },
  {
    title: "Part II - The Modern Frontend",
    chapters: [
      "04. Next.js as the Backbone - App Router, Server Components, streaming",
      "05. Vercel vs. AWS - choosing your deployment surface",
      "06. Frontend at Scale - CDN, caching, edge delivery",
    ],
  },
  {
    title: "Part III - Microservices with FastAPI",
    chapters: [
      "07. Why FastAPI for Microservices - async, OpenAPI, validation",
      "08. Lambdas vs. EC2 - deployment trade-offs on AWS",
      "09. Service Communication and Resilience - queues, retries, circuit breakers",
      "10. Observability - logs, metrics, traces, OpenTelemetry",
    ],
  },
  {
    title: "Part IV - Security: Secure from Code",
    chapters: [
      "11. Security Starts in Development - threat modeling, secrets, SAST",
      "12. OWASP Top 10 in the Real World - vulnerabilities and practical fixes",
      "13. Pentesting Your Own Infrastructure - nmap, nikto, sqlmap, Burp in CI/CD",
      "14. Hardening AWS - IAM least privilege, VPC, reverse proxy, WAF",
    ],
  },
  {
    title: "Part V - AI-Native Systems",
    chapters: [
      "15. What AI-Native Really Means - LLMs as infrastructure",
      "16. AI in the Development Workflow - coding, testing, PR review, incident triage",
      "17. Building AI-Powered Features - RAG, embeddings, function calling, agentic flows",
      "18. The Complexity Ahead - AI security, observability, compliance",
    ],
  },
]

export default function ComplexSystemsAtScalePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="py-16 md:py-24 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 mb-8"
          >
            Back to Home <ArrowUpRight className="w-4 h-4" />
          </Link>

          <div className="mb-8 rounded-xl border border-amber-300/60 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 dark:border-amber-700/40 p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-800 dark:text-amber-300 mb-2">Coming soon</p>
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              It will soon be released free of charge in PDF and EPUB.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-red-400 mb-3">Book Project</p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white mb-5">
                Complex Systems at Scale
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
                Building Critical and Secure Software with Next.js, FastAPI, and AWS.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                This book follows the real journey from a lean v0.1 stack to enterprise-grade systems: architecture, frontend,
                microservices, security by design, and AI-native patterns for modern teams.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3 py-1 rounded-full text-sm">
                  5 Parts
                </span>
                <span className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3 py-1 rounded-full text-sm">
                  18 Chapters
                </span>
                <span className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3 py-1 rounded-full text-sm">
                  Engineers, Tech Leads, EMs
                </span>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <Image
                src="/complex.png"
                alt="Complex Systems at Scale cover"
                width={360}
                height={500}
                className="rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Table of Contents</h2>
            <p className="text-gray-600 dark:text-gray-400">
              A complete roadmap across architecture, deployment, security, resilience, and AI integration.
            </p>
          </div>

          <div className="space-y-6">
            {bookParts.map((part) => (
              <article
                key={part.title}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{part.title}</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {part.chapters.map((chapter) => (
                    <li key={chapter} className="leading-relaxed">
                      {chapter}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
