import { useEffect, useRef } from 'react'
import { AnimationTransition } from './AnimationTransition'

export function Popover ({ btnComponent, children, title, open, onClose }) {
  const wrapperRef = useRef()

  useEffect(() => {
    function handleClickOutside (event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        onClose(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [wrapperRef])

  return (
    <div ref={wrapperRef} className='fixed bottom-5 left-5'>
      <>{btnComponent}</>
      <AnimationTransition
        isOpen={open}
        onClose={onClose}
        className='absolute bottom-[140%] left-0 space-y-4 p-4 rounded-lg bg-neutral-800 border border-neutral-700 w-96 max-h-[600px] overscroll-y-auto'
      >
        <header>
          <h1 className='font-semibold text-2xl text-center'>{title}</h1>
        </header>
        {children}
      </AnimationTransition>
    </div>
  )
}
