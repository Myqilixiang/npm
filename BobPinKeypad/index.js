import BobPinKeypad from './BobPinKeypad.vue'

const PinKeypad = {
    install: function(Vue) {
        Vue.component('bob-pinKeypad', BobPinKeypad)
    }
};

export default PinKeypad;