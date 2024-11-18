import "./style.css";

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




const GET_PRODUCTS = "http://localhost:5000/products";
const wrapper = document.querySelector(".products__wrapper")

getProducts();



async function getProducts() {
  const res = await fetch(GET_PRODUCTS);
  const body = await res.json();
  const products = body.data;
  console.log(products);
  


products.forEach(async (item) => {
    const newEl = await createProductCard(item)
    
    wrapper.appendChild(newEl)    
});


}



async function createProductCard(data) {
  const el = document.createElement("div");
  el.classList.add("card");
  el.innerHTML = `
    <img src="${data.image}" alt=""/>
            <h3>${data.name}</h3>
            <p>${data.price}</p>
    `;
    return el;
}

