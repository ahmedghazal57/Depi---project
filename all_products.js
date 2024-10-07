const productsArray = [
    {
        id: 0,
        img: "image/p1.png",
        name: "Girls Heel",
        price: 12.3,
        old_price: 15.5
    },
    {
        id: 1,
        img: "image/p2.png",
        name: "Men Hoodie",
        price: 3.2,
        old_price: 5.4
    },
    {
        id: 2,
        img: "image/p3.png",
        name: "Smart Watch",
        price: 50,
        old_price: 60
    },
    {
        id: 3,
        img: "image/p4.png",
        name: "Men T-Shirt",
        price: 10.5,
        old_price: 15
    },
    {
        id: 4,
        img: "image/p5.png",
        name: "Hand Bag",
        price: 100.5,
        old_price: 120.30
    },
    {
        id: 5,
        img: "image/p6.png",
        name: "Sport Shoes",
        price: 32.50,
        old_price: 35.30
    },
    {
        id: 6,
        img: "image/p7.png",
        name: "Grils Heel",
        price: 20.10,
        old_price: 30.20
    },
    {
        id: 7,
        img: "image/p8.png",
        name: "Means Jeans",
        price: 65.50,
        old_price: 100
    },
    {
        id: 8,
        img: "image/p9.jpg",
        name: "Dark Pant",
        price: 13.5,
        old_price: 15.10

    },
    {
        id: 9,
        img: "image/p10.jpg",
        name: "Mwalk Billies",
        price: 16.50,
        old_price: 10.50
    },
    {
        id: 10,
        img: "image/p11.jpg",
        name: "Sweet Shirt",
        price: 10.5,
        old_price: 15.50 
    },
    {
        id: 11,
        img: "image/p12.jpg",
        name: "Black T-Shirt",
        price: 5.1,
        old_price: 6.50       
    },
    {
        id: 12,
        img: "image/p13.png",
        name: "Hand Bag",
        price: 20.50,
        old_price: 25
    },
    {
        id: 13,
        img: "image/p14.png",
        name: "Grils Heel",
        price: 20.50,
        old_price: 25
    },
    {
        id: 14,
        img: "image/p15.png",
        name: "Sport Shoes",
        price: 20.50,
        old_price: 25
    },
    {
        id: 15,
        img: "image/p16.png",
        name: "Means Jeans",
        price: 20.50,
        old_price: 25
    },
    {
        id: 16,
        img: "image/p17.png",
        name: "Dark Pant",
        price: 20.50,
        old_price: 25
    },
    {
        id: 17,
        img: "image/p18.png",
        name: "Mwalk Billies",
        price: 20.50,
        old_price: 25
    },
    {
        id: 18,
        img: "image/p19.png",
        name: "Sweet Shirt",
        price: 20.50,
        old_price: 25
    },
    {
        id: 19,
        img: "image/p20.png",
        name: "Black T-Shirt",
        price: 20.50,
        old_price: 25
    }
];

let products_div=document.getElementById("products_div");
productsArray.forEach((product) => {
    products_div.innerHTML += `
        <div class="product swiper-slide">
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



// Open close filter
var filter=document.querySelector(".filters");
function open_close_filter(){
    filter.classList.toggle("active");
}
