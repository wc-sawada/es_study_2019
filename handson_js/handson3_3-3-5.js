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
userList[2] = { id: 56, name: "sawada", age: 26 }

for (var key in userList) {
  console.log(userList[key]);
}