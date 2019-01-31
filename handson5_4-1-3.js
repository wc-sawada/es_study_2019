// 1章: let/constについて

// 1.var、let、constを宣言&代入
var varTest = 1;
let letTest = 2;
const constTest = 3;
console.log("demo1 var:", varTest);
console.log("demo1 let:", letTest);
console.log("demo1 const:", constTest);

// 2.var、let、constを再代入出来るか確認
varTest = 11;
letTest = 22;
// constTest = 33;
console.log("demo2 var:", varTest);
console.log("demo2 let:", letTest);

// 3.var、let、constを再宣言出来るか確認
var varTest = 11;
// let letTest = 22;
// const constTest = 33;

// 4.ブロックを作成しブロック内での値のスコープの確認。
var varTest2 = 1;
let letTest2 = 2;
const constTest2 = 3;

console.log("demo4 var:", varTest2);
console.log("demo4 let:", letTest2);
console.log("demo4 const:", constTest2);

function myFunc1() {
  varTest2 = 11;
  let letTest2 = 22;
  const constTest2 = 33;
  console.log("demo4 var:", varTest2);
  console.log("demo4 let:", letTest2);
  console.log("demo4 const:", constTest2);
}
myFunc1();

console.log("demo4 var:", varTest2);
console.log("demo4 let:", letTest2);
console.log("demo4 const:", constTest2);
