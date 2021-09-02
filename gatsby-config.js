module.exports = {
    pathPrefix: "/oteau.ca",
    siteMetadata: {
        title: "OTeaU",
        description: "The Official Ontario Tech University Tea Club Website."
    },
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `oteau`,
                short_name: `oteau`,
                start_url: `/`,
                background_color: `#282828`,
                theme_color: `#ffffff`,
                display: `standalone`,
                icon: `src/assets/icon.png`,
                icon_options: {
                    // For all the options available,
                    // please see the section "Additional Resources" below.
                    purpose: `any maskable`,
                },
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
        `gatsby-plugin-smoothscroll`,
        `gatsby-plugin-offline`
    ],
};
