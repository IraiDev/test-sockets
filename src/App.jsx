import { useEffect } from 'react'
import io from 'socket.io-client'
import { ChatBubble } from './components/ChatBubble'

const socket = io('http://localhost:5173')

// const handlesendMessage = () => {
//   console.log('onclick')
//   socket.emit('mensaje', 'Hola desde el cliente React')
// }

function App () {
  useEffect(() => {
    socket.on('mensaje', (data) => {
      console.log(`Mensaje recibido del servidor: ${data}`)
    })
  })

  return (
    <main className='h-screen w-full grid place-content-center bg-neutral-900 text-neutral-200'>
      <div className='p-6 rounded-lg border border-neutral-700 bg-neutral-800'>
        <header>
          <h1 className='text-3xl text-center font-bold'>CHAT TEST</h1>
        </header>
        <ChatBubble />
      </div>
    </main>
  )
}

export default App
