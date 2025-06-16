import { Metadata } from "next"
import { Network, ArrowLeft } from "lucide-react"
import { CopyableCommand } from "@/components/copyable-command"
import Link from "next/link"

export const metadata: Metadata = {
  title: "System Design Cheatsheet | Juan Rodriguez Monti",
  description: "Quick reference guide for system design patterns, architectures, and best practices",
}

const sections = [
  {
    title: "Architecture Patterns",
    commands: [
      {
        command: "Monolithic",
        description: "Single application with all components tightly coupled",
      },
      {
        command: "Microservices",
        description: "Independent services communicating via APIs",
      },
      {
        command: "Event-Driven",
        description: "Services communicate through events and messages",
      },
      {
        command: "Serverless",
        description: "Functions as a service, no server management",
      },
      {
        command: "CQRS",
        description: "Command Query Responsibility Segregation",
      },
    ],
  },
  {
    title: "Scalability",
    commands: [
      {
        command: "Horizontal Scaling",
        description: "Add more machines to distribute load",
      },
      {
        command: "Vertical Scaling",
        description: "Add more resources to existing machine",
      },
      {
        command: "Load Balancing",
        description: "Distribute traffic across multiple servers",
      },
      {
        command: "Caching",
        description: "Store frequently accessed data in memory",
      },
      {
        command: "Database Sharding",
        description: "Split database into smaller parts",
      },
    ],
  },
  {
    title: "High Availability",
    commands: [
      {
        command: "Active-Active",
        description: "Multiple active nodes serving traffic",
      },
      {
        command: "Active-Passive",
        description: "One active node, others on standby",
      },
      {
        command: "Failover",
        description: "Automatic switch to backup system",
      },
      {
        command: "Replication",
        description: "Copy data across multiple nodes",
      },
      {
        command: "Circuit Breaker",
        description: "Prevent cascading failures",
      },
    ],
  },
  {
    title: "Data Management",
    commands: [
      {
        command: "ACID",
        description: "Atomicity, Consistency, Isolation, Durability",
      },
      {
        command: "BASE",
        description: "Basically Available, Soft state, Eventually consistent",
      },
      {
        command: "CAP Theorem",
        description: "Consistency, Availability, Partition tolerance",
      },
      {
        command: "Eventual Consistency",
        description: "Data will be consistent eventually",
      },
      {
        command: "Strong Consistency",
        description: "Data is consistent immediately",
      },
    ],
  },
  {
    title: "Security",
    commands: [
      {
        command: "OAuth 2.0",
        description: "Authorization framework",
      },
      {
        command: "JWT",
        description: "JSON Web Tokens for authentication",
      },
      {
        command: "HTTPS",
        description: "Secure communication over TLS",
      },
      {
        command: "Rate Limiting",
        description: "Limit requests per user/IP",
      },
      {
        command: "CORS",
        description: "Cross-Origin Resource Sharing",
      },
    ],
  },
  {
    title: "Performance",
    commands: [
      {
        command: "CDN",
        description: "Content Delivery Network",
      },
      {
        command: "Database Indexing",
        description: "Optimize query performance",
      },
      {
        command: "Connection Pooling",
        description: "Reuse database connections",
      },
      {
        command: "Asynchronous Processing",
        description: "Handle tasks in background",
      },
      {
        command: "Compression",
        description: "Reduce data transfer size",
      },
    ],
  },
]

export default function SystemDesignCheatsheetPage() {
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
          <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
            <Network className="w-8 h-8 text-purple-600 dark:text-purple-400" />
          </div>
          <h1 className="text-5xl font-bold gradient-text">System Design Cheatsheet</h1>
        </div>
        <p className="text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Essential system design patterns, architectures, and best practices for
          building scalable and reliable systems.
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