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
