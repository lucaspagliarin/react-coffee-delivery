import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import IntroImage from '../../../../assets/IntroImage.png'
import {
  InfosContainer,
  IntroContainer,
  Item,
  ItemsContainer,
  TitleContainer,
} from './styles'

export function Intro() {
  return (
    <IntroContainer>
      <InfosContainer>
        <TitleContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </TitleContainer>
        <ItemsContainer>
          <Item variant="yellow-dark">
            <div>
              <ShoppingCart weight="fill" />
            </div>
            <span>Compra simples e segura</span>
          </Item>
          <Item variant="base-text">
            <div>
              <Package weight="fill" />
            </div>
            <span>Embalagem mantém o café intacto</span>
          </Item>
          <Item variant="yellow">
            <div>
              <Timer weight="fill" />
            </div>
            <span>Entrega rápida e rastreada</span>
          </Item>
          <Item variant="purple">
            <div>
              <Coffee weight="fill" />
            </div>
            <span>O café chega fresquinho até você</span>
          </Item>
        </ItemsContainer>
      </InfosContainer>
      <div>
        <img src={IntroImage} alt="" />
      </div>
    </IntroContainer>
  )
}
