import touches from './directive'
const vue2Touch = {
  install (Vue, options) {
    Vue.directive('touch', touches)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vue2Touch.install)
}
export default vue2Touch
