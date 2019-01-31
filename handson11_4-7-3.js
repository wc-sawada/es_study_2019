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
  name: "さわだ",
  add: add2
}