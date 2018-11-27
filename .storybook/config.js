import { configure, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { withBackgrounds } from '@storybook/addon-backgrounds'
import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import colors from '../src/styles/utils/_colors.scss'
import * as R from 'ramda'
require('../src/styles/storybook/index.scss')

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}

// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ""

// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}

// Global decorators
  // Knobs
addDecorator(withKnobs)

  // Backgrounds
const websiteColors = R.pipe(
  R.toPairs,
  R.map(([name, value]) => ({ name, value }))
)(colors)

addDecorator(withBackgrounds(
  [
    { name: 'default', value: '#fff', default: true },
    { name: 'twitter', value: '#00aced' },
    { name: 'facebook', value: '#3b5998'},
  ]
  .concat(websiteColors)
))

 // Viewport
const newViewports = {
  
}
configureViewport({ 
  viewports: {
    ...INITIAL_VIEWPORTS,
    ...newViewports
  } 
})  

// Automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)

