let num=[3,7,2,9];

function findLargestNum(num) {
    let largest = num[0];   
    for (let i = 1; i < num.length; i++) {
        if (num[i] > largest) {
            largest = num[i];
        }
    }
    return largest;
}
console.log(findLargestNum(num)); 