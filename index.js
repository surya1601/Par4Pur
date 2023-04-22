document.querySelector(".logo").addEventListener('click', () => {
    window.scrollTo(0,510);
});


let toggleMob = document.querySelector(".right")
let btn = document.querySelector(".icon .bi")

btn.addEventListener('click', () => {
    if (btn.getAttribute("flag") === 'false'){
        btn.setAttribute("flag",'true'); 
        toggleMob.setAttribute("flag", "true"); 
        btn.classList.remove("bi-list");
        btn.classList.add("bi-x-lg");
    }
    else{
        btn.setAttribute("flag",'false'); 
        toggleMob.setAttribute("flag",'false'); 
        btn.classList.add("bi-list");
        btn.classList.remove("bi-x-lg");
    }
})


let hotels = [
    {
        id: "eidd",
        title: "JCB Night Canteen",
        img:"kgp1.jpg",
        type: "Non Veg",
        status: "OPEN"
    },
    {
        id: "stst",
        title: "MT Night Canteen",
        img:"kgp1.jpg",
        type: "Non Veg",
        status: "CLOSE"
    },
    {
        id: "iodj",
        title: "VS Night Canteen",
        img:"kgp1.jpg",
        type: "Non Veg",
        status: "OPEN"
    },
    {
        id: "kdad",
        title: "HJB Night Canteen",
        img:"kgp1.jpg",
        type: "Non Veg",
        status: "CLOSE"
    },
    {
        id: "wqij",
        title: "Amigos",
        img:"kgp1.jpg",
        type: "Non Veg",
        status: "OPEN"
    },
    {
        id: "moef",
        title: "SmartPind",
        img:"kgp1.jpg",
        type: "Non Veg",
        status: "CLOSE"
    },
    {
        id: "cadh",
        title: "Patel Night Canteen",
        img:"kgp1.jpg",
        type: "Non Veg",
        status: "OPEN"
    },
    {
        id: "eiwrr",
        title: "Vegies",
        img:"kgp1.jpg",
        type: "Veg",
        status: "CLOSE"
    },
    {
        id: "teorqw",
        title: "LLR Night Canteen",
        img:"kgp1.jpg",
        type: "Non Veg",
        status: "OPEN"
    },
    {
        id: "mwok",
        title: "Food City",
        img:"kgp1.jpg",
        type: "Non Veg",
        status: "CLOSE"
    },
    {
        id: "ioequ",
        title: "Cafe Coffee Day",
        img:"kgp1.jpg",
        type: "Non Veg",
        status: "OPEN"
    },
    {
        id: "pqsn",
        title: "Tikka",
        img:"kgp1.jpg",
        type: "Non Veg",
        status: "CLOSE"
    },
    {
        id: "powq",
        title: "Mio Amore",
        img:"kgp1.jpg",
        type: "Non Veg",
        status: "OPEN"
    },
    {
        id: "rodae",
        title: "Baskin Robbins",
        img:"kgp1.jpg",
        type: "Non Veg",
        status: "CLOSE"
    },
    {
        id: "cdjc",
        title: "Subway",
        img:"kgp1.jpg",
        type: "Non Veg",
        status: "OPEN"
    }
]

let cards = document.querySelector("#ca");

let generateCards = () => {
    cards.innerHTML = hotels.map((x, num) =>{
        if (num < 9){
            return `
            <div class="card1" id="hotel-id-${x.id}">
            <div class="img1">
            <a href="index1.html">
            <img src=${x.img} alt="img" class="img">
            </a>
            </div>
            <div class="content">
                <h2>${x.title}</h2>
                <div class="desc">
                    <p class=${x.type}>•${x.type}</p>
                    <div class="open" type=${x.status}>${x.status}</div>
                </div>
            </div>
            </div>
            `
        }

    }).join("");
}

generateCards();

let showMore = document.querySelector("h2.showm")

showMore.addEventListener('click', () => {
    let cards = document.querySelector('.cards')
    cards.innerHTML += hotels.map((x, num) =>{
        if (num >= 9){
            return `
            <div class="card1" id="hotel-id-${x.id}">
            <div class="img1">
            <a href="index1.html">
            <img src=${x.img} alt="img" class="img">
            </a>
            </div>
            <div class="content">
                <h2>${x.title}</h2>
                <div class="desc">
                    <p class=${x.type}>•${x.type}</p>
                    <div class="open" type=${x.status}>${x.status}</div>
                </div>
            </div>
            </div>
            `
        }
    }).join("");
    showMore.style.visibility = 'hidden'
})

