import { useState } from 'react'
import { MdSupervisedUserCircle } from 'react-icons/md'
import { HiPlus } from 'react-icons/hi'

const animationStyles = (isOpen) => {
  return `opacity-0 min-w-max group-hover:opacity-100 group-hover:delay-200 
  ${isOpen ? 'block' : 'hidden'}`
}

export function Groups () {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleIsOpen = (value) => {
    setTimeout(() => {
      setIsOpen(value)
    }, 150)
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
      <CreateGroup isOpen={isOpen} />
      <ul
        className={`
          w-[47px] group-hover:w-60 transition-[width] duration-[600ms] hover:scroll-app overflow-hidden
          ${isOpen ? 'h-[calc(100%-105px)]' : 'h-[calc(100%-57px)]'}
        `}
      >
        {Array.from({ length: 20 }).map((_, idx) => (<Item key={idx} isOpen={isOpen} />))}
      </ul>
      <NewChat isOpen={isOpen} />
    </aside>
  )
}

function CreateGroup ({ isOpen }) {
  return (
    <header className={`flex justify-between items-center gap-2 pb-5 px-3 ${animationStyles(isOpen)}`}>
      <h3 className='text-lg font-bold'>Grupos</h3>
      <button
        className='
          flex items-center gap-2 text-sm bg-emerald-600 hover:bg-emerald-500 text-white
          rounded-md px-1.5 py-0.5 transition-colors duration-200
        '
      >
        <HiPlus />
        Crear grupo
      </button>
    </header>
  )
}

function NewChat ({ isOpen }) {
  return (
    <footer className='w-full flex items-center h-[60px]'>
      <button
        className={`
          flex items-center justify-center gap-2 bg-transparent hover:bg-neutral-700 text-white 
          px-2 py-2 w-full transition-colors
          ${animationStyles(isOpen)}
        `}
      >
        <HiPlus />
        Nuevo chat
      </button>
    </footer>
  )
}

function Item ({ isOpen }) {
  return (
    <li
      className='
        flex items-center gap-3 border-b p-2 border-neutral-700 hover:bg-neutral-700
        cursor-pointer w-full transition-colors duration-200
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
