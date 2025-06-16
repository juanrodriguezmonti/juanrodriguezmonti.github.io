import { Metadata } from "next"
import Link from "next/link"
import { Terminal, Database, Cloud, Shield, GitBranch, Server, Code2, Network } from "lucide-react"

export const metadata: Metadata = {
  title: "Engineering Cheatsheets | Juan Rodriguez Monti",
  description: "Quick reference guides for software engineers, covering cloud, security, databases, and more",
}

const categories = [
  {
    title: "Cloud Native",
    description: "Kubernetes, Docker, and cloud platform commands",
    icon: Cloud,
    href: "/cheatsheets/cloud",
  },
  {
    title: "Security",
    description: "Security best practices, encryption, and authentication",
    icon: Shield,
    href: "/cheatsheets/security",
  },
  {
    title: "Databases",
    description: "SQL, NoSQL, and database management commands",
    icon: Database,
    href: "/cheatsheets/databases",
  },
  {
    title: "Git & Version Control",
    description: "Git commands and workflow patterns",
    icon: GitBranch,
    href: "/cheatsheets/git",
  },
  {
    title: "System Design",
    description: "Architecture patterns and design principles",
    icon: Server,
    href: "/cheatsheets/system-design",
  },
  {
    title: "Networking",
    description: "Network protocols, commands, and troubleshooting",
    icon: Network,
    href: "/cheatsheets/networking",
  },
  {
    title: "Development",
    description: "Programming languages, frameworks, and tools",
    icon: Code2,
    href: "/cheatsheets/development",
  },
  {
    title: "Terminal",
    description: "Shell commands and productivity tips",
    icon: Terminal,
    href: "/cheatsheets/terminal",
  },
]

export default function CheatsheetsPage() {
  return (
    <div className="w-full flex flex-col items-center px-4 py-16">
      <div className="w-full max-w-4xl flex flex-col items-center text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Engineering Cheatsheets</h1>
        <p className="text-lg md:text-xl text-gray-400 dark:text-gray-400 max-w-xl mx-auto">
          Here you'll find my personal collection of technical cheatsheets—quick, practical references I update regularly for myself and my team. Some are basic concepts, others are direct commands, but all are things I find useful and that might help you too.
        </p>
      </div>

      <div className="w-full max-w-5xl grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {categories.map((category) => (
          <Link
            key={category.href}
            href={category.href}
            className="group"
          >
            <div className="h-full bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700 hover:border-red-200 dark:hover:border-red-800 transition-all duration-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded-lg group-hover:bg-red-100 dark:group-hover:bg-red-900/30 transition-colors">
                  <category.icon className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {category.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 