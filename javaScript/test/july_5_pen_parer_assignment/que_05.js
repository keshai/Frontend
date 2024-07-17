// 5. Create an object named `library` with at least 5 keys (e.g., 
// `libraryId`, `libraryName`, `location`, `books`, `staff`). One of the 
// keys should have an array as its value. Then, create a function that 
// accepts this object in a destructured format, prints all the information, 
// and calls another function that will pass the key array into another 
// function. Additionally, call a function that will pass the object as a 
// key into another function and print all the keys.


const library = {
      libraryId: 143,
      libraryName: "Jaipur Library",
      location: "Jaipur",
      books: ["Life of Pie","The white tiger","A Fine Balance"],
      staff: "excellent"
  }
  
  function display(books)
  {
      console.log(books);
  }
  
  function librarydetails({libraryId, libraryName, location, books, staff})
  {
      console.log(libraryId);
      console.log(libraryName);
      console.log(location);
      console.log(books);
      console.log(staff);
  
      display(books);
  }
  
  function print(library)
  {
      console.log(library.libraryId);
      console.log(library.libraryName);
      console.log(library.location);
      console.log(library.books);
      console.log(library.staff);
  }
  
  librarydetails(library);
  print(library);