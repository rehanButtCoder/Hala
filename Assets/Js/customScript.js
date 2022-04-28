// desktop menu
document.getElementById('opEn').onclick = function () {
    let element = document.querySelector(".mainNavContent");
    element.classList.add("openNav");
    // for bg
    let element1 = document.querySelector(".mainNav");
    element1.classList.add("openNavBg");
}

document.getElementById('closeBtn').onclick = function () {
    let element = document.querySelector(".mainNavContent");
    element.classList.remove("openNav");
    // for bg
    let element1 = document.querySelector(".mainNav");
    element1.classList.remove("openNavBg");
}

// Mobile Menu


function openNav() {
    let element1 = document.querySelector(".sidenav");
    element1.classList.add("widthMobile"); 

    // bg
    let element = document.querySelector(".freeClass");
    element.classList.add("bgSet"); 
}

function closeNav() {
    let element1 = document.querySelector(".sidenav");
    element1.classList.remove("widthMobile"); 
    
    // bg
    let element = document.querySelector(".freeClass");
    element.classList.remove("bgSet");  
  }