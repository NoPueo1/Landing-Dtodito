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
      "Incluyen salsas. Tablas mixtas armadas con rolls calientes apanados en panko y rolls fríos envueltos.",
    items: [
      {
        name: "Promo Maki",
        pieces: 20,
        unit: "Cortes",
        badge: "20 Pzas + Papas",
        price: 10990,
        rolls: [
          { wrapping: "Panko frito", ingredients: "Pollo crocante, queso crema, cebollín" },
          { wrapping: "Ciboulette / Sésamo", ingredients: "Kanikama, queso crema, palta" },
        ],
        details: [
          { label: "Acompañamiento", text: "Porción de papas fritas crujientes incluidas" },
        ],
      },
      {
        name: "Promo Uramaki",
        pieces: 30,
        unit: "Cortes",
        badge: "30 Cortes",
        price: 12490,
        rolls: [
          { wrapping: "Panko frito", ingredients: "Pollo apanado, queso crema, palta" },
          { wrapping: "Queso crema", ingredients: "Kanikama apanado, cebollín" },
          { wrapping: "Ciboulette", ingredients: "Palmito, queso crema, choclo" },
        ],
      },
      {
        name: "Promo Temaki",
        pieces: 40,
        unit: "Cortes",
        badge: "40 Cortes",
        price: 15490,
        rolls: [
          { wrapping: "Panko frito", ingredients: "Pollo apanado, queso crema, pimentón" },
          { wrapping: "Panko frito", ingredients: "Kanikama, queso crema, palta" },
          { wrapping: "Palta fresca", ingredients: "Camarón apanado, queso crema" },
          { wrapping: "Sésamo tostado", ingredients: "Pollo, queso crema, cebollín" },
        ],
      },
      {
        name: "Promo Makisu",
        pieces: 50,
        unit: "Cortes",
        badge: "50 Pzas + Papas",
        price: 17990,
        rolls: [
          { wrapping: "Panko frito (x2)", ingredients: "Pollo y camarón apanado con queso crema" },
          { wrapping: "Palta fresca", ingredients: "Pollo apanado, queso crema, cebollín" },
          { wrapping: "Queso crema", ingredients: "Kanikama apanado, palta" },
          { wrapping: "Sésamo tostado", ingredients: "Palmito, queso, choclo" },
        ],
        details: [
          { label: "Acompañamiento", text: "Porción de papas fritas crujientes incluidas" },
        ],
      },
      {
        name: "Promo Sumeshi",
        pieces: 60,
        unit: "Cortes",
        badge: "60 Cortes",
        price: 19990,
        rolls: [
          { wrapping: "Panko frito (x3)", ingredients: "Pollo, camarón y kanikama apanados con queso" },
          { wrapping: "Palta fresca", ingredients: "Pollo apanado, queso crema, cebollín" },
          { wrapping: "Queso crema", ingredients: "Kanikama apanado, queso, palta" },
          { wrapping: "Ciboulette", ingredients: "Palmito, queso, choclo" },
        ],
      },
      {
        name: "Promo Nigiri",
        pieces: 70,
        unit: "Cortes",
        badge: "70 Cortes",
        price: 21490,
        rolls: [
          { wrapping: "Panko frito (x3)", ingredients: "Surtido caliente de pollo y camarón" },
          { wrapping: "Palta fresca (x2)", ingredients: "Pollo y kanikama apanados, queso crema" },
          { wrapping: "Queso crema", ingredients: "Camarón apanado, queso, cebollín" },
          { wrapping: "Sésamo tostado", ingredients: "Vegetales frescos con queso crema" },
        ],
      },
      {
        name: "Promo Mister",
        pieces: 80,
        unit: "Cortes",
        badge: "80 Cortes",
        price: 23490,
        rolls: [
          { wrapping: "Panko crujiente (x4)", ingredients: "40 piezas fritas apanadas al momento" },
          { wrapping: "Palta fresca (x2)", ingredients: "Pollo y camarón apanado, queso crema" },
          { wrapping: "Queso crema", ingredients: "Kanikama apanado, palta, queso" },
          { wrapping: "Ciboulette", ingredients: "Palmito, queso crema, choclo" },
        ],
      },
      {
        name: "Promo D'todito",
        pieces: 100,
        unit: "Cortes",
        badge: "100 Cortes · Más Pedida",
        price: 29490,
        rolls: [
          { wrapping: "Panko crujiente (x5)", ingredients: "50 piezas fritas apanadas al momento" },
          { wrapping: "Palta fresca (x2)", ingredients: "20 piezas envueltas en palta hass" },
          { wrapping: "Queso crema (x2)", ingredients: "20 piezas envueltas en queso crema" },
          { wrapping: "Sésamo / Ciboulette", ingredients: "10 piezas clásicas tradicionales" },
        ],
      },
      {
        name: "Promo Imperio",
        pieces: 140,
        unit: "Cortes",
        badge: "140 Cortes · Mega Tabla",
        price: 37490,
        rolls: [
          { wrapping: "Panko crujiente (x7)", ingredients: "70 piezas fritas apanadas al momento" },
          { wrapping: "Palta fresca (x3)", ingredients: "30 piezas envueltas en palta hass" },
          { wrapping: "Queso crema (x2)", ingredients: "20 piezas envueltas en queso crema" },
          { wrapping: "Ciboulette / Sésamo (x2)", ingredients: "20 piezas tradicionales surtidas" },
        ],
      },
    ],
  },
  {
    id: "especiales",
    label: "Especiales & Tortas",
    conditions:
      "Tortas de sushi y ramos de regalo se recomienda reservar con anticipación vía WhatsApp.",
    items: [
      {
        name: "Promo Especial (40 Piezas)",
        pieces: 40,
        unit: "Cortes",
        badge: "100% Personalizable",
        price: 18990,
        details: [
          { label: "Proteína", text: "1 a elección (Pollo, Camarón o Kanikama)" },
          { label: "Vegetal", text: "1 a elección (Palta, cebollín, morrón, palmito o choclo)" },
          { label: "Relleno", text: "Abundante queso crema" },
          { label: "Envoltura", text: "Panko frito, Nori, Queso, Palta, Sésamo o Ciboulette" },
        ],
      },
      {
        name: "Torta de Sushi (50 Piezas)",
        pieces: 50,
        unit: "Cortes",
        badge: "Cumpleaños",
        price: 19990,
        details: [
          { label: "Formato", text: "Torta montada de sushi con flor de palta central" },
          { label: "Combinación", text: "Rolls calientes y fríos decorados para celebrar" },
          { label: "Incluye", text: "Salsas y presentación especial" },
        ],
      },
      {
        name: "Torta de Sushi (70 Piezas)",
        pieces: 70,
        unit: "Cortes",
        badge: "70 Cortes",
        price: 24990,
        details: [
          { label: "Formato", text: "Torta de sushi en niveles con abundante decoración" },
          { label: "Ideal para", text: "Juntas familiares, cumpleaños y reuniones" },
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
          { label: "Formato", text: "Mega torta de sushi monumental para fiestas" },
          { label: "Variedad", text: "Gran surtido de rolls apanados y envueltos" },
          { label: "Incluye", text: "Presentación de gala y salsas" },
        ],
      },
      {
        name: "Ramo de Sushi D'Toditos",
        badge: "Regalo Exclusivo",
        price: 21990,
        details: [
          { label: "Presentación", text: "Bouquet floral con rolls de sushi frescos y lazo" },
          { label: "Ocasión", text: "Aniversarios, San Valentín y detalles sorpresa" },
          { label: "Incluye", text: "Empaque especial para regalo y salsas" },
        ],
      },
    ],
  },
  {
    id: "burgers",
    label: "Sushi Burgers",
    conditions:
      "Todas nuestras sushi burgers llevan tapas de arroz apanado crujiente frito en panko.",
    items: [
      {
        name: "Sake Burger",
        badge: "Salmón Fresco",
        price: 8500,
        details: [
          { label: "Proteína", text: "Salmón fresco seleccionado" },
          { label: "Relleno", text: "Palta hass cremosa y abundante queso crema" },
          { label: "Tapas", text: "Arroz crujiente apanado dorado al momento" },
        ],
      },
      {
        name: "Sushi Burguer PPQ",
        badge: "Clásica",
        price: 7000,
        details: [
          { label: "Proteína", text: "Pechuga de pollo apanada crocante" },
          { label: "Relleno", text: "Palta hass cremosa y queso crema" },
          { label: "Tapas", text: "Arroz crujiente apanado en panko" },
        ],
      },
      {
        name: "Sushi Burguer Sencilla",
        badge: "Favorita",
        price: 8000,
        details: [
          { label: "Proteína", text: "Pollo apanado crocante y kanikama" },
          { label: "Relleno", text: "Cebollín fresco, palta hass y queso crema" },
          { label: "Tapas", text: "Arroz crujiente apanado frito" },
        ],
      },
      {
        name: "Sushi Burguer Deluxe",
        badge: "Doble Proteína",
        price: 9000,
        details: [
          { label: "Proteína", text: "Pollo apanado crocante + camarones apanados" },
          { label: "Relleno", text: "Palta hass cremosa y doble queso crema" },
          { label: "Tapas", text: "Arroz crujiente dorado al instante" },
        ],
      },
    ],
  },
  {
    id: "rolls-gohan",
    label: "Handrolls & Gohan",
    conditions:
      "Preparados en el día con ingredientes frescos. Opción de salmón por $1.000 adicional.",
    items: [
      {
        name: "Handroll Crujiente",
        badge: "Al Paso",
        price: 3500,
        details: [
          { label: "Fórmula", text: "1 Proteína + 1 Vegetal + Queso crema" },
          { label: "Proteínas", text: "Pollo, Camarón o Kanikama (Salmón +$1.000)" },
          { label: "Vegetales", text: "Palta, cebollín, morrón, palmito, champiñón o choclo" },
          { label: "Cocción", text: "Frito al instante en panko dorado" },
        ],
      },
      {
        name: "Gohan Bowl D'Toditos",
        badge: "Bowl Completo",
        price: 7000,
        details: [
          { label: "Base", text: "Arroz sushi aliñado con sésamo" },
          { label: "Relleno", text: "1 Proteína a elección + 2 Vegetales frescos + Queso crema" },
          { label: "Topping", text: "Sésamo tostado o ciboulette + flor de palta" },
        ],
      },
      {
        name: "Roll Clásico (10 Cortes)",
        pieces: 10,
        unit: "Cortes",
        badge: "10 Cortes",
        price: 5000,
        details: [
          { label: "Relleno", text: "1 Proteína + 1 Vegetal + Queso crema" },
          { label: "Envoltura", text: "Panko, Nori, Queso, Ciboulette, Sésamo o Palta" },
          { label: "Salmón", text: "Opcional con recargo de $1.000" },
        ],
      },
      {
        name: "Roll Sin Arroz (Keto)",
        pieces: 10,
        unit: "Cortes",
        badge: "100% Relleno / Keto",
        price: 8500,
        details: [
          { label: "Fórmula", text: "100% relleno sin arroz: 1 Proteína + 2 Vegetales + Queso crema" },
          { label: "Envoltura", text: "Panko crujiente, Palta, Nori o Sésamo" },
          { label: "Ideal para", text: "Quienes buscan bajo en carbohidratos" },
        ],
      },
    ],
  },
  {
    id: "picoteos",
    label: "Salchipapas & Bajón",
    conditions:
      "Porciones contundentes de papas doradas con aderezos incluidos.",
    items: [
      {
        name: "Salchipapas Pequeña",
        badge: "Individual",
        price: 6000,
        details: [
          { label: "Base", text: "Papas fritas crujientes" },
          { label: "Topping", text: "Vienesas doradas cortadas al sesgo" },
        ],
      },
      {
        name: "Salchipapas Mediana",
        badge: "Para 2",
        price: 7000,
        details: [
          { label: "Base", text: "Porción de papas fritas para dos personas" },
          { label: "Topping", text: "Abundante vienesa dorada" },
        ],
      },
      {
        name: "Salchipapas Familiar",
        badge: "Familiar",
        price: 9000,
        details: [
          { label: "Base", text: "Bandeja familiar de papas fritas" },
          { label: "Topping", text: "Doble porción de vienesas doradas" },
        ],
      },
      {
        name: "Salchipollo Familiar",
        badge: "Pollo & Vienesa",
        price: 11000,
        details: [
          { label: "Base", text: "Papas fritas crujientes doradas" },
          { label: "Proteínas", text: "Vienesas y trozos de pechuga de pollo dorado" },
        ],
      },
      {
        name: "Salchipollo Full",
        badge: "Mega Bajón",
        price: 14490,
        details: [
          { label: "Base", text: "Papas fritas doradas tamaño XL" },
          { label: "Proteínas", text: "Doble pollo, vienesas y salsas de la casa" },
        ],
      },
      {
        name: "Chorrillana Personal",
        badge: "Personal",
        price: 10990,
        details: [
          { label: "Base", text: "Cama de papas fritas crujientes" },
          { label: "Topping", text: "Carne vacuna, pollo, vienesa, cebolla caramelizada y huevo frito" },
        ],
      },
      {
        name: "Chorrillana Familiar",
        badge: "Para Compartir",
        price: 17990,
        details: [
          { label: "Base", text: "Bandeja gigante de papas fritas" },
          { label: "Topping", text: "Carne vacuna, pollo, vienesa, cebolla caramelizada y huevos fritos" },
        ],
      },
      {
        name: "Papas Fritas Familiares",
        badge: "Porción Familiar",
        price: 7000,
        details: [
          { label: "Base", text: "Bandeja grande de papas fritas doradas y crujientes" },
          { label: "Acompañamiento", text: "Salsas a elección" },
        ],
      },
    ],
  },
  {
    id: "sandwiches",
    label: "Burgers & Arepas",
    conditions:
      "Hamburguesas incluyen papas fritas crujientes.",
    items: [
      {
        name: "Hamburguesa Sencilla (+ Papas)",
        badge: "Con Papas",
        price: 7000,
        details: [
          { label: "Proteína", text: "Carne vacuna o pechuga de pollo" },
          { label: "Ingredientes", text: "Queso fundido, lechuga fresca y tomate" },
          { label: "Incluye", text: "Porción de papas fritas" },
        ],
      },
      {
        name: "Hamburguesa Especial (+ Papas)",
        badge: "Completa + Papas",
        price: 9000,
        details: [
          { label: "Proteína", text: "Carne vacuna y pechuga de pollo" },
          { label: "Ingredientes", text: "Queso fundido, huevo frito, lechuga y tomate" },
          { label: "Incluye", text: "Porción de papas fritas" },
        ],
      },
      {
        name: "Churrasco Italiano",
        badge: "Clásico Chileno",
        price: 6490,
        details: [
          { label: "Carne", text: "Filete de vacuno o pollo seleccionado" },
          { label: "Ingredientes", text: "Palta hass cremosa, tomate y mayonesa" },
        ],
      },
      {
        name: "Churrasco Barroluco",
        badge: "Extra Queso",
        price: 6490,
        details: [
          { label: "Carne", text: "Filete de vacuno o pollo" },
          { label: "Ingredientes", text: "Doble porción de queso caliente derretido" },
        ],
      },
      {
        name: "Arepa Rellena",
        badge: "A Elección",
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
      "Elaborados artesanalmente con fruta fresca.",
    items: [
      {
        name: "Fresas con Crema D'Toditos",
        badge: "Postre Estrella",
        price: 4500,
        details: [
          { label: "Contenido", text: "Frutillas frescas seleccionadas en capas" },
          { label: "Crema", text: "Crema chantilly artesanal batida" },
          { label: "Topping", text: "Salsa dulce y toppings crujientes" },
        ],
      },
    ],
  },
];
