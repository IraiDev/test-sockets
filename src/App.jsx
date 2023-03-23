import { useState } from 'react'
import { ChatBubble } from './components/chat/ChatBubble'

const USERS = [
  'iarriagada',
  'sacuna',
  'rdelcanto',
  'fmarin'
]

function App () {
  const [user, setUser] = useState('')

  const handleLogin = (user) => {
    setUser(user)
  }

  return (
    <main className='h-screen w-full grid place-content-center bg-neutral-900 text-neutral-200'>
      <div className='flex flex-col gap-2 p-4 rounded-lg bg-neutral-800'>
        <label className='text-sm'>Seleccione un usuario</label>
        <ul className='space-y-2'>
          {USERS.filter(currentUser => currentUser !== user).map(user => (
            <li
              key={user}
              className='py-1.5 px-2 rounded-lg bg-neutral-700 hover:bg-neutral-600 cursor-pointer transition-colors duration-200'
              onClick={() => handleLogin(user)}
            >
              {user}
            </li>
          ))}
        </ul>
      </div>
      <ChatBubble user={user} />
    </main>
  )
}

export default App
