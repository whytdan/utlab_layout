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

function sendEmail({fullName, email, subject, message }) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "utlabsender@gmail.com",
    Password: "utl@b123",
    To: "Aktan.r.a@gmail.com",
    From: "utlabsender@gmail.com",
    Subject: "New request",
    Body: `Client FullName: ${fullName} <br/> 
           Email: ${email} <br/>
           Subject: ${subject} <br/>
           Message: ${message}`,
  })
}