import touches from './directive'
const vue2Touch = {
  install: function(Vue, options) {
    touches.config(options)
    Vue.directive('touch', touches)
  }
}
export default vue2Touch
