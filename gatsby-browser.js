/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
// Global styles
import './src/styles/global/main.scss';
import wrapWithProvider from './wrap-with-provider';

export const wrapRootElement = wrapWithProvider;
