// JavaScript
document.addEventListener('DOMContentLoaded', (event) => {
    let circle = document.querySelector('.circle');
    let radius = circle.r.baseVal.value;
    let circumference = radius * 2 * Math.PI;
  
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;
  
    function setProgress(percent) {
      const offset = circumference - (percent / 100) * circumference;
      circle.style.strokeDashoffset = offset;
    }
  
    const percentage = parseInt(document.querySelector('.percentage').textContent);
    setProgress(percentage);
  });
  