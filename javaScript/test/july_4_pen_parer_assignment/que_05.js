// 5.Create an object named project with at least 5 keys (e.g., projectId, 
// projectName, deadline, teamMembers, tasks). One of the keys should have 
// an array as its value. Then, create a function that accepts this object 
// in destructured format, prints all the information, and calls another 
// function that will pass the key array into another function. Additionally,
//  call a function that will pass the object as a key into another function 
// and print all the keys.

const project = {
      "projectId": 1234,
      "projectName": "Mongodb",
      "deadline": "25-01-2024",
      "teamMembers": ["Pooja","suman","aditya"],
      "tasks": "dataaddition"
  }
  
  function show(teamMembers)
  {
      console.log(teamMembers);
  }
  
  function projectdetail({projectId, projectName, deadline, teamMembers, tasks})
  {
      console.log(projectId);
      console.log(projectName);
      console.log(deadline);
      console.log(teamMembers);
      console.log(tasks);
  
      show(teamMembers);
  }
  
  function print(project)
  {
      console.log(project.projectId);
      console.log(project.projectName);
      console.log(project.deadline);
      console.log(project.teamMembers);
      console.log(project.tasks);
  }
  
  projectdetail(project);
  print(project);