"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

interface CopyableCommandProps {
  command: string
}

export function CopyableCommand({ command }: CopyableCommandProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group relative">
      <div className="flex flex-col">
        <code 
          className="text-sm bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg font-mono text-gray-900 dark:text-gray-100 group-hover:bg-gray-100 dark:group-hover:bg-gray-900/70 transition-colors cursor-pointer flex items-center justify-between"
          onClick={copyToClipboard}
        >
          <span>{command}</span>
          {copied ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
          )}
        </code>
      </div>
    </div>
  )
} 