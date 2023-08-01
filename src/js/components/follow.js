const followBtns = document.querySelectorAll('.raiting__btn')

followBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.target.classList.toggle('raiting__btn-active');
    if(e.target.classList.contains('raiting__btn-active')){
      e.target.textContent = 'Unfollow'
    } else {
      e.target.textContent = 'Follow'
    }
  })
})
