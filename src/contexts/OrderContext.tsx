import { ReactNode, createContext, useContext, useState } from 'react'
import { CartContext, CartItemType } from './CartContext'

interface AddressType {
  cep: string
  street: string
  number: string
  comp?: string | null
  bairro: string
  city: string
  uf: string
}

interface OrderContextProviderType {
  children: ReactNode
}

interface CreateOrderData {
  cep: string
  street: string
  number: string
  comp?: string | undefined
  bairro: string
  city: string
  uf: string
  paymentMethod: 'credit' | 'debit' | 'money' | undefined
}

interface OrderType {
  cart: CartItemType[]
  address: AddressType
  paymentMethod: 'credit' | 'debit' | 'money' | undefined
  deliveryFee: number
}

interface OrderContextType {
  cart: CartItemType[]
  address: AddressType
  paymentMethod: 'credit' | 'debit' | 'money' | undefined
  deliveryFee: number
  getTotalValue: () => number
  createNewOrder: (data: CreateOrderData) => void
}

export const OrderContext = createContext({} as OrderContextType)

export function OrderContextProvider({ children }: OrderContextProviderType) {
  const { cart, getTotalCartValue, resetCart } = useContext(CartContext)
  const [deliveryFee] = useState(3.5)

  const defaultOrder: OrderType = {
    cart,
    address: {
      bairro: '',
      cep: '',
      city: '',
      street: '',
      number: '',
      uf: '',
      comp: '',
    },
    paymentMethod: undefined,
    deliveryFee,
  }

  const [order, setOrder] = useState<OrderType>(defaultOrder)

  function getTotalValue() {
    return getTotalCartValue(cart) + deliveryFee
  }

  function createNewOrder(data: CreateOrderData) {
    const newOrder = {
      cart,
      address: {
        cep: data.cep,
        street: data.street,
        number: data.number,
        comp: data.comp,
        bairro: data.bairro,
        city: data.city,
        uf: data.uf,
      },
      paymentMethod: data.paymentMethod,
      deliveryFee,
    }
    setOrder(newOrder)
    resetCart()
  }

  return (
    <OrderContext.Provider
      value={{
        ...order,
        getTotalValue,
        createNewOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
