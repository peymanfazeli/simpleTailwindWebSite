const access = document.querySelector("#access");
const superc = document.querySelector("#superCharge");
const btns = document.querySelectorAll(".btn");
btns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const dist = document.querySelector(e.target.getAttribute("href"));
    console.log(dist);
    dist.scrollIntoView({ behavior: "smooth" });
  })
);
// making sections hidden
const allSections = document.querySelectorAll(".section");
const revealSections = (thrEntries, observer) => {
  const [thrEntry] = thrEntries;
  if (!thrEntry.isIntersecting) return;
  thrEntry.target.classList.remove("translate-y-32");
  thrEntry.target.classList.remove("opacity-0");
  observer.unobserve(thrEntry.target);
};
const sectionObserver = new IntersectionObserver(revealSections, {
  root: null,
  threshold: 0.1,
});
allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("opacity-0");
  section.classList.add("transform");
  section.classList.add("translate-y-32");
});
// Loading lazy img
const imgTarget = document.querySelectorAll("img[data-src]");
const imgLoader = (thrEntries, observer) => {
  const [thrEntry] = thrEntries;
  if (!thrEntry.isIntersecting) return;
  thrEntry.target.src = thrEntry.target.dataset.src;
  thrEntry.target.addEventListener("load", () => {
    thrEntry.target.classList.remove("blur-lg");
  });
  observer.unobserve(thrEntry.target);
};
const imgObserver = new IntersectionObserver(imgLoader, {
  root: null,
  threshold: 0.9,
  rootMargin: "500px",
});
imgTarget.forEach((img) => {
  imgObserver.observe(img);
});
