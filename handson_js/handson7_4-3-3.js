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