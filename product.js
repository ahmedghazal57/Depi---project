



// product page
let bag_img= document.getElementById("bag_img");
let bag_red =document.getElementById("color_circle2");
let bag_orange =document.getElementById("color_circle1");
let bag_blue =document.getElementById("color_circle3");
if(bag_red!=null){
    bag_red.onclick=function(){
        bag_img.src="image/output-onlinepngtools.png";
    }
    bag_orange.onclick=function(){
        bag_img.src="image/p5.png";
    }
    bag_blue.onclick=function(){
        bag_img.src="image/bag_blue.png";
    }
}

let btnEl=document.querySelector(".size");
let size=document.querySelectorAll(".size");
size.forEach(btnEl => {
    btnEl.addEventListener('click',()=>{
        document.querySelector(".special")?.classList.remove("special");
        btnEl.classList.add("special");
    })
})

let add_cart=document.getElementById("add_cart");
add_cart.addEventListener('click',()=>{
    if(add_cart.classList.contains("special2")){
        add_cart.classList.remove("special2");
        add_cart.innerHTML='Add to cart';
    }
    else{
        add_cart.classList.add("special2");
        add_cart.innerHTML='Added to cart';
    }
    
})

// product page
