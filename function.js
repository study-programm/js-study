
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

//returnが必要なパターン
// function isTweetable(text) {
//     return text.length <= 140;
// }
// console.log(isTweetable("eee"));

// //returnがいらない場合
// function alertTweetable(text) {
//     //キストの中身が140文字以下の時、you can tweetとアラートを出す
//     if (text.length <= 140) {
//         alert("you can tweet!");
//     }
// }
// alertTweetable("foo");

//上で宣言しているものがそのまま再利用できる例文を作る

function isTweetable(text) {
    return text.length < 4;
}
// console.log(isTweetable("abo"));

function alertTweetable(text2) {

    //上の条件を関数で持ってくる
    if (isTweetable(text2)) {
        window.alert("you can tweet");
    }
}

// alertTweetable("ts");

//匿名関数 関数名がなくても動く

const isTweetablew = function (text) {
    return text.length < 4;
};

// console.log(isTweetablew("sss"));

//コールバック関数

/*引数にコールバック関数を入れている関数を高階関数 */

//  function 高階関数(コールバック関数){
//     //処理
//     //コールバック関数
// }

