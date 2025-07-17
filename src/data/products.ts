import { Product } from '../types/Product';

export const products: Product[] = [
  {
    id: 1,
    name: "Active NMN Black (Small)",
    price: 199,
    description: "Premium formulation with enhanced bioavailability for optimal NAD+ conversion.",
    features: ["2.59 cal concentration", "Enhanced absorption", "Premium black formulation"],
    image: [
      "/public/black.jpeg",
      "/public/black-box.jpeg",
      "/public/small-black/small-black.jpeg"
    ],
    category: 'black',
    size: 'small'
  },
  {
    id: 2,
    name: "Active NMN Black (Large)",
    price: 249,
    description: "Maximum strength formulation for advanced anti-aging support and cellular energy.",
    features: ["4.28 cal concentration", "Maximum potency", "Advanced bioactivity"],
    image: [
      "/public/black.jpeg",
      "/public/black-box.jpeg",
      "/public/big-black/big-black.jpeg"
    ],
    category: 'black',
    size: 'large'
  },
  {
    id: 3,
    name: "Active NMN Pink (Small)",
    price: 199,
    description: "Gentle yet effective formulation perfect for daily wellness and vitality support.",
    features: ["Gentle formulation", "Daily wellness support", "Optimal bioavailability"],
    image: [
      "/public/pink.jpeg",
      "/public/pink-box.jpeg",
      "/public/small-pink/small-pink.jpeg"
    ],
    category: 'pink',
    size: 'small'
  },
  {
    id: 4,
    name: "Active NMN Pink (Large)",
    price: 249,
    description: "Enhanced formulation for comprehensive anti-aging and energy support.",
    features: ["Large size format", "Extended supply", "Enhanced potency"],
    image: [
      "/public/pink.jpeg",
      "/public/pink-box.jpeg",
      "/public/big-pink/big-pink.jpeg"
    ],
    category: 'pink',
    size: 'large'
  }
];