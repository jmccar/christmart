require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: `ChristMart`,
    description: `ChristMart - Your Favourite Online Christmas Store`,
    author: `Tamas Piros`,
    company: `Full Stack Training Ltd`,
    companyWebsite: `https://fullstacktraining.com`
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`)
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: ['src/css/style.css', 'src/css/global.css']
      }
    },
    {
      resolve: `gatsby-plugin-snipcart`,
      options: {
        apiKey: process.env.SNIPCART,
        js: `https://cdn.snipcart.com/themes/v3.0.3/default/snipcart.js`,
        styles: `https://cdn.snipcart.com/themes/v3.0.3/default/snipcart.css`,
        autopop: true
      }
    }
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`
    //   }
    // },
    // {
    //   resolve: `gatsby-transformer-cloudinary`,
    //   options: {
    //     cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    //     apiKey: process.env.CLOUDINARY_API_KEY,
    //     apiSecret: process.env.CLOUDINARY_API_SECRET,
    //     uploadFolder: 'jamstack-training'
    //   }
    // }
  ]
}
