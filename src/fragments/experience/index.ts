import { graphql, useStaticQuery } from 'gatsby';

import { ExperienceFragmentQueryQuery } from '@/../graphql-types';

export const WorkExperienceFragment = graphql`
  fragment WorkExperienceFragment on Query {
    workExperience: allExperienceJson(
      sort: { fields: startDate, order: DESC }
      filter: { type: { eq: "work" } }
    ) {
      edges {
        node {
          id
          dataId
          type
          logo {
            id
            publicURL
          }
          title
          subtitle
          startDate
          endDate
          description
        }
      }
    }
  }
`;

export const EducationExperienceFragment = graphql`
  fragment EducationExperienceFragment on Query {
    educationExperience: allExperienceJson(
      sort: { fields: startDate, order: DESC }
      filter: { type: { eq: "education" } }
    ) {
      edges {
        node {
          id
          dataId
          type
          logo {
            id
            publicURL
          }
          title
          subtitle
          startDate
          endDate
          description
        }
      }
    }
  }
`;

export const ExperienceFragment = graphql`
  fragment ExperienceFragment on Query {
    ...WorkExperienceFragment
    ...EducationExperienceFragment
  }
`;

export const useExperienceFragmentStaticQueryRaw =
  (): ExperienceFragmentQueryQuery =>
    useStaticQuery(graphql`
      query ExperienceFragmentQuery {
        ...ExperienceFragment
      }
    `);

type WorkExperienceEdge =
  ExperienceFragmentQueryQuery['workExperience']['edges'][0];
type EducationExperienceEdge =
  ExperienceFragmentQueryQuery['educationExperience']['edges'][0];
type ExperienceEdge = WorkExperienceEdge | EducationExperienceEdge;

export type WorkExperienceType = WorkExperienceEdge['node'];
export type EducationExperienceType = EducationExperienceEdge['node'];
export type ExperienceType = WorkExperienceType | EducationExperienceType;

export const mapWorkExperienceEdge = (
  edge: WorkExperienceEdge,
): WorkExperienceType => edge.node;

export const mapEducationExperienceEdge = (
  edge: EducationExperienceEdge,
): EducationExperienceType => edge.node;

export const mapExperienceEdge = (edge: ExperienceEdge): ExperienceType =>
  edge.node;

export const useExperienceFragmentStaticQuery = (): {
  workExperience: WorkExperienceType[];
  educationExperience: EducationExperienceType[];
} => {
  const rawData = useExperienceFragmentStaticQueryRaw();
  return {
    workExperience: rawData.workExperience.edges.map(mapWorkExperienceEdge),
    educationExperience: rawData.educationExperience.edges.map(
      mapEducationExperienceEdge,
    ),
  };
};
