const btn = document.getElementById("to-top");
const bars = document.querySelector(".toggle-menu");
const menu = document.querySelector(".toggle-menu + ul");
const skills = document.querySelector(".feats .container div.skills");
const allSkills = document.querySelectorAll(".skills .main-prog .prog span");
const counterElements = document.querySelectorAll(".scroll-counter");
const nameInp = document.getElementsByName("name")[0];
const emailInp = document.getElementsByName("email")[0];
const nameHolder = document.getElementById("nameHolder");
const emailHolder = document.getElementById("emailHolder");

// Counters
document.addEventListener("DOMContentLoaded", () => {
    counterElements.forEach((item) => {
        item.counterAlreadyFired = false;
        item.counterSpeed = 40;
        item.counterTarget = +item.innerText;
        item.counterCount = 0;
        item.counterStep = item.counterTarget / item.counterSpeed;

        item.updateCounter = () => {
            item.counterCount = item.counterCount + item.counterStep;
            item.innerText = Math.ceil(item.counterCount);

            if (item.counterCount < item.counterTarget) {
                setTimeout(item.updateCounter, item.counterSpeed);
            } else {
                item.innerText = item.counterTarget;
            }
        };
    });
});

// Function To Determine If Counter Element Is Visible Or Not
function isElementVisible(el) {
    let scroll = window.scrollY || window.pageYOffset;
    let boundsTop = el.getBoundingClientRect().top + scroll;
    let viewport = {
        top: scroll,
        bottom: scroll + window.innerHeight,
    };
    let bounds = {
        top: boundsTop,
        bottom: boundsTop + el.clientHeight,
    };
    return (
        (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
        (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
    );
}

// Counter Funciton That Will Run On Scrolling
function handleScroll() {
    counterElements.forEach((item) => {
        if (true === item.counterAlreadyFired) return;
        if (!isElementVisible(item)) return;
        item.updateCounter();
        item.counterAlreadyFired = true;
    });
}

window.onscroll = () => {
    // Making Scroll To Top Button Visible
    window.scrollY >= 500
        ? (btn.style.right = "20px")
        : (btn.style.right = "-1000px");

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

    // Start Counters
    handleScroll();
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
