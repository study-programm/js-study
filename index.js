//オブジェクト周りや連想配列の練習

const menber = {
    "name":"a",
    "age":17
};

console.log(menber["age"]);

//1クラスの中から一人の値を出す連想配列
const member_2 = {
    "kagawa":{
        "height":165,
        "age":17
    },
    "honda":{
        "height":170,
        "age":20
    }
}

console.log(member_2["honda"]["age"]);
console.log(member_2.honda.height);

const member_3 = {
    "kumi1":{
        "honda":{
            "like":"soccer",
            "dislike":"natto"
        },
        "kagawa":{
            "like":"tennis",
            "dislike":"human"
        },
        "kurimatu":{
            "like":"computer",
            "dislike":"now"
        }
    },
    "kumi2":{
        "syume":{
            "like":"lovestory",
            "dislike":"ow"
        },
        "yantya":{
            "like":"p",
            "dislike":"i"
        },
        "nowday":{
            "like":"d",
            "dislike":"k"    
        }
    }
}
//ブラケット記法
console.log(member_3["kumi2"]["syume"]["like"]);
//ドット記法
console.log(member_3.kumi1.kurimatu.dislike);
