/*=========================================CAPSTONE PROJECT============================================ */

//*****************************************/ jQuery code. /**********************************************//

// Function to alert upon loaded page.
$(document).ready(function () {
    alert("The Web Page has fully loaded, click okay to continue!");
});

// Function to hide page links until user clicks on Home Icon(div). 
$(document).ready(function () {

    $(".navbarList").hide();
});

$(".navbar").click(function () {
    $(".navbarList").slideToggle("slow");
});

// Upon "click" of button, particular item will be added to the cart and alert user that item has been added. */
$(".add-to-cart").click(function (event) {
    alert("Your order has been added to your shopping cart. Please use the link above to go to your shopping cart and click okay to continue!");
    event.preventDefault();
    let name = $(this).attr("data-name");
    let price = Number($(this).attr("data-price"));
    shoppingCart.addItemToCart(name, price, 1);
    displayCart();
});

// Alert user of total cost excluding vat. Note: Vat added on shopping cart page. */
function displayCart() {
    let newTotal = shoppingCart.totalCart();
    alert("Your order total is R" + newTotal + " excluding vat. Vat will be included upon check out.");
}

/*/////////////////////////////////////////Javascript Code//////////////////////////////////////////////////*/

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
    }

    // Total menu objects together.
    menuMeal.countCart = function () {
        let totalCount = 0;
        for (var i in cart) {
            totalCount += cart[i].count;
        }
        return totalCount;
    };

    // Total cost of all objects.
    menuMeal.totalCart = function () {
        let totalCost = 0;
        for (let i in cart) {
            totalCost += cart[i].price * cart[i].count;
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
/*====================================================THE END=============================================== */