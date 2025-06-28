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
var h4s = document.querySelectorAll("h4");
h4s.forEach((h4) => {
  h4.addEventListener("mouseenter", function () {
    curserBlur.style.transform = "(scale1.5)";
    curser.style.border = "1px solid rgb(244, 249, 227)";
    curser.style.transform = "scale(4)";
    curser.style.backgroundColor = "transparent";
    // curser.style.transition = "all 1s linear";
  });
  h4.addEventListener("mouseleave", function () {
    curserBlur.style.transform = "scale(1)";
    curser.style.border = "none";
    curser.style.transform = "scale(1)";
    curser.style.backgroundColor = "#91b508";
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  delay: 1,
  height: "15%",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
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
    // markers: true,
    start: "top -50%",
    end: "top -100%",
    scrub: 2,
  },
});
gsap.registerPlugin(ScrollTrigger);

gsap.from("#about .img_1, .img_2, #about-text", {
  y: 90,
  opacity: 0,
  duration: 1,
  // stagger: 0.4,
  scrollTrigger: {
    trigger: "#about",
    scroller: "body",
    start: "top 60%",
    end: "top 55%",
    toggleActions: "restart none restart none",
    scrub: 2,
  },
});
gsap.from(".card", {
  y: 90,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 70%",
    end: "top 55%",
    toggleActions: "restart none restart none",
    scrub: 2,
  },
});
gsap.from("#colon1", {
  y: -50,
  x: -50,
  // opacity: 0,
  duration: 1,
  // stagger: 0.3,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 20%",
    end: "top 15%",
    toggleActions: "restart none restart none",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 50,
  x: 50,
  // opacity: 0,
  duration: 1,
  // stagger: 0.3,
  scrollTrigger: {
    trigger: "#colon2",
    scroller: "body",
    start: "top 70%",
    end: "top 72%",
    toggleActions: "restart none restart none",
    scrub: 2,
  },
});
gsap.from("#page_4 h1", {
  y: 30,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#page_4 h1",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    toggleActions: "restart none restart none",
    scrub: 2,
  },
});
