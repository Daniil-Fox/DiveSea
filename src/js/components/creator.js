const tabs = document.querySelector('.creator-details__tabs')
if(tabs){
  const tabsBtn = tabs.querySelectorAll('.tabs__btn')
  const tabsContent = tabs.querySelectorAll('.tabs__content')
  tabs.addEventListener('click', (e) => {
    if(e.target.classList.contains('tabs__btn')){
      const tabsPath = e.target.dataset.path;
      tabsHandler(tabsPath)
    }
  })
  function tabsHandler(path){
    tabs.classList.toggle('active')
    tabsBtn.forEach(el => el.classList.remove('tabs__btn--active'))
    document.querySelector(`[data-path="${path}"]`).classList.add('tabs__btn--active')

    tabsContent.forEach(el => el.classList.remove('tabs__content--active'))
    document.querySelector(`[data-target="${path}"`).classList.add('tabs__content--active')
  }


  const followBtn = document.querySelector('.creator-details__btn')

  followBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.currentTarget.classList.contains('followed')){
      e.currentTarget.classList.remove('followed')
      e.currentTarget.innerHTML = 'Follow+'
    } else {
      e.currentTarget.classList.add('followed')
      e.currentTarget.innerHTML = 'UnFollow'
    }
  })
}
