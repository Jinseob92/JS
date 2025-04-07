/*

for 문을 이용해서 구구단 작성
*/


/* 
3 x 1 = 3 
3 x 2 = 6
...
3 * 9 = 27
*/


const dan = 3;
let result = 0;

for (let i =1;i<10;i++)
{
        result = dan * i;

        console.log(`${dan} X ${i} = ${result}`);
}


// Teacher Code
// const dan = 3;
// for (let i = 1; i <= 9; i++)
// {
//         console.log(dan + 'x' + i + '=' + (dan * i));
//         console.log(`${dan} x ${i} = ${dan * i}`); 
// }


/* 
        2단 부터 9단 까지 출력

        출력예시: 
        2 x 1 = 2;
        2 x 2 = 4;
        2 x 9 = 18;

        3 x 1 = 3;
        ...
        3 x 9 = 27;
*/

for(let i=2;i<=9; i++)
{
        for(let j=1;j<=9;j++)
        {
                console.log(`${i} x ${j} = ${(i*j)}`);
        }

}


for(let i=1;i<=9; i++)
        {
                let row = "";
                for(let j=2;j<=9;j++)
                {
                        row += `${j} X ${i} = ${j*i}`.padEnd(11);
                }
                console.log(row);
        }