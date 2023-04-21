let menuItems = [
    {
        id : 'jsdn',
        title : 'Chicken Lollipop',
        ratings : '',
        price : 70
    },
    {
        id : 'djsda',
        title : 'Chicken 65',
        ratings : '',
        price : 95
    },
    {
        id : 'dieded',
        title : 'Chicken Chilli',
        ratings : '',
        price : 95
    },
    {
        id : 'owkswq',
        title : 'Chicken Manchuria',
        ratings : '',
        price : 100
    },
    {
        id : 'qwid',
        title : 'Chicken ',
        ratings : '',
        price : 70
    }  
]

// 

let items = document.getElementById('starters');
let basket = JSON.parse(localStorage.getItem("data")) || [];


let generator = () => {
    items.innerHTML = menuItems.map((title) => {
        let search = basket.find((x) => x.id === title.id) || []
        return `
        <div class="item1" id="item-id-${title.id}">
        <div>
            <img src="pexels-sohani-kamat-7868115.jpg" alt="img" class="img1">
        </div>
        <div>
            ${title.title} <br>
            Ratings - ${title.ratings} <br>
            ₹${title.price}
        </div>
        <div class="add">
            <i class="bi bi-plus" onclick="increment(${title.id})"></i>
            <div class="p" id="${title.id}">
            ${search.item === undefined ? 0 : search.item}
            </div><i class="bi bi-dash" onclick="decrement(${title.id})"></i>
        </div>
    </div>
        `
    })
    .join("");
};

generator();

let cart = document.querySelector(".cards");



let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => {
        return x.id === selectedItem.id;
    })

    if (search === undefined) {
        basket.push({
            id : selectedItem.id,
            item : 1
        })
    } else {
        search.item += 1;
    }


    update(id);
    localStorage.setItem("data", JSON.stringify(basket));
}

let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => {
        return x.id === selectedItem.id
    })

    if ( search == undefined ||search.item === 0) { 
        return;
    }
    else {
        search.item -= 1;
    }
    
    update(id);
    localStorage.setItem("data", JSON.stringify(basket));
}

let update = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => {
        return x.id === selectedItem.id
    })
    document.querySelectorAll(`#${search.id}`)[0].innerHTML = search.item;
    // document.querySelectorAll(`#${search.id}`)[1].innerHTML = search.item;

    
    basket = basket.filter((x) => x.item != 0);

    calculation();
}

let calculation = () => {
    sum = basket.map((x) => {return x.item});
    let s = 0;
    for (let i = 0; i < sum.length; i++){
        s += sum[i];
    }
    document.querySelector(".count").innerHTML = s;
    document.querySelector(".jord .count").innerHTML = s;
}

calculation();


// Cart
let blur = () => {
    document.querySelector(".body").style.transitionDuration = "0.9s";
    document.querySelector("body").style.transitionDuration = "1s";
    document.querySelector(".cart-page").style.transitionDuration = "1s";
    document.querySelector(".cart-page").style.height = "100%";

    document.querySelector(".body").style.filter = "blur(3px)";
    document.querySelector("body").style.height = "100%";
    document.querySelector("body").style.width = "100%";
    document.querySelector("body").style.overflowY = "hidden";
    
    document.querySelector(".cart-page").style.overflowY = "scroll";
     
}

let noblur = () => {
    document.querySelector(".body").style.filter = "";
    document.querySelector("body").style.height = "";
    document.querySelector("body").style.overflowY = "";
    document.querySelector(".cart-page").style.overflowY = "";
    document.querySelector(".cart-page").style.height = "";
}
document.querySelector(".jord").addEventListener("click", blur);

document.querySelector(".exit").addEventListener("click", noblur);



let generateCardItems = () => {
    if (basket.length !== 0) {
        cart.innerHTML = basket.map((search) => {
            vs = menuItems.find((x) => x.id === search.id);
            
        return   `
        <div class="cart-item1" id="item-id-${vs.id}">
        <div>
            <img src="pexels-sohani-kamat-7868115.jpg" alt="img" class="img1">
        </div>
        <div>
            ${vs.title} <br>
            Ratings - ${vs.ratings} <br>
            ₹${vs.price}
        </div>
        <div>
        <div class="add">
            <i class="bi bi-plus" onclick="increment1(${vs.id})"></i>
            <div class="p" id="${vs.id}">
            ${search.item}
            </div><i class="bi bi-dash" onclick="decrement1(${vs.id})"></i>
        </div>
        <div class="mad">
            <h3>Remove</h3>
        </div>
        </div>
        
        </div>
        `
        }).join(""); 
       
    }

    else {
        cart.innerHTML = `
        <h2>Don't think too long</h2>
        <h3>Order Something..</h3>
        <button onclick="noblur()">Back to menu</button>
        `;
    }
}

generateCardItems();

let decrement1 = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => {
        return x.id === selectedItem.id
    })

    if ( search == undefined ||search.item === 0) { 
        return;
    }
    else {
        search.item -= 1;
    }
    
    update1(id);
    // generateCardItems();
    localStorage.setItem("data", JSON.stringify(basket));
}

let increment1 = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => {
        return x.id === selectedItem.id;
    })

    if (search === undefined) {
        basket.push({
            id : selectedItem.id,
            item : 1
        })
    } else {
        search.item += 1;
    }

    // generateCardItems();

    update1(id);
    localStorage.setItem("data", JSON.stringify(basket));
}

let update1 = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => {
        return x.id === selectedItem.id
    })
    // document.querySelectorAll(`#${search.id}`)[0].innerHTML = search.item;
    document.querySelectorAll(`#${search.id}`)[1].innerHTML = search.item;

    
    basket = basket.filter((x) => x.item != 0);

    calculation();
}