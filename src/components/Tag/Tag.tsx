import React from 'react';
import classnames from 'classnames';
import * as R from 'ramda';

import { createGlobalLocalClassnames } from '@/scripts/utils';

import * as styles from './Tag.module.scss';

const sizeClassnames = {
  small: `size-small`,
  medium: `size-medium`,
};

export type TagProps = {
  size?: keyof typeof sizeClassnames;
};

export const Tag: React.FC<TagProps> = (props) => {
  const { children } = props;
  // eslint-disable-next-line react/destructuring-assignment
  const size = R.defaultTo(`medium`, props.size);

  const className = classnames(
    createGlobalLocalClassnames(styles, `Tag`),
    sizeClassnames[size],
  );

  return <span className={className}>{children}</span>;
};
