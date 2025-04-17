/*
2차원 배열
*/

const numbers = [
  [2, 4, 6, 8, 10], //numbers[0].length = 5
  [3, 6, 9, 12], //numbers[1].length = 4
  [4, 8, 12, 16],
  [5, 10, 15, 20],
  [6, 12, 18, 24],
];

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
let sum = 0;
console.log(numbers.length);
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
  for (let k = 0; k < numbers[i].length; k++) {
    console.log(numbers[i][k]);
    sum += numbers[i][k];
  }
}
console.log(sum);
