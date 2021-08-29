import React from 'react';

import * as styles from './Header.module.scss';

type Props = {
  id: string;
};

export const Header: React.FC<Props> = ({ children, id }) => (
  <header id={id} className={styles.Header}>
    {children}
  </header>
);
