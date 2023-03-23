// import uuid from 'react-id-generator'
import { Message } from './Message'

// const MESSAGES = [
//   { id: uuid(), content: 'primer mensaje Ignacio', type: 'sended' },
//   { id: uuid(), content: 'primer mensaje sebastian', type: 'received' },
//   { id: uuid(), content: 'segundo mensaje sebastian', type: 'received' },
//   { id: uuid(), content: 'segundo mensaje Ignacio', type: 'sended' },
//   { id: uuid(), content: 'ultimo mensaje Ignacio', type: 'sended' }
// ]

export function ChatContainer ({ chats = [] }) {
  return (
    <div className='flex flex-col gap-2 h-[550px] w-96 scroll-app bg-neutral-900 px-3 py-1'>
      {
        chats.map(({ content, id, user }) => (
          <Message key={id} content={content} user={user} />
        ))
      }
    </div>
  )
}
