import Hammer from 'hammerjs'
const gestures = ['tap', 'pan', 'pinch', 'press', 'rotate', 'swipe']
const directions = {
  tap: ['tap'],
  swipe: ['swipeleft', 'swiperight', 'swipeup', 'swipedown'],
  pan: ['panstart', 'panmove', 'panend', 'pancancel', 'panleft', 'panright', 'panup', 'pandown'],
  pinch: ['pinchstart', 'pinchmove', 'pinchend', 'pinchcancel', 'pinchin', 'pinchout'],
  press: ['press', 'pressup'],
  rotate: ['rotatestart', 'rotatemove', 'rotateend', 'rotatecancel']
}

function capitalize (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
let evt = null
let handler = null
let evtType = ''

const touchs = {
  bind (el, binding) {
    console.log('touchs bind')
    if (!evt) {
      evt = new Hammer.Manager(el)
    }
    var type = evtType = binding.arg.toLowerCase()
    console.log(type)
    if (gestures.findIndex(i => i === type) < 0) {
      console.warn('[vue2-touch] event type value is invalid')
      return
    }
    console.log(typeof binding.value)
    if (typeof binding.value !== 'function') {
      handler = null
      console.warn('[vue2-touch] invalid args value for v-touch, please check it')
      return
    }
    evt.add(new Hammer[capitalize(type)]())
    // bind function
    var evtsArray = directions[evtType]
    if (handler) {
      evtsArray.map(et => {
        evt.off(et, (e) => {
          handler(et, e)
        })
      })
    }
    if (typeof binding.value === 'function') {
      handler = binding.value
      evtsArray.map(et => {
        evt.on(et, (e) => {
          handler(et, e)
        })
      })
    }
  },
  update (el, binding) {
  },
  unbind () {
    evt.destroy()
    evt = null
  }
}
export default touchs
