import { useEffect, useState } from 'react'

export function AnimationTransition ({ isOpen, onClose, children, className }) {
  const [showComponent, setShowComponent] = useState(isOpen)

  const handleClose = () => {
    onClose(false)
    setTimeout(() => {
      setShowComponent(false)
    }, 300)
  }

  useEffect(() => {
    if (isOpen) {
      setShowComponent(true)
      return
    }
    handleClose()
  }, [isOpen])

  return (
    <div className={`
      transition duration-300 
      ${className} 
      ${isOpen
        ? 'visible opacity-100 scale-100'
        : `scale-90 opacity-0 ${!showComponent && 'invisible'}
      `}
    `}
    >
      {showComponent && children}
    </div>
  )
}
