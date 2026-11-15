// انتخاب صفحات
const welcome = document.getElementById("welcome");
const loveMessage = document.getElementById("loveMessage");
const questionPage = document.getElementById("questionPage");
const finalPage = document.getElementById("finalPage");

// تغییر صفحه
function showPage(page) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    page.classList.add("active");
}

// دکمه شروع
document.getElementById("startButton").addEventListener("click", () => {
    showPage(loveMessage);
});

// رفتن به سؤال
document.getElementById("nextButton").addEventListener("click", () => {
    showPage(questionPage);
});

// دکمه نه
document.getElementById("no").addEventListener("click", () => {

    const question = document.getElementById("question");
    const buttons = document.getElementById("buttons");

    question.innerHTML =
        "نمیشه که 😂🤣<br>باید دوستم داشته باشی نفسکم ❤️";

    buttons.style.display = "none";

    setTimeout(() => {
        question.innerHTML = "تو هم منو به اندازه من دوست داری؟ 💕";
        buttons.style.display = "flex";
    }, 2000);

});

// دکمه بله
document.getElementById("yes").addEventListener("click", () => {
    showPage(finalPage);
});

// تولید قلب‌های شناور
const heartContainer = document.getElementById("backgroundHearts");

const heartSymbols = ["❤️", "💗", "💕", "💖", "💞", "🌸"];

function createHeart() {

    const heart = document.createElement("span");

    heart.classList.add("floating-heart");

    heart.textContent =
        heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    const duration = 5 + Math.random() * 5;

    heart.style.animationDuration = duration + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// هر 400 میلی‌ثانیه یک قلب
setInterval(createHeart, 400);