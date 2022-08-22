let cart = document.querySelectorAll(".order-btn");

let products = [
    {
        name: "Awadhi Mutton Biryani",
        tag: "Awadhi Mutton Biryani",
        price: 350,
        inCart: 0
    },
    {
        name: "Chicken Reshmi Biryani",
        tag: "Chicken Reshmi Biryani",
        price: 200,
        inCart: 0
    },
    {
        name: "Egg Biryani",
        tag: "Egg Biryani",
        price: 450,
        inCart: 0
    },
    {
        name: "Hyderabadi Biryani",
        tag: "Hyderabadi Biryani",
        price: 250,
        inCart: 0
    },
    {
        name: "Keema Biryani",
        tag: "Keema Biryani",
        price: 300,
        inCart: 0
    },
    {
        name: "Lamb Biryani",
        tag: "Lamb Biryani",
        price: 400,
        inCart: 0
    },
    {
        name: "grilled-paneer-tikka",
        tag: "grilled-paneer-tikka",
        price: 100,
        inCart: 0
    },
    {
        name: "kadai-paneer",
        tag: "kadai-paneer",
        price: 250,
        inCart: 0
    },
    {
        name: "malai-kofta",
        tag: "malai-kofta",
        price: 160,
        inCart: 0
    },
    {
        name: "matar-paneer",
        tag: "matar-paneer",
        price: 180,
        inCart: 0
    },
    {
        name: "palak-paneer",
        tag: "palak-paneer",
        price: 200,
        inCart: 0
    },
    {
        name: "paneer-butter-masala",
        tag: "paneer-butter-masala",
        price: 150,
        inCart: 0
    }, {
        name: "payasam",
        tag: "payasam",
        price: 250,
        inCart: 0
    },
    {
        name: "mutton vadai",
        tag: "mutton vadai",
        price: 160,
        inCart: 0
    },
    {
        name: "meen-murringakka",
        tag: "meen-murringakka",
        price: 180,
        inCart: 0
    },
    {
        name: "meen pollichathu",
        tag: "meen pollichathu",
        price: 200,
        inCart: 0
    },
    {
        name: "masala-dosa",
        tag: "masala-dosa",
        price: 150,
        inCart: 0
    },
    {
        name: "mango-curry",
        tag: "mango-curry",
        price: 150,
        inCart: 0
    }

]


for (let i = 0; i < cart.length; i++) {
    cart[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
        //console.log("item added");
    })
    //console.log("my loop");//
}

function cartNumbers(products) {

    let productNumbers = localStorage.getItem('cartNumbers');


    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
    } else {
        localStorage.setItem('cartNumbers', 1);
    }
    setItems(products);
}


function setItems(products) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);


    if (cartItems != null) {

        if (cartItems[products.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [products.tag]: products
            }
        }
        cartItems[products.tag].inCart += 1;
    }
    else {
        products.inCart = 1;
        cartItems = {
            [products.tag]: products
        }
    }



    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(products) {
    //console.log("the product price is",products.price);
    let cartCost = localStorage.getItem("totalCost");


    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + products.price);
    } else {
        localStorage.setItem("totalCost", products.price);
    }

}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem("totalCost");

    if (cartItems && productContainer) {

        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product" >
                <span>${item.name}</span>
            </div>
            <div class="prices" >₹${item.price},00</div>
            <div class="quantitys" >
                <span>${item.inCart}</span>
            </div>
            <div class="totals">₹${item.inCart * item.price},00</div>

            `
        });
        productContainer.innerHTML += `
        
        <div class="basketTotalContainer" >
        <h4 class="basketTotalTitle">
        Total
        </h4>
        <h4 class="basketTotal">
        ₹${cartCost},00
        </h4>
        </div>
        `
    }
}

displayCart();

function fun() {
    alert("order purchase successfully");
}
function add() {
    alert("Item successfully added");
}