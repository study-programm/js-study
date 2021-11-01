const obj7 = {
    key1: "value1",
    key2: "value2"
};

delete obj7.key2;

console.log(obj7);

const obj8 = {
    keyman: "value"
};

obj8.key = "keyChange";

console.log(obj8.key);

//Object.freezeメソッドを利用する場合は必ずstrict modeと合わせて使う
// const object2 = Object.freeze({ key: "value" });

// object2.key = "freeze";

// console.log(object2.key);

const obj9 = {};
console.log(obj9.notFound);
//存在しないプロパティにアクセスした為

const pro = {
    key: "value"
};

//keyがあれば実行
if (pro.key !== undefined) {
    console.log("keyのプロパティの値はundefinedではない");
} else {
    console.log("実行されない")
}

const obj10 = {
    key : undefined
};

if(obj10.key !==undefined){
    console.log("undefinedです");
}