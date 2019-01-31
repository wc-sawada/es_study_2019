

/****************************************************************************************************** */



/****************************************************************************************************** */



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