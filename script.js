// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


var typed = new Typed(".text", {
    strings: [" দ্রুত সার্ভিস 🚑" ," সাশ্রয়ী যাতায়াত 💰" , " অভিজ্ঞ মেডিকেল টিম 👨‍⚕️", " ২৪ঘন্টা/৭দিন সাপোর্ট 🕐", " জরুরি বুকিং সুবিধা 📲"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


document.addEventListener("DOMContentLoaded", () => {
    const toTop = document.querySelector(".scroll-to-top");
    const mobilefixed = document.querySelector(".floating-call-button");

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) {
            toTop.classList.add("active");
            mobilefixed.classList.add("active");
        } else {
            toTop.classList.remove("active");
            mobilefixed.classList.remove("active");
            console.log("Active removed");
        }
    });
});

