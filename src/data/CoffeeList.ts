import Americano from '../assets/Type=Americano.png'
import Tradicional from '../assets/Type=Expresso.png'
import Cremoso from '../assets/Type=Expresso Cremoso.png'
import Gelado from '../assets/Type=Café Gelado.png'
import ComLeite from '../assets/Type=Café com Leite.png'
import Latte from '../assets/Type=Latte.png'
import Cappucino from '../assets/Type=Capuccino.png'
import Macchiato from '../assets/Type=Macchiato.png'
import Mochaccino from '../assets/Type=Mochaccino.png'
import ChocolateQuente from '../assets/Type=Chocolate Quente.png'
import Cubano from '../assets/Type=Cubano.png'
import Havaiano from '../assets/Type=Havaiano.png'
import Arabe from '../assets/Type=Árabe.png'
import Irlandes from '../assets/Type=Irlandês.png'

export const CoffeeList = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    tags: ['Tradicional'],
    image: Tradicional,
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    tags: ['Tradicional'],
    image: Americano,
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    tags: ['Tradicional'],
    image: Cremoso,
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    tags: ['Tradicional', 'Gelado'],
    image: Gelado,
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    tags: ['Tradicional', 'Com Leite'],
    image: ComLeite,
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    tags: ['Tradicional', 'Com Leite'],
    image: Latte,
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    tags: ['Tradicional', 'Com Leite'],
    image: Cappucino,
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    tags: ['Tradicional', 'Com Leite'],
    image: Macchiato,
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    tags: ['Tradicional', 'Com Leite'],
    image: Mochaccino,
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    tags: ['Especial', 'Com Leite'],
    image: ChocolateQuente,
  },
  {
    id: 11,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    image: Cubano,
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    tags: ['Especial'],
    image: Havaiano,
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    tags: ['Especial'],
    image: Arabe,
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    tags: ['Especial', 'Alcoólico'],
    image: Irlandes,
  },
]
