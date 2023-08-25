import { CardContainer, DetailsContainer, ActionsContainer } from './styles'

import { Counter } from '../../../components/Counter'
import { Trash } from 'phosphor-react'
import { CartContext, CartItemType } from '../../../contexts/CartContext'
import { useContext } from 'react'

export function CoffeeCard({ Coffee, quantity }: CartItemType) {
  const { handleRemoveItemFromCart } = useContext(CartContext)
  return (
    <CardContainer>
      <DetailsContainer>
        <img src={Coffee.image} alt="" width={64} height={64} />
        <div>
          <span>{Coffee.name}</span>
          <ActionsContainer>
            <Counter {...Coffee} />
            <button onClick={() => handleRemoveItemFromCart(Coffee)}>
              <Trash size={16} />
              Remover
            </button>
          </ActionsContainer>
        </div>
      </DetailsContainer>

      <span>
        R${' '}
        {Intl.NumberFormat('pt-Br', {
          style: 'decimal',
          minimumFractionDigits: 2,
        }).format(Coffee.price * quantity)}
      </span>
    </CardContainer>
  )
}
