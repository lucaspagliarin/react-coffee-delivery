import {
  ActionsContainer,
  CoffeeCardContainer,
  PriceContainer,
  TagList,
} from './styles'

import { Counter } from '../../../../components/Counter'
import { ShoppingCart } from 'phosphor-react'

interface CoffeeProps {
  id: number
  name: string
  description: string
  price: number
  tags: string[]
  image: string
}

export function CoffeeCard({
  tags,
  name,
  description,
  price,
  image,
}: CoffeeProps) {
  return (
    <CoffeeCardContainer>
      <img src={image} alt="" />
      <TagList>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </TagList>
      <h2>{name}</h2>
      <p>{description}</p>
      <footer>
        <PriceContainer>
          R${' '}
          <span>
            {Intl.NumberFormat('pt-Br', {
              style: 'decimal',
              minimumFractionDigits: 2,
            }).format(price)}
          </span>
        </PriceContainer>
        <ActionsContainer>
          <Counter />
          <button>
            <ShoppingCart weight="fill" />
          </button>
        </ActionsContainer>
      </footer>
    </CoffeeCardContainer>
  )
}
