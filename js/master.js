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
            "width: 98%;position: fixed;top: 10px;left: 50%;margin-left: -49%;background-color: var(--blackTransparent);backdrop-filter:blur(5px);";
    } else {
        navBar.style.cssText =
            "width: 100%;position: absolute; top: 0 !important;margin-left: unset !important;";
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
window.addEventListener("load", () => {
    navLinks[0].classList.add("active");
});
window.addEventListener("scroll", () => {
    if (scrollY < document.querySelector(".services").offsetTop) {
        removeNavActive();
        navLinks[0].classList.add("active");
    } else if (scrollY < document.querySelector(".design").offsetTop - 50) {
        removeNavActive();
        navLinks[1].classList.add("active");
    } else if (scrollY < document.querySelector(".about").offsetTop - 50) {
        removeNavActive();
        navLinks[2].classList.add("active");
    } else if (scrollY < document.querySelector(".pricing").offsetTop - 50) {
        removeNavActive();
        navLinks[3].classList.add("active");
    } else if (scrollY < document.querySelector(".contact").offsetTop - 50) {
        removeNavActive();
        navLinks[4].classList.add("active");
    } else if (scrollY < document.querySelector("footer").offsetTop - 50) {
        removeNavActive();
        navLinks[5].classList.add("active");
    }
});

// Slider Landing Section
const landing = document.querySelector(".landing");
const landingBulletsHolder = document.querySelector(".landing .bullets");
const slideLeft = document.querySelector(".arrows .slide-left");
const slideRight = document.querySelector(".arrows .slide-right");
const bgImages = [
    "images/landing-01.webp",
    "images/landing-02.webp",
    "images/landing-03.webp",
];
for (let i = 0; i < bgImages.length; i++) {
    let bgBull = document.createElement("span");
    bgBull.setAttribute("data-index", i);
    landingBulletsHolder.append(bgBull);
}
const landingBullets = document.querySelectorAll(".landing .bullets span");
function checker(index, arrow) {
    if (landingBullets[index].classList.contains("active")) {
        arrow.classList.add("disabled");
    } else {
        arrow.classList.remove("disabled");
    }
}
for (let i = 0; i < landingBullets.length; i++) {
    landingBullets[i].onclick = () => {
        landing.style.backgroundImage = `url(${
            bgImages[landingBullets[i].dataset.index]
        })`;
        landingBullets.forEach((bullet) => {
            bullet.classList.remove("active");
        });
        landingBullets[i].classList.add("active");
        checker(0, slideLeft);
        checker(landingBullets.length - 1, slideRight);
    };
}
landingBullets[0].click();
slideLeft.onclick = () => {
    if (!slideLeft.classList.contains("disabled")) {
        const activeBullet = document.querySelector(
            ".landing .bullets span.active"
        );
        activeBullet.previousElementSibling.click();
    }
};
slideRight.onclick = () => {
    if (!slideRight.classList.contains("disabled")) {
        const activeBullet = document.querySelector(
            ".landing .bullets span.active"
        );
        activeBullet.nextElementSibling.click();
    }
};
document.addEventListener("keyup", (e) => {
    if (e.key === "ArrowRight") slideRight.click();
    if (e.key === "ArrowLeft") slideLeft.click();
});

// Mobile Photo Appear On Scroll
const mobileImage = document.querySelector(".design .image img");
window.addEventListener("scroll", () => {
    if (window.scrollY >= document.querySelector(".design").offsetTop - 200) {
        mobileImage.style.left = "15%";
    } else {
        mobileImage.style.left = "-1000px";
    }
});

// Our Work/Portfolio Filter
const workLis = document.querySelectorAll(".portfolio ul.categ li");
const workImages = document.querySelectorAll(".portfolio .box img");
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

// Screens Photo Appear On Scroll
const screensImage = document.querySelector(".about img");
window.addEventListener("scroll", () => {
    if (window.scrollY >= document.querySelector(".about").offsetTop - 200) {
        screensImage.style.bottom = "-120px";
    } else {
        screensImage.style.bottom = "-1000px";
    }
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
    if (window.scrollY >= counters.offsetTop - 300) {
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
    if (window.scrollY >= skills.offsetTop - 250) {
        allSkills.forEach((skill) => {
            skill.style.width = skill.dataset.prog;
        });
    } else {
        allSkills.forEach((skill) => {
            skill.style.width = "0";
        });
    }
});

// Pricing Tables Appear On Scroll
const pricingTables = document.querySelectorAll(".pricing .plans .price");
window.addEventListener("scroll", () => {
    for (let i = 0; i < pricingTables.length; i++) {
        if (window.scrollY >= document.querySelector(".pricing").offsetTop) {
            pricingTables[i].style.opacity = "1";
        } else {
            pricingTables[i].style.opacity = "0";
        }
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
