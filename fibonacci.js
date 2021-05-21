var fibonacci = n => {
    var bLast = 0, last = 0;
    for(let i = 0; i <= n; i++){
        const temp = bLast + last;
        bLast = last;
        last = temp;
    }
    return last;
}