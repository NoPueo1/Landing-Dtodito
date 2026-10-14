export interface MenuItem {
  name: string;
  description?: string;
  price: number;
  pieces?: number | string;
  unit?: string;
  badge?: string;
  image?: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  subtitle?: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: "promos",
    label: "Promos Sushi",
    subtitle: "Tablas armadas con la mejor combinación de rolls frescos y fritos",
    items: [
      {
        name: "Promo Maki",
        description: "20 piezas mixtas (rolls fritos y fríos) + papas fritas incluidas",
        price: 10990,
        pieces: 20,
        unit: "piezas",
        badge: "20 Pzas + Papas",
      },
      {
        name: "Promo Uramaki",
        description: "30 piezas mixtas variadas, balance perfecto de sabores",
        price: 12490,
        pieces: 30,
        unit: "piezas",
        badge: "30 Pzas",
      },
      {
        name: "Promo Temaki",
        description: "40 piezas mixtas con surtido en panko, sésamo y queso",
        price: 15490,
        pieces: 40,
        unit: "piezas",
        badge: "40 Pzas",
      },
      {
        name: "Promo Makisu",
        description: "50 piezas mixtas variadas + porción de papas fritas",
        price: 17990,
        pieces: 50,
        unit: "piezas",
        badge: "50 Pzas + Papas",
      },
      {
        name: "Promo Sumeshi",
        description: "60 piezas mixtas para compartir con familia o amigos",
        price: 19990,
        pieces: 60,
        unit: "piezas",
        badge: "60 Pzas",
      },
      {
        name: "Promo Nigiri",
        description: "70 piezas mixtas de rolls selectos y crujientes",
        price: 21490,
        pieces: 70,
        unit: "piezas",
        badge: "70 Pzas",
      },
      {
        name: "Promo Mister",
        description: "80 piezas mixtas surtidas al máximo nivel",
        price: 23490,
        pieces: 80,
        unit: "piezas",
        badge: "80 Pzas",
      },
      {
        name: "Promo D'todito",
        description: "100 piezas mixtas: la promo estrella para tus juntas y fiestas",
        price: 29490,
        pieces: 100,
        unit: "piezas",
        badge: "100 Pzas · Más Pedida",
      },
      {
        name: "Promo Imperio",
        description: "140 piezas mixtas: el festín definitivo de sushi",
        price: 37490,
        pieces: 140,
        unit: "piezas",
        badge: "140 Pzas · Mega Tabla",
      },
    ],
  },
  {
    id: "especiales",
    label: "Especiales & Tortas",
    subtitle: "Tortas de sushi, ramos personalizados y promos a tu pinta",
    items: [
      {
        name: "Promo Especial (40 Piezas)",
        description: "100% a tu elección: elige 1 proteína + 1 vegetal + queso crema + tu envoltura preferida",
        price: 18990,
        pieces: 40,
        unit: "piezas",
        badge: "A Elección",
      },
      {
        name: "Torta de Sushi (50 Piezas)",
        description: "Espectacular torta armada con 50 piezas de sushi decoradas para celebraciones",
        price: 19990,
        pieces: 50,
        unit: "piezas",
        badge: "Cumpleaños",
      },
      {
        name: "Torta de Sushi (70 Piezas)",
        description: "Torta de sushi de 3 pisos/niveles con flor de palta y decoración gourmet",
        price: 24990,
        pieces: 70,
        unit: "piezas",
        badge: "70 Piezas",
      },
      {
        name: "Torta de Sushi (100 Piezas)",
        description: "Gran torta de sushi monumental para fiestas y eventos inolvidables",
        price: 30990,
        pieces: 100,
        unit: "piezas",
        badge: "100 Piezas",
      },
      {
        name: "Ramo de Sushi D'Toditos",
        description: "Arreglo tipo ramo de flores pero con rolls de sushi frescos, empaque de regalo y lazo",
        price: 21990,
        badge: "Regalo Exclusivo",
        image: "/images/ramo-sushi.jpg",
      },
    ],
  },
  {
    id: "burgers",
    label: "Sushi Burgers",
    subtitle: "Contundentes hamburguesas con tapas de arroz apanado crujiente",
    items: [
      {
        name: "Sake Burger",
        description: "Salmón fresco, palta hass y abundante queso crema entre tapas de arroz crujiente",
        price: 8500,
        badge: "Salmón Premium",
        image: "/images/sushi-burger.jpg",
      },
      {
        name: "Sushi Burguer PPQ",
        description: "Pollo apanado crocante, palta hass y queso crema",
        price: 7000,
        badge: "Clásica",
      },
      {
        name: "Sushi Burguer Sencilla",
        description: "Pollo apanado, kanikama, cebollín fresco, palta y queso crema",
        price: 8000,
        badge: "Favorita",
      },
      {
        name: "Sushi Burguer Deluxe",
        description: "Doble proteína: pollo apanado + camarón apanado crujiente, palta y queso crema",
        price: 9000,
        badge: "Doble Proteína",
      },
    ],
  },
  {
    id: "rolls-gohan",
    label: "Rolls & Gohan",
    subtitle: "Handrolls crujientes, bowls armados y rolls sin arroz",
    items: [
      {
        name: "Handroll Crujiente",
        description: "1 Proteína (Pollo, Camarón o Kanikama / Salmón +$1.000) + 1 Vegetal + Queso crema. Frito al instante",
        price: 3500,
        badge: "Al Paso",
      },
      {
        name: "Gohan Bowl D'Toditos",
        description: "Base de arroz sushi, 1 proteína, 2 vegetales a elección, queso crema y lluvia de sésamo o ciboulette con flor de palta",
        price: 7000,
        badge: "Gohan Bowl",
        image: "/images/gohan-bowl.jpg",
      },
      {
        name: "Roll Clásico (10 Cortes)",
        description: "1 Proteína, 1 vegetal, queso crema. Envolturas a elección: Panko, Nori, Queso, Ciboulette, Sésamo o Palta (Salmón +$1.000)",
        price: 5000,
        pieces: 10,
        unit: "cortes",
        badge: "10 Cortes",
      },
      {
        name: "Roll Sin Arroz (Keto)",
        description: "Pura proteína y sabor sin arroz: 1 proteína, 2 vegetales y queso crema. Envoltura a elección en panko, palta, nori o sésamo",
        price: 8500,
        pieces: 10,
        unit: "cortes",
        badge: "100% Relleno / Sin Arroz",
        image: "/images/sushi-sin-arroz.jpg",
      },
    ],
  },
  {
    id: "picoteos",
    label: "Salchipapas & Bajón",
    subtitle: "Papas crujientes, vienesas, pollo y chorrillanas para compartir",
    items: [
      {
        name: "Salchipapas Pequeña",
        description: "Papas fritas crujientes con abundantes vienesas doradas",
        price: 6000,
        badge: "Individual",
        image: "/images/salchipapas.jpg",
      },
      {
        name: "Salchipapas Mediana",
        description: "Porción ideal para dos personas con vienesas doradas",
        price: 7000,
        badge: "Para 2",
      },
      {
        name: "Salchipapas Familiar",
        description: "Bandeja gigante de papas fritas y vienesas para toda la mesa",
        price: 9000,
        badge: "Familiar",
      },
      {
        name: "Salchipollo Pequeña",
        description: "Papas fritas con vienesas y trozos de pollo dorados",
        price: 6500,
      },
      {
        name: "Salchipollo Mediana",
        description: "Papas fritas con vienesas y pollo dorado, perfecta para compartir",
        price: 8000,
      },
      {
        name: "Salchipollo Familiar",
        description: "Bandeja grande cargada de papas, vienesas y pollo",
        price: 11000,
        badge: "Familiar",
      },
      {
        name: "Salchipollo Full",
        description: "La versión más contundente de salchipollo de la casa",
        price: 14490,
        badge: "Ultra Full",
      },
      {
        name: "Pollipapas Familiar",
        description: "Papas fritas con generosa porción de pollo apanado y dorado",
        price: 12000,
        badge: "Familiar",
      },
      {
        name: "Chorrillana Personal",
        description: "Cama de papas fritas, carne vacuna, pollo, vienesa, cebolla caramelizada y huevos fritos",
        price: 10990,
        badge: "Contundente",
      },
      {
        name: "Chorrillana Familiar",
        description: "La reina del bajón: papas, carne, pollo, vienesa, cebolla y huevos para compartir",
        price: 17990,
        badge: "Para Compartir",
      },
      {
        name: "Papas Fritas Familiares",
        description: "Bandeja familiar de papas fritas doradas y crujientes con salsas",
        price: 7000,
        badge: "Papas Solas",
      },
    ],
  },
  {
    id: "sandwiches",
    label: "Burgers & Arepas",
    subtitle: "Hamburguesas caseras con papas, churrascos y arepas rellenas",
    items: [
      {
        name: "Hamburguesa Sencilla (+ Papas)",
        description: "Carne o pollo, lechuga fresca, tomate, queso fundido y papas fritas incluidas",
        price: 7000,
        badge: "Con Papas Fritas",
      },
      {
        name: "Hamburguesa Especial (+ Papas)",
        description: "Carne y pollo, lechuga, tomate, queso, huevo frito y papas fritas incluidas",
        price: 9000,
        badge: "Completa + Papas",
      },
      {
        name: "Churrasco Italiano",
        description: "Carne vacuna o pollo seleccionado, palta suave, tomate y mayonesa",
        price: 6490,
        badge: "Clásico Chileno",
      },
      {
        name: "Churrasco Barroluco",
        description: "Carne vacuna o pollo con doble capa de queso derretido",
        price: 6490,
      },
      {
        name: "Arepa Rellena",
        description: "A elección: Carne y queso, Pollo y queso, Carne y palta o Pollo y palta",
        price: 5490,
        badge: "A Elección",
      },
    ],
  },
  {
    id: "postres",
    label: "Postres",
    subtitle: "El toque dulce irresistible",
    items: [
      {
        name: "Fresas con Crema D'Toditos",
        description: "Vaso generoso de frutillas frescas con crema chantilly artesanal, toppings dulces y salsa",
        price: 4500,
        badge: "Postre Estrella",
        image: "/images/fresas-con-crema.jpg",
      },
    ],
  },
];
