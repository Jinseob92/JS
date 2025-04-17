function main() {
  const data = getData();
  // data에서 값을 꺼내서 문제 해결하는 코드 작성
  console.log(data);
}
main();

/**
 * 표준 입력장치(콘솔)에서 두 줄로 입력된 줄당 두 건의 데이터를 읽어서 숫자로 변환한 후
 * 배열로 저장하여 반환한다.
 * @returns {object} 2차원 배열
 */
function getData() {
  const fs = require("fs");
  // '23 45 \n 25'
  const fileData = fs.readFileSync(0).toString();
  const arr = fileData.trim().split("\n");

  const result = []; // 최종 리턴할 2차원 배열
  for (let i = 0; i < arr.length; i++) {
    const row = arr[i]; // '23 48', '25'
    const rowArr = row.split(" "); // ['23', '48'], ['25']
    for (let k = 0; k < rowArr.length; k++) {
      rowArr[k] = isNaN(rowArr[k]) ? rowArr[k] : parseInt(rowArr[k]);
    }
    result.push(rowArr);
  }

  //   result.a = isNaN(fileData[0]) ? fileData[0] : parseInt(fileData[0]);
  //   result.b = isNaN(fileData[1]) ? fileData[1] : parseInt(fileData[1]);

  return result;
}
