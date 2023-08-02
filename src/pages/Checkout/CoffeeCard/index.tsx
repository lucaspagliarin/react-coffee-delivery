import { CardContainer, DetailsContainer, ActionsContainer } from './styles'

import Americano from '../../../assets/Type=Americano.png'
import { Counter } from '../../../components/Counter'
import { Trash } from 'phosphor-react'

export function CoffeeCard() {
  return (
    <CardContainer>
      <DetailsContainer>
        <img src={Americano} alt="" width={64} height={64} />
        <div>
          <span>Expresso Tradicional</span>
          <ActionsContainer>
            <Counter />
            <button>
              <Trash size={16} />
              Remover
            </button>
          </ActionsContainer>
        </div>
      </DetailsContainer>

      <span>R$9,90</span>
    </CardContainer>
  )
}
