// const test_1 = 1;
// let test_2 = 4;

// test_2 *=4;

// const test_3 = (test_1 + test_2)

// console.log(test_3);

const height = "100";

console.log(typeof height);

if (height === 100) {
    console.log(`身長は${height}です`);
} else {
    console.log("違います");
}


const signal = "yellow";

if (signal === "red") {
    console.log("とまれ");
} else if (signal === "yellow") {
    console.log("とまるじゅんび");
} else {
    console.log("すすめ");
}

const speed = 60;

/*信号が青の時に60以上スピードが出ているときにスピード違反
ネストはわかりづらくなるだけなのでなるべくしない模範例*/
if (signal === "blue") {
    if (speed >= 60) {
        console.log("スピード違反");
    } else if (signal === "yellow") {
        if (speed >= 60) {
            console.log("危ない");
        } else {
            console.log
        }
    }
}

const height2 = "90";

//===は型があっているかどうかまでみてくれるので、基本的に==は使わない
if (height2 !== 90) {
    console.log(`身長は${height2}以外です`);
} else {
    console.log(`身長は90cmです`);
}

//AND OR

const signal_1 = "red";
const signal_2 = "blue";

if (signal_1 === "red" && signal_2 === "yellow") {
    console.log("これはANDです");
} else {
    console.log("これはANDではありません");
}


const signal_3 = "red";
const signal_4 = "blue";

if (signal_3 === "red" || signal_4 === "yellow") {
    console.log("これはANDです");
} else {
    console.log("これはANDではありません");
}

//三項演算子
//ifelse を1文に書く
//条件　？　真　：　偽
const score = 100;

//100以上ならgood,そうじゃないならnot goodを出す
const stage = score > 100 ? "good" : "not good";

console.log(stage);


/*繰り返し
//for　繰り返しの回数を指定
//for in　あまり使わない
//for of (ES6) 使いやすい
*/

//通常

const forArray = [100, 200, 300, 1000];

//[100,200,300,400]
console.log(forArray);

//for of 1個ずつ取り出す
for (simple of forArray) {
    //100,200,300,1000
    console.log(simple);
}

//for文
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

//switch文
const data = 0;

switch (data) {
    case 1:
        console.log("1です");
        break;
    case 2:
        console.log("2です");
        break;
    case 3:
        console.log("3です");
        break;
    default:
        console.log("1-3ではないです");
        break;
}

//組み込み関数とユーザー定義関数

//引数無し
//アウトプットなし
function fatComment() {
    console.log(1);
}

fatComment();

//引数あり
//アウトプットなし
function getString(food) {
    console.log(`${food}を食べました`);
}

getString("かぼちゃ");

const comment = "コメント";

function getString2(test_4) {
    console.log(`${test_4}しました`);
}

getString2(comment);


//引数なし　アウトプット戻り値あり
function getNumberOfComment() {
    return 5;
}

//-------画面上に表示するconsole.logはないのでここでは答えが出ない-----------
//実際に実行すると5が返ってきているので値が見れる。
getNumberOfComment();

//consoleで実行結果が見れる
console.log(getNumberOfComment());

const NumberOfComment = getNumberOfComment();

console.log(NumberOfComment);

//インプット２つ　アウトプットもあり

function testSum(int1, int2) {

    let3 = int1 + int2;
    //returnを返さないとundefinedとなる。
    return let3;
}

const testInt = testSum(29, 51);
console.log(testInt);

