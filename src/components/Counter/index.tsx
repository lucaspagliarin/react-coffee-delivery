import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './styles'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { CoffeeProps } from '../../contexts/CoffeeListContext'

// interface CounterProps {
//   value: number
// }

export function Counter(Coffee: CoffeeProps) {
  const { handleAddItemToCart, handleDecreaseQuantity, getItemQuantity } =
    useContext(CartContext)
  const counter = getItemQuantity(Coffee)

  return (
    <CounterContainer>
      <button onClick={() => handleDecreaseQuantity(Coffee)}>
        <Minus />
      </button>
      <span>{counter}</span>
      <button onClick={() => handleAddItemToCart(Coffee)}>
        <Plus />
      </button>
    </CounterContainer>
  )
}
