import { useState } from 'react'
import { ChatBubble } from './components/chat/ChatBubble'

const USERS = [
  { name: 'Ignacio A.', userName: 'iarriagada' },
  { name: 'Sebastian A.', userName: 'sacuna' },
  { name: 'Rodrigo del C.', userName: 'rdelcanto' },
  { name: 'Felix M.', userName: 'fmarin' },
  { name: 'Luis V.', userName: 'lvergara' }
]

function App () {
  const [user, setUser] = useState('')
  const [isChatOpen, setIsChatOpen] = useState(false)

  const handleLogin = (user) => {
    setUser(user)
    setIsChatOpen(true)
  }

  return (
    <main className='h-screen w-full grid place-content-center bg-neutral-900 text-neutral-200'>
      <header>
        {user !== '' &&
          <h1 className='text-lg mb-4 text-center'>
            Has entrado al chat como:
            <strong> "{USERS.find(({ userName }) => user === userName).name}"</strong>
          </h1>}
      </header>
      <div className='flex flex-col gap-2 p-4 rounded-lg bg-neutral-800 w-96'>
        <label className='text-sm'>Seleccione un usuario:</label>
        <ul className='space-y-2'>
          {USERS.filter(item => item.userName !== user).map(({ userName, name }) => (
            <li key={userName}>
              <button
                disabled={isChatOpen}
                onClick={() => handleLogin(userName)}
                className='
                  py-1.5 px-2 outline-none w-full text-left rounded-lg bg-neutral-700 hover:bg-neutral-600
                  disabled:hover:bg-neutral-700/20 disabled:bg-neutral-700/20 transition-colors duration-200
                '
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <ChatBubble user={user} openChat={isChatOpen} closeChat={setIsChatOpen} />
    </main>
  )
}

export default App
