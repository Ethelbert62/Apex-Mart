let cart = JSON.parse(localStorage.getItem("cart"))||[];
let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

function addToCart(name, price) {
    price = Number(price);

    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({name, price, quantity: 1});
    }
    // Recalculate total price

    total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);


localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
    // alert(name +  ' ' + "added to cart 🛒")
}

function displayCart(){

    const cartitems= document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");

    cartitems.innerHTML="";


    if (cart.length === 0) {
        cartitems.innerHTML= "<p>Your cart is empty</p>";
        totalPrice.textContent = 0;
        updateCart();
        return;
    }
    

    cart.forEach((item, index) => {
        const li = document.createElement("li");
       
        li.innerHTML = `${item.name} x${item.quantity} -#${item.price * item.quantity}
        <button onclick="increaseQuantity(${index})">+</button>
        <button onclick="decreaseQuantity(${index})">-</button>
        <button onclick="removeItem(${index})">Remove</button>
        `;
        
        cartitems.appendChild(li);


    });

    totalPrice.textContent = total;

    updateCart();
    
}




function increaseQuantity(index) {
            cart[index].quantity += 1;

            total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
            localStorage.setItem("cart", JSON.stringify(cart));
            displayCart();
        }

        function decreaseQuantity(index) {
            if (cart[index].quantity > 1) {
                cart[index].quantity -= 1;
            } else {
                cart.splice(index, 1);
            }

            total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
            localStorage.setItem("cart", JSON.stringify(cart));
            displayCart();
        }


function clearCart() {
    cart =[];
    total = 0;
    localStorage.removeItem("cart");
    displayCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}


function updateCart() {
    const cartCount = document.getElementById("cart-count");
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

displayCart();
