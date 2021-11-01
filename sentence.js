
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
    } else {
        continue;
    }
}

//filterメソッドは新しい配列を作る
function filterFunc(num) {
    return num % 2 === 0;
}

const numFunc = [1, 2, 3, 4];

//numFunc配列にfilterFunc関数を入れて新しい配列を作る
console.log(numFunc.filter(filterFunc));
//[2,4]


const array4 = [1, 2, 3, 4, 5];

//someメソッドで全部に対して条件式を投げてfalseかtrueを取得する
array4.some(value => console.log(value % 2 === 0));


const obje = {
    "a": 1,
    "b": 2,
    "c": 3,
};

for (keys in obje) {
    const value = obje[keys];
    console.log(`key:${keys},value:${value}`);
}

//Object.keyメソッドを使って取り出す方法

const obje2 = {
    "a": 1,
    "b": 2,
    "c": 3
}

Object.keys(obje2).forEach(objeChild => {
    const keys = obje2[objeChild];
    console.log(keys);
});

//オブジェクト作成
const obj2 = {
    key: "value",
};

const name = "名前";

const obj3 = {
    name: name
};

console.log(obj3);

const age = 14;

const ageobj = {
    age
};

console.log(ageobj);

const obj4 = new Object();

obj4.keys = "valueです"

console.log(obj4);

//基本的にはドット記法で変数を扱うときはブラケット記法

const languages = {
    ja: "日本",
    en: "英語"
};

const { ja, en } = languages;

console.log(ja);
console.log(en);

const key = "key-string";

const obj5 = {
    [key]: "value"
};

console.log(obj5[key]);

//プロパティを初期化時以外に追加すると分かりにくくなるので駄目なコード
function changeproperty(obj6) {
    obj6.key = "value";
}
const obj6 = {};
changeproperty(obj6);
console.log(obj6.key);






















