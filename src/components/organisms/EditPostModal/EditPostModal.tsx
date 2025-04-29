"use client"

import { Modal } from "@/components/molecules/Modal/Modal"
import { Button } from "@/components/atoms/Button/Button"
import { Input } from "@/components/atoms/Input/Input"
import { FormField } from "@/components/molecules/FormField/FormField"
import { useEditPostModal } from "./EditPostModal.hooks"
import { MarkdownEditor } from "@/components/ui/markdown-editor"

export function EditPostModal() {
  const { title, setTitle, content, setContent, isOpen, handleSave, handleCancel, isFormValid } = useEditPostModal()

  return (
    <Modal isOpen={isOpen} title="Edit item">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSave()
        }}
      >
        <FormField label="Title" htmlFor="edit-title">
          <Input
            id="edit-title"
            placeholder="Hello world"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="rounded-lg border-gray-200 focus:border-[#7695ec] focus:ring-1 focus:ring-[#7695ec]"
          />
        </FormField>

        <FormField label="Content" htmlFor="edit-content">
          <MarkdownEditor
            value={content}
            onChange={setContent}
            placeholder="Write your content here..."
            minHeight="200px"
            className="border-gray-200 rounded-lg"
          />
        </FormField>

        <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
          <Button
            type="button"
            variant="secondary"
            onClick={handleCancel}
            className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 px-4 py-2 rounded-lg transition-all"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="success"
            disabled={!isFormValid}
            className={`px-4 py-2 rounded-lg transition-all ${
              isFormValid
                ? "bg-[#47b960] hover:bg-[#3da953] text-white"
                : "bg-[#47b960] opacity-50 cursor-not-allowed text-white"
            }`}
          >
            Save
          </Button>
        </div>
      </form>
    </Modal>
  )
}
