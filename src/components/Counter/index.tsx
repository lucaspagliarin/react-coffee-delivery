import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './styles'
import { useState } from 'react'

export function Counter() {
  const [counter, setCounter] = useState(0)

  return (
    <CounterContainer>
      <button onClick={() => setCounter((state) => state - 1)}>
        <Minus />
      </button>
      <span>{counter}</span>
      <button onClick={() => setCounter((state) => state + 1)}>
        <Plus />
      </button>
    </CounterContainer>
  )
}
