import { CoffeeCard } from '../CoffeeCard'
import { CoffeeListContainer, ListContainer } from './styles'

import { useContext } from 'react'
import { CoffeeListContext } from '../../../../contexts/CoffeeListContext'

export function CoffeeList() {
  const { list } = useContext(CoffeeListContext)

  return (
    <CoffeeListContainer>
      <h1>Nossos Cafés</h1>
      <ListContainer>
        {list.map((coffee) => (
          <CoffeeCard key={coffee.id} {...coffee} />
        ))}
      </ListContainer>
    </CoffeeListContainer>
  )
}
