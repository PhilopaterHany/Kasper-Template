const btn = document.getElementById("to-top");
window.onscroll = () => {
    window.scrollY >= 500
        ? (btn.style.right = "20px")
        : (btn.style.right = "-1000px");
};
btn.onclick = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
};
