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


let showMore = document.querySelector("h2.showm")

showMore.addEventListener('click', () => {
    let cards = document.querySelector('.cards')
    cards.innerHTML += `
    <div class="card1">
    <div class="img1">
        <img src="kgp1.jpg" alt="img" class="img">
    </div>
    <div class="content">
        <h2>The JCB Night Canteen</h2>
        <div class="desc">
            <p class="nonveg">•Non Veg</p>
            <div class="open">OPEN</div>
        </div>

    </div>
</div>
<div class="card1">
    <div class="img1">
        <img src="kgp1.jpg" alt="img" class="img">
    </div>
    <div class="content">
        <h2>The JCB Night Canteen</h2>
        <div class="desc">
            <p class="nonveg">•Non Veg</p>
            <div class="open">OPEN</div>
        </div>

    </div>
</div>
<div class="card1">
    <div class="img1">
        <img src="kgp1.jpg" alt="img" class="img">
    </div>
    <div class="content">
        <h2>The JCB Night Canteen</h2>
        <div class="desc">
            <p class="nonveg">•Non Veg</p>
            <div class="open">OPEN</div>
        </div>

    </div>
</div>
<div class="card1">
    <div class="img1">
        <img src="kgp1.jpg" alt="img" class="img">
    </div>
    <div class="content">
        <h2>The JCB Night Canteen</h2>
        <div class="desc">
            <p class="nonveg">•Non Veg</p>
            <div class="open">OPEN</div>
        </div>

    </div>
</div>
<div class="card1">
    <div class="img1">
        <img src="kgp1.jpg" alt="img" class="img">
    </div>
    <div class="content">
        <h2>The JCB Night Canteen</h2>
        <div class="desc">
            <p class="nonveg">•Non Veg</p>
            <div class="open">OPEN</div>
        </div>

    </div>
</div>
<div class="card1">
    <div class="img1">
        <img src="kgp1.jpg" alt="img" class="img">
    </div>
    <div class="content">
        <h2>The JCB Night Canteen</h2>
        <div class="desc">
            <p class="nonveg">•Non Veg</p>
            <div class="open">OPEN</div>
        </div>

    </div>
</div>
    
    `;
    showMore.style.visibility = 'hidden'
})
