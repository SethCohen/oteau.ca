module.exports = {
    pathPrefix: "/oteau.ca",
    siteMetadata: {
        title: "OTeaU",
    },
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `oteau`,
                short_name: `oteau`,
                start_url: `/`,
                display: `standalone`,
                icon: `src/assets/icon.png`,
            },
        },
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {},
                failOnError: true,
                base64Width: 20,
                forceBase64Format: `png`, // valid formats: png,jpg,webp
                stripMetadata: true,
                defaultQuality: 100,
            },
        },
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`
            }
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /assets/
                }
            }
        },
        `gatsby-plugin-smoothscroll`
    ],
};
