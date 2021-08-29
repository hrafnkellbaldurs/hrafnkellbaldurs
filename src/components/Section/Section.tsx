import React from 'react';
import classnames from 'classnames';

type Props = {
  id: string;
  className?: string;
  style?: React.CSSProperties;
};

export const Section: React.FC<Props> = ({
  id,
  className,
  children,
  ...rest
}) => (
  <section id={id} className={classnames(`Section`, className)} {...rest}>
    {children}
  </section>
);
