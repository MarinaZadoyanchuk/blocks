import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-about/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  picture: {
    resourceRef: 'article_img.png',
    alt: 'Picture about the company',
  },

}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  button: {defaultValue: false},
  'top-icon': {defaultValue: false},
}

export default ExtendedWireframe
