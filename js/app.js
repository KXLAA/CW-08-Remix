const modeToggle = document.querySelector('.color-switch__label');

modeToggle.addEventListener('click', () => {
    // ********* MAIN BODY ********* //

    //Body-bg-color
    const body = document.body;
    body.classList.toggle('mode--dark');

    //Body-txt
    body.classList.toggle('body-color--dark');

    //Headings
    const mainHeading = document.querySelector('h1')
    const secondaryHeadings = document.querySelectorAll('h2')
    
    mainHeading.classList.toggle('heading__primary--dark');
    secondaryHeadings.forEach(secondaryHeading => {
        secondaryHeading.classList.toggle('heading__secondary--dark')
    })

    // ********* NAV ********* //
    //Logo
    const logoToggleLight = document.querySelector('.nav__logo--light');
    const logoToggleDark = document.querySelector('.nav__logo--dark');
    logoToggleLight.classList.toggle('hidden')
    logoToggleDark.classList.toggle('hidden')
    //

    //Main Nav
    const nav = document.querySelector('.nav');
    nav.classList.toggle('nav-link--dark')
    //

    //Mobile Nav Buttons
    const navMenu = document.querySelectorAll('ion-icon');
    navMenu.forEach(menu => {
        menu.classList.toggle('mobile__nav-btn--light')
        menu.classList.toggle('mobile__nav-btn--dark')
    })

    // ********* HERO ********* //
    //Hero Image
    const heroImgLight = document.querySelector('.hero__img--light');
    heroImgLight.classList.toggle('hidden')
    const heroImgDark = document.querySelector('.hero__img--dark');
    heroImgDark.classList.toggle('hidden')
    
     
    // ********* INFO ********* //
    //Info Link
    const infoLink = document.querySelector('.info__link');
    infoLink.classList.toggle('link--dark');
    

    // ********* TESTIMONIALS ********* //
    //Testimonial
    const testimonial = document.querySelectorAll('.testimonials__testimonial');
    testimonial.forEach(element => { 
        element.classList.toggle('testimonials__bg--dark');
        element.classList.toggle('review-color--dark');
    });

    // ********* PRICING ********* //
    const pricing = document.querySelector('.pricing');
    pricing.classList.toggle('pricing-txt--dark');

    //Price
    const pricingHeading = document.querySelectorAll('.pricing__price');
    pricingHeading.forEach(element => { 
        element.classList.toggle('heading__price--dark');   
    });

    //Price Heading
    const pricingSubheading = document.querySelectorAll('.pricing__sub-heading');
    pricingSubheading.forEach(element => { 
        element.classList.toggle('subheading__price--dark');   
    });
})


//Mobile Navigation
const navEl = document.querySelector('nav');
const mobileNavBg = document.querySelectorAll('.mobile__nav');
const mobileNavBtns = document.querySelectorAll('.mobile__nav-btn');


mobileNavBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        navEl.classList.toggle('mobile__nav-open');
   });
});

mobileNavBg.forEach(btn => {
    btn.addEventListener('click', () => {
        navEl.classList.toggle('mobile__nav-open');
   });
});


















