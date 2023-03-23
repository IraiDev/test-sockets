import { useUserStore } from '../../store/useUserStore'

const MESSAGE_POSITION = {
  sended: 'place-self-end bg-emerald-600 text-white',
  received: 'place-self-start bg-neutral-700 text-white'
}

export function Message ({ user, content }) {
  const { user: loggedUser } = useUserStore()

  const messageType = loggedUser.userName === user.userName ? 'sended' : 'received'

  return (
    <div
      className={`
        p-2 rounded-md max-w-[80%] h-auto whitespace-pre-wrap break-words
        flex flex-col gap-1
        ${MESSAGE_POSITION[messageType]}
      `}
    >
      <small>{user.userName}</small>
      <span>{content}</span>
    </div>
  )
}
