"use strict"

const isMobile = {
   Android() {
      return navigator.userAgent.match(/Android/i)
   },
   BlackBerry() {
      return navigator.userAgent.match(/Android/i)
   },
   iOS() {
      return navigator.userAgent.match(/Android/i)
   },
   Opera() {
      return navigator.userAgent.match(/Android/i)
   },
   Windows() {
      return navigator.userAgent.match(/Android/i)
   },
   any() {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows()
      )
   }
}



if (isMobile.any()) {
   document.body.classList.add('_touch')
   let menuArrows = document.querySelectorAll('.menu__arrow')
   if (menuArrows.length > 0) {
      menuArrows.forEach(element => {
         element.addEventListener('click', function (e) {
            this.parentElement.classList.toggle('show')
         })
      })
   }
} else {
   document.body.classList.add('_pc')
}


// ScrollTo
const links = Array.from(document.querySelectorAll('.menu__link[data-goto]'))
const burgerButton = document.querySelector('.menu__icon')
console.log(links)
if (links.length > 0) {
   links.forEach(function (element) {
      element.addEventListener('click', onMenuLinkClick)
   })
   function onMenuLinkClick(e) {
      const menuLink = e.target
      console.log(menuLink)
      console.log(menuLink.dataset.goto)
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight
         window.scrollTo({
            top: gotoBlockValue,
            behavior: 'smooth',
         })

            burgerButton.classList.remove('open')
      
      
         e.preventDefault()

      }
   }
}

// Open Burger


burgerButton.addEventListener('click', function () {
   this.classList.toggle('open')
   if (document.body.style.overflow == 'hidden') {

      document.body.style.overflow = 'visible';
   } else {
      document.body.style.overflow = 'hidden'
   }


})
