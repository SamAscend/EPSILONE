document.addEventListener("DOMContentLoaded", function() {
    VANTA.WAVES({
      el: "body",
      color: 0x111111,
      shininess: 50,
      waveHeight: 20,
      waveSpeed: 1,
      zoom: 0.85
    });
  });  

const sections = document.querySelectorAll('section');
const options = {
  threshold: 0.1
};

document.addEventListener("DOMContentLoaded", function () {
  new Typed("#typed", {
    strings: ["EPSILONE", "Welcome To", "My Page"],
    typeSpeed: 60,
    backSpeed: 30,
    loop: true
  });

  VANTA.WAVES({
    el: "body",
    color: 0x111111,
    shininess: 50,
    waveHeight: 20,
    waveSpeed: 1,
    zoom: 0.85
  });

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, options);

});

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(50px)';
  section.style.transition = 'all 0.6s ease-out';
  observer.observe(section);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
