//vowel count in a string
let str="javascript";
function vowels(str) {
    let count=0;
    for (let i=0;i<str.length;i++){
        if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
            count++;
    }
}
return count;
}       
console.log(vowels(str));