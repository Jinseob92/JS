/*
반환값이 있는 함수
*/


add();
add();
add100(10);
add100(20);
sum(10,20);
sum(30,40);
// 10 + 100의 결과를 출력하는 함수 (add)
function add(){
        console.log(10+100);
}


// 전달받은 숫자와 100의 합계를 출력하는 함수 (add 100)

function add100(number){
        let add100 = number + 100;
        console.log(add100);
}

// 전달받은 두 숫자의 함계를 출력하는 함수 (sum)

function sum(A,B){
        console.log(A + B);
}