import { graphql } from 'gatsby'

export const IndexPageFragment = graphql`
    fragment IndexPageFragment on Query {
        ...AboutMeFragment
        ...ExperienceFragment
        ...SkillsFragment
        ...ShowcasesFragment
    }
`
