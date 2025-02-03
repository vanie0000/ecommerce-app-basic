document.addEventListener("DOMContentLoaded", () => {
    const products = [
        {id: 1, name: "premium headphones", price: 299.99},
        {id: 2, name: "smart watch", price: 199.99},
        {id: 3, name: "wireless earbuds", price: 159.99}
    ];

const cart = []

const productList = document.getElementById("product-list")
const cartItems = document.getElementById("cart-items");
const emptyCartMessage = document.getElementById("empty-cart");
const cartTotalMesage = document.getElementById("cart-total");
const totalPriceDisplay = document.getElementById("total-price");
const checkoutBtn = document.getElementById("checkout-btn");

products.forEach((product) => {
    const productDiv = document.createElement("div")
    productDiv.classList.add("product")
    productDiv.innerHTML = `<span>${product.name} - ${product.price.toFixed(2)}</span>
    <button data-id="${product.id}">Add to cart</button>`
    productList.appendChild(productDiv)
})

productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON"){
        const productId = parseInt(e.target.getAttribute("data-id"))
        const product = products.find(p => p.id === productId)
        addToCart(product)
    }
})

function addToCart(product) {
    cart.push(product);
    renderCart();
}

function renderCart() {
    cartItems.innerText = "";
    let totalPrice = 0;

    if (cart.length > 0) {
        emptyCartMessage.classList.add("hidden")
        cartTotalMesage.classList.remove("hidden")
        cart.forEach((item, index) => {
            totalPrice += item.price;
            const cartItem = document.createElement("div")
            cartItem.innerHTML = `${item.name} - ${item.price.toFixed(2)}`
            cartItems.appendChild(cartItem)
            totalPriceDisplay.textContent = `$${totalPrice.toFixed(2)}`
        })
    } else {
        emptyCartMessage.classList.remove("hidden")
        totalPriceDisplay.textContent = `0`;
    }
}

checkoutBtn.addEventListener("click", () => {
    cart.length = 0;
    alert("checkout successful")
    renderCart();
})

});
