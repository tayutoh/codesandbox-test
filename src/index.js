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
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("🍊func1🍊"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("🍋func2🍋"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

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
// const sayHello = (sayName = "ゲスト") =>
//   console.log(`こんにちは🐇${sayName}🐇さん！`);
// // console.log(sayHello("らびんご"));
// sayHello("らびんご");

/**
 * スプレッド構文
 */
// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー・結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = [...arr4];
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["もこ", "ラビンゴ", "御団子"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です。`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index) =>
//   console.log(`${index + 1}番目は🐰${name}ちゃん🐰です！`)
// );

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "御団子") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(...newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 0 > 1 ? "trueです" : "falseです";
// console.log(val1);

const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を設定してください";
// console.log(formattedNum);

const checkSum = (num1, num2) => {
  const resultSum = num1 + num2;
  return resultSum > 100
    ? `100を超えています！！！:(　現在${resultSum}です`
    : "許容範囲内です:)";
};
console.log(checkSum(90, 10));

/**
 * 論理演算子の本当の意味
 */
// const flag1 = true;
// const flag2 = true;
// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

// || は左側がfalseの場合右側を返す
// const numpipe = 100;
// const fee = numpipe || "金額未設定です";
// console.log(fee);

// && は左側がtrueの場合右側を返す
const numamp = 200;
const fee2 = numamp && "なにか設定されました";
console.log(fee2);
