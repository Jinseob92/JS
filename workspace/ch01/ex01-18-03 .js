/*
if-else if문
*/

/*
if-else if문

if (조건식1) { // 필수
    조건식1이 참일 때 실행할 코드;
    조건식1이 참일 때 실행할 코드;
    ......
} else if (조건식2) { // 생략 가능
    조건식2이 참일 때 실행할 코드;
    조건식2이 참일 때 실행할 코드;
    ......
} else if (조건식3) { // 생략 가능
    조건식3이 참일 때 실행할 코드;
    조건식3이 참일 때 실행할 코드;
    ......
} else { // 생략 가능
    조건식이 거짓일 때 실행할 코드;
    조건식이 거짓일 때 실행할 코드;
    ......
}
*/
/*
if문을 이용하여 사용자와 로그인 상태를 출력하세요.

*/

const isLogin = true;
const isUser = false;
const isSeller = false;
const isAdmin = true;

// isLogin이 true이면 "로그인 상태" 출력
if (isLogin === true){
        console.log("로그인 상태");
}
// isLogin이 false이면 "로그아웃 상태" 출력
else {
        console.log("로그아웃웃 상태");
}


// isUser가 true이면 "사용자" 출력
// isSeller가 true이면 "판매자" 출력
// isAdmin이 true이면 "관리자" 출력
if (isUser === true)
{
        console.log("사용자");
}
else{
        if(isSeller === true){
                console.log("판매자");
        }
        else{
                console.log("관리자");
        }
}




// isLogin이 true이고 isUser가 true 이면 "사용자 로그인 상태" 출력
// isLogin이 false이고 isUser가 true이면 "사용자 로그아웃 상태" 출력
// isLogin이 true이고 isSeller가 true이면 "판매자 로그인 상태" 출력
// isLogin이 false이고 isSeller가 true이면 "판매자 로그아웃 상태" 출력
// isLogin이 true이고 isAdmin이 true이면 "관리자 로그인 상태" 출력
// isLogin이 false이고 isAdmin이 true이면 "관리자 로그아웃 상태" 출력

if (isLogin === true && isUser === true){
        console.log("사용자 로그인 상태");
}
else{
        if(isLogin === false && isUser === true){
                console.log("사용자 로그아웃 상태");
        }
        else{
                if(isLogin === true && isSeller === true){
                        console.log("판매자 로그인 상태");
                }
                else{
                        if(isLogin === false && isSeller === true){
                                console.log("판매자 로그아웃 상태");
                        }
                        else{
                                if(isLogin === true && isAdmin === true)
                                {
                                        console.log("관리자 로그인 상태");
                                }
                                else{
                                        console.log("관리자 로그아웃 상태");
                                }
                        }
                }
        }
}

