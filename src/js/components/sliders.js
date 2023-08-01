import Swiper from 'swiper/bundle'

const heroSlider = document.querySelector('.hero__slider')
const heroSliderPreview = document.querySelector('.hero__slider-preview')
const previewBlock = document.querySelector('.preview-block')
const previewBlockImg = document.querySelector('#pimg')
const walletSlider = document.querySelector(".wallet-right__slider")
if(heroSlider || heroSliderPreview || previewBlock || previewBlockImg) {
  function getAllImages(){
    const images = []
    heroSlider.querySelectorAll('.swiper-slide').forEach(item => {
      images.push(item.children[0])
    })
    return images;
  }

  function createPreviewSlider(){
    const previewSlider = document.createElement('div')
    const swiperWrapper = document.createElement('div')
    previewSlider.classList.add('hero__slider')
    previewSlider.classList.add('hero__slider-preview')
    swiperWrapper.classList.add('swiper-wrapper')

    const slides =  heroSlider.querySelectorAll('.swiper-slide')
    const images = getAllImages();

    for(let i = 0; i < slides.length; i++){
      const newSlide = document.createElement('div')
      newSlide.classList.add('swiper-slide')
      const newImg = document.createElement('img')
      newImg.src = images[(i+1)% images.length].src
      newSlide.append(newImg)
      swiperWrapper.append(newSlide)
    }
    previewSlider.append(swiperWrapper)
    return previewSlider;
  }
  previewBlock.append(createPreviewSlider());

  const hero_slider = new Swiper('.hero__slider', {
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.hero__controls-btn--next',
      prevEl: '.hero__controls-btn--prev',
    },
    effect: 'fade',
  });


  const weeklySlider = new Swiper('.weekly__slider', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 40,
    loop: true,

    navigation: {
      nextEl: '.weekly__controls-btn--next',
      prevEl: '.weekly__controls-btn--prev',
    },
  })
}
if(walletSlider){
  const hero_slider = new Swiper('.wallet-right__slider', {
    slidesPerView: 'auto',
    loop: true,
    autoplay: true,
    navigation: {
      nextEl: '.wallet-right-btn--next',
      prevEl: '.wallet-left-btn--prev',
    },
    effect: 'fade',
  });
}
