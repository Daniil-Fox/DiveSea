// document.querySelector('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item')

  faqItems.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const selfBtn = self.querySelector('.faq-item__btn')
      const content = self.querySelector('.faq-item__text')

      self.classList.toggle('faq-item__open')

      if(self.classList.contains('faq-item__open')){
        selfBtn.setAttribute('aria-expanded', true)
        content.setAttribute('aria-hidden', false)
        content.style.maxHeight = content.scrollHeight + 'px'
      } else {
        selfBtn.setAttribute('aria-expanded', false)
        content.setAttribute('aria-hidden', true)
        content.style.maxHeight = null;
      }
    })
  })
// })
