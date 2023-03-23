import { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import io from 'socket.io-client'
import { useUserStore } from '../../store/useUserStore'
import { Popover } from '../Popover'
import { ChatContainer } from './ChatContainer'
import MessageSender from './MessageSender'
import { TbMessageCircle } from 'react-icons/tb'

export function ChatBubble ({ user: loginUser = '' }) {
  const { setUser, user } = useUserStore()
  const [isOpen, setIsOpen] = useState(false)
  const [socket, setSocket] = useState(null)
  const [chats, setChats] = useState([])
  // bcec86a9-7183-4f37-bf67-2150c5a1bb2e e2eac2e7-c4bf-43d2-a230-5135e75ad1a8 8265186a-f538-4589-a6ca-21294e092ab9

  const handleSendMessage = (message) => {
    socket.emit('chat', { content: message, user: { userName: user.userName } })
  }

  useEffect(() => {
    if (loginUser === '') return
    const socketConnection = io('https://test.zpruebas.cl/')
    setSocket(socketConnection)
    const userConnectionId = uuid()
    setUser({ id: userConnectionId, userName: loginUser })
    socketConnection.emit('login', loginUser)

    return () => {
      socketConnection.disconnect()
    }
  }, [loginUser])

  useEffect(() => {
    if (socket === null) return
    socket.on('chat', (data) => {
      setChats(data)
    })
  }, [socket])

  return (
    <Popover
      open={isOpen}
      title='Chat bot'
      onClose={setIsOpen}
      btnComponent={<Btn isOpen={isOpen} onClick={setIsOpen} />}
    >
      <ChatContainer chats={chats} />
      <MessageSender onClick={handleSendMessage} />
    </Popover>
  )
}

function Btn ({ onClick, isOpen }) {
  return (
    <button
      onClick={() => onClick(!isOpen)}
      className='bg-emerald-600 hover:bg-emerald-500 transition-colors text-white font-semibold h-10 w-10 grid place-content-center rounded-full'
    >
      <TbMessageCircle className='text-2xl' />
    </button>
  )
}
