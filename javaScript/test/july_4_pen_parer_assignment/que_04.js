// 4.Create an object named customer with at least 5 keys (e.g., customerId,
//  customerName, email, phoneNumbers, addresses). One of the keys should 
// have an array as its value. Then, create a function that accepts this 
// object in destructured format, prints all the information, and calls 
// another function that will pass the key array into another function. 
// Additionally, call a function that will pass the object as a key into 
// another function and print all the keys.

const customer = {
      "customerId": 3,
      "customerName": "Raj",
      "email": "raj@gmail.com",
      "phoneNumbers": 7766554433,
      "addresses": ["Goa","Rajasthan"]
  }
  
  function show(addresses)
  {
      console.log(addresses);
  }
  
  function customerInfo({customerId,customerName, email, phoneNumbers, addresses})
  {
      console.log(customerId);
      console.log(customerName);
      console.log(email);
      console.log(phoneNumbers);
      console.log(addresses);
  
      show(addresses);
  }
  
  function print(customer)
  {
      console.log(customer.customerId);
      console.log(customer.customerName);
      console.log(customer.email);
      console.log(customer.phoneNumbers);
      console.log(customer.addresses);
  }
  
  customerInfo(customer);
  print(customer);