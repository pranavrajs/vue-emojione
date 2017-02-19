# vue-emojione

![Dependancies](https://david-dm.org/pranavrajs/vue-emojione.svg)
> EmojiOne Directive for Vue


## Install

> This plugin is compatible with Vue 2.0.


- Available through npm as `vue-emojione`.
  ```
  npm install -S vue-emojione
  ```

  ``` js
  import VueEmoji from 'vue-emojione';
  Vue.use(VueEmoji, {
    imageType: 'svg',
    sprites: true
  });
  ```


## Usage

#### Using the `v-emoji-render` directive

``` html
<div v-emoji-render:data="data"></div>
```

## License

[MIT](http://opensource.org/licenses/MIT)
