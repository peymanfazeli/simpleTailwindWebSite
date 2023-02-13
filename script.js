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
