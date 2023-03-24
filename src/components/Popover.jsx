import { useLayoutEffect, useRef } from 'react'
import { AnimationTransition } from './AnimationTransition'

export function Popover ({ btnComponent, children, open, onClose }) {
  const wrapperRef = useRef()

  useLayoutEffect(() => {
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
        className='
          absolute bottom-[140%] left-0 flex flex-col gap-4 rounded-xl bg-neutral-900 border border-neutral-700
          overflow-hidden
        '
      >
        {children}
      </AnimationTransition>
    </div>
  )
}
