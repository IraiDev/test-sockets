import { useEffect, useRef } from 'react'
import { Message } from './Message'

export function ChatWrapper ({ chats = [] }) {
  const scrollRef = useRef(null)

  useEffect(() => {
    // if (scrollRef.current === null) return
    const content = scrollRef.current
    content.scrollTo({
      top: content.scrollHeight,
      behavior: 'smooth'
    })
  }, [chats])

  return (
    <div
      ref={scrollRef}
      className='flex flex-col gap-2 h-[450px] w-96 scroll-app bg-neutral-900 pr-3 pl-14 py-1'
    >
      {
        chats.map(({ content, id, user }) => (
          <Message key={id} content={content} user={user} />
        ))
      }
    </div>
  )
}
