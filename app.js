


//---------------ДОДАВАННЯ ТОВАРУ В КОРЗИНУ---------------


let productCountEl = document.getElementById('products_count');
// console.log(productCountEl);

let addToCartButtons = document.querySelectorAll('.add_to_cart')
// console.log(addToCartButtons);

for(let i=0; i<addToCartButtons.length; i++){
    addToCartButtons[i].addEventListener("click", function(){
        let prevProductsCount = +productCountEl.textContent;
        productCountEl.textContent = prevProductsCount +1
    })
}




// -----------------------------Варіант №1 LIKES-------------------------


// let likeButtons = document.querySelectorAll('#like_products');

// console.log(likeButtons);
// for(let i=0; i<likeButtons.length;i++){
//     likeButtons[i].addEventListener('click', function(){
//         if(this.classList.contains("liked")){
//             this.classList.remove("liked")
//         }else{
//             this.classList.add("liked")
//         }
//     })
// }


//-------------- Варіант №2 LIKES ---------------

let likeButtons = document.querySelectorAll('#like_products');


for(let i=0; i<likeButtons.length;i++){
    likeButtons[i].addEventListener('click', function(){
        this.classList.toggle("liked")
    })
}





//---------------МОДАЛЬНЕ ВІКНО ---------------

 let moreDetailsButtons = document.querySelectorAll('.more_dets');
//  console.log(moreDetailsButtons);
 let modal = document.querySelector(".modal")
//  console.log(modal);
 let closeBtn = document.querySelector(".btn-close");

//  console.log(closeBtn);

 moreDetailsButtons.forEach(function(btn){
     btn.addEventListener("click",openModal )

 })
 function openModal(){
    modal.classList.add("show")
    modal.classList.remove("hide")

}
 function closeModal(){
     modal.classList.add("hide");
     modal.classList.remove("show")
 }

 closeBtn.addEventListener("click",closeModal);


 modal.addEventListener('click',function(e){
     if(e.target === modal){
         closeModal()
     }
 })



//---------------МОДІЛЬНЕ ВІКНО, ЩО ВІДКРИВАЄТЬСЯ НА ПОЛОВИНІ ВИСОТИ СТОРІНКИ ---------------


// console.log(document.documentElement.scrollHeight);// висота  сторінки
// let half = document.documentElement.scrollHeight/2;
function openModalByScroll(){
    if(window.pageYOffset >=document.documentElement.scrollHeight/2){
        openModal()
        window.removeEventListener("scroll",openModalByScroll)

    }
}
                                                                                             
window.addEventListener("scroll", openModalByScroll)




//---------------SLIDER ---------------

$(".slider-block").slick({
    dots:true,
    autoplay:true,
    autoplaySpeed:1000,
})

// ------------------CALCULATOR-------

let plusBtn = document.querySelectorAll(".plus");
console.log(plusBtn);


let  minusBtn = document.querySelectorAll(".minus");
// console.log(minusBtn);

let calcNum = document.querySelectorAll(".num");
// console.log(calcNum);


// ----- #1-------

for(let i=0; i<plusBtn.length; i++){
plusBtn[i].addEventListener("click",function(){
    calcNum[i].innerText = +calcNum[i].innerText +1;
})
}

for(let i=0; i<plusBtn.length; i++){
minusBtn[i].addEventListener("click",function(){
    calcNum[i].innerText = +calcNum[i].innerText -1;
    if(calcNum[i].innerText  < 0){
        calcNum[i].textContent = 0;
    }
})
}



// ----- #2-------

// for(let i=0; i<plusBtn.length; i++){
// plusBtn[i].addEventListener("click",function(){
//     console.log(calcNum)
//     let numberIndicator = +calcNum[i].textContent;
//     calcNum[i].textContent= numberIndicator +1 ;
// })
// }
// for(let i=0; i<plusBtn.length; i++){
// minusBtn[i].addEventListener("click",function(){
//     let numberIndicator = +calcNum[i].textContent;
//     calcNum[i].textContent= numberIndicator -1;
//     if(calcNum[i].textContent <0){
//         calcNum[i].textContent = numberIndicator;
//     }
//  })
// }

