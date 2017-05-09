import touches from './directive'
const vue2Touch = {
  install (Vue, options) {
    Vue.directive('touch', touches)
  }
}
export default vue2Touch
