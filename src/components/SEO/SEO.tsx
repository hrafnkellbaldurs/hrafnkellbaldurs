import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import * as R from 'ramda';
import { DefaultSeoQuery } from '@/../graphql-types';

type Meta = {
  name: string;
  content: string;
};

type Props = {
  description?: string;
  title: string;
  lang?: string;
  meta?: Meta[];
  keywords?: string[];
};

export const SEO = ({
  description,
  title,
  lang = `en`,
  meta = [],
  keywords = [],
}: Props): JSX.Element => {
  const data: DefaultSeoQuery = useStaticQuery(graphql`
    query DefaultSEO {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  const siteMetadata = data.site?.siteMetadata;

  const metaDescription = R.defaultTo(
    siteMetadata?.description ?? ``,
    description,
  );

  return (
    <Helmet
      htmlAttributes={{ lang }}
      defaultTitle="Hrafnkell Baldursson"
      title={title}
      titleTemplate={`%s | ${siteMetadata?.title}`}
    >
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="twitter:card" content="summary" />
      <meta
        property="twitter:creator"
        content={siteMetadata?.author ?? `Hrafnkell Baldursson`}
      />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={metaDescription} />
      <meta name="keywords" content={keywords.join(`, `)} />
      {meta.map((metaItem) => (
        <meta
          key={metaItem.name}
          name={metaItem.name}
          content={metaItem.content}
        />
      ))}
    </Helmet>
  );
};
