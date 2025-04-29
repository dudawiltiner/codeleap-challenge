"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"

interface MarkdownPreviewProps {
  content: string
  className?: string
}

export function MarkdownPreview({ content, className = "" }: MarkdownPreviewProps) {
  return (
    <div className={`prose prose-sm max-w-none dark:prose-invert ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ node, ...props }) => <h1 className="text-xl font-bold my-3" {...props} />,
          h2: ({ node, ...props }) => <h2 className="text-lg font-bold my-2" {...props} />,
          h3: ({ node, ...props }) => <h3 className="text-md font-bold my-2" {...props} />,
          p: ({ node, ...props }) => <p className="my-2" {...props} />,
          ul: ({ node, ...props }) => <ul className="list-disc pl-5 my-2" {...props} />,
          ol: ({ node, ...props }) => <ol className="list-decimal pl-5 my-2" {...props} />,
          li: ({ node, ...props }) => <li className="my-1" {...props} />,
          a: ({ node, ...props }) => <a className="text-blue-500 hover:underline" {...props} />,
          blockquote: ({ node, ...props }) => (
            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-2" {...props} />
          ),
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "")
            return !inline ? (
              <div className="relative">
                {match && (
                  <div className="absolute top-0 right-0 bg-gray-200 text-gray-600 px-2 py-1 text-xs rounded-bl">
                    {match[1]}
                  </div>
                )}
                <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto my-4 text-sm font-mono">
                  <code className={className} {...props}>
                    {String(children).replace(/\n$/, "")}
                  </code>
                </pre>
              </div>
            ) : (
              <code
                className="bg-gray-100 px-1 rounded text-sm font-mono dark:bg-gray-800 dark:text-gray-200"
                {...props}
              >
                {children}
              </code>
            )
          },
          img: ({ node, ...props }) => <img className="max-w-full h-auto my-2" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
