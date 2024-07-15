// Data fetch hone ke baad, pehle user ka name extract karo using object 
// destructuring.

function datades(data)
{
    // data.map((element)=>{
    //     console.log(element.name);
    // })

    data.forEach(element => {
       const {name} = element;
       console.log(name);
    });
}

const list = async ()=>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        datades(data);
    }
    catch(error){
        console.log(error);
    }
}

list();