const btn = document.getElementById("to-top");
const bars = document.querySelector(".toggle-menu");
const menu = document.querySelector(".toggle-menu + ul");
const counters = document.querySelector(".stats");
const counterElements = document.querySelectorAll(".scroll-counter");
const skills = document.querySelector(".feats .container div.skills");
const allSkills = document.querySelectorAll(".skills .main-prog .prog span");
const nameInp = document.getElementsByName("name")[0];
const emailInp = document.getElementsByName("email")[0];
const nameHolder = document.getElementById("nameHolder");
const emailHolder = document.getElementById("emailHolder");
let started = false;

function startCount(el) {
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == el.dataset.goal) clearInterval(count);
    }, 2000 / el.dataset.goal);
}
window.onscroll = () => {
    // Making Scroll To Top Button Visible
    window.scrollY >= 500
        ? (btn.style.right = "20px")
        : (btn.style.right = "-1000px");

    // Counters Start When Appear
    if (window.scrollY >= counters.offsetTop - 200) {
        if (!started) {
            counterElements.forEach((num) => startCount(num));
        }
        started = true;
    }

    // Progress Bar Fill When Appear
    if (window.scrollY >= skills.offsetTop - 200) {
        allSkills.forEach((skill) => {
            skill.style.width = skill.dataset.prog;
        });
    } else {
        allSkills.forEach((skill) => {
            skill.style.width = "0";
        });
    }
};

// Scroll To Top Button Scroll Up When Clicked
btn.onclick = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
};

// Menu Toggle
bars.onclick = () => {
    menu.classList.toggle("show");
};

// Inputs Placeholders
function inputCont(element, holder) {
    element.onfocus = () => holder.classList.add("has-data");
    element.onblur = () => {
        if (element.value === "") {
            holder.classList.remove("has-data");
        }
    };
}
inputCont(nameInp, nameHolder);
inputCont(emailInp, emailHolder);

nameHolder.onclick = () => nameInp.focus();
emailHolder.onclick = () => emailInp.focus();

const images = [
    "url(images/landing-00.jpg)",
    "url(images/landing-01.jpg)",
    "url(images/landing-02.jpg)",
    "url(images/landing-03.jpg)",
    "url(images/landing-04.jpg)",
    "url(images/landing-05.jpg)",
    "url(images/landing-06.jpg)",
    "url(images/landing-07.jpg)",
    "url(images/landing-08.jpg)",
    "url(images/landing-09.jpg)",
];
document.querySelector(".landing").style.backgroundImage =
    images[Math.floor(Math.random() * images.length)];
for (let i = 0; i < images.length; i++) {
    let myBull = document.createElement("span");
    document.querySelector(".landing .bullets").append(myBull);
}
setInterval(() => {
    const randomImg = Math.floor(Math.random() * images.length);
    document.querySelector(".landing").style.backgroundImage =
        images[randomImg];
    document.querySelectorAll(".bullets span").forEach((el) => {
        el.classList.remove("active");
    });
    document
        .querySelectorAll(".bullets span")
        [randomImg].classList.add("active");
}, 3000);
