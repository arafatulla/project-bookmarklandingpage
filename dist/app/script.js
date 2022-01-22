const openEr = document.querySelector('.mobile-menu');
const nav = document.querySelector('.navbar');

openEr.addEventListener('click', function (){
    // console.log('hell0')
    if(nav.classList.contains('active')){
        nav.classList.remove('active');
    }else{
        nav.classList.add('active');
    }
})