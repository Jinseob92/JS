// if문의 다양한 사용 예제

//  지정한 연산자와 숫자를 받아서 연산을 수행하는 프로그램


const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split("\n"
);


const operator = fileData[0].trim;
const n1 = fileData[1];
const n2 = fileData[2];


if (operator === "+")
{
        console.log(n1+n2);
}
else if(operator === "-"){
       console.log(n1-n2);
}
else if(operator === "*"){
       console.log(n1*n2);
}
else if(operator === "/"){
       console.log(n1/n2);
}
else{
        console.log("잘못된 입력");
}


/*
1 ~ 7 사이의 숫자를 받아서 해당 요일을 출력하는 프로그램
1은 월요일, 2는 화요일, ... 7은 일요일
1 ~ 7 사이의 숫자가 아닐 경우 "잘못된 입력" 출력
*/

// const fs = require("fs")
// const fileData2 = fs.readFileSync(0).toString().trim();
// const day = parseInt(fileData2);

// if(day === 1){
//         console.log("월요일");
// }
// else if(day === 2){
//         console.log("화요일");
// }
// else if(day === 3){
//         console.log("수요일");
// }
// else if(day === 4){
//         console.log("목요일");
// }
// else if(day === 5){
//         console.log("금요일");
// }
// else if(day === 6){
//         console.log("토요일");
// }
// else if(day === 7){
//         console.log("일요일");
// }
// else{
//         console.log("잘못된 입력");
// }




/*
1 ~ 12 사이의 월을 받아서 게절을 출력하는 프로그램
봄: 4월, 여름: 5 ~ 10월, 가을: 11월, 겨울: 12 ~ 2월
1 ~ 12 사이의 숫자가 아닐 경우 "잘못된 입력" 출력
*/



// const fs = require("fs");
// const fileData3 = fs.readFileSync(0).toString().trim();

// const month = parseInt(fileData3);

// if(month === 4)
// {
//         console.log("봄");
// }
// else if(month >= 5 && 10 >= month)
// {
//         console.log("여름");
// }
// else if(month === 11)
// {
//         console.log("가을");
// }
// else if(month === 12 || 2 >= month)
// {
//         console.log("겨울");
// }
// else if (month > 12 ){
//         console.log("12월보다 큰 13월은 없다.");
// }
// else{
//         console.log("잘못된 입력");
// }

// const fs = require('fs');
// const input = fs.readFileSync(0).toString().trim().split('\n');

// const operator = input[0];

// const n1 = 10;
// const n2 = 20;

// if(operator == "+"){
//     console.log(n1 + n2);
// }

// else if(operator == "-"){
//     console.log(n1 - n2);
// }

// else if(operator == "*"){
//     console.log(n1 * n2);
// }

// else if(operator == "/"){
//     console.log(n1 / n2);
// }

// else{
//     console.log("잘못된 입력");
// }