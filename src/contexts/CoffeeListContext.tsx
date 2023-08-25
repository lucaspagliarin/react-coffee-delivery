import { ReactNode, createContext } from 'react'

import { CoffeeList } from '../data/CoffeeList'

export interface CoffeeProps {
  id: number
  name: string
  description: string
  price: number
  tags: string[]
  image: string
}

interface CoffeeListContextProviderType {
  children: ReactNode
}

interface CoffeeListContextType {
  list: CoffeeProps[]
}

export const CoffeeListContext = createContext({} as CoffeeListContextType)

export function CoffeeListContextProvider({
  children,
}: CoffeeListContextProviderType) {
  return (
    <CoffeeListContext.Provider value={{ list: CoffeeList }}>
      {children}
    </CoffeeListContext.Provider>
  )
}
