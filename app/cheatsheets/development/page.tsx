import { Metadata } from "next"
import { Code, ArrowLeft } from "lucide-react"
import { CopyableCommand } from "@/components/copyable-command"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Development Cheatsheet | Juan Rodriguez Monti",
  description: "Quick reference guide for development tools, practices, and workflows",
}

const sections = [
  {
    title: "Git Workflow",
    commands: [
      {
        command: "git init",
        description: "Initialize new repository",
      },
      {
        command: "git clone url",
        description: "Clone repository",
      },
      {
        command: "git checkout -b branch",
        description: "Create and switch to branch",
      },
      {
        command: "git merge branch",
        description: "Merge branch into current",
      },
      {
        command: "git rebase branch",
        description: "Rebase current branch",
      },
    ],
  },
  {
    title: "Package Management",
    commands: [
      {
        command: "npm init",
        description: "Initialize Node.js project",
      },
      {
        command: "pip install package",
        description: "Install Python package",
      },
      {
        command: "go get package",
        description: "Install Go package",
      },
      {
        command: "cargo add package",
        description: "Add Rust dependency",
      },
      {
        command: "yarn add package",
        description: "Add Node.js dependency",
      },
    ],
  },
  {
    title: "Build Tools",
    commands: [
      {
        command: "npm run build",
        description: "Build Node.js project",
      },
      {
        command: "mvn clean install",
        description: "Build Java project",
      },
      {
        command: "gradle build",
        description: "Build Gradle project",
      },
      {
        command: "cargo build",
        description: "Build Rust project",
      },
      {
        command: "go build",
        description: "Build Go project",
      },
    ],
  },
  {
    title: "Testing",
    commands: [
      {
        command: "npm test",
        description: "Run Node.js tests",
      },
      {
        command: "pytest",
        description: "Run Python tests",
      },
      {
        command: "go test ./...",
        description: "Run Go tests",
      },
      {
        command: "cargo test",
        description: "Run Rust tests",
      },
      {
        command: "jest",
        description: "Run Jest tests",
      },
    ],
  },
  {
    title: "Code Quality",
    commands: [
      {
        command: "eslint .",
        description: "Lint JavaScript code",
      },
      {
        command: "pylint .",
        description: "Lint Python code",
      },
      {
        command: "gofmt -w .",
        description: "Format Go code",
      },
      {
        command: "rustfmt .",
        description: "Format Rust code",
      },
      {
        command: "prettier --write .",
        description: "Format code with Prettier",
      },
    ],
  },
  {
    title: "Development Tools",
    commands: [
      {
        command: "docker-compose up",
        description: "Start Docker services",
      },
      {
        command: "kubectl apply -f file",
        description: "Apply Kubernetes config",
      },
      {
        command: "terraform init",
        description: "Initialize Terraform",
      },
      {
        command: "helm install release chart",
        description: "Install Helm chart",
      },
      {
        command: "aws configure",
        description: "Configure AWS CLI",
      },
    ],
  },
]

export default function DevelopmentCheatsheetPage() {
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
          <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
            <Code className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h1 className="text-5xl font-bold gradient-text">Development Cheatsheet</h1>
        </div>
        <p className="text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Essential development tools, practices, and workflows for modern
          software development.
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