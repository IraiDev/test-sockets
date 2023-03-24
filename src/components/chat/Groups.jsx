import { useState } from 'react'
import { MdSupervisedUserCircle } from 'react-icons/md'

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
        absolute top-0 left-0 pt-20 pb-3 bg-neutral-800 h-full border-r border-neutral-700 group
      `}
    >
      <ul className='w-[47px] group-hover:w-60 transition-[width] duration-300 scroll-app h-full'>
        {Array.from({ length: 20 }).map((_, idx) => (<Item key={idx} isOpen={isOpen} />))}
      </ul>
    </aside>
  )
}

function Item ({ isOpen }) {
  return (
    <li
      onClick={() => console.log('item')}
      className='
        flex items-center gap-3 border-b p-2 border-neutral-700 hover:bg-neutral-700 cursor-pointer w-full
      '
    >
      <MdSupervisedUserCircle className='text-3xl text-neutral-400 min-w-[30px]' />
      <span
        className={`
          opacity-0 min-w-max group-hover:opacity-100 group-hover:delay-200 
          ${isOpen ? 'block' : 'hidden'}
        `}
      >
        administracion andes
      </span>
    </li>
  )
}
