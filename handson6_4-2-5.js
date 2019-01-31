// 2章: forEach/map/filterについて
let userList = ["taro", "hanako", "ui"];

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