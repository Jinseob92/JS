/*
제목: 곱셈
설명: 빈 칸에 들어갈 수는?
제출: https://www.acmicpc.net/submit/2588

문제
(세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.

     472 ... (1)
   x 385 ... (2)
  -------
    2360 ... (3)  <- 472 × 5
   3776  ... (4)  <- 472 × 80
  1416   ... (5)  <- 472 × 300
 -------
  181720 ... (6)  <- 최종 결과

(1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 (1)의 위치에 들어갈 세 자리 자연수가, 둘째 줄에 (2)의 위치에 들어갈 세자리 자연수가 주어진다.

출력
첫째 줄부터 넷째 줄까지 차례대로 (3), (4), (5), (6)에 들어갈 값을 출력한다.

예제 입력 1
472
385

예제 출력 1
2360
3776
1416
181720
*/

const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");

const A = parseInt(inputData[0]);
const B = inputData[1]; // 문자열로 받아야 각 자리 분해 가능

const B1 = parseInt(B[2]); // 1의 자리
const B2 = parseInt(B[1]); // 10의 자리
const B3 = parseInt(B[0]); // 100의 자리

console.log(A * B1);
console.log(A * B2);
console.log(A * B3);
console.log(A * parseInt(B));
