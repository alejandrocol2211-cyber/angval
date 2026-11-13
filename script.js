const CATEGORIES = [
  "Todos",
  "Maquillaje",
  "Skincare",
  "Perfumes",
  "Cabello",
  "Uñas",
  "Accesorios",
];
const DEFAULT_PRODUCTS = [
  // MAQUILLAJE
  {
    id: 1,
    name: "Velvet Matte Lipstick — Noir Rouge",
    brand: "Beauty Rush",
    price: 18.99,
    originalPrice: 24.99,
    category: "Maquillaje",
    subcategory: "Labios",
    image: "https://images.unsplash.com/photo-1617229649830-3c949e1fabbe?w=600&h=600&fit=crop&auto=format",
    rating: 4.8,
    reviews: 1243,
    badge: "Más Vendido",
    description: "Fórmula ultra pigmentada de larga duración con acabado aterciopelado. No reseca los labios gracias a su complejo de manteca de karité y vitamina E.",
    details: ["Larga duración 12 horas", "Libre de parabenos", "Cruelty-free", "18 tonos disponibles"],
    stock: 52,
  },
  {
    id: 2,
    name: "Smoky Eye Palette — Midnight",
    brand: "Beauty Rush",
    price: 29.99,
    originalPrice: 39.99,
    category: "Maquillaje",
    subcategory: "Ojos",
    image: "https://images.unsplash.com/photo-1598452963314-b09f397a5c48?w=600&h=600&fit=crop&auto=format",
    rating: 4.7,
    reviews: 876,
    badge: "Oferta",
    description: "Paleta de 16 sombras en tonos ahumados y dramáticos. Alta pigmentación con acabados mate, satinado y glitter prensado.",
    details: ["16 tonos", "Alta pigmentación", "Fácil difuminado", "Espejo integrado"],
    stock: 34,
  },
  {
    id: 3,
    name: "Foundation Flawless HD",
    brand: "Beauty Rush",
    price: 27.50,
    category: "Maquillaje",
    subcategory: "Base",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=600&fit=crop&auto=format",
    rating: 4.6,
    reviews: 2104,
    badge: "Más Vendido",
    description: "Base de cobertura media a total con acabado natural de segunda piel. Fórmula transfer-proof con SPF 30. 40 tonos disponibles.",
    details: ["SPF 30", "40 tonos", "Cobertura buildable", "24h de duración"],
    stock: 88,
  },
  {
    id: 4,
    name: "Volume Lash Mascara",
    brand: "Beauty Rush",
    price: 15.50,
    category: "Maquillaje",
    subcategory: "Ojos",
    image: "https://images.unsplash.com/photo-1631730486572-226d1f595b68?w=600&h=600&fit=crop&auto=format",
    rating: 4.5,
    reviews: 932,
    description: "Máscara de volumen extremo con cepillo de cerdas densas. Fórmula buildable sin grumos que define y curva las pestañas.",
    details: ["Volumen extremo", "Sin grumos", "Resistente al agua", "Vitamina B5"],
    stock: 67,
  },
  {
    id: 5,
    name: "Satin Blush — Peach Glow",
    brand: "Lumière",
    price: 14.99,
    category: "Maquillaje",
    subcategory: "Mejillas",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop&auto=format",
    rating: 4.7,
    reviews: 543,
    badge: "Nuevo",
    description: "Colorete satinado con partículas iridiscentes que aportan un rubor natural y luminoso. Apto para todo tipo de piel.",
    details: ["Acabado satinado", "Larga duración", "Sin talco", "Apto piel sensible"],
    stock: 41,
  },
  {
    id: 6,
    name: "Precision Lip Liner",
    brand: "Beauty Rush",
    price: 9.99,
    category: "Maquillaje",
    subcategory: "Labios",
    image: "https://images.unsplash.com/photo-1681679103943-cff212a6461a?w=600&h=600&fit=crop&auto=format",
    rating: 4.4,
    reviews: 321,
    description: "Lápiz delineador de labios con punta ultra fina para un perfilado perfecto. Fórmula cremosa de larga duración.",
    details: ["Punta ultra fina", "Fórmula cremosa", "No se corre", "12 tonos"],
    stock: 73,
  },
  {
    id: 7,
    name: "Illuminating Highlighter",
    brand: "Lumière",
    price: 22.00,
    category: "Maquillaje",
    subcategory: "Iluminadores",
    image: "https://images.unsplash.com/photo-1583784561105-a674080f391e?w=600&h=600&fit=crop&auto=format",
    rating: 4.9,
    reviews: 1567,
    badge: "Más Vendido",
    description: "Iluminador en polvo compacto con partículas de oro rosa finamente molidas. Aporta un brillo dimensional y sofisticado.",
    details: ["Partículas de oro rosa", "Sin glitter grueso", "Larga duración", "5 tonos"],
    stock: 29,
  },
  {
    id: 8,
    name: "Invisible Setting Spray",
    brand: "Beauty Rush",
    price: 16.99,
    category: "Maquillaje",
    subcategory: "Fijadores",
    image: "https://images.unsplash.com/photo-1723150512429-bfa92988d845?w=600&h=600&fit=crop&auto=format",
    rating: 4.6,
    reviews: 789,
    description: "Spray fijador invisible que prolonga el maquillaje hasta 16 horas. Fórmula micro-fina que no altera el acabado del maquillaje.",
    details: ["16h de fijación", "Micro-fina", "Sin alcohol", "Efecto segunda piel"],
    stock: 55,
  },
  {
    id: 9,
    name: "Full Coverage Concealer",
    brand: "Beauty Rush",
    price: 13.50,
    category: "Maquillaje",
    subcategory: "Correctores",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=600&fit=crop&auto=format",
    rating: 4.8,
    reviews: 1102,
    badge: "Más Vendido",
    description: "Corrector de cobertura total con fórmula hidratante. Cubre ojeras, manchas e imperfecciones sin cuartearse. 30 tonos.",
    details: ["Cobertura total", "Hidratante", "Sin oxidación", "30 tonos"],
    stock: 92,
  },
  {
    id: 10,
    name: "Gel Eyeliner — Intense Black",
    brand: "Lumière",
    price: 11.99,
    category: "Maquillaje",
    subcategory: "Ojos",
    image: "https://images.unsplash.com/photo-1631730359585-38a4935cbec4?w=600&h=600&fit=crop&auto=format",
    rating: 4.7,
    reviews: 654,
    description: "Delineador en gel de intensidad máxima. Punta ultradelgada para líneas precisas. Resistente al agua y al sudor.",
    details: ["Resistente al agua", "Ultra preciso", "Negro intenso", "Retráctil"],
    stock: 48,
  },

  // SKINCARE
  {
    id: 11,
    name: "Vitamin C Brightening Serum",
    brand: "Lumière Skin",
    price: 38.00,
    category: "Skincare",
    subcategory: "Serums",
    image: "https://images.unsplash.com/photo-1629380108574-40c083555579?w=600&h=600&fit=crop&auto=format",
    rating: 4.9,
    reviews: 3201,
    badge: "Más Vendido",
    description: "Sérum iluminador con 20% de vitamina C estabilizada + ferulato de vitamina E. Reduce manchas y aporta luminosidad visible en 2 semanas.",
    details: ["20% Vitamina C", "Vitamina E + Ferulato", "Resultados en 2 semanas", "Apto pieles sensibles"],
    stock: 18,
  },
  {
    id: 12,
    name: "Hyaluronic Acid Moisture Cream",
    brand: "Lumière Skin",
    price: 42.00,
    category: "Skincare",
    subcategory: "Hidratantes",
    image: "https://images.unsplash.com/photo-1629732047847-50219e9c5aef?w=600&h=600&fit=crop&auto=format",
    rating: 4.8,
    reviews: 1876,
    badge: "Nuevo",
    description: "Crema hidratante de triple acción con ácido hialurónico de triple peso molecular. Hidratación profunda de 72 horas para todo tipo de piel.",
    details: ["Triple ácido hialurónico", "72h de hidratación", "Sin fragancia", "Todo tipo de piel"],
    stock: 44,
  },
  {
    id: 13,
    name: "Retinol Night Renewal Cream",
    brand: "Lumière Skin",
    price: 55.00,
    originalPrice: 70.00,
    category: "Skincare",
    subcategory: "Anti-edad",
    image: "https://images.unsplash.com/photo-1763503839418-2b45c3d7a3c3?w=600&h=600&fit=crop&auto=format",
    rating: 4.7,
    reviews: 921,
    badge: "Oferta",
    description: "Crema nocturna con retinol encapsulado al 0.3%, péptidos y ceramidas. Reduce arrugas y mejora la textura de la piel mientras duermes.",
    details: ["Retinol encapsulado 0.3%", "Péptidos y ceramidas", "Uso nocturno", "Visible en 4 semanas"],
    stock: 22,
  },
  {
    id: 14,
    name: "SPF 50+ Sun Shield Fluid",
    brand: "Lumière Skin",
    price: 28.00,
    category: "Skincare",
    subcategory: "Protección Solar",
    image: "https://images.unsplash.com/photo-1622910076411-b126ff7e469b?w=600&h=600&fit=crop&auto=format",
    rating: 4.6,
    reviews: 1543,
    description: "Fluido solar de textura ultraligera con SPF 50+ y PA++++. Acabado invisible sin residuo blanco. Apto debajo del maquillaje.",
    details: ["SPF 50+ PA++++", "Sin residuo blanco", "Textura ultraligera", "Bajo maquillaje"],
    stock: 60,
  },
  {
    id: 15,
    name: "Niacinamide 10% + Zinc Serum",
    brand: "Lumière Skin",
    price: 19.99,
    category: "Skincare",
    subcategory: "Serums",
    image: "https://images.unsplash.com/photo-1630398777076-9b262a08c211?w=600&h=600&fit=crop&auto=format",
    rating: 4.8,
    reviews: 2455,
    badge: "Más Vendido",
    description: "Sérum con 10% de niacinamida y 1% de zinc PCA. Reduce poros visibles, controla el sebo y unifica el tono en 4 semanas.",
    details: ["Niacinamida 10%", "Zinc PCA 1%", "Controla el sebo", "Para piel mixta/grasa"],
    stock: 37,
  },
  {
    id: 16,
    name: "Deep Cleanse Micellar Water",
    brand: "Beauty Rush",
    price: 14.50,
    category: "Skincare",
    subcategory: "Limpiadores",
    image: "https://images.unsplash.com/photo-1631438420064-8f1b2b52b2e6?w=600&h=600&fit=crop&auto=format",
    rating: 4.5,
    reviews: 876,
    description: "Agua micelar de limpieza profunda que elimina maquillaje, suciedad y exceso de sebo sin resecar. Sin aclarado necesario. 400ml.",
    details: ["Sin aclarado", "Elimina maquillaje", "Sin alcohol", "400ml"],
    stock: 81,
  },

  // PERFUMES
  {
    id: 17,
    name: "Rose Elixir — Eau de Parfum",
    brand: "Maison Dorée",
    price: 78.00,
    category: "Perfumes",
    subcategory: "Eau de Parfum",
    image: "https://images.unsplash.com/photo-1604164506946-af4e4e36812c?w=600&h=600&fit=crop&auto=format",
    rating: 4.9,
    reviews: 1234,
    badge: "Lujo",
    description: "Fragancia floral amaderada de alta perfumería. Notas de salida: bergamota y pera. Corazón: rosa búlgara y jazmín. Fondo: almizcle blanco y sándalo. 50ml.",
    details: ["50ml EDP", "Familia floral amaderada", "Duración 8-10h", "Sillage moderado"],
    stock: 15,
  },
  {
    id: 18,
    name: "Crystal Bloom — Eau de Toilette",
    brand: "Maison Dorée",
    price: 54.00,
    originalPrice: 65.00,
    category: "Perfumes",
    subcategory: "Eau de Toilette",
    image: "https://images.unsplash.com/photo-1609451043305-745f798b51a3?w=600&h=600&fit=crop&auto=format",
    rating: 4.7,
    reviews: 678,
    badge: "Oferta",
    description: "Fragancia fresca y luminosa ideal para el día a día. Notas de bergamota, peonía blanca, madera de cedro y musgo.",
    details: ["75ml EDT", "Familia floral fresca", "Duración 5-7h", "Para uso diario"],
    stock: 28,
  },
  {
    id: 19,
    name: "Velours Noir — Eau de Parfum",
    brand: "Maison Dorée",
    price: 95.00,
    category: "Perfumes",
    subcategory: "Eau de Parfum",
    image: "https://images.unsplash.com/photo-1681679103943-cff212a6461a?w=600&h=600&fit=crop&auto=format",
    rating: 4.9,
    reviews: 432,
    badge: "Exclusivo",
    description: "Fragancia oriental de alta perfumería para noches especiales. Notas de oud, vainilla bourbon, pachulí oscuro y rosa negra. Edición limitada. 30ml.",
    details: ["30ml EDP", "Edición limitada", "Familia oriental", "Duración 12h+"],
    stock: 8,
  },

  // CABELLO
  {
    id: 20,
    name: "Argan Oil Repair Shampoo",
    brand: "HairLux",
    price: 22.50,
    category: "Cabello",
    subcategory: "Shampoos",
    image: "https://images.unsplash.com/photo-1629380108574-40c083555579?w=600&h=600&fit=crop&auto=format",
    rating: 4.6,
    reviews: 987,
    description: "Champú reparador con aceite de argán marroquí. Nutre, hidrata y repara el cabello dañado desde la primera aplicación. Sin sulfatos. 300ml.",
    details: ["Sin sulfatos", "Aceite de argán", "Para cabello dañado", "300ml"],
    stock: 64,
  },
  {
    id: 21,
    name: "Keratin Intensive Mask",
    brand: "HairLux",
    price: 31.00,
    originalPrice: 40.00,
    category: "Cabello",
    subcategory: "Mascarillas",
    image: "https://images.unsplash.com/photo-1630398777076-9b262a08c211?w=600&h=600&fit=crop&auto=format",
    rating: 4.8,
    reviews: 765,
    badge: "Oferta",
    description: "Mascarilla intensiva de queratina y proteínas de seda para cabello muy dañado. Restaura el brillo y elimina el frizz en un solo uso. 250ml.",
    details: ["Queratina + seda", "Anti-frizz", "Brillo intenso", "250ml"],
    stock: 39,
  },
  {
    id: 22,
    name: "Shine Serum Hair Oil",
    brand: "HairLux",
    price: 26.00,
    category: "Cabello",
    subcategory: "Serums",
    image: "https://images.unsplash.com/photo-1622910076411-b126ff7e469b?w=600&h=600&fit=crop&auto=format",
    rating: 4.7,
    reviews: 543,
    badge: "Nuevo",
    description: "Sérum oleoso ultraligero con aceites de camelia, argán y jojoba. Aporta brillo espejo, controla el frizz y protege del calor. 100ml.",
    details: ["3 aceites premium", "Protección térmica 230°", "Sin residuo graso", "100ml"],
    stock: 47,
  },

  // UÑAS
  {
    id: 23,
    name: "Gel Nail Polish — Berry Crush",
    brand: "Beauty Rush",
    price: 12.99,
    category: "Uñas",
    subcategory: "Esmaltes",
    image: "https://images.unsplash.com/photo-1602585578130-c9076e09330d?w=600&h=600&fit=crop&auto=format",
    rating: 4.6,
    reviews: 432,
    badge: "Nuevo",
    description: "Esmalte efecto gel de ultra brillo y larga duración sin necesidad de lámpara UV. Fórmula en 1 sola capa con acabado espejo. 15ml.",
    details: ["Sin lámpara UV", "1 sola capa", "Efecto espejo", "48h de duración"],
    stock: 76,
  },
  {
    id: 24,
    name: "Nail Care Kit Pro",
    brand: "Beauty Rush",
    price: 34.99,
    originalPrice: 45.00,
    category: "Uñas",
    subcategory: "Kits",
    image: "https://images.unsplash.com/photo-1659391542239-9648f307c0b1?w=600&h=600&fit=crop&auto=format",
    rating: 4.7,
    reviews: 289,
    badge: "Oferta",
    description: "Kit completo de cuidado de uñas profesional. Incluye lima, cutícula remover, aceite de cutículas, base coat y top coat de brillo extremo.",
    details: ["5 productos", "Uso profesional", "Para uñas frágiles", "Aceite de cutículas"],
    stock: 22,
  },

  // ACCESORIOS
  {
    id: 25,
    name: "Pro Brush Set — 12pcs",
    brand: "Beauty Rush",
    price: 49.99,
    originalPrice: 65.00,
    category: "Accesorios",
    subcategory: "Brochas",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop&auto=format",
    rating: 4.9,
    reviews: 1876,
    badge: "Más Vendido",
    description: "Set de 12 brochas profesionales con cerdas sintéticas premium Taklon. Incluye estuche de cuero vegano con cremallera. Apto para maquillaje líquido y en polvo.",
    details: ["12 brochas", "Cerdas Taklon", "Estuche cuero vegano", "Para líquidos y polvos"],
    stock: 31,
  },
  {
    id: 26,
    name: "Velvet Makeup Sponge Set",
    brand: "Beauty Rush",
    price: 8.99,
    category: "Accesorios",
    subcategory: "Esponjas",
    image: "https://images.unsplash.com/photo-1583784561105-a674080f391e?w=600&h=600&fit=crop&auto=format",
    rating: 4.5,
    reviews: 987,
    description: "Set de 3 esponjas de maquillaje en velvet de alta densidad. Aplica la base sin desperdiciar producto. Apta para uso húmedo y seco.",
    details: ["Set de 3 esponjas", "Alta densidad", "Húmedo y seco", "Latex-free"],
    stock: 95,
  },
];

const STORAGE = {
  products: "aura_products",
  cart: "aura_cart",
  wishlist: "aura_wishlist",
  dark: "aura_dark",
  accounts: "aura_accounts",
  currentUser: "aura_current_user",
  orders: "aura_orders",
  tickets: "aura_support_tickets",
};

const DEFAULT_ACCOUNTS = [
  { id: 1, name: "Administrador Aura", email: "admin@aurabeauty.com", password: "admin123", role: "Administrador", status: "Activo" },
];

const CATEGORY_IMAGES = {
  Maquillaje: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=700&fit=crop&auto=format",
  Skincare: "https://images.unsplash.com/photo-1629380108574-40c083555579?w=600&h=700&fit=crop&auto=format",
  Perfumes: "https://images.unsplash.com/photo-1604164506946-af4e4e36812c?w=600&h=700&fit=crop&auto=format",
  Cabello: "https://images.unsplash.com/photo-1629732047847-50219e9c5aef?w=600&h=700&fit=crop&auto=format",
  Uñas: "https://images.unsplash.com/photo-1602585578130-c9076e09330d?w=600&h=700&fit=crop&auto=format",
  Accesorios: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=700&fit=crop&auto=format",
};

const state = {
  products: readStorage(STORAGE.products, DEFAULT_PRODUCTS),
  cart: readStorage(STORAGE.cart, []),
  wishlist: readStorage(STORAGE.wishlist, []),
  accounts: readStorage(STORAGE.accounts, DEFAULT_ACCOUNTS),
  currentUser: readStorage(STORAGE.currentUser, null),
  orders: readStorage(STORAGE.orders, []),
  tickets: readStorage(STORAGE.tickets, []),
  category: "Todos",
  search: "",
  sort: "featured",
  wishlistOnly: false,
  authMode: "login",
};

const elements = {
  splash: document.querySelector("#splash"),
  catalogGrid: document.querySelector("#catalog-grid"),
  featuredGrid: document.querySelector("#featured-grid"),
  categoryGrid: document.querySelector("#category-grid"),
  filterChips: document.querySelector("#filter-chips"),
  catalogHeading: document.querySelector("#catalog-heading"),
  catalogSummary: document.querySelector("#catalog-summary"),
  emptyState: document.querySelector("#empty-state"),
  cartDrawer: document.querySelector("#cart-drawer"),
  cartItems: document.querySelector("#cart-items"),
  cartFooter: document.querySelector("#cart-footer"),
  backdrop: document.querySelector("#drawer-backdrop"),
  toast: document.querySelector("#toast"),
};

function readStorage(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value ?? structuredClone(fallback);
  } catch {
    return structuredClone(fallback);
  }
}

function saveStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;",
  })[character]);
}

function money(value) {
  return new Intl.NumberFormat("es-CO", { style: "currency", currency: "USD" }).format(value);
}

function icon(name) {
  return `<svg aria-hidden="true"><use href="#icon-${name}"></use></svg>`;
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => elements.toast.classList.remove("is-visible"), 2400);
}

function openDialog(id) {
  const dialog = document.querySelector(id);
  if (dialog && !dialog.open) dialog.showModal();
}

function closeDialogs() {
  document.querySelectorAll("dialog[open]").forEach((dialog) => dialog.close());
}

function setAuthMode(mode) {
  state.authMode = mode;
  const registering = mode === "register";
  document.querySelector("#auth-title").textContent = registering ? "Crea tu cuenta" : "Bienvenida a Aura";
  document.querySelector("#auth-description").textContent = registering
    ? "Regístrate para comprar, guardar favoritos y consultar tus pedidos."
    : "Ingresa para guardar tus favoritos y consultar tus pedidos.";
  document.querySelector(".register-field").hidden = !registering;
  document.querySelector(".register-field input").required = registering;
  document.querySelector("#login-form .button").textContent = registering ? "Crear cuenta" : "Ingresar";
  document.querySelector("#recovery-button").hidden = registering;
  document.querySelector("#auth-mode-button").textContent = registering ? "Ya tengo una cuenta" : "Crear una cuenta nueva";
}

function productCard(product) {
  const wished = state.wishlist.includes(product.id);
  return `
    <article class="product-card">
      <div class="product-card__image" data-product="${product.id}" role="button" tabindex="0" aria-label="Ver ${escapeHtml(product.name)}">
        <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy" />
        ${product.badge ? `<span class="product-card__badge">${escapeHtml(product.badge)}</span>` : ""}
        <button class="heart-button ${wished ? "is-active" : ""}" type="button" data-wishlist="${product.id}" aria-label="${wished ? "Quitar de" : "Agregar a"} favoritos">${icon("heart")}</button>
      </div>
      <div class="product-card__body">
        <p class="product-card__brand">${escapeHtml(product.brand)}</p>
        <h3>${escapeHtml(product.name)}</h3>
        <div class="rating">${icon("star")}<strong>${product.rating.toFixed(1)}</strong><span>(${product.reviews.toLocaleString("es-CO")})</span></div>
        <div class="product-card__bottom">
          <div><span class="price">${money(product.price)}</span>${product.originalPrice ? `<span class="old-price">${money(product.originalPrice)}</span>` : ""}</div>
          <button class="add-button" type="button" data-add="${product.id}" aria-label="Agregar ${escapeHtml(product.name)} al carrito">${icon("bag")}</button>
        </div>
      </div>
    </article>`;
}

function renderCategories() {
  elements.categoryGrid.innerHTML = CATEGORIES.filter((category) => category !== "Todos").map((category) => `
    <button class="category-card" type="button" data-category="${category}">
      <img src="${CATEGORY_IMAGES[category]}" alt="" loading="lazy" />
      <span>${category}</span>
    </button>`).join("");
}

function renderFeatured() {
  let products = state.products.filter((product) => product.badge === "Más Vendido");
  if (products.length < 4) products = state.products.slice(0, 4);
  elements.featuredGrid.innerHTML = products.slice(0, 4).map(productCard).join("");
}

function renderFilters() {
  elements.filterChips.innerHTML = CATEGORIES.map((category) => `
    <button type="button" data-filter="${category}" class="${state.category === category ? "is-active" : ""}">${category}</button>`).join("");
}

function filteredProducts() {
  let products = [...state.products];
  if (state.wishlistOnly) products = products.filter((product) => state.wishlist.includes(product.id));
  if (state.category !== "Todos") products = products.filter((product) => product.category === state.category);
  if (state.search) {
    const term = state.search.toLocaleLowerCase("es");
    products = products.filter((product) => [product.name, product.brand, product.category, product.subcategory]
      .some((value) => value.toLocaleLowerCase("es").includes(term)));
  }
  if (state.sort === "low") products.sort((a, b) => a.price - b.price);
  if (state.sort === "high") products.sort((a, b) => b.price - a.price);
  if (state.sort === "rating") products.sort((a, b) => b.rating - a.rating);
  return products;
}

function renderCatalog() {
  const products = filteredProducts();
  renderFilters();
  elements.catalogHeading.textContent = state.wishlistOnly ? "Mis favoritos" : state.category === "Todos" ? "Todos los productos" : state.category;
  elements.catalogSummary.textContent = state.search ? `${products.length} resultados para “${state.search}”` : `${products.length} productos seleccionados para ti`;
  elements.catalogGrid.innerHTML = products.map(productCard).join("");
  elements.emptyState.hidden = products.length > 0;
}

function updateCounts() {
  document.querySelector("#cart-count").textContent = state.cart.reduce((total, item) => total + item.quantity, 0);
  document.querySelector("#wishlist-count").textContent = state.wishlist.length;
}

function addToCart(productId, quantity = 1) {
  const product = state.products.find((item) => item.id === productId);
  if (!product) return;
  const existing = state.cart.find((item) => item.id === productId);
  if (existing) existing.quantity += quantity;
  else state.cart.push({ id: productId, quantity });
  saveStorage(STORAGE.cart, state.cart);
  updateCounts();
  renderCart();
  showToast(`${product.name} se agregó al carrito`);
}

function toggleWishlist(productId) {
  const index = state.wishlist.indexOf(productId);
  if (index >= 0) state.wishlist.splice(index, 1);
  else state.wishlist.push(productId);
  saveStorage(STORAGE.wishlist, state.wishlist);
  updateCounts();
  renderFeatured();
  renderCatalog();
  showToast(index >= 0 ? "Producto eliminado de favoritos" : "Producto guardado en favoritos");
}

function cartTotal() {
  return state.cart.reduce((total, item) => {
    const product = state.products.find((entry) => entry.id === item.id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);
}

function renderCart() {
  if (!state.cart.length) {
    elements.cartItems.innerHTML = `<div class="cart-empty"><div><h3>Tu carrito está vacío</h3><p>Descubre algo especial para ti.</p></div></div>`;
    elements.cartFooter.innerHTML = `<button class="button button--dark" type="button" data-route="catalog">Explorar catálogo</button>`;
    return;
  }
  elements.cartItems.innerHTML = state.cart.map((item) => {
    const product = state.products.find((entry) => entry.id === item.id);
    if (!product) return "";
    return `<article class="cart-item">
      <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" />
      <div><h3>${escapeHtml(product.name)}</h3><p>${money(product.price)}</p>
        <div class="quantity"><button type="button" data-quantity="-1" data-id="${product.id}" aria-label="Restar">−</button><span>${item.quantity}</span><button type="button" data-quantity="1" data-id="${product.id}" aria-label="Sumar">+</button></div>
      </div>
      <button class="remove-button" type="button" data-remove="${product.id}">Eliminar</button>
    </article>`;
  }).join("");
  elements.cartFooter.innerHTML = `<div class="cart-total"><span>Total</span><strong>${money(cartTotal())}</strong></div><button class="button button--primary" id="checkout-button" type="button">Finalizar compra</button>`;
}

function openCart() {
  renderCart();
  elements.cartDrawer.classList.add("is-open");
  elements.backdrop.classList.add("is-open");
  elements.cartDrawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-locked");
}

function closeCart() {
  elements.cartDrawer.classList.remove("is-open");
  elements.backdrop.classList.remove("is-open");
  elements.cartDrawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-locked");
}

function openProduct(productId) {
  const product = state.products.find((item) => item.id === productId);
  if (!product) return;
  document.querySelector("#product-detail").innerHTML = `<div class="product-detail">
    <div class="product-detail__image"><img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" /></div>
    <div class="product-detail__content">
      <p class="eyebrow">${escapeHtml(product.brand)} · ${escapeHtml(product.subcategory)}</p>
      <h2>${escapeHtml(product.name)}</h2>
      <div class="rating">${icon("star")}<strong>${product.rating.toFixed(1)}</strong><span>${product.reviews.toLocaleString("es-CO")} reseñas</span></div>
      <p class="product-detail__description">${escapeHtml(product.description)}</p>
      <p class="product-detail__price">${money(product.price)} ${product.originalPrice ? `<span class="old-price">${money(product.originalPrice)}</span>` : ""}</p>
      <ul>${(product.details || []).map((detail) => `<li>${escapeHtml(detail)}</li>`).join("")}</ul>
      <p><strong>${product.stock}</strong> unidades disponibles</p>
      <button class="button button--primary" type="button" data-add="${product.id}" data-close-after>Agregar al carrito</button>
    </div>
  </div>`;
  openDialog("#product-modal");
}

function navigate(route) {
  if (route === "admin" && state.currentUser?.role !== "Administrador") {
    route = "account";
    setAuthMode("login");
    openDialog("#account-modal");
    showToast("Ingresa como administrador para continuar");
  }
  document.querySelectorAll(".view").forEach((view) => view.classList.remove("is-active"));
  const target = document.querySelector(`#${route}-view`) || document.querySelector("#home-view");
  target.classList.add("is-active");
  history.replaceState(null, "", route === "home" ? "#inicio" : `#${route}`);
  document.querySelector("#main-nav").classList.remove("is-open");
  closeCart();
  if (route === "catalog") renderCatalog();
  if (route === "admin") renderAdmin();
  if (route === "account") renderAccount();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goToCategory(category) {
  state.category = category;
  state.search = "";
  state.wishlistOnly = false;
  document.querySelector("#global-search").value = "";
  navigate("catalog");
}

function renderCheckout() {
  document.querySelector("#checkout-summary").innerHTML = `<h3>Resumen</h3>${state.cart.map((item) => {
    const product = state.products.find((entry) => entry.id === item.id);
    return product ? `<div class="summary-line"><span>${escapeHtml(product.name)} × ${item.quantity}</span><strong>${money(product.price * item.quantity)}</strong></div>` : "";
  }).join("")}<div class="summary-total"><span>Total</span><span>${money(cartTotal())}</span></div>`;
}

function renderAccount() {
  document.querySelector("#customer-greeting").textContent = state.currentUser
    ? `Hola, ${state.currentUser.name.split(" ")[0]}`
    : "Mi cuenta";
  document.querySelector("#account-access-button").textContent = state.currentUser ? "Cerrar sesión" : "Ingresar o registrarme";
  const orders = state.currentUser ? state.orders.filter((order) => order.email === state.currentUser.email) : [];
  document.querySelector("#customer-orders").innerHTML = orders.length
    ? orders.map((order) => `<article class="order-card">
        <div><h3>Pedido ${escapeHtml(order.id)}</h3><p>${escapeHtml(order.date)} · ${order.items} productos</p><p>${escapeHtml(order.city)}</p></div>
        <div><strong>${money(order.total)}</strong><span class="status-pill">${escapeHtml(order.status)}</span></div>
      </article>`).join("")
    : `<div class="cart-empty"><div><h3>${state.currentUser ? "Aún no tienes pedidos" : "Inicia sesión para ver tus pedidos"}</h3><p>Tu historial de compras aparecerá aquí.</p></div></div>`;
}

function renderAdmin() {
  const inventoryValue = state.products.reduce((total, product) => total + product.price * product.stock, 0);
  const lowStock = state.products.filter((product) => product.stock < 30).length;
  document.querySelector("#admin-stats").innerHTML = `
    <div class="stat-card"><span>Productos activos</span><strong>${state.products.length}</strong></div>
    <div class="stat-card"><span>Valor de inventario</span><strong>${money(inventoryValue)}</strong></div>
    <div class="stat-card"><span>Stock bajo</span><strong>${lowStock}</strong></div>`;
  document.querySelector("#admin-table").innerHTML = state.products.map((product) => `<tr>
    <td><div class="table-product"><img src="${escapeHtml(product.image)}" alt="" /><strong>${escapeHtml(product.name)}</strong></div></td>
    <td>${escapeHtml(product.category)}</td><td>${money(product.price)}</td><td>${product.stock}</td>
    <td><div class="table-actions"><button type="button" data-edit="${product.id}">Editar</button><button class="danger" type="button" data-delete="${product.id}">Eliminar</button></div></td>
  </tr>`).join("");
  document.querySelector("#users-table").innerHTML = state.accounts.map((account) => `<tr>
    <td><strong>${escapeHtml(account.name)}</strong></td><td>${escapeHtml(account.email)}</td>
    <td><select class="role-select" data-user-role="${account.id}"><option ${account.role === "Cliente" ? "selected" : ""}>Cliente</option><option ${account.role === "Administrador" ? "selected" : ""}>Administrador</option></select></td>
    <td><select class="status-select" data-user-status="${account.id}"><option ${account.status === "Activo" ? "selected" : ""}>Activo</option><option ${account.status === "Bloqueado" ? "selected" : ""}>Bloqueado</option></select></td>
  </tr>`).join("");
  document.querySelector("#orders-table").innerHTML = state.orders.length ? state.orders.map((order) => `<tr>
    <td><strong>${escapeHtml(order.id)}</strong></td><td>${escapeHtml(order.name)}</td><td>${escapeHtml(order.date)}</td><td>${money(order.total)}</td>
    <td><select class="status-select" data-order-status="${escapeHtml(order.id)}"><option ${order.status === "Confirmado" ? "selected" : ""}>Confirmado</option><option ${order.status === "En preparación" ? "selected" : ""}>En preparación</option><option ${order.status === "Enviado" ? "selected" : ""}>Enviado</option><option ${order.status === "Entregado" ? "selected" : ""}>Entregado</option></select></td>
  </tr>`).join("") : `<tr><td colspan="5">No hay pedidos registrados.</td></tr>`;
  document.querySelector("#support-table").innerHTML = state.tickets.length ? state.tickets.map((ticket) => `<tr>
    <td><strong>${escapeHtml(ticket.id)}</strong></td><td>${escapeHtml(ticket.type)}</td><td>${escapeHtml(ticket.subject)}</td><td>${escapeHtml(ticket.date)}</td>
    <td><select class="status-select" data-ticket-status="${escapeHtml(ticket.id)}"><option ${ticket.status === "Abierto" ? "selected" : ""}>Abierto</option><option ${ticket.status === "En proceso" ? "selected" : ""}>En proceso</option><option ${ticket.status === "Resuelto" ? "selected" : ""}>Resuelto</option></select></td>
  </tr>`).join("") : `<tr><td colspan="5">No hay solicitudes registradas.</td></tr>`;
}

function openProductForm(productId) {
  const form = document.querySelector("#product-form");
  form.reset();
  form.elements.brand.value = "Aura Beauty";
  document.querySelector("#product-form-title").textContent = productId ? "Editar producto" : "Nuevo producto";
  if (productId) {
    const product = state.products.find((item) => item.id === productId);
    if (!product) return;
    ["id", "name", "brand", "category", "price", "stock", "image"].forEach((key) => { form.elements[key].value = product[key]; });
  }
  openDialog("#product-form-modal");
}

function deleteProduct(productId) {
  const product = state.products.find((item) => item.id === productId);
  if (!product || !confirm(`¿Eliminar ${product.name}?`)) return;
  state.products = state.products.filter((item) => item.id !== productId);
  saveStorage(STORAGE.products, state.products);
  renderAdmin();
  renderFeatured();
  showToast("Producto eliminado");
}

function setupEvents() {
  document.addEventListener("click", (event) => {
    const route = event.target.closest("[data-route]");
    const category = event.target.closest("[data-category]");
    const filter = event.target.closest("[data-filter]");
    const product = event.target.closest("[data-product]");
    const add = event.target.closest("[data-add]");
    const wishlist = event.target.closest("[data-wishlist]");
    const remove = event.target.closest("[data-remove]");
    const quantity = event.target.closest("[data-quantity]");
    const edit = event.target.closest("[data-edit]");
    const deletion = event.target.closest("[data-delete]");
    const adminTab = event.target.closest("[data-admin-tab]");
    if (route) navigate(route.dataset.route);
    if (category) goToCategory(category.dataset.category);
    if (filter) { state.category = filter.dataset.filter; state.wishlistOnly = false; renderCatalog(); }
    if (product && !event.target.closest("button")) openProduct(Number(product.dataset.product));
    if (add) { addToCart(Number(add.dataset.add)); if (add.hasAttribute("data-close-after")) closeDialogs(); }
    if (wishlist) toggleWishlist(Number(wishlist.dataset.wishlist));
    if (remove) { state.cart = state.cart.filter((item) => item.id !== Number(remove.dataset.remove)); saveStorage(STORAGE.cart, state.cart); updateCounts(); renderCart(); }
    if (quantity) {
      const item = state.cart.find((entry) => entry.id === Number(quantity.dataset.id));
      if (item) item.quantity += Number(quantity.dataset.quantity);
      state.cart = state.cart.filter((entry) => entry.quantity > 0);
      saveStorage(STORAGE.cart, state.cart); updateCounts(); renderCart();
    }
    if (edit) openProductForm(Number(edit.dataset.edit));
    if (deletion) deleteProduct(Number(deletion.dataset.delete));
    if (adminTab) {
      document.querySelectorAll("[data-admin-tab]").forEach((tab) => tab.classList.toggle("is-active", tab === adminTab));
      document.querySelectorAll(".admin-panel").forEach((panel) => {
        panel.classList.toggle("is-active", panel.id === `admin-${adminTab.dataset.adminTab}-panel`);
      });
      document.querySelector("#new-product-button").hidden = adminTab.dataset.adminTab !== "inventory";
    }
    if (event.target.closest("[data-close-modal]")) closeDialogs();
  });

  document.querySelector("#enter-store")?.addEventListener("click", () => {
    sessionStorage.setItem("aura_entered", "true");
    elements.splash.classList.add("is-hidden");
  });
  document.querySelector("#menu-button")?.addEventListener("click", () => document.querySelector("#main-nav").classList.toggle("is-open"));
  document.querySelector("#search-button")?.addEventListener("click", () => {
    document.querySelector("#search-panel").classList.add("is-open");
    setTimeout(() => document.querySelector("#global-search").focus(), 50);
  });
  document.querySelector("#close-search")?.addEventListener("click", () => document.querySelector("#search-panel").classList.remove("is-open"));
  document.querySelector("#global-search")?.addEventListener("input", (event) => {
    state.search = event.target.value.trim(); state.category = "Todos"; state.wishlistOnly = false; navigate("catalog");
  });
  document.querySelector("#sort-select")?.addEventListener("change", (event) => { state.sort = event.target.value; renderCatalog(); });
  document.querySelector("#clear-filters")?.addEventListener("click", () => { state.category = "Todos"; state.search = ""; state.wishlistOnly = false; renderCatalog(); });
  document.querySelector("#cart-button")?.addEventListener("click", openCart);
  document.querySelector("#close-cart")?.addEventListener("click", closeCart);
  elements.backdrop?.addEventListener("click", closeCart);
  document.querySelector("#wishlist-button")?.addEventListener("click", () => { state.wishlistOnly = true; state.category = "Todos"; navigate("catalog"); });
  document.querySelector("#account-button")?.addEventListener("click", () => state.currentUser ? navigate("account") : openDialog("#account-modal"));
  document.querySelector("#account-access-button")?.addEventListener("click", () => {
    if (state.currentUser) {
      state.currentUser = null;
      saveStorage(STORAGE.currentUser, null);
      renderAccount();
      showToast("Sesión cerrada");
    } else {
      setAuthMode("login");
      openDialog("#account-modal");
    }
  });
  document.querySelector("#recovery-button")?.addEventListener("click", () => { closeDialogs(); openDialog("#recovery-modal"); });
  document.querySelector("#auth-mode-button")?.addEventListener("click", () => setAuthMode(state.authMode === "login" ? "register" : "login"));
  document.querySelector("#footer-recovery")?.addEventListener("click", () => openDialog("#recovery-modal"));
  document.querySelector("#theme-button")?.addEventListener("click", () => {
    document.body.classList.toggle("dark"); localStorage.setItem(STORAGE.dark, document.body.classList.contains("dark") ? "true" : "false");
  });
  document.querySelector("#new-product-button")?.addEventListener("click", () => openProductForm());

  elements.cartDrawer?.addEventListener("click", (event) => {
    if (event.target.closest("#checkout-button")) { closeCart(); renderCheckout(); openDialog("#checkout-modal"); }
  });

  document.querySelector("#newsletter-form")?.addEventListener("submit", (event) => { event.preventDefault(); event.target.reset(); showToast("Ya eres parte de Aura Club"); });
  document.querySelector("#login-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    if (state.authMode === "register") {
      if (state.accounts.some((account) => account.email.toLowerCase() === data.email.toLowerCase())) {
        showToast("Este correo ya está registrado");
        return;
      }
      const account = { id: Date.now(), name: data.name, email: data.email, password: data.password, role: "Cliente", status: "Activo" };
      state.accounts.push(account);
      state.currentUser = { id: account.id, name: account.name, email: account.email, role: account.role };
      saveStorage(STORAGE.accounts, state.accounts);
      saveStorage(STORAGE.currentUser, state.currentUser);
      event.target.reset();
      closeDialogs();
      navigate("account");
      showToast("Cuenta creada correctamente");
      return;
    }
    const account = state.accounts.find((item) => item.email.toLowerCase() === data.email.toLowerCase() && item.password === data.password);
    if (!account || account.status !== "Activo") {
      showToast("Correo, contraseña o estado incorrecto");
      return;
    }
    state.currentUser = { id: account.id, name: account.name, email: account.email, role: account.role };
    saveStorage(STORAGE.currentUser, state.currentUser);
    event.target.reset();
    closeDialogs();
    navigate(account.role === "Administrador" ? "admin" : "account");
    showToast("Sesión iniciada correctamente");
  });
  document.querySelector("#recovery-form")?.addEventListener("submit", (event) => { event.preventDefault(); closeDialogs(); showToast("Revisa tu correo para continuar"); });
  document.querySelector("#checkout-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    const order = {
      id: `AURA-${Date.now().toString().slice(-6)}`,
      name: data.name,
      email: state.currentUser?.email || data.email,
      city: data.city,
      total: cartTotal(),
      items: state.cart.reduce((total, item) => total + item.quantity, 0),
      status: "Confirmado",
      date: new Intl.DateTimeFormat("es-CO", { dateStyle: "medium" }).format(new Date()),
    };
    state.orders.unshift(order);
    saveStorage(STORAGE.orders, state.orders);
    state.cart = [];
    saveStorage(STORAGE.cart, state.cart);
    updateCounts();
    closeDialogs();
    event.target.reset();
    renderAdmin();
    renderAccount();
    showToast(`Pedido ${order.id} confirmado`);
  });
  document.querySelector("#support-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!state.currentUser) {
      setAuthMode("login");
      openDialog("#account-modal");
      showToast("Inicia sesión para enviar la solicitud");
      return;
    }
    const data = Object.fromEntries(new FormData(event.target));
    const ticket = {
      id: `PQRS-${Date.now().toString().slice(-6)}`,
      user: state.currentUser.email,
      type: data.type,
      subject: data.subject,
      message: data.message,
      status: "Abierto",
      date: new Intl.DateTimeFormat("es-CO", { dateStyle: "medium" }).format(new Date()),
    };
    state.tickets.unshift(ticket);
    saveStorage(STORAGE.tickets, state.tickets);
    event.target.reset();
    renderAdmin();
    showToast(`Solicitud ${ticket.id} registrada`);
  });
  document.addEventListener("change", (event) => {
    if (event.target.matches("[data-user-role]")) {
      const account = state.accounts.find((item) => item.id === Number(event.target.dataset.userRole));
      if (account) account.role = event.target.value;
      saveStorage(STORAGE.accounts, state.accounts);
      showToast("Rol actualizado");
    }
    if (event.target.matches("[data-user-status]")) {
      const account = state.accounts.find((item) => item.id === Number(event.target.dataset.userStatus));
      if (account) account.status = event.target.value;
      saveStorage(STORAGE.accounts, state.accounts);
      showToast("Estado del usuario actualizado");
    }
    if (event.target.matches("[data-order-status]")) {
      const order = state.orders.find((item) => item.id === event.target.dataset.orderStatus);
      if (order) order.status = event.target.value;
      saveStorage(STORAGE.orders, state.orders);
      renderAccount();
      showToast("Estado del pedido actualizado");
    }
    if (event.target.matches("[data-ticket-status]")) {
      const ticket = state.tickets.find((item) => item.id === event.target.dataset.ticketStatus);
      if (ticket) ticket.status = event.target.value;
      saveStorage(STORAGE.tickets, state.tickets);
      showToast("Solicitud actualizada");
    }
  });
  document.querySelector("#product-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    const existingId = Number(data.id);
    const base = existingId ? state.products.find((item) => item.id === existingId) : null;
    const product = {
      ...(base || {}), id: existingId || Math.max(0, ...state.products.map((item) => item.id)) + 1,
      name: data.name, brand: data.brand, category: data.category, subcategory: base?.subcategory || data.category,
      price: Number(data.price), stock: Number(data.stock), image: data.image,
      rating: base?.rating || 5, reviews: base?.reviews || 0, description: base?.description || "Nuevo producto Aura Beauty.", details: base?.details || ["Producto original"],
    };
    if (base) state.products = state.products.map((item) => item.id === existingId ? product : item);
    else state.products.unshift(product);
    saveStorage(STORAGE.products, state.products); closeDialogs(); renderAdmin(); renderFeatured(); showToast("Producto guardado");
  });

  document.querySelectorAll("dialog").forEach((dialog) => dialog.addEventListener("click", (event) => {
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  }));
}

function init() {
  document.querySelector("#product-category").innerHTML = CATEGORIES.filter((category) => category !== "Todos").map((category) => `<option>${category}</option>`).join("");
  if (sessionStorage.getItem("aura_entered")) elements.splash.classList.add("is-hidden");
  if (localStorage.getItem(STORAGE.dark) === "true") document.body.classList.add("dark");
  renderCategories(); renderFeatured(); renderCatalog(); renderCart(); renderAdmin(); renderAccount(); updateCounts(); setupEvents();
  const hash = location.hash.replace("#", "");
  navigate(["catalog", "about", "admin", "account"].includes(hash) ? hash : "home");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}
