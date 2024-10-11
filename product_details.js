var all_products_details;
let products_details = [];
let product_Js = document.querySelector(".product_section");

window.onload = function () {
  const productId = sessionStorage.getItem("selectedProductId");
  if (productId) {
    set_details(productId);
  } else {
    console.error("No product ID found in sessionStorage.");
  }
};

function set_details(id) {
  console.log(id);
  products_details = all_products_details[id];

  if (products_details) {
    console.log(products_details.img);
    product_Js.innerHTML += `
      <div class="container">
        <div class="row pt-3">
          <div class="col product_imagee d-flex justify-content-center align-items-center">
            <a href="${products_details.img}" data-lightbox="models">
              <img id="bag_img" src="${products_details.img}" />
            </a>
          </div>
          <div class="product_details col d-flex flex-column gap-2">
            <p class="h2 m-0 text-capitalize">${products_details.name}</p>
            <p class="h1 m-0">$${products_details.price}</p>
            <div class="d-flex product_stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <p class="h3 m-0">Product details:</p>
            <p class="m-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              aperiam aut laboriosam qui ea, quam impedit officiis dignissimos
              odio possimus autem reiciendis quasi, error voluptate ratione
              perspiciatis facilis iste? Labore.
            </p>
            <p class="h3 m-0 mb-1">select size:</p>
            <div class="product_sizes d-flex gap-3 mb-2">
              <button class="btn text-capitalize size" type="button">sm</button>
              <button class="btn text-capitalize size" type="button">md</button>
              <button class="btn text-capitalize size" type="button">lg</button>
            </div>
            <button class="btn col-lg-6 text-capitalize add_cart" type="button" id="add_cart">
              add to cart
            </button>
            <button class="btn col-lg-6 text-capitalize add_cart" type="button" id="buy_now_button">
              buy now
            </button>
          </div>
        </div>
      </div>
    `;

    // Now that the elements are added, select and add event listeners
    // making buttons active if clicked
    let sizeButtons = document.querySelectorAll(".size");
    sizeButtons.forEach(btnEl => {
      btnEl.addEventListener('click', () => {
        document.querySelector(".special")?.classList.remove("special");
        btnEl.classList.add("special");
      });
    });

    let addCartButton = document.getElementById("add_cart");
    addCartButton.addEventListener('click', () => {
      if (addCartButton.classList.contains("special2")) {
        addCartButton.classList.remove("special2");
        addCartButton.innerHTML = 'Add to cart';
      } else {
        addCartButton.classList.add("special2");
        addCartButton.innerHTML = 'Added to cart';
      }
    });
    // buy now button opens buy div
    let buy_now_button=document.getElementById("buy_now_button");
    buy_now_button.addEventListener('click',function(){
      console.log("hi");
      buy_now.classList.remove("d-none");
      
      buy_now.classList.add("d-flex");
      
    });

    // hiding the buy_now div when clicking away
    document.addEventListener('click', function(event) {
      const buy_now = document.getElementById('buy_now');
      
      if (!buy_now.contains(event.target) && event.target !== buy_now_button) {
          buy_now.classList.remove("d-flex");
          buy_now.classList.add("d-none");
          console.log(buy_now.classList);
      }
    });
    let checkout=document.getElementById("Checkout");
    checkout.addEventListener('click',function(){
     
      buy_now.classList.remove("d-flex");
      buy_now.classList.add("d-none");
      alert("Thanks for buying");
    });
  } else {
    console.error(`No product details found for ID: ${id}`);
  }
}
