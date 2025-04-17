/*
배열 생성, 읽기, 쓰기
*/

const arr = new Array(1, 2, 3);
// 지정한 배열의 마지막 요소를 추가한다.
arr.push(10);
arr[4] = 20;
arr[5] = 30;

arr[arr.length] = 300;
arr.push(400);
// console.log(arr.length);
// console.log(typeof arr, arr);
// console.log(arr[3]);

for (let i in arr) {
  console.log(arr[i]);
}
