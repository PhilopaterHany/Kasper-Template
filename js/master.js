// Navigation Top
function navTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
}

// Menu Toggle
const bars = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const menu = document.querySelector(".open-menu + ul");
if (!menu.classList.contains("show")) {
    closeMenu.style.display = "none";
}
bars.onclick = () => {
    menu.classList.add("show");
    bars.style.display = "none";
    closeMenu.style.display = "inline-block";
};
closeMenu.onclick = () => {
    menu.classList.remove("show");
    bars.style.display = "inline-block";
    closeMenu.style.display = "none";
};

// Sticky Navigation Bar
const navBar = document.querySelector("header");
const scrollProg = document.querySelector("header .holder");
window.addEventListener("scroll", () => {
    if (scrollY > 25) {
        navBar.style.cssText =
            "width: 98%;position: fixed;top: 10px;left: 50%;margin-left: -49%;background-color: #000000aa;backdrop-filter:blur(5px);";
    } else {
        navBar.style.cssText =
            "width: 100%;position: absolute; top: 0 !important;margin-left: unset !important;background-color: transparent !important;backdrop-filter: none !important;";
    }
});
window.addEventListener("scroll", () => {
    document.querySelector(".prog").style.width = `${parseInt(
        (scrollY / (document.body.scrollHeight - 750)) * 100
    )}%`;
});

// Active Current Section
const navLinks = document.querySelectorAll("header nav ul li a");
const navSections = [
    ".services",
    ".design",
    ".about",
    ".pricing",
    ".contact",
    ".footer",
];
function removeNavActive() {
    navLinks.forEach((e) => {
        e.classList.remove("active");
    });
}
window.addEventListener("scroll", () => {
    if (scrollY < document.querySelector(".services").offsetTop) {
        removeNavActive();
        navLinks[0].classList.add("active");
    } else if (scrollY < document.querySelector(".design").offsetTop) {
        removeNavActive();
        navLinks[1].classList.add("active");
    } else if (scrollY < document.querySelector(".about").offsetTop) {
        removeNavActive();
        navLinks[2].classList.add("active");
    } else if (scrollY < document.querySelector(".pricing").offsetTop) {
        removeNavActive();
        navLinks[3].classList.add("active");
    } else if (scrollY < document.querySelector(".contact").offsetTop) {
        removeNavActive();
        navLinks[4].classList.add("active");
    } else if (scrollY < document.querySelector("footer").offsetTop) {
        removeNavActive();
        navLinks[5].classList.add("active");
    }
});

// Random Background for Landing Section
const bgImages = [
    "url(images/landing-00.jpg)",
    "url(images/landing-01.jpg)",
    "url(images/landing-02.jpg)",
    "url(images/landing-03.jpg)",
    "url(images/landing-04.jpg)",
    "url(images/landing-05.jpg)",
    "url(images/landing-06.jpg)",
    "url(images/landing-07.jpg)",
];
document.querySelector(".landing").style.backgroundImage =
    bgImages[Math.floor(Math.random() * bgImages.length)];
for (let i = 0; i < bgImages.length; i++) {
    let bgBull = document.createElement("span");
    document.querySelector(".landing .bullets").append(bgBull);
}
setInterval(() => {
    const randomImg = Math.floor(Math.random() * bgImages.length);
    document.querySelector(".landing").style.backgroundImage =
        bgImages[randomImg];
    document.querySelectorAll(".bullets span").forEach((el) => {
        el.classList.remove("active");
    });
    document
        .querySelectorAll(".bullets span")
        [randomImg].classList.add("active");
}, 3000);

// Our Work/Portfolio Filter
const workLis = document.querySelectorAll("ul.categ li");
const workImages = document.querySelectorAll(".portfolio img");
workImages.forEach((img) => {
    img.nextElementSibling.lastElementChild.innerHTML =
        img.classList[1][0].toUpperCase() + img.classList[1].slice(1);
});
workLis.forEach((li) => {
    li.addEventListener("click", () => {
        workLis.forEach((li) => {
            li.classList.remove("active");
            workImages.forEach((img) => {
                img.parentElement.style.display = "none";
            });
        });
        document.querySelectorAll(li.dataset.work).forEach((img) => {
            img.parentElement.style.display = "inline-block";
        });
        li.classList.add("active");
    });
});

// Counters Start When Appear
let started = false;
const counters = document.querySelector(".stats");
const counterElements = document.querySelectorAll(".scroll-counter");
function startCount(el) {
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == el.dataset.goal) clearInterval(count);
    }, 2000 / el.dataset.goal);
}
window.addEventListener("scroll", () => {
    if (window.scrollY >= counters.offsetTop - 200) {
        if (!started) {
            counterElements.forEach((num) => startCount(num));
        }
        started = true;
    }
});

// Testimonials Slider
const testimonialsBullets = document.querySelectorAll(
    ".testimonials .bullets li"
);
for (let i = 0; i < testimonialsBullets.length; i++) {
    testimonialsBullets[i].addEventListener("click", () => {
        testimonialsBullets.forEach((bullet) => {
            bullet.classList.remove("active");
        });
        testimonialsBullets[i].classList.add("active");
    });
}

// Skills Progress Bar Fill When Appear
const skills = document.querySelector(".feats .container div.skills");
const allSkills = document.querySelectorAll(".skills .main-prog .prog span");
window.addEventListener("scroll", () => {
    if (window.scrollY >= skills.offsetTop - 175) {
        allSkills.forEach((skill) => {
            skill.style.width = skill.dataset.prog;
        });
    } else {
        allSkills.forEach((skill) => {
            skill.style.width = "0";
        });
    }
});

// Inputs Placeholders
const nameInp = document.getElementsByName("name")[0];
const emailInp = document.getElementsByName("email")[0];
const nameHolder = document.getElementById("nameHolder");
const emailHolder = document.getElementById("emailHolder");
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

// Making Scroll To Top Button Visible
const btn = document.getElementById("to-top");
window.addEventListener("scroll", () => {
    window.scrollY >= 500
        ? (btn.style.right = "20px")
        : (btn.style.right = "-1000px");
});

// Scroll To Top Button Scroll Up When Clicked
btn.onclick = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
};
