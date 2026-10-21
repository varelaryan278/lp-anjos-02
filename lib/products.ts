export type Product = {
  slug: string
  line: string
  category: string
  size: string
  image: string
  alt: string
  installment?: string
  discount?: number
}

export const products: Product[] = [
  {
    slug: "differenza",
    line: "Differenza",
    category: "Conjunto Box Convencional",
    size: "138 × 188 cm — Casal",
    image: "/produtos/differenza.webp",
    alt: "Conjunto Box Differenza Casal com base cinza em quarto com parede de pedra",
    installment: "R$ 233,00",
  },
  {
    slug: "benvenutti",
    line: "Benvenutti",
    category: "Conjunto Box Convencional",
    size: "138 × 188 cm — Casal",
    image: "/produtos/benvenutti.webp",
    alt: "Conjunto Box Benvenutti Casal em quarto com parede de tijolinho e cabeceira estofada",
    installment: "R$ 296,00",
  },
  {
    slug: "admirable",
    line: "Admirable",
    category: "Conjunto Box Convencional",
    size: "138 × 188 cm — Casal",
    image: "/produtos/admirable.webp",
    alt: "Conjunto Box Admirable Casal com base bege e pillow top em quarto claro",
    installment: "R$ 316,00",
  },
  {
    slug: "genialle",
    line: "Genialle",
    category: "Conjunto Box Convencional",
    size: "138 × 188 cm — Casal",
    image: "/produtos/genialle.webp",
    alt: "Conjunto Box Genialle Casal em quarto claro com cabeceira curva estofada",
    installment: "R$ 366,00",
  },
  {
    slug: "castel",
    line: "Castel",
    category: "Conjunto Box Convencional",
    size: "138 × 188 cm — Casal",
    image: "/produtos/castel.webp",
    alt: "Conjunto Box Castel Casal em quarto com parede de mármore e cabeceira iluminada",
    installment: "R$ 383,00",
  },
  {
    slug: "suavitta",
    line: "Suavitta",
    category: "Conjunto Box Convencional",
    size: "158 × 198 cm — Queen",
    image: "/produtos/suavitta.webp",
    alt: "Conjunto Box Suavitta Queen branco com pillow top em quarto sofisticado",
    discount: 30,
  },
  {
    slug: "vero-sogno",
    line: "Vero Sogno",
    category: "Conjunto Box Convencional",
    size: "158 × 198 cm — Queen",
    image: "/produtos/vero-sogno.webp",
    alt: "Conjunto Box Vero Sogno Queen bege com pillow top euro",
    discount: 30,
  },
]
