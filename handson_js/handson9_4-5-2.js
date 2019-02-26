// テンプレート文字列
let name = "さわだ";
let age = 17;

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