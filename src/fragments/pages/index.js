import { graphql } from 'gatsby'

export const IndexPageFragment = graphql`
    fragment IndexPageFragment on Query {
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
                        profilePic {
                            public: publicURL
                        },
                        portfolioPdf {
                            public: publicURL
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
        },

        workExperience: allExperienceJson(
            sort: {
                fields: startDate,
                   order: DESC
            },
            filter: {
              type: { eq: "work" }
            }
        ) {
            edges {
                node {
                    id,
                    dataId,
                    type,
                    logo {
                        id,
                        publicURL
                    },
                    title,
                    subtitle,
                    startDate,
                    endDate,
                    description
                }
            }
        },

        educationExperience: allExperienceJson(
            sort: {
                fields: startDate,
                   order: DESC
            },
            filter: {
              type: { eq: "education" }
            }
        ) {
            edges {
                node {
                    id,
                    dataId,
                    type,
                    logo {
                        id,
                        publicURL
                    },
                    title,
                    subtitle,
                    startDate,
                    endDate,
                    description
                }
            }
        },

        skills: allSkillsJson(sort:{ order: ASC, fields: rating }) {
            edges {
              node {
                id,
                name,
                shortName,
                type,
                description,
                yearsOfExperience,
                logo {
                  publicURL
                },
                rating
              }
            }
        },

        showcases: allPortfolioJson(sort: { order: ASC, fields: image }) {
            edges {
                node {
                    id,
                    title,
                    subtitle,
                    type,
                    image {
                        publicURL
                    },
                    coAuthors,
                    tags,
                    description,
                    link,
                    sourceCodeLink
                }
            }
        }


    }
`
