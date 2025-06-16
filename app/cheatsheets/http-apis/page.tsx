import { Metadata } from "next"
import { Globe } from "lucide-react"
import { CopyableCommand } from "@/components/copyable-command"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "HTTP & APIs Cheatsheet | Juan Rodriguez Monti",
  description: "Quick reference for HTTP methods, status codes, curl, REST, GraphQL, and API best practices.",
}

const sections = [
  {
    title: "HTTP Methods",
    commands: [
      { command: "GET", description: "Retrieve data (safe, idempotent)" },
      { command: "POST", description: "Create resource (not idempotent)" },
      { command: "PUT", description: "Replace resource (idempotent)" },
      { command: "PATCH", description: "Partial update (idempotent)" },
      { command: "DELETE", description: "Remove resource (idempotent)" },
      { command: "OPTIONS", description: "Describe communication options" },
      { command: "HEAD", description: "Same as GET but no response body" },
    ],
  },
  {
    title: "Status Codes",
    commands: [
      { command: "200 OK", description: "Request succeeded" },
      { command: "201 Created", description: "Resource created" },
      { command: "204 No Content", description: "Success, no body" },
      { command: "400 Bad Request", description: "Malformed request" },
      { command: "401 Unauthorized", description: "Authentication required" },
      { command: "403 Forbidden", description: "Not allowed" },
      { command: "404 Not Found", description: "Resource not found" },
      { command: "500 Internal Server Error", description: "Server error" },
    ],
  },
  {
    title: "curl Examples",
    commands: [
      { command: "curl -X GET https://api.example.com/resource", description: "GET request" },
      { command: "curl -X POST -d '{\"name\":\"foo\"}' -H 'Content-Type: application/json' https://api.example.com/resource", description: "POST JSON" },
      { command: "curl -X PUT -d '{\"name\":\"bar\"}' -H 'Content-Type: application/json' https://api.example.com/resource/1", description: "PUT update" },
      { command: "curl -X DELETE https://api.example.com/resource/1", description: "DELETE resource" },
      { command: "curl -I https://api.example.com", description: "Show response headers" },
    ],
  },
  {
    title: "Common Headers",
    commands: [
      { command: "Content-Type: application/json", description: "Body format (JSON)" },
      { command: "Accept: application/json", description: "Expected response format" },
      { command: "Authorization: Bearer <token>", description: "Bearer token auth" },
      { command: "User-Agent: ...", description: "Client identifier" },
      { command: "Cache-Control: no-cache", description: "Disable caching" },
    ],
  },
  {
    title: "REST Tips",
    commands: [
      { command: "/users/{id}", description: "Resource-oriented URIs" },
      { command: "Use nouns, not verbs", description: "/users, /orders, /products" },
      { command: "Statelessness", description: "No session state on server" },
      { command: "Versioning", description: "e.g. /v1/users" },
      { command: "Use proper status codes", description: "Reflect operation result" },
    ],
  },
  {
    title: "GraphQL Tips",
    commands: [
      { command: "query { users { id name } }", description: "Basic query" },
      { command: "mutation { addUser(name: \"foo\") { id } }", description: "Mutation" },
      { command: "Single endpoint", description: "Usually /graphql" },
      { command: "Strongly typed schema", description: "Types for all data" },
      { command: "Introspection", description: "Query schema itself" },
    ],
  },
  {
    title: "Authentication",
    commands: [
      { command: "Bearer Token", description: "Authorization: Bearer <token>" },
      { command: "Basic Auth", description: "Authorization: Basic <base64>" },
      { command: "API Key", description: "X-API-Key: <key>" },
      { command: "OAuth2", description: "Industry standard for delegated auth" },
      { command: "Cookie Auth", description: "Session-based" },
    ],
  },
]

export default function HttpApisCheatsheetPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <Link
        href="/cheatsheets"
        className="inline-flex items-center gap-2 text-lg font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Cheatsheets
      </Link>
      <header className="mb-16 max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
            <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-5xl font-bold gradient-text">HTTP & APIs Cheatsheet</h1>
        </div>
        <p className="text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Essential HTTP methods, status codes, curl examples, REST & GraphQL tips, and API best practices.
        </p>
      </header>
      <div className="grid md:grid-cols-2 gap-8">
        {sections.map((section) => (
          <div
            key={section.title}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              {section.title}
            </h2>
            <div className="space-y-4">
              {section.commands.map((cmd) => (
                <div key={cmd.command}>
                  <CopyableCommand command={cmd.command} />
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {cmd.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 