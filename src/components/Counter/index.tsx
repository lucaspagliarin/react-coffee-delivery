import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './styles'

export function Counter() {
  return (
    <CounterContainer>
      <button>
        <Minus />
      </button>
      <span>1</span>
      <button>
        <Plus />
      </button>
    </CounterContainer>
  )
}
