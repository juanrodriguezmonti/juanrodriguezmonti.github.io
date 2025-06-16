import { Metadata } from "next"
import { Container } from "lucide-react"
import { CopyableCommand } from "@/components/copyable-command"

export const metadata: Metadata = {
  title: "Docker Cheatsheet | Juan Rodriguez Monti",
  description: "Quick reference guide for Docker commands and best practices",
}

const sections = [
  {
    title: "Container Management",
    commands: [
      {
        command: "docker run -d --name container_name image",
        description: "Run container in background",
      },
      {
        command: "docker ps -a",
        description: "List all containers",
      },
      {
        command: "docker stop container_name",
        description: "Stop container",
      },
      {
        command: "docker rm container_name",
        description: "Remove container",
      },
      {
        command: "docker logs container_name",
        description: "View container logs",
      },
    ],
  },
  {
    title: "Image Management",
    commands: [
      {
        command: "docker build -t image_name .",
        description: "Build image from Dockerfile",
      },
      {
        command: "docker images",
        description: "List images",
      },
      {
        command: "docker pull image_name",
        description: "Pull image from registry",
      },
      {
        command: "docker push image_name",
        description: "Push image to registry",
      },
      {
        command: "docker rmi image_name",
        description: "Remove image",
      },
    ],
  },
  {
    title: "Networking",
    commands: [
      {
        command: "docker network ls",
        description: "List networks",
      },
      {
        command: "docker network create network_name",
        description: "Create network",
      },
      {
        command: "docker run --network network_name image",
        description: "Run container in network",
      },
      {
        command: "docker network connect network_name container_name",
        description: "Connect container to network",
      },
      {
        command: "docker network inspect network_name",
        description: "Inspect network",
      },
    ],
  },
  {
    title: "Volumes",
    commands: [
      {
        command: "docker volume ls",
        description: "List volumes",
      },
      {
        command: "docker volume create volume_name",
        description: "Create volume",
      },
      {
        command: "docker run -v volume_name:/path image",
        description: "Mount volume",
      },
      {
        command: "docker run -v /host/path:/container/path image",
        description: "Bind mount",
      },
      {
        command: "docker volume rm volume_name",
        description: "Remove volume",
      },
    ],
  },
  {
    title: "Docker Compose",
    commands: [
      {
        command: "docker-compose up -d",
        description: "Start services in background",
      },
      {
        command: "docker-compose down",
        description: "Stop and remove services",
      },
      {
        command: "docker-compose ps",
        description: "List services",
      },
      {
        command: "docker-compose logs service_name",
        description: "View service logs",
      },
      {
        command: "docker-compose build",
        description: "Build services",
      },
    ],
  },
  {
    title: "Best Practices",
    commands: [
      {
        command: "docker run --rm image",
        description: "Remove container after exit",
      },
      {
        command: "docker run --read-only image",
        description: "Run container in read-only mode",
      },
      {
        command: "docker run --security-opt no-new-privileges image",
        description: "Disable privilege escalation",
      },
      {
        command: "docker run --memory=512m image",
        description: "Limit memory usage",
      },
      {
        command: "docker run --cpus=2 image",
        description: "Limit CPU usage",
      },
    ],
  },
]

export default function DockerCheatsheetPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <header className="mb-16 max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
            <Container className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-5xl font-bold gradient-text">Docker Cheatsheet</h1>
        </div>
        <p className="text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Essential Docker commands and best practices for container management,
          networking, and deployment.
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