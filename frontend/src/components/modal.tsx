import React from 'react'

interface ModalProps {
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
      <div className="bg-white p-6 rounded-lg z-20">
        <div className="prose max-w-screen-md p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">版权声明</h2>
          <p className="mb-4">
            该博客的所有该博客的所有该博客的所有该博客的所有该博客的所有该博客的所有
          </p>
          <p className="mb-4">该博客的所有该博客的所有该博客的所有</p>
          <p className="mb-4">该博客的所有该博客的所有该博客的所有</p>
          <p className="mb-4">该博客的所有该博客的所有该博客的所有</p>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={onClose}
          >
            明白了
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
