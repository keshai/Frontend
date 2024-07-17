// 2. Create an object named `book` with at least 5 keys (e.g., `bookId`, 
// `title`, `author`, `price`, `genres`). One of the keys should have an 
// array as its value. Then, create a function that accepts this object in 
// a destructured format, prints all the information, and calls another 
// function that will pass the key array into another function. Additionally, 
// call a function that will pass the object as a key into another function
//  and print all the keys.

const book = {
      bookId: 1001,
      title: "30 DAYS",
      author: "MARC REKLAU",
      price: 295,
      genres: ["Fiction","simple","fast-paced"]
  }
  
  function display(genres)
  {
      console.log(genres);
  }
  
  function bookdetails({bookId,title,author,price,genres})
  {
      console.log(bookId);
      console.log(title);
      console.log(author);
      console.log(price);
      console.log(genres);
  
      display(genres);
  }
  
  function print(book)
  {
      console.log(book.bookId);
      console.log(book.title);
      console.log(book.author);
      console.log(book.price);
      console.log(book.genres);
  }
  
  bookdetails(book);
  print(book);