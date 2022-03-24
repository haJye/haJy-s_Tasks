let arr = [];
let arr1 = [];
let n = prompt("Enter length of Array: ");
for (let i = 0; i < n; i++ ){
    let num=parseInt(prompt("Enter numbers of Array: "));
    arr.push(num);
}
console.log(arr);
for(let j = 0; j<arr.length; j++)
{   
    if(arr[j]%2==0){
        arr1.push(arr[j]);
    }
}
console.log(arr1);