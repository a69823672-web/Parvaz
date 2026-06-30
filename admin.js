
// =====================
// ورود به پنل (رمز 4030)
// =====================
const loginBox = document.getElementById("loginBox");
const adminPanel = document.getElementById("adminPanel");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

loginBtn?.addEventListener("click", () => {
    const pass = passwordInput.value;

    if (pass === "4030") {
        loginBox.style.display = "none";
        adminPanel.style.display = "block";
    } else {
        alert("رمز اشتباه است");
    }
});


// =====================
// دریافت داده‌ها
// =====================
let products = JSON.parse(localStorage.getItem("products")) || [];


// =====================
// ثبت محصول
// =====================
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productImage = document.getElementById("productImage");
const productCategory = document.getElementById("productCategory");
const addBtn = document.getElementById("addProduct");

addBtn?.addEventListener("click", () => {

    const file = productImage.files[0];

    if (!productName.value || !productPrice.value || !file) {
        alert("همه فیلدها را پر کن");
        return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {

        const newProduct = {
            name: productName.value,
            price: productPrice.value,
            image: e.target.result,
            category: productCategory.value
        };

        products.push(newProduct);
        localStorage.setItem("products", JSON.stringify(products));

        alert("محصول ثبت شد");

        productName.value = "";
        productPrice.value = "";
        productImage.value = "";
    };

    reader.readAsDataURL(file);
});


// =====================
// تغییر لوگو
// =====================
const logoInput = document.getElementById("logoInput");

logoInput?.addEventListener("change", () => {

    const file = logoInput.files[0];

    const reader = new FileReader();

    reader.onload = function (e) {
        localStorage.setItem("cafeLogo", e.target.result);
        alert("لوگو تغییر کرد");
    };

    reader.readAsDataURL(file);
});
