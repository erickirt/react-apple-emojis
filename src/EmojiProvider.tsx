import { PropsWithChildren} from 'react'

import type { EmojiData } from './types'
import DataContext from './DataContext'

type EmojiProviderProps = PropsWithChildren<{
  data: EmojiData
}>

function EmojiProvider({ data, children }: EmojiProviderProps) {
  if (!data) {
    throw new Error('Please pass a data value to EmojiProvider')
  }

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  )
}

export default EmojiProvider
