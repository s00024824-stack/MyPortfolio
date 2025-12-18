document.addEventListener("DOMContentLoaded", () => {
  
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

  
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        
        entry.target.classList.add("visible");
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  
  document.querySelectorAll(".fade-in").forEach((element) => {
    observer.observe(element);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  
  const preview = document.createElement("div");
  preview.className = "site-preview";
  preview.innerHTML = '<iframe src="" scrolling="no"></iframe>';
  document.body.appendChild(preview);

  const iframe = preview.querySelector("iframe");
  
  const buttons = document.querySelectorAll(".project-card .cta-button");

  buttons.forEach((button) => {
    
    button.addEventListener("mouseenter", (e) => {
      const url = button.getAttribute("href");
      if (url && url !== "#") {
        iframe.src = url; 
        preview.classList.add("active"); 
      }
    });

    
    button.addEventListener("mousemove", (e) => {
      preview.style.left = e.clientX + 15 + "px";
      preview.style.top = e.clientY + 15 + "px";
    });

    
    button.addEventListener("mouseleave", () => {
      preview.classList.remove("active"); 
      iframe.src = ""; 
    });
  });
});

