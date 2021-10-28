
const math2 = "1";

if (math2) {
    console.log(1);
} else {
    console.log(2);
}

if (true) {
    console.log("これは正解です");
    console.log("これも正解です");
}

const sentence = 42;

if (sentence > 10) {
    console.log("sentenceは10より大きな値です");
    //実行される
}

const version = "ES6";

if (version === "ES5") {
    console.log("これは不正解")
} else if (version === "ES6") {
    console.log("これが正解");
} else if (version === "ES7") {
    console.log("これも不正解");
}

const num = 1;

if (num > 10) {
    console.log(`${num}は10以上です`);
} else {
    console.log(`${num}は10以下です`);
}

//今年を取得
const year = new Date().getFullYear();

//ネストif文
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log(`${year}年はうるう年です`);
        }
    }
} else {
    console.log(`${year}年はうるう年ではありません`);
}

let o = 0;

while (o < 10) {
    console.log(o);
    o += 1;
}

function sum(numbers) {

    //合計の箱を用意
    let total = 0;
    //全部を取得する必要があるから配列の最後まで取得するために+1
    for (let i = 0; i < numbers.length + 1; i++) {
        total += i;
    }
    return total;
}

console.log(sum([1, 2, 3, 4, 5]));

//forEachメソッド
const array3 = [1, 2, 3];

array3.forEach(value => {
    console.log(value * 2);
    //2,4,6
});

//for文をforEachで代替
function sum2(numbers) {
    //箱を用意
    let total2 = 0;
    numbers.forEach(numberChild => {
        total2 += numberChild;
    });
    return total2;
}

console.log(sum2([1, 2, 3, 4, 5]));


//配列の中身を全部取得
const numberArray = [1, 5, 10, 20, 25];

for (let i = 0; i < numberArray.length + 1; i++) {

    //配列の中身をを1つずつ取得
    const num = numberArray[i];
    //最初に２で割れるものが見つかるまでループ、見つかればストップさせる
    if (num % 2 === 0) {
        console.log(num);
        break;
    }
}

const array4 = [1, 2, 3, 4, 5];

//someメソッドで全部に対して条件式を投げてfalseかtrueを取得する
array4.some(value => console.log(value % 2 === 0));
