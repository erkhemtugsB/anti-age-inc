import { Product } from '../types/Product';

export const products: Product[] = [
  {
    id: 1,
    name: "Active NMN Black 2.59 cal",
    price: 199,
    description: "Premium formulation with enhanced bioavailability for optimal NAD+ conversion.",
    features: ["2.59 cal concentration", "Enhanced absorption", "Premium black formulation"],
    image: "bg-gradient-to-br from-gray-900 via-gray-800 to-black",
    category: 'black',
    size: 'small'
  },
  {
    id: 2,
    name: "Active NMN Black 4.28 cal",
    price: 249,
    description: "Maximum strength formulation for advanced anti-aging support and cellular energy.",
    features: ["4.28 cal concentration", "Maximum potency", "Advanced bioactivity"],
    image: "bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900",
    category: 'black',
    size: 'large'
  },
  {
    id: 3,
    name: "Active NMN Pink (Small)",
    price: 199,
    description: "Gentle yet effective formulation perfect for daily wellness and vitality support.",
    features: ["Gentle formulation", "Daily wellness support", "Optimal bioavailability"],
    image: "bg-gradient-to-br from-pink-500 via-pink-400 to-rose-500",
    category: 'pink',
    size: 'small'
  },
  {
    id: 4,
    name: "Active NMN Pink (Large)",
    price: 249,
    description: "Enhanced large-size formulation for comprehensive anti-aging and energy support.",
    features: ["Large size format", "Extended supply", "Enhanced potency"],
    image: "bg-gradient-to-br from-pink-600 via-pink-500 to-pink-700",
    category: 'pink',
    size: 'large'
  }
];