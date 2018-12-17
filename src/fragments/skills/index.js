import { graphql } from 'gatsby'

export const SkillsFragment = graphql`
    fragment SkillsFragment on Query {
        skills: allSkillsJson(sort:{ order: ASC, fields: rating }) {
            edges {
              node {
                id
                name
                shortName
                type
                description
                startDate
                endDate
                logo {
                  publicURL
                }
                rating,
                skillLevel,
                link
              }
            }
        }
    }
`
