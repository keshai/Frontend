// const slides = document.querySelectorAll(".slide");
// let counter = 0;

// slides.forEach((slide, index) => {
//     slide.style.left = `${index * 100}%`;
// });

// const slideImage = () => {
//     slides.forEach((slide) => {
//         slide.style.transform = `translateX(-${counter * 100}%)`;
//     });
// };

// document.querySelector("#btn1").addEventListener("click", () => {
//     counter--;
//     slideImage();
// });

// document.querySelector("#btn2").addEventListener("click", () => {
//     counter++;
//     slideImage();
// });

const slides = document.querySelectorAll(".slide");
var counter = 0

slides.forEach((slide, index)=>{
    slide.style.left = `${index * 100}%`
})

const slideImage = ()=>{
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}

document.querySelector('#btn1').addEventListener('click',()=>{
    counter--
    slideImage()
})
document.querySelector('#btn2').addEventListener('click',()=>{
    counter++
    slideImage()
})
