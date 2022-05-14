import { Anchor, Image } from 'components'
import getConfig from 'next/config'

export default function Header() {
  const { name } = getConfig().publicRuntimeConfig || {}
  return (
    <header className='pt-20 pb-12 px-5'>
      <Anchor href='/'>
        <Image
          src='https://media.discordapp.net/attachments/898657008553701406/960317925754040340/solnftdropslogo.png'
          height={111}
          width={841}
          alt='Solnft Drops'
        />
      </Anchor>
      <p className='text-2xl dark:text-white text-center'>
        <Anchor href='https://discord.gg/mZEgBr7r'>{name}</Anchor>
      </p>
    </header>
  )
}
