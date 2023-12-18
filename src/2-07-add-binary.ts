// https://leetcode.com/problems/add-binary/

function addBinary(a: string, b: string): string {
    let aReversedArr: Array<string> = [...a].reverse();
    let bReversedArr: Array<string> = [...b].reverse();
    let totalReversedArr: Array<string> = [];
    let longerArr: Array<string> =
        aReversedArr.length > bReversedArr.length ? aReversedArr : bReversedArr;
    let temp1: string;
    let temp2: string;
    let temp3: number;
    let carryOver: number = 0;

    for (let [index, value] of longerArr.entries()) {
        temp1 =
            typeof aReversedArr[index] !== "undefined"
                ? aReversedArr[index]
                : "0";
        temp2 =
            typeof bReversedArr[index] !== "undefined"
                ? bReversedArr[index]
                : "0";
        temp3 = Number(temp1) + Number(temp2) + carryOver;
        if (temp3 > 1) {
            carryOver = 1;
            temp3 = temp3 - 2;
        } else {
            carryOver = 0;
        }
        totalReversedArr.push(String(temp3));
    }
    if (carryOver) {
        totalReversedArr.push("1");
    }

    return totalReversedArr.reverse().join("");
}
