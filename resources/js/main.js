$(".fireWorks").fireworks({
    sound: true, // sound effect
    opacity: 0.9,
    width: "100%",
    height: "100%",
});

let parallax = document.querySelector(".parallax");
window.addEventListener("mousemove", (e) => {
    let x = e.x / 20;
    let y = e.y / 20;
    parallax.style.transform = `translate(${x}px, ${y}px)`;
});
