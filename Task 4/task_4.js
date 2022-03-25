let arr=[];
let bigArr=[];
let middle=0;
let sum=0;
let arrNumbers;
let arrLenght=parseInt(prompt("Enter size of array"));
for(let i=0;i<arrLenght;i++){
    arrNumbers=parseInt(prompt());
    arr.push(arrNumbers);
}
for(let i=0; i<arr.length; i++){
    sum=sum+arr[i];
    middle=sum/arrLenght;
}
for(let j=0;j<arr.length;j++)
{
    if(arr[j]>middle){
        bigArr.push(arr[j]);
    }
}
console.log(bigArr);