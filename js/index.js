
import throttle from 'lodash.throttle';


const bodyEl = document.querySelector('body')
console.log()


bodyEl.addEventListener('click', throttle(function sayMamba(event) {
    console.log('mamba')
}, 500));