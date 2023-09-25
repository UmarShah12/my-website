const navMenu = document.getElementById('nav-menu');
navToggle = document.getElementById('nav-toggle');
navClose = document.getElementById('nav-close');

if(navToggle){
   navToggle.addEventListener('click', function(){
    navMenu.classList.add('show-menu')
  })
}

if(navClose){
   navClose.addEventListener('click',function(){
    navMenu.classList.remove('show-menu')
  })
}

const navLink = document.querySelectorAll('.nav-menu');

const linkkAction = () =>{
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkkAction));

const shadowHeader = () =>{
const header = document.getElementById('header');
  this.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header');
}
window.addEventListener('scroll', shadowHeader)

     
const scrollUp = ()=>{
     const scrollUp =  document.getElementById('scrollup');
     this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

 

const sections = document.querySelectorAll("section[id]")
const scrollActive = () => {
  const scrollDown = window.scrollY
  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - 58,
    sectionId = current.getAttribute('id'),
    sectionClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']');


    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
    }else{
      sectionClass.classList.remove('active-link')
    }

  })
}

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : "ri-sun-line"

if(selectedTheme){
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () =>{
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem('selected-theme', getTheme);
  localStorage.setItem('selected-icon', getIcon);
})

const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 400,
   delay: 400,
   reset: true

})

sr.reveal(`.home-perfil, .home-image, .about-image, .contact-mail`, {origin: 'right'})
sr.reveal(`.home-name, .home-info,
.about-container .section-title-1, .about-info,
 .contact-social, .contact-data`,{origin: 'left'})
sr.reveal(`.services-card, .projects-card`, {interval: 100})





















