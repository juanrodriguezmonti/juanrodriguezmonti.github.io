"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export function BookNavigation() {
  const pathname = usePathname()
  const currentPath = pathname === "/fastapi-book" ? "/fastapi-book" : pathname

  return (
    <nav className="flex items-center justify-between">
      <Link href="/fastapi-book" className="text-xl font-bold">
        FastAPI Book
      </Link>
      <div className="flex items-center gap-4">
        <Button variant="ghost" asChild>
          <Link href="/fastapi-book">Home</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/fastapi-book/chapter-1">Start Reading</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href={`${currentPath}?lang=es`}>ES</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href={`${currentPath}?lang=en`}>EN</Link>
        </Button>
      </div>
    </nav>
  )
} 