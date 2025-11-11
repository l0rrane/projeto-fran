// ====== Carrega cabeçalho e rodapé automaticamente ======
fetch('./componentes/header.html')
    .then(response => response.text())
    .then(data => document.getElementById('header').innerHTML = data);
fetch('./componentes/footer.html')
    .then(response => response.text())
    .then(data => document.getElementById('footer').innerHTML = data);
// ====== Efeito de Fade-In na página ======
window.addEventListener("DOMContentLoaded", () => { document.body.classList.add("fade-in"); });
// ====== Efeito de aparição suave ao rolar ======
window.addEventListener("scroll", () => {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) el.classList.add("active");
    });
});