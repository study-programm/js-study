//オブジェクト　→　値と関数を持っているもの

//値→property、関数→method

const stringer = "12";

console.log(typeof stringer);

//concat例文

const str1 = "Hello";
const str2 = "Worldテストです";

console.log(str1.concat(str2));
console.log(str2.concat(str1));

console.log(str1.concat("皆さん", "良い一日を"));

//trimオブジェクト 両端の空白を消す

const greet = (" こんばんは、良いお天気ですね ");

console.log(greet);

console.log(greet.trim());

//substring　複数 1から始まって3以降は切り捨て

const str = 'Mozilla';
console.log(str.substring(1, 3));

//単体の場合は 2未満が切り捨てで表示
console.log(str.substring(2));

const replaceTarget = "Gitは難しい、多分難しい";

console.log(replaceTarget.replace("難しい", "頑張れば簡単"));

//Mapオブジェクト
const myMap = new Map();

myMap.set("id", 3);
myMap.set("age", 170);
console.log(myMap);

console.log(myMap.get("age"));

const variable = myMap.values();

//for ofで順番に値を取り出す
for (test_value of variable) {
    console.log(test_value);
}

//Arrayとコールバック
const fruits = [
    "りんご", "ばなな"
];

fruits.push("みかん");

console.log(fruits);

// callback 関数の中にまた関数
fruits.forEach(apple => console.log(apple));

//一般的な関数の作り方
// function getItem() {

// }

//ES6　アロー関数
const getItem = () => console.log("アロー");
getItem();

//関数の名前なし
fruits2 = [
    "あいう", "えおか"
];

fruits2.push("きくけこ");

fruits2.forEach(fruity => console.log(fruity));

//Array.filterメソッド　条件に当てはまっているものだけを使う
const words = ["apple", "banana", "orange", "cherry", "aaa", "aa"];

//5文字以下を取り出す
const results = words.filter(word => word.length < 5);

console.log(results);

//Array.findメソッド filterと違って最初の値だけを返す。
const array1 = ["テスト", "て", 300, 4000];
//最初の2文字以下を取り出す
const found = array1.find(finds => finds.length < 2);
console.log(`${found}と表示がされました`);

//Array.map 配列を元に新しい配列を作る

const userList = [10, 200, 300, 400];

const userListMap = userList.map(now => `${now * 2}と表示されました`);

console.log(userListMap);