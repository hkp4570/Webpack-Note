import NumberTimer from '../utils/number';
import appendNumber from './appendNumber'

const n = new NumberTimer(300);
n.onNumberCreated = function (n,isPrime) {
  appendNumber(n,isPrime);
}

let isStart = false;

window.addEventListener('click',function () {
  if (isStart) {
    n.stop();
    isStart = false;
  } else {
    n.start();
    isStart = true;
  }
})
