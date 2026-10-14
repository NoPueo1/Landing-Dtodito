# D'Toditos Sushi — Landing Page

Landing page para **D'Toditos Sushi** (Quillón, Chile).  
Desarrollada con Next.js, TypeScript, Tailwind CSS y Framer Motion.

---

## 🛠️ Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **Lucide React**

---

## 🚀 Cómo correr el proyecto

```bash
# 1. Instalar dependencias
npm install

# 2. Correr en desarrollo
npm run dev

# 3. Compilar para producción
npm run build
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la página.

---

## 📁 Estructura

```
├── app/            # Layout, estilos globales y página principal
├── components/     # Componentes (Navbar, Hero, About, Menu, Cart, Gallery, etc.)
├── context/        # Contexto y lógica del carrito
├── data/           # Carta, precios y datos de contacto
└── public/         # Fotos reales de los platos y logo
```

---

## ⚙️ Modificar datos

- **Menú y precios:** [`data/menu.ts`](./data/menu.ts)
- **Teléfono y redes:** [`data/siteConfig.ts`](./data/siteConfig.ts)
- **Fotos:** [`public/images/`](./public/images/)
