"use client"

import { PostHeader } from "@/components/molecules/PostHeader/PostHeader"
import { formatTimeAgo } from "@/lib/utils"
import type { PostCardProps } from "./PostCard.types"
import { MarkdownPreview } from "@/components/ui/markdown-preview"

export function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 mb-6 overflow-hidden shadow-sm transition-all hover:shadow-md">
      <PostHeader post={post} />

      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
          <span className="font-medium text-gray-800">@{post.username}</span>
          <span className="text-sm text-gray-500">{formatTimeAgo(post.created_datetime)}</span>
        </div>

        <MarkdownPreview content={post.content} />
      </div>
    </div>
  )
}
