import type { ModalProps } from "./Modal.types"

export function Modal({ isOpen, title, children }: ModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div className="bg-white rounded-lg p-5 sm:p-6 w-full max-w-md shadow-xl">
        <h2 className="text-xl font-bold mb-4 text-gray-800">{title}</h2>
        {children}
      </div>
    </div>
  )
}
