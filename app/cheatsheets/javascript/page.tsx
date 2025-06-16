import { Metadata } from "next"
import { Code2 } from "lucide-react"
import { CopyableCommand } from "@/components/copyable-command"

export const metadata: Metadata = {
  title: "JavaScript Cheatsheet | Juan Rodriguez Monti",
  description: "Quick reference guide for JavaScript syntax, modern features, and common patterns",
}

const sections = [
  {
    title: "Modern JavaScript",
    commands: [
      {
        command: "const { name, age } = person",
        description: "Object destructuring",
      },
      {
        command: "const [first, ...rest] = array",
        description: "Array destructuring with rest",
      },
      {
        command: "const sum = (a, b) => a + b",
        description: "Arrow function",
      },
      {
        command: "const obj = { name, age }",
        description: "Object shorthand",
      },
      {
        command: "const arr = [...oldArr, newItem]",
        description: "Spread operator",
      },
    ],
  },
  {
    title: "Array Methods",
    commands: [
      {
        command: "array.map(x => x * 2)",
        description: "Transform array elements",
      },
      {
        command: "array.filter(x => x > 0)",
        description: "Filter array elements",
      },
      {
        command: "array.reduce((acc, curr) => acc + curr, 0)",
        description: "Reduce array to single value",
      },
      {
        command: "array.find(x => x.id === id)",
        description: "Find first matching element",
      },
      {
        command: "array.some(x => x > 0)",
        description: "Check if any element matches",
      },
    ],
  },
  {
    title: "Async/Await",
    commands: [
      {
        command: "async function getData() {",
        description: "Async function declaration",
      },
      {
        command: "const data = await fetch(url)",
        description: "Await promise",
      },
      {
        command: "Promise.all([p1, p2])",
        description: "Wait for multiple promises",
      },
      {
        command: "try { await promise } catch (e) {",
        description: "Async error handling",
      },
      {
        command: "const result = await Promise.race([p1, p2])",
        description: "Race between promises",
      },
    ],
  },
  {
    title: "DOM Manipulation",
    commands: [
      {
        command: "document.querySelector('.class')",
        description: "Select element",
      },
      {
        command: "element.addEventListener('click', handler)",
        description: "Add event listener",
      },
      {
        command: "element.classList.add('class')",
        description: "Add CSS class",
      },
      {
        command: "element.setAttribute('data-id', id)",
        description: "Set element attribute",
      },
      {
        command: "element.innerHTML = '<div>content</div>'",
        description: "Set element HTML",
      },
    ],
  },
  {
    title: "Modern Features",
    commands: [
      {
        command: "const module = await import('./module.js')",
        description: "Dynamic import",
      },
      {
        command: "const map = new Map()",
        description: "Create Map",
      },
      {
        command: "const set = new Set()",
        description: "Create Set",
      },
      {
        command: "const symbol = Symbol('description')",
        description: "Create Symbol",
      },
      {
        command: "const proxy = new Proxy(target, handler)",
        description: "Create Proxy",
      },
    ],
  },
  {
    title: "Error Handling",
    commands: [
      {
        command: "try { code } catch (e) {",
        description: "Try-catch block",
      },
      {
        command: "throw new Error('message')",
        description: "Throw error",
      },
      {
        command: "Promise.reject(new Error())",
        description: "Reject promise",
      },
      {
        command: "if (!condition) throw new Error()",
        description: "Assert condition",
      },
      {
        command: "console.error('Error:', error)",
        description: "Log error",
      },
    ],
  },
]

export default function JavaScriptCheatsheetPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <header className="mb-16 max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl">
            <Code2 className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
          </div>
          <h1 className="text-5xl font-bold gradient-text">JavaScript Cheatsheet</h1>
        </div>
        <p className="text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Essential JavaScript syntax, modern features, and common patterns.
          Quick reference for JavaScript developers.
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