// necessary to make scss module work. See https://github.com/gatsbyjs/gatsby/issues/8144#issuecomment-438206866
declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

// necessary to make svg imports work.
declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;

  export default { ReactComponent };
}

declare module '*.jpg' {
  const content: string;
  export = content;
}
