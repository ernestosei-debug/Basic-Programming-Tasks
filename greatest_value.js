//Finding the element with the greatest value

arr = [42, 13, 25, 84, 8];

//Using a built-in functions
Math.max(...arr);
sortedArr = arr.sort().pop();

//Using a for loop
var val = arr[0]
for(i = 1; i < arr.length; i++) if(val < arr[i]) val = arr[i];
