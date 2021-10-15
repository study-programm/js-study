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
ネストはわかりづらくなるのでなるべくしない模範例*/
if (signal === "blue") {
    if (speed >= 60) {
        console.log("スピード違反");
    } else if (signal === "yellow") {
        if (speed >= 60) {
            console.log("危ない");
        } else {
            
        }
    }
}