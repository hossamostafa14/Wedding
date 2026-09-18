// =========================
// NAVBAR SCROLL
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

// =========================
// COUNTDOWN
// =========================

const weddingDate = new Date("October 27, 2026 19:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        clearInterval(timer);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCountdown();

const timer = setInterval(updateCountdown, 1000);
// =========================
// SCROLL REVEAL
// =========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

sections.forEach(section => {

    section.classList.add("hidden");
    observer.observe(section);

});

// =========================
// ACTIVE NAVIGATION
// =========================

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {

            link.classList.add("active");

        }

    });

});

// =========================
// SMOOTH BUTTON EFFECT
// =========================

const readyBtn = document.getElementById("readyBtn");
const welcomeScreen = document.getElementById("welcome-screen");

readyBtn.addEventListener("click", () => {

    welcomeScreen.classList.add("hide");

    setTimeout(() => {

        startCelebration();

    }, 500);

});



function startCelebration() {

    const duration = 1500;
    const end = Date.now() + duration;

    (function frame() {

        confetti({
            particleCount: 4,
            angle: 60,
            spread: 70,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 4,
            angle: 120,
            spread: 70,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }

    })();

}


const couplePopup = document.getElementById("couple-popup");
const couplePopupImg = document.getElementById("couple-popup-img");

const coupleImages = [
    "images/couple1.png",
    "images/couple2.png",
    "images/couple3.png",
    "images/couple4.png",
    "images/couple5.png",
    "images/couple6.png",
    "images/couple7.png",
    "images/couple8.png",
    "images/couple9.png"

];

const directions = [
    "from-right",
    "from-left",
    "from-top",
    "from-bottom"
];

function showCouplePopup() {

    // Random image
    const randomImage =
        coupleImages[Math.floor(Math.random() * coupleImages.length)];

    // Random direction
    const randomDirection =
        directions[Math.floor(Math.random() * directions.length)];

    // Random size
    const randomSize =
        Math.floor(Math.random() * (320 - 200) + 200);

    // Random position
    const randomTop =
        Math.floor(Math.random() * 70) + 10;

    const randomLeft =
        Math.floor(Math.random() * 70) + 10;

    couplePopupImg.src = randomImage;

    couplePopup.style.width = randomSize + "px";

    couplePopup.style.top = randomTop + "vh";
    couplePopup.style.left = randomLeft + "vw";

    // Remove previous animation
    couplePopup.classList.remove(
        "from-right",
        "from-left",
        "from-top",
        "from-bottom"
    );

    // Force animation restart
    void couplePopup.offsetWidth;

    // Add random direction
    couplePopup.classList.add(randomDirection);
}


// أول ظهور
setTimeout(() => {
    showCouplePopup();
}, 3000);


// كل فترة
setInterval(() => {

    showCouplePopup();

}, 5000);

const comingBtn = document.getElementById("comingBtn");
const comingMessage = document.getElementById("comingMessage");
const weddingSound = document.getElementById("weddingSound");

comingBtn.addEventListener("click", () => {

    // Show message
    comingMessage.classList.add("show");

    // Restart sound every click
    weddingSound.currentTime = 0;
    weddingSound.play();

    // Confetti every click
    if (typeof confetti === "function") {
        confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.7 }
        });
    }
});