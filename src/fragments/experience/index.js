import { graphql } from 'gatsby'

export const WorkExperienceFragment = graphql`
    fragment WorkExperienceFragment on Query {
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
        }
    }
`

export const EducationExperienceFragment = graphql`
    fragment EducationExperienceFragment on Query {
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
        }
    }
`

export const ExperienceFragment = graphql`
    fragment ExperienceFragment on Query {
        ...WorkExperienceFragment
        ...EducationExperienceFragment
    }
`
