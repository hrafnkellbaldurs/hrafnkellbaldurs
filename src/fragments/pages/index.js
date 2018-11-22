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
                    downloadResumeLabel
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
                    startDate(formatString: "MMMM YYYY"),
                    endDate(formatString: "MMMM YYYY"),
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
                    startDate(formatString: "MMMM YYYY"),
                    endDate(formatString: "MMMM YYYY"),
                    description
                }
            }
        },

        skills: allSkillsJson(sort:{ order: ASC, fields: order}) {
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
                order
              }
            }
          }
    }   
`
