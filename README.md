# SWEETOMI - African Fashion E-Commerce

A beautiful, minimal, and modern e-commerce website for Sweetomi, celebrating African heritage through exquisite handcrafted fashion. Built with Vue 3, TypeScript, TailwindCSS, and Heroicons with a glassmorphism design inspired by Apple.

## Features

- 🎨 **Minimal Glassmorphism Design** - Clean white theme with Apple-inspired aesthetics
- 🛍️ **Full E-Commerce Functionality** - Shopping cart, product catalog, and checkout flow
- 📱 **Fully Responsive** - Beautiful on all devices
- ⚡ **Fast & Modern** - Built with Vue 3, TypeScript, and Vite
- 🎯 **Type-Safe** - Full TypeScript support
- 🐳 **Docker Ready** - Easy deployment with Docker
- 🎭 **African Fashion Focus** - Showcasing authentic African fabrics and designs

## Tech Stack

- **Frontend Framework**: Vue 3 with Composition API
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Icons**: Heroicons
- **Build Tool**: Vite
- **Container**: Docker

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn
- Docker (optional, for containerized deployment)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd sweetomi
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Docker Deployment

### Development with Docker

```bash
docker-compose up sweetomi-dev
```

Access the app at `http://localhost:5173`

### Production with Docker

1. **Build the Docker image**
   ```bash
   docker-compose build sweetomi-web
   ```

2. **Run the container**
   ```bash
   docker-compose up sweetomi-web
   ```

Access the app at `http://localhost:3000`

### Using Docker individually

**Development:**
```bash
docker run -p 5173:5173 -v $(pwd):/app sweetomi-dev
```

**Production:**
```bash
docker build -t sweetomi .
docker run -p 3000:80 sweetomi
```

## Project Structure

```
sweetomi/
├── src/
│   ├── components/        # Reusable Vue components
│   │   ├── Header.vue
│   │   ├── Footer.vue
│   │   └── ProductCard.vue
│   ├── views/            # Page components
│   │   ├── Home.vue
│   │   ├── Shop.vue
│   │   ├── ProductDetail.vue
│   │   ├── Cart.vue
│   │   ├── About.vue
│   │   └── Contact.vue
│   ├── stores/           # State management
│   │   └── cart.ts
│   ├── router/           # Routing logic
│   │   └── router.ts
│   ├── types/            # TypeScript types
│   │   └── index.ts
│   ├── data.ts           # Product data
│   ├── App.vue           # Root component
│   ├── main.ts           # App entry point
│   └── style.css         # Global styles
├── public/               # Static assets
├── Dockerfile            # Docker configuration
├── docker-compose.yml    # Docker Compose setup
├── nginx.conf           # Nginx configuration
├── tailwind.config.js   # Tailwind configuration
└── vite.config.ts       # Vite configuration
```

## Available Pages

- **Home** (`/`) - Hero section, featured products, about preview
- **Shop** (`/shop`) - Full product catalog with filtering and sorting
- **Product Detail** - Individual product page with size/color selection
- **Cart** - Shopping cart with checkout
- **About** - Brand story and values
- **Contact** - Contact form and information

## Customization

### Adding Products

Edit `src/data.ts` to add or modify products:

```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  description: 'Product description',
  price: 10000,
  image: 'main-image-url',
  images: ['image1', 'image2'],
  category: 'Category',
  sizes: ['S', 'M', 'L'],
  colors: ['Color1', 'Color2'],
  inStock: true,
  featured: true
}
```

### Styling

- Global styles: `src/style.css`
- Tailwind config: `tailwind.config.js`
- Component styles: Individual `.vue` files

### Colors

Update the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: { /* your colors */ }
    }
  }
}
```

## Features Breakdown

### Shopping Cart
- Add to cart functionality
- Quantity management
- Local storage persistence
- Real-time total calculation

### Product Catalog
- Category filtering
- Sort by price, name, featured
- Search functionality ready
- Responsive grid layout

### Design System
- Glassmorphism effects
- Smooth animations
- Hover effects
- Mobile-first responsive design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved - Sweetomi © 2024

## Contact

For questions or support, please contact:
- Email: hello@sweetomi.com
- Website: [Your Website]

---

Built with ❤️ for African Fashion
# sweetomi
