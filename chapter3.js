
const halve = function (n) {
    return n / 2;
}

let n = 10;
console.log(halve(100));
//50
console.log(n);
//10

//ネストスコープ

function square(x) {
    return x * x;
}

console.log(square(4, true, "bob"));
//16

//暗黙的な型変換
const e = 1, y = 2, l = "3";

console.log(e + y + l);
console.log(l + e + y);
console.log(y + l + e);

console.log(Boolean("string"));
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean({}));
console.log(Boolean(""));
console.log(Boolean(null));

console.log(String(1));

// const input = window.prompt("数字を入力してください", "42");

// console.log(typeof input);

// const num = Number(input);

// console.log(typeof num);

// console.log(num);

//関数宣言
function double(num) {
    return num.length * 2;
}

console.log(double("foo"));
//6

function echo(x) {
    return x;
}

console.log(echo(1));
console.log(echo());
//undefined

function argumentsToArray(x, y) {
    return [x, y];
}

console.log(argumentsToArray(1, 2));
console.log(argumentsToArray(1));

//デフォルト設定した関数
function echo2(x = "デフォルトだよ") {
    return x;
}
console.log(echo2(1));
console.log(echo2());
//デフォルトだよ

function addprefix(text, prefix) {
    const pre = prefix || "デフォルト";
    return pre + text;
}

console.log(addprefix("文字列"));
//デフォルト文字列　→子の表記はバグ
console.log(addprefix("文字列", "これが"));
//これが文字列

/*解決策　関数の引数にデフォルトを設定する */

function addPrefix(text, prefix = "デフォルトに設定した") {
    return prefix + text;
}

console.log(addPrefix("文字列"));
console.log(addPrefix("文字列", "デフォルトじゃない"))

//呼び出しの引数が多いとき
function add(x, y) {
    return x + y;
}

console.log(add(1, 3));
console.log(add(1, 3, 5));
//4

//可変長引数
const max = Math.max(1, 2, 3, 20);
console.log(max);
//20

//スプレット構文

// function fn(x,...args) {
//     console.log(x);
//1
//     console.log(args);
//2,3,4
//}

// fn("1", "2", "3", "4");

function fn(g) {
    console.log(g);
}

const array = [1, 2, 3, 4];
fn(array[2]);
//3

function sn() {
    console.log(arguments[0]);
    //a
}
sn("a", "b", "c");

function printUserId(user) {
    console.log(user.id);
}

const user = {
    id: 42
};

printUserId(user);

function print2([first, second]) {
    console.log(first);
    console.log(second);
}

const array2 = ["100", "200"];
print2(array2);

//関数はオブジェクト

function fn2() {
    console.log("これが表示されました");
}

const myFunc = fn2;
myFunc();

//関数式だと変数名で参照できるので、functionの右隣の関数名の省略は可能
//匿名関数
const funcName = function () {
    console.log("funcNameが実行されました");
};

funcName();

//関数宣言では関数名は省略できない
function func2Name() {

}

/*
arrow関数は関数名を付けることが出来ない
コンストラクタ関数ではない new
arguments変数を参照できない
thisが静的に決まる
*/

const func3Name = [100, 200, 300];

//foreach文を使うとmapと違い1つの配列に格納よりも一つずつ抽出される
func3Name.forEach(value => console.log(value * 3));
//300 600 900

const obj = {
    key: "りんご",
    value: "みかん"
};
obj.value3 = "ぶどう";

console.log(obj.value3);