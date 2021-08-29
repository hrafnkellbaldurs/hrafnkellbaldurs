declare module 'react-fittext' {
  type FitTextProps = React.PropsWithChildren<{
    className?: string;
    /**
     * The mininum font size (in px) this component should use
     */
    minFontSize?: number;
    /**
     * The maximum font size (in px) this component should use
     */
    maxFontSize?: number;
    /**
     * You can tweak this parameter to increase / decrease the font-size. Default is 1
     */
    compressor?: number;
  }>;

  export default function FitText(
    props: FitTextProps,
    context?: any,
  ): React.ReactElement<any, any> | null;
}
