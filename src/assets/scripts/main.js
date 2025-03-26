const obrir = document.querySelector(".menu_obrir");
const tancar = document.querySelector(".desplegat_tancar");
const menuDesplegat = document.querySelector(".desplegat")

obrir.addEventListener("click", function() {
    menuDesplegat.classList.add("visible");
});

tancar.addEventListener("click", function() {
    menuDesplegat.classList.remove("visible");
});
