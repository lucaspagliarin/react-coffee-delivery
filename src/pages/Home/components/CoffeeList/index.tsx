import { CoffeeCard } from '../CoffeeCard'
import { CoffeeListContainer, ListContainer } from './styles'

import { CoffeeList as CoffeeData } from '../../../../data/CoffeeList'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h1>Nossos Cafés</h1>

      <ListContainer>
        {CoffeeData.map((coffee) => (
          <CoffeeCard key={coffee.id} {...coffee} />
        ))}
      </ListContainer>
    </CoffeeListContainer>
  )
}
