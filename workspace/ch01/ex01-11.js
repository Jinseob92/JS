/*
비교 연산자 >, >=, <, <=, ==, !=, ===, !==
*/

var a = 5;
var b = 10;
var c = "5";
var d = 5;

//  > 크다
console.log(a > b);

// < 작다
console.log(a < b);

// >=크거나 같다
console.log(a >= d);

// <= 작거나 같다
console.log(a <= d);

// 문자열 비교
console.log(a == c); //동등, 5== '5' 이 말은 즉 5 ==5 =true
console.log(a===c); //일치, 5 === '5' 일치연산자에 관해서는 type 부터 확인하는데
//  number로 선언된 5와 문자로 선언된 string의 type이 다르기 때문에 false 가출력된다.

console.log('ch05'  > 'ch01') // 사전순으로 비교 페이지 순서라고 생각하면 됨
console.log('ch12' > 'ch2') // 컴퓨터에서는 한글자씩 비교하기 때문에 ch12가 더 작다.
