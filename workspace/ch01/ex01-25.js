/*
객체의 속성 관리
*/

const foo = {
  name: "푸푸핑",
  mainJob: "magician",
};

// 객체 프로퍼티 읽기
console.log(foo.name, foo["mainJob"], foo.subJob);

// 객체 프로퍼티 갱신
foo.mainJob = "fairy";
console.log(foo.name, foo["mainJob"], foo.subJob);

foo.subJob = "celeb";
console.log(foo.name, foo["mainJob"], foo.subJob);

delete foo.mainJob;
console.log(foo.name, foo["mainJob"], foo.subJob);

// 객체의 모든 프로퍼티 읽기
for (let prop in foo) {
  console.log(prop, foo[prop]);
}
