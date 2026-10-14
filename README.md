# 🍣 D'Toditos Sushi — Landing Page & Delivery

Landing page de alto impacto desarrollada para **D'Toditos Sushi**, con el mismo stack moderno de alto rendimiento que Satori Sushi, adaptada a la identidad visual de la marca (Negro, Verde Neón y toques de Naranja) con soporte para catálogo completo de sushi y bajón.

---

## ✨ Características y Mejoras Implementadas

- 🍣 **Identidad Visual Oficial:** Paleta inspirada en el logo y local (fondo oscuro `#0a0c0a`, verde neón `#22c55e`, contrastes nítidos y detalles en naranja).
- 🔍 **Buscador en Tiempo Real:** Barra de búsqueda instantánea para filtrar entre decenas de opciones (promos, rolls sin arroz, sushi burgers, salchipapas, chorrillanas, etc.).
- 📑 **Navegación por Categorías:**
  1. **Promos Sushi:** De 20 a 140 piezas mixtas (Maki, Uramaki, Temaki, Makisu, Sumeshi, Nigiri, Mister, D'todito 100 pzas, Imperio 140 pzas).
  2. **Especiales & Tortas:** Promos personalizadas a elección, tortas de sushi (50, 70, 100 pzas) y el exclusivo Ramo de Sushi.
  3. **Sushi Burgers:** Sake Burger con salmón, PPQ, Sencilla y Deluxe.
  4. **Rolls & Gohan:** Handrolls, Gohan bowls con flor de palta, rolls tradicionales y rolls sin arroz (Keto).
  5. **Salchipapas & Bajón:** Salchipapas (Pequeña, Mediana, Familiar), Salchipollo, Pollipapas, Chorrillanas y papas fritas.
  6. **Burgers & Arepas:** Hamburguesas con papas fritas, churrascos (Italiano y Barroluco) y arepas rellenas.
  7. **Postres:** Fresas con crema artesanal.
- 🛒 **Carrito Inteligente & Checkout para WhatsApp:**
  - Selector de modalidad: **Delivery a Domicilio** vs **Retiro en Local**.
  - Campo dinámico de dirección de entrega.
  - Notas especiales y personalizaciones del pedido.
  - Generación automática del mensaje estructurado y listo para confirmar con un solo clic.
- 📸 **Galería con Fotos Reales y Modal:** Fotos reales de sus platos (Ramo de sushi, sushi burger, salchipapas, bowls, rolls sin arroz y fresas con crema).
- ⚡ **Optimizado para Producción:** Turbopack, Framer Motion, Tailwind CSS v4 y Next.js 16.

---

## 🛠️ Stack Tecnológico

- **Framework:** [Next.js](https://nextjs.org/) 16 (App Router)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animaciones:** [Framer Motion](https://www.framer.com/motion/)
- **Iconografía:** [Lucide React](https://lucide.dev/)

---

## 🚀 Inicio Rápido

### 1. Iniciar en modo desarrollo
```bash
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la página en vivo.

### 2. Compilar para producción
```bash
npm run build
```

---

## 📁 Estructura del Proyecto

```
LandingDeTodito/
├── app/
│   ├── globals.css         # Paleta de colores negro y verde neón
│   ├── layout.tsx          # Metadata SEO, fuentes y Providers
│   ├── page.tsx            # Ensamblado principal de la landing
│   └── Providers.tsx       # Provider del contexto del carrito
├── components/
│   ├── Navbar.tsx          # Navegación con logo real y contador de pedido
│   ├── Hero.tsx            # Hero con llamado de acción y ambientación
│   ├── About.tsx           # Filosofía de D'Toditos y especialidades
│   ├── Menu.tsx            # Buscador en vivo + pestañas de carta y botón Agregar
│   ├── Cart.tsx            # Carrito flotante, drawer, selector de entrega y WhatsApp
│   ├── Gallery.tsx         # Galería con fotos reales y visor lightbox
│   ├── HowToOrder.tsx      # Pasos claros para pedir
│   ├── CTASection.tsx      # Banner final de conversión
│   └── Footer.tsx          # Horarios, contacto y derechos
├── context/
│   └── CartContext.tsx     # Estado global, persistencia local y modalidad
├── data/
│   ├── menu.ts             # Carta completa tipada con precios de WhatsApp
│   └── siteConfig.ts       # Teléfono (+569 97541283), enlaces y textos
└── public/
    └── images/             # Fotografías reales y logo optimizado
```
