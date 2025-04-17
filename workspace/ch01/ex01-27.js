/*
배열의 모든 요소 읽기 1 - for 루프, for...of, for...in
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddSum = 0;
let evenSum = 0;
let allSum = 0;

// console.log("for");
// for (let i = 0; i < arr.length; i++) {
//   const elem = arr[i];
//   console.log(i, elem);
// }

// 배열 모든 요소의 합계를 출력
for (let i = 0; i < arr.length; i++) {
  allSum += arr[i];
  if (arr[i] % 2 === 0) {
    evenSum += arr[i];
  } else if (arr[i] % 2 === 1) {
    oddSum += arr[i];
  }
}
console.log("총합 : " + allSum);
console.log("홀수값의 합 : " + oddSum);
console.log("짝수값의 합 : " + evenSum);

for (let elem of arr) {
  console.log(elem);
}

// for-in
for (let prop in arr) {
  console.log(prop, arr[prop]);
}
