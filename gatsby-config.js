module.exports = {
  siteMetadata: {
    title: 'Site-Title',
    author: 'My Name',
    email: 'info@example.com',
    description: 'My site description...',
    siteUrl: 'https://www.example.com',
    useLogo: false,
    social: [
      {
        name: 'twitter',
        url: 'https://twitter.com/gatsbyjs',
      },
      {
        name: 'github',
        url: 'https://github.com/gatsbyjs',
      },
    ],
    menuLinks: [
      {
        name: 'home',
        link: '/',
        published: true,
      },
      {
        name: 'about',
        link: '/about',
        published: true,
        subMenu: [
          {
            name: `Sub 1`,
            link: `/sub-1`,
            published: true,
          },
          {
            name: `Sub 2`,
            link: `/sub-2`,
            published: true,
          },
        ],
      },
      {
        name: 'me',
        link: '/me',
        published: true,
      },
      {
        name: 'blog',
        link: '/blog',
        published: false,
      },
      {
        name: 'contact',
        link: '/contact',
        published: true,
      },
    ],
    footerLinks: [
      {
        name: 'impressum',
        link: '/impressum',
        published: true,
      },
      {
        name: 'contact',
        link: '/contact',
        published: true,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Marvel`,
          `400,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.example.com',
        sitemap: 'https://www.example.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 700,
              backgroundColor: 'transparent',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `news`,
        path: `${__dirname}/content/news`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-draft',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/blog'],
      },
    },
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-smoothscroll',
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        stages: ['develop'],
        extensions: ['js', 'jsx'],
        exclude: ['node_modules', '.cache', 'public', 'content'],
      }
    }
  ],
};
