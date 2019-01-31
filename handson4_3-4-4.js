// 4章：関数とスコープについて
// 1.名前付き関数の定義と実行
function myFunc1(name) {
  var message = "I'm " + name;
  console.log("demo1: ", message);
}

// 実行
myFunc1("うい");

// 2.無名関数の定義と実行
var myFunc2 = function(name) {
  var message = "I'm " + name;
  console.log("demo2: ", message);
}
// 実行
myFunc2("うい");

// 3.スコープの確認
// グローバルスコープ
var name1 = "ういたろう";
var name2 = "さわだ";
console.log("demo3 global name1: ", name1);


var myFunc3 = function() {
  name1 = "ui";
  // 関数内で定義したのでローカルスコープ
  var name2 = "sawada";
  // 新しい変数の宣言
  var name3 = "hanako";
  console.log("demo3 関数内(再代入) name1: ", name1);
  console.log("demo3 関数内(再宣言) name2: ", name2);
  console.log("demo3 関数内(新規宣言) name3: ", name3);
}

// 実行
myFunc3();
console.log("demo3 global name1: ", name1);
console.log("demo3 global name2: ", name2);
console.log("demo3 global name3: ", name3);
