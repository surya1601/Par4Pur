let starterItems = [
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
        title : 'Chicken Tandoori',
        ratings : '',
        price : 100
    },
    {
        id : 'wieu',
        title : 'Chicken Kebab',
        ratings : '',
        price : 85
    },
    {
        id : 'mqwow',
        title : 'Paneer 65',
        ratings : '',
        price : 65
    }, 
    {
        id : 'butf',
        title : 'Baby Corn Fry',
        ratings : '',
        price : 70
    },
    {
        id : 'pwdnc',
        title : 'Crispy Corn',
        ratings : '',
        price : 95
    },
    {
        id : 'ywgb',
        title : 'French Fries',
        ratings : '',
        price : 55
    },
    {
        id : 'pkdd',
        title : 'Veg Manchurian',
        ratings : '',
        price : 55
    }
]

let ranpItems = [
    {
        id: 'riyw',
        title: 'Plain Roti',
        price: '6'
    },
    {
        id: 'isrf',
        title: 'Rumali Roti',
        price: '10'
    },
    {
        id: 'ioe',
        title: 'Plain Paratha',
        price: '10'
    },
    {
        id: 'mdskc',
        title: 'Latcha Paratha',
        price: '17'
    },
    {
        id: 'iewfn',
        title: 'Paneer Paratha',
        price: '11'
    }
]

let currItems = [
    {
        id: "eywc",
        title: 'Chicken Butter Masala',
        price: '100'
    },
    {
        id: "ewiu",
        title: 'Kadai Chicken',
        price: '100'
    },
    {
        id: "eopf",
        title: 'Chicken Hyderabadi',
        price: '100'
    },
    {
        id: "mclk",
        title: 'Egg Chicken Masala',
        price: '100'
    },
    {
        id: "ksdh",
        title: 'Paneer Butter Masala',
        price: '105'
    },
    {
        id: "oqjd",
        title: 'Egg Bhurjia',
        price: '65'
    },
]

let menuItems =[
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
        title : 'Chicken Tandoori',
        ratings : '',
        price : 100
    },
    {
        id : 'wieu',
        title : 'Chicken Kebab',
        ratings : '',
        price : 85
    },
    {
        id : 'mqwow',
        title : 'Paneer 65',
        ratings : '',
        price : 65
    }, 
    {
        id : 'butf',
        title : 'Baby Corn Fry',
        ratings : '',
        price : 70
    },
    {
        id : 'pwdnc',
        title : 'Crispy Corn',
        ratings : '',
        price : 95
    },
    {
        id : 'ywgb',
        title : 'French Fries',
        ratings : '',
        price : 55
    },
    {
        id : 'pkdd',
        title : 'Veg Manchurian',
        ratings : '',
        price : 55
    },
    {
        id: 'riyw',
        title: 'Plain Roti',
        price: '6'
    },
    {
        id: 'riyw',
        title: 'Rumali Roti',
        price: '10'
    },
    {
        id: 'riyw',
        title: 'Plain Paratha',
        price: '10'
    },
    {
        id: 'riyw',
        title: 'Latcha Paratha',
        price: '17'
    },
    {
        id: 'riyw',
        title: 'Paneer Paratha',
        price: '11'
    },
    {
        id: "eywc",
        title: 'Chicken Butter Masala',
        price: '100'
    },
    {
        id: "ewiu",
        title: 'Kadai Chicken',
        price: '100'
    },
    {
        id: "eopf",
        title: 'Chicken Hyderabadi',
        price: '100'
    },
    {
        id: "mclk",
        title: 'Egg Chicken Masala',
        price: '100'
    },
    {
        id: "ksdh",
        title: 'Paneer Butter Masala',
        price: '105'
    },
    {
        id: "oqjd",
        title: 'Egg Bhurjia',
        price: '65'
    },
]

let items = document.getElementById('starters');
let ranpitems = document.getElementById('ranp');
let curritems = document.getElementById('curry');
let basket = JSON.parse(localStorage.getItem("data")) || [];


let generatorStarter = () => {
    items.innerHTML += starterItems.map((title) => {
        let search = basket.find((x) => x.id === title.id) || []
        return `
        <div class="item1" id="item-id-${title.id}">
        <div class="img-item1">
            <img src="pexels-sohani-kamat-7868115.jpg" alt="img" class="img1">
        </div>
        <div class="cont">
           <p> ${title.title} </p>
            Price - ₹${title.price}
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

generatorStarter();

let generatorRanp = () => {
    ranpitems.innerHTML += ranpItems.map((title) => {
        let search = basket.find((x) => x.id === title.id) || []
        return `
        <div class="item1" id="item-id-${title.id}">
        <div class="img-item1">
            <img src="pexels-sohani-kamat-7868115.jpg" alt="img" class="img1">
        </div>
        <div class="cont">
           <p> ${title.title} </p>
            Price - ₹${title.price}
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

generatorRanp();

let generatorCurr = () => {
    curritems.innerHTML += currItems.map((title) => {
        let search = basket.find((x) => x.id === title.id) || []
        return `
        <div class="item1" id="item-id-${title.id}">
        <div class="img-item1">
            <img src="pexels-sohani-kamat-7868115.jpg" alt="img" class="img1">
        </div>
        <div class="cont">
           <p> ${title.title} </p>
            Price - ₹${title.price}
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

generatorCurr();


let cart = document.querySelector(".cards");
let btp = document.querySelector(".btp");


// Cart Styling
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
    let wer = 0;
    if (basket.length !== 0) {
        cart.innerHTML = basket.map((search) => {
            vs = menuItems.find((x) => x.id === search.id);
            let pr = search.item * vs.price;
        return   `
        <div class="cart-item1" id="item-id-${vs.id}_">
        <div class="cont car">
            <p>${vs.title}</p>
            ₹${vs.price}
        </div>
        <div>
        <div class="add">
            <i class="bi bi-plus" onclick="increment1(${vs.id})"></i>
            <div class="p" id="${vs.id}_">
            ${search.item}
            </div><i class="bi bi-dash" onclick="decrement1(${vs.id})"></i>
        </div>
        <div class="mad" onclick="update0(${vs.id})">
            <h3>Remove</h3>
        </div>
        </div>
        <div class="tot">
        <h3>Total: <br>₹${pr}</h3>
        </div>

        
        </div>
        `
        }).join(""); 

        basket.map((search) => {
            vs = menuItems.find((x) => x.id === search.id);
            wer = wer + search.item * vs.price;
            
        });

        btp.innerHTML = `
        <h3>Bill to pay : <br>₹${wer}</h3>`
    }

    else if (basket.length === undefined || basket.length === 0) {
        cart.innerHTML = `
        <div class="ni">
        <h2>Don't think too long</h2>
        <h3>Order Something..</h3>
        <button onclick="noblur()">Back to menu</button>
        </div>

        `;

        btp.innerHTML = '';
    }
}

generateCardItems();

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

    console.log(id);
    console.log(basket);

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
    document.getElementById(`${search.id}`).innerHTML = search.item;
    // document.querySelectorAll(`#${search.id}`)[1].innerHTML = search.item;

    
    basket = basket.filter((x) => x.item != 0);

    calculation();
    generateCardItems();
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

let decrement1 = (id) => {
    let selectedItem = id;
    console.log(selectedItem);
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
    document.getElementById(`${search.id}`).innerHTML = search.item;
    

    
    basket = basket.filter((x) => x.item != 0);
    generateCardItems();
    calculation();
}

let update0 = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => {
        return x.id === selectedItem.id
    })
    search.item = 0;
    document.getElementById(`${search.id}`).innerHTML = search.item;
    // document.querySelectorAll(`#${search.id}`)[1].innerHTML = search.item;

    
    basket = basket.filter((x) => x.item != 0);
    console.log(basket);
    calculation();
    generateCardItems();
}

// media queries for navbar

let myMediaQuery1 = window.matchMedia('(min-width: 300px)');
// let myMediaQuery2 = window.matchMedia('(min-width: 500px)');

// function widthChangeCallback() {
//     if((window.innerWidth > 300) && (window.innerWidth < 500)) {
//         console.log("I'm working");
//         document.querySelector("ul.lar").innerHTML = `
//         <a href="#starters"><li><b>01</b> Starters</li></a>
//         <a href="#ranp"><li><b>02</b> Rotis and Parathas</li></a>
//         <a href="#curry"><li><b>03</b> Curries</li></a>
//         `;
//     }
// }
//   window.addEventListener('resize', widthChangeCallback);
//   widthChangeCallback();






















//    if(window.matchMedia('(max-width: 500px)').matches) {
//     console.log("second");
//     document.querySelector("ul.lar").innerHTML = `
//     <a href="#starters"><li><b>01</b> Starters</li></a>
//     <a href="#ranp"><li><b>02</b> Rotis and Parathas</li></a>
//     <a href="#curry"><li><b>03</b> Curries</li></a>
//     <a href="#starters"><li><b>01</b> Starters</li></a>
//     `;
//    } 
//    else if(window.matchMedia('(max-width: 600px)').matches) {
//     console.log("third");
//     document.querySelector("ul.lar").innerHTML = `
//     <a href="#starters"><li><b>01</b> Starters</li></a>
//     <a href="#ranp"><li><b>02</b> Rotis and Parathas</li></a>
//     <a href="#curry"><li><b>03</b> Curries</li></a>
//     <a href="#starters"><li><b>01</b> Starters</li></a>
//     <a href="#ranp"><li><b>02</b> Rotis and Parathas</li></a>
//     `;
//    } 

function widthChangeCallback() {
    if(window.matchMedia('(max-width: 499px)').matches) {
      console.log("first");
      document.querySelector("ul.lar").innerHTML = `
      <a href="#starters"><li><b>01</b> Starters</li></a>
      <a href="#ranp"><li><b>02</b> Rotis and Parathas</li></a>
      <a href="#curry"><li><b>03</b> Curries</li></a>
      `;
     } 
}


function widthChangeCallback1() {
    if(window.matchMedia('(max-width: 768px)').matches) {
            console.log("second");
            document.querySelector("ul.lar").innerHTML = `
            <a href="#starters"><li><b>01</b> Starters</li></a>
            <a href="#ranp"><li><b>02</b> Rotis and Parathas</li></a>
            <a href="#curry"><li><b>03</b> Curries</li></a>
            <a href="#starters"><li><b>01</b> Starters</li></a>
            `;
           } 
}

function widthChangeCallback1() {
    if(window.matchMedia('(max-width: 768px)').matches) {
            console.log("second");
            document.querySelector("ul.lar").innerHTML = `
            <a href="#starters"><li><b>01</b> Starters</li></a>
            <a href="#ranp"><li><b>02</b> Rotis and Parathas</li></a>
            <a href="#curry"><li><b>03</b> Curries</li></a>
            <a href="#starters"><li><b>01</b> Starters</li></a>
            `;
           } 
}

function widthChangeCallback2() {
    if(window.matchMedia('(max-width: 1024px)').matches) {
            console.log("second");
            document.querySelector("ul.lar").innerHTML = `
            <a href="#starters"><li><b>01</b> Starters</li></a>
            <a href="#ranp"><li><b>02</b> Rotis and Parathas</li></a>
            <a href="#curry"><li><b>03</b> Curries</li></a>
            <a href="#starters"><li><b>01</b> Starters</li></a>
            <a href="#ranp"><li><b>02</b> Rotis and Parathas</li></a>
            `;
        } 
}

function widthChangeCallback3() {
    if(window.matchMedia('(max-width: 1300px)').matches) {
            console.log("second");
            document.querySelector("ul.lar").innerHTML = `
            <a href="#starters"><li><b>01</b> Starters</li></a>
            <a href="#ranp"><li><b>02</b> Rotis and Parathas</li></a>
            <a href="#curry"><li><b>03</b> Curries</li></a>
            <a href="#starters"><li><b>01</b> Starters</li></a>
            <a href="#ranp"><li><b>02</b> Rotis and Parathas</li></a>
            <a href="#curry"><li><b>03</b> Curries</li></a>
            `;
        } 
}

function widthChangeCallback4() {
    if(window.matchMedia('(max-width: 1400px)').matches) {
            console.log("second");
            document.querySelector("ul.lar").innerHTML = `
            <a href="#starters"><li><b>01</b> Starters</li></a>
            <a href="#ranp"><li><b>02</b> Rotis and Parathas</li></a>
            <a href="#curry"><li><b>03</b> Curries</li></a>
            <a href="#starters"><li><b>01</b> Starters</li></a>
            <a href="#ranp"><li><b>02</b> Rotis and Parathas</li></a>
            <a href="#curry"><li><b>03</b> Curries</li></a>
            <a href="#starters"><li><b>01</b> Starters</li></a>
            `;
        } 
}

widthChangeCallback4();
myMediaQuery1.addEventListener('resize', widthChangeCallback4);
widthChangeCallback3();
myMediaQuery1.addEventListener('resize', widthChangeCallback3);
widthChangeCallback2();
myMediaQuery1.addEventListener('resize', widthChangeCallback2);
widthChangeCallback1();
myMediaQuery1.addEventListener('resize', widthChangeCallback1);
widthChangeCallback();
myMediaQuery1.addEventListener('resize', widthChangeCallback);
