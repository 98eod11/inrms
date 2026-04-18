// Check if the page is loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("Storefront is ready.");

  // Track when items are being added to cart
  document.addEventListener("snipcart.events.item.adding", (e) => {
    const item = e.detail;
    console.log(`${item.name} is being added to cart - Price: $${item.price}`);
  });

  // Track when items are added to cart successfully
  document.addEventListener("snipcart.events.item.added", (e) => {
    const item = e.detail;
    console.log(`${item.name} has been added to cart`);
  });

  // Track cart view
  document.addEventListener("snipcart.events.cart.opened", () => {
    console.log("User opened the cart");
  });

  // Optional: Custom tracking for analytics
  const addToCartButtons = document.querySelectorAll(".snipcart-add-item");
  addToCartButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const itemName = this.getAttribute("data-item-name");
      const itemPrice = this.getAttribute("data-item-price");
      console.log(`Button clicked: ${itemName} - $${itemPrice}`);

      // Add custom analytics here (Google Analytics, Segment, etc.)
      // Example for Google Analytics:
      // gtag('event', 'add_to_cart', {
      //   value: itemPrice,
      //   items: [{ name: itemName, price: itemPrice }]
      // });
    });
  });
});
