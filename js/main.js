const navSlide = function(){
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.links_list');
  const navLinks = document.querySelectorAll('.links_list li');
  
  burger.addEventListener('click', function() {
      //Toggle nav
      nav.classList.toggle('nav-active');
      
      //Burder animation
      burger.classList.toggle('toggle');
  });
}
navSlide();