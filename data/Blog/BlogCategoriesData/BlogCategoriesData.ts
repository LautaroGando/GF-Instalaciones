import IBlogCategory from "@/interfaces/IBlogCategory";

export const BlogCategoriesData: IBlogCategory[] = [
  {
    id: "101",
    name: "Captación de clientes",
    description: "Estrategias y herramientas para atraer nuevos clientes a tu negocio.",
    blogPosts: Array.from({ length: 12 }, (_, index) => ({
      id: `${index + 1}`,
      title: `Estrategia ${index + 1} para captar clientes`,
      isHighlight: index % 3 === 0,
      description: `Aprende cómo implementar la estrategia ${index + 1} para atraer más clientes a tu negocio.`,
      blogCategory: {
        id: "101",
        name: "Captación de clientes",
        description: "Estrategias y herramientas para atraer nuevos clientes a tu negocio.",
        blogPosts: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        deletedAt: null,
      },
      blogPostTemplate: "TEMPLATE_A",
      status: index % 2 === 0 ? "PUBLICADO" : "BORRADOR",
      content: [
        {
          imageUrl: `/assets/images/blog/captacion-clientes-${index + 1}.jpg`,
          paragraph: [`Descubre cómo la estrategia ${index + 1} puede mejorar la captación de clientes.`],
          list: [`Paso 1 de estrategia ${index + 1}`, `Paso 2`, `Paso 3`],
        },
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      deletedAt: null,
    })),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: null,
  },
  {
    id: "102",
    name: "Estrategias de Marketing",
    description: "Explora tácticas y estrategias efectivas para mejorar el marketing de tu negocio.",
    blogPosts: Array.from({ length: 12 }, (_, index) => ({
      id: `${index + 13}`,
      title: `Técnica ${index + 1} de marketing avanzada`,
      isHighlight: index % 4 === 0,
      description: `Conoce la técnica ${index + 1} que te ayudará a mejorar el marketing de tu negocio.`,
      blogCategory: {
        id: "102",
        name: "Estrategias de Marketing",
        description: "Explora tácticas y estrategias efectivas para mejorar el marketing de tu negocio.",
        blogPosts: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        deletedAt: null,
      },
      blogPostTemplate: "TEMPLATE_B",
      status: index % 2 === 0 ? "PUBLICADO" : "BORRADOR",
      content: [
        {
          imageUrl: `/assets/images/blog/estrategia-marketing-${index + 1}.jpg`,
          paragraph: [`Implementa la técnica ${index + 1} y optimiza tu estrategia de marketing.`],
          list: [`Concepto clave de técnica ${index + 1}`, `Ejemplo`, `Mejores prácticas`],
        },
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      deletedAt: null,
    })),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: null,
  },
  {
    id: "103",
    name: "Optimización de Ventas",
    description: "Técnicas y herramientas para aumentar las conversiones y mejorar el proceso de ventas.",
    blogPosts: Array.from({ length: 12 }, (_, index) => ({
      id: `${index + 25}`,
      title: `Método ${index + 1} para mejorar ventas`,
      isHighlight: index % 5 === 0,
      description: `Descubre cómo aplicar el método ${index + 1} para incrementar tus ventas.`,
      blogCategory: {
        id: "103",
        name: "Optimización de Ventas",
        description: "Técnicas y herramientas para aumentar las conversiones y mejorar el proceso de ventas.",
        blogPosts: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        deletedAt: null,
      },
      blogPostTemplate: "TEMPLATE_C",
      status: index % 2 === 0 ? "PUBLICADO" : "BORRADOR",
      content: [
        {
          imageUrl: `/assets/images/blog/optimizar-ventas-${index + 1}.jpg`,
          paragraph: [`El método ${index + 1} es clave para aumentar las tasas de conversión en ventas.`],
          list: [`Estrategia 1`, `Estrategia 2`, `Casos de éxito`],
        },
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      deletedAt: null,
    })),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: null,
  },
];



export default BlogCategoriesData;
