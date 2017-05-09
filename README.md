# vue2-touch for Vue.js 2.x

> This is a directive wrapper for Hammer.js 2.0, ~~small size(just 22.7k).

## Install

``` bash
# install dependencies
npm install vue2-touch hammerjs --save
```

## Usage

### ES6

``` javascript
import Vue2Touch from 'vue2-touch'
Vue.use(Vue2Touch)
```

### Using the v-touch directive

``` html
<a v-touch:tap="callback">Tap me!</a>
<div v-touch:swipe="callback">Swipe me!</div>
```


### callback
Callback is a name of function with two args(can use any name, but type must be a funciton);the first argument can return a touch type(swipeleft,tap ...), and the second argument can return a callback event.

## More Details
See [Hammer.js document](http://hammerjs.github.io/)

## License
[MIT](https://opensource.org/licenses/MIT)
