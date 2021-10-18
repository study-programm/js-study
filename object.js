// const test = new Object();
const test = {
    test1: 10,
    test2: 20,
    test3: 30
}

console.log(Object.values(test));

const postalCode = "123-4567";

// function checkPostalCode(string) {
//     const replaced = string.replace("-", "");
//     const length = replaced.length;
//     if (length === 7) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(checkPostalCode(postalCode));

const postal = {

    postalCode: "123-4567",

    //this.postalCode
    checkPostalCode() {
        const replaced = this.postalCode.replace("-", "").length;
        if (replaced === 7) {
            return true;
        } else {
            return false;
        }
    }

};

console.log(postal.checkPostalCode());