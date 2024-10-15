// open &  close menu
var menu = document.querySelector("#menu");
function open_menu() {
  menu.classList.add("active");
}
function close_menu() {
  menu.classList.remove("active");
}

// opening the buy now div when pressing on checkout
let buy_now_buttons = document.querySelectorAll(".buy_now_button");
buy_now_buttons.forEach((button) => {
  button.addEventListener("click", function () {
    document.querySelectorAll(".buy_now").forEach((element) => {
      element.classList.remove("d-none");
      element.classList.add("d-flex");

      // Get the position of the .buy_now element
      let rect = element.getBoundingClientRect();
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let elementTop = rect.top + scrollTop;

      // Scroll to the position of the .buy_now element
      window.scrollTo({
        top: elementTop,
        behavior: "smooth",
      });
    });
  });
});

// if you click anywhere else the buy now div closes
document.addEventListener("click", function (event) {
  const buy_now = document.getElementById("buy_now");

  if (!buy_now.contains(event.target) && event.target !== buy_now_button) {
    buy_now.classList.remove("d-flex");
    buy_now.classList.add("d-none");
  }
});
//   checkout button in the form
let checkout = document.getElementById("Checkout");
checkout.addEventListener("click", function () {
  buy_now.classList.remove("d-flex");
  buy_now.classList.add("d-none");
  alert("Thanks for buying");
});

// adding content of product page to cart page
const cart_div = JSON.parse(sessionStorage.getItem("cart_div"));
let cart_item_container = document.querySelector(".cart_item_container");
if (cart_div) {
  cart_item_container.innerHTML += `
            <img src="${cart_div.img}" alt="" class="col-lg-3 ">
            <div class="flex flex-column col">
            <p class="text-capitalize">${cart_div.name}</p>
            <span><p class="text-capitalize">color grey , size M</p></span>
            <span><p>Qty.1</p></span>
            </div>
            <div class="d-flex gap-4 col align-items-center justify-content-end">
            <p class="m-0">$${cart_div.price}</p>
            <i class="fa-solid fa-x pe-3 close_button"></i>
            </div>
            `;
}
// x button that removes selected product
document.querySelectorAll(".close_button").forEach((button) => {
  button.addEventListener("click", () => {
    button.closest(".cart_product").style.display = "none";
  });
});

// shop more button in cart onclick
document.querySelectorAll(".shop_more").forEach((shop) => {
  shop.addEventListener("click",()=>{
    window.location.href = "clothe.html";
  })
});