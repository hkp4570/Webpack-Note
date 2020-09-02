/**
 * 判断一个数是否是质数
 * @param num
 */
export function isPrime (num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num - 1; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
