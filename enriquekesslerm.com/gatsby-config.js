module.exports = {
  // pathPrefix: `/gatsby-starter-blorg`,
  siteMetadata: {
    siteURL: 'https://enriquekesslerm.com',
    title: `Enrique Kessler Martínez`,
    description: `Enrique Kessler Martínez's personal web and blog.`,
    author: 'Enrique Kessler Martínez',
    twitter: 'quique_kessler', // replace it, or set to 'false' to disable "Tweet this" button
    social: [ // again, replace thse with your own value, or set to empty array to disable them
      { name: 'twitter', url: 'https://twitter.com/quique_kessler' },
      { name: 'website', url: 'https://enriquekesslerm.com' },
      { name: 'github', url: 'https://github.com/Qkessler' },
    ]
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-optimize-svgs`,
    {
      resolve: `gatsby-theme-blorg`,
      options: {
        // contentPath: 'content',
        // filter: () => true,
        // pagination: 5,
        columns: 1,
        indexPath: '/blog',
        // imageMaxWidth: 1380,
        // categoryIndexPath: category => `/${category}`,
        // tagIndexPath: tag => `/:${tag}:`,
        // slug: ({ export_file_name }) => `/${export_file_name}`,
        // postRedirect: () => [],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        fields: [`title`, `tags`, `category`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          OrgPost: {
            title: node => node.title,
            tags: node => node.tags,
            excerpt: node => node.summary,
            slug: node => node.slug,
            // date: node => node.date,
            category: node => node.category,
          },
        },
      },
    },
  ],
}
