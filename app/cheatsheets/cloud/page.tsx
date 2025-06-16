import { Metadata } from "next"
import { Cloud } from "lucide-react"
import { CopyableCommand } from "@/components/copyable-command"

export const metadata: Metadata = {
  title: "Cloud Native Cheatsheet | Juan Rodriguez Monti",
  description: "Quick reference guide for Kubernetes, Docker, and cloud platform commands",
}

const sections = [
  {
    title: "Kubernetes Basics",
    commands: [
      {
        command: "kubectl get pods",
        description: "List all pods in the current namespace",
      },
      {
        command: "kubectl get pods -A",
        description: "List pods in all namespaces",
      },
      {
        command: "kubectl describe pod <pod-name>",
        description: "Show detailed information about a pod",
      },
      {
        command: "kubectl logs <pod-name>",
        description: "View pod logs",
      },
      {
        command: "kubectl exec -it <pod-name> -- /bin/bash",
        description: "Get an interactive shell in a pod",
      },
      {
        command: "kubectl apply -f <file>",
        description: "Apply a configuration file",
      },
      {
        command: "kubectl delete -f <file>",
        description: "Delete resources defined in a file",
      },
    ],
  },
  {
    title: "Kubernetes Advanced",
    commands: [
      {
        command: "kubectl port-forward <pod-name> <local-port>:<pod-port>",
        description: "Forward a local port to a pod",
      },
      {
        command: "kubectl scale deployment <deployment-name> --replicas=<number>",
        description: "Scale a deployment",
      },
      {
        command: "kubectl rollout status deployment/<deployment-name>",
        description: "Check deployment rollout status",
      },
      {
        command: "kubectl rollout undo deployment/<deployment-name>",
        description: "Rollback a deployment",
      },
      {
        command: "kubectl get events --sort-by='.lastTimestamp'",
        description: "View cluster events sorted by time",
      },
      {
        command: "kubectl top nodes",
        description: "Show resource usage of nodes",
      },
      {
        command: "kubectl top pods",
        description: "Show resource usage of pods",
      },
    ],
  },
  {
    title: "Docker Commands",
    commands: [
      {
        command: "docker build -t <image-name> .",
        description: "Build a Docker image",
      },
      {
        command: "docker run -d -p <host-port>:<container-port> <image-name>",
        description: "Run a container in detached mode with port mapping",
      },
      {
        command: "docker ps -a",
        description: "List all containers (including stopped)",
      },
      {
        command: "docker logs <container-id>",
        description: "View container logs",
      },
      {
        command: "docker exec -it <container-id> /bin/bash",
        description: "Get an interactive shell in a container",
      },
      {
        command: "docker-compose up -d",
        description: "Start services in detached mode",
      },
      {
        command: "docker system prune -a",
        description: "Remove all unused containers, networks, images",
      },
    ],
  },
  {
    title: "AWS CLI",
    commands: [
      {
        command: "aws configure",
        description: "Configure AWS credentials",
      },
      {
        command: "aws s3 ls",
        description: "List S3 buckets",
      },
      {
        command: "aws ec2 describe-instances",
        description: "List EC2 instances",
      },
      {
        command: "aws eks list-clusters",
        description: "List EKS clusters",
      },
      {
        command: "aws rds describe-db-instances",
        description: "List RDS instances",
      },
      {
        command: "aws cloudformation list-stacks",
        description: "List CloudFormation stacks",
      },
      {
        command: "aws iam list-users",
        description: "List IAM users",
      },
    ],
  },
  {
    title: "Terraform",
    commands: [
      {
        command: "terraform init",
        description: "Initialize a Terraform working directory",
      },
      {
        command: "terraform plan",
        description: "Show execution plan",
      },
      {
        command: "terraform apply",
        description: "Apply changes to infrastructure",
      },
      {
        command: "terraform destroy",
        description: "Destroy infrastructure",
      },
      {
        command: "terraform state list",
        description: "List resources in state",
      },
      {
        command: "terraform import <resource> <id>",
        description: "Import existing infrastructure",
      },
      {
        command: "terraform output",
        description: "Show output values",
      },
    ],
  },
  {
    title: "Helm",
    commands: [
      {
        command: "helm repo add <name> <url>",
        description: "Add a chart repository",
      },
      {
        command: "helm repo update",
        description: "Update chart repositories",
      },
      {
        command: "helm install <release-name> <chart>",
        description: "Install a chart",
      },
      {
        command: "helm list",
        description: "List releases",
      },
      {
        command: "helm upgrade <release-name> <chart>",
        description: "Upgrade a release",
      },
      {
        command: "helm rollback <release-name> <revision>",
        description: "Rollback a release",
      },
      {
        command: "helm uninstall <release-name>",
        description: "Uninstall a release",
      },
    ],
  },
]

export default function CloudCheatsheetPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <header className="mb-16 max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-xl">
            <Cloud className="w-8 h-8 text-red-600 dark:text-red-400" />
          </div>
          <h1 className="text-5xl font-bold gradient-text">Cloud Native Cheatsheet</h1>
        </div>
        <p className="text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Essential commands for Kubernetes, Docker, AWS, Terraform, and Helm.
          Keep your cloud-native development workflow efficient.
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