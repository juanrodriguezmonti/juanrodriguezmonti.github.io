import { Metadata } from "next"
import { Code2 } from "lucide-react"
import { CopyableCommand } from "@/components/copyable-command"

export const metadata: Metadata = {
  title: "Python Cheatsheet | Juan Rodriguez Monti",
  description: "Quick reference guide for Python syntax, data structures, and common libraries",
}

const sections = [
  {
    title: "Data Structures",
    commands: [
      {
        command: "my_list = [1, 2, 3]",
        description: "Create a list",
      },
      {
        command: "my_dict = {'key': 'value'}",
        description: "Create a dictionary",
      },
      {
        command: "my_set = {1, 2, 3}",
        description: "Create a set",
      },
      {
        command: "my_tuple = (1, 2, 3)",
        description: "Create a tuple",
      },
      {
        command: "from collections import defaultdict, Counter",
        description: "Import useful collections",
      },
    ],
  },
  {
    title: "List Comprehensions",
    commands: [
      {
        command: "[x for x in range(10)]",
        description: "Basic list comprehension",
      },
      {
        command: "[x for x in range(10) if x % 2 == 0]",
        description: "List comprehension with condition",
      },
      {
        command: "[x if x % 2 == 0 else -x for x in range(10)]",
        description: "List comprehension with if-else",
      },
      {
        command: "[[i for i in range(3)] for _ in range(3)]",
        description: "Nested list comprehension",
      },
      {
        command: "{x: x**2 for x in range(5)}",
        description: "Dictionary comprehension",
      },
    ],
  },
  {
    title: "Functions",
    commands: [
      {
        command: "def func(x, y=0, *args, **kwargs):",
        description: "Function definition with all parameter types",
      },
      {
        command: "lambda x: x**2",
        description: "Lambda function",
      },
      {
        command: "@decorator\ndef func(): pass",
        description: "Function decorator",
      },
      {
        command: "def generator():\n    yield 1",
        description: "Generator function",
      },
      {
        command: "async def async_func():",
        description: "Async function definition",
      },
    ],
  },
  {
    title: "File Operations",
    commands: [
      {
        command: "with open('file.txt', 'r') as f:",
        description: "Read file safely",
      },
      {
        command: "with open('file.txt', 'w') as f:",
        description: "Write to file safely",
      },
      {
        command: "import json\njson.dumps(data)",
        description: "Convert to JSON string",
      },
      {
        command: "import pickle\npickle.dump(obj, file)",
        description: "Serialize object to file",
      },
      {
        command: "import csv\ncsv.writer(file)",
        description: "Write CSV file",
      },
    ],
  },
  {
    title: "Common Libraries",
    commands: [
      {
        command: "import numpy as np",
        description: "Import NumPy for numerical computing",
      },
      {
        command: "import pandas as pd",
        description: "Import Pandas for data analysis",
      },
      {
        command: "import requests",
        description: "Import Requests for HTTP",
      },
      {
        command: "from datetime import datetime",
        description: "Import datetime for date handling",
      },
      {
        command: "import re",
        description: "Import regex module",
      },
    ],
  },
  {
    title: "Error Handling",
    commands: [
      {
        command: "try:\n    code\nexcept Exception as e:",
        description: "Basic try-except",
      },
      {
        command: "try:\n    code\nfinally:",
        description: "Try-finally block",
      },
      {
        command: "with contextlib.suppress(Exception):",
        description: "Suppress exceptions",
      },
      {
        command: "raise ValueError('message')",
        description: "Raise exception",
      },
      {
        command: "assert condition, 'message'",
        description: "Assertion with message",
      },
    ],
  },
]

export default function PythonCheatsheetPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <header className="mb-16 max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
            <Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-5xl font-bold gradient-text">Python Cheatsheet</h1>
        </div>
        <p className="text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Essential Python syntax, data structures, and common libraries.
          Quick reference for Python developers.
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