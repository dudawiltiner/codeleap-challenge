"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MarkdownPreview } from "./markdown-preview"
import { cn } from "@/lib/utils/cn"

interface MarkdownEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
  minHeight?: string
}

export function MarkdownEditor({
  value,
  onChange,
  placeholder = "Write your content here...",
  className = "",
  minHeight = "200px",
}: MarkdownEditorProps) {
  const [activeTab, setActiveTab] = useState<string>("edit")

  return (
    <div className={cn("border rounded-md overflow-hidden", className)}>
      <Tabs defaultValue="edit" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex items-center justify-between px-2 border-b bg-gray-50 dark:bg-gray-800">
          <TabsList className="bg-transparent">
            <TabsTrigger value="edit" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">
              Edit
            </TabsTrigger>
            <TabsTrigger value="preview" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">
              Preview
            </TabsTrigger>
          </TabsList>
          <div className="text-xs text-gray-500 pr-2">Markdown supported</div>
        </div>

        <TabsContent value="edit" className="mt-0 p-0">
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className={cn("w-full p-3 font-mono text-sm focus:outline-none resize-none", `min-h-[${minHeight}]`)}
            style={{ minHeight }}
          />
        </TabsContent>

        <TabsContent value="preview" className="mt-0 p-0">
          <div className={cn("p-3 overflow-auto", `min-h-[${minHeight}]`)} style={{ minHeight }}>
            {value ? (
              <MarkdownPreview content={value} />
            ) : (
              <div className="text-gray-400 italic">Nothing to preview</div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
