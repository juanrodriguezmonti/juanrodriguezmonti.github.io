import { Metadata } from "next"
import { Wifi, ArrowLeft } from "lucide-react"
import { CopyableCommand } from "@/components/copyable-command"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Networking Cheatsheet | Juan Rodriguez Monti",
  description: "Quick reference guide for networking concepts, protocols, and commands",
}

const sections = [
  {
    title: "Network Protocols",
    commands: [
      {
        command: "HTTP/HTTPS",
        description: "Application layer protocol for web",
      },
      {
        command: "TCP",
        description: "Transport layer, reliable connection",
      },
      {
        command: "UDP",
        description: "Transport layer, connectionless",
      },
      {
        command: "IP",
        description: "Network layer protocol",
      },
      {
        command: "DNS",
        description: "Domain Name System",
      },
    ],
  },
  {
    title: "Network Commands",
    commands: [
      {
        command: "ping hostname",
        description: "Test network connectivity",
      },
      {
        command: "traceroute hostname",
        description: "Trace route to host",
      },
      {
        command: "netstat -tuln",
        description: "Show listening ports",
      },
      {
        command: "nslookup domain",
        description: "DNS lookup",
      },
      {
        command: "dig domain",
        description: "DNS information",
      },
    ],
  },
  {
    title: "Network Security",
    commands: [
      {
        command: "iptables -L",
        description: "List firewall rules",
      },
      {
        command: "ufw status",
        description: "Check firewall status",
      },
      {
        command: "nmap -sV host",
        description: "Port scan with version",
      },
      {
        command: "tcpdump -i eth0",
        description: "Capture network traffic",
      },
      {
        command: "openssl s_client -connect host:443",
        description: "Test SSL connection",
      },
    ],
  },
  {
    title: "Network Configuration",
    commands: [
      {
        command: "ifconfig",
        description: "Network interface config",
      },
      {
        command: "ip addr",
        description: "Show IP addresses",
      },
      {
        command: "route -n",
        description: "Show routing table",
      },
      {
        command: "hostname -I",
        description: "Show IP address",
      },
      {
        command: "nmcli device show",
        description: "Network manager info",
      },
    ],
  },
  {
    title: "Network Troubleshooting",
    commands: [
      {
        command: "mtr hostname",
        description: "Network diagnostic tool",
      },
      {
        command: "telnet host port",
        description: "Test port connectivity",
      },
      {
        command: "curl -I url",
        description: "Check HTTP headers",
      },
      {
        command: "wireshark",
        description: "Network protocol analyzer",
      },
      {
        command: "ss -tuln",
        description: "Socket statistics",
      },
    ],
  },
  {
    title: "Network Services",
    commands: [
      {
        command: "systemctl status nginx",
        description: "Check web server status",
      },
      {
        command: "systemctl status sshd",
        description: "Check SSH service",
      },
      {
        command: "systemctl status dnsmasq",
        description: "Check DNS service",
      },
      {
        command: "systemctl status dhcpd",
        description: "Check DHCP service",
      },
      {
        command: "systemctl status iptables",
        description: "Check firewall service",
      },
    ],
  },
]

export default function NetworkingCheatsheetPage() {
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
          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
            <Wifi className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-5xl font-bold gradient-text">Networking Cheatsheet</h1>
        </div>
        <p className="text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Essential networking concepts, protocols, and commands for system
          administrators and developers.
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