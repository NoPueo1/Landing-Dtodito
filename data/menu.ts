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
    label: "Promos Sushi",
    conditions:
      "Promociones mixtas con surtido en panko frito, sésamo, ciboulette, palta o queso crema. Incluyen salsa de soya.",
    items: [
      {
        name: "Promo Maki",
        pieces: 20,
        unit: "Cortes",
        badge: "20 Cortes + Papas",
        price: 10990,
        rolls: [
          { wrapping: "10 Cortes Panko frito", ingredients: "Pollo, queso crema, cebollín (caliente)" },
          { wrapping: "10 Cortes Sésamo", ingredients: "Kanikama, queso crema, palta" },
        ],
        details: [
          { label: "Incluye", text: "Porción de papas fritas" },
        ],
      },
      {
        name: "Promo Uramaki",
        pieces: 30,
        unit: "Cortes",
        badge: "30 Cortes",
        price: 12490,
        rolls: [
          { wrapping: "10 Cortes Panko frito", ingredients: "Pollo, queso crema, palta (caliente)" },
          { wrapping: "10 Cortes Sésamo", ingredients: "Kanikama, queso crema, cebollín" },
          { wrapping: "10 Cortes Ciboulette", ingredients: "Palmito, queso crema, choclo" },
        ],
      },
      {
        name: "Promo Temaki",
        pieces: 40,
        unit: "Cortes",
        badge: "40 Cortes",
        price: 15490,
        rolls: [
          { wrapping: "20 Cortes Panko frito", ingredients: "Pollo, queso crema, cebollín (caliente)" },
          { wrapping: "10 Cortes Palta", ingredients: "Camarón, queso crema" },
          { wrapping: "10 Cortes Sésamo", ingredients: "Kanikama, queso crema, palta" },
        ],
      },
      {
        name: "Promo Makisu",
        pieces: 50,
        unit: "Cortes",
        badge: "50 Cortes + Papas",
        price: 17990,
        rolls: [
          { wrapping: "20 Cortes Panko frito", ingredients: "Pollo y camarón con queso crema (calientes)" },
          { wrapping: "10 Cortes Palta", ingredients: "Pollo, queso crema, cebollín" },
          { wrapping: "10 Cortes Queso crema", ingredients: "Kanikama, palta" },
          { wrapping: "10 Cortes Sésamo", ingredients: "Palmito, queso crema, choclo" },
        ],
        details: [
          { label: "Incluye", text: "Porción de papas fritas" },
        ],
      },
      {
        name: "Promo Sumeshi",
        pieces: 60,
        unit: "Cortes",
        badge: "60 Cortes",
        price: 19990,
        rolls: [
          { wrapping: "20 Cortes Panko frito", ingredients: "Pollo, queso crema, cebollín (caliente)" },
          { wrapping: "20 Cortes Sésamo", ingredients: "Kanikama, palta, queso crema" },
          { wrapping: "10 Cortes Palta", ingredients: "Pollo, queso crema, cebollín" },
          { wrapping: "10 Cortes Ciboulette", ingredients: "Palmito, queso crema, choclo" },
        ],
      },
      {
        name: "Promo Nigiri",
        pieces: 70,
        unit: "Cortes",
        badge: "70 Cortes",
        price: 21490,
        rolls: [
          { wrapping: "30 Cortes Panko frito", ingredients: "Pollo y camarón con queso crema (calientes)" },
          { wrapping: "20 Cortes Sésamo", ingredients: "Kanikama, palta, queso crema" },
          { wrapping: "10 Cortes Palta", ingredients: "Pollo, queso crema, cebollín" },
          { wrapping: "10 Cortes Queso crema", ingredients: "Pollo, palta, queso crema" },
        ],
      },
      {
        name: "Promo Mister",
        pieces: 80,
        unit: "Cortes",
        badge: "80 Cortes",
        price: 23490,
        rolls: [
          { wrapping: "30 Cortes Panko frito", ingredients: "Surtido caliente apanado en panko" },
          { wrapping: "20 Cortes Sésamo", ingredients: "Kanikama, palta, queso crema" },
          { wrapping: "15 Cortes Palta", ingredients: "Pollo, queso crema, cebollín" },
          { wrapping: "15 Cortes Queso crema", ingredients: "Pollo, palta, queso crema" },
        ],
      },
      {
        name: "Promo D'todito",
        pieces: 100,
        unit: "Cortes",
        badge: "100 Cortes",
        price: 29490,
        rolls: [
          { wrapping: "40 Cortes Panko frito", ingredients: "4 rolls calientes apanados en panko" },
          { wrapping: "20 Cortes Palta", ingredients: "Pollo y camarón con queso crema" },
          { wrapping: "20 Cortes Queso crema", ingredients: "Kanikama, palta, queso crema" },
          { wrapping: "20 Cortes Sésamo / Ciboulette", ingredients: "Surtido con vegetales y queso crema" },
        ],
      },
      {
        name: "Promo Imperio",
        pieces: 140,
        unit: "Cortes",
        badge: "140 Cortes",
        price: 37490,
        rolls: [
          { wrapping: "60 Cortes Panko frito", ingredients: "6 rolls calientes fritos en panko" },
          { wrapping: "30 Cortes Palta", ingredients: "3 rolls envueltos en palta con pollo y camarón" },
          { wrapping: "30 Cortes Queso crema", ingredients: "3 rolls envueltos en queso crema con kanikama" },
          { wrapping: "20 Cortes Sésamo", ingredients: "2 rolls tradicionales con vegetales y queso" },
        ],
      },
    ],
  },
  {
    id: "rolls-gohan",
    label: "Rolls & Gohan",
    conditions:
      "Rolls y handrolls preparados al momento. Salmón disponible por $1.000 adicional.",
    items: [
      {
        name: "Roll Clásico",
        pieces: 10,
        unit: "Cortes",
        badge: "10 Cortes",
        price: 5000,
        rolls: [
          { wrapping: "Envoltura a elección", ingredients: "Panko frito, Nori, Queso crema, Palta, Sésamo o Ciboulette" },
          { wrapping: "Relleno", ingredients: "1 Proteína (Pollo, Camarón o Kanikama) + 1 Vegetal + Queso crema" },
          { wrapping: "Salmón", ingredients: "Opcional por $1.000 adicional" },
        ],
      },
      {
        name: "Roll Sin Arroz (Keto)",
        pieces: 10,
        unit: "Cortes",
        badge: "10 Cortes",
        price: 8500,
        rolls: [
          { wrapping: "Envoltura a elección", ingredients: "Panko frito, Palta, Nori o Sésamo" },
          { wrapping: "Relleno sin arroz", ingredients: "1 Proteína + 2 Vegetales + Queso crema" },
          { wrapping: "Salmón", ingredients: "Opcional por $1.000 adicional" },
        ],
      },
      {
        name: "Handroll",
        badge: "1 Unidad",
        price: 3500,
        rolls: [
          { wrapping: "Envoltura", ingredients: "Cono frito en panko con salsa de soya" },
          { wrapping: "Relleno", ingredients: "1 Proteína (Pollo, Camarón o Kanikama) + 1 Vegetal + Queso crema" },
        ],
      },
      {
        name: "Gohan",
        badge: "1 Bowl",
        price: 7000,
        details: [
          { label: "Base", text: "Arroz de sushi aliñado" },
          { label: "Proteína", text: "1 a elección (Pollo, Camarón o Kanikama)" },
          { label: "Vegetales", text: "2 vegetales a elección + Queso crema" },
          { label: "Agregado", text: "Sésamo o ciboulette" },
        ],
      },
    ],
  },
  {
    id: "burgers",
    label: "Sushi Burgers",
    conditions:
      "Tapas de arroz de sushi apanado en panko y frito al momento.",
    items: [
      {
        name: "Sushi Burguer PPQ",
        badge: "Pollo",
        price: 7000,
        rolls: [
          { wrapping: "Tapas", ingredients: "Arroz de sushi frito en panko" },
          { wrapping: "Relleno", ingredients: "Pollo apanado, palta y queso crema" },
        ],
      },
      {
        name: "Sake Burger",
        badge: "Salmón",
        price: 8500,
        rolls: [
          { wrapping: "Tapas", ingredients: "Arroz de sushi frito en panko" },
          { wrapping: "Relleno", ingredients: "Salmón, palta y queso crema" },
        ],
      },
      {
        name: "Sushi Burguer Sencilla",
        badge: "Pollo & Kanikama",
        price: 8000,
        rolls: [
          { wrapping: "Tapas", ingredients: "Arroz de sushi frito en panko" },
          { wrapping: "Relleno", ingredients: "Pollo apanado, kanikama, cebollín, palta y queso crema" },
        ],
      },
      {
        name: "Sushi Burguer Deluxe",
        badge: "Pollo & Camarón",
        price: 9000,
        rolls: [
          { wrapping: "Tapas", ingredients: "Arroz de sushi frito en panko" },
          { wrapping: "Relleno", ingredients: "Pollo apanado, camarón apanado, palta y queso crema" },
        ],
      },
    ],
  },
  {
    id: "especiales",
    label: "Tortas & Especiales",
    conditions:
      "Tortas de sushi para cumpleaños, reuniones y pedidos especiales.",
    items: [
      {
        name: "Promo Especial (40 Cortes)",
        pieces: 40,
        unit: "Cortes",
        badge: "40 Cortes",
        price: 18990,
        rolls: [
          { wrapping: "A tu elección", ingredients: "1 Proteína + 1 Vegetal + Queso crema + Envoltura a elección" },
          { wrapping: "Proteínas", ingredients: "Pollo, Camarón o Kanikama" },
          { wrapping: "Envolturas", ingredients: "Panko frito, Nori, Queso crema, Palta, Sésamo o Ciboulette" },
        ],
      },
      {
        name: "Torta de Sushi (50 Piezas)",
        pieces: 50,
        unit: "Cortes",
        badge: "50 Cortes",
        price: 19990,
        details: [
          { label: "Formato", text: "Torta de sushi con flor de palta y rolls surtidos" },
          { label: "Incluye", text: "Salsas de soya y agridulce" },
        ],
      },
      {
        name: "Torta de Sushi (70 Piezas)",
        pieces: 70,
        unit: "Cortes",
        badge: "70 Cortes",
        price: 24990,
        details: [
          { label: "Formato", text: "Torta de sushi en niveles para compartir" },
          { label: "Incluye", text: "Salsas de soya y agridulce" },
        ],
      },
      {
        name: "Torta de Sushi (100 Piezas)",
        pieces: 100,
        unit: "Cortes",
        badge: "100 Cortes",
        price: 30990,
        details: [
          { label: "Formato", text: "Torta de sushi grande para eventos y cumpleaños" },
          { label: "Incluye", text: "Salsas de soya y agridulce" },
        ],
      },
      {
        name: "Ramo de Sushi",
        badge: "Regalo",
        price: 21990,
        details: [
          { label: "Formato", text: "Ramo armado con rolls de sushi y envoltura de regalo" },
          { label: "Incluye", text: "Salsas y empaque especial" },
        ],
      },
    ],
  },
  {
    id: "picoteos",
    label: "Salchipapas & Chorrillanas",
    conditions:
      "Papas fritas con vienesas, pollo y agregados a elección.",
    items: [
      {
        name: "Salchipapas Pequeña",
        badge: "Pequeña",
        price: 6000,
        details: [
          { label: "Base", text: "Papas fritas" },
          { label: "Agregado", text: "Vienesas" },
        ],
      },
      {
        name: "Salchipapas Mediana",
        badge: "Mediana",
        price: 7000,
        details: [
          { label: "Base", text: "Papas fritas" },
          { label: "Agregado", text: "Vienesas" },
        ],
      },
      {
        name: "Salchipapas Familiar",
        badge: "Familiar",
        price: 9000,
        details: [
          { label: "Base", text: "Papas fritas" },
          { label: "Agregado", text: "Vienesas" },
        ],
      },
      {
        name: "Salchipollo Pequeña",
        badge: "Pequeña",
        price: 6500,
        details: [
          { label: "Base", text: "Papas fritas" },
          { label: "Agregado", text: "Vienesas y pollo" },
        ],
      },
      {
        name: "Salchipollo Mediana",
        badge: "Mediana",
        price: 8000,
        details: [
          { label: "Base", text: "Papas fritas" },
          { label: "Agregado", text: "Vienesas y pollo" },
        ],
      },
      {
        name: "Salchipollo Familiar",
        badge: "Familiar",
        price: 11000,
        details: [
          { label: "Base", text: "Papas fritas" },
          { label: "Agregado", text: "Vienesas y pollo" },
        ],
      },
      {
        name: "Salchipollo Full",
        badge: "Full",
        price: 14490,
        details: [
          { label: "Base", text: "Papas fritas" },
          { label: "Agregado", text: "Doble porción de vienesas y pollo" },
        ],
      },
      {
        name: "Pollipapas Pequeña",
        badge: "Pequeña",
        price: 6500,
        details: [
          { label: "Base", text: "Papas fritas" },
          { label: "Agregado", text: "Pollo" },
        ],
      },
      {
        name: "Pollipapas Mediana",
        badge: "Mediana",
        price: 8500,
        details: [
          { label: "Base", text: "Papas fritas" },
          { label: "Agregado", text: "Pollo" },
        ],
      },
      {
        name: "Pollipapas Familiar",
        badge: "Familiar",
        price: 12000,
        details: [
          { label: "Base", text: "Papas fritas" },
          { label: "Agregado", text: "Pollo" },
        ],
      },
      {
        name: "Chorrillana Personal",
        badge: "Personal",
        price: 10990,
        details: [
          { label: "Ingredientes", text: "Papas fritas, carne, pollo, vienesa, cebolla y huevo" },
        ],
      },
      {
        name: "Chorrillana Familiar",
        badge: "Familiar",
        price: 17990,
        details: [
          { label: "Ingredientes", text: "Papas fritas, carne, pollo, vienesa, cebolla y huevo" },
        ],
      },
      {
        name: "Papas Fritas Familiares",
        badge: "Familiar",
        price: 7000,
        details: [
          { label: "Porción", text: "Bandeja familiar de papas fritas" },
        ],
      },
    ],
  },
  {
    id: "sandwiches",
    label: "Hamburguesas & Sándwiches",
    conditions:
      "Hamburguesas incluyen porción de papas fritas.",
    items: [
      {
        name: "Hamburguesa Sencilla",
        badge: "+ Papas",
        price: 7000,
        details: [
          { label: "Carne", text: "Carne o pollo a elección" },
          { label: "Agregados", text: "Lechuga, tomate y queso" },
          { label: "Acompañamiento", text: "Papas fritas incluidas" },
        ],
      },
      {
        name: "Hamburguesa Especial",
        badge: "+ Papas",
        price: 9000,
        details: [
          { label: "Carne", text: "Carne y pollo" },
          { label: "Agregados", text: "Lechuga, tomate, queso y huevo" },
          { label: "Acompañamiento", text: "Papas fritas incluidas" },
        ],
      },
      {
        name: "Churrasco Italiano",
        badge: "Italiano",
        price: 6490,
        details: [
          { label: "Carne", text: "Pollo o vacuno a elección" },
          { label: "Agregados", text: "Palta, tomate y mayonesa" },
        ],
      },
      {
        name: "Churrasco Barros Luco",
        badge: "Barros Luco",
        price: 6490,
        details: [
          { label: "Carne", text: "Pollo o vacuno a elección" },
          { label: "Agregados", text: "Queso derretido" },
        ],
      },
      {
        name: "Arepas",
        badge: "Rellenas",
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
      "Postre casero preparado en el día con fruta fresca.",
    items: [
      {
        name: "Fresas con Crema",
        badge: "Casero",
        price: 4500,
        details: [
          { label: "Contenido", text: "Frutillas frescas con crema batida y salsa dulce" },
        ],
      },
    ],
  },
];
