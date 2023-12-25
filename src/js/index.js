const burger=document.getElementById('burger');
const menu =document.getElementById('main-nav');
burger.addEventListener('click',()=>{if (menu.classList.contains('d-block')){menu.classList.remove('d-block')}else{menu.classList.add('d-block')}})