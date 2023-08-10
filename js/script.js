function Menu(e) {
  let list = document.querySelector("ul");
  e.name === "menu-outline"
    ? ((e.name = "close-outline"),
      list.classList.add("top-[80px]"),
      list.classList.add("opacity-100"))
    : ((e.name = "menu-outline"),
      list.classList.remove("top-[80px]"),
      list.classList.add("opacity-100"));
}

const navigation = document.querySelector("#road");
const navigationHeight = navigation.offsetHeight;
document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "px"
);
gsap.registerPlugin(MotionPathPlugin);

gsap.from("#hero-left", {
  opacity: 0,
  x: -100,
  duration: 1,
  delay: 1,
});

gsap.from("#hero-right", {
  opacity: 0,
  x: 100,
  duration: 1,
  delay: 1,
});

gsap.from("#about-head", {
  scrollTrigger: {
    trigger: "#about-head",
    scroller: "body",
    scrub: 1,
    start: "top 90%",
    end: "bottom 50%",
  },
  opacity: 0,
  y: 100,
  duration: 1,
});

gsap.from("#about-top", {
  scrollTrigger: {
    trigger: "#about-top",
    scroller: "body",
    scrub: 1,
    start: "top 90%",
    end: "bottom 50%",
  },
  opacity: 0,
  x: 100,
  duration: 1,
  delay: 1,
});

gsap.from("#about-bottom", {
  scrollTrigger: {
    trigger: "#about-bottom",
    scroller: "body",
    scrub: 1,
    start: "top 90%",
    end: "bottom 50%",
  },
  opacity: 0,
  x: -100,
  duration: 1,
  delay: 1,
});

gsap.from("#thats-head", {
  scrollTrigger: {
    trigger: "#thats-head",
    scroller: "body",
    scrub: 1,
    start: "top 90%",
    end: "bottom 50%",
  },
  opacity: 0,
  y: 100,
  duration: 1,
});

gsap.from("#thats-01", {
  scrollTrigger: {
    trigger: "#thats-01",
    scroller: "body",
    scrub: 1,
    start: "top 90%",
    end: "top 50%",
  },
  opacity: 0,
  x: -100,
  duration: 1,
  delay: 1,
});

gsap.from("#thats-02", {
  scrollTrigger: {
    trigger: "#thats-02",
    scroller: "body",
    scrub: 1,
    start: "top 90%",
    end: "top 50%",
  },
  opacity: 0,
  y: -100,
  duration: 1,
  delay: 1,
});

gsap.from("#thats-03", {
  scrollTrigger: {
    trigger: "#thats-03",
    scroller: "body",
    scrub: 1,
    start: "top 90%",
    end: "top 50%",
  },
  opacity: 0,
  y: 100,
  duration: 1,
  delay: 1,
});

gsap.from("#thats-04", {
  scrollTrigger: {
    trigger: "#thats-04",
    scroller: "body",
    scrub: 1,
    start: "top 90%",
    end: "top 50%",
  },
  opacity: 0,
  x: 100,
  duration: 1,
  delay: 1,
});

gsap.from("#act-head", {
  scrollTrigger: {
    trigger: "#act-head",
    scroller: "body",
    scrub: 1,
    start: "top 90%",
    end: "bottom 50%",
  },
  opacity: 0,
  y: 100,
  duration: 1,
});

gsap.from("#act-body", {
  scrollTrigger: {
    trigger: "#act-body",
    scroller: "body",
    scrub: 1,
    start: "top 90%",
    end: "bottom 50%",
  },
  opacity: 0,
  y: 100,
  duration: 1,
  delay: 1,
});

const t1 = gsap.timeline({ defaults: { duration: 0.95, delay: 3 } });
const t2 = gsap.timeline({ defaults: { duration: 0.95, delay: 3 } });
const t3 = gsap.timeline({ defaults: { duration: 0.95, delay: 3 } });
t1.fromTo(
  "#act-01",
  {
    y: -20,
  },
  {
    y: 0,
    yoyo: true,
    repeat: -1,
  }
);
t2.fromTo(
  "#act-02",
  {
    y: -20,
  },
  {
    y: 0,
    yoyo: true,
    repeat: -1,
  }
);
t3.fromTo(
  "#act-03",
  {
    y: -20,
  },
  {
    y: 0,
    yoyo: true,
    repeat: -1,
  }
);

gsap.from("#launch-head", {
  scrollTrigger: {
    trigger: "#launch-head",
    scroller: "body",
    scrub: 1,
    start: "top 90%",
    end: "bottom 50%",
  },
  opacity: 0,
  y: 100,
  duration: 1,
});

gsap.from("#launchpad", {
  scrollTrigger: {
    trigger: "#launchpad",
    scroller: "body",
    scrub: 1,
    start: "top 90%",
    end: "bottom 50%",
  },
  opacity: 0,
  y: 100,
  duration: 1,
  delay: 1,
});

gsap.from("#launch-p", {
  scrollTrigger: {
    trigger: "#launch-p",
    scroller: "body",
    scrub: 1,
    start: "top 90%",
    end: "bottom 50%",
  },
  opacity: 0,
  x: -100,
  duration: 1,
});

gsap.from("#road-head", {
  scrollTrigger: {
    trigger: "#road-head",
    scroller: "body",
    scrub: 1,
    start: "top 90%",
    end: "bottom 50%",
  },
  opacity: 0,
  y: 100,
  duration: 1,
});

gsap.from("#road-img", {
  scrollTrigger: {
    trigger: "#road-img",
    scroller: "body",
    scrub: 1,
    start: "top 90%",
    end: "top 50%",
  },
  opacity: 0,
  y: 100,
  duration: 1,
});

gsap.from("#road-btn", {
  scrollTrigger: {
    trigger: "#road-btn",
    scroller: "body",
    scrub: 1,
    start: "top 90%",
    end: "bottom 50%",
  },
  opacity: 0,
  x: 100,
  duration: 1,
});

gsap.from("#blog-head", {
  scrollTrigger: {
    trigger: "#blog-head",
    scroller: "body",
    scrub: 1,
    start: "top 90%",
    end: "bottom 50%",
  },
  opacity: 0,
  y: 100,
  duration: 1,
});

gsap.from("#blog-top", {
  scrollTrigger: {
    trigger: "#blog-top",
    scroller: "body",
    scrub: 1,
    start: "top 90%",
    end: "bottom 50%",
  },
  opacity: 0,
  x: -100,
  duration: 1,
});

gsap.from("#blog-md", {
  scrollTrigger: {
    trigger: "#blog-md",
    scroller: "body",
    scrub: 1,
    start: "top 90%",
    end: "bottom 50%",
  },
  opacity: 0,
  x: 100,
  duration: 1,
});

gsap.from("#blog-bottom", {
  scrollTrigger: {
    trigger: "#blog-bottom",
    scroller: "body",
    scrub: 1,
    start: "top 90%",
    end: "bottom 50%",
  },
  opacity: 0,
  x: -100,
  duration: 1,
});
