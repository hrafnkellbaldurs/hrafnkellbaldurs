import React from 'react';

import styles from './StorybookTest.module.scss';

export type StorybookTestProps = {
  text: string;
  background?: string;
};

export const StorybookTest: React.FC<StorybookTestProps> = ({
  text,
  background,
}) => (
  <div className={styles.root} style={{ background: background ?? `yellow` }}>
    {text}
  </div>
);
