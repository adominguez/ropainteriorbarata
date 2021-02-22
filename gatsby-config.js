module.exports = {
  siteMetadata: {"bodyBackgroundColor":"#fff","primaryColor":"#424242","secondaryColor":"#616161","sidebarColor":"#eeeeee","textColor":"#616161","amazonWidthValue":"100","h1SizeValue":1,"h2SizeValue":1,"h3SizeValue":1,"headerSizeValue":1,"logoPositionValue":"50","sidebarWidthValue":"20","siteLogo":"https://firebasestorage.googleapis.com/v0/b/automatic-web-dashboard-back.appspot.com/o/JBEqCPjH5HQUBNcmUAjDr8wDW8L2%2Fthumb_480_kmdwd5yfmr.png?alt=media&token=013a69de-ecd3-4284-9799-ce5905b377bc","templateWidthValue":"80","textSizeValue":1,"useAmazonSearch":true,"useFooterWidth":false,"useHeaderWhite":false,"useLogo":true,"useMenu":false,"useMenuWidth":false,"useSidebar":false,"useTransparentContentBackground":false,"genrePrincipalKeyword":"f","singularPrincipalKeyword":"ropa interior","pluralPrincipalKeyword":"ropas interiores","siteDescription":"Sitio web sobre ropa interior","siteUrl":"https://ropainteriorbarata.es","siteFavicon":"https://firebasestorage.googleapis.com/v0/b/automatic-web-dashboard-back.appspot.com/o/JBEqCPjH5HQUBNcmUAjDr8wDW8L2%2Fe03jdqt8x1r.png?alt=media&token=9f3e28fc-4756-4de4-aa03-d18d969e99c6","siteLanguage":"es","siteName":"ropa interior barata"},
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        "name":"ropa interior barata","short_name":"ropa interior barata","start_url":"/","background_color":"#424242","theme_color":"#424242","display":"minimal-ui","icon":"src/images/favicon.png"
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'UA-8493758293', // leave empty if you want to disable the tracker
          cookieName: 'google-analytics', // default
          anonymize: true, // default
          allowAdFeatures: false // default
        },
        // googleTagManager: {
        //   trackingId: 'YOUR_GOOGLE_TAG_MANAGER_TRACKING_ID', // leave empty if you want to disable the tracker
        //   cookieName: 'gatsby-gdpr-google-tagmanager', // default
        //   dataLayerName: 'dataLayer', // default
        // },
        // facebookPixel: {
        //   pixelId: 'YOUR_FACEBOOK_PIXEL_ID', // leave empty if you want to disable the tracker
        //   cookieName: 'gatsby-gdpr-facebook-pixel', // default
        // },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development']
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: [`/cookies`, `/goto`]
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    'gatsby-plugin-offline'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
