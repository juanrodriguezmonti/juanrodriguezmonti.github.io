import { Metadata } from "next"
import { Database } from "lucide-react"
import { CopyableCommand } from "@/components/copyable-command"

export const metadata: Metadata = {
  title: "SQL Cheatsheet | Juan Rodriguez Monti",
  description: "Quick reference guide for SQL commands, joins, and common operations",
}

const sections = [
  {
    title: "Basic Queries",
    commands: [
      {
        command: "SELECT column1, column2 FROM table",
        description: "Basic SELECT query",
      },
      {
        command: "SELECT DISTINCT column FROM table",
        description: "Select unique values",
      },
      {
        command: "SELECT * FROM table WHERE condition",
        description: "Filter with WHERE",
      },
      {
        command: "SELECT * FROM table ORDER BY column DESC",
        description: "Sort results",
      },
      {
        command: "SELECT * FROM table LIMIT 10",
        description: "Limit results",
      },
    ],
  },
  {
    title: "Joins",
    commands: [
      {
        command: "SELECT * FROM table1 INNER JOIN table2 ON table1.id = table2.id",
        description: "Inner join",
      },
      {
        command: "SELECT * FROM table1 LEFT JOIN table2 ON table1.id = table2.id",
        description: "Left join",
      },
      {
        command: "SELECT * FROM table1 RIGHT JOIN table2 ON table1.id = table2.id",
        description: "Right join",
      },
      {
        command: "SELECT * FROM table1 FULL JOIN table2 ON table1.id = table2.id",
        description: "Full join",
      },
      {
        command: "SELECT * FROM table1 CROSS JOIN table2",
        description: "Cross join",
      },
    ],
  },
  {
    title: "Aggregations",
    commands: [
      {
        command: "SELECT COUNT(*) FROM table",
        description: "Count rows",
      },
      {
        command: "SELECT SUM(column) FROM table",
        description: "Sum values",
      },
      {
        command: "SELECT AVG(column) FROM table",
        description: "Average values",
      },
      {
        command: "SELECT MAX(column), MIN(column) FROM table",
        description: "Max and min values",
      },
      {
        command: "SELECT column, COUNT(*) FROM table GROUP BY column",
        description: "Group by",
      },
    ],
  },
  {
    title: "Data Modification",
    commands: [
      {
        command: "INSERT INTO table (column1, column2) VALUES (value1, value2)",
        description: "Insert data",
      },
      {
        command: "UPDATE table SET column = value WHERE condition",
        description: "Update data",
      },
      {
        command: "DELETE FROM table WHERE condition",
        description: "Delete data",
      },
      {
        command: "TRUNCATE TABLE table",
        description: "Remove all data",
      },
      {
        command: "ALTER TABLE table ADD column type",
        description: "Add column",
      },
    ],
  },
  {
    title: "Advanced Queries",
    commands: [
      {
        command: "SELECT * FROM table WHERE column IN (SELECT column FROM table2)",
        description: "Subquery with IN",
      },
      {
        command: "SELECT * FROM table WHERE EXISTS (SELECT 1 FROM table2 WHERE condition)",
        description: "Subquery with EXISTS",
      },
      {
        command: "SELECT * FROM table WHERE column LIKE 'pattern%'",
        description: "Pattern matching",
      },
      {
        command: "SELECT * FROM table WHERE column BETWEEN value1 AND value2",
        description: "Range selection",
      },
      {
        command: "SELECT * FROM table WHERE column IS NULL",
        description: "Check for NULL",
      },
    ],
  },
  {
    title: "Table Management",
    commands: [
      {
        command: "CREATE TABLE table (column1 type1, column2 type2)",
        description: "Create table",
      },
      {
        command: "DROP TABLE table",
        description: "Delete table",
      },
      {
        command: "CREATE INDEX index_name ON table (column)",
        description: "Create index",
      },
      {
        command: "ALTER TABLE table ADD CONSTRAINT name PRIMARY KEY (column)",
        description: "Add primary key",
      },
      {
        command: "ALTER TABLE table ADD CONSTRAINT name FOREIGN KEY (column) REFERENCES table2(column)",
        description: "Add foreign key",
      },
    ],
  },
]

export default function SQLCheatsheetPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <header className="mb-16 max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
            <Database className="w-8 h-8 text-purple-600 dark:text-purple-400" />
          </div>
          <h1 className="text-5xl font-bold gradient-text">SQL Cheatsheet</h1>
        </div>
        <p className="text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Essential SQL commands, joins, and common operations.
          Quick reference for database developers.
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