import React, { ReactNode } from 'react'

interface ContentProps {
  children: ReactNode
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <div className="relative w-full flex flex-col justify-center items-center">
      {children}
    </div>
  )
}

export default Content
