import CoffeeLogo from '../../assets/CoffeeLogo.png'
import { ShoppingCart, MapPin } from 'phosphor-react'
import {
  Cart,
  HeaderComponent,
  LinksContainer,
  Location,
  TotalCartItems,
} from './styles'

export function Header() {
  return (
    <HeaderComponent>
      <img src={CoffeeLogo} alt="" />
      <LinksContainer>
        <Location>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </Location>
        <Cart>
          <ShoppingCart size={22} weight="fill" />
        </Cart>
        <TotalCartItems>31</TotalCartItems>
      </LinksContainer>
    </HeaderComponent>
  )
}
