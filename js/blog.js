const modeToggle = document.querySelector('.color-switch__label');
const body = document.body;

modeToggle.addEventListener('click', () => {
    // ********* MAIN BODY ********* //

    //Body-bg-color
    const body = document.body;
    body.classList.toggle('mode--dark');

    //Body-txt
    body.classList.toggle('body-color--dark');
  
    //Nav
    const nav = document.querySelector('.nav');
    nav.classList.toggle('nav-link--dark')

    const logoToggleLight = document.querySelectorAll('.blog__logo--light');
    const logoToggleDark = document.querySelectorAll('.blog__logo--dark');
  
    logoToggleLight.forEach(light => {
      light.classList.toggle('hidden')
    })
  
    logoToggleDark.forEach(dark => {
      dark.classList.toggle('hidden')
    }) 
    
    //Tabs
    const tabNav = document.querySelector('.blog__nav')
    tabNav.classList.toggle('blog__tab-border--dark')

    const blogTabs = document.querySelector('.blog__tabs');
    blogTabs.classList.toggle('nav-link--dark')

    //Blog Card
    const blogTxt = document.querySelectorAll('.blog__txt')
    blogTxt.forEach(txt => txt.classList.toggle('blog__txt--dark') )

    const blogTitles = document.querySelectorAll('.blog__title')
    blogTitles.forEach(blogTitle => {blogTitle.classList.toggle('blog-heading--dark')})
})


//TAB COMPONENT
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        target.classList.add('active')
    })
})