"use client"

import type React from "react"

import { useState } from "react"
import { useAppSelector } from "@/providers/redux/hooks"
import { useCreatePost } from "@/hooks/posts/useCreatePost"
import { useGenerateContent } from "@/hooks/ai/useGenerateContent"
import { isEmptyString } from "@/lib/utils/string.utils"

export function useCreatePostForm() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const { currentUser } = useAppSelector((state) => state.user)
  const { createPost } = useCreatePost()
  const { generateContent, isGenerating } = useGenerateContent()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!currentUser || isEmptyString(title) || isEmptyString(content)) return

    createPost({
      username: currentUser.username,
      title,
      content,
    })

    // Reset form
    setTitle("")
    setContent("")
  }

  const handleGenerateContent = async () => {
    if (isEmptyString(title)) return

    const generatedContent = await generateContent(title)
    if (generatedContent) {
      setContent(generatedContent)
    }
  }

  const isFormValid = !isEmptyString(title) && !isEmptyString(content)

  return {
    title,
    setTitle,
    content,
    setContent,
    handleSubmit,
    handleGenerateContent,
    isFormValid,
    isGenerating,
  }
}
