
// 1. Create a user-defined callback function that sorts an array of book 
// prices in ascending or descending order based on the callback provided. 
// The master function should take an array and a callback function as 
// arguments.

function ascending(bookprice)
{
    for(let i=0; i<bookprice.length; i++)
    {
        for(let j=0; j<bookprice.length-1-i; j++)
        {
            if(bookprice[j]>bookprice[j+1])
            {
                temp = bookprice[j];
                bookprice[j]=bookprice[j+1];
                bookprice[j+1]=temp;
            }
        }
    }
    return bookprice;
}

function descending(bookprice)
{
    for(let i=0; i<bookprice.length; i++)
    {
        for(let j=0; j<bookprice.length-1-i; j++)
        {
            if(bookprice[j]<bookprice[j+1])
            {
                temp = bookprice[j];
                bookprice[j]=bookprice[j+1];
                bookprice[j+1]=temp;
            }
        }
    }
    return bookprice;
}


const result = (callbackfn,array)=>{
    return callbackfn(array);
}

const bookprice = [150,300,270,100,350,280];

console.log(result(ascending,bookprice));
console.log(result(descending,bookprice));
