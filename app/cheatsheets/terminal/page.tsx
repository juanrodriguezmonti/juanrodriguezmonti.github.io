import { Metadata } from "next"
import { Terminal, ArrowLeft } from "lucide-react"
import { CopyableCommand } from "@/components/copyable-command"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terminal Cheatsheet | Juan Rodriguez Monti",
  description: "Quick reference guide for terminal commands and shortcuts",
}

const sections = [
  {
    title: "File Operations",
    commands: [
      {
        command: "ls -la",
        description: "List all files with details",
      },
      {
        command: "cp file1 file2",
        description: "Copy file1 to file2",
      },
      {
        command: "mv file1 file2",
        description: "Move/rename file1 to file2",
      },
      {
        command: "rm -rf dir",
        description: "Remove directory recursively",
      },
      {
        command: "chmod +x file",
        description: "Make file executable",
      },
    ],
  },
  {
    title: "Text Processing",
    commands: [
      {
        command: "cat file",
        description: "Display file contents",
      },
      {
        command: "grep pattern file",
        description: "Search for pattern in file",
      },
      {
        command: "sed 's/old/new/g' file",
        description: "Replace text in file",
      },
      {
        command: "awk '{print $1}' file",
        description: "Print first column",
      },
      {
        command: "sort file",
        description: "Sort file contents",
      },
    ],
  },
  {
    title: "Process Management",
    commands: [
      {
        command: "ps aux",
        description: "List all processes",
      },
      {
        command: "kill -9 pid",
        description: "Force kill process",
      },
      {
        command: "top",
        description: "Monitor system processes",
      },
      {
        command: "htop",
        description: "Interactive process viewer",
      },
      {
        command: "bg %1",
        description: "Run job in background",
      },
    ],
  },
  {
    title: "System Info",
    commands: [
      {
        command: "uname -a",
        description: "Show system info",
      },
      {
        command: "df -h",
        description: "Show disk usage",
      },
      {
        command: "free -h",
        description: "Show memory usage",
      },
      {
        command: "uptime",
        description: "Show system uptime",
      },
      {
        command: "whoami",
        description: "Show current user",
      },
    ],
  },
  {
    title: "Terminal Shortcuts",
    commands: [
      {
        command: "Ctrl + C",
        description: "Interrupt process",
      },
      {
        command: "Ctrl + D",
        description: "End of file/Exit",
      },
      {
        command: "Ctrl + Z",
        description: "Suspend process",
      },
      {
        command: "Ctrl + R",
        description: "Search history",
      },
      {
        command: "Ctrl + L",
        description: "Clear screen",
      },
    ],
  },
  {
    title: "Navigation",
    commands: [
      {
        command: "cd ~",
        description: "Go to home directory",
      },
      {
        command: "cd -",
        description: "Go to previous directory",
      },
      {
        command: "pushd dir",
        description: "Save and change directory",
      },
      {
        command: "popd",
        description: "Return to saved directory",
      },
      {
        command: "pwd",
        description: "Show current directory",
      },
    ],
  },
]

export default function TerminalCheatsheetPage() {
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
          <div className="p-3 bg-gray-50 dark:bg-gray-900/20 rounded-xl">
            <Terminal className="w-8 h-8 text-gray-600 dark:text-gray-400" />
          </div>
          <h1 className="text-5xl font-bold gradient-text">Terminal Cheatsheet</h1>
        </div>
        <p className="text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Essential terminal commands and shortcuts for efficient command-line
          usage.
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