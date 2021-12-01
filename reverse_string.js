//Write a function to reverse a string

//using a built-in function
let rev1 = s => {
    var reverse1 = "";
    reverse1 = s.split('').reverse().join("");
    return reverse1;
}
console.log(rev1("Ernest"));

//using a decrementing for loop
let rev2 = (s) => {
    reverse2 = "";
    for(j = s.length - 1; j >= 0; --j){
        reverse2 += s[j];
    }
    return reverse2;
}
console.log(rev2("Ernest"));
