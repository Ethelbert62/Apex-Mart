let cart = [];
let total = 0;

function addToCart(name, price) {
    price = Number(price);
    cart.push({name, price});

    total += price;

    displayCart();

    // alert(name +  ' ' + "added to cart 🛒")
}

function displayCart(){
    if (cart.length === 0) {
        cartitems.innerHTML= "<p>Your cart is empty</p>";
    }
    const cartitems= document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");

    cartitems.innerHTML="";

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - #${item.price}`;
        cartitems.appendChild(li);
    });

    totalPrice.textContent = total;
}


function clearCart() {
    cart =[];
    total = 0;
    displayCart();
}