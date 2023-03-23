import { useLayoutEffect, useState } from 'react'

export function AnimationTransition ({ isOpen, onClose, children, className }) {
  const [showComponent, setShowComponent] = useState(isOpen)

  const handleClose = () => {
    onClose(false)
    setTimeout(() => {
      setShowComponent(false)
    }, 300)
  }

  useLayoutEffect(() => {
    if (isOpen) return setShowComponent(true)
    handleClose()
  }, [isOpen])

  return (
    <div className={`
      transition duration-300 origin-bottom-left 
      ${className} 
      ${isOpen
        ? 'visible opacity-100 scale-100'
        : `scale-75 opacity-0 ${!showComponent && 'invisible'}
      `}
    `}
    >
      {showComponent && children}
    </div>
  )
}
