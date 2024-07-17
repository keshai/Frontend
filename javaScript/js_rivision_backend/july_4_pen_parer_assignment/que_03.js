// 3.Create an object named student with at least 5 keys (e.g., studentId, 
// studentName, grade, subjects, hobbies). One of the keys should have an 
// array as its value. Then, create a function that accepts this object in 
// destructured format, prints all the information, and calls another 
// function that will pass the key array into another function. Additionally,
//  call a function that will pass the object as a key into another function 
// and print all the keys.



const student = {
      "studentId": 135,
      "studentName": "shruti",
      "grade": 'A',
      "subjects": "English",
      "hobbies": ["Reading","drawing"]
  }
  
  function show(hobbies)
  {
      console.log(hobbies);
  }
  
  function studentIdentity({studentId, studentName, grade, subjects, hobbies})
  {
      console.log(studentId);
      console.log(studentName);
      console.log(grade);
      console.log(subjects);
      console.log(hobbies);
  
      show(hobbies);
  }
  
  function print(student)
  {
      console.log(student.studentId);
      console.log(student.studentName);
      console.log(student.grade);
      console.log(student.subjects);
      console.log(student.hobbies);
  }
  
  studentIdentity(student);
  print(student);