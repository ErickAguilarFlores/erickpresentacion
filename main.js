const navMenu = document.getElementById('nav-menu'), 
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu') 
    })
}
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    
    navMenu.classList.remove('show-menu')
}
navLink.forEach( n => n.addEventListener('click', linkAction))





const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEvenListener('click', () => {
    const target = document.querySelector(tab.dataset.target)
    
    tabContents.forEach(tabContent =>{
    tabContent.classList.remove('qualification_active')
})
        target.classList.add('qualification_active')
        tabs.forEach(tab =>{
            tab.classList.remove('qualification_active')    
        })
        tab.classList.add('qualification_active')
    })
})



const modalViews = document.querySelectorAll('.services_modal'),
      modalBtns = document.querySelectorAll('services_button'),
      modalCloses = document.querySelectorAll('.services_modal-close')

let modal = function(modalclick){
    modalViews[modalclick].classList.add('active-modal')
}

modalBtns.forEach((modalBtns, i ) =>{
    modalBtns.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalViews) =>{
            modalViews.classList.remove('active-modal')
        })
    })
}) 

  