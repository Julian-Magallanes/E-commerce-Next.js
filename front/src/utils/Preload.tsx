import {IProduct} from "@/app/types"
import {ICategory} from "@/app/types"

export const categoriesToPreLoad: ICategory[] = [
    { id:1, name: 'Smartphones' },
    { id:2,name: 'Laptops' },
    { id:3,name: 'Tablets' },
    { id:5,name: 'Headphones' },
    { id:8,name: 'Cameras' },
    { id:9,name: 'Printers' },
    { id:10,name: 'Monitors' },
    { id:6,name: 'Storage' },
    { id:4,name: 'Accessories' }
];


  
export const productsToPreLoad: IProduct[] = [
    {
      id:"1",
      name: "iPhone 11",
      price: 699,
      description:
        "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
      image:
        "https://res.cloudinary.com/dzxrc9b6o/image/upload/v1712502515/Next/iphone11_ibxhb2.png",
      categoryId: 1,
      stock: 10,
    },
    {
      id:"2",
      name: "MacBook Air",
      price: 999,
      description:
        "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
      image:
        "https://res.cloudinary.com/dzxrc9b6o/image/upload/v1712502514/Next/mac-air_nbucpk.jpg",
      categoryId: 2,
      stock: 10,
    },
    {
      id:"3",
      name: "iPad Pro",
      price: 799,
      description:
        "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
      image:
        "https://res.cloudinary.com/dzxrc9b6o/image/upload/v1712503445/Next/ipad_qud0vh.jpg",
      categoryId: 3,
      stock: 10,
    },
    {
      id:"4",
      name: "Apple Watch Series 6",
      price: 399,
      description:
        "Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
      image:
        "https://res.cloudinary.com/dzxrc9b6o/image/upload/v1712503557/Next/apple_watch_h1kynk.webp",
      categoryId: 4,
      stock: 10,
    },
    {
      id:"5",
      name: "AirPods Pro",
      price: 249,
      description:
        "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
      image:
        "https://res.cloudinary.com/dzxrc9b6o/image/upload/v1712503610/Next/airpods_rrwltw.webp",
      categoryId: 5,
      stock: 10,
    },
    {
      id:"6",
      name: "HomePod mini",
      price: 99,
      description:
        "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
      image:
        "https://res.cloudinary.com/dzxrc9b6o/image/upload/v1712503659/Next/homepod_jnqjbf.jpg",
      categoryId: 6,
      stock: 10,
    },
  ];