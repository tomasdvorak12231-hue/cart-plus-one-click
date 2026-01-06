import { Product } from '@/context/CartContext';
import aquaApple from '@/assets/aqua-apple.png';
import aquaStrawberry from '@/assets/aqua-strawberry.png';
import aquaNatural from '@/assets/aqua-natural.png';

export const products: Product[] = [
  {
    id: 'aqua-apple',
    name: 'Aqua Naturale',
    flavor: 'Apple',
    price: 2.99,
    image: aquaApple,
    color: 'apple',
  },
  {
    id: 'aqua-strawberry',
    name: 'Aqua Naturale',
    flavor: 'Strawberry',
    price: 2.99,
    image: aquaStrawberry,
    color: 'strawberry',
  },
  {
    id: 'aqua-natural',
    name: 'Aqua Naturale',
    flavor: 'Natural',
    price: 2.49,
    image: aquaNatural,
    color: 'natural',
  },
];
