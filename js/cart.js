document.addEventListener("DOMContentLoaded", function() {
    const cartCount = document.getElementById("cart-count");
    const addToCartButtons = document.querySelectorAll(".cart-btn");

    let itemCount = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (button.classList.contains("added")) {
                itemCount--;
                button.classList.remove("added");
            } else {
                itemCount++;
                button.classList.add("added");
            }
            cartCount.textContent = itemCount;
            cartCount.classList.toggle("hidden", itemCount === 0);
        });
    });
});