/*
국어, 영어, 수학 점수
총점과 평균을 출력하는 프로그램
*/

// 리터럴 표기법으로 객체 만들기
const score = {
  userName: "차차핑",
  kor: 100,
  eng: 90,
  math: 85,
  sum: function () {
    //   객체의 메서드가 자신의 속성을 접근할 때 this. 사용한다.
    return this.kor + this.eng + this.math;
  },
  avg: function () {
    return this.sum() / 3;
  },
};

console.log(score.sum());
console.log(Math.floor(score.avg()));
