// بارگذاری لوگو
const logo = document.getElementById("logo");
const savedLogo = localStorage.getItem("cafeLogo");

if (savedLogo) {
    logo.src = savedLogo;
}

// بارگذاری محصولات
const products = JSON.parse(localStorage.getItem("products")) || [];

// محل نمایش دسته‌ها
const containers = {
    hot: document.getElementById("hot-products"),
    cold: document.getElementById("cold-products"),
    drink: document.getElementById("drink-products"),
    snack: document.getElementById("snack-products"),
    food: document.getElementById("food-products"),
    other: document.getElementById("other-products")
};

// نمایش محصولات
products.forEach(product => {

    const card = document.createElement("div");
    card.className = "product";

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">

        <div class="product-info">

            <h3>${product.name}</h3>

            <div class="price">
                ${product.price} تومان
            </div>

        </div>
    `;

    if (containers[product.category]) {
        containers[product.category].appendChild(card);
    }

});
