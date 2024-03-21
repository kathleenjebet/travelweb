let formBtn=document.querySelector('#login_btn');
let loginForm=document.querySelector('.login_form');
let formClose=document.querySelector('#form_close');
let menu =document.querySelector('#menu_bar');
let navbar=document.querySelector(".navbar");

window.onscroll = ()=>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');

}


menu.addEventListener('click',()=>{
    menu.classList.remove('active');
    navbar.classList.remove('active');
});

formBtn.addEventListener('click',()=>{
    loginForm.classList.add('active');
});
formClose.addEventListener('click',()=>{
    loginForm.classList.remove('active');
});
