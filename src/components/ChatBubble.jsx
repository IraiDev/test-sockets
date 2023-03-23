import { useState } from 'react'
import { Popover } from './Popover'

export function ChatBubble () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Popover
      open={isOpen}
      title='Chat bot'
      onClose={setIsOpen}
      btnComponent={<Btn isOpen={isOpen} onClick={setIsOpen} />}
    >
      cositas
    </Popover>
  )
}

function Btn ({ onClick, isOpen }) {
  return (
    <button onClick={() => onClick(!isOpen)} className='bg-blue-500 hover:bg-blue-600 transition-colors text-white font-semibold px-3 py-1.5 rounded-full'>
      click para abrir chat
    </button>
  )
}
