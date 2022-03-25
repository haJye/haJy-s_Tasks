let myFunction = () =>{
    let arr1=[];
    let arr2=[];
    let arr3=[];
    let words1;
    let words2;
    let arrLenght1=parseInt(prompt("Enter size of Array1: "));
    for(let i=0;i<arrLenght1;i++){
        words1=prompt("Enter something: ");
        arr1.push(words1);
    }
    let arrLenght2=parseInt(prompt("Enter size of Array2: "));
    for(let i=0;i<arrLenght2;i++){
        words2=prompt("Enter something: ");
        arr2.push(words2);
    }
    for(let i = 0; i<arr1.length;i++){
        for (let j = 0; j<arr2.length;j++)
        {
            if(arr1[i]==arr2[j])
            {
                arr3.push(arr1[i]);
            }
        }
    }
    console.log(arr3);
}
myFunction();