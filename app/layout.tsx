import type React from "react"
import { AppProvider } from "@/providers/app-provider"
import "./globals.css"
import "@/styles/code-highlight.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CodeLeap Network",
  description: "A social network for developers",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
