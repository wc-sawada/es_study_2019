// ※handson11_4-7-3.jsをscript.jsに記述し、読み込むようにする

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