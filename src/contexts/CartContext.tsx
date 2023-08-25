import { ReactNode, createContext, useState } from 'react'
import { CoffeeProps } from './CoffeeListContext'

interface CartContextProviderType {
  children: ReactNode
}

export interface CartItemType {
  Coffee: CoffeeProps
  quantity: number
}

interface CartContextType {
  cart: CartItemType[]
  getCartSize: (cart: CartItemType[]) => number
  getTotalCartValue: (cart: CartItemType[]) => number
  handleAddItemToCart: (Coffee: CoffeeProps) => void
  handleDecreaseQuantity: (Coffee: CoffeeProps) => void
  getItemQuantity: (Coffee: CoffeeProps) => number
  handleRemoveItemFromCart: (Coffee: CoffeeProps) => void
  resetCart: () => void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderType) {
  const [cart, setCart] = useState<CartItemType[]>([])

  function getCartSize(cart: CartItemType[]) {
    return cart.reduce((acc, item) => acc + item.quantity, 0)
  }

  function getTotalCartValue(cart: CartItemType[]) {
    return cart.reduce(
      (acc, item) => acc + item.Coffee.price * item.quantity,
      0,
    )
  }

  function getItemQuantity(Coffee: CoffeeProps) {
    const filteredList = cart.filter((item) => item.Coffee.id === Coffee.id)
    if (filteredList.length > 0) {
      return filteredList.reduce((acc, item) => acc + item.quantity, 0)
    }
    return 0
  }

  function resetCart() {
    const defaultCart: CartItemType[] = []
    setCart(defaultCart)
  }

  function handleAddItemToCart(Coffee: CoffeeProps) {
    const itemIndex = cart.findIndex((item) => item.Coffee.id === Coffee.id)
    console.log(itemIndex)

    if (itemIndex === -1) {
      const newCartItem = {
        Coffee,
        quantity: 1,
      }

      setCart((state) => [...state, newCartItem])
    } else {
      setCart((cart) =>
        cart.map((item) => {
          if (item.Coffee.id === Coffee.id) {
            return { ...item, quantity: item.quantity + 1 }
          }
          return item
        }),
      )
    }
  }

  function handleRemoveItemFromCart(Coffee: CoffeeProps) {
    const filteredCart = cart.filter((item) => item.Coffee.id !== Coffee.id)
    setCart(filteredCart)
  }

  function handleDecreaseQuantity(Coffee: CoffeeProps) {
    const cartItem = cart.find((item) => item.Coffee.id === Coffee.id)

    if (cartItem) {
      if (cartItem.quantity === 1) {
        handleRemoveItemFromCart(cartItem.Coffee)
      } else {
        setCart((cart) =>
          cart.map((item) => {
            if (item.Coffee.id === Coffee.id) {
              return { ...item, quantity: item.quantity - 1 }
            }
            return item
          }),
        )
      }
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        getCartSize,
        getTotalCartValue,
        handleAddItemToCart,
        getItemQuantity,
        handleDecreaseQuantity,
        handleRemoveItemFromCart,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
