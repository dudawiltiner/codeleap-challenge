import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Post } from "@/lib/types/post.types"

interface ModalState {
  deleteModal: {
    isOpen: boolean
    postId: number | null
  }
  editModal: {
    isOpen: boolean
    post: Post | null
  }
}

const initialState: ModalState = {
  deleteModal: {
    isOpen: false,
    postId: null,
  },
  editModal: {
    isOpen: false,
    post: null,
  },
}

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openDeleteModal: (state, action: PayloadAction<number>) => {
      state.deleteModal.isOpen = true
      state.deleteModal.postId = action.payload
    },
    closeDeleteModal: (state) => {
      state.deleteModal.isOpen = false
      state.deleteModal.postId = null
    },
    openEditModal: (state, action: PayloadAction<Post>) => {
      state.editModal.isOpen = true
      state.editModal.post = action.payload
    },
    closeEditModal: (state) => {
      state.editModal.isOpen = false
      state.editModal.post = null
    },
  },
})

export const { openDeleteModal, closeDeleteModal, openEditModal, closeEditModal } = modalSlice.actions

export default modalSlice.reducer
