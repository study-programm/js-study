//オブジェクトの複数作る練習

/*しまぶー　あっちゃん　ヒカキン　はじめしゃちょー 
ビジネス系　エンタメ系
Youtuber */
let youtuber = {

    list: {
        business: {
            youtuber: [
                { name: "simabu", age: 20, sex: "man", profession: "Engineer", teachProgramming() { } },
                { name: "atsuhiko", age: 30, sex: "man", profession: "actor", teachHistory() { } }
            ],
            teach() { }
        },
        entertainment: {
            youtuber: [
                { name: "hajimesyacho", sex: "man" },
                { name: "HIKAKIN", sex: "man" }
            ],
            makeSmile() { }
        },
    },
    plan() { },
    uploadVideo() { }
};

//ブラケット記法は基本的に使わない。変数を入れるときだけで基本的にはドット記法で書く
console.log(youtuber["list"]["entertainment"]["youtuber"][1]["name"]);
//↓同じので
console.log(youtuber.list.entertainment.youtuber[1].name);

youtuber.list.business.youtuber[0].teachProgramming();
youtuber.plan();
youtuber.list.entertainment.makeSmile();
