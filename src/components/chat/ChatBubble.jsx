import { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import io from 'socket.io-client'
import { useUserStore } from '../../store/useUserStore'
import { Popover } from '../Popover'
import { ChatWrapper } from './ChatWrapper'
import { MessageSender } from './MessageSender'
import { TbMessageCircle } from 'react-icons/tb'

export function ChatBubble ({ user: loginUser = '', openChat, closeChat }) {
  const { setUser, user } = useUserStore()
  const [isOpen, setIsOpen] = useState(false)
  const [socket, setSocket] = useState(null)
  const [chats, setChats] = useState([])

  const handleSendMessage = (message) => {
    socket.emit('chat', { content: message, user: { userName: user.userName } })
  }

  const handleClose = (value) => {
    closeChat(value)
    setIsOpen(value)
  }

  useEffect(() => {
    if (loginUser === '') return
    const socketConnection = io('https://test-backend.zpruebas.cl')
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

  useEffect(() => {
    if (!openChat) return
    setIsOpen(openChat)
  }, [openChat])

  return (
    <Popover
      open={isOpen}
      title={loginUser}
      onClose={handleClose}
      btnComponent={<Btn isOpen={isOpen} onClick={setIsOpen} />}
    >
      <ChatWrapper chats={chats} />
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
