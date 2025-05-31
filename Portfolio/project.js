let drop=document.querySelector(".drop");
let dropdown=document.querySelector(".dropdown");











drop.addEventListener('click',function(){
    if(dropdown.style.display==="none"){
    dropdown.style.display="flex"
    }else{
        dropdown.style.display="none"
    }
});