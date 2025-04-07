/* 
1부터 10까지의 홀수 출력
*/

// 1부터 10까지 홀수 출력

let number = 1;
let sum = 0;
while(number <= 10){
        if(number % 2 == 1)
        {
                sum += number;
        }
        number += 1;
}
console.log(sum);


// 1부터 10까지 짝수 출력
let number2 = 1;
let sum2 = 0;
while(number2 <= 10){
        if(number2 % 2 == 0)
        {
                sum2 += number2;
        }
        number2 += 1;
}
console.log(sum2);