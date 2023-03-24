import { useLayoutEffect, useRef } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { AnimationTransition } from './AnimationTransition'

export function Popover ({ btnComponent, children, title, open, onClose }) {
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
        <header className='bg-neutral-800 flex justify-center items-center gap-2'>
          <FaUserCircle className='text-3xl text-neutral-400' />
          <h1 className='font-semibold text-2xl text-center py-4 leading-9'>{title}</h1>
        </header>
        {children}
      </AnimationTransition>
    </div>
  )
}
