import { graphql, useStaticQuery } from 'gatsby';

import { SimpleImage } from '@/types';
import { SkillsFragmentQueryQuery } from '@/../graphql-types';
import { getDateRangeDuration } from '@/scripts/utils';

export const SkillsFragment = graphql`
  fragment SkillsFragment on Query {
    skills: allSkillsJson(sort: { order: ASC, fields: rating }) {
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
          rating
          skillLevel
          link
        }
      }
    }
  }
`;

export const useSkillsFragmentStaticQueryRaw = (): SkillsFragmentQueryQuery =>
  useStaticQuery(graphql`
    query SkillsFragmentQuery {
      ...SkillsFragment
    }
  `);

type SkillsFragmentEdgeNode =
  SkillsFragmentQueryQuery['skills']['edges'][0]['node'];

export type SkillType = SkillsFragmentEdgeNode & {
  logo: SimpleImage;
  years: number;
};

export const useSkillsFragmentStaticQuery = (): SkillType[] => {
  const rawData = useSkillsFragmentStaticQueryRaw();
  return rawData.skills.edges.map<SkillType>(
    ({ node: skill }: { node: SkillsFragmentEdgeNode }) => ({
      ...skill,
      logo: {
        src: skill.logo?.publicURL,
        label: skill.name,
      },
      years: getDateRangeDuration(skill.startDate, skill.endDate, true).years,
    }),
  );
};
