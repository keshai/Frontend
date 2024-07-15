// Data fetch hone ke baad, users ka ek naya array banao jo pehle 5 users ko 
// contain karta ho using slice method.

const list = async ()=>{
      try{
          const response = await fetch("https://jsonplaceholder.typicode.com/users");
          const data = await response.json();
          const slicedarray = data.slice(0,5);
          console.log(slicedarray);
      }
      catch(error){
          console.log(error);
      }
  }
  
  list();