// Data fetch hone ke baad, pehle user ka email extract karo using object 
// destructuring.

function objdestructure(data)
{
    const {email} = data[0];
    console.log(email);
}

const list = async ()=>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        objdestructure(data);
    }
    catch(error){
        console.log(error);
    }
}

list();