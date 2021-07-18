import '@/styles/pages/index/main.scss';
import React from 'react';
import { graphql } from 'gatsby';
import FitText from 'react-fittext';
import HTMLReactParser from 'html-react-parser';

// Import IndexPageFragment definition
import { IndexPageQuery } from '@/../graphql-types';

import { Link } from '@/components/Link';
import { SEO } from '@/components/SEO';
import { Layout, navItemSelected } from '@/features/layout-feature';
import { Hero } from '@/features/hero-feature';
import { ShowcaseGrid } from '@/features/showcase-grid-feature';
import { SECTION_ID, SECTION_IDS } from '@/constants';

// import heroBackgroundUrl from '@/assets/images/hero-background.jpg';
import { withWaypoint, WithWayPointOnEnterCallback } from '@/hocs/withWaypoint';
import { Section } from '@/components/Section';

import { ReactComponent as ContactIcon } from '@/assets/icons/paper-plane.svg';
import { ReactComponent as DownloadIcon } from '@/assets/icons/download.svg';
import {
  EducationExperienceType,
  ExperienceType,
  mapEducationExperienceEdge,
  mapWorkExperienceEdge,
  WorkExperienceType,
} from '@/fragments/experience';
import { Experience } from '@/components/Experience';
import { SkillGrid } from '@/features/skill-grid-feature';

type NavItemSelectedPayload = ReturnType<typeof navItemSelected>['payload'];

/**
 * Called when the screen enters the section waypoint.
 * Updates the selected nav item based on what waypoint is currently in view.
 * @param waypoint The current waypoint that the user has entered into
 * @param meta Meta data for the waypoint
 */
const onSectionWaypointEnter: WithWayPointOnEnterCallback<
  NavItemSelectedPayload,
  SECTION_ID
> = (waypoint, meta) => navItemSelected({ navItemId: meta.id });

/**
 * Creates a waypoint component for a section in the index page
 * @template P Props for Component
 */
function withSectionWaypoint<P = unknown>(Component: React.ComponentType<P>) {
  return withWaypoint<NavItemSelectedPayload, SECTION_ID, P>(
    Component,
    onSectionWaypointEnter,
  );
}

const WaypointHero = withSectionWaypoint(Hero);
type PageHeroProps = {
  sectionId: SECTION_ID;
  title: string;
  subtitle: string;
};
const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, sectionId }) => (
  <WaypointHero id={sectionId} className="page-hero">
    <div className="banner-text">
      <FitText minFontSize={30} maxFontSize={80}>
        <h1>{title}</h1>
      </FitText>
      <FitText minFontSize={14} maxFontSize={18} compressor={3}>
        <h3>{subtitle}</h3>
      </FitText>
    </div>
  </WaypointHero>
);

const WaypointSection = withSectionWaypoint(Section);

type AboutSectionProps = {
  sectionId: SECTION_ID;
  title: string;
  description: string;
  urls?: {
    gravatar?: string | null;
    portfolioPdf?: {
      src?: string | null;
      label?: string | null;
    } | null;
  } | null;
  contactDetails?: {
    label?: string | null;
    name?: string | null;
    zip?: string | null;
    city?: string | null;
    country?: string | null;
    email?: string | null;
  } | null;
  downloadResumeLabel: string;
  contactLabel: string;
};
const AboutSection: React.FC<AboutSectionProps> = (props) => {
  const {
    sectionId,
    urls,
    title,
    description,
    contactDetails,
    downloadResumeLabel,
    contactLabel,
  } = props;

  return (
    <WaypointSection id={sectionId}>
      <div className="row section-content-container">
        <div className="profile-pic-container three columns flex flex--center">
          <img
            className="profile-pic"
            src={`${urls?.gravatar}?size=250`}
            alt="profile"
          />
        </div>

        <div className="nine columns main-col">
          <h1 className="accent-underline">{title}</h1>

          <div>{HTMLReactParser(description)}</div>

          <div className="row">
            <div className="columns contact-details">
              <h2>{contactDetails?.label}</h2>
              <p className="address">
                <span>{contactDetails?.name}</span>
                <br />
                <span>
                  {contactDetails?.zip} {contactDetails?.city},{` `}
                  {contactDetails?.country}
                </span>
                <br />
                <Link
                  style={{ color: `inherit` }}
                  to={`mailto:${contactDetails?.email}`}
                  target="_top"
                >
                  {contactDetails?.email}
                </Link>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="columns action-links">
              <Link
                to={`mailto:${contactDetails?.email}`}
                className="button button-secondary icon-right"
              >
                <span className="text">{contactLabel}</span>
                <ContactIcon />
              </Link>
              <Link
                to={urls?.portfolioPdf?.src ?? `#`}
                className="button icon-right"
                target="_blank"
                download={urls?.portfolioPdf?.label}
              >
                <span className="text">{downloadResumeLabel}</span>
                <DownloadIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </WaypointSection>
  );
};

type PortfolioSectionProps = {
  sectionId: SECTION_ID;
};

const PortfolioSection: React.FC<PortfolioSectionProps> = (props) => {
  const { sectionId } = props;

  return (
    <WaypointSection id={sectionId}>
      <div className="row">
        <div className="twelve columns section-content-container">
          <h1 className="accent-underline">Portfolio</h1>
          <ShowcaseGrid />
        </div>
      </div>
    </WaypointSection>
  );
};

type ResumeSectionProps = {
  sectionId: SECTION_ID;
  workExperiences: WorkExperienceType[];
  educationExperiences: EducationExperienceType[];
};

const ResumeSection: React.FC<ResumeSectionProps> = (props) => {
  const { sectionId, workExperiences, educationExperiences } = props;

  const renderExperience = (
    experience: ExperienceType,
  ): ReturnType<typeof Experience> => {
    const Icon = () => (
      <img
        alt={`${experience.title} logo`}
        src={experience.logo?.publicURL ?? ``}
      />
    );

    return (
      <Experience
        key={experience.id}
        id={experience.id}
        title={experience.title ?? ``}
        subtitle={experience.subtitle ?? ``}
        description={experience.description ?? ``}
        icon={Icon}
        startDate={experience.startDate}
        endDate={experience.endDate}
      />
    );
  };

  return (
    <WaypointSection id={sectionId}>
      <div className="section-content-container">
        <div className="row section-item">
          <div className="three columns header-col">
            <h1 className="accent-underline">Experience</h1>
          </div>

          <div className="nine columns main-col">
            {workExperiences.map(renderExperience)}
          </div>
        </div>

        <div className="row section-item">
          <div className="three columns header-col">
            <h1 className="accent-underline">Education</h1>
          </div>

          <div className="nine columns main-col">
            {educationExperiences.map(renderExperience)}
          </div>
        </div>

        <div className="row section-item">
          <div className="three columns header-col">
            <h1 className="accent-underline">Skills</h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="one columns" />
              <div className="eleven columns">
                <p />
              </div>
              <SkillGrid />
            </div>
          </div>
        </div>
      </div>
    </WaypointSection>
  );
};

type IndexPageProps = {
  data: IndexPageQuery;
};

const IndexPage = ({ data }: IndexPageProps): JSX.Element => {
  const aboutMe = data.aboutMe.edges[0].node;
  const workExperience = data.workExperience.edges.map(mapWorkExperienceEdge);
  const educationExperience = data.educationExperience.edges.map(
    mapEducationExperienceEdge,
  );

  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `application`, `react`, `portfolio`]}
      />
      <PageHero
        sectionId={SECTION_IDS.HOME}
        title={aboutMe.contactDetails?.name ?? ``}
        subtitle={aboutMe?.shortDescription ?? ``}
      />
      <AboutSection
        sectionId={SECTION_IDS.ABOUT}
        title={aboutMe?.title ?? ``}
        description={aboutMe?.description ?? ``}
        urls={aboutMe.urls}
        contactDetails={aboutMe?.contactDetails}
        downloadResumeLabel={aboutMe?.downloadResumeLabel ?? ``}
        contactLabel={aboutMe?.contactLabel ?? ``}
      />
      <PortfolioSection sectionId={SECTION_IDS.PORTFOLIO} />
      <ResumeSection
        sectionId={SECTION_IDS.RESUME}
        workExperiences={workExperience}
        educationExperiences={educationExperience}
      />
    </Layout>
  );
};

// Fragment is located in src/fragments/pages/index.js
export const query = graphql`
  query IndexPage {
    ...IndexPageFragment
  }
`;

export default IndexPage;
