// プロパティについて
let firstname = "うい";
let lastname = "さわだ";
let age = 17;

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
  firstname: "うい",
  [key1]: "さわだ"
}

console.log("demo3", profile3);

// demo4
// キーを変更する事により、様々な実装をする事ができます。
let key2 = "lastname";
function getKey() {
  return "gender";
}

let profile4 = {
  firstname: "うい",
  [key2]: "さわだ",
  [getKey()]: "女"
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