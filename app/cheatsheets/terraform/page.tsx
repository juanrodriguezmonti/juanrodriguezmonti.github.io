import { Metadata } from "next"
import { FileCode } from "lucide-react"
import { CopyableCommand } from "@/components/copyable-command"

export const metadata: Metadata = {
  title: "Terraform Cheatsheet | Juan Rodriguez Monti",
  description: "Quick reference guide for Terraform commands and common operations",
}

const sections = [
  {
    title: "Basic Commands",
    commands: [
      {
        command: "terraform init",
        description: "Initialize Terraform working directory",
      },
      {
        command: "terraform plan",
        description: "Show execution plan",
      },
      {
        command: "terraform apply",
        description: "Apply changes",
      },
      {
        command: "terraform destroy",
        description: "Destroy infrastructure",
      },
      {
        command: "terraform validate",
        description: "Validate configuration files",
      },
    ],
  },
  {
    title: "State Management",
    commands: [
      {
        command: "terraform state list",
        description: "List resources in state",
      },
      {
        command: "terraform state show resource",
        description: "Show resource details",
      },
      {
        command: "terraform state mv source destination",
        description: "Move resource in state",
      },
      {
        command: "terraform state pull",
        description: "Pull current state",
      },
      {
        command: "terraform state push state.json",
        description: "Push state to backend",
      },
    ],
  },
  {
    title: "Workspace Management",
    commands: [
      {
        command: "terraform workspace list",
        description: "List workspaces",
      },
      {
        command: "terraform workspace new name",
        description: "Create new workspace",
      },
      {
        command: "terraform workspace select name",
        description: "Switch workspace",
      },
      {
        command: "terraform workspace delete name",
        description: "Delete workspace",
      },
      {
        command: "terraform workspace show",
        description: "Show current workspace",
      },
    ],
  },
  {
    title: "Output and Variables",
    commands: [
      {
        command: "terraform output",
        description: "Show outputs",
      },
      {
        command: "terraform output -json",
        description: "Show outputs as JSON",
      },
      {
        command: "terraform output variable_name",
        description: "Show specific output",
      },
      {
        command: "terraform var name=value",
        description: "Set variable value",
      },
      {
        command: "terraform var-file file.tfvars",
        description: "Load variables from file",
      },
    ],
  },
  {
    title: "Import and Export",
    commands: [
      {
        command: "terraform import resource.id resource_type",
        description: "Import existing resource",
      },
      {
        command: "terraform import -var-file=prod.tfvars",
        description: "Import with variables",
      },
      {
        command: "terraform graph",
        description: "Generate dependency graph",
      },
      {
        command: "terraform show",
        description: "Show current state",
      },
      {
        command: "terraform show -json",
        description: "Show state as JSON",
      },
    ],
  },
  {
    title: "Best Practices",
    commands: [
      {
        command: "terraform fmt",
        description: "Format configuration files",
      },
      {
        command: "terraform get -update",
        description: "Update modules",
      },
      {
        command: "terraform force-unlock LOCK_ID",
        description: "Force unlock state",
      },
      {
        command: "terraform providers",
        description: "Show provider requirements",
      },
      {
        command: "terraform version",
        description: "Show Terraform version",
      },
    ],
  },
]

export default function TerraformCheatsheetPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <header className="mb-16 max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
            <FileCode className="w-8 h-8 text-purple-600 dark:text-purple-400" />
          </div>
          <h1 className="text-5xl font-bold gradient-text">Terraform Cheatsheet</h1>
        </div>
        <p className="text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Essential Terraform commands and common operations for infrastructure
          as code and cloud resource management.
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