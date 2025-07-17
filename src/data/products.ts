import { Product } from '../types/Product';

export const products: Product[] = [
  {
    id: 1,
    name: "Active NMN Black 2.59 cal",
    price: 199,
    description: "Premium formulation with enhanced bioavailability for optimal NAD+ conversion.",
    features: ["2.59 cal concentration", "Enhanced absorption", "Premium black formulation"],
    image: [
      "/public/small-black/small-black.jpeg",
      "https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg",
      "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg"
    ],
    category: 'black',
    size: 'small'
  },
  {
    id: 2,
    name: "Active NMN Black 4.28 cal",
    price: 249,
    description: "Maximum strength formulation for advanced anti-aging support and cellular energy.",
    features: ["4.28 cal concentration", "Maximum potency", "Advanced bioactivity"],
    image: [
      "/public/big-black/big-black.jpeg",
      "https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg",
      "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg"
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
      "/public/small-pink/small-pink.jpeg",
      "https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg",
      "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg"
    ],
    category: 'pink',
    size: 'small'
  },
  {
    id: 4,
    name: "Active NMN Pink (Large)",
    price: 249,
    description: "Enhanced large-size formulation for comprehensive anti-aging and energy support.",
    features: ["Large size format", "Extended supply", "Enhanced potency"],
    image: [
      "/public/big-pink/big-pink.jpeg",
      "https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg",
      "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg"
    ],
    category: 'pink',
    size: 'large'
  }
];