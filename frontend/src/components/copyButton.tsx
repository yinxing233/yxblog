import React, { useState } from 'react'

const CopyableText: React.FC<{ text: string }> = ({ text }) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const handleCopy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log('Text copied successfully!')
        setShowSuccessMessage(true)
        setTimeout(() => {
          setShowSuccessMessage(false)
        }, 2000) // 2秒后隐藏成功消息
      })
      .catch((error) => {
        console.error('Error copying text: ', error)
      })
  }

  return (
    <div className="relative">
      <button
        onClick={handleCopy}
        className="text-blue-500 border border-blue-500 rounded-md px-3 py-1"
      >
        {text}
      </button>
      {showSuccessMessage && (
        <div className="fixed flex items-center justify-center top-1/4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-2 rounded-md w-64">
          复制成功!
        </div>
      )}
    </div>
  )
}

export default CopyableText
