module.exports = {
    siteMetadata: {
        siteUrl: "https://www.yourdomain.tld",
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
                // Defaults used for gatsbyImageData and StaticImage
                defaults: {},
                // Set to false to allow builds to continue on image errors
                failOnError: true,
                // deprecated options and their defaults:
                base64Width: 20,
                forceBase64Format: `png`, // valid formats: png,jpg,webp
                useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
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
