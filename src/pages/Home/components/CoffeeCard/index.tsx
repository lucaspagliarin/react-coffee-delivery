import {
  ActionsContainer,
  CoffeeCardContainer,
  PriceContainer,
  TagList,
} from './styles'

import { Link } from 'react-router-dom'
import { Counter } from '../../../../components/Counter'
import { ShoppingCart } from 'phosphor-react'
import { CoffeeProps } from '../../../../contexts/CoffeeListContext'

export function CoffeeCard(Coffee: CoffeeProps) {
  return (
    <CoffeeCardContainer>
      <img src={Coffee.image} alt="" />
      <TagList>
        {Coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </TagList>
      <h2>{Coffee.name}</h2>
      <p>{Coffee.description}</p>
      <footer>
        <PriceContainer>
          R${' '}
          <span>
            {Intl.NumberFormat('pt-Br', {
              style: 'decimal',
              minimumFractionDigits: 2,
            }).format(Coffee.price)}
          </span>
        </PriceContainer>
        <ActionsContainer>
          <Counter {...Coffee} />
          <Link to={'/checkout'}>
            <button>
              <ShoppingCart weight="fill" />
            </button>
          </Link>
        </ActionsContainer>
      </footer>
    </CoffeeCardContainer>
  )
}
