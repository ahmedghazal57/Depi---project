
// open &  close menu 
var menu = document.querySelector('#menu');
function open_menu(){
    menu.classList.add("active");
}
function close_menu(){
    menu.classList.remove("active");
}


const productsArray = [
  {
    id: 0,
    img: "image/p1.png",
    name: "Girls Heel",
    price: 12.3,
    old_price: 15.5,
  },
  {
    id: 1,
    img: "image/p2.png",
    name: "Men Hoodie",
    price: 3.2,
    old_price: 5.4,
  },
  {
    id: 2,
    img: "image/p3.png",
    name: "Smart Watch",
    price: 50,
    old_price: 60,
  },
  {
    id: 3,
    img: "image/p4.png",
    name: "Men T-Shirt",
    price: 10.5,
    old_price: 15,
  },
  {
    id: 4,
    img: "image/p5.png",
    name: "Hand Bag",
    price: 100.5,
    old_price: 120.3,
  },
  {
    id: 5,
    img: "image/p6.png",
    name: "Sport Shoes",
    price: 32.5,
    old_price: 35.3,
  },
  {
    id: 6,
    img: "image/p7.png",
    name: "Girls Heel",
    price: 20.1,
    old_price: 30.2,
  },
  {
    id: 7,
    img: "image/p8.png",
    name: "Mens Jeans",
    price: 65.5,
    old_price: 100,
  },
  {
    id: 8,
    img: "image/p9.jpg",
    name: "Dark Pant",
    price: 13.5,
    old_price: 15.1,
  },
  {
    id: 9,
    img: "image/p10.jpg",
    name: "Mwalk Billies",
    price: 16.5,
    old_price: 10.5,
  },
  {
    id: 10,
    img: "image/p11.jpg",
    name: "Sweet Shirt",
    price: 10.5,
    old_price: 15.5,
  },
  {
    id: 11,
    img: "image/p12.jpg",
    name: "Black T-Shirt",
    price: 5.1,
    old_price: 6.5,
  },
  {
    id: 12,
    img: "image/p13.png",
    name: "Hand Bag",
    price: 20.5,
    old_price: 25,
  },
  {
    id: 13,
    img: "image/p14.png",
    name: "Girls Heel",
    price: 20.5,
    old_price: 25,
  },
  {
    id: 14,
    img: "image/p15.png",
    name: "Sport Shoes",
    price: 20.5,
    old_price: 25,
  },
  {
    id: 15,
    img: "image/p16.png",
    name: "Mens Jeans",
    price: 20.5,
    old_price: 25,
  },
  {
    id: 16,
    img: "image/p17.png",
    name: "Dark Pant",
    price: 20.5,
    old_price: 25,
  },
  {
    id: 17,
    img: "image/p18.png",
    name: "Mwalk Billies",
    price: 20.5,
    old_price: 25,
  },
  {
    id: 18,
    img: "image/p19.png",
    name: "Sweet Shirt",
    price: 20.5,
    old_price: 25,
  },
  {
    id: 19,
    img: "image/p20.png",
    name: "Black T-Shirt",
    price: 20.5,
    old_price: 25,
  },
];

all_products_details = productsArray;

let products_div = document.getElementById("products_div");

function goToProductPage(id) {
  // تخزين الـ id الخاص بالمنتج في sessionStorage
  sessionStorage.setItem("selectedProductId", id);

  // الانتقال إلى صفحة product_page0.html
  window.location.href = "product_page0.html";
}
product_Js = document.querySelector(".product_section");
productsArray.forEach((product) => {
  products_div.innerHTML += `
        <div class="product swiper-slide" onclick="goToProductPage(${product.id});set_details(${product.id});">
            <div class="icons">
              <span><i class="fa-solid fa-cart-plus"></i></span>
              <span><i class="fa-solid fa-heart"></i></span>
              <span><i class="fa-solid fa-share"></i></span>
            </div>
            <div class="img_product">
              <img src="${product.img}" alt="" />
            </div>
            <div class="detalis_products">
              <div class="details_about_product">
                <h3 class="name_product">
                  <a href="product_page${product.id}.html">${product.name}</a>
                </h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <div class="stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <div class="price">
                  <p>
                    <span>$${product.price}</span>
                    <span
                      style="text-decoration: line-through; color: #666666af"
                      >$${product.old_price}</span
                    >
                  </p>
                </div>
              </div>
              <div class="cart_bottom">
                <span><i class="fa-solid fa-cart-plus"></i></span>
              </div>
            </div>
          </div>
    `;
});

// window.onload = function() {
//     // جلب الـ id المخزن في sessionStorage
//     const productId = sessionStorage.getItem('selectedProductId');

//     if (productId) {
//         // ابحث عن المنتج باستخدام الـ id
//         const selectedProduct = productsArray.find(product => product.id == productId);

//         if (selectedProduct) {
//             // جلب الـ div الذي سيتم إدخال المحتوى فيه
//             const productDiv = document.getElementById('product_Js');

//             if (productDiv) {
//                 // إضافة محتوى المنتج إلى الـ div
//                 productDiv.innerHTML = `
//                     <div class="container">
//                         <div class="row pt-3">
//                           <div class="col product_imagee d-flex justify-content-center align-items-center">
//                             <a href="${selectedProduct.img}" data-lightbox="models">
//                               <img id="bag_img" src="${selectedProduct.img}" alt="${selectedProduct.name}" />
//                             </a>
//                           </div>
//                           <div class="product_details col d-flex flex-column gap-2">
//                             <p class="h2 m-0 text-capitalize">${selectedProduct.name}</p>
//                             <p class="h1 m-0">$${selectedProduct.price}</p>
//                             <div class="d-flex product_stars">
//                               <i class="fa-solid fa-star"></i>
//                               <i class="fa-solid fa-star"></i>
//                               <i class="fa-solid fa-star"></i>
//                               <i class="fa-solid fa-star"></i>
//                               <i class="fa-regular fa-star"></i>
//                             </div>
//                             <p class="h3 m-0">Product details:</p>
//                             <p class="m-0">Lorem ipsum dolor sit amet consectetur.</p>
//                             <p class="h3 m-0 mb-1">Select size:</p>
//                             <div class="product_sizes d-flex gap-3 mb-2">
//                               <button class="btn text-capitalize size" type="button">sm</button>
//                               <button class="btn text-capitalize size" type="button">md</button>
//                               <button class="btn text-capitalize size" type="button">lg</button>
//                             </div>
//                             <button class="btn col-lg-6 text-capitalize add_cart" type="button" id="add_cart">Add to cart</button>
//                           </div>
//                         </div>
//                     </div>
//                 `;
//             } else {
//                 console.error("Element with id 'product_Js' not found.");
//             }
//         } else {
//             console.error("Product not found.");
//         }
//     } else {
//         console.error("No product ID found in sessionStorage.");
//     }
// };

// let product_Js=document.getElementById("product_Js");
// let products01=[];
// function ProductPage(id){
//     products01=productsArray[id];
//     console.log("ProductPage");
//     product_Js.innerHTML +=`
//     <div class="container">
//         <div class="row pt-3">
//           <div
//             class="col product_imagee d-flex justify-content-center align-items-center"
//           >
//             <a href="image/p1.png" data-lightbox="models"
//               ><img id="bag_img" src="image/p1.png"
//             /></a>
//           </div>

//           <div class="product_details col d-flex flex-column gap-2">
//             <p class="h2 m-0 text-capitalize">woman bag</p>
//             <p class="h1 m-0">$250</p>
//             <div class="d-flex product_stars">
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-regular fa-star"></i>
//             </div>
//             <p class="h3 m-0">Product detailes:</p>
//             <p class="m-0">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
//               aperiam aut laboriosam qui ea, quam impedit officiis dignissimos
//               odio possimus autem reiciendis quasi, error voluptate ratione
//               perspiciatis facilis iste? Labore.
//             </p>

//             <p class="h3 m-0 mb-1">select size:</p>
//             <div class="product_sizes d-flex gap-3 mb-2">
//               <button class="btn text-capitalize size" type="button">sm</button>
//               <button class="btn text-capitalize size" type="button">md</button>
//               <button class="btn text-capitalize size" type="button">lg</button>
//             </div>
//             <button
//               class="btn col-lg-6 text-capitalize add_cart"
//               type="button"
//               id="add_cart"
//             >
//               add to cart
//             </button>
//           </div>
//         </div>
//       </div>
//     `;

// }

// Open close filter
var filter = document.querySelector(".filters");
function open_close_filter() {
  filter.classList.toggle("active");
}
