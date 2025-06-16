import { Metadata } from "next"
import { Terminal } from "lucide-react"
import { CopyableCommand } from "@/components/copyable-command"

export const metadata: Metadata = {
  title: "Linux Cheatsheet | Juan Rodriguez Monti",
  description: "Quick reference guide for Linux commands and system administration",
}

const sections = [
  {
    title: "File System",
    commands: [
      {
        command: "ls -la",
        description: "List all files with details",
      },
      {
        command: "find . -name \"*.txt\"",
        description: "Find files by name",
      },
      {
        command: "du -sh *",
        description: "Show directory sizes",
      },
      {
        command: "df -h",
        description: "Show disk space usage",
      },
      {
        command: "chmod 755 file",
        description: "Set file permissions",
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
        command: "top",
        description: "Interactive process viewer",
      },
      {
        command: "kill -9 PID",
        description: "Force kill process",
      },
      {
        command: "systemctl status service",
        description: "Check service status",
      },
      {
        command: "journalctl -u service",
        description: "View service logs",
      },
    ],
  },
  {
    title: "Network",
    commands: [
      {
        command: "netstat -tulpn",
        description: "List network connections",
      },
      {
        command: "ifconfig",
        description: "Show network interfaces",
      },
      {
        command: "ping host",
        description: "Test network connectivity",
      },
      {
        command: "traceroute host",
        description: "Trace network route",
      },
      {
        command: "dig domain",
        description: "DNS lookup",
      },
    ],
  },
  {
    title: "Package Management",
    commands: [
      {
        command: "apt update && apt upgrade",
        description: "Update packages (Debian/Ubuntu)",
      },
      {
        command: "yum update",
        description: "Update packages (RHEL/CentOS)",
      },
      {
        command: "apt install package",
        description: "Install package (Debian/Ubuntu)",
      },
      {
        command: "yum install package",
        description: "Install package (RHEL/CentOS)",
      },
      {
        command: "dpkg -l | grep package",
        description: "Check if package is installed",
      },
    ],
  },
  {
    title: "Text Processing",
    commands: [
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
      {
        command: "uniq file",
        description: "Remove duplicate lines",
      },
    ],
  },
  {
    title: "System Info",
    commands: [
      {
        command: "uname -a",
        description: "Show system information",
      },
      {
        command: "free -h",
        description: "Show memory usage",
      },
      {
        command: "lscpu",
        description: "Show CPU information",
      },
      {
        command: "lsblk",
        description: "List block devices",
      },
      {
        command: "dmesg | tail",
        description: "Show recent system messages",
      },
    ],
  },
]

export default function LinuxCheatsheetPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <header className="mb-16 max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-xl">
            <Terminal className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-5xl font-bold gradient-text">Linux Cheatsheet</h1>
        </div>
        <p className="text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Essential Linux commands for file system management, process control,
          networking, and system administration. Master the command line.
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