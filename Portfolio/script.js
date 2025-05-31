let drop=document.querySelector(".drop");
let dropdown=document.querySelector(".dropdown");
const expp = document.querySelector('.expp');
const exp = document.querySelector('.exp');

// Hide by default
exp.style.display = 'none';

expp.addEventListener('mouseover', () => {
  exp.style.display = 'flex';
});

expp.addEventListener('mouseout', () => {
  exp.style.display = 'none';
});



drop.addEventListener('click',function(){
    if(dropdown.style.display==="none"){
    dropdown.style.display="flex"
    }else{
        dropdown.style.display="none"
    }
});




