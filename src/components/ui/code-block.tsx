"use client"

import { useEffect, useRef } from "react"

interface CodeBlockProps {
  code: string
  language: string
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Aplicar classes básicas para simular destaque de sintaxe
    if (codeRef.current) {
      const codeElement = codeRef.current

      // Aplicar classes básicas para simular destaque de sintaxe
      const keywords = [
        "function",
        "const",
        "let",
        "var",
        "return",
        "if",
        "else",
        "for",
        "while",
        "class",
        "new",
        "import",
        "export",
        "from",
        "async",
        "await",
      ]
      const strings = code.match(/"([^"]*)"|'([^']*)'|`([^`]*)`/g) || []
      const comments = code.match(/\/\/.*|\/\*[\s\S]*?\*\//g) || []

      let highlightedCode = code

      // Destacar palavras-chave
      keywords.forEach((keyword) => {
        const regex = new RegExp(`\\b${keyword}\\b`, "g")
        highlightedCode = highlightedCode.replace(regex, `<span class="token keyword">${keyword}</span>`)
      })

      // Destacar strings
      strings.forEach((str) => {
        highlightedCode = highlightedCode.replace(str, `<span class="token string">${str}</span>`)
      })

      // Destacar comentários
      comments.forEach((comment) => {
        highlightedCode = highlightedCode.replace(comment, `<span class="token comment">${comment}</span>`)
      })

      codeElement.innerHTML = highlightedCode
    }
  }, [code])

  return (
    <div className="relative">
      <div className="absolute top-0 right-0 bg-gray-200 text-gray-600 px-2 py-1 text-xs rounded-bl">{language}</div>
      <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto my-4 text-sm font-mono">
        <code ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  )
}
