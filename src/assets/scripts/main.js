const obrir = document.querySelector(".menu__obrir");
const tancar = document.querySelector(".desplegat__tancar");
const menuDesplegat = document.querySelector(".desplegat")

obrir.addEventListener("click", function() {
    menuDesplegat.classList.add("visible");
});

tancar.addEventListener("click", function() {
    menuDesplegat.classList.remove("visible");
});
