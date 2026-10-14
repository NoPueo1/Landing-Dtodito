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
      "Promociones mixtas surtidas con rolls calientes apanados en panko y rolls fríos envueltos. Incluyen soya. Para armar tus rolls 100% a elección, pide la Promo Especial (40 cortes).",
    items: [
      {
        name: "Promo Maki",
        pieces: 20,
        unit: "Cortes",
        badge: "20 Pzas + Papas",
        price: 10990,
        rolls: [
          { wrapping: "10 Cortes Panko Frito", ingredients: "Pollo crocante, queso crema, cebollín (caliente)" },
          { wrapping: "10 Cortes Sésamo / Ciboulette", ingredients: "Kanikama, queso crema, palta" },
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
          { wrapping: "10 Cortes Panko Frito", ingredients: "Pollo apanado, queso crema, palta (caliente)" },
          { wrapping: "10 Cortes Sésamo Tostado", ingredients: "Kanikama apanado, queso crema, cebollín" },
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
          { wrapping: "20 Cortes Panko Frito", ingredients: "Doble roll caliente con pollo apanado, queso crema y pimentón" },
          { wrapping: "10 Cortes Palta Hass", ingredients: "Camarón apanado, queso crema, cebollín" },
          { wrapping: "10 Cortes Sésamo Tostado", ingredients: "Kanikama, queso crema, palta" },
        ],
      },
      {
        name: "Promo Makisu",
        pieces: 50,
        unit: "Cortes",
        badge: "50 Pzas + Papas",
        price: 17990,
        rolls: [
          { wrapping: "20 Cortes Panko Frito", ingredients: "Pollo y camarón apanado con queso crema (calientes)" },
          { wrapping: "10 Cortes Palta Hass", ingredients: "Pollo apanado, queso crema, cebollín" },
          { wrapping: "10 Cortes Queso Crema", ingredients: "Kanikama apanado, palta" },
          { wrapping: "10 Cortes Sésamo Tostado", ingredients: "Palmito, queso crema, choclo" },
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
          { wrapping: "20 Cortes Panko Frito", ingredients: "Pollo y kanikama apanados con queso crema (calientes)" },
          { wrapping: "20 Cortes Sésamo Tostado", ingredients: "Pollo apanado, kanikama, queso crema y palta" },
          { wrapping: "10 Cortes Palta Hass", ingredients: "Pollo apanado, queso crema, cebollín" },
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
          { wrapping: "30 Cortes Panko Frito", ingredients: "Triple roll caliente apanado con pollo y camarón" },
          { wrapping: "20 Cortes Sésamo Tostado", ingredients: "Kanikama, pollo apanado, queso crema" },
          { wrapping: "10 Cortes Palta Hass", ingredients: "Camarón apanado, queso crema, cebollín" },
          { wrapping: "10 Cortes Queso Crema", ingredients: "Pollo apanado, palta fresca, queso" },
        ],
      },
      {
        name: "Promo Mister",
        pieces: 80,
        unit: "Cortes",
        badge: "80 Cortes",
        price: 23490,
        rolls: [
          { wrapping: "30 Cortes Panko Frito", ingredients: "Surtido caliente apanado en panko crocante" },
          { wrapping: "20 Cortes Sésamo Tostado", ingredients: "Kanikama apanado, palta, queso crema" },
          { wrapping: "15 Cortes Palta Hass", ingredients: "Pollo apanado, queso crema, cebollín" },
          { wrapping: "15 Cortes Queso Crema", ingredients: "Pollo apanado, palta, queso" },
        ],
      },
      {
        name: "Promo D'todito",
        pieces: 100,
        unit: "Cortes",
        badge: "100 Cortes · Más Pedida",
        price: 29490,
        rolls: [
          { wrapping: "40 Cortes Panko Frito", ingredients: "4 rolls calientes apanados al momento en panko" },
          { wrapping: "20 Cortes Palta Hass", ingredients: "2 rolls envueltos en palta con pollo y camarón" },
          { wrapping: "20 Cortes Queso Crema", ingredients: "2 rolls envueltos en queso crema con kanikama" },
          { wrapping: "20 Cortes Sésamo / Ciboulette", ingredients: "Surtido fresco con vegetales y queso crema" },
        ],
      },
      {
        name: "Promo Imperio",
        pieces: 140,
        unit: "Cortes",
        badge: "140 Cortes · Mega Tabla",
        price: 37490,
        rolls: [
          { wrapping: "60 Cortes Panko Frito", ingredients: "6 rolls calientes fritos en panko crujiente" },
          { wrapping: "30 Cortes Palta Hass", ingredients: "3 rolls envueltos en palta con pollo y camarón" },
          { wrapping: "30 Cortes Queso Crema", ingredients: "3 rolls envueltos en queso crema con kanikama" },
          { wrapping: "20 Cortes Sésamo Tostado", ingredients: "2 rolls tradicionales con vegetales y queso" },
        ],
      },
    ],
  },
  {
    id: "especiales",
    label: "Especiales & Tortas",
    conditions:
      "Tortas de sushi y ramos de regalo requieren armado previo. Reserva con anticipación vía WhatsApp.",
    items: [
      {
        name: "Promo Especial (40 Cortes)",
        pieces: 40,
        unit: "Cortes",
        badge: "100% a Tu Elección",
        price: 18990,
        rolls: [
          { wrapping: "1 Proteína a elección", ingredients: "Pollo apanado, Camarón o Kanikama" },
          { wrapping: "1 Vegetal a elección", ingredients: "Palta, cebollín, morrón, palmito, champiñón o choclo" },
          { wrapping: "Queso crema incluido", ingredients: "Abundante relleno de queso crema suave" },
          { wrapping: "Envoltura a elección", ingredients: "Panko frito, Nori, Queso crema, Palta, Sésamo o Ciboulette" },
        ],
      },
      {
        name: "Torta de Sushi (50 Piezas)",
        pieces: 50,
        unit: "Cortes",
        badge: "Cumpleaños",
        price: 19990,
        details: [
          { label: "Presentación", text: "Torta redonda armada de sushi con flor de palta central" },
          { label: "Surtido", text: "50 cortes mixtos con rolls fríos y calientes decorados" },
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
          { label: "Presentación", text: "Torta de sushi en dos niveles con decoración festiva" },
          { label: "Surtido", text: "70 cortes variados para juntas y celebraciones" },
          { label: "Incluye", text: "Salsas y empaque de transporte" },
        ],
      },
      {
        name: "Torta de Sushi (100 Piezas)",
        pieces: 100,
        unit: "Cortes",
        badge: "100 Cortes",
        price: 30990,
        details: [
          { label: "Presentación", text: "Mega torta de sushi monumental para eventos grandes" },
          { label: "Surtido", text: "100 cortes seleccionados de alta calidad" },
          { label: "Incluye", text: "Presentación especial y salsas" },
        ],
      },
      {
        name: "Ramo de Sushi para Regalo",
        badge: "Regalo Sorpresa",
        price: 21990,
        details: [
          { label: "Presentación", text: "Bouquet armado con rolls de sushi frescos, envoltura floral y lazo" },
          { label: "Ocasión", text: "Aniversarios, cumpleaños y regalos especiales" },
          { label: "Incluye", text: "Salsas y dedicatoria personalizada" },
        ],
      },
    ],
  },
  {
    id: "burgers",
    label: "Sushi Burgers",
    conditions:
      "Tapas elaboradas con arroz de sushi sazonado y apanado en panko crocante, fritas al instante.",
    items: [
      {
        name: "PPQ Burger",
        badge: "Clásica Crocante",
        price: 7000,
        rolls: [
          { wrapping: "Tapas apanadas", ingredients: "Doble tapa de arroz de sushi crocante en panko" },
          { wrapping: "Proteína", ingredients: "Pollo apanado crocante" },
          { wrapping: "Relleno fresco", ingredients: "Palta hass en láminas y queso crema" },
        ],
      },
      {
        name: "Sake Burger",
        badge: "Salmón Fresco",
        price: 8500,
        rolls: [
          { wrapping: "Tapas apanadas", ingredients: "Doble tapa de arroz de sushi crocante en panko" },
          { wrapping: "Proteína", ingredients: "Salmón fresco en lonjas seleccionadas" },
          { wrapping: "Relleno fresco", ingredients: "Palta hass cremosa y abundante queso crema" },
        ],
      },
      {
        name: "Sushi Burguer Sencilla",
        badge: "Favorita",
        price: 8000,
        rolls: [
          { wrapping: "Tapas apanadas", ingredients: "Doble tapa de arroz de sushi frito en panko" },
          { wrapping: "Proteínas", ingredients: "Pollo apanado crujiente y kanikama" },
          { wrapping: "Relleno fresco", ingredients: "Cebollín fresco, palta hass y queso crema" },
        ],
      },
      {
        name: "Sushi Burguer Deluxe",
        badge: "Doble Proteína",
        price: 9000,
        rolls: [
          { wrapping: "Tapas apanadas", ingredients: "Doble tapa de arroz de sushi crujiente" },
          { wrapping: "Proteínas", ingredients: "Pollo apanado + camarones apanados crocantes" },
          { wrapping: "Relleno fresco", ingredients: "Palta hass en láminas y doble queso crema" },
        ],
      },
    ],
  },
  {
    id: "rolls-gohan",
    label: "Rolls & Gohan",
    conditions:
      "Ingredientes frescos del día. Opción de agregar salmón a cualquier roll o handroll por $1.000 adicional.",
    items: [
      {
        name: "Roll Clásico (10 Cortes)",
        pieces: 10,
        unit: "Cortes",
        badge: "10 Cortes",
        price: 5000,
        rolls: [
          { wrapping: "Envoltura a elección", ingredients: "Panko frito, Nori, Queso crema, Palta, Sésamo o Ciboulette" },
          { wrapping: "Relleno", ingredients: "1 Proteína (Pollo, Camarón o Kanikama) + 1 Vegetal + Queso crema" },
          { wrapping: "Opcional Salmón", ingredients: "Recargo de $1.000 por cambio a salmón fresco" },
        ],
      },
      {
        name: "Roll Sin Arroz (Keto)",
        pieces: 10,
        unit: "Cortes",
        badge: "100% Relleno · Sin Arroz",
        price: 8500,
        rolls: [
          { wrapping: "Envoltura a elección", ingredients: "Panko frito crujiente, Palta hass, Nori o Sésamo" },
          { wrapping: "Relleno 100% sin arroz", ingredients: "1 Proteína + 2 Vegetales frescos + Queso crema" },
          { wrapping: "Opcional Salmón", ingredients: "Recargo de $1.000 por cambio a salmón fresco" },
        ],
      },
      {
        name: "Handroll Crujiente",
        badge: "Al Paso",
        price: 3500,
        rolls: [
          { wrapping: "Envoltura", ingredients: "Cono crujiente frito en panko con salsa de soya" },
          { wrapping: "Relleno", ingredients: "1 Proteína (Pollo, Camarón o Kanikama) + 1 Vegetal + Queso crema" },
        ],
      },
      {
        name: "Gohan Bowl D'Toditos",
        badge: "Bowl Completo",
        price: 7000,
        details: [
          { label: "Base", text: "Arroz sushi aliñado con sésamo" },
          { label: "Proteína", text: "1 a elección (Pollo apanado, Camarón o Kanikama)" },
          { label: "Vegetales", text: "2 vegetales frescos a elección + Queso crema" },
          { label: "Topping", text: "Sésamo tostado o ciboulette + flor de palta" },
        ],
      },
    ],
  },
  {
    id: "picoteos",
    label: "Salchipapas & Bajón",
    conditions:
      "Papas fritas crujientes doradas al momento con aderezos y salsas.",
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
          { label: "Base", text: "Porción de papas fritas para dos" },
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
        name: "Salchipollo Mediana",
        badge: "Pollo & Vienesa",
        price: 8000,
        details: [
          { label: "Base", text: "Papas fritas crujientes doradas" },
          { label: "Proteínas", text: "Vienesas y trozos de pechuga de pollo jugoso" },
        ],
      },
      {
        name: "Salchipollo Familiar",
        badge: "Familiar",
        price: 11000,
        details: [
          { label: "Base", text: "Bandeja familiar de papas fritas" },
          { label: "Proteínas", text: "Vienesas doradas y abundante pollo a la plancha" },
        ],
      },
      {
        name: "Salchipollo Full",
        badge: "Mega Bajón",
        price: 14490,
        details: [
          { label: "Base", text: "Papas fritas tamaño XL para grupos" },
          { label: "Proteínas", text: "Doble porción de pollo, vienesas doradas y salsas" },
        ],
      },
      {
        name: "Pollipapas Mediana",
        badge: "Solo Pollo",
        price: 8500,
        details: [
          { label: "Base", text: "Papas fritas crujientes" },
          { label: "Topping", text: "Trozos de pechuga de pollo dorada" },
        ],
      },
      {
        name: "Pollipapas Familiar",
        badge: "Solo Pollo",
        price: 12000,
        details: [
          { label: "Base", text: "Bandeja familiar de papas fritas" },
          { label: "Topping", text: "Abundante pollo dorado a la plancha" },
        ],
      },
      {
        name: "Chorrillana Personal",
        badge: "Personal",
        price: 10990,
        details: [
          { label: "Base", text: "Papas fritas crujientes" },
          { label: "Topping", text: "Carne picada, pollo, vienesa, cebolla frita y huevo frito" },
        ],
      },
      {
        name: "Chorrillana Familiar",
        badge: "Para Compartir",
        price: 17990,
        details: [
          { label: "Base", text: "Bandeja gigante de papas fritas" },
          { label: "Topping", text: "Carne picada, pollo, vienesa, cebolla frita y huevos fritos" },
        ],
      },
      {
        name: "Papas Fritas Familiares",
        badge: "Porción Familiar",
        price: 7000,
        details: [
          { label: "Base", text: "Bandeja grande de papas fritas doradas" },
          { label: "Acompañamiento", text: "Salsas de la casa" },
        ],
      },
    ],
  },
  {
    id: "sandwiches",
    label: "Burgers & Arepas",
    conditions:
      "Todas las hamburguesas incluyen porción de papas fritas crujientes.",
    items: [
      {
        name: "Hamburguesa Sencilla (+ Papas)",
        badge: "Con Papas Fritas",
        price: 7000,
        details: [
          { label: "Proteína", text: "Carne vacuna o pechuga de pollo" },
          { label: "Ingredientes", text: "Queso derretido, lechuga fresca y tomate" },
          { label: "Acompañamiento", text: "Porción de papas fritas crujientes" },
        ],
      },
      {
        name: "Hamburguesa Especial (+ Papas)",
        badge: "Completa + Papas",
        price: 9000,
        details: [
          { label: "Proteínas", text: "Carne vacuna y pechuga de pollo" },
          { label: "Ingredientes", text: "Queso derretido, huevo frito, lechuga y tomate" },
          { label: "Acompañamiento", text: "Porción de papas fritas crujientes" },
        ],
      },
      {
        name: "Churrasco Italiano",
        badge: "Clásico",
        price: 6490,
        details: [
          { label: "Proteína", text: "Vacuno o pechuga de pollo a la plancha" },
          { label: "Ingredientes", text: "Palta hass cremosa, tomate fresco y mayonesa" },
        ],
      },
      {
        name: "Churrasco Barroluco",
        badge: "Extra Queso",
        price: 6490,
        details: [
          { label: "Proteína", text: "Vacuno o pechuga de pollo a la plancha" },
          { label: "Ingredientes", text: "Abundante queso caliente derretido" },
        ],
      },
      {
        name: "Arepas Rellenas",
        badge: "Caseras",
        price: 5490,
        details: [
          { label: "Variedades", text: "Carne y queso, Pollo y queso, Carne y palta o Pollo y palta" },
        ],
      },
    ],
  },
  {
    id: "postres",
    label: "Postres",
    conditions:
      "Elaborados artesanalmente con fruta fresca seleccionada.",
    items: [
      {
        name: "Fresas con Crema Artesanal",
        badge: "Postre Casero",
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
