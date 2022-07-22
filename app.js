const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('items');

if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('shownav')
    })
}
if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('shownav')
    })
}