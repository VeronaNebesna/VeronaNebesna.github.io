// let cart = document.body.firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.lastElementChild;

let cart_count = document.querySelector('.product_count');
let cart_img = document.querySelector('.cart')
console.log(cart_count);
console.log(cart_img);
cart_img.addEventListener("click",numberChange);
let i=0;
function numberChange(){
    cart_count.innerHTML = i++
}