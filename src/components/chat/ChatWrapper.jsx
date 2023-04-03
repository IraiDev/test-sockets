import { useLayoutEffect, useRef } from 'react'
import { Message } from './Message'

export function ChatWrapper ({ chats = [] }) {
  const containerRef = useRef(null)
  const isFirstLoad = useRef(0)

  useLayoutEffect(() => {
    const container = containerRef.current

    if (container === null && chats.length === 0) return

    container.scrollTo({
      top: container.scrollHeight,
      behavior: isFirstLoad.current < 2 ? 'auto' : 'smooth'
    })

    isFirstLoad.current = isFirstLoad.current + 1
  }, [chats])

  return (
    <section>
      <ul
        ref={containerRef}
        className='flex flex-col gap-2 h-[450px] w-96 scroll-app bg-neutral-900 pr-3 pl-14 py-1'
      >
        {
          chats.length > 0 && chats.map(({ content, id, user }) => (
            <Message key={id} content={content} user={user} />
          ))
        }
        {
          chats.length === 0 && <li className='text-neutral-500 text-center'>No hay mensajes...</li>
        }
      </ul>
    </section>
  )
}
