import { Metadata } from "next"
import { Network } from "lucide-react"
import { CopyableCommand } from "@/components/copyable-command"

export const metadata: Metadata = {
  title: "Kubernetes Cheatsheet | Juan Rodriguez Monti",
  description: "Quick reference guide for Kubernetes commands and common operations",
}

const sections = [
  {
    title: "Basic Commands",
    commands: [
      {
        command: "kubectl get pods",
        description: "List all pods",
      },
      {
        command: "kubectl get deployments",
        description: "List all deployments",
      },
      {
        command: "kubectl get services",
        description: "List all services",
      },
      {
        command: "kubectl get nodes",
        description: "List all nodes",
      },
      {
        command: "kubectl get namespaces",
        description: "List all namespaces",
      },
    ],
  },
  {
    title: "Resource Management",
    commands: [
      {
        command: "kubectl apply -f file.yaml",
        description: "Create/update resources",
      },
      {
        command: "kubectl delete -f file.yaml",
        description: "Delete resources",
      },
      {
        command: "kubectl scale deployment name --replicas=3",
        description: "Scale deployment",
      },
      {
        command: "kubectl rollout status deployment/name",
        description: "Check rollout status",
      },
      {
        command: "kubectl rollout undo deployment/name",
        description: "Rollback deployment",
      },
    ],
  },
  {
    title: "Debugging",
    commands: [
      {
        command: "kubectl describe pod name",
        description: "Describe pod details",
      },
      {
        command: "kubectl logs pod-name",
        description: "View pod logs",
      },
      {
        command: "kubectl exec -it pod-name -- /bin/bash",
        description: "Execute command in pod",
      },
      {
        command: "kubectl port-forward pod-name 8080:80",
        description: "Port forward to pod",
      },
      {
        command: "kubectl get events",
        description: "View cluster events",
      },
    ],
  },
  {
    title: "Configuration",
    commands: [
      {
        command: "kubectl config view",
        description: "View kubeconfig",
      },
      {
        command: "kubectl config use-context name",
        description: "Switch context",
      },
      {
        command: "kubectl config set-context name --namespace=ns",
        description: "Set namespace in context",
      },
      {
        command: "kubectl config get-contexts",
        description: "List contexts",
      },
      {
        command: "kubectl config current-context",
        description: "Show current context",
      },
    ],
  },
  {
    title: "Advanced Operations",
    commands: [
      {
        command: "kubectl get pods -o wide",
        description: "Show pod IPs and nodes",
      },
      {
        command: "kubectl get pods -o yaml",
        description: "Show pod YAML",
      },
      {
        command: "kubectl get pods --field-selector status.phase=Running",
        description: "Filter pods by status",
      },
      {
        command: "kubectl get pods --sort-by=.metadata.creationTimestamp",
        description: "Sort pods by creation time",
      },
      {
        command: "kubectl get pods -l app=nginx",
        description: "Filter pods by label",
      },
    ],
  },
  {
    title: "Resource Types",
    commands: [
      {
        command: "kubectl api-resources",
        description: "List all resource types",
      },
      {
        command: "kubectl get crd",
        description: "List custom resources",
      },
      {
        command: "kubectl get all",
        description: "List all resources",
      },
      {
        command: "kubectl get all -n namespace",
        description: "List all in namespace",
      },
      {
        command: "kubectl get all --all-namespaces",
        description: "List all in all namespaces",
      },
    ],
  },
]

export default function KubernetesCheatsheetPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <header className="mb-16 max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
            <Network className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h1 className="text-5xl font-bold gradient-text">Kubernetes Cheatsheet</h1>
        </div>
        <p className="text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Essential Kubernetes commands and common operations for cluster management,
          debugging, and resource configuration.
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