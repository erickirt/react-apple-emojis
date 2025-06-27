import { createContext } from 'react'

import type { EmojiData } from './types'

export default createContext<EmojiData>({
  emojis: {},
  baseUrl: ''
})
