import { Metadata } from "next"
import { GitBranch } from "lucide-react"
import { CopyableCommand } from "@/components/copyable-command"

export const metadata: Metadata = {
  title: "Git Cheatsheet | Juan Rodriguez Monti",
  description: "Quick reference guide for Git commands and workflow patterns",
}

const sections = [
  {
    title: "Basic Commands",
    commands: [
      {
        command: "git init",
        description: "Initialize a new Git repository",
      },
      {
        command: "git clone <url>",
        description: "Clone a repository",
      },
      {
        command: "git status",
        description: "Check status of working directory",
      },
      {
        command: "git add <file>",
        description: "Stage changes for commit",
      },
      {
        command: "git commit -m \"message\"",
        description: "Commit staged changes",
      },
      {
        command: "git push",
        description: "Push commits to remote",
      },
      {
        command: "git pull",
        description: "Pull changes from remote",
      },
    ],
  },
  {
    title: "Branching & Merging",
    commands: [
      {
        command: "git branch",
        description: "List all local branches",
      },
      {
        command: "git branch <name>",
        description: "Create a new branch",
      },
      {
        command: "git checkout <branch>",
        description: "Switch to a branch",
      },
      {
        command: "git checkout -b <name>",
        description: "Create and switch to new branch",
      },
      {
        command: "git merge <branch>",
        description: "Merge branch into current branch",
      },
      {
        command: "git branch -d <branch>",
        description: "Delete a branch",
      },
    ],
  },
  {
    title: "Advanced Operations",
    commands: [
      {
        command: "git stash",
        description: "Temporarily store changes",
      },
      {
        command: "git stash pop",
        description: "Apply and remove stashed changes",
      },
      {
        command: "git reset <file>",
        description: "Unstage changes",
      },
      {
        command: "git reset --hard HEAD",
        description: "Discard all local changes",
      },
      {
        command: "git log",
        description: "View commit history",
      },
      {
        command: "git rebase <branch>",
        description: "Reapply commits on top of another branch",
      },
    ],
  },
  {
    title: "Remote Operations",
    commands: [
      {
        command: "git remote -v",
        description: "List remote repositories",
      },
      {
        command: "git remote add origin <url>",
        description: "Add a remote repository",
      },
      {
        command: "git fetch",
        description: "Download objects and refs from remote",
      },
      {
        command: "git pull --rebase",
        description: "Pull with rebase instead of merge",
      },
      {
        command: "git push -u origin <branch>",
        description: "Push and set upstream branch",
      },
    ],
  },
]

export default function GitCheatsheetPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <header className="mb-16 max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-xl">
            <GitBranch className="w-8 h-8 text-red-600 dark:text-red-400" />
          </div>
          <h1 className="text-5xl font-bold gradient-text">Git Cheatsheet</h1>
        </div>
        <p className="text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Essential Git commands and workflow patterns for version control.
          Copy commands with a click and keep your development workflow smooth.
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