const searcForm = document.querySelector(".search-form");
const cardItem = document.querySelector(".card-items-container");
const navbar = document.querySelector(".navbar");
// BUTTONS
const searcBtn = document.querySelector("#search-btn");
const cardBtn = document.querySelector("#card-btn");
const menuBtn = document.querySelector("#menu-btn");


searcBtn.addEventListener("click", function() {
    searcForm.classList.toggle("active");
    document.addEventListener("click", function(e){
        if (
            !e.composedPath().includes(searcBtn) &&
            !e.composedPath().includes(searcForm)
            ) {
            searcForm.classList.remove("active");
        }
    });
});

cardBtn.addEventListener("click", function() {
    cardItem.classList.toggle("active");
    document.addEventListener("click", function(e){
        if (
            !e.composedPath().includes(cardBtn) &&
            !e.composedPath().includes(cardItem)
            ) {
            cardItem.classList.remove("active");
        }
    });
});

menuBtn.addEventListener("click", function() {
    navbar.classList.toggle("active");
    document.addEventListener("click", function(e){
        if (
            !e.composedPath().includes(menuBtn) &&
            !e.composedPath().includes(navbar)
            ) {
            navbar.classList.remove("active");
        }
    });
});