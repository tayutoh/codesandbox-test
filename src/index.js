/**
 * const, letなどの変数宣言
 */
/* var */
// var val1 = "val1変数";
// console.log(val1);

// // 上書き
// val1 = "vbal1上書き";
// console.log(val1);

// // 再宣言
// var val1 = "val1再宣言";
// console.log(val1);

// /* let */
// let val2 = "val2変数";
// console.log(val2);

// // 上書き
// val2 = "val2上書き";
// console.log(val2);

// // 再宣言
// let val2 = "val2再宣言";
// console.log(val2);

/* const */
// const val3 = "val3変数";
// console.log(val3);

// 上書き
// val3 = "val3上書き";
// console.log(val3);

// 再宣言
// const val3 = "val3再宣言";
// console.log(val3);

/* object */
// const val4 = {
//   name: "もこ",
//   age: 12
// };
// val4.name = "だいふく";
// val4.address = "chiba";
// console.log(val4);

/* array */
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("rabbit");
console.log(val5);

/**
 * テンプレート文字列
 */
const name = "ぽこ";
const age = 24;

/* 私の名前は＊＊です。年齢は＊＊です。 */
// 従来
const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
console.log(message1);

// テンプレート文字列
const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
console.log(message2);

/**
 * アロー関数
 */
// 従来
// function func1(str) {
//   return str;
// }
const func1 = function (str) {
  return str;
};
console.log(func1("🍊func1🍊"));

// アロー関数
const func2 = (str) => {
  return str;
};
console.log(func2("🍋func2🍋"));

const func3 = (num1, num2) => num1 + num2;
console.log(func3(10, 20));

/**
 * 分割代入
 */
const myProfile = {
  profName: "しろ",
  profAge: 52
};
const profileMessage = `私の名前は${myProfile.profName}です。年齢は${myProfile.profAge}歳です。`;
console.log(profileMessage);

const { profName, profAge } = myProfile;
const profileMessage2 = `私の名前は${profName}です。年齢は${profAge}歳です。`;
console.log(profileMessage2);

const myProfile3 = ["おだんご", 32];
const profileMessage3 = `🐰私の名前は${myProfile3[0]}です。年齢は${myProfile3[1]}歳です。`;
console.log(profileMessage3);

const [prof3Name, pro3fAge] = myProfile3;
const profileMessage4 = `🍡私の名前は${prof3Name}です。年齢は${pro3fAge}歳です。`;
console.log(profileMessage4);

/**
 * デフォルト値
 */
const sayHello = (sayName = "ゲスト") =>
  console.log(`こんにちは🐇${sayName}🐇さん！`);
console.log(sayHello("らびんご"));
