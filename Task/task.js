let findSpaces = () =>{
    let sentence=prompt("Enter sentence : ");
    let spaces=sentence.split(' ').length-1;
    return spaces;
}
console.log(findSpaces());