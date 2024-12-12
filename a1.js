
document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const navMenu = document.querySelector("nav ul");

    menuIcon.addEventListener("click", () => {
        navMenu.classList.toggle("show-menu");
    });

    const orderButton = document.querySelector(".order-btn");
    orderButton.addEventListener("click", () => {
        alert("Order functionality is under development. Thank you for your interest!");
    });
});


var myIndex = 0;

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1;
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 3000);
}
