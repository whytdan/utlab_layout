const navSlide = function(){
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.links_list');
  const navLinks = document.querySelectorAll('.links_list li');
  
  burger.addEventListener('click', function() {
      //Toggle nav
      nav.classList.toggle('nav-active');
      
      //Animate links
      navLinks.forEach((link, index) => {
          if(link.style.animation){
              link.style.animation = '';
          }
          else{
              link.style.animation = `navLinkFade 600ms ease-in-out ${index / 8 + 0.2}s`;
          }
          
      });
      //Burder animation
      burger.classList.toggle('toggle');
  });
}
navSlide();