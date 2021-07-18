import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { LayoutQueryQuery } from '@/../graphql-types';
import { useAppSelector } from '@/store';

import { DefaultLayout } from './DefaultLayout';
import { selectCurrentNavItemId, selectNavItems } from './layoutSlice';

export const Layout: React.FC = ({ children }) => {
  const data: LayoutQueryQuery = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const currentNavItemId = useAppSelector(selectCurrentNavItemId);
  const navItems = useAppSelector(selectNavItems);

  return (
    <DefaultLayout
      siteTitle={data.site?.siteMetadata?.title}
      currentNavItemId={currentNavItemId}
      navItems={navItems}
    >
      {children}
    </DefaultLayout>
  );
};

export default Layout;
