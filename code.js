// 1章：変数について
// demo1: varの宣言と代入
// 宣言
var name;
// 代入
name = "UXDG";

console.log("demo1: ", name);

// demo2: varの初期化を含めた宣言&再代入
var nickname = "さわだ1";
console.log("demo2-1: ", nickname);

// 再代入
nickname = "さわだ2";
console.log("demo2-2: ", nickname);

// demo3: 複数変数の宣言
var firstname = "うい",
lastname = "さわだ";

console.log("demo3-1: ", firstname);
console.log("demo3-2: ", lastname);

/****************************************************************************************************** */

// 2章：データ型について
// 1.プリミティブ型の宣言とtypeof演算子確認
// 数値
var val1 = 123;
console.log("val1: ", typeof val1);

// 文字列
var val2 = "UXDG";
console.log("val2: ", typeof val2);

// ブール
var val3 = true;
console.log("val3: ", typeof val3);

// undefined
var val4;
console.log("val4: ", typeof val4);

// 2.型変換(キャスト)をして型の確認
val1 = String(val1);
console.log("val1: ", typeof val1);
// かかなくてよい
val1 = Boolean(val1);
console.log("val1: ", typeof val1);
val1 = Number(val1);
console.log("val1: ", typeof val1);


// 3.オブジェクト型の宣言と確認
var testObj = {
  eventName: "JavaScriptUXDG",
  eventDate: 2019
}
console.log("testObjの確認: ", testObj);


// 4.オブジェクトにデータの追加と削除
// 値の変更
testObj.eventName = "handson";
console.log("testObjの確認: ", testObj);

// 値の追加
testObj.eventCompany = "No9";
console.log("testObjの確認: ", testObj);

// 値の削除
delete testObj.eventDate;
console.log("testObjの確認: ", testObj);

/****************************************************************************************************** */

// 3章：配列について
// 1.配列の宣言と定義
var nameList = ["taro", "hanako", "ucan"];
console.log("nameList: ", nameList);

// 2.配列の長さを取得
console.log("nameList: ", nameList.length);

// 3.for文で回す
for (var i = 0; i < 3; i++) {
  console.log(i + "つ目: ", nameList[i]);
}


// 4.for..in文で回す
// 配列の初期化
var userList = [];

// オブジェクトの代入
userList[0] = { id: 12, name: "taro", age: 19 }
userList[1] = { id: 34, name: "hanako", age: 22 }
userList[2] = { id: 56, name: "ucan", age: 39 }

for (var key in userList) {
  console.log(userList[key]);
}

/****************************************************************************************************** */

// 4章：関数とスコープについて
// 1.名前付き関数の定義と実行
function myFunc1(name) {
  var message = "I'm " + name;
  console.log("demo1: ", message);
}

// 実行
myFunc1("ucan");

// 2.無名関数の定義と実行
var myFunc2 = function(name) {
  var message = "I'm " + name;
  console.log("demo2: ", message);
}
// 実行
myFunc2("ucan");

// 3.スコープの確認
// グローバルスコープ
var name1 = "ゆうきゃん";
var name2 = "太郎";
console.log("demo3 global name1: ", name1);


var myFunc3 = function() {
  name1 = "ucan";
  // 関数内で定義したのでローカルスコープ
  var name2 = "taro";
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


/****************************************************************************************************** */


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

/****************************************************************************************************** */

// 2章: forEach/map/filterについて
let userList = ["taro", "hanako", "ucan"];

// 1.forEachでループ処理
userList.forEach(function(element, index, array) {
  console.log("forEach: ", `element: ${element}、 index: ${index}`);
});

// 2.mapでループ処理
userList.map(function(element, index, array) {
  console.log("map: ", `element: ${element}、 index: ${index}`);
});

// 3.filterでループ処理
let filterList = userList.filter(function(element, index, array) {
  return index >= 1;
});
console.log("filter: ", filterList);

// 4.forEachとmapの違い
let list1 = userList.forEach(function(element, index, array) {
    return element;
});
console.log("demo4 forEach: ", list1);

let list2 = userList.map(function(element, index, array) {
    return element;
});

console.log("demo4 map: ", list2);

/****************************************************************************************************** */

// アロー関数について

// demo1
// まず通常のfunctionで確認
const array = [1, 2, 3, 4];
console.log("array", array);

// map関数を使う
const byTwo1 = array.map(function(number) {
  return number * 2;
});

console.log("demo1", byTwo1);


// demo2
// 通常のfunctionを省略
const byTwo2 = array.map((number) => {
  return number * 2;
});
console.log("demo2", byTwo2);

// demo3
// 引数が1つの場合、さらに省略可能。複数の場合は()は必要
const byTwo3 = array.map(number => {
  return number * 2;  
});

console.log("demo3", byTwo3);

// demo4
// 引数が無い場合も()は必要
const byTwo4 = array.map(() => {
    return 2;
});

console.log("demo4", byTwo4);

// demo5
// 関数内が1文の場合、{}も省略出来る
const byTwo5 = array.map((number) => number * 2);
console.log("demo", byTwo5);

/****************************************************************************************************** */

// 関数のデフォルト引数について
// demo1
// 引数が渡されていなければ表示されない
function buy1(item, amount) {
  console.log(item);
  console.log(amount);
}
buy1("eggs");

// demo2
// 従来のJavaScriptでの定義
function buy2(item, amount) {
  if (amount === undefined) {
    amount = 1;
  }
  console.log(item);
  console.log(amount);
}
buy2("eggs");

// demo3
// ECMAScriptではパラメーター部分で定義が出来る
function buy3(item, amount = 1) {
  console.log(item);
  console.log(amount);
}
buy3("eggs");

// dem4
// オブジェクトや配列でも定義可能
function buy4(item = { name: "ucan" }, amount = 1) {
  console.log(item);
  console.log(amount);
}
buy4();

/****************************************************************************************************** */

// テンプレート文字列
let name = "今村";
let age = 39;

// demo1
// 1.従来のやり方
let message1 = "私の名前は" + name + "で、" + age + "さいです。";
console.log("demo1: ", message1);

// demo2
// 2.ECMAScriptのテンプレート文字列
// ` (バッククォート) shift + @マーク
let message2 = `私の名前は${name}で、${age}さいです。`;
console.log("demo2: ", message2);

// ${} の事をエクスプレッションと言います。


/****************************************************************************************************** */

// プロパティについて
let firstname = "ゆうき";
let lastname = "今村";
let age = 36;

// demo1
// 従来のプロパティの定義
let profile1 = {
  firstname: firstname,
  lastname: lastname,
  age: age
}

console.log("demo1", profile1);

// demo2
// ECMAScriptの場合、プロパティと変数が同じ場合は省略出来る。
let profile2 = {
  firstname,
  lastname,
  age
}
console.log("demo2", profile2);

// demo3
// プロパティのキーを動的に変更する事が出来ます。
let key1 = "lastname";
let profile3 = {
  firstname: "ゆうき",
  [key1]: "今村"
}

console.log("demo3", profile3);

// demo4
// キーを変更する事により、様々な実装をする事ができます。
let key2 = "lastname";
function getKey() {
  return "gender";
}

let profile4 = {
  firstname: "ゆうき",
  [key2]: "今村",
  [getKey()]: "男"
}

console.log("demo4", profile4);

// demo5
// ECMAScript以降、プロパティにメソッドを入れる事も可能になりました。
let profile5 = {
  firstname,
  lastname,
  age: 29,
  getOlder: function(){
    this.age++;
  }
  
};

console.log("demo5-1", profile5);
profile5.getOlder();
console.log("demo5-2", profile5);

/****************************************************************************************************** */

// モジュールについて
// demo1
// 通常の関数
function add1(number) {
  return 10 + number;
}
console.log(add1(2));

// demo2
export function add2(number) {
  return 20 + number;
}

// demo4
// 複数モジュール化
export function add3(number) {
  return 20 + number;
}

// demo5
// export default
export default {
  name: "いまむら",
  add: add2
}

/****************************************************************************************************** */

// 読み込み
import { add2 } from "./script";
import { add2, add3 } from "./script";
console.log(add2(10));

// demo3
// エイリアス
import { add2 as myFunc } from "./script";
console.log(myFunc(10));

// demo4
// 複数モジュール化
import * as myAll from "./script";
console.log(myAll.add2(10));
console.log(myAll.add3(10));

import myFunc1111 from "./script.js";
console.log(myFunc1111.name);
console.log(myFunc1111.add2(10));

/****************************************************************************************************** */

// class構文について

// demo1
// 従来のJavaScriptのクラス宣言
var Profile1 = function(name, age) {
  this.name = name;
  this.age = age;
}

var profile1 = new Profile1("ゆうきゃん", 36);
console.log("demo1", profile1);

// demo2
// メソッドを加える場合は prototypeを使う
Profile1.prototype.getGender = function() {
  console.log("一応、おとこ!");
}

var profile2 = new Profile1("はーちゃん", 32);
console.log("demo2", profile2);
console.log("demo2", profile2.getGender());

// demo3
// ECMAScriptの場合のclass構文
class Profile3 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  getGender() {
    console.log("一応、おとこ!");
  }
}
let profile3 = new Profile3("いまむら", 41);
console.log("demo3", profile3);
console.log("demo3", profile3.getGender());

// demo4
// クラスの継承
class Animal extends Profile3 {
  constructor(name, age, years) {
    super(name, age)
    this.years = years;
  }
}

let animal = new Animal("いまむらゆうき", 20, 50);

console.log("demo4", animal);
console.log("demo4", animal.getGender());



/****************************************************************************************************** */

// 非同期関数 async/await/Promis
// async = asynchronous (非同期処理)
// await = 期待しながら待つ
// Promis = 約束
// resolve = 解決 (成功時)
// reject = 拒絶 (失敗時)

// demo1
// 従来の非同期処理を定義します。
// APIの取得処理時間と想定しsetTimeout関数を使用します。
// 乱数で1000 ~ 1100の数値を生成
var rand1 = 1000 + Math.floor( Math.random() * 100 );
var rand2 = 1000 + Math.floor( Math.random() * 100 );
var rand3 = 1000 + Math.floor( Math.random() * 100 );
console.log("rand1: ", rand1);
console.log("rand2: ", rand2);
console.log("rand3: ", rand3);

function task1() {
    setTimeout(function() {
        console.log("demo1: task1が実行されました。");
    }, rand1);
}


function task2() {
    setTimeout(function() {
        console.log("demo1: task2が実行されました。");
    }, rand2);
}

function task3() {
    setTimeout(function() {
        console.log("demo1: task3が実行されました。");
    }, rand3);
}
// taskを実行
// task1();
// task2();
// task3();

// demo2
// Promise用のタスクを作成
let promiseTask1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    // 成功したら文字列「demo2: task1」を出力
    resolve('demo2: task1が実行されました。');
  }, rand1);
});

let promiseTask2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    // 成功したら文字列「demo2: task1」を出力
    resolve('demo2: task2が実行されました。');
  }, rand2);
});

let promiseTask3 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    // 成功したら文字列「demo2: task1」を出力
    resolve('demo2: task3が実行されました。');
  }, rand3);
});

// 通常実行 (並列処理)
// promiseTask1.then(function(value) {
//   console.log(value);
// });

// promiseTask2.then(function(value) {
//   console.log(value);
// });

// promiseTask3.then(function(value) {
//   console.log(value);
// });

// メソッドチェーン (直列処理)
// promiseTask1.then(function(value) {
//   console.log(value);
//   promiseTask2.then(function(value) {
//     console.log(value);
//     promiseTask3.then(function(value) {
//       console.log(value);
//     });
//   });
// });

// async awaitの定義
// demo3
async function main() {
  console.log(await promiseTask2);
  console.log(await promiseTask1);
  console.log(await promiseTask3);
}

main();