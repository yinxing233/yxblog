import React from 'react'
import { useState } from 'react'
import Image from 'next/image'

import Modal from './modal'
import CopyButton from './copyButton'

const Footer: React.FC = () => {
  const [showCopyrightModal, setShowCopyrightModal] = useState(false)
  const [showGuideModal, setShowGuideModal] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false)

  const toggleCopyrightModal = () => {
    setShowCopyrightModal(!showCopyrightModal)
  }

  const toggleGuideModal = () => {
    setShowGuideModal(!showGuideModal)
  }

  const toggleContactModal = () => {
    setShowContactModal(!showContactModal)
  }
  return (
    <footer className="bg-gray-100">
      <div className="flex flex-col rounded-t-full bg-gradient-to-r from-yellow-50 via-cyan-50 to-lime-50">
        <div className="w-full draggable">
          <div className="container flex flex-col mx-auto">
            <div className="flex flex-col items-center w-full my-4">
              <div className="flex flex-col items-center gap-2">
                <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-12 gap-y-3 lg:flex-nowrap">
                  <button
                    className="text-gray-900 hover:text-yellow-400"
                    onClick={toggleCopyrightModal}
                  >
                    版权声明
                  </button>
                  {showCopyrightModal && (
                    <Modal
                      onClose={toggleCopyrightModal}
                      title="版权声明"
                      buttonText="我已了解"
                    >
                      <span>最后更新时间：2023年3月</span>
                      <ul className="flex flex-col p-2">
                        <li className="list-disc p-2">
                          本博客提供的内容中有部分来源于互联网，如有侵权请联系删除。
                        </li>
                        <li className="list-disc p-2">
                          如需转载本博客的原创内容，请标注作者名与链接。禁止用于任何商业用途。
                        </li>
                        <li className="list-disc p-2">
                          转载请署名：银杏233或yinxing233，并链接到本博客。
                        </li>
                      </ul>
                    </Modal>
                  )}
                  <button
                    className="text-gray-900 hover:text-yellow-400"
                    onClick={toggleContactModal}
                  >
                    联系方式
                  </button>
                  {showContactModal && (
                    <Modal
                      onClose={toggleContactModal}
                      title="联系方式"
                      buttonText="确定"
                    >
                      <div className="relative mb-4 flex items-center justify-center">
                        <Image
                          src={'/image/avatar.jpg'}
                          alt="头像"
                          width={200}
                          height={200}
                          className="flex rounded-full mx-20"
                        />
                      </div>
                      <CopyButton text="yinxing233@sina.com" />
                      <span className="flex items-center justify-center pt-4 cursor-not-allowed">
                        点击邮箱复制
                      </span>
                    </Modal>
                  )}
                </div>
                <div className="flex items-center gap-8 mb-2 text-gray-900 hover:text-yellow-400">
                  <a
                    href="https://github.com/yinxing233"
                    className="text-grey-700 hover:text-grey-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 3C7.0275 3 3 7.13211 3 12.2284C3 16.3065 5.5785 19.7648 9.15375 20.9841C9.60375 21.0709 9.76875 20.7853 9.76875 20.5403C9.76875 20.3212 9.76125 19.7405 9.7575 18.9712C7.254 19.5277 6.726 17.7332 6.726 17.7332C6.3165 16.6681 5.72475 16.3832 5.72475 16.3832C4.9095 15.8111 5.78775 15.8229 5.78775 15.8229C6.6915 15.887 7.16625 16.7737 7.16625 16.7737C7.96875 18.1847 9.273 17.777 9.7875 17.5414C9.8685 16.9443 10.1003 16.5381 10.3575 16.3073C8.35875 16.0764 6.258 15.2829 6.258 11.7471C6.258 10.7399 6.60675 9.91659 7.18425 9.27095C7.083 9.03774 6.77925 8.0994 7.263 6.82846C7.263 6.82846 8.01675 6.58116 9.738 7.77462C10.458 7.56958 11.223 7.46785 11.988 7.46315C12.753 7.46785 13.518 7.56958 14.238 7.77462C15.948 6.58116 16.7017 6.82846 16.7017 6.82846C17.1855 8.0994 16.8818 9.03774 16.7917 9.27095C17.3655 9.91659 17.7142 10.7399 17.7142 11.7471C17.7142 15.2923 15.6105 16.0725 13.608 16.2995C13.923 16.5765 14.2155 17.1423 14.2155 18.0071C14.2155 19.242 14.2043 20.2344 14.2043 20.5341C14.2043 20.7759 14.3617 21.0647 14.823 20.9723C18.4237 19.7609 21 16.3002 21 12.2284C21 7.13211 16.9703 3 12 3Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-2 gap-y-3 lg:flex-nowrap">
                <a href="/" className="text-gray-900 hover:text-yellow-400">
                  备案号
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
