import type { Product } from "./types";

export const products: Product[] = [
  {
    id: "1",
    name: "Adire Elegance Dress",
    description:
      "Handcrafted traditional Adire dress with contemporary silhouette. Features intricate tie-dye patterns unique to Nigerian craftsmanship.",
    price: 12500,
    image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=800",
    images: [
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=800",
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800",
      "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=800",
    ],
    category: "Dresses",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Indigo", "Brown", "Green"],
    inStock: true,
    featured: true,
  },
  {
    id: "2",
    name: "Ankara Royal Gown",
    description:
      "Majestic ankara print gown with flowing design. Perfect for special occasions, weddings, and celebrations.",
    price: 18000,
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800",
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800",
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800",
    ],
    category: "Gowns",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Multi-color", "Gold", "Red"],
    inStock: true,
    featured: true,
  },
  {
    id: "3",
    name: "Kente Heritage Wrap",
    description:
      "Authentic Kente cloth wrap with gold threading. A timeless piece representing African heritage and elegance.",
    price: 15000,
    image: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=800",
    images: [
      "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=800",
      "https://images.unsplash.com/photo-1617127365657-c47fa864d8bc?w=800",
    ],
    category: "Traditional",
    sizes: ["One Size"],
    colors: ["Gold", "Royal Blue", "Green"],
    inStock: true,
    featured: true,
  },
  {
    id: "4",
    name: "Modern Dashiki Set",
    description:
      "Contemporary dashiki top and pants set. Blends traditional African patterns with modern tailoring.",
    price: 13500,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800",
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800",
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800",
    ],
    category: "Sets",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Orange"],
    inStock: true,
    featured: false,
  },
  {
    id: "5",
    name: "Aso Oke Occasion Wear",
    description:
      "Luxurious Aso Oke fabric crafted into stunning occasion wear. Hand-woven with metallic accents.",
    price: 25000,
    image: "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=800",
    images: [
      "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=800",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800",
    ],
    category: "Occasion Wear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Silver", "Gold", "Purple"],
    inStock: true,
    featured: true,
  },
  {
    id: "6",
    name: "Batik Summer Dress",
    description:
      "Light and breezy batik print dress perfect for warm weather. Features African-inspired patterns.",
    price: 9500,
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800",
    images: [
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800",
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=800",
    ],
    category: "Dresses",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Blue", "Yellow", "Pink"],
    inStock: true,
    featured: false,
  },
  {
    id: "7",
    name: "Bogolan Mud Cloth Tunic",
    description:
      "Traditional Malian mud cloth tunic with geometric patterns. Each piece tells a unique story.",
    price: 11000,
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800",
    images: [
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800",
    ],
    category: "Tops",
    sizes: ["S", "M", "L"],
    colors: ["Earth Brown", "Black", "White"],
    inStock: true,
    featured: false,
  },
  {
    id: "8",
    name: "Ankara Cocktail Dress",
    description:
      "Chic ankara print cocktail dress with modern cut. Perfect for evening events and parties.",
    price: 14500,
    image: "https://images.unsplash.com/photo-1617127365657-c47fa864d8bc?w=800",
    images: [
      "https://images.unsplash.com/photo-1617127365657-c47fa864d8bc?w=800",
      "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=800",
    ],
    category: "Dresses",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Multi-color", "Orange", "Teal"],
    inStock: true,
    featured: true,
  },
];

export const categories = [
  "All",
  "Dresses",
  "Gowns",
  "Traditional",
  "Sets",
  "Occasion Wear",
  "Tops",
];
