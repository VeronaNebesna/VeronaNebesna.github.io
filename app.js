let productCountEl = document.getElementById('products_count');
console.log(productCountEl)

let addToCartButtons = document.querySelectorAll('.add_to_cart')
console.log(addToCartButtons);

for(let i=0; i<addToCartButtons.length; i++){
    addToCartButtons[i].addEventListener("click", function(){
        let prevProductsCount = +productCountEl.textContent;
        productCountEl.textContent = prevProductsCount +1
    })
}



// -----------------------------Варіант №1-------------------------

// let likes = document.querySelectorAll("#like_products");
// console.log(likes);

// for(let i=0; i < likes.length; i++){
//     likes[i].addEventListener("click", function(){

//         if(likes[i].style.backgroundColor !=="rgb(44, 113, 184)"){
//             likes[i].style.backgroundColor = "rgb(44, 113, 184)";
//             likes[i].style.backgroundImage = "url(images/like_white.png)" ;

//         } else{
//             likes[i].style.backgroundColor = "rgba(255, 255, 255,0)";
//             likes[i].style.backgroundImage = "url(images/like_blue.png)"
//         }

//     })

// }



// -----------------------------Варіант №2-------------------------



let likes = document.querySelectorAll('#like_products');
// console.log(likes);
 for(let i=0; i<likes.length; i++){
     likes[i].addEventListener('click',function(e){
         let target = e.target;
        //  console.log(target);
         
          if (target.style.backgroundColor !== 'rgb(44, 113, 184)'){
            target.style.backgroundColor = 'rgb(44, 113, 184)';
            target.style.backgroundImage = "url(images/like_white.png)"
         }else{
            target.style.backgroundColor = "rgba(255, 255, 255,0)";
            target.style.backgroundImage = "url(images/like_blue.png)"
            
         }
     })
 }