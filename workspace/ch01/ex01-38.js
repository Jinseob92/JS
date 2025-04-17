/*
전역 변수와 지역 변수
*/

function max(n1, n2) {
  let max = n1;
  if (n2 > max) {
    max = n2;
  }
  return max;
}

console.log(max(10, 20));
console.log(max(200, 30));
