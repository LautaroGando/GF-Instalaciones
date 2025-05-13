/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.gfrecursosgraficos.com.ar/",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: "monthly",
  priority: 0.8,
  sitemapSize: 5000,
  exclude: [
    "/admin/*",
    "/dashboard/*",
    "/installer/*",
    "/coordinator/*",
    "/my-orders",
    "/my-orders/*",
    "/recovery-password",
    "/api/*",
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin/",
          "/dashboard/",
          "/installer/",
          "/coordinator/",
          "/my-orders",
          "/recovery-password",
          "/api/",
        ],
      },
    ],
  },
  additionalPaths: async () => [
    { loc: "/", changefreq: "monthly", priority: 1 },
    { loc: "/services", changefreq: "monthly", priority: 0.8 },
    { loc: "/auth", changefreq: "monthly", priority: 0.8 },
    { loc: "/privacy-and-policy", changefreq: "monthly", priority: 0.8 },
    { loc: "/terms-and-conditions", changefreq: "monthly", priority: 0.8 },
  ],
};
