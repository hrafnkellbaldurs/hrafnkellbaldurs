import React from 'react';

import { StorybookTest } from '@/features/skill-grid-feature/StorybookTest';

import styles from './StorybookImportTest.module.scss';

export type StorybookImportTestProps = {
  text: string;
  background?: string;
};

export const StorybookImportTest: React.FC<StorybookImportTestProps> = ({
  text,
  background,
}) => (
  <div className={styles.root} style={{ background: background ?? `blue` }}>
    {text}
    <StorybookTest text={`imported ${text}`} />
  </div>
);
