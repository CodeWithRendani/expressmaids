export interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  featured: boolean;
  readTime: string;
}

export const articles: Article[] = [
  {
    id: 1,
    slug: "welcome-to-expressmaids-news",
    title: "Welcome to ExpressMaids News",
    excerpt:
      "Stay informed with the latest cleaning, hygiene, property maintenance and business news from ExpressMaids across South Africa.",
    content: `
Welcome to ExpressMaids News.

Our news platform delivers trusted information about professional cleaning,
commercial hygiene, pest control, property maintenance and business
developments across South Africa.

Whether you are a homeowner, property manager or business owner,
ExpressMaids News keeps you informed with expert advice,
industry updates and company announcements.

Our editorial team is committed to publishing accurate,
original and practical articles that help South Africans
maintain healthier homes, workplaces and commercial properties.
`,
    image: "/images/news/featured.jpg",
    category: "Company News",
    author: "ExpressMaids Editorial Team",
    publishedAt: "14 July 2026",
    updatedAt: "14 July 2026",
    featured: true,
    readTime: "4 min read",
  },

  {
    id: 2,
    slug: "professional-cleaning-tips-for-winter",
    title: "Professional Cleaning Tips for Winter",
    excerpt:
      "Discover practical professional cleaning tips that help keep your home warm, hygienic and healthy throughout the winter season.",
    content: `
Winter usually increases indoor dust,
moisture and bacteria.

Regular vacuuming,
upholstery cleaning,
window cleaning and proper ventilation
help maintain a healthier living environment.

Professional deep cleaning also reduces allergens
and improves indoor air quality throughout winter.
`,
    image: "/images/news/winter.jpg",
    category: "Cleaning",
    author: "ExpressMaids Editorial Team",
    publishedAt: "10 July 2026",
    updatedAt: "10 July 2026",
    featured: false,
    readTime: "3 min read",
  },

  {
    id: 3,
    slug: "hygiene-standards-south-africa",
    title: "How Hygiene Standards Are Changing in South Africa",
    excerpt:
      "Businesses across South Africa continue investing in professional hygiene services to create healthier workplaces and customer environments.",
    content: `
The demand for professional hygiene
services continues growing across South Africa.

Businesses now focus on workplace sanitation,
washroom hygiene,
surface disinfection
and employee wellbeing.

Professional hygiene programmes help reduce illness,
increase productivity and improve customer confidence.
`,
    image: "/images/news/hygiene.jpg",
    category: "Hygiene",
    author: "ExpressMaids Editorial Team",
    publishedAt: "09 July 2026",
    updatedAt: "09 July 2026",
    featured: false,
    readTime: "5 min read",
  },

  {
    id: 4,
    slug: "property-maintenance-trends-2026",
    title: "Property Maintenance Trends in 2026",
    excerpt:
      "Modern commercial and residential properties are investing more in preventative maintenance to reduce long-term operating costs.",
    content: `
Property owners are shifting towards
preventative maintenance instead of waiting
for costly repairs.

Routine inspections,
professional cleaning,
pest control,
landscaping and maintenance planning
help protect long-term property value.

Preventative maintenance also improves
tenant satisfaction and reduces emergency repairs.
`,
    image: "/images/news/property.jpg",
    category: "Property",
    author: "ExpressMaids Editorial Team",
    publishedAt: "08 July 2026",
    updatedAt: "08 July 2026",
    featured: false,
    readTime: "4 min read",
  },
];