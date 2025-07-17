export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  features: string[];
  image: string[];
  category: 'black' | 'pink';
  size: 'small' | 'large';
}