const sign_in_btn= document.querySelector('#sign-in-button');
const sign_up_btn= document.querySelector('#sign-up-button');
const container= document.querySelector('.container');
const check1= document.querySelector('.input1');
const check2= document.querySelector('.input2');
const check3= document.querySelector('.input3');

sign_up_btn.addEventListener('click', ()=>{
    container.classList.add('sign-up-mode');
});
sign_in_btn.addEventListener('click', ()=>{
    container.classList.remove('sign-up-mode');
    check1.value = '';
    check2.value = '';
    check3.value = '';
});