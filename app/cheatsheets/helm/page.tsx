import { Metadata } from "next"
import { Ship } from "lucide-react"
import { CopyableCommand } from "@/components/copyable-command"

export const metadata: Metadata = {
  title: "Helm Cheatsheet | Juan Rodriguez Monti",
  description: "Quick reference guide for Helm commands and common operations",
}

const sections = [
  {
    title: "Basic Commands",
    commands: [
      {
        command: "helm list",
        description: "List releases",
      },
      {
        command: "helm install name chart",
        description: "Install chart",
      },
      {
        command: "helm upgrade name chart",
        description: "Upgrade release",
      },
      {
        command: "helm uninstall name",
        description: "Uninstall release",
      },
      {
        command: "helm status name",
        description: "Show release status",
      },
    ],
  },
  {
    title: "Repository Management",
    commands: [
      {
        command: "helm repo list",
        description: "List repositories",
      },
      {
        command: "helm repo add name url",
        description: "Add repository",
      },
      {
        command: "helm repo update",
        description: "Update repositories",
      },
      {
        command: "helm repo remove name",
        description: "Remove repository",
      },
      {
        command: "helm search repo keyword",
        description: "Search repositories",
      },
    ],
  },
  {
    title: "Chart Management",
    commands: [
      {
        command: "helm create name",
        description: "Create new chart",
      },
      {
        command: "helm package chart",
        description: "Package chart",
      },
      {
        command: "helm lint chart",
        description: "Lint chart",
      },
      {
        command: "helm dependency update chart",
        description: "Update dependencies",
      },
      {
        command: "helm dependency build chart",
        description: "Build dependencies",
      },
    ],
  },
  {
    title: "Values and Templates",
    commands: [
      {
        command: "helm install name chart --set key=value",
        description: "Set value",
      },
      {
        command: "helm install name chart -f values.yaml",
        description: "Use values file",
      },
      {
        command: "helm get values name",
        description: "Get release values",
      },
      {
        command: "helm template name chart",
        description: "Render templates",
      },
      {
        command: "helm show values chart",
        description: "Show default values",
      },
    ],
  },
  {
    title: "Release Management",
    commands: [
      {
        command: "helm rollback name revision",
        description: "Rollback release",
      },
      {
        command: "helm history name",
        description: "Show release history",
      },
      {
        command: "helm get manifest name",
        description: "Get release manifest",
      },
      {
        command: "helm get hooks name",
        description: "Get release hooks",
      },
      {
        command: "helm get notes name",
        description: "Get release notes",
      },
    ],
  },
  {
    title: "Best Practices",
    commands: [
      {
        command: "helm install name chart --dry-run",
        description: "Dry run installation",
      },
      {
        command: "helm install name chart --atomic",
        description: "Atomic installation",
      },
      {
        command: "helm install name chart --timeout 5m",
        description: "Set timeout",
      },
      {
        command: "helm install name chart --namespace ns",
        description: "Set namespace",
      },
      {
        command: "helm install name chart --generate-name",
        description: "Generate release name",
      },
    ],
  },
]

export default function HelmCheatsheetPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <header className="mb-16 max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
            <Ship className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-5xl font-bold gradient-text">Helm Cheatsheet</h1>
        </div>
        <p className="text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Essential Helm commands and common operations for Kubernetes package
          management and deployment.
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