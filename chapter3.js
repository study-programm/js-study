
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

console.log(typeof input);

const num = Number(input);

console.log(typeof num);

console.log(num);