/*=========================================CAPSTONE PROJECT============================================ */

/* Javascript Code: */

// Function below will display in html <li> element.
function displayCart() {
    let cartArray = shoppingCart.listCart();
    let newTotal = shoppingCart.totalCart();
    let output = "";
    for (let i in cartArray) {
        output += "<li>"
            + cartArray[i].name
            + " <input class='item-count' type='number' data-name='"
            + cartArray[i].name
            + "' value='" + cartArray[i].count + "' >"
            + " x " + cartArray[i].price
            + " = " + cartArray[i].total
            + " <button class='plus-item' data-name='"
            + cartArray[i].name + "'>+</button>"
            + " <button class='subtract-item' data-name='"
            + cartArray[i].name + "'>-</button>"
            + " <button class='delete-item' data-name='"
            + cartArray[i].name + "'>X</button>"
            + "</li>";
    }
    $("#show-cart").html(output);
    $("#count-cart").html(shoppingCart.countCart());
    $("#total-cart").html(shoppingCart.totalCart());
    alert("Your new order total is R" + newTotal + " including vat.");
};

// Functions for shopping cart.
let shoppingCart = (function () {
    // Cart assigned an empty array.
    let cart = [];

    // Constructor function as blueprint for meal objects.
    function Meal(name, price, count) {
        this.name = name
        this.price = price
        this.count = count
    }
    // Save cart content in localstorage & pass content through as a string.
    function saveCart() {
        localStorage.setItem("shoppingCart", JSON.stringify(cart));
    }
    // Load cart content.
    function loadCart() {
        cart = JSON.parse(localStorage.getItem("shoppingCart"));
        if (cart === null) {
            cart = []
        }
    }
    loadCart();

    // Object methods and properties below.
    let menuMeal = {};

    menuMeal.addItemToCart = function (name, price, count) {
        for (let i in cart) {
            if (cart[i].name === name) {
                cart[i].count += count;
                saveCart();
                return;
            }
        }

        console.log("addItemToCart:", name, price, count);

        let item = new Meal(name, price, count);
        cart.push(item);
        saveCart();
    };

    menuMeal.setCountForItem = function (name, count) {
        for (let i in cart) {
            if (cart[i].name === name) {
                cart[i].count = count;
                break;
            }
        }
        saveCart();
    };

    // Remove one meal object of same name from cart.
    menuMeal.removeItemFromCart = function (name) {
        for (let i in cart) {
            if (cart[i].name === name) {
                cart[i].count--;
                if (cart[i].count === 0) {
                    cart.splice(i, 1);
                }
                break;
            }
        }
        saveCart();
    };

    // Remove all meal objects of the same name.
    menuMeal.removeItemFromCartAll = function (name) {
        for (let i in cart) {
            if (cart[i].name === name) {
                cart.splice(i, 1);
                break;
            }
        }
        saveCart();
    };

    // Clear entire Cart.
    menuMeal.clearCart = function () {
        cart = [];
        saveCart();
    };

    // Total menu objects together.
    menuMeal.countCart = function () {
        let totalCount = 0;
        for (let i in cart) {
            totalCount += cart[i].count;
        }

        return totalCount;
    };

    // Total cost of all objects.
    menuMeal.totalCart = function () {
        let totalCost = 0;
        let vat = 1.15;
        for (let i in cart) {
            totalCost += cart[i].price * cart[i].count * vat;
        }
        return totalCost.toFixed(2);
    };

    // List all meal objects.
    menuMeal.listCart = function () {
        let cartCopy = [];
        console.log("Listing cart");
        console.log(cart);
        for (let i in cart) {
            console.log(i);
            let item = cart[i];
            let itemCopy = {};
            for (let p in item) {
                itemCopy[p] = item[p];
            }
            itemCopy.total = (item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy);
        }
        return cartCopy;
    };

    return menuMeal;
})();

// Random string genrator to provide user with a reference number.
function randomString() {
    let characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    let stringLength = 8;
    let randomstring = " ";
    for (let i = 0; i < stringLength; i++) {
        let randomStr = Math.floor(Math.random() * characters.length);
        randomstring += characters.substring(randomStr, randomStr + 1);
    }
    document.reference.randomfield.value = randomstring;
    alert("Thank you for your order confirmation, a unique reference code will be provided for your order.")
}

/* Please note that delivery costs are already included in meals so no additional delivery charges will be made.  */

/*====================================================THE END=============================================== */


