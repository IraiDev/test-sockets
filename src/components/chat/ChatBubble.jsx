import { useEffect, useLayoutEffect, useState } from 'react'
import io from 'socket.io-client'
import { useUserStore } from '../../store/useUserStore'
import { Popover } from '../Popover'
import { MessageSender } from './MessageSender'
import { TbMessageCircle } from 'react-icons/tb'
import { ChatHeader } from './ChatHeader'
import { ChatWrapper } from './ChatWrapper'
import { Groups } from './Groups'

export function ChatBubble ({ user: innerUser = null, openChat, closeChat }) {
  const { setUser, user } = useUserStore()
  const [isOpen, setIsOpen] = useState(false)
  const [socket, setSocket] = useState(null)
  const [chats, setChats] = useState([])
  const [prevChatLength, setPrevChatLength] = useState(0)
  // const prevChatLength = useRef(0)

  const handleSendMessage = (message) => {
    socket.emit('chat', { content: message, user: { userName: user.userName } })
  }

  const handleClose = (value) => {
    closeChat(value)
    setIsOpen(value)
  }

  useEffect(() => {
    if (innerUser === null) return
    const socketConnection = io('https://chat.zpruebas.cl')
    setSocket(socketConnection)
    setUser({ id: innerUser.id, token: innerUser.token, name: innerUser.name })
    socketConnection.emit('server:logged-in', innerUser.token)
    console.log(innerUser)

    return () => {
      socketConnection.disconnect()
    }
  }, [innerUser])

  useEffect(() => {
    if (socket === null) return
    socket.on('client:chatLists', (data) => {
      setChats(data)
      console.log(data)
    })
  }, [socket])

  useEffect(() => {
    isOpen && setPrevChatLength(chats.length)
  }, [chats, isOpen])

  useLayoutEffect(() => {
    if (!openChat) return
    setIsOpen(openChat)
  }, [openChat])

  return (
    <Popover
      open={isOpen}
      title={innerUser !== null ? innerUser.name : ''}
      onClose={handleClose}
      btnComponent={
        <Btn
          isOpen={isOpen}
          notReadedMessage={chats.length - prevChatLength}
          onClick={setIsOpen}
        />
      }
    >
      <ChatHeader title={innerUser !== null ? innerUser.name : ''} />
      <Groups chats={chats} />
      <ChatWrapper chats={[]} />
      <MessageSender onClick={handleSendMessage} />
    </Popover>
  )
}

function Btn ({ onClick, isOpen, notReadedMessage = 0 }) {
  return (
    <button
      onClick={() => onClick(!isOpen)}
      className={`
        bg-emerald-600 hover:bg-emerald-500 transition-colors text-white font-semibold h-10 w-10 
        grid place-content-center rounded-full relative
      `}
    >
      <TbMessageCircle className='text-2xl' />
      {
        notReadedMessage > 0 &&
          <span className='absolute -top-2 -right-1 h-5 w-5 grid place-content-center rounded-full text-xs bg-red-600 text-white'>
            {notReadedMessage}
          </span>
      }
    </button>
  )
}
