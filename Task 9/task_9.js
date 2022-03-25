let findLetter = (final) => {
    for(let i = 0; i<final.length;i++)
    {
        let count=0;
        for(let j=0;j<final.length;j++)
        {
            if(final[i]==final[j] && i>j )
            {
                break;
            }
            if(final[i]==final[j]){
                count++;
            }
        }
        if(count>0){
            console.log(final[i]+" => " + count);
        }
    }
}
findLetter("haJy");