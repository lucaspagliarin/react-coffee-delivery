import CoffeeLogo from '../../assets/CoffeeLogo.png'
import { ShoppingCart, MapPin } from 'phosphor-react'
import {
  Cart,
  HeaderComponent,
  LinksContainer,
  Location,
  TotalCartItems,
} from './styles'

import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { Link } from 'react-router-dom'

export function Header() {
  const { cart, getCartSize } = useContext(CartContext)
  const amount = getCartSize(cart)

  return (
    <HeaderComponent>
      <Link to={'/'}>
        <img src={CoffeeLogo} alt="" height={40} />
      </Link>
      <LinksContainer>
        <Location>
          <MapPin size={22} weight="fill" />
          Caxias do Sul, RS
        </Location>
        <Link to={'/checkout'}>
          <Cart>
            <ShoppingCart size={22} weight="fill" />
          </Cart>
        </Link>
        {amount !== 0 ? <TotalCartItems>{amount}</TotalCartItems> : ''}
      </LinksContainer>
    </HeaderComponent>
  )
}
