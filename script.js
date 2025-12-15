document.addEventListener("DOMContentLoaded", () => {
  // 1. Smooth Scrolling per la Navigazione interna
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // 2. Animazioni all'entrata in vista (Fade-in usando Intersection Observer)
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Aggiunge la classe 'visible' per attivare l'animazione CSS
        entry.target.classList.add("visible");
        // Smetti di osservare l'elemento
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Osserva tutti gli elementi che hanno la classe 'fade-in'
  document.querySelectorAll(".fade-in").forEach((element) => {
    observer.observe(element);
  });
});
