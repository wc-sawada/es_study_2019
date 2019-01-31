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
function buy4(item = { name: "ui" }, amount = 1) {
  console.log(item);
  console.log(amount);
}
buy4();