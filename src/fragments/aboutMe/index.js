import { graphql } from 'gatsby'

export const AboutMeFragment = graphql`
    fragment AboutMeFragment on Query {
        aboutMe: allAboutMeJson(
            filter: {
                dataId: { eq: "aboutMe" }
            }
        ) {
            edges {
                node {
                    id,
                    dataId,
                    title,
                    description,
                    shortDescription,
                    urls {
                        gravatar,
                        portfolioPdf {
                            src: publicURL,
                            label: name
                        }
                    },
                    contactDetails {
                        label,
                        name,
                        address,
                        zip,
                        city,
                        country,
                        phone,
                        email
                    },
                    downloadResumeLabel,
                    contactLabel
                }
            }
        }
    }
`
