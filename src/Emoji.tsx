import { useContext, ImgHTMLAttributes   } from 'react'

import DataContext from './DataContext'

type EmojiProps = JSX.IntrinsicElements["img"] & {
  name: string
}

function Emoji({ name, ...props }: EmojiProps) {
  const data = useContext(DataContext)
  const suffix = data.emojis[name.replaceAll(' ', '-') as keyof typeof data]

  if (!suffix) {
    console.warn(`Emoji ${name} could not be found in the EmojiProvider's data.`)
  }

  return (
    <img
      src={data.baseUrl + suffix}
      alt={name}
      aria-label={name}
      {...props}
    />
  )
}

export default Emoji
