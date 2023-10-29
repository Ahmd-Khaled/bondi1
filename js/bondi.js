// -------Work Shuffle --------
let workBtns = document.querySelectorAll(".our-work  .work-btns li");
let workCards = document.querySelectorAll(".our-work  .row .all");

workBtns.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageImgs);
});

function removeActive() {
    workBtns.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
        this.classList.add("rounded-2");
    });
}

function manageImgs() {
    workCards.forEach((card) => {
        card.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display = "block";
    })
}