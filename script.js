const imgs = document.querySelectorAll(".header-slider ul img");
const prev_btn = document.querySelector(".control_prev");
const next_btn = document.querySelector(".control_next");

let n = 0;

function chnageSlide(){
    for (let i = 0; i < imgs.length; i++) {
        imgs [i].style.display = 'none';
    }
    imgs [n].style.display = 'block';
}
chnageSlide();

prev_btn.addEventListener('click',(e)=>{
    if(n > 0){
        n--;
    }else{
        n= imgs.length - 1;
    }
    chnageSlide();
})
next_btn.addEventListener('click',(e)=>{
    if(n < imgs.length -1){
        n++;
    }else{
        n=0;
    }
    chnageSlide();
})

const scrollContainer = document.querySelectorAll('.products');
for (const item of scrollContainer) {
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
}
