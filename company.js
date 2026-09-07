const fadeSections = document.querySelectorAll(".fade-section");

window.addEventListener("scroll", function () {

  fadeSections.forEach(function (section) {

    const sectionPosition = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionPosition < screenHeight - 100) {
      section.classList.add("is-visible");
    }

  });

});