document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-link");
  const path = window.location.pathname.split("/").pop();
  links.forEach(link => {
    if (link.getAttribute("href") === path || (path === "" && link.getAttribute("href") === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  links.forEach(link => {
    link.addEventListener("click", e => {
      if (link.hash !== "") {
        e.preventDefault();
        const target = document.querySelector(link.hash);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 70,
            behavior: "smooth"
          });
        }
      }
    });
  });

  const backToTop = document.createElement("button");
  backToTop.innerHTML = "⬆️";
  backToTop.id = "backToTop";
  document.body.appendChild(backToTop);

  backToTop.style.position = "fixed";
  backToTop.style.bottom = "20px";
  backToTop.style.right = "20px";
  backToTop.style.background = "#198754";
  backToTop.style.color = "#fff";
  backToTop.style.border = "none";
  backToTop.style.borderRadius = "50%";
  backToTop.style.width = "45px";
  backToTop.style.height = "45px";
  backToTop.style.fontSize = "20px";
  backToTop.style.cursor = "pointer";
  backToTop.style.display = "none";
  backToTop.style.boxShadow = "0 3px 8px rgba(0,0,0,0.2)";
  backToTop.style.transition = "opacity 0.3s ease";

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.style.display = "block";
      backToTop.style.opacity = "1";
    } else {
      backToTop.style.opacity = "0";
      setTimeout(() => backToTop.style.display = "none", 300);
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
