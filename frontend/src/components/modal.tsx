import React from 'react'

interface ModalProps {
  onClose: () => void
  title: string
  children: React.ReactNode
  buttonText: string
}

const Modal: React.FC<ModalProps> = ({
  onClose,
  title,
  children,
  buttonText,
}) => {
  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    // 如果点击了模态框外部的蒙版，则关闭模态框
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-gray-800 opacity-50"
        onClick={handleOverlayClick}
      ></div>
      <div className="bg-white p-6 rounded-lg z-20">
        <div className="prose max-w-screen-md p-6 overflow-y-auto">
          <h2 className="flex items-center justify-center text-2xl font-bold mb-10">
            {title}
          </h2>
          {children}
        </div>
        <div className="flex items-center justify-center">
          <button
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={onClose}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
