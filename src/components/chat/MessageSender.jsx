import { useRef } from 'react'
import { TbSend } from 'react-icons/tb'

export default function MessageSender ({ onClick }) {
  const message = useRef(null)
  const inputRef = useRef(null)

  const handleChange = (e) => {
    const value = e.target.value
    message.current = value
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    onClick(message.current)
    message.current = ''
    inputRef.current.value = ''
  }

  return (
    <footer className='p-2'>
      <form onSubmit={handleSendMessage} className='flex items-center gap-2 p-3 bg-neutral-800 rounded-lg shadow-lg'>
        <input
          ref={inputRef}
          onChange={handleChange}
          type='text'
          placeholder='Escriba aqui...'
          className='
            w-full bg-neutral-700 px-3 py-1.5 rounded-xl border-2 border-transparent hover:bg-neutral-600/70
            focus:border-neutral-500 outline-none transition-colors duration-200 placeholder:text-neutral-400/80
          '
        />
        <button
          type='submit'
          className='
            min-h-[36px] min-w-[36px] rounded-full grid place-content-center outline-none
            bg-emerald-600 text-white hover:bg-emerald-500 transition-colors duration-200
          '
        >
          <TbSend />
        </button>
      </form>
    </footer>
  )
}
