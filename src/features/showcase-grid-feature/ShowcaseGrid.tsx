import React from 'react';
import * as R from 'ramda';
import { createGlobalLocalClassnames } from '@/scripts/utils';

import classNames from 'classnames';
import { useAppDispatch } from '@/store';
import {
  ShowcaseType,
  useShowcasesFragmentStaticQuery,
} from '@/fragments/showcases';
import { MODAL_TYPES, showModal } from '@/features/modal-feature';

import { Showcase, ShowcaseProps } from './Showcase';
import * as styles from './ShowcaseGrid.module.scss';

const globalLocalClassnames = R.partial(createGlobalLocalClassnames, [styles]);

const useShowcases = (): ShowcaseType[] => useShowcasesFragmentStaticQuery();

export const ShowcaseGrid: React.FC = () => {
  const showcases = useShowcases();

  const dispatch = useAppDispatch();

  const onShowcaseClick: ShowcaseProps['onClick'] = (showcase) => {
    dispatch(showModal({ contentId: showcase.id, type: MODAL_TYPES.SHOWCASE }));
  };

  return (
    <div className={classNames(globalLocalClassnames(`ShowcaseGrid`))}>
      <div className={styles.showcases}>
        {showcases.map((showcase) => (
          <Showcase
            id={showcase.id}
            image={showcase.image}
            tags={showcase.tags}
            subtitle={showcase.subtitle}
            title={showcase.title}
            key={showcase.id}
            onClick={onShowcaseClick}
          />
        ))}
      </div>
    </div>
  );
};
