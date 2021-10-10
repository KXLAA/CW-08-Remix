const modeToggle = document.querySelector('.color-switch__label');
const body = document.body;


modeToggle.addEventListener('click', () => {
  body.classList.toggle('mode--dark');

  //Nav
  const nav = document.querySelector('.nav');
  nav.classList.toggle('nav-link--dark')

  const logoToggleLight = document.querySelectorAll('.form__logo--light');
  const logoToggleDark = document.querySelectorAll('.form__logo--dark');

  logoToggleLight.forEach(light => {
    light.classList.toggle('hidden')
  })

  logoToggleDark.forEach(dark => {
    dark.classList.toggle('hidden')
  })



  //Sign Up From
  const form = document.querySelector('.form__container')
  const cardBg = document.querySelector('.form__card')   
  cardBg.classList.toggle('card-bg--dark'); 
  form.classList.toggle('onboarding-txt--dark')

  const formHeadings = document.querySelectorAll('.form__heading')
  formHeadings.forEach(formHeading => {
    formHeading.classList.toggle('heading__form--dark')
  })

  const prevBtn = document.getElementById("prevBtn")
  prevBtn.classList.toggle('form__prevBtn--dark')
  
})



//FORM
const nextBtn = document.getElementById("nextBtn")
const prevBtn = document.getElementById("prevBtn")
const tabs = document.querySelectorAll(".tab");

let formStepsNum = 0;
document.getElementById("prevBtn").style.display = "none";

nextBtn.addEventListener("click", () => {
  if (formStepsNum == (tabs.length - 1)){
    formStepsNum = 0; 
    updateFormSteps();  
  } else{
    formStepsNum++;
    updateFormSteps();
  }
})

prevBtn.addEventListener("click", () => {
  formStepsNum--;
  updateFormSteps();
})

function updateFormSteps() {
  tabs.forEach((tab) => {
    tab.classList.contains("tab-active") &&
    tab.classList.remove("tab-active");
  });
  tabs[formStepsNum].classList.add("tab-active");

  //Update Buttons
  if (formStepsNum == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "block";
  }
  if (formStepsNum == (tabs.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Continue";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
}


// let currentTab = 0; // Current tab is set to be the first tab (0)
// showTab(currentTab); // Display the current tab

// function showTab(n) {
//   // This function will display the specified tab of the form ...
//   let tabs = document.querySelectorAll(".tab");
//   tabs[n].style.display = "block";
//   // ... and fix the Previous/Next buttons:
  // if (n == 0) {
  //   document.getElementById("prevBtn").style.display = "none";
  // } else {
  //   document.getElementById("prevBtn").style.display = "block";
  // }
  // if (n == (tabs.length - 1)) {
  //   document.getElementById("nextBtn").innerHTML = "Continue";

  // } else {
  //   document.getElementById("nextBtn").innerHTML = "Next";
  // }
// }





// const nextBtn = document.getElementById("nextBtn")
// const prevBtn = document.getElementById("prevBtn")
// const confirmation = document.querySelector(".success")


// nextBtn.addEventListener('click', ()=> {
//     let tabs = document.querySelectorAll(".tab");
//     tabs[currentTab].style.display = "none";
//     currentTab ++
//     showTab(currentTab);
// })


// prevBtn.addEventListener('click', ()=> {
//     let tabs = document.querySelectorAll(".tab");
//     tabs[currentTab].style.display = "none";
//     currentTab --
//     showTab(currentTab)
// })




