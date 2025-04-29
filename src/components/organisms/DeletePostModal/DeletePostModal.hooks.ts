"use client"

import { useAppDispatch, useAppSelector } from "@/providers/redux/hooks"
import { closeDeleteModal } from "@/providers/redux/modalSlice"
import { useDeletePost } from "@/hooks/posts/useDeletePost"

export function useDeletePostModal() {
  const dispatch = useAppDispatch()
  const { deleteModal } = useAppSelector((state) => state.modal)
  const { deletePost } = useDeletePost()

  const handleDelete = () => {
    if (deleteModal.postId) {
      deletePost(deleteModal.postId)
      dispatch(closeDeleteModal())
    }
  }

  const handleCancel = () => {
    dispatch(closeDeleteModal())
  }

  return {
    isOpen: deleteModal.isOpen,
    handleDelete,
    handleCancel,
  }
}
