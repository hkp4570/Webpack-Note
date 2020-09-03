import radColor from '../utils/radColor';
import {getRandom} from '../utils/radColor';

const divContainer = document.getElementById('divContainer');
const divCenter = document.getElementById('divCenter');

export default function (n, isPrime) {
  const span = document.createElement('span');
  if (isPrime) {
    const color = radColor();
    span.style.color = color;
    createCenterPrimeNumber(n, color);
  }
  span.innerText = n;
  divContainer.appendChild(span);
  createCenterNumber(n);
}

function createCenterNumber (n) {
  divCenter.innerText = n;
}

function createCenterPrimeNumber (n, color) {
  const div = document.createElement('div');
  div.className = 'center';
  div.style.color = color;
  div.innerText = n;
  document.body.appendChild(div);
  // 加入div后，强制页面重新渲染
  getComputedStyle(div).left; // 只要读取某个元素的位置或尺寸信息，则会导致浏览器的重新渲染， reflow
  
  div.style.transform = `translate(${getRandom(-150,150)}px, ${getRandom(-150,150)}px)`;
  div.style.opacity = 0;
}
