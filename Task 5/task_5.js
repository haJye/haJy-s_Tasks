let myFunction = () =>{
let arr=[];
let words;
let arrLenght=parseInt(prompt("Enter size of Array: "));
for(let i=0;i<arrLenght;i++){
    words=prompt("Enter something: ");
    arr.push(words);
}
console.log(arr.join());
}
myFunction();