let bigLetter = (arr,bigletter ) => {
    let arrFinal=[];

    for(let i = 0;i<arr.length;i++)
    {

        if(arr[i][0]==bigletter){
            arrFinal.push(arr[i]);
        }

    }
    console.log(arrFinal);
}

bigLetter(["salam","sagol","haJy","necesen"] ,"h" );