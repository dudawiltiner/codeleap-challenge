"use client"

import { Modal } from "@/components/molecules/Modal/Modal"
import { Button } from "@/components/atoms/Button/Button"
import { useDeletePostModal } from "./DeletePostModal.hooks"

export function DeletePostModal() {
  const { isOpen, handleDelete, handleCancel } = useDeletePostModal()

  return (
    <Modal isOpen={isOpen} title="Are you sure you want to delete this item?">
      <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
        <Button
          variant="secondary"
          onClick={handleCancel}
          className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 px-4 py-2 rounded-lg transition-all"
        >
          Cancel
        </Button>
        <Button
          variant="danger"
          onClick={handleDelete}
          className="bg-[#ff5151] hover:bg-[#e64646] text-white px-4 py-2 rounded-lg transition-all"
        >
          Delete
        </Button>
      </div>
    </Modal>
  )
}
