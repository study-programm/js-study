//オブジェクト　→　値と関数を持っているもの

//値→property、関数→method

const stringer = "12";

console.log(typeof stringer);

//concat例文

const str1 = "Hello";
const str2 = "Worldテストです";

console.log(str1.concat(str2));
console.log(str2.concat(str1));

console.log(str1.concat("皆さん","良い一日を"));

//trimオブジェクト 両端の空白を消す

const greet = (" こんばんは、良いお天気ですね ");

console.log(greet);

console.log(greet.trim());