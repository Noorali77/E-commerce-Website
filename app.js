let products = [
    {
        name: "Iphone 12",
        price: 120000,
        image : "img/iphone 12.jpg"
    },
    {
        name: "Samsung S20 Ultra",
        price: 200000,
        image : "img/samsung s20.jpg"
    },
    {
        name: "Sony Xperia",
        price: 60000,
        image : "img/sony.jpg"
    },

    {
        name: "Realme C-12",
        price: 25000,
        image : "img/realme c12.jpg"
    },

    {
        name: "Xioami 11 Ultra ",
        price: 150000,
        image : "img/xioami 11 ultra.jpg"
    },

    {
        name: "Iphone X",
        price: 100000,
        image : "img/iphone x.jpg"
    },

    {
        name: "Apple Airpod Pro",
        price: 40000,
        image : "img/airpod.jpg"
    },
    
    {
        name: "Apple Headphones Pro",
        price: 30000,
        image : "img/headphones.jpg"
    },

    {
        name: "Apple Charger Pro",
        price: 5000,
        image : "img/charger.jpg"
    },
    {
        name: "Redmi Note 10",
        price: 35000,
        image : "img/redmi note 10.png"
    },

    {
        name: "Canon E16",
        price: 100000,
        image : "img/canon.jpg"
    },

    {
        name: "Infinix Note 10",
        price: 30000,
        image : "img/infinix note 10.jpg"
    },
    {
        name: "Iphone 7 Plus",
        price: 70000,
        image : "img/iphone 7+.jpg"
    },

    {
        name: "Samsung Galaxy Buds Plus",
        price: 13000,
        image : "img/samsung buds+.jpg"
    },

    {
        name: "Nikon C-14",
        price: 25000,
        image : "img/nikon.jpg"
    },
]



let main = document.getElementById('products');

for(var i = 0; i < products.length; i++){
    main.innerHTML += `  
    <div class="card card-bo mt-3 mb-4" >
    <img src="${products[i].image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title" id="productName">${products[i].name}</h5>
        <p class="card-text" id="productPrice">Price = Rs: ${products[i].price}</p>
    <button href="#" id="btn-dis" class="btn btn-warning btn-dis" ondblclick = alert('dmmd') onclick='addToCart("${products[i].name}","${products[i].price}","${products[i].image}")'>ADD TO CART</button>
    </div>
</div>  `

}

let allCarts = [];
let carts = localStorage.getItem('carts')

if(carts !== null){
   allCarts = JSON.parse(carts)
   let cart_badge = document.getElementById('cart-badge');
   cart_badge.innerHTML = allCarts.length

   
}



function addToCart(name,price,image){
  
    
 let cart = {
        name,
        price,
        image
    }
       
    allCarts.push(cart)
    localStorage.setItem('carts',JSON.stringify(allCarts))
    let cart_badge = document.getElementById('cart-badge');
    cart_badge.innerHTML = allCarts.length;

}

