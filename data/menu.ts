export interface RollItem {
  wrapping: string;
  ingredients: string;
}

export interface DetailItem {
  label: string;
  text: string;
}

export interface MenuItem {
  name: string;
  pieces?: number | string;
  unit?: string;
  badge?: string;
  price: number;
  rolls?: RollItem[];
  details?: DetailItem[];
}

export interface MenuCategory {
  id: string;
  label: string;
  conditions?: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: "promos",
    label: "Promociones de Sushi",
    conditions:
      "Promociones mixtas armadas por el local (rolls calientes en panko y rolls fríos). Incluyen salsa de soya.",
    items: [
      {
        name: "Promo Maki",
        pieces: 20,
        unit: "Piezas",
        badge: "20 Pzas + Papas",
        price: 10990,
        details: [
          { label: "Contenido", text: "20 piezas mixtas" },
          { label: "Incluye", text: "Porción de papas fritas" },
        ],
      },
      {
        name: "Promo Uramaki",
        pieces: 30,
        unit: "Piezas",
        badge: "30 Pzas",
        price: 12490,
        details: [
          { label: "Contenido", text: "30 piezas mixtas" },
        ],
      },
      {
        name: "Promo Temaki",
        pieces: 40,
        unit: "Piezas",
        badge: "40 Pzas",
        price: 15490,
        details: [
          { label: "Contenido", text: "40 piezas mixtas" },
        ],
      },
      {
        name: "Promo Makisu",
        pieces: 50,
        unit: "Piezas",
        badge: "50 Pzas + Papas",
        price: 17990,
        details: [
          { label: "Contenido", text: "50 piezas mixtas" },
          { label: "Incluye", text: "Porción de papas fritas" },
        ],
      },
      {
        name: "Promo Sumeshi",
        pieces: 60,
        unit: "Piezas",
        badge: "60 Pzas",
        price: 19990,
        details: [
          { label: "Contenido", text: "60 piezas mixtas" },
        ],
      },
      {
        name: "Promo Nigiri",
        pieces: 70,
        unit: "Piezas",
        badge: "70 Pzas",
        price: 21490,
        details: [
          { label: "Contenido", text: "70 piezas mixtas" },
        ],
      },
      {
        name: "Promo Mister",
        pieces: 80,
        unit: "Piezas",
        badge: "80 Pzas",
        price: 23490,
        details: [
          { label: "Contenido", text: "80 piezas mixtas" },
        ],
      },
      {
        name: "Promo D'todito",
        pieces: 100,
        unit: "Piezas",
        badge: "100 Pzas",
        price: 29490,
        details: [
          { label: "Contenido", text: "100 piezas mixtas" },
        ],
      },
      {
        name: "Promo Imperio",
        pieces: 140,
        unit: "Piezas",
        badge: "140 Pzas",
        price: 37490,
        details: [
          { label: "Contenido", text: "140 piezas mixtas" },
        ],
      },
    ],
  },
  {
    id: "rolls-gohan",
    label: "Sushi Menu",
    conditions:
      "Handrolls, Gohan y Rolls preparados al momento. Salmón disponible por $1.000 adicional.",
    items: [
      {
        name: "Handrolls",
        badge: "Handroll",
        price: 3500,
        details: [
          { label: "Consta", text: "1 Proteína + 1 Vegetal + Queso" },
          { label: "Proteínas", text: "Pollo, Camarón, Kanikama (Salmón +$1.000)" },
          { label: "Vegetales", text: "Palta, Cebollín, Morrón, Palmito, Champiñón, Choclo, Ciboulette" },
        ],
      },
      {
        name: "Gohan",
        badge: "Bowl",
        price: 7000,
        details: [
          { label: "Consta", text: "1 Proteína + 2 Vegetales + Queso + Agregado" },
          { label: "Proteínas", text: "Pollo, Camarón, Kanikama (Salmón +$1.000)" },
          { label: "Vegetales", text: "Palta, Cebollín, Morrón, Palmito, Champiñón, Choclo, Ciboulette" },
          { label: "Agregado", text: "Sésamo o ciboulette" },
        ],
      },
      {
        name: "Rolls",
        pieces: 10,
        unit: "Cortes",
        badge: "10 Cortes",
        price: 5000,
        details: [
          { label: "Consta", text: "1 Proteína + 1 Vegetal + Queso (Salmón +$1.000)" },
          { label: "Envolturas", text: "Panko, Nori, Queso, Ciboulette, Sésamo, Palta" },
        ],
      },
      {
        name: "Rolls sin Arroz",
        pieces: 10,
        unit: "Cortes",
        badge: "Sin Arroz",
        price: 8500,
        details: [
          { label: "Consta", text: "1 Proteína + 2 Vegetales + Queso (Salmón +$1.000)" },
          { label: "Envolturas", text: "Panko, Nori, Queso, Ciboulette, Sésamo, Palta" },
        ],
      },
    ],
  },
  {
    id: "burgers",
    label: "Sushi Burger Menu",
    conditions:
      "Tapas de arroz apanado en panko y frito con relleno.",
    items: [
      {
        name: "Sushi Burguer PPQ",
        badge: "PPQ",
        price: 7000,
        details: [
          { label: "Ingredientes", text: "Pollo apanado, palta y queso" },
        ],
      },
      {
        name: "Sake Burger",
        badge: "Sake",
        price: 8500,
        details: [
          { label: "Ingredientes", text: "Salmón, palta y queso" },
        ],
      },
      {
        name: "Sushi Burguer Sencilla",
        badge: "Sencilla",
        price: 8000,
        details: [
          { label: "Ingredientes", text: "Pollo apanado, kanikama, cebollín, palta y queso" },
        ],
      },
      {
        name: "Sushi Burguer Deluxe",
        badge: "Deluxe",
        price: 9000,
        details: [
          { label: "Ingredientes", text: "Pollo apanado, camarón apanado, palta y queso" },
        ],
      },
    ],
  },
  {
    id: "especiales",
    label: "Especiales & Tortas",
    conditions:
      "Promo especial a elección del cliente y tortas de sushi para celebraciones.",
    items: [
      {
        name: "Promo Especial (40 Piezas)",
        pieces: 40,
        unit: "Piezas",
        badge: "A Elección",
        price: 18990,
        details: [
          { label: "A elección", text: "Consta de 1 Proteína + 1 Vegetal + Queso + Envoltura" },
          { label: "Proteínas", text: "Pollo, Camarón o Kanikama" },
          { label: "Envolturas", text: "Panko, Nori, Queso, Ciboulette, Sésamo o Palta" },
        ],
      },
      {
        name: "Torta de Sushi (50 Piezas)",
        pieces: 50,
        unit: "Piezas",
        badge: "50 Pzas",
        price: 19990,
        details: [
          { label: "Formato", text: "Torta de sushi armada con 50 piezas mixtas" },
        ],
      },
      {
        name: "Torta de Sushi (70 Piezas)",
        pieces: 70,
        unit: "Piezas",
        badge: "70 Pzas",
        price: 24990,
        details: [
          { label: "Formato", text: "Torta de sushi armada con 70 piezas mixtas" },
        ],
      },
      {
        name: "Torta de Sushi (100 Piezas)",
        pieces: 100,
        unit: "Piezas",
        badge: "100 Pzas",
        price: 30990,
        details: [
          { label: "Formato", text: "Torta de sushi armada con 100 piezas mixtas" },
        ],
      },
      {
        name: "Ramo de Sushi",
        badge: "Regalo",
        price: 21990,
        details: [
          { label: "Formato", text: "Ramo armado con rolls de sushi para regalo" },
        ],
      },
    ],
  },
  {
    id: "picoteos",
    label: "Extras: Papas & Chorrillanas",
    conditions:
      "Papas fritas con vienesas, pollo y chorrillanas.",
    items: [
      {
        name: "Salchipapas Pequeña",
        badge: "Pequeña",
        price: 6000,
        details: [
          { label: "Porción", text: "Papas fritas con vienesas" },
        ],
      },
      {
        name: "Salchipapas Mediana",
        badge: "Mediana",
        price: 7000,
        details: [
          { label: "Porción", text: "Papas fritas con vienesas" },
        ],
      },
      {
        name: "Salchipapas Familiar",
        badge: "Familiar",
        price: 9000,
        details: [
          { label: "Porción", text: "Papas fritas con vienesas" },
        ],
      },
      {
        name: "Salchipollo Pequeña",
        badge: "Pequeña",
        price: 6500,
        details: [
          { label: "Porción", text: "Papas fritas con vienesas y pollo" },
        ],
      },
      {
        name: "Salchipollo Mediana",
        badge: "Mediana",
        price: 8000,
        details: [
          { label: "Porción", text: "Papas fritas con vienesas y pollo" },
        ],
      },
      {
        name: "Salchipollo Familiar",
        badge: "Familiar",
        price: 11000,
        details: [
          { label: "Porción", text: "Papas fritas con vienesas y pollo" },
        ],
      },
      {
        name: "Salchipollo Full",
        badge: "Full",
        price: 14490,
        details: [
          { label: "Porción", text: "Papas fritas con vienesas y pollo tamaño Full" },
        ],
      },
      {
        name: "Pollipapas Pequeña",
        badge: "Pequeña",
        price: 6500,
        details: [
          { label: "Porción", text: "Papas fritas con pollo" },
        ],
      },
      {
        name: "Pollipapas Mediana",
        badge: "Mediana",
        price: 8500,
        details: [
          { label: "Porción", text: "Papas fritas con pollo" },
        ],
      },
      {
        name: "Pollipapas Familiar",
        badge: "Familiar",
        price: 12000,
        details: [
          { label: "Porción", text: "Papas fritas con pollo" },
        ],
      },
      {
        name: "Chorrillana Personal",
        badge: "Personal",
        price: 10990,
        details: [
          { label: "Consta", text: "Papas, carne, pollo, vienesa, cebolla, huevo" },
        ],
      },
      {
        name: "Chorrillana Familiar",
        badge: "Familiar",
        price: 17990,
        details: [
          { label: "Consta", text: "Papas, carne, pollo, vienesa, cebolla, huevo" },
        ],
      },
      {
        name: "Papas Fritas Pequeña",
        badge: "Pequeña",
        price: 3500,
        details: [
          { label: "Porción", text: "Papas fritas solas" },
        ],
      },
      {
        name: "Papas Fritas Mediana",
        badge: "Mediana",
        price: 5500,
        details: [
          { label: "Porción", text: "Papas fritas solas" },
        ],
      },
      {
        name: "Papas Fritas Familiares",
        badge: "Familiar",
        price: 7000,
        details: [
          { label: "Porción", text: "Papas fritas solas" },
        ],
      },
    ],
  },
  {
    id: "sandwiches",
    label: "Extras: Sándwiches & Arepas",
    conditions:
      "Hamburguesas incluyen papas fritas.",
    items: [
      {
        name: "Hamburguesa Sencilla",
        badge: "+ Papas Fritas",
        price: 7000,
        details: [
          { label: "Consta", text: "Carne o Pollo, lechuga, tomate, queso + papas fritas" },
        ],
      },
      {
        name: "Hamburguesa Especial",
        badge: "+ Papas Fritas",
        price: 9000,
        details: [
          { label: "Consta", text: "Carne y pollo, lechuga, tomate, queso, huevo + papas fritas" },
        ],
      },
      {
        name: "Churrasco Italiano",
        badge: "Italiano",
        price: 6490,
        details: [
          { label: "Opciones", text: "Pollo o vacuno a elección" },
        ],
      },
      {
        name: "Churrasco Barros Luco",
        badge: "Barros Luco",
        price: 6490,
        details: [
          { label: "Opciones", text: "Pollo o vacuno a elección" },
        ],
      },
      {
        name: "Arepas",
        badge: "Arepa",
        price: 5490,
        details: [
          { label: "Opciones", text: "Carne y queso, Pollo y queso, Carne y palta o Pollo y palta" },
        ],
      },
    ],
  },
  {
    id: "postres",
    label: "Postres",
    conditions:
      "Preparado artesanalmente con fruta fresca.",
    items: [
      {
        name: "Fresas con Crema",
        badge: "Postre",
        price: 4500,
        details: [
          { label: "Ingredientes", text: "Fresas frescas con crema batida artesanal" },
        ],
      },
    ],
  },
];
