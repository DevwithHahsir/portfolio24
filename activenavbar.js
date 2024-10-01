// JavaScript to make navbar active link change on scroll
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section'); // Assuming each section has the tag <section>
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
    function changeActiveLink() {
      let scrollPos = window.scrollY + 50; // Adding offset for better accuracy
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
  
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === section.id) {
              link.classList.add('active');
            }
          });
        }
      });
    }
  
    window.addEventListener('scroll', changeActiveLink);
  });
  