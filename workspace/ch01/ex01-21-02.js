/* 
        for문
*/


/*
*
**
***
****
*****
*/
const lines = 5;

// for(let i=0; i<lines; i++)
// {       
//         let row = "";
//         for(let j=0; j<=i; j++)
//         {
//                 row += "*";
//         }

//         console.log(row);
// }



/*
    *
   **
  ***
 ****
*****
*/
// for(let i = 0 ; i < lines ; i++)
// {
//         let row ="";
//         for(let j=0; j< lines-i-1; j++)
//         {
//                 row+= " ";
//         }
//         for(let k=0; k<=i; k++)
//         {
//                 row+="*";
//         }
//         console.log(row);
// }

/* 
*****
****
***
**
*
*/

// for(let i=5; i>=1; i--)
// {
//         let row="";
//         for(let k=0;k<i;k++){
//                 row+= "*";
//         }
//         console.log(row);
// }


/*
    *
   ***
  *****
 *******
*********
*/


// for(let i=0; i< 5; i++)
// {
//         let row = "";
//         for(let j=0;j<lines-i-1; j++)
//         {
//                 row+= " ";
//         }
//         for(let j=0; j <= i; j++)
//         {
//                 row+= "*";
//         }
//         if(i >= 1){
//                 for(let k = 0; k <i; k++)
//                 {
//                        row+= "*";
//                 }
//         }
// console.log(row);
// }
/*
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/

// for(let i=0; i< 9; i++)
//         {
                
//                 if(i < 5){
//                         let row = "";
//                         for(let j=0;j<4-i; j++)
//                         {
//                                 row+= " ";
//                         }
//                         for(let j=0; j <= i; j++)
//                         {
//                                 row+= "*";
//                         }
//                         if(i >= 1){
//                                 if(i <= 5){
//                                 for(let k = 0; k <i; k++)
//                                 {
//                                         row+= "*";
//                                 }
//                         }
                             
//                         }
//                         console.log(row);
                        

//                 }
//                 else {
//                         let row = "";
//                         for (let j = 0; j < i - 4; j++) {
//                             row += " ";
//                         }
//                         for (let j = 0; j < (9 - i) * 2 - 1; j++) {
//                             row += "*";
//                         }
//                         console.log(row);
//                     }
                    
                                
        
//         }





/*
    *
   ***
  *****
 *******
*********
*/
        let n=0;
        for(let i=0;i<5;i++){
                let row="";
                for(let j=0; j < 5-i; j++){
                        row+=" ";
                }
                for(let m=0; m <= 2*n; m++)
                {
                        row+= "*";
                }
                n++;
                console.log(row);
        }