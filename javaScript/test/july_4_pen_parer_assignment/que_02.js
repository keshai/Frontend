
// 2.  Create an object named product with at least 5 keys (e.g., productId, 
// productName, price, category, tags). One of the keys should have an array 
// as its value. Then, create a function that accepts this object in 
// destructured format, prints all the information, and calls another 
// function that will pass the key array into another function. 
// Additionally, call a function that will pass the object as a key into 
// another function and print all the keys.


const product = {
      "productId": 1,
      "productName": "blueFloraltop",
      "price": 800,
      "category": "women",
      "tags": ["fashion","style","clothing"]
  }
  
  function show(tags)
  {
      console.log(tags);
  }
  
  function list({productId,productName,price,category,tags})
  {
      console.log(productId);
      console.log(productName);
      console.log(price);
      console.log(category);
      console.log(tags);
  
      show(tags);
  }
  
  function print(product)
  {
      console.log(product.productId);
      console.log(product.productName);
      console.log(product.price);
      console.log(product.category);
      console.log(product.tags);
  }
  
  list(product);
  print(product);
  