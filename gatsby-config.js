module.exports = {
	siteMetadata: {
		title: '网站任意门'
	},
	plugins: [
		'gatsby-plugin-layout',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
			  name: `网站任意门`,
			  short_name: `网站任意门`,
			  description: `开启一次未知之旅，这里总有一个属于你的宝站！`,
			  start_url: `/`,
			  background_color: `#fff`,
			  theme_color: `#ea997c`,
			  display: `standalone`,
			  icons: [
				{
				  src: `/android-chrome-192x192.png`,
				  sizes: `192x192`,
				  type: `image/png`,
				},
				{
				  src: `/android-chrome-512x512.png`,
				  sizes: `512x512`,
				  type: `image/png`,
				},
			  ],
			  legacy: false, // this will not add apple-touch-icon links to <head>
			  crossOrigin: `use-credentials`, // `use-credentials` or `anonymous`
	  
			},
		  },
		{
			resolve: "gatsby-plugin-google-tagmanager",
			options: {
			  id: "GTM-NFCB2V4",
		
			  // Include GTM in development.
			  //
			  // Defaults to false meaning GTM will only be loaded in production.
			  includeInDevelopment: false,

			},
		  },
		{
			resolve: `gatsby-plugin-canonical-urls`,
			options: {
			  siteUrl: `https://gate.ofo.moe`,
			  stripQueryString: true,
			},
		  },
		{
			resolve: 'gatsby-plugin-nprogress',
			options: {
				color: '#f09a7a',
				showSpinner: false
			}
		},
		'gatsby-transformer-json',
		'gatsby-transformer-remark',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `${__dirname}/src/data/`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/src/pages/`
			}
		},
		`gatsby-plugin-offline`,
		'gatsby-plugin-netlify-cms',
		'gatsby-plugin-netlify'
	]
};
