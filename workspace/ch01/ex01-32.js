/*
매개변수를 가진 함수 - 도어락
도어락은 비밀번화가 입력되면 문이 열린다
잘못된 비밀번호가 입력되면 경보음이 울린다
*/



function doorlock(password = ''){
        const pwd = '123467';
        const subpassword = password.slice(-pwd.length)
        if(subpassword === pwd){
                console.log("문이 열립니다.");
        }
        else{
                console.log('도둑이야');
        }
}

doorlock('1111');
doorlock('123423123467');
doorlock();  //undefined가 된다. 함수가 정의만 되어 있고 값이 없기 때문에. 
             //하지만 함수는 실행되어 도둑이야를 실행한다.      