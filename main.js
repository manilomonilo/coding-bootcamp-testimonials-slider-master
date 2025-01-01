let tanyaSection = document.querySelector(".tanya-sinclair");
let johnSection = document.querySelector(".john-tarkpor");
let btnPrev = document.querySelector(".btn-previous");
let btnNext = document.querySelector(".btn-next");

btnPrev.addEventListener("click", () => {
    tanyaSection.style.display = "none";
    johnSection.style.display = "block";
});

btnNext.addEventListener("click", () => {
    johnSection.style.display = "none";
    tanyaSection.style.display = "block";
});