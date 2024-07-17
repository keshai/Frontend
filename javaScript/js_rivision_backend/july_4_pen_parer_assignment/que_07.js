// 7.Create a function named removeLastElement that accepts an array. Each 
// time the function is called, it should return a new array with the last 
// element removed, without mutating the original array. Use the spread 
// operator and array methods to achieve this.
// const initialArray = [1, 2, 3, 4];
// const newArray1 = removeLastElement(initialArray); // [1, 2, 3]
// const newArray2 = removeLastElement(newArray1); // [1, 2]


function removeLastElement(array)
{
    return array.slice(0,-1);
}

const initialArray = [1, 2, 3, 4];
const newArray1 = removeLastElement(initialArray); 
const newArray2 = removeLastElement(newArray1); 

console.log(initialArray);
console.log(newArray1);
console.log(newArray2);