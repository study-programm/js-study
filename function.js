
const cutFruits = ["tesuto", "oppai"];

function cut(food) {
    return `今日は${food}を食べました`;
}
cut(cutFruits);


function cut(food) {
    //切る処理...
    const cutFood = food.slice();
    return cutFood;
}

const cutPotato = cut("potato");
const cutCarrot = cut("carrot");

function throwAway(food) {
    //捨てる処理...
    delete food;
}

// returnが必要なパターン
function isTweetable(text) {
    return text.length <= 140;
}
console.log(isTweetable("eee"));

//returnがいらない場合
function alertTweetable(text) {
    //テキストの中身が140文字以下の時、you can tweetとアラートを出す
    // if (text.length <= 140) {
    //     alert("you can tweet!");
    // }
}
alertTweetable("foo");

//上で宣言しているものがそのまま再利用できる例文を作る

function isAble(openchat) {
    //140文字以下の時、true 違う場合falseが出る
    return openchat.length < 140;
}
console.log(isAble("foo"));


function isAble2(text2) {
    if (isAble(openchat)) {
        alert("you can tweet!");
    }
}

console.log(isAble2("foo"));

function isAble2(text2) {
    // fooをconsole.logで吐き出すだけ
}

isAble2("foo");


// const hensu = 'Global';
// console.log(hensu);

// function local() {
//     const hensu = 'Local';
//     console.log(hensu);
// }
// local();
// console.log(hensu);


// const owner = "baka";
// function isAble(text) {
//     alert(text + " is " + owner);
// }

// function isAble2(text) {
//     alert(owner + " is " + text);
// }

// isAble("owner");
// isAble2("owner");

//関数の外なのでグローバル
const owner = "baka";

function isAble(text) {
    //スコープの中なのでローカル変数
    const owner = "a";
    console.log(owner);
    const Taira = "owner"
}
//スコープの中でグローバル変数を読んでもローカル変数の方が優先度上
isAble();

//グローバル変数はどこでも実行可能
console.log(owner);
//ローカル変数はスコープ外で実行しても出ない
// console.log(Taira);



// function isAble2(text) {
//     //あほが代入される
//     owner = "aho"
//     //あほはオーナー
//     alert(owner + " is " + text);

// }
// isAble("owner");
// isAble2("owner");
// isAble("owner");


//そういうときこそコードを書くのです
function sleep() {
    if (true) { //クソ
        var goodNight = "おやすみ";
    }
    return goodNight;
}
console.log(sleep()); // 寝れない

//再宣言
// var a = 0;
// var a = 1; 
// console.log(a) // `1`と出力される

// // let
// let b = 0;
// let b = 1;

// // const
// const c = 0;
// const c = 1; 

//再代入
/*
 * var
*/

var a = 10;
a = 1;
console.log(a);

let aa = 1;
aa = 0;
console.log(aa);

//エラーになる
const aaa = 0;
// aaa = 1;
// console.log(aaa);

//var
{
    var a = 0;
}

console.log(a);
//expected 0

//let

{
    //ブロックスコープにより再宣言にならない
    let aa = 1;
    console.log(aa);
    //expected 1
}

console.log(aa);
//expected 0

{
    //ブロックスコープにより再宣言にならない
    const aaa = 1;
    console.log(aaa);
    //expected 1
}
console.log(aaa);
//expected 0