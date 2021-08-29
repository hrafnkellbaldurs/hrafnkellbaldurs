/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import classnames from 'classnames';
import * as R from 'ramda';

import { createGlobalLocalClassnames, stringToArray } from '@/scripts/utils';
import { Tag } from '@/components/Tag';
import { ShowcaseType } from '@/fragments/showcases';

import * as styles from './Showcase.module.scss';

const globalLocalClassnames = R.partial(createGlobalLocalClassnames, [styles]);
const isNilOrEmpty = R.either(R.isNil, R.isEmpty);

export type ShowcaseProps = {
  id: string;
  image?: ShowcaseType['image'] | null;
  title?: ShowcaseType['title'] | null;
  subtitle?: ShowcaseType['subtitle'] | null;
  tags?: ShowcaseType['tags'] | ShowcaseType['tags'][];
  onClick?: (
    props: ShowcaseProps,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => void;
};
export const Showcase: React.FC<ShowcaseProps> = (props) => {
  const { id, image, title, subtitle, tags } = props;
  const handleOnClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    props.onClick?.(props, e);
  };

  const tagArray = stringToArray(tags);

  return (
    <div
      tabIndex={0}
      role="button"
      className={classnames(globalLocalClassnames(`ShowcaseItem`), {
        noImage: isNilOrEmpty(image?.src),
      })}
      onClick={handleOnClick}
    >
      <div
        className="imageContainer"
        style={{
          backgroundImage: isNilOrEmpty(image?.src)
            ? `none`
            : `url(${image?.src})`,
        }}
      />
      <div className="infoContainer">
        <h5 className="title">{title}</h5>
        <h6 className="subtitle">{subtitle}</h6>
        <div className="tags">
          {tagArray.map((tag) => (
            <Tag key={`${id}-${tag}`} size="small">
              {tag}
            </Tag>
          ))}
        </div>
      </div>
    </div>
  );
};
