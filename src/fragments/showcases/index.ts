import { graphql, useStaticQuery } from 'gatsby';

import { SimpleLink, SimpleImage } from '@/types';

import {
  ShowcasesFragmentQueryQuery,
  ShowcasesJson,
  Node,
} from '@/../graphql-types';

export type ShowcaseType = Omit<
  ShowcasesJson,
  keyof Node | 'image' | 'internalLink'
> & {
  id: ShowcasesJson['id'];
  image?: SimpleImage | null;
  internalLink: SimpleLink | null;
};

export const ShowcasesFragment = graphql`
  fragment ShowcasesFragment on Query {
    showcases: allShowcasesJson(sort: { order: ASC, fields: image___name }) {
      edges {
        node {
          id
          title
          subtitle
          type
          image {
            publicURL
          }
          authors
          tags
          description
          link
          sourceCodeLink
          internalLink {
            publicURL
            name
          }
        }
      }
    }
  }
`;

export const useShowcasesFragmentStaticQueryRaw =
  (): ShowcasesFragmentQueryQuery =>
    useStaticQuery(graphql`
      query ShowcasesFragmentQuery {
        ...ShowcasesFragment
      }
    `);

export const useShowcasesFragmentStaticQuery = (): ShowcaseType[] => {
  const rawData = useShowcasesFragmentStaticQueryRaw();

  return rawData.showcases.edges.map<ShowcaseType>(({ node: showcase }) => ({
    id: showcase.id,
    title: showcase.title,
    image: { src: showcase.image?.publicURL, label: showcase.title },
    subtitle: showcase.subtitle,
    tags: showcase.tags,
    authors: showcase.authors,
    description: showcase.description,
    internalLink: {
      src: showcase.internalLink?.publicURL,
      label: showcase.internalLink?.name,
    },
    link: showcase.link,
    sourceCodeLink: showcase.sourceCodeLink,
    type: showcase.type,
  }));
};
