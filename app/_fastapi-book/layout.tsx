import { Metadata } from "next"
import { BookNavigation } from "./book-navigation"

export const metadata: Metadata = {
  title: "FastAPI Book - Juan Rodriguez Monti",
  description: "A comprehensive guide to FastAPI, from installation to deployment",
}

export default function FastAPIBookLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
} 