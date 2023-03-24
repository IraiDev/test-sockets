import { MdSupervisedUserCircle } from 'react-icons/md'

export function ChatHeader ({ title }) {
  return (
    <header className='bg-neutral-800 flex justify-start items-center gap-3 py-4 pl-16 pr-2'>
      <MdSupervisedUserCircle className='text-3xl text-neutral-400' />
      <h1 className='font-semibold text-2xl leading-9'>{title}</h1>
    </header>
  )
}
