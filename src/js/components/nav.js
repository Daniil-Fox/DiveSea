const navItems = document.querySelectorAll('.nav__link')

navItems.forEach(el => {
  el.addEventListener('click', (e) => {
    console.log(e.currentTarget);
    if(!e.currentTarget.classList.contains('active')){
      navItems.forEach(item => {
        item.classList.remove('active')
      })
      e.currentTarget.classList.add('active')
    }
  })
})
