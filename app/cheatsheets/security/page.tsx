import { Metadata } from "next"
import { Shield } from "lucide-react"
import { CopyableCommand } from "@/components/copyable-command"

export const metadata: Metadata = {
  title: "Security Cheatsheet | Juan Rodriguez Monti",
  description: "Quick reference guide for security best practices, encryption, and authentication",
}

const sections = [
  {
    title: "SSL/TLS",
    commands: [
      {
        command: "openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes",
        description: "Generate self-signed SSL certificate",
      },
      {
        command: "openssl x509 -in cert.pem -text -noout",
        description: "View certificate details",
      },
      {
        command: "openssl s_client -connect example.com:443",
        description: "Test SSL connection",
      },
      {
        command: "openssl verify cert.pem",
        description: "Verify certificate",
      },
      {
        command: "openssl pkcs12 -export -out certificate.pfx -inkey privateKey.key -in certificate.crt",
        description: "Convert certificate to PKCS#12 format",
      },
    ],
  },
  {
    title: "SSH",
    commands: [
      {
        command: "ssh-keygen -t ed25519 -C \"your_email@example.com\"",
        description: "Generate SSH key pair",
      },
      {
        command: "ssh-copy-id user@remote_host",
        description: "Copy SSH key to remote server",
      },
      {
        command: "ssh -i /path/to/private_key user@remote_host",
        description: "Connect using specific private key",
      },
      {
        command: "ssh -L 8080:localhost:80 user@remote_host",
        description: "Create SSH tunnel",
      },
      {
        command: "ssh -D 8080 user@remote_host",
        description: "Create SOCKS proxy",
      },
    ],
  },
  {
    title: "Password Management",
    commands: [
      {
        command: "openssl rand -base64 32",
        description: "Generate secure random password",
      },
      {
        command: "echo -n 'password' | openssl dgst -sha256",
        description: "Generate SHA-256 hash",
      },
      {
        command: "echo -n 'password' | openssl dgst -sha512",
        description: "Generate SHA-512 hash",
      },
      {
        command: "openssl passwd -1 'password'",
        description: "Generate MD5 password hash",
      },
      {
        command: "openssl rand -hex 16",
        description: "Generate random hex string",
      },
    ],
  },
  {
    title: "Network Security",
    commands: [
      {
        command: "nmap -sV -p- <target>",
        description: "Scan all ports and detect versions",
      },
      {
        command: "nmap -sS -p 80,443 <target>",
        description: "TCP SYN scan specific ports",
      },
      {
        command: "nmap -sU -p 53,123 <target>",
        description: "UDP scan specific ports",
      },
      {
        command: "nmap -A -T4 <target>",
        description: "Aggressive scan with timing",
      },
      {
        command: "nmap --script ssl-cert <target>",
        description: "Check SSL certificate",
      },
    ],
  },
  {
    title: "File Encryption",
    commands: [
      {
        command: "gpg --gen-key",
        description: "Generate GPG key pair",
      },
      {
        command: "gpg --encrypt --recipient user@example.com file.txt",
        description: "Encrypt file for specific recipient",
      },
      {
        command: "gpg --decrypt file.txt.gpg",
        description: "Decrypt GPG encrypted file",
      },
      {
        command: "gpg --export --armor user@example.com > public.key",
        description: "Export public key",
      },
      {
        command: "gpg --import public.key",
        description: "Import public key",
      },
    ],
  },
  {
    title: "Security Tools",
    commands: [
      {
        command: "curl -I https://example.com",
        description: "Check security headers",
      },
      {
        command: "openssl s_client -connect example.com:443 -servername example.com",
        description: "Check SSL/TLS configuration",
      },
      {
        command: "dig +short TXT _dmarc.example.com",
        description: "Check DMARC record",
      },
      {
        command: "dig +short MX example.com",
        description: "Check MX records",
      },
      {
        command: "dig +short TXT example.com",
        description: "Check TXT records",
      },
    ],
  },
]

export default function SecurityCheatsheetPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <header className="mb-16 max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-xl">
            <Shield className="w-8 h-8 text-red-600 dark:text-red-400" />
          </div>
          <h1 className="text-5xl font-bold gradient-text">Security Cheatsheet</h1>
        </div>
        <p className="text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Essential security commands and best practices for SSL/TLS, SSH, encryption,
          and network security. Keep your systems and data protected.
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