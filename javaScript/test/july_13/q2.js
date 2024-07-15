// Data fetch hone ke baad, users ka ek naya array banao jinka company name 
// "Romaguera-Crona" hai using filter method.

const list = async ()=>{
      try{
         const response = await fetch("https://jsonplaceholder.typicode.com/users");
          const data = await response.json();
          // console.log(data);
          const companyname = data.filter((singledata)=>{
              if(singledata.company.name == "Romaguera-Crona")
              {
                  return(singledata);
              }
          })
          console.log(companyname);
      }
      catch(error){
          console.log(error);
      }
  }
  
  list();