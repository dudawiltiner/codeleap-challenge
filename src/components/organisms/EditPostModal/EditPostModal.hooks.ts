"use client"

import { useState, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "@/providers/redux/hooks"
import { closeEditModal } from "@/providers/redux/modalSlice"
import { useUpdatePost } from "@/hooks/posts/useUpdatePost"
import { isEmptyString } from "@/lib/utils/string.utils"

export function useEditPostModal() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const dispatch = useAppDispatch()
  const { editModal } = useAppSelector((state) => state.modal)
  const { updatePost } = useUpdatePost()

  useEffect(() => {
    if (editModal.post) {
      setTitle(editModal.post.title)
      setContent(editModal.post.content)
    }
  }, [editModal.post])

  const handleSave = () => {
    if (editModal.post && !isEmptyString(title) && !isEmptyString(content)) {
      updatePost({
        id: editModal.post.id,
        data: { title, content },
      })
      dispatch(closeEditModal())
    }
  }

  const handleCancel = () => {
    dispatch(closeEditModal())
  }

  const isFormValid = !isEmptyString(title) && !isEmptyString(content)

  return {
    title,
    setTitle,
    content,
    setContent,
    isOpen: editModal.isOpen,
    handleSave,
    handleCancel,
    isFormValid,
  }
}
