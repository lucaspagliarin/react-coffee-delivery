import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CartContextProvider } from './contexts/CartContext'
import { CoffeeListContextProvider } from './contexts/CoffeeListContext'
import { OrderContextProvider } from './contexts/OrderContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeListContextProvider>
          <CartContextProvider>
            <OrderContextProvider>
              <Router />
            </OrderContextProvider>
          </CartContextProvider>
        </CoffeeListContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
