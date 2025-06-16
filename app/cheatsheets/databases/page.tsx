import { Metadata } from "next"
import { Database, ArrowLeft } from "lucide-react"
import { CopyableCommand } from "@/components/copyable-command"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Databases Cheatsheet | Juan Rodriguez Monti",
  description: "Quick reference guide for database concepts, commands, and best practices",
}

const sections = [
  {
    title: "MongoDB",
    commands: [
      {
        command: "mongosh",
        description: "Start MongoDB shell",
      },
      {
        command: "db.collection.find()",
        description: "Find all documents",
      },
      {
        command: "db.collection.insertOne({ field: 'value' })",
        description: "Insert one document",
      },
      {
        command: "db.collection.updateOne({ _id: id }, { $set: { field: 'value' } })",
        description: "Update one document",
      },
      {
        command: "db.collection.deleteOne({ _id: id })",
        description: "Delete one document",
      },
    ],
  },
  {
    title: "PostgreSQL",
    commands: [
      {
        command: "psql -U username -d database",
        description: "Connect to database",
      },
      {
        command: "\\l",
        description: "List databases",
      },
      {
        command: "\\dt",
        description: "List tables",
      },
      {
        command: "\\d table_name",
        description: "Describe table",
      },
      {
        command: "\\q",
        description: "Quit psql",
      },
    ],
  },
  {
    title: "Redis",
    commands: [
      {
        command: "redis-cli",
        description: "Start Redis CLI",
      },
      {
        command: "SET key value",
        description: "Set key-value pair",
      },
      {
        command: "GET key",
        description: "Get value by key",
      },
      {
        command: "DEL key",
        description: "Delete key",
      },
      {
        command: "KEYS *",
        description: "List all keys",
      },
    ],
  },
  {
    title: "Database Design",
    commands: [
      {
        command: "CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(100))",
        description: "Create table with primary key",
      },
      {
        command: "ALTER TABLE users ADD COLUMN email VARCHAR(255) UNIQUE",
        description: "Add unique column",
      },
      {
        command: "CREATE INDEX idx_name ON users(name)",
        description: "Create index",
      },
      {
        command: "CREATE TABLE orders (id SERIAL PRIMARY KEY, user_id INTEGER REFERENCES users(id))",
        description: "Create table with foreign key",
      },
      {
        command: "CREATE VIEW user_orders AS SELECT * FROM users JOIN orders ON users.id = orders.user_id",
        description: "Create view",
      },
    ],
  },
  {
    title: "Database Maintenance",
    commands: [
      {
        command: "VACUUM ANALYZE table_name",
        description: "Vacuum and analyze table",
      },
      {
        command: "REINDEX DATABASE database_name",
        description: "Rebuild all indexes",
      },
      {
        command: "pg_dump database_name > backup.sql",
        description: "Create database backup",
      },
      {
        command: "psql database_name < backup.sql",
        description: "Restore from backup",
      },
      {
        command: "ANALYZE table_name",
        description: "Update statistics",
      },
    ],
  },
  {
    title: "Performance",
    commands: [
      {
        command: "EXPLAIN SELECT * FROM table",
        description: "Show query plan",
      },
      {
        command: "EXPLAIN ANALYZE SELECT * FROM table",
        description: "Show query execution time",
      },
      {
        command: "SELECT pg_size_pretty(pg_total_relation_size('table_name'))",
        description: "Show table size",
      },
      {
        command: "SELECT * FROM pg_stat_activity",
        description: "Show active queries",
      },
      {
        command: "SELECT * FROM pg_stat_user_tables",
        description: "Show table statistics",
      },
    ],
  },
]

export default function DatabasesCheatsheetPage() {
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
          <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-xl">
            <Database className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-5xl font-bold gradient-text">Databases Cheatsheet</h1>
        </div>
        <p className="text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Essential database commands, concepts, and best practices for MongoDB,
          PostgreSQL, Redis, and more.
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