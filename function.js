
// const cutFruits = ["tesuto", "oppai"];

// function cut(food) {
//     return `今日は${food}を食べました`;
// }
// cut(cutFruits);


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

function isAble(text) {
    //140文字以下の時、true 違う場合falseが出る
    return text.length < 140;
}
console.log(isAble("foo"));

function isAble2(text2) {
    if (isAble(text)) {
        alert("you can tweet!");
    }
}

console.log(isAble2("foo"));