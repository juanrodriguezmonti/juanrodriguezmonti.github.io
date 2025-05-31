"use client"

import { useState, useEffect } from "react"

const commands = ["aws --version", "kubectl get pods", "terraform plan", "docker ps", "helm list"]

const responses = {
  "aws --version": "aws-cli/2.15.0 Python/3.11.6",
  "kubectl get pods":
    "NAME                     READY   STATUS    RESTARTS   AGE\napi-deployment-abc123    2/2     Running   0          2d\nworker-deployment-def456 3/3     Running   0          1d",
  "terraform plan":
    "Plan: 12 to add, 3 to change, 0 to destroy.\n\nChanges to Outputs:\n  + cluster_endpoint = (known after apply)",
  "docker ps":
    'CONTAINER ID   IMAGE           COMMAND                  STATUS\nabc123def456   nginx:latest    "/docker-entrypoint…"   Up 2 hours\ndef456ghi789   redis:alpine    "docker-entrypoint.s…"   Up 1 hour',
  "helm list":
    "NAME            NAMESPACE       REVISION        UPDATED                 STATUS          CHART\napi-service     production      3               2024-01-15 10:30:00     deployed        api-chart-1.2.0",
}

export default function Terminal() {
  const [currentCommand, setCurrentCommand] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const command = commands[currentCommand]
    let index = 0

    const typeCommand = () => {
      if (index < command.length) {
        setDisplayText(command.slice(0, index + 1))
        index++
        setTimeout(typeCommand, Math.random() * 50 + 50) // Variable typing speed
      } else {
        setIsTyping(false)
        setTimeout(() => {
          setDisplayText((prev) => prev + "\n" + responses[command as keyof typeof responses])
          setTimeout(() => {
            setCurrentCommand((prev) => (prev + 1) % commands.length)
            setDisplayText("")
            setIsTyping(true)
          }, 2000)
        }, 500)
      }
    }

    typeCommand()
  }, [currentCommand])

  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="terminal-dot terminal-dot-red"></div>
        <div className="terminal-dot terminal-dot-yellow"></div>
        <div className="terminal-dot terminal-dot-green"></div>
        <span className="text-gray-400 ml-2 text-xs">terminal</span>
      </div>
      <div className="terminal-content">
        <span className="text-blue-400">juan@dev</span>
        <span className="text-white">:</span>
        <span className="text-purple-400">~</span>
        <span className="text-white">$ </span>
        <span>{displayText}</span>
        {showCursor && isTyping && <span className="cursor"></span>}
      </div>
    </div>
  )
}
