/*
유사 배열 객체
*/

/**
 * 전달받은 배열의 모든 요소를 인덱스와 함께 출력한다.
 * @param {any[]} arr- 배열
 */

function printArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
  }
}

const colorArr = ["orange", "yellow", "green"];

printArr(colorArr);

// 유사배열 객체는 아래와 같은 모양을 한다. 배열을 흉내낸 객체라고 이해하면 쉽다.
const arr = {
  length: 3,
  0: "orange",
  1: "yellow",
  2: "green",
};
printArr(arr);
