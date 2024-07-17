// 6. Create a function named `addToBookCollection` that accepts an array 
// of books and a new book to add. Each time the function is called, it 
// should return a new array with the new book added at the end, without 
// mutating the original array. Use the spread operator to achieve 
// this.

//    const initialCollection = [{ title: "Book1" }, { title: "Book2" }];
//    const newCollection1 = addToBookCollection(initialCollection, { title: "Book3" }); // [{ title: "Book1" }, { title: "Book2" }, { title: "Book3" }]
//    const newCollection2 = addToBookCollection(newCollection1, { title: "Book4" }); // [{ title: "Book1" }, { title: "Book2" }, { title: "Book3" }, { title: "Book4" }]


function addToBookCollection(array,newbook)
{
    return [...array,newbook];
}

const initialCollection = [{ title: "Book1" }, { title: "Book2" }];
const newCollection1 = addToBookCollection(initialCollection,{ title: "Book3" });
const newCollection2 = addToBookCollection(newCollection1, { title: "Book4" });

console.log(initialCollection);
console.log(newCollection1);
console.log(newCollection2);