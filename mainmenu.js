const btn = document.querySelector('.restart-btn');
const checkbox = document.querySelector('#checkbox');
const label = document.querySelector('.label');
var ball = document.querySelector('.ball');
var toggle = false;
btn.addEventListener('click', ()=>{
    location.replace('gameplay.html');
})

checkbox.addEventListener('change',()=>
{
   toggle= true;
   document.body.classList.toggle('dark'); 
   label.classList.toggle('dark');
   
})