import { useState } from 'react'
import { MdSupervisedUserCircle } from 'react-icons/md'

const animationStyles = (isOpen) => {
  return `opacity-0 min-w-max group-hover:opacity-100 group-hover:delay-200 
  ${isOpen ? 'block' : 'hidden'}`
}

export function Groups () {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleIsOpen = (value) => {
    setTimeout(() => {
      setIsOpen(value)
    }, 200)
  }

  return (
    <aside
      onMouseEnter={() => handleToggleIsOpen(true)}
      onMouseLeave={() => handleToggleIsOpen(false)}
      className={`
        absolute top-0 left-0 pb-3 bg-neutral-800 h-full border-r border-neutral-700 group
        ${isOpen ? 'pt-8' : 'pt-20'}
      `}
    >
      <h3 className={`pb-5 px-3 text-lg font-bold ${animationStyles(isOpen)}`}>Grupos</h3>
      <ul
        className={`
          w-[47px] group-hover:w-60 transition-[width] duration-300 hover:scroll-app overflow-hidden
          ${isOpen ? 'h-[calc(100%-85px)]' : 'h-[calc(100%-37px)]'}
        `}
      >
        {Array.from({ length: 20 }).map((_, idx) => (<Item key={idx} isOpen={isOpen} />))}
      </ul>
    </aside>
  )
}

function Item ({ isOpen }) {
  return (
    <li
      className='
        flex items-center gap-3 border-b p-2 border-neutral-700 hover:bg-neutral-700 cursor-pointer w-full
      '
    >
      <MdSupervisedUserCircle className='text-3xl text-neutral-400 min-w-[30px]' />
      <span
        className={animationStyles(isOpen)}
      >
        administracion andes
      </span>
    </li>
  )
}
