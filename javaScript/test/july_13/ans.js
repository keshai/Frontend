const info = async()=>{
      try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        console.log(data);
            
      }
      catch(error){
            console.log(error);
      }
}
info();