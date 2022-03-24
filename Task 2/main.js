let arr = [];
let ortalama;
let sum=0;
let n=prompt("Enter lenght of Array: ");
for(let i=0;i<n;i++){
    let num =parseInt(prompt("Enter numbers: "));
    arr.push(num);
}
for(let k=0;k<arr.length;k++){
    sum=sum+arr[k];
    ortalama=sum/n;
}
console.log(ortalama);