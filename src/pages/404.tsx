import '@/styles/pages/404/main.scss';
import React, { useState, useEffect } from 'react';

import { SEO } from '@/components/SEO';
import { Link } from '@/components/Link';
import { Section } from '@/components/Section';
import { Layout } from '@/features/layout-feature';
import { ReactComponent as HomeIcon } from '@/assets/icons/home-1.svg';
import { ReactComponent as ErrorIcon } from '@/assets/icons/error.svg';

// markup
const NotFoundPage: React.FC = () => {
  const [height, setHeight] = useState(300);

  useEffect(() => {
    const headerHeight = document.querySelector(`header`)?.clientHeight ?? 0;
    const footerHeight = document.querySelector(`footer`)?.clientHeight ?? 0;
    const newHeight = window.innerHeight - headerHeight - footerHeight;
    setHeight(newHeight);
  }, []);

  return (
    <Layout>
      <SEO title="404: Not found" />
      <Section id="content404" style={{ height: `${height}px` }}>
        <div className="row container">
          <div className="message-container accent-underline">
            <div className="left-column">
              <h1>Not found</h1>
              <span>Sorry, this page does not exist</span>
            </div>
            <div className="right-column">
              <ErrorIcon />
            </div>
          </div>
          <Link className="button icon-right go-home" to="/#home">
            Back to home
            <HomeIcon />
          </Link>
        </div>
      </Section>
    </Layout>
  );
};

export default NotFoundPage;
