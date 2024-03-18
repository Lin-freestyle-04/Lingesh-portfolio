    // scrool effect
    ScrollReveal({ 
        reset: true,
        distance:'50px',
        duration:2500,
        delay:200
     });
    
     
     ScrollReveal().reveal('.about-details h4', { delay: 100, origin:'right' });
     ScrollReveal().reveal('.about-details h1', { delay: 100, origin:'left' });
     ScrollReveal().reveal('.about .what-i-do', { delay: 100, origin:'left' });
     ScrollReveal().reveal('.my-experties h5', { delay: 100, origin:'top' });
     ScrollReveal().reveal('.my-experties h1', { delay: 100, origin:'bottom' });
     ScrollReveal().reveal('.services .software-service', { delay: 50, origin:'left' });
     ScrollReveal().reveal('.services .static-service', { delay: 50, origin:'right' });
     ScrollReveal().reveal('.services .inovative-service', { delay: 50, origin:'left' });
     ScrollReveal().reveal('.services .dynamic-service', { delay: 50, origin:'right' });
     ScrollReveal().reveal('.services .e-commerce-service', { delay: 50, origin:'left' });
     ScrollReveal().reveal('.project-counter-wrp ul', { delay: 50, origin:'bottom' });
     ScrollReveal().reveal('.skill-heading h4', { delay: 50, origin:'left' });
     ScrollReveal().reveal('.skill-heading h1 ', { delay: 50, origin:'right' });
     ScrollReveal().reveal('.flex-skill .skill-div h3 ', { delay: 100, origin:'top' });
     ScrollReveal().reveal('.education-heading h3', { delay: 50, origin:'left' });
     ScrollReveal().reveal('.education-heading h1', { delay: 50, origin:'right' });
     ScrollReveal().reveal('.education-accordion :nth-child(1)', { delay: 100, origin:'top' });
     ScrollReveal().reveal('.education-accordion :nth-child(2)', { delay: 100, origin:'bottom' });
     ScrollReveal().reveal('.education-accordion :nth-child(3)', { delay: 100, origin:'bottom' });
     ScrollReveal().reveal('.fa-phone,.fa-envelope,.fa-location-dot', { delay: 100, origin:'left' });
     ScrollReveal().reveal('.contact-form .submit', { delay: 100, origin:'right' });
    
    // --------------------------------------------------------------------------------

// --------------------------------active-link-on-scrool--------------------------------
    let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.properties .nav .navitems .navlinks li a ');
console.log(sections);
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active-link');
                document.querySelector('.properties .nav .navitems .navlinks li a[href*=' + id + ']').classList.add('active-link');
            });
        };
    });
};
// --------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------
    // home section slide and manual togle
var slides=document.querySelectorAll('.slide');
var btns=document.querySelectorAll('.btn');
let currentSlide=1;

//js for image slider manuval navigation
var manualNav=function(manual){
    slides.forEach((slide)=>{
        slide.classList.remove('active');

        btns.forEach((btn)=>{
            btn.classList.remove('active');
        });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn,i)=>{
    btn.addEventListener("click",()=>{
        manualNav(i);
        currentSlide=i;
    });
});

//js for image slider autoplay navigation
var repeat=function(activeClass){
    let active=document.getElementsByClassName('active');
    let i=1;

    var repeater=()=>{
        setTimeout(function(){
            [...active].forEach((activeSlide)=>{
                activeSlide.classList.remove('active');
            });

            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;
            if(slides.length==i){
                i=0;
            }
            if(i>=slides.length){
                return;
            }
            repeater();
        },10000);
    }
    repeater();
}

repeat();
// ---------------------------------------------------------------------------------------------------------------------------------


    //-----------------------------counter js--------------------    


var project = setInterval(projectDone, 1000)
// var clients = setInterval(happyClients, 10)
var coffee = setInterval(cupsCoffee, 800)
let count1 = 1;
// let count2 = 1;
let count3 = 1;

function projectDone() {
    count1++
    document.querySelector("#number1").innerHTML = count1
    if (count1 == 5) {
        clearInterval(project)
    }
}

// function happyClients() {
//     count2++
//     document.querySelector("#number2").innerHTML = count2
//     if (count2 == 0) {
//         clearInterval(clients)
//     }
// }

function cupsCoffee() {
    count3++
    document.querySelector("#number3").innerHTML = count3
    if (count3 == 4) {
        clearInterval(coffee)
    }
}


// ---------------------------------------------------------------




// ----------------nav bar handle ------------------------

document.addEventListener('DOMContentLoaded',function(){
 

    const menu = document.querySelector('.menu');
const menuList=document.querySelector(' .nav .navitems');
const sectionList=document.querySelector('.main .all-sections');
const serviceFlex=document.querySelector('.services .services-grid')
const body=document.querySelector('body')
const HTML=document.querySelector('html')


 menu.addEventListener('click',()=>{
      menuList.classList.toggle('showmenu');
      sectionList.classList.toggle('all-sections-adjus');
      serviceFlex.classList.toggle('service-flex');
      body.classList.toggle('body');
      HTML.classList.toggle('HTML');
});


function handleScroll(){
    const scrollPosition=window.scrollY;
     
    if(scrollPosition>0){
        menuList.classList.remove('showmenu');
        sectionList.classList.remove('all-sections-adjus')
        serviceFlex.classList.remove('service-flex');
    }
}

window.addEventListener('scroll',handleScroll);
});
// ---------------------------------------------------------------------------------------


// ------------------------------e-mail---------------------------------------------------

function sendMessage(){
    (function(){
          emailjs.int("PdsM-3j79CDowiwiD");//Account public key
    })();

    var serviceId="service_7qhsxk8";//Email Service ID
    var templateID="template_hpzkntq";//Email Template ID

    var params={
        sendername:document.querySelector("#name").value,
        senderemail:document.querySelector("#email").value,
        subject:document.querySelector("#subject").value,
        message:document.querySelector("#message").value
    };

    emailjs.send(serviceId,templateID,params)
    .then(res => {
       alert('Thank you, '+params['sendername']+'! Your message has been sent.');
    })
    .catch();
}