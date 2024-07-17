// 7. Create a function named `removeLastReview` that accepts an array of 
// restaurant reviews. Each time the function is called, it should return 
// a new array with the last review removed, without mutating the original 
// array. Use the spread operator and array methods to achieve this.

//    const initialReviews = ["Review1", "Review2", "Review3"];
//    const newReviews1 = removeLastReview(initialReviews); // ["Review1", "Review2"]
//    const newReviews2 = removeLastReview(newReviews1); // ["Review1"]


function removeLastReview(array)
{
    return array.slice(0,-1)
}

const initialReviews = ["Review1", "Review2", "Review3"];
const newReviews1 = removeLastReview(initialReviews);
const newReviews2 = removeLastReview(newReviews1);

console.log(initialReviews);
console.log(newReviews1);
console.log(newReviews2);