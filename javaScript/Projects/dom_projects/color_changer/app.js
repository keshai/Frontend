const buttons = document.querySelectorAll('.color');
const body = document.querySelector('.contain');

buttons.forEach((button)=>{
    console.log(button);
    button.addEventListener('click', (e)=>{ console.log(e), console.log(e.target.title) 
        if(e.target.title ==='red'){body.style.backgroundColor = e.target.title}
        if(e.target.title ==='green'){body.style.backgroundColor = e.target.title}
        if(e.target.title ==='blue'){body.style.backgroundColor = e.target.title}
        if(e.target.title ==='pink'){body.style.backgroundColor = e.target.title}
    })

})
