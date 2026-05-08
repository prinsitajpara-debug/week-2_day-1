let num=[1,2,2,3,4,4];
function removeDuplicates(num) {
    let num2 = [];
    for (let i = 0; i < num.length; i++) {
        if (num2.includes(num[i])===false) {
            num2.push(num[i]);
        }
    }
    return num2;
}
console.log(removeDuplicates(num));