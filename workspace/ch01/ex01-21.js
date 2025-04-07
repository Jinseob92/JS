/*
반복문 - for문
*/




// 1부터 10까지 출력


// 1부터 10까지 홀수의 합계 출력. 25

// 1부터 10까지 짝수의 합계 출력. 30

let oddSum = 0, evenSum=0;

for(let i=1; i<=10; i++)
{
        console.log(i);
}

for(let i=1; i<=10; i++)
{
        if(i % 2 == 1)
        {
                oddSum += i;
        }
        else{
                evenSum += i;
        }
}
console.log(oddSum,evenSum);
