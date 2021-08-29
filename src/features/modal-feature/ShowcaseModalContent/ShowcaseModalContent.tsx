import React from 'react';
import classnames from 'classnames';
import HTMLReactParser from 'html-react-parser';

import { createGlobalLocalClassnames, stringToArray } from '@/scripts/utils';
import { Tag } from '@/components/Tag';
import { ShowcaseType } from '@/fragments/showcases';

import { ShowcaseLink } from './ShowcaseLink';

import type { ModalContentComponentProps } from '../ModalRoot';

import * as styles from './ShowcaseModalContent.module.scss';

export type ShowcaseModalContentType = {
  image?: ShowcaseType['image'];
  type?: ShowcaseType['type'];
  title?: ShowcaseType['title'];
  subtitle?: ShowcaseType['subtitle'];
  description?: ShowcaseType['description'];
  link?: ShowcaseType['link'];
  sourceCodeLink?: ShowcaseType['sourceCodeLink'];
  internalLink?: ShowcaseType['internalLink'];
  authors?: ShowcaseType['authors'] | ShowcaseType['authors'][];
  tags?: ShowcaseType['tags'] | ShowcaseType['tags'][];
};

export type ShowcaseModalContentProps =
  ModalContentComponentProps<ShowcaseModalContentType>;

export const ShowcaseModalContent: React.FC<ShowcaseModalContentProps> = (
  props,
) => {
  const { className, content, titleId, descriptionId } = props;

  const {
    title,
    subtitle,
    description,
    image,
    link,
    sourceCodeLink,
    internalLink,
    authors: authorsString,
    tags: tagsString,
  } = content ?? {};

  const authors = stringToArray(authorsString);
  const tags = stringToArray(tagsString);

  return (
    <div
      className={classnames(
        createGlobalLocalClassnames(styles, `ShowcaseModal`),
        className,
      )}
    >
      <div
        className="image-container"
        style={{ backgroundImage: image?.src ? `url(${image.src})` : `none` }}
      />
      <div className="content-container">
        <h1 id={titleId} className="title">
          {title}
        </h1>
        <h2 className="subtitle">{subtitle}</h2>
        <div className="authors-container">
          <span className="authors-label">Authors: </span>
          <div className="authors">
            {authors.map((author) => (
              <span key={`${title}-${author}`} className="author">
                {author}
              </span>
            ))}
          </div>
        </div>

        <p id={descriptionId} className="description">
          {HTMLReactParser(description ?? ``)}
        </p>
        <div className="tags">
          {tags.map((tag) => (
            <Tag key={`${title}-${tag}`}>{tag}</Tag>
          ))}
        </div>
      </div>
      <div className="links-container">
        {
          // Only render source code link if sourceCodeLink exists
          sourceCodeLink && (
            <ShowcaseLink
              className="link-source button button-secondary"
              to={sourceCodeLink}
              linkType="sourceCodeLink"
              text="open source"
            />
          )
        }
        {internalLink?.src && (
          <ShowcaseLink
            className="link-project button"
            to={internalLink.src}
            download={internalLink.label}
            linkType="internalLink"
            text="download"
          />
        )}
        <ShowcaseLink
          className="link-project button"
          to={link ?? ``}
          linkType="link"
          text="open"
        />
      </div>
    </div>
  );
};
