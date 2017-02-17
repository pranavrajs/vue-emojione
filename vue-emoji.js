/* eslint-disable no-param-reassign */

import emojione from 'emojione';

const sprites = require('emojione/assets/sprites/emojione.sprites.svg');

const vueEmojiRender = {};

vueEmojiRender.install = (Vue, options = {
  imageType: 'svg',
  sprites: true,
}) => {
  Object.assign(emojione, options);

  if (emojione.sprites && emojione.imageType === 'svg') {
    emojione.imagePathSVGSprites = sprites;
  }

  const emoji = (value, method = 'shortnameToImage') => emojione[method](value);

  Vue.directive('emoji-render', {
    inserted(el, binding) {
      // Focus the element
      el.innerHTML = emoji(binding.value);
    },
  });
};

module.exports = vueEmojiRender;
