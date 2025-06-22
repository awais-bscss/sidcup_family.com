const curserBlur = document.querySelector("#curser-blur");
const curser = document.querySelector("#curser");

document.addEventListener("mousemove", function (event) {
  const x = event.clientX;
  const y = event.clientY;
  curser.style.left = x + "px";
  curser.style.top = y + "px";
  curserBlur.style.left = x - 100 + "px";
  curserBlur.style.top = y - 100 + "px";
});

gsap.to("#nav", {
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  duration: 0.5,
  delay: 1,
  height: "15%",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    markers: true,
    start: "top -3%",
    end: "top -4%",
    scrub: 2,
  },
});
gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    markers: true,
    start: "top -50%",
    end: "top -100%",
    scrub: 2,
  },
});
