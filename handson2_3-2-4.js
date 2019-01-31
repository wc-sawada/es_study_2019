// データ型について
// 1.プリミティブ型の宣言とtypeof演算子確認
// 数値
var val1 = 123;
console.log("val1: ", typeof val1);
// number

// 文字列
var val2 = "UXDG";
console.log("val2: ", typeof val2);
// string

// ブール
var val3 = true;
console.log("val3: ", typeof val3);
// boolean

// undefined
var val4;
console.log("val4: ", typeof val4);
// undefined


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
testObj.eventCompany = "Webcrew";
console.log("testObjの確認: ", testObj);

// 値の削除
delete testObj.eventDate;
console.log("testObjの確認: ", testObj);