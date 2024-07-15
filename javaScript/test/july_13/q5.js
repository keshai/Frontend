// Data fetch hone ke baad, user jiska id 3 hai, uska address extract karo using 
// object destructuring.

function extractobj(data)
{
    data.forEach(element => {
        if(element.id==3)
        {
            const {address} = element;
            console.log(address);
        }
    });
}

const list = async ()=>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        extractobj(data);
    }
    catch(error){
        console.log(error);
    }
}

list();