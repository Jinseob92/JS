/*
논리 연산자 &&, ||, !
*/

//논리합 (OR)
console.log(true || true);
console.log(true || False);
console.log(false || true);
console.log(false || false);




// 앞의 값이 참이면 앞의 값을 반환
// 앞의 값이 거짓이면 뒤의 값을 반환 
// falsy:number 0, string '', boolean false, null, undefined
// truthy: 100, ' ', 'hello', true

console.log("hello" || "world"); //hello
console.log(90 || 30); //90
console.log(null || "world"); // world 
console.log(undefined || "world"); // world 
console.log(0 || 100); // 100
console.log( ' ' || '공백');   // 공백이 출력 됨 
console.log( '' || '아무것도 입력하지 않음');   // 아무것도 입력하지 않음



// 논리곱(AND):
// 피연산자 둘 다 true일 경우 true가 됨
// 둘 중 하나라도 false일 경우 false가 됨.
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

// 앞의 값이 참이면 뒤의 값을 반환
// 앞의 값이 거짓이면 앞의 값을 반환

id = null; //type은 object
console.log('글자수', id && id.length);
console.log ('글자수', id?.length);