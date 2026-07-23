// Mobile Menu Toggle

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");


menuBtn.addEventListener("click", ()=>{

    navLinks.classList.toggle("active");

});



// Booking Form Demo Message

const form = document.querySelector(".booking-form");


form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Thank you! Your booking request has been submitted. (Demo Website)");

});