import { useState } from 'react'
import { ChatBubble } from './components/chat/ChatBubble'

const USERS = [
  { id: 290, name: 'Ignacio A.', token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImlhcnJpYWdhZGEiLCJ1c2VySWQiOiIyOTAiLCJlbnRlcnByaXNlSWQiOiIxIiwiaWF0IjoxNjgwNTM3NzUwfQ.oryFS6JMdh2FE8iMKzFUyb5DleYofp67Fzqo24dOn-o' },
  { id: 1, name: 'Sebastian A.', token: 'sacuna' },
  { id: 3, name: 'Rodrigo del C.', token: 'rdelcanto' },
  { id: 2, name: 'Felix M.', token: 'fmarin' },
  { id: 4, name: 'Luis V.', token: 'lvergara' }
]

function App () {
  const [loggedCredential, setLoggedCredential] = useState('')
  const [isChatOpen, setIsChatOpen] = useState(false)

  const handleLogin = (token) => {
    setLoggedCredential(token)
    // setIsChatOpen(true)
  }

  return (
    <main className='h-screen w-full grid place-content-center bg-neutral-900 text-neutral-200'>
      <header>
        {loggedCredential !== '' &&
          <h1 className='text-lg mb-4 text-center'>
            Has entrado al chat como:
            <strong> "{USERS.find(({ token }) => loggedCredential === token).name}"</strong>
          </h1>}
      </header>
      <div className='flex flex-col gap-2 p-4 rounded-lg bg-neutral-800 w-96'>
        <label className='text-sm'>Seleccione un usuario:</label>
        <ul className='space-y-2'>
          {USERS.filter(user => user.token !== loggedCredential).map(({ token, name }) => (
            <li key={token}>
              <button
                disabled={isChatOpen}
                onClick={() => handleLogin(token)}
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
      <ChatBubble
        user={USERS.find(el => el.token === loggedCredential)}
        openChat={isChatOpen}
        closeChat={setIsChatOpen}
      />
    </main>
  )
}

export default App
