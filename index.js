featuresLi = document.querySelector(".features-li");
companyLi = document.querySelector(".company-li");
menu = document.querySelector(".menu");
menuBtn = document.querySelector(".menu-btn-container");
body = document.querySelector("body");

menu.style.display = "none";
menuBtn.addEventListener("click", () => {
  if (menu.style.display === "none") {
    menu.style.display = "block";
    menuBtn.style.background = "url(./images/icon-close-menu.svg) center/cover"
    body.classList.add("darken");
  } else {
    menu.style.display = "none";
    body.classList.remove("darken");
    menuBtn.style.background = "url(./images/icon-menu.svg) center/cover"
  }
});

featuresArrow.style.transform = "rotate(0deg)";
features.addEventListener("click", () => {
  featuresLi.classList.toggle("features-li-visible");
  if (featuresArrow.style.transform === "rotate(0deg)") {
    featuresArrow.style.transform = "rotate(180deg)";
  } else {
    featuresArrow.style.transform = "rotate(0deg)";
  }
});

companyArrow.style.transform = "rotate(0deg)";
company.addEventListener("click", () => {
  companyLi.classList.toggle("company-li-visible");
  if (companyArrow.style.transform === "rotate(0deg)") {
    companyArrow.style.transform = "rotate(180deg)";
  } else {
    companyArrow.style.transform = "rotate(0deg)";
  }
});
