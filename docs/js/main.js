/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_sliders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/sliders */ "./src/js/components/sliders.js");
/* harmony import */ var _components_follow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/follow */ "./src/js/components/follow.js");
/* harmony import */ var _components_follow__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_follow__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_accordeon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/accordeon */ "./src/js/components/accordeon.js");
/* harmony import */ var _components_accordeon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_accordeon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/nav */ "./src/js/components/nav.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_nav__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_detailModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/detailModal */ "./src/js/components/detailModal.js");
/* harmony import */ var _components_detailModal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_detailModal__WEBPACK_IMPORTED_MODULE_4__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './components/graph'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_inputFile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/inputFile */ "./src/js/components/inputFile.js");
/* harmony import */ var _components_inputFile__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_inputFile__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sort */ "./src/js/components/sort.js");
/* harmony import */ var _components_sort__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_sort__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_creator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/creator */ "./src/js/components/creator.js");
/* harmony import */ var _components_creator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_creator__WEBPACK_IMPORTED_MODULE_8__);










/***/ }),

/***/ "./src/js/_functions.js":
/*!******************************!*\
  !*** ./src/js/_functions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/mobile-check */ "./src/js/functions/mobile-check.js");
// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных

console.log((0,_functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__.mobileCheck)());

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
// import { burger } from './functions/burger';

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });

// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);

/***/ }),

/***/ "./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});

/***/ }),

/***/ "./src/js/_vendor.js":
/*!***************************!*\
  !*** ./src/js/_vendor.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/focus-visible.js */ "./src/js/vendor/focus-visible.js");
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor_chart_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor/chart.min */ "./src/js/vendor/chart.min.js");
/* harmony import */ var _vendor_chart_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_chart_min__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/components/accordeon.js":
/*!****************************************!*\
  !*** ./src/js/components/accordeon.js ***!
  \****************************************/
/***/ (() => {

// document.querySelector('DOMContentLoaded', () => {
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(el => {
  el.addEventListener('click', e => {
    const self = e.currentTarget;
    const selfBtn = self.querySelector('.faq-item__btn');
    const content = self.querySelector('.faq-item__text');
    self.classList.toggle('faq-item__open');
    if (self.classList.contains('faq-item__open')) {
      selfBtn.setAttribute('aria-expanded', true);
      content.setAttribute('aria-hidden', false);
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      selfBtn.setAttribute('aria-expanded', false);
      content.setAttribute('aria-hidden', true);
      content.style.maxHeight = null;
    }
  });
});
// })

/***/ }),

/***/ "./src/js/components/creator.js":
/*!**************************************!*\
  !*** ./src/js/components/creator.js ***!
  \**************************************/
/***/ (() => {

const tabs = document.querySelector('.creator-details__tabs');
if (tabs) {
  const tabsBtn = tabs.querySelectorAll('.tabs__btn');
  const tabsContent = tabs.querySelectorAll('.tabs__content');
  tabs.addEventListener('click', e => {
    if (e.target.classList.contains('tabs__btn')) {
      const tabsPath = e.target.dataset.path;
      tabsHandler(tabsPath);
    }
  });
  function tabsHandler(path) {
    tabs.classList.toggle('active');
    tabsBtn.forEach(el => el.classList.remove('tabs__btn--active'));
    document.querySelector(`[data-path="${path}"]`).classList.add('tabs__btn--active');
    tabsContent.forEach(el => el.classList.remove('tabs__content--active'));
    document.querySelector(`[data-target="${path}"`).classList.add('tabs__content--active');
  }
  const followBtn = document.querySelector('.creator-details__btn');
  followBtn.addEventListener('click', e => {
    e.preventDefault();
    if (e.currentTarget.classList.contains('followed')) {
      e.currentTarget.classList.remove('followed');
      e.currentTarget.innerHTML = 'Follow+';
    } else {
      e.currentTarget.classList.add('followed');
      e.currentTarget.innerHTML = 'UnFollow';
    }
  });
}

/***/ }),

/***/ "./src/js/components/detailModal.js":
/*!******************************************!*\
  !*** ./src/js/components/detailModal.js ***!
  \******************************************/
/***/ (() => {

const dModal = document.querySelector('.detail-modal');
const modalWindow = document.querySelector('.detail-modal__window');
const historyBtn = document.querySelector('.history__btn');
historyBtn ? historyBtn.addEventListener('click', () => {
  console.log('click');
  dModal.classList.add('detail-modal-active');
  document.body.style.overflow = 'hidden';
}) : null;
modalWindow ? modalWindow.addEventListener('click', e => e.stopPropagation()) : null;
dModal ? dModal.addEventListener('click', () => {
  dModal.classList.remove('detail-modal-active');
  document.body.style.overflow = null;
}) : null;

/***/ }),

/***/ "./src/js/components/follow.js":
/*!*************************************!*\
  !*** ./src/js/components/follow.js ***!
  \*************************************/
/***/ (() => {

const followBtns = document.querySelectorAll('.raiting__btn');
followBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    e.target.classList.toggle('raiting__btn-active');
    if (e.target.classList.contains('raiting__btn-active')) {
      e.target.textContent = 'Unfollow';
    } else {
      e.target.textContent = 'Follow';
    }
  });
});

/***/ }),

/***/ "./src/js/components/inputFile.js":
/*!****************************************!*\
  !*** ./src/js/components/inputFile.js ***!
  \****************************************/
/***/ (() => {

let inputs = document.querySelectorAll(".input-file__input");
Array.prototype.forEach.call(inputs, function (input) {
  let label = input.nextElementSibling;
  let labelVal = label.querySelector(".input-file__text").innerText;
  let labelText = label.querySelector(".input-file__text");
  input.addEventListener("change", function (e) {
    let countFiles = "";
    if (this.files && this.files.length >= 1) countFiles = this.files.length;
    if (label.classList.contains('input-file__label-added')) label.classList.remove('input-file__label-added');
    if (countFiles) {
      if (countFiles === 1) {
        labelText.innerText = this.files[0].name;
      } else {
        labelText.innerText = '';
        Array.from(this.files).forEach(f => {
          labelText.innerText += f.name + '\n';
        });
      }
      label.classList.add('input-file__label-added');
    } else labelText.innerText = labelVal;
  });
});

/***/ }),

/***/ "./src/js/components/nav.js":
/*!**********************************!*\
  !*** ./src/js/components/nav.js ***!
  \**********************************/
/***/ (() => {

const navItems = document.querySelectorAll('.nav__link');
navItems.forEach(el => {
  el.addEventListener('click', e => {
    console.log(e.currentTarget);
    if (!e.currentTarget.classList.contains('active')) {
      navItems.forEach(item => {
        item.classList.remove('active');
      });
      e.currentTarget.classList.add('active');
    }
  });
});

/***/ }),

/***/ "./src/js/components/sliders.js":
/*!**************************************!*\
  !*** ./src/js/components/sliders.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");

const heroSlider = document.querySelector('.hero__slider');
const heroSliderPreview = document.querySelector('.hero__slider-preview');
const previewBlock = document.querySelector('.preview-block');
const previewBlockImg = document.querySelector('#pimg');
const walletSlider = document.querySelector(".wallet-right__slider");
if (heroSlider || heroSliderPreview || previewBlock || previewBlockImg) {
  function getAllImages() {
    const images = [];
    heroSlider.querySelectorAll('.swiper-slide').forEach(item => {
      images.push(item.children[0]);
    });
    return images;
  }
  function createPreviewSlider() {
    const previewSlider = document.createElement('div');
    const swiperWrapper = document.createElement('div');
    previewSlider.classList.add('hero__slider');
    previewSlider.classList.add('hero__slider-preview');
    swiperWrapper.classList.add('swiper-wrapper');
    const slides = heroSlider.querySelectorAll('.swiper-slide');
    const images = getAllImages();
    for (let i = 0; i < slides.length; i++) {
      const newSlide = document.createElement('div');
      newSlide.classList.add('swiper-slide');
      const newImg = document.createElement('img');
      newImg.src = images[(i + 1) % images.length].src;
      newSlide.append(newImg);
      swiperWrapper.append(newSlide);
    }
    previewSlider.append(swiperWrapper);
    return previewSlider;
  }
  previewBlock.append(createPreviewSlider());
  const hero_slider = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]('.hero__slider', {
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.hero__controls-btn--next',
      prevEl: '.hero__controls-btn--prev'
    },
    effect: 'fade'
  });
  const weeklySlider = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]('.weekly__slider', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 40,
    loop: true,
    navigation: {
      nextEl: '.weekly__controls-btn--next',
      prevEl: '.weekly__controls-btn--prev'
    }
  });
}
if (walletSlider) {
  const hero_slider = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]('.wallet-right__slider', {
    slidesPerView: 'auto',
    loop: true,
    autoplay: true,
    navigation: {
      nextEl: '.wallet-right-btn--next',
      prevEl: '.wallet-left-btn--prev'
    },
    effect: 'fade'
  });
}

/***/ }),

/***/ "./src/js/components/sort.js":
/*!***********************************!*\
  !*** ./src/js/components/sort.js ***!
  \***********************************/
/***/ (() => {

const getSort = _ref => {
  let {
    target
  } = _ref;
  const order = target.dataset.order = -(target.dataset.order || -1);
  const index = [...target.parentNode.cells].indexOf(target);
  const collator = new Intl.Collator(['en', 'ru'], {
    numeric: true
  });
  const comparator = (index, order) => (a, b) => order * collator.compare(a.children[index].innerHTML, b.children[index].innerHTML);
  for (const tBody of target.closest('table').tBodies) tBody.append(...[...tBody.rows].sort(comparator(index, order)));
  for (const cell of target.parentNode.cells) cell.classList.toggle('sorted', cell === target);
};
document.querySelectorAll('.stats-table thead').forEach(tableTH => tableTH.addEventListener('click', event => getSort(event)));

/***/ }),

/***/ "./src/js/functions/mobile-check.js":
/*!******************************************!*\
  !*** ./src/js/functions/mobile-check.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mobileCheck: () => (/* binding */ mobileCheck)
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

const mobileCheck = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(userAgent)) {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.classList.add('page--android');
    return "Android";
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.classList.add('page--ios');
    return "iOS";
  }
  return "unknown";
};

/***/ }),

/***/ "./src/js/vendor/chart.min.js":
/*!************************************!*\
  !*** ./src/js/vendor/chart.min.js ***!
  \************************************/
/***/ (function(module) {

/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/chart.js@4.3.1/dist/chart.umd.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/*!
 * Chart.js v4.3.1
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */
!function (t, e) {
   true ? module.exports = e() : 0;
}(this, function () {
  "use strict";

  var t = Object.freeze({
    __proto__: null,
    get Colors() {
      return Ko;
    },
    get Decimation() {
      return Jo;
    },
    get Filler() {
      return pa;
    },
    get Legend() {
      return _a;
    },
    get SubTitle() {
      return wa;
    },
    get Title() {
      return va;
    },
    get Tooltip() {
      return Va;
    }
  });
  function e() {}
  const i = (() => {
    let t = 0;
    return () => t++;
  })();
  function s(t) {
    return null == t;
  }
  function n(t) {
    if (Array.isArray && Array.isArray(t)) return !0;
    const e = Object.prototype.toString.call(t);
    return "[object" === e.slice(0, 7) && "Array]" === e.slice(-6);
  }
  function o(t) {
    return null !== t && "[object Object]" === Object.prototype.toString.call(t);
  }
  function a(t) {
    return ("number" == typeof t || t instanceof Number) && isFinite(+t);
  }
  function r(t, e) {
    return a(t) ? t : e;
  }
  function l(t, e) {
    return void 0 === t ? e : t;
  }
  const h = (t, e) => "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 : +t / e,
    c = (t, e) => "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 * e : +t;
  function d(t, e, i) {
    if (t && "function" == typeof t.call) return t.apply(i, e);
  }
  function u(t, e, i, s) {
    let a, r, l;
    if (n(t)) {
      if (r = t.length, s) for (a = r - 1; a >= 0; a--) e.call(i, t[a], a);else for (a = 0; a < r; a++) e.call(i, t[a], a);
    } else if (o(t)) for (l = Object.keys(t), r = l.length, a = 0; a < r; a++) e.call(i, t[l[a]], l[a]);
  }
  function f(t, e) {
    let i, s, n, o;
    if (!t || !e || t.length !== e.length) return !1;
    for (i = 0, s = t.length; i < s; ++i) if (n = t[i], o = e[i], n.datasetIndex !== o.datasetIndex || n.index !== o.index) return !1;
    return !0;
  }
  function g(t) {
    if (n(t)) return t.map(g);
    if (o(t)) {
      const e = Object.create(null),
        i = Object.keys(t),
        s = i.length;
      let n = 0;
      for (; n < s; ++n) e[i[n]] = g(t[i[n]]);
      return e;
    }
    return t;
  }
  function p(t) {
    return -1 === ["__proto__", "prototype", "constructor"].indexOf(t);
  }
  function m(t, e, i, s) {
    if (!p(t)) return;
    const n = e[t],
      a = i[t];
    o(n) && o(a) ? b(n, a, s) : e[t] = g(a);
  }
  function b(t, e, i) {
    const s = n(e) ? e : [e],
      a = s.length;
    if (!o(t)) return t;
    const r = (i = i || {}).merger || m;
    let l;
    for (let e = 0; e < a; ++e) {
      if (l = s[e], !o(l)) continue;
      const n = Object.keys(l);
      for (let e = 0, s = n.length; e < s; ++e) r(n[e], t, l, i);
    }
    return t;
  }
  function x(t, e) {
    return b(t, e, {
      merger: _
    });
  }
  function _(t, e, i) {
    if (!p(t)) return;
    const s = e[t],
      n = i[t];
    o(s) && o(n) ? x(s, n) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = g(n));
  }
  const y = {
    "": t => t,
    x: t => t.x,
    y: t => t.y
  };
  function v(t) {
    const e = t.split("."),
      i = [];
    let s = "";
    for (const t of e) s += t, s.endsWith("\\") ? s = s.slice(0, -1) + "." : (i.push(s), s = "");
    return i;
  }
  function M(t, e) {
    const i = y[e] || (y[e] = function (t) {
      const e = v(t);
      return t => {
        for (const i of e) {
          if ("" === i) break;
          t = t && t[i];
        }
        return t;
      };
    }(e));
    return i(t);
  }
  function w(t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  }
  const k = t => void 0 !== t,
    S = t => "function" == typeof t,
    P = (t, e) => {
      if (t.size !== e.size) return !1;
      for (const i of t) if (!e.has(i)) return !1;
      return !0;
    };
  function D(t) {
    return "mouseup" === t.type || "click" === t.type || "contextmenu" === t.type;
  }
  const C = Math.PI,
    O = 2 * C,
    A = O + C,
    T = Number.POSITIVE_INFINITY,
    L = C / 180,
    E = C / 2,
    R = C / 4,
    I = 2 * C / 3,
    z = Math.log10,
    F = Math.sign;
  function V(t, e, i) {
    return Math.abs(t - e) < i;
  }
  function B(t) {
    const e = Math.round(t);
    t = V(t, e, t / 1e3) ? e : t;
    const i = Math.pow(10, Math.floor(z(t))),
      s = t / i;
    return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * i;
  }
  function W(t) {
    const e = [],
      i = Math.sqrt(t);
    let s;
    for (s = 1; s < i; s++) t % s == 0 && (e.push(s), e.push(t / s));
    return i === (0 | i) && e.push(i), e.sort((t, e) => t - e).pop(), e;
  }
  function N(t) {
    return !isNaN(parseFloat(t)) && isFinite(t);
  }
  function H(t, e) {
    const i = Math.round(t);
    return i - e <= t && i + e >= t;
  }
  function j(t, e, i) {
    let s, n, o;
    for (s = 0, n = t.length; s < n; s++) o = t[s][i], isNaN(o) || (e.min = Math.min(e.min, o), e.max = Math.max(e.max, o));
  }
  function $(t) {
    return t * (C / 180);
  }
  function Y(t) {
    return t * (180 / C);
  }
  function U(t) {
    if (!a(t)) return;
    let e = 1,
      i = 0;
    for (; Math.round(t * e) / e !== t;) e *= 10, i++;
    return i;
  }
  function X(t, e) {
    const i = e.x - t.x,
      s = e.y - t.y,
      n = Math.sqrt(i * i + s * s);
    let o = Math.atan2(s, i);
    return o < -.5 * C && (o += O), {
      angle: o,
      distance: n
    };
  }
  function q(t, e) {
    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
  }
  function K(t, e) {
    return (t - e + A) % O - C;
  }
  function G(t) {
    return (t % O + O) % O;
  }
  function Z(t, e, i, s) {
    const n = G(t),
      o = G(e),
      a = G(i),
      r = G(o - n),
      l = G(a - n),
      h = G(n - o),
      c = G(n - a);
    return n === o || n === a || s && o === a || r > l && h < c;
  }
  function J(t, e, i) {
    return Math.max(e, Math.min(i, t));
  }
  function Q(t) {
    return J(t, -32768, 32767);
  }
  function tt(t, e, i) {
    let s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1e-6;
    return t >= Math.min(e, i) - s && t <= Math.max(e, i) + s;
  }
  function et(t, e, i) {
    i = i || (i => t[i] < e);
    let s,
      n = t.length - 1,
      o = 0;
    for (; n - o > 1;) s = o + n >> 1, i(s) ? o = s : n = s;
    return {
      lo: o,
      hi: n
    };
  }
  const it = (t, e, i, s) => et(t, i, s ? s => {
      const n = t[s][e];
      return n < i || n === i && t[s + 1][e] === i;
    } : s => t[s][e] < i),
    st = (t, e, i) => et(t, i, s => t[s][e] >= i);
  function nt(t, e, i) {
    let s = 0,
      n = t.length;
    for (; s < n && t[s] < e;) s++;
    for (; n > s && t[n - 1] > i;) n--;
    return s > 0 || n < t.length ? t.slice(s, n) : t;
  }
  const ot = ["push", "pop", "shift", "splice", "unshift"];
  function at(t, e) {
    t._chartjs ? t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", {
      configurable: !0,
      enumerable: !1,
      value: {
        listeners: [e]
      }
    }), ot.forEach(e => {
      const i = "_onData" + w(e),
        s = t[e];
      Object.defineProperty(t, e, {
        configurable: !0,
        enumerable: !1,
        value() {
          for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
            e[_key] = arguments[_key];
          }
          const n = s.apply(this, e);
          return t._chartjs.listeners.forEach(t => {
            "function" == typeof t[i] && t[i](...e);
          }), n;
        }
      });
    }));
  }
  function rt(t, e) {
    const i = t._chartjs;
    if (!i) return;
    const s = i.listeners,
      n = s.indexOf(e);
    -1 !== n && s.splice(n, 1), s.length > 0 || (ot.forEach(e => {
      delete t[e];
    }), delete t._chartjs);
  }
  function lt(t) {
    const e = new Set(t);
    return e.size === t.length ? t : Array.from(e);
  }
  const ht = "undefined" == typeof window ? function (t) {
    return t();
  } : window.requestAnimationFrame;
  function ct(t, e) {
    let i = [],
      s = !1;
    return function () {
      for (var _len2 = arguments.length, n = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        n[_key2] = arguments[_key2];
      }
      i = n, s || (s = !0, ht.call(window, () => {
        s = !1, t.apply(e, i);
      }));
    };
  }
  function dt(t, e) {
    let i;
    return function () {
      for (var _len3 = arguments.length, s = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        s[_key3] = arguments[_key3];
      }
      return e ? (clearTimeout(i), i = setTimeout(t, e, s)) : t.apply(this, s), e;
    };
  }
  const ut = t => "start" === t ? "left" : "end" === t ? "right" : "center",
    ft = (t, e, i) => "start" === t ? e : "end" === t ? i : (e + i) / 2,
    gt = (t, e, i, s) => t === (s ? "left" : "right") ? i : "center" === t ? (e + i) / 2 : e;
  function pt(t, e, i) {
    const s = e.length;
    let n = 0,
      o = s;
    if (t._sorted) {
      const {
          iScale: a,
          _parsed: r
        } = t,
        l = a.axis,
        {
          min: h,
          max: c,
          minDefined: d,
          maxDefined: u
        } = a.getUserBounds();
      d && (n = J(Math.min(it(r, l, h).lo, i ? s : it(e, l, a.getPixelForValue(h)).lo), 0, s - 1)), o = u ? J(Math.max(it(r, a.axis, c, !0).hi + 1, i ? 0 : it(e, l, a.getPixelForValue(c), !0).hi + 1), n, s) - n : s - n;
    }
    return {
      start: n,
      count: o
    };
  }
  function mt(t) {
    const {
        xScale: e,
        yScale: i,
        _scaleRanges: s
      } = t,
      n = {
        xmin: e.min,
        xmax: e.max,
        ymin: i.min,
        ymax: i.max
      };
    if (!s) return t._scaleRanges = n, !0;
    const o = s.xmin !== e.min || s.xmax !== e.max || s.ymin !== i.min || s.ymax !== i.max;
    return Object.assign(s, n), o;
  }
  class bt {
    constructor() {
      this._request = null, this._charts = new Map(), this._running = !1, this._lastDate = void 0;
    }
    _notify(t, e, i, s) {
      const n = e.listeners[s],
        o = e.duration;
      n.forEach(s => s({
        chart: t,
        initial: e.initial,
        numSteps: o,
        currentStep: Math.min(i - e.start, o)
      }));
    }
    _refresh() {
      this._request || (this._running = !0, this._request = ht.call(window, () => {
        this._update(), this._request = null, this._running && this._refresh();
      }));
    }
    _update() {
      let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();
      let e = 0;
      this._charts.forEach((i, s) => {
        if (!i.running || !i.items.length) return;
        const n = i.items;
        let o,
          a = n.length - 1,
          r = !1;
        for (; a >= 0; --a) o = n[a], o._active ? (o._total > i.duration && (i.duration = o._total), o.tick(t), r = !0) : (n[a] = n[n.length - 1], n.pop());
        r && (s.draw(), this._notify(s, i, t, "progress")), n.length || (i.running = !1, this._notify(s, i, t, "complete"), i.initial = !1), e += n.length;
      }), this._lastDate = t, 0 === e && (this._running = !1);
    }
    _getAnims(t) {
      const e = this._charts;
      let i = e.get(t);
      return i || (i = {
        running: !1,
        initial: !0,
        items: [],
        listeners: {
          complete: [],
          progress: []
        }
      }, e.set(t, i)), i;
    }
    listen(t, e, i) {
      this._getAnims(t).listeners[e].push(i);
    }
    add(t, e) {
      e && e.length && this._getAnims(t).items.push(...e);
    }
    has(t) {
      return this._getAnims(t).items.length > 0;
    }
    start(t) {
      const e = this._charts.get(t);
      e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce((t, e) => Math.max(t, e._duration), 0), this._refresh());
    }
    running(t) {
      if (!this._running) return !1;
      const e = this._charts.get(t);
      return !!(e && e.running && e.items.length);
    }
    stop(t) {
      const e = this._charts.get(t);
      if (!e || !e.items.length) return;
      const i = e.items;
      let s = i.length - 1;
      for (; s >= 0; --s) i[s].cancel();
      e.items = [], this._notify(t, e, Date.now(), "complete");
    }
    remove(t) {
      return this._charts.delete(t);
    }
  }
  var xt = new bt();
  /*!
   * @kurkle/color v0.3.2
   * https://github.com/kurkle/color#readme
   * (c) 2023 Jukka Kurkela
   * Released under the MIT License
   */
  function _t(t) {
    return t + .5 | 0;
  }
  const yt = (t, e, i) => Math.max(Math.min(t, i), e);
  function vt(t) {
    return yt(_t(2.55 * t), 0, 255);
  }
  function Mt(t) {
    return yt(_t(255 * t), 0, 255);
  }
  function wt(t) {
    return yt(_t(t / 2.55) / 100, 0, 1);
  }
  function kt(t) {
    return yt(_t(100 * t), 0, 100);
  }
  const St = {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      A: 10,
      B: 11,
      C: 12,
      D: 13,
      E: 14,
      F: 15,
      a: 10,
      b: 11,
      c: 12,
      d: 13,
      e: 14,
      f: 15
    },
    Pt = [..."0123456789ABCDEF"],
    Dt = t => Pt[15 & t],
    Ct = t => Pt[(240 & t) >> 4] + Pt[15 & t],
    Ot = t => (240 & t) >> 4 == (15 & t);
  function At(t) {
    var e = (t => Ot(t.r) && Ot(t.g) && Ot(t.b) && Ot(t.a))(t) ? Dt : Ct;
    return t ? "#" + e(t.r) + e(t.g) + e(t.b) + ((t, e) => t < 255 ? e(t) : "")(t.a, e) : void 0;
  }
  const Tt = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
  function Lt(t, e, i) {
    const s = e * Math.min(i, 1 - i),
      n = function (e) {
        let n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (e + t / 30) % 12;
        return i - s * Math.max(Math.min(n - 3, 9 - n, 1), -1);
      };
    return [n(0), n(8), n(4)];
  }
  function Et(t, e, i) {
    const s = function (s) {
      let n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (s + t / 60) % 6;
      return i - i * e * Math.max(Math.min(n, 4 - n, 1), 0);
    };
    return [s(5), s(3), s(1)];
  }
  function Rt(t, e, i) {
    const s = Lt(t, 1, .5);
    let n;
    for (e + i > 1 && (n = 1 / (e + i), e *= n, i *= n), n = 0; n < 3; n++) s[n] *= 1 - e - i, s[n] += e;
    return s;
  }
  function It(t) {
    const e = t.r / 255,
      i = t.g / 255,
      s = t.b / 255,
      n = Math.max(e, i, s),
      o = Math.min(e, i, s),
      a = (n + o) / 2;
    let r, l, h;
    return n !== o && (h = n - o, l = a > .5 ? h / (2 - n - o) : h / (n + o), r = function (t, e, i, s, n) {
      return t === n ? (e - i) / s + (e < i ? 6 : 0) : e === n ? (i - t) / s + 2 : (t - e) / s + 4;
    }(e, i, s, h, n), r = 60 * r + .5), [0 | r, l || 0, a];
  }
  function zt(t, e, i, s) {
    return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, i, s)).map(Mt);
  }
  function Ft(t, e, i) {
    return zt(Lt, t, e, i);
  }
  function Vt(t) {
    return (t % 360 + 360) % 360;
  }
  function Bt(t) {
    const e = Tt.exec(t);
    let i,
      s = 255;
    if (!e) return;
    e[5] !== i && (s = e[6] ? vt(+e[5]) : Mt(+e[5]));
    const n = Vt(+e[2]),
      o = +e[3] / 100,
      a = +e[4] / 100;
    return i = "hwb" === e[1] ? function (t, e, i) {
      return zt(Rt, t, e, i);
    }(n, o, a) : "hsv" === e[1] ? function (t, e, i) {
      return zt(Et, t, e, i);
    }(n, o, a) : Ft(n, o, a), {
      r: i[0],
      g: i[1],
      b: i[2],
      a: s
    };
  }
  const Wt = {
      x: "dark",
      Z: "light",
      Y: "re",
      X: "blu",
      W: "gr",
      V: "medium",
      U: "slate",
      A: "ee",
      T: "ol",
      S: "or",
      B: "ra",
      C: "lateg",
      D: "ights",
      R: "in",
      Q: "turquois",
      E: "hi",
      P: "ro",
      O: "al",
      N: "le",
      M: "de",
      L: "yello",
      F: "en",
      K: "ch",
      G: "arks",
      H: "ea",
      I: "ightg",
      J: "wh"
    },
    Nt = {
      OiceXe: "f0f8ff",
      antiquewEte: "faebd7",
      aqua: "ffff",
      aquamarRe: "7fffd4",
      azuY: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "0",
      blanKedOmond: "ffebcd",
      Xe: "ff",
      XeviTet: "8a2be2",
      bPwn: "a52a2a",
      burlywood: "deb887",
      caMtXe: "5f9ea0",
      KartYuse: "7fff00",
      KocTate: "d2691e",
      cSO: "ff7f50",
      cSnflowerXe: "6495ed",
      cSnsilk: "fff8dc",
      crimson: "dc143c",
      cyan: "ffff",
      xXe: "8b",
      xcyan: "8b8b",
      xgTMnPd: "b8860b",
      xWay: "a9a9a9",
      xgYF: "6400",
      xgYy: "a9a9a9",
      xkhaki: "bdb76b",
      xmagFta: "8b008b",
      xTivegYF: "556b2f",
      xSange: "ff8c00",
      xScEd: "9932cc",
      xYd: "8b0000",
      xsOmon: "e9967a",
      xsHgYF: "8fbc8f",
      xUXe: "483d8b",
      xUWay: "2f4f4f",
      xUgYy: "2f4f4f",
      xQe: "ced1",
      xviTet: "9400d3",
      dAppRk: "ff1493",
      dApskyXe: "bfff",
      dimWay: "696969",
      dimgYy: "696969",
      dodgerXe: "1e90ff",
      fiYbrick: "b22222",
      flSOwEte: "fffaf0",
      foYstWAn: "228b22",
      fuKsia: "ff00ff",
      gaRsbSo: "dcdcdc",
      ghostwEte: "f8f8ff",
      gTd: "ffd700",
      gTMnPd: "daa520",
      Way: "808080",
      gYF: "8000",
      gYFLw: "adff2f",
      gYy: "808080",
      honeyMw: "f0fff0",
      hotpRk: "ff69b4",
      RdianYd: "cd5c5c",
      Rdigo: "4b0082",
      ivSy: "fffff0",
      khaki: "f0e68c",
      lavFMr: "e6e6fa",
      lavFMrXsh: "fff0f5",
      lawngYF: "7cfc00",
      NmoncEffon: "fffacd",
      ZXe: "add8e6",
      ZcSO: "f08080",
      Zcyan: "e0ffff",
      ZgTMnPdLw: "fafad2",
      ZWay: "d3d3d3",
      ZgYF: "90ee90",
      ZgYy: "d3d3d3",
      ZpRk: "ffb6c1",
      ZsOmon: "ffa07a",
      ZsHgYF: "20b2aa",
      ZskyXe: "87cefa",
      ZUWay: "778899",
      ZUgYy: "778899",
      ZstAlXe: "b0c4de",
      ZLw: "ffffe0",
      lime: "ff00",
      limegYF: "32cd32",
      lRF: "faf0e6",
      magFta: "ff00ff",
      maPon: "800000",
      VaquamarRe: "66cdaa",
      VXe: "cd",
      VScEd: "ba55d3",
      VpurpN: "9370db",
      VsHgYF: "3cb371",
      VUXe: "7b68ee",
      VsprRggYF: "fa9a",
      VQe: "48d1cc",
      VviTetYd: "c71585",
      midnightXe: "191970",
      mRtcYam: "f5fffa",
      mistyPse: "ffe4e1",
      moccasR: "ffe4b5",
      navajowEte: "ffdead",
      navy: "80",
      Tdlace: "fdf5e6",
      Tive: "808000",
      TivedBb: "6b8e23",
      Sange: "ffa500",
      SangeYd: "ff4500",
      ScEd: "da70d6",
      pOegTMnPd: "eee8aa",
      pOegYF: "98fb98",
      pOeQe: "afeeee",
      pOeviTetYd: "db7093",
      papayawEp: "ffefd5",
      pHKpuff: "ffdab9",
      peru: "cd853f",
      pRk: "ffc0cb",
      plum: "dda0dd",
      powMrXe: "b0e0e6",
      purpN: "800080",
      YbeccapurpN: "663399",
      Yd: "ff0000",
      Psybrown: "bc8f8f",
      PyOXe: "4169e1",
      saddNbPwn: "8b4513",
      sOmon: "fa8072",
      sandybPwn: "f4a460",
      sHgYF: "2e8b57",
      sHshell: "fff5ee",
      siFna: "a0522d",
      silver: "c0c0c0",
      skyXe: "87ceeb",
      UXe: "6a5acd",
      UWay: "708090",
      UgYy: "708090",
      snow: "fffafa",
      sprRggYF: "ff7f",
      stAlXe: "4682b4",
      tan: "d2b48c",
      teO: "8080",
      tEstN: "d8bfd8",
      tomato: "ff6347",
      Qe: "40e0d0",
      viTet: "ee82ee",
      JHt: "f5deb3",
      wEte: "ffffff",
      wEtesmoke: "f5f5f5",
      Lw: "ffff00",
      LwgYF: "9acd32"
    };
  let Ht;
  function jt(t) {
    Ht || (Ht = function () {
      const t = {},
        e = Object.keys(Nt),
        i = Object.keys(Wt);
      let s, n, o, a, r;
      for (s = 0; s < e.length; s++) {
        for (a = r = e[s], n = 0; n < i.length; n++) o = i[n], r = r.replace(o, Wt[o]);
        o = parseInt(Nt[a], 16), t[r] = [o >> 16 & 255, o >> 8 & 255, 255 & o];
      }
      return t;
    }(), Ht.transparent = [0, 0, 0, 0]);
    const e = Ht[t.toLowerCase()];
    return e && {
      r: e[0],
      g: e[1],
      b: e[2],
      a: 4 === e.length ? e[3] : 255
    };
  }
  const $t = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
  const Yt = t => t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055,
    Ut = t => t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
  function Xt(t, e, i) {
    if (t) {
      let s = It(t);
      s[e] = Math.max(0, Math.min(s[e] + s[e] * i, 0 === e ? 360 : 1)), s = Ft(s), t.r = s[0], t.g = s[1], t.b = s[2];
    }
  }
  function qt(t, e) {
    return t ? Object.assign(e || {}, t) : t;
  }
  function Kt(t) {
    var e = {
      r: 0,
      g: 0,
      b: 0,
      a: 255
    };
    return Array.isArray(t) ? t.length >= 3 && (e = {
      r: t[0],
      g: t[1],
      b: t[2],
      a: 255
    }, t.length > 3 && (e.a = Mt(t[3]))) : (e = qt(t, {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    })).a = Mt(e.a), e;
  }
  function Gt(t) {
    return "r" === t.charAt(0) ? function (t) {
      const e = $t.exec(t);
      let i,
        s,
        n,
        o = 255;
      if (e) {
        if (e[7] !== i) {
          const t = +e[7];
          o = e[8] ? vt(t) : yt(255 * t, 0, 255);
        }
        return i = +e[1], s = +e[3], n = +e[5], i = 255 & (e[2] ? vt(i) : yt(i, 0, 255)), s = 255 & (e[4] ? vt(s) : yt(s, 0, 255)), n = 255 & (e[6] ? vt(n) : yt(n, 0, 255)), {
          r: i,
          g: s,
          b: n,
          a: o
        };
      }
    }(t) : Bt(t);
  }
  class Zt {
    constructor(t) {
      if (t instanceof Zt) return t;
      const e = typeof t;
      let i;
      var s, n, o;
      "object" === e ? i = Kt(t) : "string" === e && (o = (s = t).length, "#" === s[0] && (4 === o || 5 === o ? n = {
        r: 255 & 17 * St[s[1]],
        g: 255 & 17 * St[s[2]],
        b: 255 & 17 * St[s[3]],
        a: 5 === o ? 17 * St[s[4]] : 255
      } : 7 !== o && 9 !== o || (n = {
        r: St[s[1]] << 4 | St[s[2]],
        g: St[s[3]] << 4 | St[s[4]],
        b: St[s[5]] << 4 | St[s[6]],
        a: 9 === o ? St[s[7]] << 4 | St[s[8]] : 255
      })), i = n || jt(t) || Gt(t)), this._rgb = i, this._valid = !!i;
    }
    get valid() {
      return this._valid;
    }
    get rgb() {
      var t = qt(this._rgb);
      return t && (t.a = wt(t.a)), t;
    }
    set rgb(t) {
      this._rgb = Kt(t);
    }
    rgbString() {
      return this._valid ? (t = this._rgb) && (t.a < 255 ? `rgba(${t.r}, ${t.g}, ${t.b}, ${wt(t.a)})` : `rgb(${t.r}, ${t.g}, ${t.b})`) : void 0;
      var t;
    }
    hexString() {
      return this._valid ? At(this._rgb) : void 0;
    }
    hslString() {
      return this._valid ? function (t) {
        if (!t) return;
        const e = It(t),
          i = e[0],
          s = kt(e[1]),
          n = kt(e[2]);
        return t.a < 255 ? `hsla(${i}, ${s}%, ${n}%, ${wt(t.a)})` : `hsl(${i}, ${s}%, ${n}%)`;
      }(this._rgb) : void 0;
    }
    mix(t, e) {
      if (t) {
        const i = this.rgb,
          s = t.rgb;
        let n;
        const o = e === n ? .5 : e,
          a = 2 * o - 1,
          r = i.a - s.a,
          l = ((a * r == -1 ? a : (a + r) / (1 + a * r)) + 1) / 2;
        n = 1 - l, i.r = 255 & l * i.r + n * s.r + .5, i.g = 255 & l * i.g + n * s.g + .5, i.b = 255 & l * i.b + n * s.b + .5, i.a = o * i.a + (1 - o) * s.a, this.rgb = i;
      }
      return this;
    }
    interpolate(t, e) {
      return t && (this._rgb = function (t, e, i) {
        const s = Ut(wt(t.r)),
          n = Ut(wt(t.g)),
          o = Ut(wt(t.b));
        return {
          r: Mt(Yt(s + i * (Ut(wt(e.r)) - s))),
          g: Mt(Yt(n + i * (Ut(wt(e.g)) - n))),
          b: Mt(Yt(o + i * (Ut(wt(e.b)) - o))),
          a: t.a + i * (e.a - t.a)
        };
      }(this._rgb, t._rgb, e)), this;
    }
    clone() {
      return new Zt(this.rgb);
    }
    alpha(t) {
      return this._rgb.a = Mt(t), this;
    }
    clearer(t) {
      return this._rgb.a *= 1 - t, this;
    }
    greyscale() {
      const t = this._rgb,
        e = _t(.3 * t.r + .59 * t.g + .11 * t.b);
      return t.r = t.g = t.b = e, this;
    }
    opaquer(t) {
      return this._rgb.a *= 1 + t, this;
    }
    negate() {
      const t = this._rgb;
      return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this;
    }
    lighten(t) {
      return Xt(this._rgb, 2, t), this;
    }
    darken(t) {
      return Xt(this._rgb, 2, -t), this;
    }
    saturate(t) {
      return Xt(this._rgb, 1, t), this;
    }
    desaturate(t) {
      return Xt(this._rgb, 1, -t), this;
    }
    rotate(t) {
      return function (t, e) {
        var i = It(t);
        i[0] = Vt(i[0] + e), i = Ft(i), t.r = i[0], t.g = i[1], t.b = i[2];
      }(this._rgb, t), this;
    }
  }
  function Jt(t) {
    if (t && "object" == typeof t) {
      const e = t.toString();
      return "[object CanvasPattern]" === e || "[object CanvasGradient]" === e;
    }
    return !1;
  }
  function Qt(t) {
    return Jt(t) ? t : new Zt(t);
  }
  function te(t) {
    return Jt(t) ? t : new Zt(t).saturate(.5).darken(.1).hexString();
  }
  const ee = ["x", "y", "borderWidth", "radius", "tension"],
    ie = ["color", "borderColor", "backgroundColor"];
  const se = new Map();
  function ne(t, e, i) {
    return function (t, e) {
      e = e || {};
      const i = t + JSON.stringify(e);
      let s = se.get(i);
      return s || (s = new Intl.NumberFormat(t, e), se.set(i, s)), s;
    }(e, i).format(t);
  }
  const oe = {
    values: t => n(t) ? t : "" + t,
    numeric(t, e, i) {
      if (0 === t) return "0";
      const s = this.chart.options.locale;
      let n,
        o = t;
      if (i.length > 1) {
        const e = Math.max(Math.abs(i[0].value), Math.abs(i[i.length - 1].value));
        (e < 1e-4 || e > 1e15) && (n = "scientific"), o = function (t, e) {
          let i = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
          Math.abs(i) >= 1 && t !== Math.floor(t) && (i = t - Math.floor(t));
          return i;
        }(t, i);
      }
      const a = z(Math.abs(o)),
        r = isNaN(a) ? 1 : Math.max(Math.min(-1 * Math.floor(a), 20), 0),
        l = {
          notation: n,
          minimumFractionDigits: r,
          maximumFractionDigits: r
        };
      return Object.assign(l, this.options.ticks.format), ne(t, s, l);
    },
    logarithmic(t, e, i) {
      if (0 === t) return "0";
      const s = i[e].significand || t / Math.pow(10, Math.floor(z(t)));
      return [1, 2, 3, 5, 10, 15].includes(s) || e > .8 * i.length ? oe.numeric.call(this, t, e, i) : "";
    }
  };
  var ae = {
    formatters: oe
  };
  const re = Object.create(null),
    le = Object.create(null);
  function he(t, e) {
    if (!e) return t;
    const i = e.split(".");
    for (let e = 0, s = i.length; e < s; ++e) {
      const s = i[e];
      t = t[s] || (t[s] = Object.create(null));
    }
    return t;
  }
  function ce(t, e, i) {
    return "string" == typeof e ? b(he(t, e), i) : b(he(t, ""), e);
  }
  class de {
    constructor(t, e) {
      this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = t => t.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"], this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: "normal",
        lineHeight: 1.2,
        weight: null
      }, this.hover = {}, this.hoverBackgroundColor = (t, e) => te(e.backgroundColor), this.hoverBorderColor = (t, e) => te(e.borderColor), this.hoverColor = (t, e) => te(e.color), this.indexAxis = "x", this.interaction = {
        mode: "nearest",
        intersect: !0,
        includeInvisible: !1
      }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e);
    }
    set(t, e) {
      return ce(this, t, e);
    }
    get(t) {
      return he(this, t);
    }
    describe(t, e) {
      return ce(le, t, e);
    }
    override(t, e) {
      return ce(re, t, e);
    }
    route(t, e, i, s) {
      const n = he(this, t),
        a = he(this, i),
        r = "_" + e;
      Object.defineProperties(n, {
        [r]: {
          value: n[e],
          writable: !0
        },
        [e]: {
          enumerable: !0,
          get() {
            const t = this[r],
              e = a[s];
            return o(t) ? Object.assign({}, e, t) : l(t, e);
          },
          set(t) {
            this[r] = t;
          }
        }
      });
    }
    apply(t) {
      t.forEach(t => t(this));
    }
  }
  var ue = new de({
    _scriptable: t => !t.startsWith("on"),
    _indexable: t => "events" !== t,
    hover: {
      _fallback: "interaction"
    },
    interaction: {
      _scriptable: !1,
      _indexable: !1
    }
  }, [function (t) {
    t.set("animation", {
      delay: void 0,
      duration: 1e3,
      easing: "easeOutQuart",
      fn: void 0,
      from: void 0,
      loop: void 0,
      to: void 0,
      type: void 0
    }), t.describe("animation", {
      _fallback: !1,
      _indexable: !1,
      _scriptable: t => "onProgress" !== t && "onComplete" !== t && "fn" !== t
    }), t.set("animations", {
      colors: {
        type: "color",
        properties: ie
      },
      numbers: {
        type: "number",
        properties: ee
      }
    }), t.describe("animations", {
      _fallback: "animation"
    }), t.set("transitions", {
      active: {
        animation: {
          duration: 400
        }
      },
      resize: {
        animation: {
          duration: 0
        }
      },
      show: {
        animations: {
          colors: {
            from: "transparent"
          },
          visible: {
            type: "boolean",
            duration: 0
          }
        }
      },
      hide: {
        animations: {
          colors: {
            to: "transparent"
          },
          visible: {
            type: "boolean",
            easing: "linear",
            fn: t => 0 | t
          }
        }
      }
    });
  }, function (t) {
    t.set("layout", {
      autoPadding: !0,
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    });
  }, function (t) {
    t.set("scale", {
      display: !0,
      offset: !1,
      reverse: !1,
      beginAtZero: !1,
      bounds: "ticks",
      grace: 0,
      grid: {
        display: !0,
        lineWidth: 1,
        drawOnChartArea: !0,
        drawTicks: !0,
        tickLength: 8,
        tickWidth: (t, e) => e.lineWidth,
        tickColor: (t, e) => e.color,
        offset: !1
      },
      border: {
        display: !0,
        dash: [],
        dashOffset: 0,
        width: 1
      },
      title: {
        display: !1,
        text: "",
        padding: {
          top: 4,
          bottom: 4
        }
      },
      ticks: {
        minRotation: 0,
        maxRotation: 50,
        mirror: !1,
        textStrokeWidth: 0,
        textStrokeColor: "",
        padding: 3,
        display: !0,
        autoSkip: !0,
        autoSkipPadding: 3,
        labelOffset: 0,
        callback: ae.formatters.values,
        minor: {},
        major: {},
        align: "center",
        crossAlign: "near",
        showLabelBackdrop: !1,
        backdropColor: "rgba(255, 255, 255, 0.75)",
        backdropPadding: 2
      }
    }), t.route("scale.ticks", "color", "", "color"), t.route("scale.grid", "color", "", "borderColor"), t.route("scale.border", "color", "", "borderColor"), t.route("scale.title", "color", "", "color"), t.describe("scale", {
      _fallback: !1,
      _scriptable: t => !t.startsWith("before") && !t.startsWith("after") && "callback" !== t && "parser" !== t,
      _indexable: t => "borderDash" !== t && "tickBorderDash" !== t && "dash" !== t
    }), t.describe("scales", {
      _fallback: "scale"
    }), t.describe("scale.ticks", {
      _scriptable: t => "backdropPadding" !== t && "callback" !== t,
      _indexable: t => "backdropPadding" !== t
    });
  }]);
  function fe() {
    return "undefined" != typeof window && "undefined" != typeof document;
  }
  function ge(t) {
    let e = t.parentNode;
    return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e;
  }
  function pe(t, e, i) {
    let s;
    return "string" == typeof t ? (s = parseInt(t, 10), -1 !== t.indexOf("%") && (s = s / 100 * e.parentNode[i])) : s = t, s;
  }
  const me = t => t.ownerDocument.defaultView.getComputedStyle(t, null);
  function be(t, e) {
    return me(t).getPropertyValue(e);
  }
  const xe = ["top", "right", "bottom", "left"];
  function _e(t, e, i) {
    const s = {};
    i = i ? "-" + i : "";
    for (let n = 0; n < 4; n++) {
      const o = xe[n];
      s[o] = parseFloat(t[e + "-" + o + i]) || 0;
    }
    return s.width = s.left + s.right, s.height = s.top + s.bottom, s;
  }
  const ye = (t, e, i) => (t > 0 || e > 0) && (!i || !i.shadowRoot);
  function ve(t, e) {
    if ("native" in t) return t;
    const {
        canvas: i,
        currentDevicePixelRatio: s
      } = e,
      n = me(i),
      o = "border-box" === n.boxSizing,
      a = _e(n, "padding"),
      r = _e(n, "border", "width"),
      {
        x: l,
        y: h,
        box: c
      } = function (t, e) {
        const i = t.touches,
          s = i && i.length ? i[0] : t,
          {
            offsetX: n,
            offsetY: o
          } = s;
        let a,
          r,
          l = !1;
        if (ye(n, o, t.target)) a = n, r = o;else {
          const t = e.getBoundingClientRect();
          a = s.clientX - t.left, r = s.clientY - t.top, l = !0;
        }
        return {
          x: a,
          y: r,
          box: l
        };
      }(t, i),
      d = a.left + (c && r.left),
      u = a.top + (c && r.top);
    let {
      width: f,
      height: g
    } = e;
    return o && (f -= a.width + r.width, g -= a.height + r.height), {
      x: Math.round((l - d) / f * i.width / s),
      y: Math.round((h - u) / g * i.height / s)
    };
  }
  const Me = t => Math.round(10 * t) / 10;
  function we(t, e, i, s) {
    const n = me(t),
      o = _e(n, "margin"),
      a = pe(n.maxWidth, t, "clientWidth") || T,
      r = pe(n.maxHeight, t, "clientHeight") || T,
      l = function (t, e, i) {
        let s, n;
        if (void 0 === e || void 0 === i) {
          const o = ge(t);
          if (o) {
            const t = o.getBoundingClientRect(),
              a = me(o),
              r = _e(a, "border", "width"),
              l = _e(a, "padding");
            e = t.width - l.width - r.width, i = t.height - l.height - r.height, s = pe(a.maxWidth, o, "clientWidth"), n = pe(a.maxHeight, o, "clientHeight");
          } else e = t.clientWidth, i = t.clientHeight;
        }
        return {
          width: e,
          height: i,
          maxWidth: s || T,
          maxHeight: n || T
        };
      }(t, e, i);
    let {
      width: h,
      height: c
    } = l;
    if ("content-box" === n.boxSizing) {
      const t = _e(n, "border", "width"),
        e = _e(n, "padding");
      h -= e.width + t.width, c -= e.height + t.height;
    }
    h = Math.max(0, h - o.width), c = Math.max(0, s ? h / s : c - o.height), h = Me(Math.min(h, a, l.maxWidth)), c = Me(Math.min(c, r, l.maxHeight)), h && !c && (c = Me(h / 2));
    return (void 0 !== e || void 0 !== i) && s && l.height && c > l.height && (c = l.height, h = Me(Math.floor(c * s))), {
      width: h,
      height: c
    };
  }
  function ke(t, e, i) {
    const s = e || 1,
      n = Math.floor(t.height * s),
      o = Math.floor(t.width * s);
    t.height = Math.floor(t.height), t.width = Math.floor(t.width);
    const a = t.canvas;
    return a.style && (i || !a.style.height && !a.style.width) && (a.style.height = `${t.height}px`, a.style.width = `${t.width}px`), (t.currentDevicePixelRatio !== s || a.height !== n || a.width !== o) && (t.currentDevicePixelRatio = s, a.height = n, a.width = o, t.ctx.setTransform(s, 0, 0, s, 0, 0), !0);
  }
  const Se = function () {
    let t = !1;
    try {
      const e = {
        get passive() {
          return t = !0, !1;
        }
      };
      window.addEventListener("test", null, e), window.removeEventListener("test", null, e);
    } catch (t) {}
    return t;
  }();
  function Pe(t, e) {
    const i = be(t, e),
      s = i && i.match(/^(\d+)(\.\d+)?px$/);
    return s ? +s[1] : void 0;
  }
  function De(t) {
    return !t || s(t.size) || s(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family;
  }
  function Ce(t, e, i, s, n) {
    let o = e[n];
    return o || (o = e[n] = t.measureText(n).width, i.push(n)), o > s && (s = o), s;
  }
  function Oe(t, e, i, s) {
    let o = (s = s || {}).data = s.data || {},
      a = s.garbageCollect = s.garbageCollect || [];
    s.font !== e && (o = s.data = {}, a = s.garbageCollect = [], s.font = e), t.save(), t.font = e;
    let r = 0;
    const l = i.length;
    let h, c, d, u, f;
    for (h = 0; h < l; h++) if (u = i[h], null == u || n(u)) {
      if (n(u)) for (c = 0, d = u.length; c < d; c++) f = u[c], null == f || n(f) || (r = Ce(t, o, a, r, f));
    } else r = Ce(t, o, a, r, u);
    t.restore();
    const g = a.length / 2;
    if (g > i.length) {
      for (h = 0; h < g; h++) delete o[a[h]];
      a.splice(0, g);
    }
    return r;
  }
  function Ae(t, e, i) {
    const s = t.currentDevicePixelRatio,
      n = 0 !== i ? Math.max(i / 2, .5) : 0;
    return Math.round((e - n) * s) / s + n;
  }
  function Te(t, e) {
    (e = e || t.getContext("2d")).save(), e.resetTransform(), e.clearRect(0, 0, t.width, t.height), e.restore();
  }
  function Le(t, e, i, s) {
    Ee(t, e, i, s, null);
  }
  function Ee(t, e, i, s, n) {
    let o, a, r, l, h, c, d, u;
    const f = e.pointStyle,
      g = e.rotation,
      p = e.radius;
    let m = (g || 0) * L;
    if (f && "object" == typeof f && (o = f.toString(), "[object HTMLImageElement]" === o || "[object HTMLCanvasElement]" === o)) return t.save(), t.translate(i, s), t.rotate(m), t.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height), void t.restore();
    if (!(isNaN(p) || p <= 0)) {
      switch (t.beginPath(), f) {
        default:
          n ? t.ellipse(i, s, n / 2, p, 0, 0, O) : t.arc(i, s, p, 0, O), t.closePath();
          break;
        case "triangle":
          c = n ? n / 2 : p, t.moveTo(i + Math.sin(m) * c, s - Math.cos(m) * p), m += I, t.lineTo(i + Math.sin(m) * c, s - Math.cos(m) * p), m += I, t.lineTo(i + Math.sin(m) * c, s - Math.cos(m) * p), t.closePath();
          break;
        case "rectRounded":
          h = .516 * p, l = p - h, a = Math.cos(m + R) * l, d = Math.cos(m + R) * (n ? n / 2 - h : l), r = Math.sin(m + R) * l, u = Math.sin(m + R) * (n ? n / 2 - h : l), t.arc(i - d, s - r, h, m - C, m - E), t.arc(i + u, s - a, h, m - E, m), t.arc(i + d, s + r, h, m, m + E), t.arc(i - u, s + a, h, m + E, m + C), t.closePath();
          break;
        case "rect":
          if (!g) {
            l = Math.SQRT1_2 * p, c = n ? n / 2 : l, t.rect(i - c, s - l, 2 * c, 2 * l);
            break;
          }
          m += R;
        case "rectRot":
          d = Math.cos(m) * (n ? n / 2 : p), a = Math.cos(m) * p, r = Math.sin(m) * p, u = Math.sin(m) * (n ? n / 2 : p), t.moveTo(i - d, s - r), t.lineTo(i + u, s - a), t.lineTo(i + d, s + r), t.lineTo(i - u, s + a), t.closePath();
          break;
        case "crossRot":
          m += R;
        case "cross":
          d = Math.cos(m) * (n ? n / 2 : p), a = Math.cos(m) * p, r = Math.sin(m) * p, u = Math.sin(m) * (n ? n / 2 : p), t.moveTo(i - d, s - r), t.lineTo(i + d, s + r), t.moveTo(i + u, s - a), t.lineTo(i - u, s + a);
          break;
        case "star":
          d = Math.cos(m) * (n ? n / 2 : p), a = Math.cos(m) * p, r = Math.sin(m) * p, u = Math.sin(m) * (n ? n / 2 : p), t.moveTo(i - d, s - r), t.lineTo(i + d, s + r), t.moveTo(i + u, s - a), t.lineTo(i - u, s + a), m += R, d = Math.cos(m) * (n ? n / 2 : p), a = Math.cos(m) * p, r = Math.sin(m) * p, u = Math.sin(m) * (n ? n / 2 : p), t.moveTo(i - d, s - r), t.lineTo(i + d, s + r), t.moveTo(i + u, s - a), t.lineTo(i - u, s + a);
          break;
        case "line":
          a = n ? n / 2 : Math.cos(m) * p, r = Math.sin(m) * p, t.moveTo(i - a, s - r), t.lineTo(i + a, s + r);
          break;
        case "dash":
          t.moveTo(i, s), t.lineTo(i + Math.cos(m) * (n ? n / 2 : p), s + Math.sin(m) * p);
          break;
        case !1:
          t.closePath();
      }
      t.fill(), e.borderWidth > 0 && t.stroke();
    }
  }
  function Re(t, e, i) {
    return i = i || .5, !e || t && t.x > e.left - i && t.x < e.right + i && t.y > e.top - i && t.y < e.bottom + i;
  }
  function Ie(t, e) {
    t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip();
  }
  function ze(t) {
    t.restore();
  }
  function Fe(t, e, i, s, n) {
    if (!e) return t.lineTo(i.x, i.y);
    if ("middle" === n) {
      const s = (e.x + i.x) / 2;
      t.lineTo(s, e.y), t.lineTo(s, i.y);
    } else "after" === n != !!s ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);
    t.lineTo(i.x, i.y);
  }
  function Ve(t, e, i, s) {
    if (!e) return t.lineTo(i.x, i.y);
    t.bezierCurveTo(s ? e.cp1x : e.cp2x, s ? e.cp1y : e.cp2y, s ? i.cp2x : i.cp1x, s ? i.cp2y : i.cp1y, i.x, i.y);
  }
  function Be(t, e, i, s, n) {
    if (n.strikethrough || n.underline) {
      const o = t.measureText(s),
        a = e - o.actualBoundingBoxLeft,
        r = e + o.actualBoundingBoxRight,
        l = i - o.actualBoundingBoxAscent,
        h = i + o.actualBoundingBoxDescent,
        c = n.strikethrough ? (l + h) / 2 : h;
      t.strokeStyle = t.fillStyle, t.beginPath(), t.lineWidth = n.decorationWidth || 2, t.moveTo(a, c), t.lineTo(r, c), t.stroke();
    }
  }
  function We(t, e) {
    const i = t.fillStyle;
    t.fillStyle = e.color, t.fillRect(e.left, e.top, e.width, e.height), t.fillStyle = i;
  }
  function Ne(t, e, i, o, a) {
    let r = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
    const l = n(e) ? e : [e],
      h = r.strokeWidth > 0 && "" !== r.strokeColor;
    let c, d;
    for (t.save(), t.font = a.string, function (t, e) {
      e.translation && t.translate(e.translation[0], e.translation[1]), s(e.rotation) || t.rotate(e.rotation), e.color && (t.fillStyle = e.color), e.textAlign && (t.textAlign = e.textAlign), e.textBaseline && (t.textBaseline = e.textBaseline);
    }(t, r), c = 0; c < l.length; ++c) d = l[c], r.backdrop && We(t, r.backdrop), h && (r.strokeColor && (t.strokeStyle = r.strokeColor), s(r.strokeWidth) || (t.lineWidth = r.strokeWidth), t.strokeText(d, i, o, r.maxWidth)), t.fillText(d, i, o, r.maxWidth), Be(t, i, o, d, r), o += Number(a.lineHeight);
    t.restore();
  }
  function He(t, e) {
    const {
      x: i,
      y: s,
      w: n,
      h: o,
      radius: a
    } = e;
    t.arc(i + a.topLeft, s + a.topLeft, a.topLeft, -E, C, !0), t.lineTo(i, s + o - a.bottomLeft), t.arc(i + a.bottomLeft, s + o - a.bottomLeft, a.bottomLeft, C, E, !0), t.lineTo(i + n - a.bottomRight, s + o), t.arc(i + n - a.bottomRight, s + o - a.bottomRight, a.bottomRight, E, 0, !0), t.lineTo(i + n, s + a.topRight), t.arc(i + n - a.topRight, s + a.topRight, a.topRight, 0, -E, !0), t.lineTo(i + a.topLeft, s);
  }
  function je(t) {
    let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [""];
    let i = arguments.length > 2 ? arguments[2] : undefined;
    let s = arguments.length > 3 ? arguments[3] : undefined;
    let n = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : () => t[0];
    const o = i || t;
    void 0 === s && (s = ti("_fallback", t));
    const a = {
      [Symbol.toStringTag]: "Object",
      _cacheable: !0,
      _scopes: t,
      _rootScopes: o,
      _fallback: s,
      _getTarget: n,
      override: i => je([i, ...t], e, o, s)
    };
    return new Proxy(a, {
      deleteProperty: (e, i) => (delete e[i], delete e._keys, delete t[0][i], !0),
      get: (i, s) => qe(i, s, () => function (t, e, i, s) {
        let n;
        for (const o of e) if (n = ti(Ue(o, t), i), void 0 !== n) return Xe(t, n) ? Je(i, s, t, n) : n;
      }(s, e, t, i)),
      getOwnPropertyDescriptor: (t, e) => Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
      getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
      has: (t, e) => ei(t).includes(e),
      ownKeys: t => ei(t),
      set(t, e, i) {
        const s = t._storage || (t._storage = n());
        return t[e] = s[e] = i, delete t._keys, !0;
      }
    });
  }
  function $e(t, e, i, s) {
    const a = {
      _cacheable: !1,
      _proxy: t,
      _context: e,
      _subProxy: i,
      _stack: new Set(),
      _descriptors: Ye(t, s),
      setContext: e => $e(t, e, i, s),
      override: n => $e(t.override(n), e, i, s)
    };
    return new Proxy(a, {
      deleteProperty: (e, i) => (delete e[i], delete t[i], !0),
      get: (t, e, i) => qe(t, e, () => function (t, e, i) {
        const {
          _proxy: s,
          _context: a,
          _subProxy: r,
          _descriptors: l
        } = t;
        let h = s[e];
        S(h) && l.isScriptable(e) && (h = function (t, e, i, s) {
          const {
            _proxy: n,
            _context: o,
            _subProxy: a,
            _stack: r
          } = i;
          if (r.has(t)) throw new Error("Recursion detected: " + Array.from(r).join("->") + "->" + t);
          r.add(t);
          let l = e(o, a || s);
          r.delete(t), Xe(t, l) && (l = Je(n._scopes, n, t, l));
          return l;
        }(e, h, t, i));
        n(h) && h.length && (h = function (t, e, i, s) {
          const {
            _proxy: n,
            _context: a,
            _subProxy: r,
            _descriptors: l
          } = i;
          if (void 0 !== a.index && s(t)) return e[a.index % e.length];
          if (o(e[0])) {
            const i = e,
              s = n._scopes.filter(t => t !== i);
            e = [];
            for (const o of i) {
              const i = Je(s, n, t, o);
              e.push($e(i, a, r && r[t], l));
            }
          }
          return e;
        }(e, h, t, l.isIndexable));
        Xe(e, h) && (h = $e(h, a, r && r[e], l));
        return h;
      }(t, e, i)),
      getOwnPropertyDescriptor: (e, i) => e._descriptors.allKeys ? Reflect.has(t, i) ? {
        enumerable: !0,
        configurable: !0
      } : void 0 : Reflect.getOwnPropertyDescriptor(t, i),
      getPrototypeOf: () => Reflect.getPrototypeOf(t),
      has: (e, i) => Reflect.has(t, i),
      ownKeys: () => Reflect.ownKeys(t),
      set: (e, i, s) => (t[i] = s, delete e[i], !0)
    });
  }
  function Ye(t) {
    let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      scriptable: !0,
      indexable: !0
    };
    const {
      _scriptable: i = e.scriptable,
      _indexable: s = e.indexable,
      _allKeys: n = e.allKeys
    } = t;
    return {
      allKeys: n,
      scriptable: i,
      indexable: s,
      isScriptable: S(i) ? i : () => i,
      isIndexable: S(s) ? s : () => s
    };
  }
  const Ue = (t, e) => t ? t + w(e) : e,
    Xe = (t, e) => o(e) && "adapters" !== t && (null === Object.getPrototypeOf(e) || e.constructor === Object);
  function qe(t, e, i) {
    if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
    const s = i();
    return t[e] = s, s;
  }
  function Ke(t, e, i) {
    return S(t) ? t(e, i) : t;
  }
  const Ge = (t, e) => !0 === t ? e : "string" == typeof t ? M(e, t) : void 0;
  function Ze(t, e, i, s, n) {
    for (const o of e) {
      const e = Ge(i, o);
      if (e) {
        t.add(e);
        const o = Ke(e._fallback, i, n);
        if (void 0 !== o && o !== i && o !== s) return o;
      } else if (!1 === e && void 0 !== s && i !== s) return null;
    }
    return !1;
  }
  function Je(t, e, i, s) {
    const a = e._rootScopes,
      r = Ke(e._fallback, i, s),
      l = [...t, ...a],
      h = new Set();
    h.add(s);
    let c = Qe(h, l, i, r || i, s);
    return null !== c && (void 0 === r || r === i || (c = Qe(h, l, r, c, s), null !== c)) && je(Array.from(h), [""], a, r, () => function (t, e, i) {
      const s = t._getTarget();
      e in s || (s[e] = {});
      const a = s[e];
      if (n(a) && o(i)) return i;
      return a || {};
    }(e, i, s));
  }
  function Qe(t, e, i, s, n) {
    for (; i;) i = Ze(t, e, i, s, n);
    return i;
  }
  function ti(t, e) {
    for (const i of e) {
      if (!i) continue;
      const e = i[t];
      if (void 0 !== e) return e;
    }
  }
  function ei(t) {
    let e = t._keys;
    return e || (e = t._keys = function (t) {
      const e = new Set();
      for (const i of t) for (const t of Object.keys(i).filter(t => !t.startsWith("_"))) e.add(t);
      return Array.from(e);
    }(t._scopes)), e;
  }
  function ii(t, e, i, s) {
    const {
        iScale: n
      } = t,
      {
        key: o = "r"
      } = this._parsing,
      a = new Array(s);
    let r, l, h, c;
    for (r = 0, l = s; r < l; ++r) h = r + i, c = e[h], a[r] = {
      r: n.parse(M(c, o), h)
    };
    return a;
  }
  const si = Number.EPSILON || 1e-14,
    ni = (t, e) => e < t.length && !t[e].skip && t[e],
    oi = t => "x" === t ? "y" : "x";
  function ai(t, e, i, s) {
    const n = t.skip ? e : t,
      o = e,
      a = i.skip ? e : i,
      r = q(o, n),
      l = q(a, o);
    let h = r / (r + l),
      c = l / (r + l);
    h = isNaN(h) ? 0 : h, c = isNaN(c) ? 0 : c;
    const d = s * h,
      u = s * c;
    return {
      previous: {
        x: o.x - d * (a.x - n.x),
        y: o.y - d * (a.y - n.y)
      },
      next: {
        x: o.x + u * (a.x - n.x),
        y: o.y + u * (a.y - n.y)
      }
    };
  }
  function ri(t) {
    let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "x";
    const i = oi(e),
      s = t.length,
      n = Array(s).fill(0),
      o = Array(s);
    let a,
      r,
      l,
      h = ni(t, 0);
    for (a = 0; a < s; ++a) if (r = l, l = h, h = ni(t, a + 1), l) {
      if (h) {
        const t = h[e] - l[e];
        n[a] = 0 !== t ? (h[i] - l[i]) / t : 0;
      }
      o[a] = r ? h ? F(n[a - 1]) !== F(n[a]) ? 0 : (n[a - 1] + n[a]) / 2 : n[a - 1] : n[a];
    }
    !function (t, e, i) {
      const s = t.length;
      let n,
        o,
        a,
        r,
        l,
        h = ni(t, 0);
      for (let c = 0; c < s - 1; ++c) l = h, h = ni(t, c + 1), l && h && (V(e[c], 0, si) ? i[c] = i[c + 1] = 0 : (n = i[c] / e[c], o = i[c + 1] / e[c], r = Math.pow(n, 2) + Math.pow(o, 2), r <= 9 || (a = 3 / Math.sqrt(r), i[c] = n * a * e[c], i[c + 1] = o * a * e[c])));
    }(t, n, o), function (t, e) {
      let i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "x";
      const s = oi(i),
        n = t.length;
      let o,
        a,
        r,
        l = ni(t, 0);
      for (let h = 0; h < n; ++h) {
        if (a = r, r = l, l = ni(t, h + 1), !r) continue;
        const n = r[i],
          c = r[s];
        a && (o = (n - a[i]) / 3, r[`cp1${i}`] = n - o, r[`cp1${s}`] = c - o * e[h]), l && (o = (l[i] - n) / 3, r[`cp2${i}`] = n + o, r[`cp2${s}`] = c + o * e[h]);
      }
    }(t, o, e);
  }
  function li(t, e, i) {
    return Math.max(Math.min(t, i), e);
  }
  function hi(t, e, i, s, n) {
    let o, a, r, l;
    if (e.spanGaps && (t = t.filter(t => !t.skip)), "monotone" === e.cubicInterpolationMode) ri(t, n);else {
      let i = s ? t[t.length - 1] : t[0];
      for (o = 0, a = t.length; o < a; ++o) r = t[o], l = ai(i, r, t[Math.min(o + 1, a - (s ? 0 : 1)) % a], e.tension), r.cp1x = l.previous.x, r.cp1y = l.previous.y, r.cp2x = l.next.x, r.cp2y = l.next.y, i = r;
    }
    e.capBezierPoints && function (t, e) {
      let i,
        s,
        n,
        o,
        a,
        r = Re(t[0], e);
      for (i = 0, s = t.length; i < s; ++i) a = o, o = r, r = i < s - 1 && Re(t[i + 1], e), o && (n = t[i], a && (n.cp1x = li(n.cp1x, e.left, e.right), n.cp1y = li(n.cp1y, e.top, e.bottom)), r && (n.cp2x = li(n.cp2x, e.left, e.right), n.cp2y = li(n.cp2y, e.top, e.bottom)));
    }(t, i);
  }
  const ci = t => 0 === t || 1 === t,
    di = (t, e, i) => -Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * O / i),
    ui = (t, e, i) => Math.pow(2, -10 * t) * Math.sin((t - e) * O / i) + 1,
    fi = {
      linear: t => t,
      easeInQuad: t => t * t,
      easeOutQuad: t => -t * (t - 2),
      easeInOutQuad: t => (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1),
      easeInCubic: t => t * t * t,
      easeOutCubic: t => (t -= 1) * t * t + 1,
      easeInOutCubic: t => (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2),
      easeInQuart: t => t * t * t * t,
      easeOutQuart: t => -((t -= 1) * t * t * t - 1),
      easeInOutQuart: t => (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2),
      easeInQuint: t => t * t * t * t * t,
      easeOutQuint: t => (t -= 1) * t * t * t * t + 1,
      easeInOutQuint: t => (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2),
      easeInSine: t => 1 - Math.cos(t * E),
      easeOutSine: t => Math.sin(t * E),
      easeInOutSine: t => -.5 * (Math.cos(C * t) - 1),
      easeInExpo: t => 0 === t ? 0 : Math.pow(2, 10 * (t - 1)),
      easeOutExpo: t => 1 === t ? 1 : 1 - Math.pow(2, -10 * t),
      easeInOutExpo: t => ci(t) ? t : t < .5 ? .5 * Math.pow(2, 10 * (2 * t - 1)) : .5 * (2 - Math.pow(2, -10 * (2 * t - 1))),
      easeInCirc: t => t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1),
      easeOutCirc: t => Math.sqrt(1 - (t -= 1) * t),
      easeInOutCirc: t => (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
      easeInElastic: t => ci(t) ? t : di(t, .075, .3),
      easeOutElastic: t => ci(t) ? t : ui(t, .075, .3),
      easeInOutElastic(t) {
        const e = .1125;
        return ci(t) ? t : t < .5 ? .5 * di(2 * t, e, .45) : .5 + .5 * ui(2 * t - 1, e, .45);
      },
      easeInBack(t) {
        const e = 1.70158;
        return t * t * ((e + 1) * t - e);
      },
      easeOutBack(t) {
        const e = 1.70158;
        return (t -= 1) * t * ((e + 1) * t + e) + 1;
      },
      easeInOutBack(t) {
        let e = 1.70158;
        return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
      },
      easeInBounce: t => 1 - fi.easeOutBounce(1 - t),
      easeOutBounce(t) {
        const e = 7.5625,
          i = 2.75;
        return t < 1 / i ? e * t * t : t < 2 / i ? e * (t -= 1.5 / i) * t + .75 : t < 2.5 / i ? e * (t -= 2.25 / i) * t + .9375 : e * (t -= 2.625 / i) * t + .984375;
      },
      easeInOutBounce: t => t < .5 ? .5 * fi.easeInBounce(2 * t) : .5 * fi.easeOutBounce(2 * t - 1) + .5
    };
  function gi(t, e, i, s) {
    return {
      x: t.x + i * (e.x - t.x),
      y: t.y + i * (e.y - t.y)
    };
  }
  function pi(t, e, i, s) {
    return {
      x: t.x + i * (e.x - t.x),
      y: "middle" === s ? i < .5 ? t.y : e.y : "after" === s ? i < 1 ? t.y : e.y : i > 0 ? e.y : t.y
    };
  }
  function mi(t, e, i, s) {
    const n = {
        x: t.cp2x,
        y: t.cp2y
      },
      o = {
        x: e.cp1x,
        y: e.cp1y
      },
      a = gi(t, n, i),
      r = gi(n, o, i),
      l = gi(o, e, i),
      h = gi(a, r, i),
      c = gi(r, l, i);
    return gi(h, c, i);
  }
  const bi = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
    xi = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
  function _i(t, e) {
    const i = ("" + t).match(bi);
    if (!i || "normal" === i[1]) return 1.2 * e;
    switch (t = +i[2], i[3]) {
      case "px":
        return t;
      case "%":
        t /= 100;
    }
    return e * t;
  }
  const yi = t => +t || 0;
  function vi(t, e) {
    const i = {},
      s = o(e),
      n = s ? Object.keys(e) : e,
      a = o(t) ? s ? i => l(t[i], t[e[i]]) : e => t[e] : () => t;
    for (const t of n) i[t] = yi(a(t));
    return i;
  }
  function Mi(t) {
    return vi(t, {
      top: "y",
      right: "x",
      bottom: "y",
      left: "x"
    });
  }
  function wi(t) {
    return vi(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
  }
  function ki(t) {
    const e = Mi(t);
    return e.width = e.left + e.right, e.height = e.top + e.bottom, e;
  }
  function Si(t, e) {
    t = t || {}, e = e || ue.font;
    let i = l(t.size, e.size);
    "string" == typeof i && (i = parseInt(i, 10));
    let s = l(t.style, e.style);
    s && !("" + s).match(xi) && (console.warn('Invalid font style specified: "' + s + '"'), s = void 0);
    const n = {
      family: l(t.family, e.family),
      lineHeight: _i(l(t.lineHeight, e.lineHeight), i),
      size: i,
      style: s,
      weight: l(t.weight, e.weight),
      string: ""
    };
    return n.string = De(n), n;
  }
  function Pi(t, e, i, s) {
    let o,
      a,
      r,
      l = !0;
    for (o = 0, a = t.length; o < a; ++o) if (r = t[o], void 0 !== r && (void 0 !== e && "function" == typeof r && (r = r(e), l = !1), void 0 !== i && n(r) && (r = r[i % r.length], l = !1), void 0 !== r)) return s && !l && (s.cacheable = !1), r;
  }
  function Di(t, e, i) {
    const {
        min: s,
        max: n
      } = t,
      o = c(e, (n - s) / 2),
      a = (t, e) => i && 0 === t ? 0 : t + e;
    return {
      min: a(s, -Math.abs(o)),
      max: a(n, o)
    };
  }
  function Ci(t, e) {
    return Object.assign(Object.create(t), e);
  }
  function Oi(t, e, i) {
    return t ? function (t, e) {
      return {
        x: i => t + t + e - i,
        setWidth(t) {
          e = t;
        },
        textAlign: t => "center" === t ? t : "right" === t ? "left" : "right",
        xPlus: (t, e) => t - e,
        leftForLtr: (t, e) => t - e
      };
    }(e, i) : {
      x: t => t,
      setWidth(t) {},
      textAlign: t => t,
      xPlus: (t, e) => t + e,
      leftForLtr: (t, e) => t
    };
  }
  function Ai(t, e) {
    let i, s;
    "ltr" !== e && "rtl" !== e || (i = t.canvas.style, s = [i.getPropertyValue("direction"), i.getPropertyPriority("direction")], i.setProperty("direction", e, "important"), t.prevTextDirection = s);
  }
  function Ti(t, e) {
    void 0 !== e && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1]));
  }
  function Li(t) {
    return "angle" === t ? {
      between: Z,
      compare: K,
      normalize: G
    } : {
      between: tt,
      compare: (t, e) => t - e,
      normalize: t => t
    };
  }
  function Ei(_ref) {
    let {
      start: t,
      end: e,
      count: i,
      loop: s,
      style: n
    } = _ref;
    return {
      start: t % i,
      end: e % i,
      loop: s && (e - t + 1) % i == 0,
      style: n
    };
  }
  function Ri(t, e, i) {
    if (!i) return [t];
    const {
        property: s,
        start: n,
        end: o
      } = i,
      a = e.length,
      {
        compare: r,
        between: l,
        normalize: h
      } = Li(s),
      {
        start: c,
        end: d,
        loop: u,
        style: f
      } = function (t, e, i) {
        const {
            property: s,
            start: n,
            end: o
          } = i,
          {
            between: a,
            normalize: r
          } = Li(s),
          l = e.length;
        let h,
          c,
          {
            start: d,
            end: u,
            loop: f
          } = t;
        if (f) {
          for (d += l, u += l, h = 0, c = l; h < c && a(r(e[d % l][s]), n, o); ++h) d--, u--;
          d %= l, u %= l;
        }
        return u < d && (u += l), {
          start: d,
          end: u,
          loop: f,
          style: t.style
        };
      }(t, e, i),
      g = [];
    let p,
      m,
      b,
      x = !1,
      _ = null;
    const y = () => x || l(n, b, p) && 0 !== r(n, b),
      v = () => !x || 0 === r(o, p) || l(o, b, p);
    for (let t = c, i = c; t <= d; ++t) m = e[t % a], m.skip || (p = h(m[s]), p !== b && (x = l(p, n, o), null === _ && y() && (_ = 0 === r(p, n) ? t : i), null !== _ && v() && (g.push(Ei({
      start: _,
      end: t,
      loop: u,
      count: a,
      style: f
    })), _ = null), i = t, b = p));
    return null !== _ && g.push(Ei({
      start: _,
      end: d,
      loop: u,
      count: a,
      style: f
    })), g;
  }
  function Ii(t, e) {
    const i = [],
      s = t.segments;
    for (let n = 0; n < s.length; n++) {
      const o = Ri(s[n], t.points, e);
      o.length && i.push(...o);
    }
    return i;
  }
  function zi(t, e) {
    const i = t.points,
      s = t.options.spanGaps,
      n = i.length;
    if (!n) return [];
    const o = !!t._loop,
      {
        start: a,
        end: r
      } = function (t, e, i, s) {
        let n = 0,
          o = e - 1;
        if (i && !s) for (; n < e && !t[n].skip;) n++;
        for (; n < e && t[n].skip;) n++;
        for (n %= e, i && (o += n); o > n && t[o % e].skip;) o--;
        return o %= e, {
          start: n,
          end: o
        };
      }(i, n, o, s);
    if (!0 === s) return Fi(t, [{
      start: a,
      end: r,
      loop: o
    }], i, e);
    return Fi(t, function (t, e, i, s) {
      const n = t.length,
        o = [];
      let a,
        r = e,
        l = t[e];
      for (a = e + 1; a <= i; ++a) {
        const i = t[a % n];
        i.skip || i.stop ? l.skip || (s = !1, o.push({
          start: e % n,
          end: (a - 1) % n,
          loop: s
        }), e = r = i.stop ? a : null) : (r = a, l.skip && (e = a)), l = i;
      }
      return null !== r && o.push({
        start: e % n,
        end: r % n,
        loop: s
      }), o;
    }(i, a, r < a ? r + n : r, !!t._fullLoop && 0 === a && r === n - 1), i, e);
  }
  function Fi(t, e, i, s) {
    return s && s.setContext && i ? function (t, e, i, s) {
      const n = t._chart.getContext(),
        o = Vi(t.options),
        {
          _datasetIndex: a,
          options: {
            spanGaps: r
          }
        } = t,
        l = i.length,
        h = [];
      let c = o,
        d = e[0].start,
        u = d;
      function f(t, e, s, n) {
        const o = r ? -1 : 1;
        if (t !== e) {
          for (t += l; i[t % l].skip;) t -= o;
          for (; i[e % l].skip;) e += o;
          t % l != e % l && (h.push({
            start: t % l,
            end: e % l,
            loop: s,
            style: n
          }), c = n, d = e % l);
        }
      }
      for (const t of e) {
        d = r ? d : t.start;
        let e,
          o = i[d % l];
        for (u = d + 1; u <= t.end; u++) {
          const r = i[u % l];
          e = Vi(s.setContext(Ci(n, {
            type: "segment",
            p0: o,
            p1: r,
            p0DataIndex: (u - 1) % l,
            p1DataIndex: u % l,
            datasetIndex: a
          }))), Bi(e, c) && f(d, u - 1, t.loop, c), o = r, c = e;
        }
        d < u - 1 && f(d, u - 1, t.loop, c);
      }
      return h;
    }(t, e, i, s) : e;
  }
  function Vi(t) {
    return {
      backgroundColor: t.backgroundColor,
      borderCapStyle: t.borderCapStyle,
      borderDash: t.borderDash,
      borderDashOffset: t.borderDashOffset,
      borderJoinStyle: t.borderJoinStyle,
      borderWidth: t.borderWidth,
      borderColor: t.borderColor
    };
  }
  function Bi(t, e) {
    if (!e) return !1;
    const i = [],
      s = function (t, e) {
        return Jt(e) ? (i.includes(e) || i.push(e), i.indexOf(e)) : e;
      };
    return JSON.stringify(t, s) !== JSON.stringify(e, s);
  }
  var Wi = Object.freeze({
    __proto__: null,
    HALF_PI: E,
    INFINITY: T,
    PI: C,
    PITAU: A,
    QUARTER_PI: R,
    RAD_PER_DEG: L,
    TAU: O,
    TWO_THIRDS_PI: I,
    _addGrace: Di,
    _alignPixel: Ae,
    _alignStartEnd: ft,
    _angleBetween: Z,
    _angleDiff: K,
    _arrayUnique: lt,
    _attachContext: $e,
    _bezierCurveTo: Ve,
    _bezierInterpolation: mi,
    _boundSegment: Ri,
    _boundSegments: Ii,
    _capitalize: w,
    _computeSegments: zi,
    _createResolver: je,
    _decimalPlaces: U,
    _deprecated: function (t, e, i, s) {
      void 0 !== e && console.warn(t + ': "' + i + '" is deprecated. Please use "' + s + '" instead');
    },
    _descriptors: Ye,
    _elementsEqual: f,
    _factorize: W,
    _filterBetween: nt,
    _getParentNode: ge,
    _getStartAndCountOfVisiblePoints: pt,
    _int16Range: Q,
    _isBetween: tt,
    _isClickEvent: D,
    _isDomSupported: fe,
    _isPointInArea: Re,
    _limitValue: J,
    _longestText: Oe,
    _lookup: et,
    _lookupByKey: it,
    _measureText: Ce,
    _merger: m,
    _mergerIf: _,
    _normalizeAngle: G,
    _parseObjectDataRadialScale: ii,
    _pointInLine: gi,
    _readValueToProps: vi,
    _rlookupByKey: st,
    _scaleRangesChanged: mt,
    _setMinAndMaxByKey: j,
    _splitKey: v,
    _steppedInterpolation: pi,
    _steppedLineTo: Fe,
    _textX: gt,
    _toLeftRightCenter: ut,
    _updateBezierControlPoints: hi,
    addRoundedRectPath: He,
    almostEquals: V,
    almostWhole: H,
    callback: d,
    clearCanvas: Te,
    clipArea: Ie,
    clone: g,
    color: Qt,
    createContext: Ci,
    debounce: dt,
    defined: k,
    distanceBetweenPoints: q,
    drawPoint: Le,
    drawPointLegend: Ee,
    each: u,
    easingEffects: fi,
    finiteOrDefault: r,
    fontString: function (t, e, i) {
      return e + " " + t + "px " + i;
    },
    formatNumber: ne,
    getAngleFromPoint: X,
    getHoverColor: te,
    getMaximumSize: we,
    getRelativePosition: ve,
    getRtlAdapter: Oi,
    getStyle: be,
    isArray: n,
    isFinite: a,
    isFunction: S,
    isNullOrUndef: s,
    isNumber: N,
    isObject: o,
    isPatternOrGradient: Jt,
    listenArrayEvents: at,
    log10: z,
    merge: b,
    mergeIf: x,
    niceNum: B,
    noop: e,
    overrideTextDirection: Ai,
    readUsedSize: Pe,
    renderText: Ne,
    requestAnimFrame: ht,
    resolve: Pi,
    resolveObjectKey: M,
    restoreTextDirection: Ti,
    retinaScale: ke,
    setsEqual: P,
    sign: F,
    splineCurve: ai,
    splineCurveMonotone: ri,
    supportsEventListenerOptions: Se,
    throttled: ct,
    toDegrees: Y,
    toDimension: c,
    toFont: Si,
    toFontString: De,
    toLineHeight: _i,
    toPadding: ki,
    toPercentage: h,
    toRadians: $,
    toTRBL: Mi,
    toTRBLCorners: wi,
    uid: i,
    unclipArea: ze,
    unlistenArrayEvents: rt,
    valueOrDefault: l
  });
  function Ni(t, e, i, s) {
    const {
        controller: n,
        data: o,
        _sorted: a
      } = t,
      r = n._cachedMeta.iScale;
    if (r && e === r.axis && "r" !== e && a && o.length) {
      const t = r._reversePixels ? st : it;
      if (!s) return t(o, e, i);
      if (n._sharedOptions) {
        const s = o[0],
          n = "function" == typeof s.getRange && s.getRange(e);
        if (n) {
          const s = t(o, e, i - n),
            a = t(o, e, i + n);
          return {
            lo: s.lo,
            hi: a.hi
          };
        }
      }
    }
    return {
      lo: 0,
      hi: o.length - 1
    };
  }
  function Hi(t, e, i, s, n) {
    const o = t.getSortedVisibleDatasetMetas(),
      a = i[e];
    for (let t = 0, i = o.length; t < i; ++t) {
      const {
          index: i,
          data: r
        } = o[t],
        {
          lo: l,
          hi: h
        } = Ni(o[t], e, a, n);
      for (let t = l; t <= h; ++t) {
        const e = r[t];
        e.skip || s(e, i, t);
      }
    }
  }
  function ji(t, e, i, s, n) {
    const o = [];
    if (!n && !t.isPointInArea(e)) return o;
    return Hi(t, i, e, function (i, a, r) {
      (n || Re(i, t.chartArea, 0)) && i.inRange(e.x, e.y, s) && o.push({
        element: i,
        datasetIndex: a,
        index: r
      });
    }, !0), o;
  }
  function $i(t, e, i, s, n, o) {
    let a = [];
    const r = function (t) {
      const e = -1 !== t.indexOf("x"),
        i = -1 !== t.indexOf("y");
      return function (t, s) {
        const n = e ? Math.abs(t.x - s.x) : 0,
          o = i ? Math.abs(t.y - s.y) : 0;
        return Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2));
      };
    }(i);
    let l = Number.POSITIVE_INFINITY;
    return Hi(t, i, e, function (i, h, c) {
      const d = i.inRange(e.x, e.y, n);
      if (s && !d) return;
      const u = i.getCenterPoint(n);
      if (!(!!o || t.isPointInArea(u)) && !d) return;
      const f = r(e, u);
      f < l ? (a = [{
        element: i,
        datasetIndex: h,
        index: c
      }], l = f) : f === l && a.push({
        element: i,
        datasetIndex: h,
        index: c
      });
    }), a;
  }
  function Yi(t, e, i, s, n, o) {
    return o || t.isPointInArea(e) ? "r" !== i || s ? $i(t, e, i, s, n, o) : function (t, e, i, s) {
      let n = [];
      return Hi(t, i, e, function (t, i, o) {
        const {
            startAngle: a,
            endAngle: r
          } = t.getProps(["startAngle", "endAngle"], s),
          {
            angle: l
          } = X(t, {
            x: e.x,
            y: e.y
          });
        Z(l, a, r) && n.push({
          element: t,
          datasetIndex: i,
          index: o
        });
      }), n;
    }(t, e, i, n) : [];
  }
  function Ui(t, e, i, s, n) {
    const o = [],
      a = "x" === i ? "inXRange" : "inYRange";
    let r = !1;
    return Hi(t, i, e, (t, s, l) => {
      t[a](e[i], n) && (o.push({
        element: t,
        datasetIndex: s,
        index: l
      }), r = r || t.inRange(e.x, e.y, n));
    }), s && !r ? [] : o;
  }
  var Xi = {
    evaluateInteractionItems: Hi,
    modes: {
      index(t, e, i, s) {
        const n = ve(e, t),
          o = i.axis || "x",
          a = i.includeInvisible || !1,
          r = i.intersect ? ji(t, n, o, s, a) : Yi(t, n, o, !1, s, a),
          l = [];
        return r.length ? (t.getSortedVisibleDatasetMetas().forEach(t => {
          const e = r[0].index,
            i = t.data[e];
          i && !i.skip && l.push({
            element: i,
            datasetIndex: t.index,
            index: e
          });
        }), l) : [];
      },
      dataset(t, e, i, s) {
        const n = ve(e, t),
          o = i.axis || "xy",
          a = i.includeInvisible || !1;
        let r = i.intersect ? ji(t, n, o, s, a) : Yi(t, n, o, !1, s, a);
        if (r.length > 0) {
          const e = r[0].datasetIndex,
            i = t.getDatasetMeta(e).data;
          r = [];
          for (let t = 0; t < i.length; ++t) r.push({
            element: i[t],
            datasetIndex: e,
            index: t
          });
        }
        return r;
      },
      point: (t, e, i, s) => ji(t, ve(e, t), i.axis || "xy", s, i.includeInvisible || !1),
      nearest(t, e, i, s) {
        const n = ve(e, t),
          o = i.axis || "xy",
          a = i.includeInvisible || !1;
        return Yi(t, n, o, i.intersect, s, a);
      },
      x: (t, e, i, s) => Ui(t, ve(e, t), "x", i.intersect, s),
      y: (t, e, i, s) => Ui(t, ve(e, t), "y", i.intersect, s)
    }
  };
  const qi = ["left", "top", "right", "bottom"];
  function Ki(t, e) {
    return t.filter(t => t.pos === e);
  }
  function Gi(t, e) {
    return t.filter(t => -1 === qi.indexOf(t.pos) && t.box.axis === e);
  }
  function Zi(t, e) {
    return t.sort((t, i) => {
      const s = e ? i : t,
        n = e ? t : i;
      return s.weight === n.weight ? s.index - n.index : s.weight - n.weight;
    });
  }
  function Ji(t, e) {
    const i = function (t) {
        const e = {};
        for (const i of t) {
          const {
            stack: t,
            pos: s,
            stackWeight: n
          } = i;
          if (!t || !qi.includes(s)) continue;
          const o = e[t] || (e[t] = {
            count: 0,
            placed: 0,
            weight: 0,
            size: 0
          });
          o.count++, o.weight += n;
        }
        return e;
      }(t),
      {
        vBoxMaxWidth: s,
        hBoxMaxHeight: n
      } = e;
    let o, a, r;
    for (o = 0, a = t.length; o < a; ++o) {
      r = t[o];
      const {
          fullSize: a
        } = r.box,
        l = i[r.stack],
        h = l && r.stackWeight / l.weight;
      r.horizontal ? (r.width = h ? h * s : a && e.availableWidth, r.height = n) : (r.width = s, r.height = h ? h * n : a && e.availableHeight);
    }
    return i;
  }
  function Qi(t, e, i, s) {
    return Math.max(t[i], e[i]) + Math.max(t[s], e[s]);
  }
  function ts(t, e) {
    t.top = Math.max(t.top, e.top), t.left = Math.max(t.left, e.left), t.bottom = Math.max(t.bottom, e.bottom), t.right = Math.max(t.right, e.right);
  }
  function es(t, e, i, s) {
    const {
        pos: n,
        box: a
      } = i,
      r = t.maxPadding;
    if (!o(n)) {
      i.size && (t[n] -= i.size);
      const e = s[i.stack] || {
        size: 0,
        count: 1
      };
      e.size = Math.max(e.size, i.horizontal ? a.height : a.width), i.size = e.size / e.count, t[n] += i.size;
    }
    a.getPadding && ts(r, a.getPadding());
    const l = Math.max(0, e.outerWidth - Qi(r, t, "left", "right")),
      h = Math.max(0, e.outerHeight - Qi(r, t, "top", "bottom")),
      c = l !== t.w,
      d = h !== t.h;
    return t.w = l, t.h = h, i.horizontal ? {
      same: c,
      other: d
    } : {
      same: d,
      other: c
    };
  }
  function is(t, e) {
    const i = e.maxPadding;
    function s(t) {
      const s = {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      };
      return t.forEach(t => {
        s[t] = Math.max(e[t], i[t]);
      }), s;
    }
    return s(t ? ["left", "right"] : ["top", "bottom"]);
  }
  function ss(t, e, i, s) {
    const n = [];
    let o, a, r, l, h, c;
    for (o = 0, a = t.length, h = 0; o < a; ++o) {
      r = t[o], l = r.box, l.update(r.width || e.w, r.height || e.h, is(r.horizontal, e));
      const {
        same: a,
        other: d
      } = es(e, i, r, s);
      h |= a && n.length, c = c || d, l.fullSize || n.push(r);
    }
    return h && ss(n, e, i, s) || c;
  }
  function ns(t, e, i, s, n) {
    t.top = i, t.left = e, t.right = e + s, t.bottom = i + n, t.width = s, t.height = n;
  }
  function os(t, e, i, s) {
    const n = i.padding;
    let {
      x: o,
      y: a
    } = e;
    for (const r of t) {
      const t = r.box,
        l = s[r.stack] || {
          count: 1,
          placed: 0,
          weight: 1
        },
        h = r.stackWeight / l.weight || 1;
      if (r.horizontal) {
        const s = e.w * h,
          o = l.size || t.height;
        k(l.start) && (a = l.start), t.fullSize ? ns(t, n.left, a, i.outerWidth - n.right - n.left, o) : ns(t, e.left + l.placed, a, s, o), l.start = a, l.placed += s, a = t.bottom;
      } else {
        const s = e.h * h,
          a = l.size || t.width;
        k(l.start) && (o = l.start), t.fullSize ? ns(t, o, n.top, a, i.outerHeight - n.bottom - n.top) : ns(t, o, e.top + l.placed, a, s), l.start = o, l.placed += s, o = t.right;
      }
    }
    e.x = o, e.y = a;
  }
  var as = {
    addBox(t, e) {
      t.boxes || (t.boxes = []), e.fullSize = e.fullSize || !1, e.position = e.position || "top", e.weight = e.weight || 0, e._layers = e._layers || function () {
        return [{
          z: 0,
          draw(t) {
            e.draw(t);
          }
        }];
      }, t.boxes.push(e);
    },
    removeBox(t, e) {
      const i = t.boxes ? t.boxes.indexOf(e) : -1;
      -1 !== i && t.boxes.splice(i, 1);
    },
    configure(t, e, i) {
      e.fullSize = i.fullSize, e.position = i.position, e.weight = i.weight;
    },
    update(t, e, i, s) {
      if (!t) return;
      const n = ki(t.options.layout.padding),
        o = Math.max(e - n.width, 0),
        a = Math.max(i - n.height, 0),
        r = function (t) {
          const e = function (t) {
              const e = [];
              let i, s, n, o, a, r;
              for (i = 0, s = (t || []).length; i < s; ++i) n = t[i], ({
                position: o,
                options: {
                  stack: a,
                  stackWeight: r = 1
                }
              } = n), e.push({
                index: i,
                box: n,
                pos: o,
                horizontal: n.isHorizontal(),
                weight: n.weight,
                stack: a && o + a,
                stackWeight: r
              });
              return e;
            }(t),
            i = Zi(e.filter(t => t.box.fullSize), !0),
            s = Zi(Ki(e, "left"), !0),
            n = Zi(Ki(e, "right")),
            o = Zi(Ki(e, "top"), !0),
            a = Zi(Ki(e, "bottom")),
            r = Gi(e, "x"),
            l = Gi(e, "y");
          return {
            fullSize: i,
            leftAndTop: s.concat(o),
            rightAndBottom: n.concat(l).concat(a).concat(r),
            chartArea: Ki(e, "chartArea"),
            vertical: s.concat(n).concat(l),
            horizontal: o.concat(a).concat(r)
          };
        }(t.boxes),
        l = r.vertical,
        h = r.horizontal;
      u(t.boxes, t => {
        "function" == typeof t.beforeLayout && t.beforeLayout();
      });
      const c = l.reduce((t, e) => e.box.options && !1 === e.box.options.display ? t : t + 1, 0) || 1,
        d = Object.freeze({
          outerWidth: e,
          outerHeight: i,
          padding: n,
          availableWidth: o,
          availableHeight: a,
          vBoxMaxWidth: o / 2 / c,
          hBoxMaxHeight: a / 2
        }),
        f = Object.assign({}, n);
      ts(f, ki(s));
      const g = Object.assign({
          maxPadding: f,
          w: o,
          h: a,
          x: n.left,
          y: n.top
        }, n),
        p = Ji(l.concat(h), d);
      ss(r.fullSize, g, d, p), ss(l, g, d, p), ss(h, g, d, p) && ss(l, g, d, p), function (t) {
        const e = t.maxPadding;
        function i(i) {
          const s = Math.max(e[i] - t[i], 0);
          return t[i] += s, s;
        }
        t.y += i("top"), t.x += i("left"), i("right"), i("bottom");
      }(g), os(r.leftAndTop, g, d, p), g.x += g.w, g.y += g.h, os(r.rightAndBottom, g, d, p), t.chartArea = {
        left: g.left,
        top: g.top,
        right: g.left + g.w,
        bottom: g.top + g.h,
        height: g.h,
        width: g.w
      }, u(r.chartArea, e => {
        const i = e.box;
        Object.assign(i, t.chartArea), i.update(g.w, g.h, {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        });
      });
    }
  };
  class rs {
    acquireContext(t, e) {}
    releaseContext(t) {
      return !1;
    }
    addEventListener(t, e, i) {}
    removeEventListener(t, e, i) {}
    getDevicePixelRatio() {
      return 1;
    }
    getMaximumSize(t, e, i, s) {
      return e = Math.max(0, e || t.width), i = i || t.height, {
        width: e,
        height: Math.max(0, s ? Math.floor(e / s) : i)
      };
    }
    isAttached(t) {
      return !0;
    }
    updateConfig(t) {}
  }
  class ls extends rs {
    acquireContext(t) {
      return t && t.getContext && t.getContext("2d") || null;
    }
    updateConfig(t) {
      t.options.animation = !1;
    }
  }
  const hs = "$chartjs",
    cs = {
      touchstart: "mousedown",
      touchmove: "mousemove",
      touchend: "mouseup",
      pointerenter: "mouseenter",
      pointerdown: "mousedown",
      pointermove: "mousemove",
      pointerup: "mouseup",
      pointerleave: "mouseout",
      pointerout: "mouseout"
    },
    ds = t => null === t || "" === t;
  const us = !!Se && {
    passive: !0
  };
  function fs(t, e, i) {
    t.canvas.removeEventListener(e, i, us);
  }
  function gs(t, e) {
    for (const i of t) if (i === e || i.contains(e)) return !0;
  }
  function ps(t, e, i) {
    const s = t.canvas,
      n = new MutationObserver(t => {
        let e = !1;
        for (const i of t) e = e || gs(i.addedNodes, s), e = e && !gs(i.removedNodes, s);
        e && i();
      });
    return n.observe(document, {
      childList: !0,
      subtree: !0
    }), n;
  }
  function ms(t, e, i) {
    const s = t.canvas,
      n = new MutationObserver(t => {
        let e = !1;
        for (const i of t) e = e || gs(i.removedNodes, s), e = e && !gs(i.addedNodes, s);
        e && i();
      });
    return n.observe(document, {
      childList: !0,
      subtree: !0
    }), n;
  }
  const bs = new Map();
  let xs = 0;
  function _s() {
    const t = window.devicePixelRatio;
    t !== xs && (xs = t, bs.forEach((e, i) => {
      i.currentDevicePixelRatio !== t && e();
    }));
  }
  function ys(t, e, i) {
    const s = t.canvas,
      n = s && ge(s);
    if (!n) return;
    const o = ct((t, e) => {
        const s = n.clientWidth;
        i(t, e), s < n.clientWidth && i();
      }, window),
      a = new ResizeObserver(t => {
        const e = t[0],
          i = e.contentRect.width,
          s = e.contentRect.height;
        0 === i && 0 === s || o(i, s);
      });
    return a.observe(n), function (t, e) {
      bs.size || window.addEventListener("resize", _s), bs.set(t, e);
    }(t, o), a;
  }
  function vs(t, e, i) {
    i && i.disconnect(), "resize" === e && function (t) {
      bs.delete(t), bs.size || window.removeEventListener("resize", _s);
    }(t);
  }
  function Ms(t, e, i) {
    const s = t.canvas,
      n = ct(e => {
        null !== t.ctx && i(function (t, e) {
          const i = cs[t.type] || t.type,
            {
              x: s,
              y: n
            } = ve(t, e);
          return {
            type: i,
            chart: e,
            native: t,
            x: void 0 !== s ? s : null,
            y: void 0 !== n ? n : null
          };
        }(e, t));
      }, t);
    return function (t, e, i) {
      t.addEventListener(e, i, us);
    }(s, e, n), n;
  }
  class ws extends rs {
    acquireContext(t, e) {
      const i = t && t.getContext && t.getContext("2d");
      return i && i.canvas === t ? (function (t, e) {
        const i = t.style,
          s = t.getAttribute("height"),
          n = t.getAttribute("width");
        if (t[hs] = {
          initial: {
            height: s,
            width: n,
            style: {
              display: i.display,
              height: i.height,
              width: i.width
            }
          }
        }, i.display = i.display || "block", i.boxSizing = i.boxSizing || "border-box", ds(n)) {
          const e = Pe(t, "width");
          void 0 !== e && (t.width = e);
        }
        if (ds(s)) if ("" === t.style.height) t.height = t.width / (e || 2);else {
          const e = Pe(t, "height");
          void 0 !== e && (t.height = e);
        }
      }(t, e), i) : null;
    }
    releaseContext(t) {
      const e = t.canvas;
      if (!e[hs]) return !1;
      const i = e[hs].initial;
      ["height", "width"].forEach(t => {
        const n = i[t];
        s(n) ? e.removeAttribute(t) : e.setAttribute(t, n);
      });
      const n = i.style || {};
      return Object.keys(n).forEach(t => {
        e.style[t] = n[t];
      }), e.width = e.width, delete e[hs], !0;
    }
    addEventListener(t, e, i) {
      this.removeEventListener(t, e);
      const s = t.$proxies || (t.$proxies = {}),
        n = {
          attach: ps,
          detach: ms,
          resize: ys
        }[e] || Ms;
      s[e] = n(t, e, i);
    }
    removeEventListener(t, e) {
      const i = t.$proxies || (t.$proxies = {}),
        s = i[e];
      if (!s) return;
      (({
        attach: vs,
        detach: vs,
        resize: vs
      })[e] || fs)(t, e, s), i[e] = void 0;
    }
    getDevicePixelRatio() {
      return window.devicePixelRatio;
    }
    getMaximumSize(t, e, i, s) {
      return we(t, e, i, s);
    }
    isAttached(t) {
      const e = ge(t);
      return !(!e || !e.isConnected);
    }
  }
  function ks(t) {
    return !fe() || "undefined" != typeof OffscreenCanvas && t instanceof OffscreenCanvas ? ls : ws;
  }
  var Ss = Object.freeze({
    __proto__: null,
    BasePlatform: rs,
    BasicPlatform: ls,
    DomPlatform: ws,
    _detectPlatform: ks
  });
  const Ps = "transparent",
    Ds = {
      boolean: (t, e, i) => i > .5 ? e : t,
      color(t, e, i) {
        const s = Qt(t || Ps),
          n = s.valid && Qt(e || Ps);
        return n && n.valid ? n.mix(s, i).hexString() : e;
      },
      number: (t, e, i) => t + (e - t) * i
    };
  class Cs {
    constructor(t, e, i, s) {
      const n = e[i];
      s = Pi([t.to, s, n, t.from]);
      const o = Pi([t.from, n, s]);
      this._active = !0, this._fn = t.fn || Ds[t.type || typeof o], this._easing = fi[t.easing] || fi.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = i, this._from = o, this._to = s, this._promises = void 0;
    }
    active() {
      return this._active;
    }
    update(t, e, i) {
      if (this._active) {
        this._notify(!1);
        const s = this._target[this._prop],
          n = i - this._start,
          o = this._duration - n;
        this._start = i, this._duration = Math.floor(Math.max(o, t.duration)), this._total += n, this._loop = !!t.loop, this._to = Pi([t.to, e, s, t.from]), this._from = Pi([t.from, s, e]);
      }
    }
    cancel() {
      this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1));
    }
    tick(t) {
      const e = t - this._start,
        i = this._duration,
        s = this._prop,
        n = this._from,
        o = this._loop,
        a = this._to;
      let r;
      if (this._active = n !== a && (o || e < i), !this._active) return this._target[s] = a, void this._notify(!0);
      e < 0 ? this._target[s] = n : (r = e / i % 2, r = o && r > 1 ? 2 - r : r, r = this._easing(Math.min(1, Math.max(0, r))), this._target[s] = this._fn(n, a, r));
    }
    wait() {
      const t = this._promises || (this._promises = []);
      return new Promise((e, i) => {
        t.push({
          res: e,
          rej: i
        });
      });
    }
    _notify(t) {
      const e = t ? "res" : "rej",
        i = this._promises || [];
      for (let t = 0; t < i.length; t++) i[t][e]();
    }
  }
  class Os {
    constructor(t, e) {
      this._chart = t, this._properties = new Map(), this.configure(e);
    }
    configure(t) {
      if (!o(t)) return;
      const e = Object.keys(ue.animation),
        i = this._properties;
      Object.getOwnPropertyNames(t).forEach(s => {
        const a = t[s];
        if (!o(a)) return;
        const r = {};
        for (const t of e) r[t] = a[t];
        (n(a.properties) && a.properties || [s]).forEach(t => {
          t !== s && i.has(t) || i.set(t, r);
        });
      });
    }
    _animateOptions(t, e) {
      const i = e.options,
        s = function (t, e) {
          if (!e) return;
          let i = t.options;
          if (!i) return void (t.options = e);
          i.$shared && (t.options = i = Object.assign({}, i, {
            $shared: !1,
            $animations: {}
          }));
          return i;
        }(t, i);
      if (!s) return [];
      const n = this._createAnimations(s, i);
      return i.$shared && function (t, e) {
        const i = [],
          s = Object.keys(e);
        for (let e = 0; e < s.length; e++) {
          const n = t[s[e]];
          n && n.active() && i.push(n.wait());
        }
        return Promise.all(i);
      }(t.options.$animations, i).then(() => {
        t.options = i;
      }, () => {}), n;
    }
    _createAnimations(t, e) {
      const i = this._properties,
        s = [],
        n = t.$animations || (t.$animations = {}),
        o = Object.keys(e),
        a = Date.now();
      let r;
      for (r = o.length - 1; r >= 0; --r) {
        const l = o[r];
        if ("$" === l.charAt(0)) continue;
        if ("options" === l) {
          s.push(...this._animateOptions(t, e));
          continue;
        }
        const h = e[l];
        let c = n[l];
        const d = i.get(l);
        if (c) {
          if (d && c.active()) {
            c.update(d, h, a);
            continue;
          }
          c.cancel();
        }
        d && d.duration ? (n[l] = c = new Cs(d, t, l, h), s.push(c)) : t[l] = h;
      }
      return s;
    }
    update(t, e) {
      if (0 === this._properties.size) return void Object.assign(t, e);
      const i = this._createAnimations(t, e);
      return i.length ? (xt.add(this._chart, i), !0) : void 0;
    }
  }
  function As(t, e) {
    const i = t && t.options || {},
      s = i.reverse,
      n = void 0 === i.min ? e : 0,
      o = void 0 === i.max ? e : 0;
    return {
      start: s ? o : n,
      end: s ? n : o
    };
  }
  function Ts(t, e) {
    const i = [],
      s = t._getSortedDatasetMetas(e);
    let n, o;
    for (n = 0, o = s.length; n < o; ++n) i.push(s[n].index);
    return i;
  }
  function Ls(t, e, i) {
    let s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    const n = t.keys,
      o = "single" === s.mode;
    let r, l, h, c;
    if (null !== e) {
      for (r = 0, l = n.length; r < l; ++r) {
        if (h = +n[r], h === i) {
          if (s.all) continue;
          break;
        }
        c = t.values[h], a(c) && (o || 0 === e || F(e) === F(c)) && (e += c);
      }
      return e;
    }
  }
  function Es(t, e) {
    const i = t && t.options.stacked;
    return i || void 0 === i && void 0 !== e.stack;
  }
  function Rs(t, e, i) {
    const s = t[e] || (t[e] = {});
    return s[i] || (s[i] = {});
  }
  function Is(t, e, i, s) {
    for (const n of e.getMatchingVisibleMetas(s).reverse()) {
      const e = t[n.index];
      if (i && e > 0 || !i && e < 0) return n.index;
    }
    return null;
  }
  function zs(t, e) {
    const {
        chart: i,
        _cachedMeta: s
      } = t,
      n = i._stacks || (i._stacks = {}),
      {
        iScale: o,
        vScale: a,
        index: r
      } = s,
      l = o.axis,
      h = a.axis,
      c = function (t, e, i) {
        return `${t.id}.${e.id}.${i.stack || i.type}`;
      }(o, a, s),
      d = e.length;
    let u;
    for (let t = 0; t < d; ++t) {
      const i = e[t],
        {
          [l]: o,
          [h]: d
        } = i;
      u = (i._stacks || (i._stacks = {}))[h] = Rs(n, c, o), u[r] = d, u._top = Is(u, a, !0, s.type), u._bottom = Is(u, a, !1, s.type);
      (u._visualValues || (u._visualValues = {}))[r] = d;
    }
  }
  function Fs(t, e) {
    const i = t.scales;
    return Object.keys(i).filter(t => i[t].axis === e).shift();
  }
  function Vs(t, e) {
    const i = t.controller.index,
      s = t.vScale && t.vScale.axis;
    if (s) {
      e = e || t._parsed;
      for (const t of e) {
        const e = t._stacks;
        if (!e || void 0 === e[s] || void 0 === e[s][i]) return;
        delete e[s][i], void 0 !== e[s]._visualValues && void 0 !== e[s]._visualValues[i] && delete e[s]._visualValues[i];
      }
    }
  }
  const Bs = t => "reset" === t || "none" === t,
    Ws = (t, e) => e ? t : Object.assign({}, t);
  class Ns {
    static defaults = {};
    static datasetElementType = null;
    static dataElementType = null;
    constructor(t, e) {
      this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
    }
    initialize() {
      const t = this._cachedMeta;
      this.configure(), this.linkScales(), t._stacked = Es(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
    }
    updateIndex(t) {
      this.index !== t && Vs(this._cachedMeta), this.index = t;
    }
    linkScales() {
      const t = this.chart,
        e = this._cachedMeta,
        i = this.getDataset(),
        s = (t, e, i, s) => "x" === t ? e : "r" === t ? s : i,
        n = e.xAxisID = l(i.xAxisID, Fs(t, "x")),
        o = e.yAxisID = l(i.yAxisID, Fs(t, "y")),
        a = e.rAxisID = l(i.rAxisID, Fs(t, "r")),
        r = e.indexAxis,
        h = e.iAxisID = s(r, n, o, a),
        c = e.vAxisID = s(r, o, n, a);
      e.xScale = this.getScaleForId(n), e.yScale = this.getScaleForId(o), e.rScale = this.getScaleForId(a), e.iScale = this.getScaleForId(h), e.vScale = this.getScaleForId(c);
    }
    getDataset() {
      return this.chart.data.datasets[this.index];
    }
    getMeta() {
      return this.chart.getDatasetMeta(this.index);
    }
    getScaleForId(t) {
      return this.chart.scales[t];
    }
    _getOtherScale(t) {
      const e = this._cachedMeta;
      return t === e.iScale ? e.vScale : e.iScale;
    }
    reset() {
      this._update("reset");
    }
    _destroy() {
      const t = this._cachedMeta;
      this._data && rt(this._data, this), t._stacked && Vs(t);
    }
    _dataCheck() {
      const t = this.getDataset(),
        e = t.data || (t.data = []),
        i = this._data;
      if (o(e)) this._data = function (t) {
        const e = Object.keys(t),
          i = new Array(e.length);
        let s, n, o;
        for (s = 0, n = e.length; s < n; ++s) o = e[s], i[s] = {
          x: o,
          y: t[o]
        };
        return i;
      }(e);else if (i !== e) {
        if (i) {
          rt(i, this);
          const t = this._cachedMeta;
          Vs(t), t._parsed = [];
        }
        e && Object.isExtensible(e) && at(e, this), this._syncList = [], this._data = e;
      }
    }
    addElements() {
      const t = this._cachedMeta;
      this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType());
    }
    buildOrUpdateElements(t) {
      const e = this._cachedMeta,
        i = this.getDataset();
      let s = !1;
      this._dataCheck();
      const n = e._stacked;
      e._stacked = Es(e.vScale, e), e.stack !== i.stack && (s = !0, Vs(e), e.stack = i.stack), this._resyncElements(t), (s || n !== e._stacked) && zs(this, e._parsed);
    }
    configure() {
      const t = this.chart.config,
        e = t.datasetScopeKeys(this._type),
        i = t.getOptionScopes(this.getDataset(), e, !0);
      this.options = t.createResolver(i, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
    }
    parse(t, e) {
      const {
          _cachedMeta: i,
          _data: s
        } = this,
        {
          iScale: a,
          _stacked: r
        } = i,
        l = a.axis;
      let h,
        c,
        d,
        u = 0 === t && e === s.length || i._sorted,
        f = t > 0 && i._parsed[t - 1];
      if (!1 === this._parsing) i._parsed = s, i._sorted = !0, d = s;else {
        d = n(s[t]) ? this.parseArrayData(i, s, t, e) : o(s[t]) ? this.parseObjectData(i, s, t, e) : this.parsePrimitiveData(i, s, t, e);
        const a = () => null === c[l] || f && c[l] < f[l];
        for (h = 0; h < e; ++h) i._parsed[h + t] = c = d[h], u && (a() && (u = !1), f = c);
        i._sorted = u;
      }
      r && zs(this, d);
    }
    parsePrimitiveData(t, e, i, s) {
      const {
          iScale: n,
          vScale: o
        } = t,
        a = n.axis,
        r = o.axis,
        l = n.getLabels(),
        h = n === o,
        c = new Array(s);
      let d, u, f;
      for (d = 0, u = s; d < u; ++d) f = d + i, c[d] = {
        [a]: h || n.parse(l[f], f),
        [r]: o.parse(e[f], f)
      };
      return c;
    }
    parseArrayData(t, e, i, s) {
      const {
          xScale: n,
          yScale: o
        } = t,
        a = new Array(s);
      let r, l, h, c;
      for (r = 0, l = s; r < l; ++r) h = r + i, c = e[h], a[r] = {
        x: n.parse(c[0], h),
        y: o.parse(c[1], h)
      };
      return a;
    }
    parseObjectData(t, e, i, s) {
      const {
          xScale: n,
          yScale: o
        } = t,
        {
          xAxisKey: a = "x",
          yAxisKey: r = "y"
        } = this._parsing,
        l = new Array(s);
      let h, c, d, u;
      for (h = 0, c = s; h < c; ++h) d = h + i, u = e[d], l[h] = {
        x: n.parse(M(u, a), d),
        y: o.parse(M(u, r), d)
      };
      return l;
    }
    getParsed(t) {
      return this._cachedMeta._parsed[t];
    }
    getDataElement(t) {
      return this._cachedMeta.data[t];
    }
    applyStack(t, e, i) {
      const s = this.chart,
        n = this._cachedMeta,
        o = e[t.axis];
      return Ls({
        keys: Ts(s, !0),
        values: e._stacks[t.axis]._visualValues
      }, o, n.index, {
        mode: i
      });
    }
    updateRangeFromParsed(t, e, i, s) {
      const n = i[e.axis];
      let o = null === n ? NaN : n;
      const a = s && i._stacks[e.axis];
      s && a && (s.values = a, o = Ls(s, n, this._cachedMeta.index)), t.min = Math.min(t.min, o), t.max = Math.max(t.max, o);
    }
    getMinMax(t, e) {
      const i = this._cachedMeta,
        s = i._parsed,
        n = i._sorted && t === i.iScale,
        o = s.length,
        r = this._getOtherScale(t),
        l = ((t, e, i) => t && !e.hidden && e._stacked && {
          keys: Ts(i, !0),
          values: null
        })(e, i, this.chart),
        h = {
          min: Number.POSITIVE_INFINITY,
          max: Number.NEGATIVE_INFINITY
        },
        {
          min: c,
          max: d
        } = function (t) {
          const {
            min: e,
            max: i,
            minDefined: s,
            maxDefined: n
          } = t.getUserBounds();
          return {
            min: s ? e : Number.NEGATIVE_INFINITY,
            max: n ? i : Number.POSITIVE_INFINITY
          };
        }(r);
      let u, f;
      function g() {
        f = s[u];
        const e = f[r.axis];
        return !a(f[t.axis]) || c > e || d < e;
      }
      for (u = 0; u < o && (g() || (this.updateRangeFromParsed(h, t, f, l), !n)); ++u);
      if (n) for (u = o - 1; u >= 0; --u) if (!g()) {
        this.updateRangeFromParsed(h, t, f, l);
        break;
      }
      return h;
    }
    getAllParsedValues(t) {
      const e = this._cachedMeta._parsed,
        i = [];
      let s, n, o;
      for (s = 0, n = e.length; s < n; ++s) o = e[s][t.axis], a(o) && i.push(o);
      return i;
    }
    getMaxOverflow() {
      return !1;
    }
    getLabelAndValue(t) {
      const e = this._cachedMeta,
        i = e.iScale,
        s = e.vScale,
        n = this.getParsed(t);
      return {
        label: i ? "" + i.getLabelForValue(n[i.axis]) : "",
        value: s ? "" + s.getLabelForValue(n[s.axis]) : ""
      };
    }
    _update(t) {
      const e = this._cachedMeta;
      this.update(t || "default"), e._clip = function (t) {
        let e, i, s, n;
        return o(t) ? (e = t.top, i = t.right, s = t.bottom, n = t.left) : e = i = s = n = t, {
          top: e,
          right: i,
          bottom: s,
          left: n,
          disabled: !1 === t
        };
      }(l(this.options.clip, function (t, e, i) {
        if (!1 === i) return !1;
        const s = As(t, i),
          n = As(e, i);
        return {
          top: n.end,
          right: s.end,
          bottom: n.start,
          left: s.start
        };
      }(e.xScale, e.yScale, this.getMaxOverflow())));
    }
    update(t) {}
    draw() {
      const t = this._ctx,
        e = this.chart,
        i = this._cachedMeta,
        s = i.data || [],
        n = e.chartArea,
        o = [],
        a = this._drawStart || 0,
        r = this._drawCount || s.length - a,
        l = this.options.drawActiveElementsOnTop;
      let h;
      for (i.dataset && i.dataset.draw(t, n, a, r), h = a; h < a + r; ++h) {
        const e = s[h];
        e.hidden || (e.active && l ? o.push(e) : e.draw(t, n));
      }
      for (h = 0; h < o.length; ++h) o[h].draw(t, n);
    }
    getStyle(t, e) {
      const i = e ? "active" : "default";
      return void 0 === t && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(i) : this.resolveDataElementOptions(t || 0, i);
    }
    getContext(t, e, i) {
      const s = this.getDataset();
      let n;
      if (t >= 0 && t < this._cachedMeta.data.length) {
        const e = this._cachedMeta.data[t];
        n = e.$context || (e.$context = function (t, e, i) {
          return Ci(t, {
            active: !1,
            dataIndex: e,
            parsed: void 0,
            raw: void 0,
            element: i,
            index: e,
            mode: "default",
            type: "data"
          });
        }(this.getContext(), t, e)), n.parsed = this.getParsed(t), n.raw = s.data[t], n.index = n.dataIndex = t;
      } else n = this.$context || (this.$context = function (t, e) {
        return Ci(t, {
          active: !1,
          dataset: void 0,
          datasetIndex: e,
          index: e,
          mode: "default",
          type: "dataset"
        });
      }(this.chart.getContext(), this.index)), n.dataset = s, n.index = n.datasetIndex = this.index;
      return n.active = !!e, n.mode = i, n;
    }
    resolveDatasetElementOptions(t) {
      return this._resolveElementOptions(this.datasetElementType.id, t);
    }
    resolveDataElementOptions(t, e) {
      return this._resolveElementOptions(this.dataElementType.id, e, t);
    }
    _resolveElementOptions(t) {
      let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "default";
      let i = arguments.length > 2 ? arguments[2] : undefined;
      const s = "active" === e,
        n = this._cachedDataOpts,
        o = t + "-" + e,
        a = n[o],
        r = this.enableOptionSharing && k(i);
      if (a) return Ws(a, r);
      const l = this.chart.config,
        h = l.datasetElementScopeKeys(this._type, t),
        c = s ? [`${t}Hover`, "hover", t, ""] : [t, ""],
        d = l.getOptionScopes(this.getDataset(), h),
        u = Object.keys(ue.elements[t]),
        f = l.resolveNamedOptions(d, u, () => this.getContext(i, s, e), c);
      return f.$shared && (f.$shared = r, n[o] = Object.freeze(Ws(f, r))), f;
    }
    _resolveAnimations(t, e, i) {
      const s = this.chart,
        n = this._cachedDataOpts,
        o = `animation-${e}`,
        a = n[o];
      if (a) return a;
      let r;
      if (!1 !== s.options.animation) {
        const s = this.chart.config,
          n = s.datasetAnimationScopeKeys(this._type, e),
          o = s.getOptionScopes(this.getDataset(), n);
        r = s.createResolver(o, this.getContext(t, i, e));
      }
      const l = new Os(s, r && r.animations);
      return r && r._cacheable && (n[o] = Object.freeze(l)), l;
    }
    getSharedOptions(t) {
      if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
    }
    includeOptions(t, e) {
      return !e || Bs(t) || this.chart._animationsDisabled;
    }
    _getSharedOptions(t, e) {
      const i = this.resolveDataElementOptions(t, e),
        s = this._sharedOptions,
        n = this.getSharedOptions(i),
        o = this.includeOptions(e, n) || n !== s;
      return this.updateSharedOptions(n, e, i), {
        sharedOptions: n,
        includeOptions: o
      };
    }
    updateElement(t, e, i, s) {
      Bs(s) ? Object.assign(t, i) : this._resolveAnimations(e, s).update(t, i);
    }
    updateSharedOptions(t, e, i) {
      t && !Bs(e) && this._resolveAnimations(void 0, e).update(t, i);
    }
    _setStyle(t, e, i, s) {
      t.active = s;
      const n = this.getStyle(e, s);
      this._resolveAnimations(e, i, s).update(t, {
        options: !s && this.getSharedOptions(n) || n
      });
    }
    removeHoverStyle(t, e, i) {
      this._setStyle(t, i, "active", !1);
    }
    setHoverStyle(t, e, i) {
      this._setStyle(t, i, "active", !0);
    }
    _removeDatasetHoverStyle() {
      const t = this._cachedMeta.dataset;
      t && this._setStyle(t, void 0, "active", !1);
    }
    _setDatasetHoverStyle() {
      const t = this._cachedMeta.dataset;
      t && this._setStyle(t, void 0, "active", !0);
    }
    _resyncElements(t) {
      const e = this._data,
        i = this._cachedMeta.data;
      for (const [t, e, i] of this._syncList) this[t](e, i);
      this._syncList = [];
      const s = i.length,
        n = e.length,
        o = Math.min(n, s);
      o && this.parse(0, o), n > s ? this._insertElements(s, n - s, t) : n < s && this._removeElements(n, s - n);
    }
    _insertElements(t, e) {
      let i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
      const s = this._cachedMeta,
        n = s.data,
        o = t + e;
      let a;
      const r = t => {
        for (t.length += e, a = t.length - 1; a >= o; a--) t[a] = t[a - e];
      };
      for (r(n), a = t; a < o; ++a) n[a] = new this.dataElementType();
      this._parsing && r(s._parsed), this.parse(t, e), i && this.updateElements(n, t, e, "reset");
    }
    updateElements(t, e, i, s) {}
    _removeElements(t, e) {
      const i = this._cachedMeta;
      if (this._parsing) {
        const s = i._parsed.splice(t, e);
        i._stacked && Vs(i, s);
      }
      i.data.splice(t, e);
    }
    _sync(t) {
      if (this._parsing) this._syncList.push(t);else {
        const [e, i, s] = t;
        this[e](i, s);
      }
      this.chart._dataChanges.push([this.index, ...t]);
    }
    _onDataPush() {
      const t = arguments.length;
      this._sync(["_insertElements", this.getDataset().data.length - t, t]);
    }
    _onDataPop() {
      this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
    }
    _onDataShift() {
      this._sync(["_removeElements", 0, 1]);
    }
    _onDataSplice(t, e) {
      e && this._sync(["_removeElements", t, e]);
      const i = arguments.length - 2;
      i && this._sync(["_insertElements", t, i]);
    }
    _onDataUnshift() {
      this._sync(["_insertElements", 0, arguments.length]);
    }
  }
  class Hs {
    static defaults = {};
    static defaultRoutes = void 0;
    x;
    y;
    active = !1;
    options;
    $animations;
    tooltipPosition(t) {
      const {
        x: e,
        y: i
      } = this.getProps(["x", "y"], t);
      return {
        x: e,
        y: i
      };
    }
    hasValue() {
      return N(this.x) && N(this.y);
    }
    getProps(t, e) {
      const i = this.$animations;
      if (!e || !i) return this;
      const s = {};
      return t.forEach(t => {
        s[t] = i[t] && i[t].active() ? i[t]._to : this[t];
      }), s;
    }
  }
  function js(t, e) {
    const i = t.options.ticks,
      n = function (t) {
        const e = t.options.offset,
          i = t._tickSize(),
          s = t._length / i + (e ? 0 : 1),
          n = t._maxLength / i;
        return Math.floor(Math.min(s, n));
      }(t),
      o = Math.min(i.maxTicksLimit || n, n),
      a = i.major.enabled ? function (t) {
        const e = [];
        let i, s;
        for (i = 0, s = t.length; i < s; i++) t[i].major && e.push(i);
        return e;
      }(e) : [],
      r = a.length,
      l = a[0],
      h = a[r - 1],
      c = [];
    if (r > o) return function (t, e, i, s) {
      let n,
        o = 0,
        a = i[0];
      for (s = Math.ceil(s), n = 0; n < t.length; n++) n === a && (e.push(t[n]), o++, a = i[o * s]);
    }(e, c, a, r / o), c;
    const d = function (t, e, i) {
      const s = function (t) {
          const e = t.length;
          let i, s;
          if (e < 2) return !1;
          for (s = t[0], i = 1; i < e; ++i) if (t[i] - t[i - 1] !== s) return !1;
          return s;
        }(t),
        n = e.length / i;
      if (!s) return Math.max(n, 1);
      const o = W(s);
      for (let t = 0, e = o.length - 1; t < e; t++) {
        const e = o[t];
        if (e > n) return e;
      }
      return Math.max(n, 1);
    }(a, e, o);
    if (r > 0) {
      let t, i;
      const n = r > 1 ? Math.round((h - l) / (r - 1)) : null;
      for ($s(e, c, d, s(n) ? 0 : l - n, l), t = 0, i = r - 1; t < i; t++) $s(e, c, d, a[t], a[t + 1]);
      return $s(e, c, d, h, s(n) ? e.length : h + n), c;
    }
    return $s(e, c, d), c;
  }
  function $s(t, e, i, s, n) {
    const o = l(s, 0),
      a = Math.min(l(n, t.length), t.length);
    let r,
      h,
      c,
      d = 0;
    for (i = Math.ceil(i), n && (r = n - s, i = r / Math.floor(r / i)), c = o; c < 0;) d++, c = Math.round(o + d * i);
    for (h = Math.max(o, 0); h < a; h++) h === c && (e.push(t[h]), d++, c = Math.round(o + d * i));
  }
  const Ys = (t, e, i) => "top" === e || "left" === e ? t[e] + i : t[e] - i,
    Us = (t, e) => Math.min(e || t, t);
  function Xs(t, e) {
    const i = [],
      s = t.length / e,
      n = t.length;
    let o = 0;
    for (; o < n; o += s) i.push(t[Math.floor(o)]);
    return i;
  }
  function qs(t, e, i) {
    const s = t.ticks.length,
      n = Math.min(e, s - 1),
      o = t._startPixel,
      a = t._endPixel,
      r = 1e-6;
    let l,
      h = t.getPixelForTick(n);
    if (!(i && (l = 1 === s ? Math.max(h - o, a - h) : 0 === e ? (t.getPixelForTick(1) - h) / 2 : (h - t.getPixelForTick(n - 1)) / 2, h += n < e ? l : -l, h < o - r || h > a + r))) return h;
  }
  function Ks(t) {
    return t.drawTicks ? t.tickLength : 0;
  }
  function Gs(t, e) {
    if (!t.display) return 0;
    const i = Si(t.font, e),
      s = ki(t.padding);
    return (n(t.text) ? t.text.length : 1) * i.lineHeight + s.height;
  }
  function Zs(t, e, i) {
    let s = ut(t);
    return (i && "right" !== e || !i && "right" === e) && (s = (t => "left" === t ? "right" : "right" === t ? "left" : t)(s)), s;
  }
  class Js extends Hs {
    constructor(t) {
      super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0;
    }
    init(t) {
      this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax);
    }
    parse(t, e) {
      return t;
    }
    getUserBounds() {
      let {
        _userMin: t,
        _userMax: e,
        _suggestedMin: i,
        _suggestedMax: s
      } = this;
      return t = r(t, Number.POSITIVE_INFINITY), e = r(e, Number.NEGATIVE_INFINITY), i = r(i, Number.POSITIVE_INFINITY), s = r(s, Number.NEGATIVE_INFINITY), {
        min: r(t, i),
        max: r(e, s),
        minDefined: a(t),
        maxDefined: a(e)
      };
    }
    getMinMax(t) {
      let e,
        {
          min: i,
          max: s,
          minDefined: n,
          maxDefined: o
        } = this.getUserBounds();
      if (n && o) return {
        min: i,
        max: s
      };
      const a = this.getMatchingVisibleMetas();
      for (let r = 0, l = a.length; r < l; ++r) e = a[r].controller.getMinMax(this, t), n || (i = Math.min(i, e.min)), o || (s = Math.max(s, e.max));
      return i = o && i > s ? s : i, s = n && i > s ? i : s, {
        min: r(i, r(s, i)),
        max: r(s, r(i, s))
      };
    }
    getPadding() {
      return {
        left: this.paddingLeft || 0,
        top: this.paddingTop || 0,
        right: this.paddingRight || 0,
        bottom: this.paddingBottom || 0
      };
    }
    getTicks() {
      return this.ticks;
    }
    getLabels() {
      const t = this.chart.data;
      return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
    }
    getLabelItems() {
      let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.chart.chartArea;
      return this._labelItems || (this._labelItems = this._computeLabelItems(t));
    }
    beforeLayout() {
      this._cache = {}, this._dataLimitsCached = !1;
    }
    beforeUpdate() {
      d(this.options.beforeUpdate, [this]);
    }
    update(t, e, i) {
      const {
          beginAtZero: s,
          grace: n,
          ticks: o
        } = this.options,
        a = o.sampleSize;
      this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = i = Object.assign({
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }, i), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + i.left + i.right : this.height + i.top + i.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = Di(this, n, s), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
      const r = a < this.ticks.length;
      this._convertTicksToLabels(r ? Xs(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), o.display && (o.autoSkip || "auto" === o.source) && (this.ticks = js(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), r && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
    }
    configure() {
      let t,
        e,
        i = this.options.reverse;
      this.isHorizontal() ? (t = this.left, e = this.right) : (t = this.top, e = this.bottom, i = !i), this._startPixel = t, this._endPixel = e, this._reversePixels = i, this._length = e - t, this._alignToPixels = this.options.alignToPixels;
    }
    afterUpdate() {
      d(this.options.afterUpdate, [this]);
    }
    beforeSetDimensions() {
      d(this.options.beforeSetDimensions, [this]);
    }
    setDimensions() {
      this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
    }
    afterSetDimensions() {
      d(this.options.afterSetDimensions, [this]);
    }
    _callHooks(t) {
      this.chart.notifyPlugins(t, this.getContext()), d(this.options[t], [this]);
    }
    beforeDataLimits() {
      this._callHooks("beforeDataLimits");
    }
    determineDataLimits() {}
    afterDataLimits() {
      this._callHooks("afterDataLimits");
    }
    beforeBuildTicks() {
      this._callHooks("beforeBuildTicks");
    }
    buildTicks() {
      return [];
    }
    afterBuildTicks() {
      this._callHooks("afterBuildTicks");
    }
    beforeTickToLabelConversion() {
      d(this.options.beforeTickToLabelConversion, [this]);
    }
    generateTickLabels(t) {
      const e = this.options.ticks;
      let i, s, n;
      for (i = 0, s = t.length; i < s; i++) n = t[i], n.label = d(e.callback, [n.value, i, t], this);
    }
    afterTickToLabelConversion() {
      d(this.options.afterTickToLabelConversion, [this]);
    }
    beforeCalculateLabelRotation() {
      d(this.options.beforeCalculateLabelRotation, [this]);
    }
    calculateLabelRotation() {
      const t = this.options,
        e = t.ticks,
        i = Us(this.ticks.length, t.ticks.maxTicksLimit),
        s = e.minRotation || 0,
        n = e.maxRotation;
      let o,
        a,
        r,
        l = s;
      if (!this._isVisible() || !e.display || s >= n || i <= 1 || !this.isHorizontal()) return void (this.labelRotation = s);
      const h = this._getLabelSizes(),
        c = h.widest.width,
        d = h.highest.height,
        u = J(this.chart.width - c, 0, this.maxWidth);
      o = t.offset ? this.maxWidth / i : u / (i - 1), c + 6 > o && (o = u / (i - (t.offset ? .5 : 1)), a = this.maxHeight - Ks(t.grid) - e.padding - Gs(t.title, this.chart.options.font), r = Math.sqrt(c * c + d * d), l = Y(Math.min(Math.asin(J((h.highest.height + 6) / o, -1, 1)), Math.asin(J(a / r, -1, 1)) - Math.asin(J(d / r, -1, 1)))), l = Math.max(s, Math.min(n, l))), this.labelRotation = l;
    }
    afterCalculateLabelRotation() {
      d(this.options.afterCalculateLabelRotation, [this]);
    }
    afterAutoSkip() {}
    beforeFit() {
      d(this.options.beforeFit, [this]);
    }
    fit() {
      const t = {
          width: 0,
          height: 0
        },
        {
          chart: e,
          options: {
            ticks: i,
            title: s,
            grid: n
          }
        } = this,
        o = this._isVisible(),
        a = this.isHorizontal();
      if (o) {
        const o = Gs(s, e.options.font);
        if (a ? (t.width = this.maxWidth, t.height = Ks(n) + o) : (t.height = this.maxHeight, t.width = Ks(n) + o), i.display && this.ticks.length) {
          const {
              first: e,
              last: s,
              widest: n,
              highest: o
            } = this._getLabelSizes(),
            r = 2 * i.padding,
            l = $(this.labelRotation),
            h = Math.cos(l),
            c = Math.sin(l);
          if (a) {
            const e = i.mirror ? 0 : c * n.width + h * o.height;
            t.height = Math.min(this.maxHeight, t.height + e + r);
          } else {
            const e = i.mirror ? 0 : h * n.width + c * o.height;
            t.width = Math.min(this.maxWidth, t.width + e + r);
          }
          this._calculatePadding(e, s, c, h);
        }
      }
      this._handleMargins(), a ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom);
    }
    _calculatePadding(t, e, i, s) {
      const {
          ticks: {
            align: n,
            padding: o
          },
          position: a
        } = this.options,
        r = 0 !== this.labelRotation,
        l = "top" !== a && "x" === this.axis;
      if (this.isHorizontal()) {
        const a = this.getPixelForTick(0) - this.left,
          h = this.right - this.getPixelForTick(this.ticks.length - 1);
        let c = 0,
          d = 0;
        r ? l ? (c = s * t.width, d = i * e.height) : (c = i * t.height, d = s * e.width) : "start" === n ? d = e.width : "end" === n ? c = t.width : "inner" !== n && (c = t.width / 2, d = e.width / 2), this.paddingLeft = Math.max((c - a + o) * this.width / (this.width - a), 0), this.paddingRight = Math.max((d - h + o) * this.width / (this.width - h), 0);
      } else {
        let i = e.height / 2,
          s = t.height / 2;
        "start" === n ? (i = 0, s = t.height) : "end" === n && (i = e.height, s = 0), this.paddingTop = i + o, this.paddingBottom = s + o;
      }
    }
    _handleMargins() {
      this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
    }
    afterFit() {
      d(this.options.afterFit, [this]);
    }
    isHorizontal() {
      const {
        axis: t,
        position: e
      } = this.options;
      return "top" === e || "bottom" === e || "x" === t;
    }
    isFullSize() {
      return this.options.fullSize;
    }
    _convertTicksToLabels(t) {
      let e, i;
      for (this.beforeTickToLabelConversion(), this.generateTickLabels(t), e = 0, i = t.length; e < i; e++) s(t[e].label) && (t.splice(e, 1), i--, e--);
      this.afterTickToLabelConversion();
    }
    _getLabelSizes() {
      let t = this._labelSizes;
      if (!t) {
        const e = this.options.ticks.sampleSize;
        let i = this.ticks;
        e < i.length && (i = Xs(i, e)), this._labelSizes = t = this._computeLabelSizes(i, i.length, this.options.ticks.maxTicksLimit);
      }
      return t;
    }
    _computeLabelSizes(t, e, i) {
      const {
          ctx: o,
          _longestTextCache: a
        } = this,
        r = [],
        l = [],
        h = Math.floor(e / Us(e, i));
      let c,
        d,
        f,
        g,
        p,
        m,
        b,
        x,
        _,
        y,
        v,
        M = 0,
        w = 0;
      for (c = 0; c < e; c += h) {
        if (g = t[c].label, p = this._resolveTickFontOptions(c), o.font = m = p.string, b = a[m] = a[m] || {
          data: {},
          gc: []
        }, x = p.lineHeight, _ = y = 0, s(g) || n(g)) {
          if (n(g)) for (d = 0, f = g.length; d < f; ++d) v = g[d], s(v) || n(v) || (_ = Ce(o, b.data, b.gc, _, v), y += x);
        } else _ = Ce(o, b.data, b.gc, _, g), y = x;
        r.push(_), l.push(y), M = Math.max(_, M), w = Math.max(y, w);
      }
      !function (t, e) {
        u(t, t => {
          const i = t.gc,
            s = i.length / 2;
          let n;
          if (s > e) {
            for (n = 0; n < s; ++n) delete t.data[i[n]];
            i.splice(0, s);
          }
        });
      }(a, e);
      const k = r.indexOf(M),
        S = l.indexOf(w),
        P = t => ({
          width: r[t] || 0,
          height: l[t] || 0
        });
      return {
        first: P(0),
        last: P(e - 1),
        widest: P(k),
        highest: P(S),
        widths: r,
        heights: l
      };
    }
    getLabelForValue(t) {
      return t;
    }
    getPixelForValue(t, e) {
      return NaN;
    }
    getValueForPixel(t) {}
    getPixelForTick(t) {
      const e = this.ticks;
      return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
    }
    getPixelForDecimal(t) {
      this._reversePixels && (t = 1 - t);
      const e = this._startPixel + t * this._length;
      return Q(this._alignToPixels ? Ae(this.chart, e, 0) : e);
    }
    getDecimalForPixel(t) {
      const e = (t - this._startPixel) / this._length;
      return this._reversePixels ? 1 - e : e;
    }
    getBasePixel() {
      return this.getPixelForValue(this.getBaseValue());
    }
    getBaseValue() {
      const {
        min: t,
        max: e
      } = this;
      return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
    }
    getContext(t) {
      const e = this.ticks || [];
      if (t >= 0 && t < e.length) {
        const i = e[t];
        return i.$context || (i.$context = function (t, e, i) {
          return Ci(t, {
            tick: i,
            index: e,
            type: "tick"
          });
        }(this.getContext(), t, i));
      }
      return this.$context || (this.$context = Ci(this.chart.getContext(), {
        scale: this,
        type: "scale"
      }));
    }
    _tickSize() {
      const t = this.options.ticks,
        e = $(this.labelRotation),
        i = Math.abs(Math.cos(e)),
        s = Math.abs(Math.sin(e)),
        n = this._getLabelSizes(),
        o = t.autoSkipPadding || 0,
        a = n ? n.widest.width + o : 0,
        r = n ? n.highest.height + o : 0;
      return this.isHorizontal() ? r * i > a * s ? a / i : r / s : r * s < a * i ? r / i : a / s;
    }
    _isVisible() {
      const t = this.options.display;
      return "auto" !== t ? !!t : this.getMatchingVisibleMetas().length > 0;
    }
    _computeGridLineItems(t) {
      const e = this.axis,
        i = this.chart,
        s = this.options,
        {
          grid: n,
          position: a,
          border: r
        } = s,
        h = n.offset,
        c = this.isHorizontal(),
        d = this.ticks.length + (h ? 1 : 0),
        u = Ks(n),
        f = [],
        g = r.setContext(this.getContext()),
        p = g.display ? g.width : 0,
        m = p / 2,
        b = function (t) {
          return Ae(i, t, p);
        };
      let x, _, y, v, M, w, k, S, P, D, C, O;
      if ("top" === a) x = b(this.bottom), w = this.bottom - u, S = x - m, D = b(t.top) + m, O = t.bottom;else if ("bottom" === a) x = b(this.top), D = t.top, O = b(t.bottom) - m, w = x + m, S = this.top + u;else if ("left" === a) x = b(this.right), M = this.right - u, k = x - m, P = b(t.left) + m, C = t.right;else if ("right" === a) x = b(this.left), P = t.left, C = b(t.right) - m, M = x + m, k = this.left + u;else if ("x" === e) {
        if ("center" === a) x = b((t.top + t.bottom) / 2 + .5);else if (o(a)) {
          const t = Object.keys(a)[0],
            e = a[t];
          x = b(this.chart.scales[t].getPixelForValue(e));
        }
        D = t.top, O = t.bottom, w = x + m, S = w + u;
      } else if ("y" === e) {
        if ("center" === a) x = b((t.left + t.right) / 2);else if (o(a)) {
          const t = Object.keys(a)[0],
            e = a[t];
          x = b(this.chart.scales[t].getPixelForValue(e));
        }
        M = x - m, k = M - u, P = t.left, C = t.right;
      }
      const A = l(s.ticks.maxTicksLimit, d),
        T = Math.max(1, Math.ceil(d / A));
      for (_ = 0; _ < d; _ += T) {
        const t = this.getContext(_),
          e = n.setContext(t),
          s = r.setContext(t),
          o = e.lineWidth,
          a = e.color,
          l = s.dash || [],
          d = s.dashOffset,
          u = e.tickWidth,
          g = e.tickColor,
          p = e.tickBorderDash || [],
          m = e.tickBorderDashOffset;
        y = qs(this, _, h), void 0 !== y && (v = Ae(i, y, o), c ? M = k = P = C = v : w = S = D = O = v, f.push({
          tx1: M,
          ty1: w,
          tx2: k,
          ty2: S,
          x1: P,
          y1: D,
          x2: C,
          y2: O,
          width: o,
          color: a,
          borderDash: l,
          borderDashOffset: d,
          tickWidth: u,
          tickColor: g,
          tickBorderDash: p,
          tickBorderDashOffset: m
        }));
      }
      return this._ticksLength = d, this._borderValue = x, f;
    }
    _computeLabelItems(t) {
      const e = this.axis,
        i = this.options,
        {
          position: s,
          ticks: a
        } = i,
        r = this.isHorizontal(),
        l = this.ticks,
        {
          align: h,
          crossAlign: c,
          padding: d,
          mirror: u
        } = a,
        f = Ks(i.grid),
        g = f + d,
        p = u ? -d : g,
        m = -$(this.labelRotation),
        b = [];
      let x,
        _,
        y,
        v,
        M,
        w,
        k,
        S,
        P,
        D,
        C,
        O,
        A = "middle";
      if ("top" === s) w = this.bottom - p, k = this._getXAxisLabelAlignment();else if ("bottom" === s) w = this.top + p, k = this._getXAxisLabelAlignment();else if ("left" === s) {
        const t = this._getYAxisLabelAlignment(f);
        k = t.textAlign, M = t.x;
      } else if ("right" === s) {
        const t = this._getYAxisLabelAlignment(f);
        k = t.textAlign, M = t.x;
      } else if ("x" === e) {
        if ("center" === s) w = (t.top + t.bottom) / 2 + g;else if (o(s)) {
          const t = Object.keys(s)[0],
            e = s[t];
          w = this.chart.scales[t].getPixelForValue(e) + g;
        }
        k = this._getXAxisLabelAlignment();
      } else if ("y" === e) {
        if ("center" === s) M = (t.left + t.right) / 2 - g;else if (o(s)) {
          const t = Object.keys(s)[0],
            e = s[t];
          M = this.chart.scales[t].getPixelForValue(e);
        }
        k = this._getYAxisLabelAlignment(f).textAlign;
      }
      "y" === e && ("start" === h ? A = "top" : "end" === h && (A = "bottom"));
      const T = this._getLabelSizes();
      for (x = 0, _ = l.length; x < _; ++x) {
        y = l[x], v = y.label;
        const t = a.setContext(this.getContext(x));
        S = this.getPixelForTick(x) + a.labelOffset, P = this._resolveTickFontOptions(x), D = P.lineHeight, C = n(v) ? v.length : 1;
        const e = C / 2,
          i = t.color,
          o = t.textStrokeColor,
          h = t.textStrokeWidth;
        let d,
          f = k;
        if (r ? (M = S, "inner" === k && (f = x === _ - 1 ? this.options.reverse ? "left" : "right" : 0 === x ? this.options.reverse ? "right" : "left" : "center"), O = "top" === s ? "near" === c || 0 !== m ? -C * D + D / 2 : "center" === c ? -T.highest.height / 2 - e * D + D : -T.highest.height + D / 2 : "near" === c || 0 !== m ? D / 2 : "center" === c ? T.highest.height / 2 - e * D : T.highest.height - C * D, u && (O *= -1), 0 === m || t.showLabelBackdrop || (M += D / 2 * Math.sin(m))) : (w = S, O = (1 - C) * D / 2), t.showLabelBackdrop) {
          const e = ki(t.backdropPadding),
            i = T.heights[x],
            s = T.widths[x];
          let n = O - e.top,
            o = 0 - e.left;
          switch (A) {
            case "middle":
              n -= i / 2;
              break;
            case "bottom":
              n -= i;
          }
          switch (k) {
            case "center":
              o -= s / 2;
              break;
            case "right":
              o -= s;
          }
          d = {
            left: o,
            top: n,
            width: s + e.width,
            height: i + e.height,
            color: t.backdropColor
          };
        }
        b.push({
          label: v,
          font: P,
          textOffset: O,
          options: {
            rotation: m,
            color: i,
            strokeColor: o,
            strokeWidth: h,
            textAlign: f,
            textBaseline: A,
            translation: [M, w],
            backdrop: d
          }
        });
      }
      return b;
    }
    _getXAxisLabelAlignment() {
      const {
        position: t,
        ticks: e
      } = this.options;
      if (-$(this.labelRotation)) return "top" === t ? "left" : "right";
      let i = "center";
      return "start" === e.align ? i = "left" : "end" === e.align ? i = "right" : "inner" === e.align && (i = "inner"), i;
    }
    _getYAxisLabelAlignment(t) {
      const {
          position: e,
          ticks: {
            crossAlign: i,
            mirror: s,
            padding: n
          }
        } = this.options,
        o = t + n,
        a = this._getLabelSizes().widest.width;
      let r, l;
      return "left" === e ? s ? (l = this.right + n, "near" === i ? r = "left" : "center" === i ? (r = "center", l += a / 2) : (r = "right", l += a)) : (l = this.right - o, "near" === i ? r = "right" : "center" === i ? (r = "center", l -= a / 2) : (r = "left", l = this.left)) : "right" === e ? s ? (l = this.left + n, "near" === i ? r = "right" : "center" === i ? (r = "center", l -= a / 2) : (r = "left", l -= a)) : (l = this.left + o, "near" === i ? r = "left" : "center" === i ? (r = "center", l += a / 2) : (r = "right", l = this.right)) : r = "right", {
        textAlign: r,
        x: l
      };
    }
    _computeLabelArea() {
      if (this.options.ticks.mirror) return;
      const t = this.chart,
        e = this.options.position;
      return "left" === e || "right" === e ? {
        top: 0,
        left: this.left,
        bottom: t.height,
        right: this.right
      } : "top" === e || "bottom" === e ? {
        top: this.top,
        left: 0,
        bottom: this.bottom,
        right: t.width
      } : void 0;
    }
    drawBackground() {
      const {
        ctx: t,
        options: {
          backgroundColor: e
        },
        left: i,
        top: s,
        width: n,
        height: o
      } = this;
      e && (t.save(), t.fillStyle = e, t.fillRect(i, s, n, o), t.restore());
    }
    getLineWidthForValue(t) {
      const e = this.options.grid;
      if (!this._isVisible() || !e.display) return 0;
      const i = this.ticks.findIndex(e => e.value === t);
      if (i >= 0) {
        return e.setContext(this.getContext(i)).lineWidth;
      }
      return 0;
    }
    drawGrid(t) {
      const e = this.options.grid,
        i = this.ctx,
        s = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
      let n, o;
      const a = (t, e, s) => {
        s.width && s.color && (i.save(), i.lineWidth = s.width, i.strokeStyle = s.color, i.setLineDash(s.borderDash || []), i.lineDashOffset = s.borderDashOffset, i.beginPath(), i.moveTo(t.x, t.y), i.lineTo(e.x, e.y), i.stroke(), i.restore());
      };
      if (e.display) for (n = 0, o = s.length; n < o; ++n) {
        const t = s[n];
        e.drawOnChartArea && a({
          x: t.x1,
          y: t.y1
        }, {
          x: t.x2,
          y: t.y2
        }, t), e.drawTicks && a({
          x: t.tx1,
          y: t.ty1
        }, {
          x: t.tx2,
          y: t.ty2
        }, {
          color: t.tickColor,
          width: t.tickWidth,
          borderDash: t.tickBorderDash,
          borderDashOffset: t.tickBorderDashOffset
        });
      }
    }
    drawBorder() {
      const {
          chart: t,
          ctx: e,
          options: {
            border: i,
            grid: s
          }
        } = this,
        n = i.setContext(this.getContext()),
        o = i.display ? n.width : 0;
      if (!o) return;
      const a = s.setContext(this.getContext(0)).lineWidth,
        r = this._borderValue;
      let l, h, c, d;
      this.isHorizontal() ? (l = Ae(t, this.left, o) - o / 2, h = Ae(t, this.right, a) + a / 2, c = d = r) : (c = Ae(t, this.top, o) - o / 2, d = Ae(t, this.bottom, a) + a / 2, l = h = r), e.save(), e.lineWidth = n.width, e.strokeStyle = n.color, e.beginPath(), e.moveTo(l, c), e.lineTo(h, d), e.stroke(), e.restore();
    }
    drawLabels(t) {
      if (!this.options.ticks.display) return;
      const e = this.ctx,
        i = this._computeLabelArea();
      i && Ie(e, i);
      const s = this.getLabelItems(t);
      for (const t of s) {
        const i = t.options,
          s = t.font;
        Ne(e, t.label, 0, t.textOffset, s, i);
      }
      i && ze(e);
    }
    drawTitle() {
      const {
        ctx: t,
        options: {
          position: e,
          title: i,
          reverse: s
        }
      } = this;
      if (!i.display) return;
      const a = Si(i.font),
        r = ki(i.padding),
        l = i.align;
      let h = a.lineHeight / 2;
      "bottom" === e || "center" === e || o(e) ? (h += r.bottom, n(i.text) && (h += a.lineHeight * (i.text.length - 1))) : h += r.top;
      const {
        titleX: c,
        titleY: d,
        maxWidth: u,
        rotation: f
      } = function (t, e, i, s) {
        const {
            top: n,
            left: a,
            bottom: r,
            right: l,
            chart: h
          } = t,
          {
            chartArea: c,
            scales: d
          } = h;
        let u,
          f,
          g,
          p = 0;
        const m = r - n,
          b = l - a;
        if (t.isHorizontal()) {
          if (f = ft(s, a, l), o(i)) {
            const t = Object.keys(i)[0],
              s = i[t];
            g = d[t].getPixelForValue(s) + m - e;
          } else g = "center" === i ? (c.bottom + c.top) / 2 + m - e : Ys(t, i, e);
          u = l - a;
        } else {
          if (o(i)) {
            const t = Object.keys(i)[0],
              s = i[t];
            f = d[t].getPixelForValue(s) - b + e;
          } else f = "center" === i ? (c.left + c.right) / 2 - b + e : Ys(t, i, e);
          g = ft(s, r, n), p = "left" === i ? -E : E;
        }
        return {
          titleX: f,
          titleY: g,
          maxWidth: u,
          rotation: p
        };
      }(this, h, e, l);
      Ne(t, i.text, 0, 0, a, {
        color: i.color,
        maxWidth: u,
        rotation: f,
        textAlign: Zs(l, e, s),
        textBaseline: "middle",
        translation: [c, d]
      });
    }
    draw(t) {
      this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t));
    }
    _layers() {
      const t = this.options,
        e = t.ticks && t.ticks.z || 0,
        i = l(t.grid && t.grid.z, -1),
        s = l(t.border && t.border.z, 0);
      return this._isVisible() && this.draw === Js.prototype.draw ? [{
        z: i,
        draw: t => {
          this.drawBackground(), this.drawGrid(t), this.drawTitle();
        }
      }, {
        z: s,
        draw: () => {
          this.drawBorder();
        }
      }, {
        z: e,
        draw: t => {
          this.drawLabels(t);
        }
      }] : [{
        z: e,
        draw: t => {
          this.draw(t);
        }
      }];
    }
    getMatchingVisibleMetas(t) {
      const e = this.chart.getSortedVisibleDatasetMetas(),
        i = this.axis + "AxisID",
        s = [];
      let n, o;
      for (n = 0, o = e.length; n < o; ++n) {
        const o = e[n];
        o[i] !== this.id || t && o.type !== t || s.push(o);
      }
      return s;
    }
    _resolveTickFontOptions(t) {
      return Si(this.options.ticks.setContext(this.getContext(t)).font);
    }
    _maxDigits() {
      const t = this._resolveTickFontOptions(0).lineHeight;
      return (this.isHorizontal() ? this.width : this.height) / t;
    }
  }
  class Qs {
    constructor(t, e, i) {
      this.type = t, this.scope = e, this.override = i, this.items = Object.create(null);
    }
    isForType(t) {
      return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
    }
    register(t) {
      const e = Object.getPrototypeOf(t);
      let i;
      (function (t) {
        return "id" in t && "defaults" in t;
      })(e) && (i = this.register(e));
      const s = this.items,
        n = t.id,
        o = this.scope + "." + n;
      if (!n) throw new Error("class does not have id: " + t);
      return n in s || (s[n] = t, function (t, e, i) {
        const s = b(Object.create(null), [i ? ue.get(i) : {}, ue.get(e), t.defaults]);
        ue.set(e, s), t.defaultRoutes && function (t, e) {
          Object.keys(e).forEach(i => {
            const s = i.split("."),
              n = s.pop(),
              o = [t].concat(s).join("."),
              a = e[i].split("."),
              r = a.pop(),
              l = a.join(".");
            ue.route(o, n, l, r);
          });
        }(e, t.defaultRoutes);
        t.descriptors && ue.describe(e, t.descriptors);
      }(t, o, i), this.override && ue.override(t.id, t.overrides)), o;
    }
    get(t) {
      return this.items[t];
    }
    unregister(t) {
      const e = this.items,
        i = t.id,
        s = this.scope;
      i in e && delete e[i], s && i in ue[s] && (delete ue[s][i], this.override && delete re[i]);
    }
  }
  class tn {
    constructor() {
      this.controllers = new Qs(Ns, "datasets", !0), this.elements = new Qs(Hs, "elements"), this.plugins = new Qs(Object, "plugins"), this.scales = new Qs(Js, "scales"), this._typedRegistries = [this.controllers, this.scales, this.elements];
    }
    add() {
      for (var _len4 = arguments.length, t = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        t[_key4] = arguments[_key4];
      }
      this._each("register", t);
    }
    remove() {
      for (var _len5 = arguments.length, t = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        t[_key5] = arguments[_key5];
      }
      this._each("unregister", t);
    }
    addControllers() {
      for (var _len6 = arguments.length, t = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        t[_key6] = arguments[_key6];
      }
      this._each("register", t, this.controllers);
    }
    addElements() {
      for (var _len7 = arguments.length, t = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        t[_key7] = arguments[_key7];
      }
      this._each("register", t, this.elements);
    }
    addPlugins() {
      for (var _len8 = arguments.length, t = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        t[_key8] = arguments[_key8];
      }
      this._each("register", t, this.plugins);
    }
    addScales() {
      for (var _len9 = arguments.length, t = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        t[_key9] = arguments[_key9];
      }
      this._each("register", t, this.scales);
    }
    getController(t) {
      return this._get(t, this.controllers, "controller");
    }
    getElement(t) {
      return this._get(t, this.elements, "element");
    }
    getPlugin(t) {
      return this._get(t, this.plugins, "plugin");
    }
    getScale(t) {
      return this._get(t, this.scales, "scale");
    }
    removeControllers() {
      for (var _len10 = arguments.length, t = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        t[_key10] = arguments[_key10];
      }
      this._each("unregister", t, this.controllers);
    }
    removeElements() {
      for (var _len11 = arguments.length, t = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        t[_key11] = arguments[_key11];
      }
      this._each("unregister", t, this.elements);
    }
    removePlugins() {
      for (var _len12 = arguments.length, t = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
        t[_key12] = arguments[_key12];
      }
      this._each("unregister", t, this.plugins);
    }
    removeScales() {
      for (var _len13 = arguments.length, t = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
        t[_key13] = arguments[_key13];
      }
      this._each("unregister", t, this.scales);
    }
    _each(t, e, i) {
      [...e].forEach(e => {
        const s = i || this._getRegistryForType(e);
        i || s.isForType(e) || s === this.plugins && e.id ? this._exec(t, s, e) : u(e, e => {
          const s = i || this._getRegistryForType(e);
          this._exec(t, s, e);
        });
      });
    }
    _exec(t, e, i) {
      const s = w(t);
      d(i["before" + s], [], i), e[t](i), d(i["after" + s], [], i);
    }
    _getRegistryForType(t) {
      for (let e = 0; e < this._typedRegistries.length; e++) {
        const i = this._typedRegistries[e];
        if (i.isForType(t)) return i;
      }
      return this.plugins;
    }
    _get(t, e, i) {
      const s = e.get(t);
      if (void 0 === s) throw new Error('"' + t + '" is not a registered ' + i + ".");
      return s;
    }
  }
  var en = new tn();
  class sn {
    constructor() {
      this._init = [];
    }
    notify(t, e, i, s) {
      "beforeInit" === e && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
      const n = s ? this._descriptors(t).filter(s) : this._descriptors(t),
        o = this._notify(n, t, e, i);
      return "afterDestroy" === e && (this._notify(n, t, "stop"), this._notify(this._init, t, "uninstall")), o;
    }
    _notify(t, e, i, s) {
      s = s || {};
      for (const n of t) {
        const t = n.plugin;
        if (!1 === d(t[i], [e, s, n.options], t) && s.cancelable) return !1;
      }
      return !0;
    }
    invalidate() {
      s(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
    }
    _descriptors(t) {
      if (this._cache) return this._cache;
      const e = this._cache = this._createDescriptors(t);
      return this._notifyStateChanges(t), e;
    }
    _createDescriptors(t, e) {
      const i = t && t.config,
        s = l(i.options && i.options.plugins, {}),
        n = function (t) {
          const e = {},
            i = [],
            s = Object.keys(en.plugins.items);
          for (let t = 0; t < s.length; t++) i.push(en.getPlugin(s[t]));
          const n = t.plugins || [];
          for (let t = 0; t < n.length; t++) {
            const s = n[t];
            -1 === i.indexOf(s) && (i.push(s), e[s.id] = !0);
          }
          return {
            plugins: i,
            localIds: e
          };
        }(i);
      return !1 !== s || e ? function (t, _ref2, s, n) {
        let {
          plugins: e,
          localIds: i
        } = _ref2;
        const o = [],
          a = t.getContext();
        for (const r of e) {
          const e = r.id,
            l = nn(s[e], n);
          null !== l && o.push({
            plugin: r,
            options: on(t.config, {
              plugin: r,
              local: i[e]
            }, l, a)
          });
        }
        return o;
      }(t, n, s, e) : [];
    }
    _notifyStateChanges(t) {
      const e = this._oldCache || [],
        i = this._cache,
        s = (t, e) => t.filter(t => !e.some(e => t.plugin.id === e.plugin.id));
      this._notify(s(e, i), t, "stop"), this._notify(s(i, e), t, "start");
    }
  }
  function nn(t, e) {
    return e || !1 !== t ? !0 === t ? {} : t : null;
  }
  function on(t, _ref3, s, n) {
    let {
      plugin: e,
      local: i
    } = _ref3;
    const o = t.pluginScopeKeys(e),
      a = t.getOptionScopes(s, o);
    return i && e.defaults && a.push(e.defaults), t.createResolver(a, n, [""], {
      scriptable: !1,
      indexable: !1,
      allKeys: !0
    });
  }
  function an(t, e) {
    const i = ue.datasets[t] || {};
    return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || i.indexAxis || "x";
  }
  function rn(t) {
    if ("x" === t || "y" === t || "r" === t) return t;
  }
  function ln(t) {
    if (rn(t)) return t;
    for (var _len14 = arguments.length, e = new Array(_len14 > 1 ? _len14 - 1 : 0), _key14 = 1; _key14 < _len14; _key14++) {
      e[_key14 - 1] = arguments[_key14];
    }
    for (const s of e) {
      const e = s.axis || ("top" === (i = s.position) || "bottom" === i ? "x" : "left" === i || "right" === i ? "y" : void 0) || t.length > 1 && rn(t[0].toLowerCase());
      if (e) return e;
    }
    var i;
    throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`);
  }
  function hn(t, e, i) {
    if (i[e + "AxisID"] === t) return {
      axis: e
    };
  }
  function cn(t, e) {
    const i = re[t.type] || {
        scales: {}
      },
      s = e.scales || {},
      n = an(t.type, e),
      a = Object.create(null);
    return Object.keys(s).forEach(e => {
      const r = s[e];
      if (!o(r)) return console.error(`Invalid scale configuration for scale: ${e}`);
      if (r._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${e}`);
      const l = ln(e, r, function (t, e) {
          if (e.data && e.data.datasets) {
            const i = e.data.datasets.filter(e => e.xAxisID === t || e.yAxisID === t);
            if (i.length) return hn(t, "x", i[0]) || hn(t, "y", i[0]);
          }
          return {};
        }(e, t), ue.scales[r.type]),
        h = function (t, e) {
          return t === e ? "_index_" : "_value_";
        }(l, n),
        c = i.scales || {};
      a[e] = x(Object.create(null), [{
        axis: l
      }, r, c[l], c[h]]);
    }), t.data.datasets.forEach(i => {
      const n = i.type || t.type,
        o = i.indexAxis || an(n, e),
        r = (re[n] || {}).scales || {};
      Object.keys(r).forEach(t => {
        const e = function (t, e) {
            let i = t;
            return "_index_" === t ? i = e : "_value_" === t && (i = "x" === e ? "y" : "x"), i;
          }(t, o),
          n = i[e + "AxisID"] || e;
        a[n] = a[n] || Object.create(null), x(a[n], [{
          axis: e
        }, s[n], r[t]]);
      });
    }), Object.keys(a).forEach(t => {
      const e = a[t];
      x(e, [ue.scales[e.type], ue.scale]);
    }), a;
  }
  function dn(t) {
    const e = t.options || (t.options = {});
    e.plugins = l(e.plugins, {}), e.scales = cn(t, e);
  }
  function un(t) {
    return (t = t || {}).datasets = t.datasets || [], t.labels = t.labels || [], t;
  }
  const fn = new Map(),
    gn = new Set();
  function pn(t, e) {
    let i = fn.get(t);
    return i || (i = e(), fn.set(t, i), gn.add(i)), i;
  }
  const mn = (t, e, i) => {
    const s = M(e, i);
    void 0 !== s && t.add(s);
  };
  class bn {
    constructor(t) {
      this._config = function (t) {
        return (t = t || {}).data = un(t.data), dn(t), t;
      }(t), this._scopeCache = new Map(), this._resolverCache = new Map();
    }
    get platform() {
      return this._config.platform;
    }
    get type() {
      return this._config.type;
    }
    set type(t) {
      this._config.type = t;
    }
    get data() {
      return this._config.data;
    }
    set data(t) {
      this._config.data = un(t);
    }
    get options() {
      return this._config.options;
    }
    set options(t) {
      this._config.options = t;
    }
    get plugins() {
      return this._config.plugins;
    }
    update() {
      const t = this._config;
      this.clearCache(), dn(t);
    }
    clearCache() {
      this._scopeCache.clear(), this._resolverCache.clear();
    }
    datasetScopeKeys(t) {
      return pn(t, () => [[`datasets.${t}`, ""]]);
    }
    datasetAnimationScopeKeys(t, e) {
      return pn(`${t}.transition.${e}`, () => [[`datasets.${t}.transitions.${e}`, `transitions.${e}`], [`datasets.${t}`, ""]]);
    }
    datasetElementScopeKeys(t, e) {
      return pn(`${t}-${e}`, () => [[`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ""]]);
    }
    pluginScopeKeys(t) {
      const e = t.id;
      return pn(`${this.type}-plugin-${e}`, () => [[`plugins.${e}`, ...(t.additionalOptionScopes || [])]]);
    }
    _cachedScopes(t, e) {
      const i = this._scopeCache;
      let s = i.get(t);
      return s && !e || (s = new Map(), i.set(t, s)), s;
    }
    getOptionScopes(t, e, i) {
      const {
          options: s,
          type: n
        } = this,
        o = this._cachedScopes(t, i),
        a = o.get(e);
      if (a) return a;
      const r = new Set();
      e.forEach(e => {
        t && (r.add(t), e.forEach(e => mn(r, t, e))), e.forEach(t => mn(r, s, t)), e.forEach(t => mn(r, re[n] || {}, t)), e.forEach(t => mn(r, ue, t)), e.forEach(t => mn(r, le, t));
      });
      const l = Array.from(r);
      return 0 === l.length && l.push(Object.create(null)), gn.has(e) && o.set(e, l), l;
    }
    chartOptionScopes() {
      const {
        options: t,
        type: e
      } = this;
      return [t, re[e] || {}, ue.datasets[e] || {}, {
        type: e
      }, ue, le];
    }
    resolveNamedOptions(t, e, i) {
      let s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [""];
      const o = {
          $shared: !0
        },
        {
          resolver: a,
          subPrefixes: r
        } = xn(this._resolverCache, t, s);
      let l = a;
      if (function (t, e) {
        const {
          isScriptable: i,
          isIndexable: s
        } = Ye(t);
        for (const o of e) {
          const e = i(o),
            a = s(o),
            r = (a || e) && t[o];
          if (e && (S(r) || _n(r)) || a && n(r)) return !0;
        }
        return !1;
      }(a, e)) {
        o.$shared = !1;
        l = $e(a, i = S(i) ? i() : i, this.createResolver(t, i, r));
      }
      for (const t of e) o[t] = l[t];
      return o;
    }
    createResolver(t, e) {
      let i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [""];
      let s = arguments.length > 3 ? arguments[3] : undefined;
      const {
        resolver: n
      } = xn(this._resolverCache, t, i);
      return o(e) ? $e(n, e, void 0, s) : n;
    }
  }
  function xn(t, e, i) {
    let s = t.get(e);
    s || (s = new Map(), t.set(e, s));
    const n = i.join();
    let o = s.get(n);
    if (!o) {
      o = {
        resolver: je(e, i),
        subPrefixes: i.filter(t => !t.toLowerCase().includes("hover"))
      }, s.set(n, o);
    }
    return o;
  }
  const _n = t => o(t) && Object.getOwnPropertyNames(t).reduce((e, i) => e || S(t[i]), !1);
  const yn = ["top", "bottom", "left", "right", "chartArea"];
  function vn(t, e) {
    return "top" === t || "bottom" === t || -1 === yn.indexOf(t) && "x" === e;
  }
  function Mn(t, e) {
    return function (i, s) {
      return i[t] === s[t] ? i[e] - s[e] : i[t] - s[t];
    };
  }
  function wn(t) {
    const e = t.chart,
      i = e.options.animation;
    e.notifyPlugins("afterRender"), d(i && i.onComplete, [t], e);
  }
  function kn(t) {
    const e = t.chart,
      i = e.options.animation;
    d(i && i.onProgress, [t], e);
  }
  function Sn(t) {
    return fe() && "string" == typeof t ? t = document.getElementById(t) : t && t.length && (t = t[0]), t && t.canvas && (t = t.canvas), t;
  }
  const Pn = {},
    Dn = t => {
      const e = Sn(t);
      return Object.values(Pn).filter(t => t.canvas === e).pop();
    };
  function Cn(t, e, i) {
    const s = Object.keys(t);
    for (const n of s) {
      const s = +n;
      if (s >= e) {
        const o = t[n];
        delete t[n], (i > 0 || s > e) && (t[s + i] = o);
      }
    }
  }
  class On {
    static defaults = ue;
    static instances = Pn;
    static overrides = re;
    static registry = en;
    static version = "4.3.1";
    static getChart = Dn;
    static register() {
      en.add(...arguments), An();
    }
    static unregister() {
      en.remove(...arguments), An();
    }
    constructor(t, e) {
      const s = this.config = new bn(e),
        n = Sn(t),
        o = Dn(n);
      if (o) throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
      const a = s.createResolver(s.chartOptionScopes(), this.getContext());
      this.platform = new (s.platform || ks(n))(), this.platform.updateConfig(s);
      const r = this.platform.acquireContext(n, a.aspectRatio),
        l = r && r.canvas,
        h = l && l.height,
        c = l && l.width;
      this.id = i(), this.ctx = r, this.canvas = l, this.width = c, this.height = h, this._options = a, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new sn(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = dt(t => this.update(t), a.resizeDelay || 0), this._dataChanges = [], Pn[this.id] = this, r && l ? (xt.listen(this, "complete", wn), xt.listen(this, "progress", kn), this._initialize(), this.attached && this.update()) : console.error("Failed to create chart: can't acquire context from the given item");
    }
    get aspectRatio() {
      const {
        options: {
          aspectRatio: t,
          maintainAspectRatio: e
        },
        width: i,
        height: n,
        _aspectRatio: o
      } = this;
      return s(t) ? e && o ? o : n ? i / n : null : t;
    }
    get data() {
      return this.config.data;
    }
    set data(t) {
      this.config.data = t;
    }
    get options() {
      return this._options;
    }
    set options(t) {
      this.config.options = t;
    }
    get registry() {
      return en;
    }
    _initialize() {
      return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : ke(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
    }
    clear() {
      return Te(this.canvas, this.ctx), this;
    }
    stop() {
      return xt.stop(this), this;
    }
    resize(t, e) {
      xt.running(this) ? this._resizeBeforeDraw = {
        width: t,
        height: e
      } : this._resize(t, e);
    }
    _resize(t, e) {
      const i = this.options,
        s = this.canvas,
        n = i.maintainAspectRatio && this.aspectRatio,
        o = this.platform.getMaximumSize(s, t, e, n),
        a = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
        r = this.width ? "resize" : "attach";
      this.width = o.width, this.height = o.height, this._aspectRatio = this.aspectRatio, ke(this, a, !0) && (this.notifyPlugins("resize", {
        size: o
      }), d(i.onResize, [this, o], this), this.attached && this._doResize(r) && this.render());
    }
    ensureScalesHaveIDs() {
      u(this.options.scales || {}, (t, e) => {
        t.id = e;
      });
    }
    buildOrUpdateScales() {
      const t = this.options,
        e = t.scales,
        i = this.scales,
        s = Object.keys(i).reduce((t, e) => (t[e] = !1, t), {});
      let n = [];
      e && (n = n.concat(Object.keys(e).map(t => {
        const i = e[t],
          s = ln(t, i),
          n = "r" === s,
          o = "x" === s;
        return {
          options: i,
          dposition: n ? "chartArea" : o ? "bottom" : "left",
          dtype: n ? "radialLinear" : o ? "category" : "linear"
        };
      }))), u(n, e => {
        const n = e.options,
          o = n.id,
          a = ln(o, n),
          r = l(n.type, e.dtype);
        void 0 !== n.position && vn(n.position, a) === vn(e.dposition) || (n.position = e.dposition), s[o] = !0;
        let h = null;
        if (o in i && i[o].type === r) h = i[o];else {
          h = new (en.getScale(r))({
            id: o,
            type: r,
            ctx: this.ctx,
            chart: this
          }), i[h.id] = h;
        }
        h.init(n, t);
      }), u(s, (t, e) => {
        t || delete i[e];
      }), u(i, t => {
        as.configure(this, t, t.options), as.addBox(this, t);
      });
    }
    _updateMetasets() {
      const t = this._metasets,
        e = this.data.datasets.length,
        i = t.length;
      if (t.sort((t, e) => t.index - e.index), i > e) {
        for (let t = e; t < i; ++t) this._destroyDatasetMeta(t);
        t.splice(e, i - e);
      }
      this._sortedMetasets = t.slice(0).sort(Mn("order", "index"));
    }
    _removeUnreferencedMetasets() {
      const {
        _metasets: t,
        data: {
          datasets: e
        }
      } = this;
      t.length > e.length && delete this._stacks, t.forEach((t, i) => {
        0 === e.filter(e => e === t._dataset).length && this._destroyDatasetMeta(i);
      });
    }
    buildOrUpdateControllers() {
      const t = [],
        e = this.data.datasets;
      let i, s;
      for (this._removeUnreferencedMetasets(), i = 0, s = e.length; i < s; i++) {
        const s = e[i];
        let n = this.getDatasetMeta(i);
        const o = s.type || this.config.type;
        if (n.type && n.type !== o && (this._destroyDatasetMeta(i), n = this.getDatasetMeta(i)), n.type = o, n.indexAxis = s.indexAxis || an(o, this.options), n.order = s.order || 0, n.index = i, n.label = "" + s.label, n.visible = this.isDatasetVisible(i), n.controller) n.controller.updateIndex(i), n.controller.linkScales();else {
          const e = en.getController(o),
            {
              datasetElementType: s,
              dataElementType: a
            } = ue.datasets[o];
          Object.assign(e, {
            dataElementType: en.getElement(a),
            datasetElementType: s && en.getElement(s)
          }), n.controller = new e(this, i), t.push(n.controller);
        }
      }
      return this._updateMetasets(), t;
    }
    _resetElements() {
      u(this.data.datasets, (t, e) => {
        this.getDatasetMeta(e).controller.reset();
      }, this);
    }
    reset() {
      this._resetElements(), this.notifyPlugins("reset");
    }
    update(t) {
      const e = this.config;
      e.update();
      const i = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()),
        s = this._animationsDisabled = !i.animation;
      if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), !1 === this.notifyPlugins("beforeUpdate", {
        mode: t,
        cancelable: !0
      })) return;
      const n = this.buildOrUpdateControllers();
      this.notifyPlugins("beforeElementsUpdate");
      let o = 0;
      for (let t = 0, e = this.data.datasets.length; t < e; t++) {
        const {
            controller: e
          } = this.getDatasetMeta(t),
          i = !s && -1 === n.indexOf(e);
        e.buildOrUpdateElements(i), o = Math.max(+e.getMaxOverflow(), o);
      }
      o = this._minPadding = i.layout.autoPadding ? o : 0, this._updateLayout(o), s || u(n, t => {
        t.reset();
      }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
        mode: t
      }), this._layers.sort(Mn("z", "_idx"));
      const {
        _active: a,
        _lastEvent: r
      } = this;
      r ? this._eventHandler(r, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render();
    }
    _updateScales() {
      u(this.scales, t => {
        as.removeBox(this, t);
      }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
    }
    _checkEventBindings() {
      const t = this.options,
        e = new Set(Object.keys(this._listeners)),
        i = new Set(t.events);
      P(e, i) && !!this._responsiveListeners === t.responsive || (this.unbindEvents(), this.bindEvents());
    }
    _updateHiddenIndices() {
      const {
          _hiddenIndices: t
        } = this,
        e = this._getUniformDataChanges() || [];
      for (const {
        method: i,
        start: s,
        count: n
      } of e) {
        Cn(t, s, "_removeElements" === i ? -n : n);
      }
    }
    _getUniformDataChanges() {
      const t = this._dataChanges;
      if (!t || !t.length) return;
      this._dataChanges = [];
      const e = this.data.datasets.length,
        i = e => new Set(t.filter(t => t[0] === e).map((t, e) => e + "," + t.splice(1).join(","))),
        s = i(0);
      for (let t = 1; t < e; t++) if (!P(s, i(t))) return;
      return Array.from(s).map(t => t.split(",")).map(t => ({
        method: t[1],
        start: +t[2],
        count: +t[3]
      }));
    }
    _updateLayout(t) {
      if (!1 === this.notifyPlugins("beforeLayout", {
        cancelable: !0
      })) return;
      as.update(this, this.width, this.height, t);
      const e = this.chartArea,
        i = e.width <= 0 || e.height <= 0;
      this._layers = [], u(this.boxes, t => {
        i && "chartArea" === t.position || (t.configure && t.configure(), this._layers.push(...t._layers()));
      }, this), this._layers.forEach((t, e) => {
        t._idx = e;
      }), this.notifyPlugins("afterLayout");
    }
    _updateDatasets(t) {
      if (!1 !== this.notifyPlugins("beforeDatasetsUpdate", {
        mode: t,
        cancelable: !0
      })) {
        for (let t = 0, e = this.data.datasets.length; t < e; ++t) this.getDatasetMeta(t).controller.configure();
        for (let e = 0, i = this.data.datasets.length; e < i; ++e) this._updateDataset(e, S(t) ? t({
          datasetIndex: e
        }) : t);
        this.notifyPlugins("afterDatasetsUpdate", {
          mode: t
        });
      }
    }
    _updateDataset(t, e) {
      const i = this.getDatasetMeta(t),
        s = {
          meta: i,
          index: t,
          mode: e,
          cancelable: !0
        };
      !1 !== this.notifyPlugins("beforeDatasetUpdate", s) && (i.controller._update(e), s.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", s));
    }
    render() {
      !1 !== this.notifyPlugins("beforeRender", {
        cancelable: !0
      }) && (xt.has(this) ? this.attached && !xt.running(this) && xt.start(this) : (this.draw(), wn({
        chart: this
      })));
    }
    draw() {
      let t;
      if (this._resizeBeforeDraw) {
        const {
          width: t,
          height: e
        } = this._resizeBeforeDraw;
        this._resize(t, e), this._resizeBeforeDraw = null;
      }
      if (this.clear(), this.width <= 0 || this.height <= 0) return;
      if (!1 === this.notifyPlugins("beforeDraw", {
        cancelable: !0
      })) return;
      const e = this._layers;
      for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea);
      for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea);
      this.notifyPlugins("afterDraw");
    }
    _getSortedDatasetMetas(t) {
      const e = this._sortedMetasets,
        i = [];
      let s, n;
      for (s = 0, n = e.length; s < n; ++s) {
        const n = e[s];
        t && !n.visible || i.push(n);
      }
      return i;
    }
    getSortedVisibleDatasetMetas() {
      return this._getSortedDatasetMetas(!0);
    }
    _drawDatasets() {
      if (!1 === this.notifyPlugins("beforeDatasetsDraw", {
        cancelable: !0
      })) return;
      const t = this.getSortedVisibleDatasetMetas();
      for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
      this.notifyPlugins("afterDatasetsDraw");
    }
    _drawDataset(t) {
      const e = this.ctx,
        i = t._clip,
        s = !i.disabled,
        n = function (t) {
          const {
            xScale: e,
            yScale: i
          } = t;
          if (e && i) return {
            left: e.left,
            right: e.right,
            top: i.top,
            bottom: i.bottom
          };
        }(t) || this.chartArea,
        o = {
          meta: t,
          index: t.index,
          cancelable: !0
        };
      !1 !== this.notifyPlugins("beforeDatasetDraw", o) && (s && Ie(e, {
        left: !1 === i.left ? 0 : n.left - i.left,
        right: !1 === i.right ? this.width : n.right + i.right,
        top: !1 === i.top ? 0 : n.top - i.top,
        bottom: !1 === i.bottom ? this.height : n.bottom + i.bottom
      }), t.controller.draw(), s && ze(e), o.cancelable = !1, this.notifyPlugins("afterDatasetDraw", o));
    }
    isPointInArea(t) {
      return Re(t, this.chartArea, this._minPadding);
    }
    getElementsAtEventForMode(t, e, i, s) {
      const n = Xi.modes[e];
      return "function" == typeof n ? n(this, t, i, s) : [];
    }
    getDatasetMeta(t) {
      const e = this.data.datasets[t],
        i = this._metasets;
      let s = i.filter(t => t && t._dataset === e).pop();
      return s || (s = {
        type: null,
        data: [],
        dataset: null,
        controller: null,
        hidden: null,
        xAxisID: null,
        yAxisID: null,
        order: e && e.order || 0,
        index: t,
        _dataset: e,
        _parsed: [],
        _sorted: !1
      }, i.push(s)), s;
    }
    getContext() {
      return this.$context || (this.$context = Ci(null, {
        chart: this,
        type: "chart"
      }));
    }
    getVisibleDatasetCount() {
      return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(t) {
      const e = this.data.datasets[t];
      if (!e) return !1;
      const i = this.getDatasetMeta(t);
      return "boolean" == typeof i.hidden ? !i.hidden : !e.hidden;
    }
    setDatasetVisibility(t, e) {
      this.getDatasetMeta(t).hidden = !e;
    }
    toggleDataVisibility(t) {
      this._hiddenIndices[t] = !this._hiddenIndices[t];
    }
    getDataVisibility(t) {
      return !this._hiddenIndices[t];
    }
    _updateVisibility(t, e, i) {
      const s = i ? "show" : "hide",
        n = this.getDatasetMeta(t),
        o = n.controller._resolveAnimations(void 0, s);
      k(e) ? (n.data[e].hidden = !i, this.update()) : (this.setDatasetVisibility(t, i), o.update(n, {
        visible: i
      }), this.update(e => e.datasetIndex === t ? s : void 0));
    }
    hide(t, e) {
      this._updateVisibility(t, e, !1);
    }
    show(t, e) {
      this._updateVisibility(t, e, !0);
    }
    _destroyDatasetMeta(t) {
      const e = this._metasets[t];
      e && e.controller && e.controller._destroy(), delete this._metasets[t];
    }
    _stop() {
      let t, e;
      for (this.stop(), xt.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t) this._destroyDatasetMeta(t);
    }
    destroy() {
      this.notifyPlugins("beforeDestroy");
      const {
        canvas: t,
        ctx: e
      } = this;
      this._stop(), this.config.clearCache(), t && (this.unbindEvents(), Te(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete Pn[this.id], this.notifyPlugins("afterDestroy");
    }
    toBase64Image() {
      return this.canvas.toDataURL(...arguments);
    }
    bindEvents() {
      this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
    }
    bindUserEvents() {
      const t = this._listeners,
        e = this.platform,
        i = (i, s) => {
          e.addEventListener(this, i, s), t[i] = s;
        },
        s = (t, e, i) => {
          t.offsetX = e, t.offsetY = i, this._eventHandler(t);
        };
      u(this.options.events, t => i(t, s));
    }
    bindResponsiveEvents() {
      this._responsiveListeners || (this._responsiveListeners = {});
      const t = this._responsiveListeners,
        e = this.platform,
        i = (i, s) => {
          e.addEventListener(this, i, s), t[i] = s;
        },
        s = (i, s) => {
          t[i] && (e.removeEventListener(this, i, s), delete t[i]);
        },
        n = (t, e) => {
          this.canvas && this.resize(t, e);
        };
      let o;
      const a = () => {
        s("attach", a), this.attached = !0, this.resize(), i("resize", n), i("detach", o);
      };
      o = () => {
        this.attached = !1, s("resize", n), this._stop(), this._resize(0, 0), i("attach", a);
      }, e.isAttached(this.canvas) ? a() : o();
    }
    unbindEvents() {
      u(this._listeners, (t, e) => {
        this.platform.removeEventListener(this, e, t);
      }), this._listeners = {}, u(this._responsiveListeners, (t, e) => {
        this.platform.removeEventListener(this, e, t);
      }), this._responsiveListeners = void 0;
    }
    updateHoverStyle(t, e, i) {
      const s = i ? "set" : "remove";
      let n, o, a, r;
      for ("dataset" === e && (n = this.getDatasetMeta(t[0].datasetIndex), n.controller["_" + s + "DatasetHoverStyle"]()), a = 0, r = t.length; a < r; ++a) {
        o = t[a];
        const e = o && this.getDatasetMeta(o.datasetIndex).controller;
        e && e[s + "HoverStyle"](o.element, o.datasetIndex, o.index);
      }
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(t) {
      const e = this._active || [],
        i = t.map(_ref4 => {
          let {
            datasetIndex: t,
            index: e
          } = _ref4;
          const i = this.getDatasetMeta(t);
          if (!i) throw new Error("No dataset found at index " + t);
          return {
            datasetIndex: t,
            element: i.data[e],
            index: e
          };
        });
      !f(i, e) && (this._active = i, this._lastEvent = null, this._updateHoverStyles(i, e));
    }
    notifyPlugins(t, e, i) {
      return this._plugins.notify(this, t, e, i);
    }
    isPluginEnabled(t) {
      return 1 === this._plugins._cache.filter(e => e.plugin.id === t).length;
    }
    _updateHoverStyles(t, e, i) {
      const s = this.options.hover,
        n = (t, e) => t.filter(t => !e.some(e => t.datasetIndex === e.datasetIndex && t.index === e.index)),
        o = n(e, t),
        a = i ? t : n(t, e);
      o.length && this.updateHoverStyle(o, s.mode, !1), a.length && s.mode && this.updateHoverStyle(a, s.mode, !0);
    }
    _eventHandler(t, e) {
      const i = {
          event: t,
          replay: e,
          cancelable: !0,
          inChartArea: this.isPointInArea(t)
        },
        s = e => (e.options.events || this.options.events).includes(t.native.type);
      if (!1 === this.notifyPlugins("beforeEvent", i, s)) return;
      const n = this._handleEvent(t, e, i.inChartArea);
      return i.cancelable = !1, this.notifyPlugins("afterEvent", i, s), (n || i.changed) && this.render(), this;
    }
    _handleEvent(t, e, i) {
      const {
          _active: s = [],
          options: n
        } = this,
        o = e,
        a = this._getActiveElements(t, s, i, o),
        r = D(t),
        l = function (t, e, i, s) {
          return i && "mouseout" !== t.type ? s ? e : t : null;
        }(t, this._lastEvent, i, r);
      i && (this._lastEvent = null, d(n.onHover, [t, a, this], this), r && d(n.onClick, [t, a, this], this));
      const h = !f(a, s);
      return (h || e) && (this._active = a, this._updateHoverStyles(a, s, e)), this._lastEvent = l, h;
    }
    _getActiveElements(t, e, i, s) {
      if ("mouseout" === t.type) return [];
      if (!i) return e;
      const n = this.options.hover;
      return this.getElementsAtEventForMode(t, n.mode, n, s);
    }
  }
  function An() {
    return u(On.instances, t => t._plugins.invalidate());
  }
  function Tn() {
    throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
  }
  class Ln {
    static override(t) {
      Object.assign(Ln.prototype, t);
    }
    options;
    constructor(t) {
      this.options = t || {};
    }
    init() {}
    formats() {
      return Tn();
    }
    parse() {
      return Tn();
    }
    format() {
      return Tn();
    }
    add() {
      return Tn();
    }
    diff() {
      return Tn();
    }
    startOf() {
      return Tn();
    }
    endOf() {
      return Tn();
    }
  }
  var En = {
    _date: Ln
  };
  function Rn(t) {
    const e = t.iScale,
      i = function (t, e) {
        if (!t._cache.$bar) {
          const i = t.getMatchingVisibleMetas(e);
          let s = [];
          for (let e = 0, n = i.length; e < n; e++) s = s.concat(i[e].controller.getAllParsedValues(t));
          t._cache.$bar = lt(s.sort((t, e) => t - e));
        }
        return t._cache.$bar;
      }(e, t.type);
    let s,
      n,
      o,
      a,
      r = e._length;
    const l = () => {
      32767 !== o && -32768 !== o && (k(a) && (r = Math.min(r, Math.abs(o - a) || r)), a = o);
    };
    for (s = 0, n = i.length; s < n; ++s) o = e.getPixelForValue(i[s]), l();
    for (a = void 0, s = 0, n = e.ticks.length; s < n; ++s) o = e.getPixelForTick(s), l();
    return r;
  }
  function In(t, e, i, s) {
    return n(t) ? function (t, e, i, s) {
      const n = i.parse(t[0], s),
        o = i.parse(t[1], s),
        a = Math.min(n, o),
        r = Math.max(n, o);
      let l = a,
        h = r;
      Math.abs(a) > Math.abs(r) && (l = r, h = a), e[i.axis] = h, e._custom = {
        barStart: l,
        barEnd: h,
        start: n,
        end: o,
        min: a,
        max: r
      };
    }(t, e, i, s) : e[i.axis] = i.parse(t, s), e;
  }
  function zn(t, e, i, s) {
    const n = t.iScale,
      o = t.vScale,
      a = n.getLabels(),
      r = n === o,
      l = [];
    let h, c, d, u;
    for (h = i, c = i + s; h < c; ++h) u = e[h], d = {}, d[n.axis] = r || n.parse(a[h], h), l.push(In(u, d, o, h));
    return l;
  }
  function Fn(t) {
    return t && void 0 !== t.barStart && void 0 !== t.barEnd;
  }
  function Vn(t, e, i, s) {
    let n = e.borderSkipped;
    const o = {};
    if (!n) return void (t.borderSkipped = o);
    if (!0 === n) return void (t.borderSkipped = {
      top: !0,
      right: !0,
      bottom: !0,
      left: !0
    });
    const {
      start: a,
      end: r,
      reverse: l,
      top: h,
      bottom: c
    } = function (t) {
      let e, i, s, n, o;
      return t.horizontal ? (e = t.base > t.x, i = "left", s = "right") : (e = t.base < t.y, i = "bottom", s = "top"), e ? (n = "end", o = "start") : (n = "start", o = "end"), {
        start: i,
        end: s,
        reverse: e,
        top: n,
        bottom: o
      };
    }(t);
    "middle" === n && i && (t.enableBorderRadius = !0, (i._top || 0) === s ? n = h : (i._bottom || 0) === s ? n = c : (o[Bn(c, a, r, l)] = !0, n = h)), o[Bn(n, a, r, l)] = !0, t.borderSkipped = o;
  }
  function Bn(t, e, i, s) {
    var n, o, a;
    return s ? (a = i, t = Wn(t = (n = t) === (o = e) ? a : n === a ? o : n, i, e)) : t = Wn(t, e, i), t;
  }
  function Wn(t, e, i) {
    return "start" === t ? e : "end" === t ? i : t;
  }
  function Nn(t, _ref5, i) {
    let {
      inflateAmount: e
    } = _ref5;
    t.inflateAmount = "auto" === e ? 1 === i ? .33 : 0 : e;
  }
  class Hn extends Ns {
    static id = "doughnut";
    static defaults = {
      datasetElementType: !1,
      dataElementType: "arc",
      animation: {
        animateRotate: !0,
        animateScale: !1
      },
      animations: {
        numbers: {
          type: "number",
          properties: ["circumference", "endAngle", "innerRadius", "outerRadius", "startAngle", "x", "y", "offset", "borderWidth", "spacing"]
        }
      },
      cutout: "50%",
      rotation: 0,
      circumference: 360,
      radius: "100%",
      spacing: 0,
      indexAxis: "r"
    };
    static descriptors = {
      _scriptable: t => "spacing" !== t,
      _indexable: t => "spacing" !== t && !t.startsWith("borderDash") && !t.startsWith("hoverBorderDash")
    };
    static overrides = {
      aspectRatio: 1,
      plugins: {
        legend: {
          labels: {
            generateLabels(t) {
              const e = t.data;
              if (e.labels.length && e.datasets.length) {
                const {
                  labels: {
                    pointStyle: i,
                    color: s
                  }
                } = t.legend.options;
                return e.labels.map((e, n) => {
                  const o = t.getDatasetMeta(0).controller.getStyle(n);
                  return {
                    text: e,
                    fillStyle: o.backgroundColor,
                    strokeStyle: o.borderColor,
                    fontColor: s,
                    lineWidth: o.borderWidth,
                    pointStyle: i,
                    hidden: !t.getDataVisibility(n),
                    index: n
                  };
                });
              }
              return [];
            }
          },
          onClick(t, e, i) {
            i.chart.toggleDataVisibility(e.index), i.chart.update();
          }
        }
      }
    };
    constructor(t, e) {
      super(t, e), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0;
    }
    linkScales() {}
    parse(t, e) {
      const i = this.getDataset().data,
        s = this._cachedMeta;
      if (!1 === this._parsing) s._parsed = i;else {
        let n,
          a,
          r = t => +i[t];
        if (o(i[t])) {
          const {
            key: t = "value"
          } = this._parsing;
          r = e => +M(i[e], t);
        }
        for (n = t, a = t + e; n < a; ++n) s._parsed[n] = r(n);
      }
    }
    _getRotation() {
      return $(this.options.rotation - 90);
    }
    _getCircumference() {
      return $(this.options.circumference);
    }
    _getRotationExtents() {
      let t = O,
        e = -O;
      for (let i = 0; i < this.chart.data.datasets.length; ++i) if (this.chart.isDatasetVisible(i) && this.chart.getDatasetMeta(i).type === this._type) {
        const s = this.chart.getDatasetMeta(i).controller,
          n = s._getRotation(),
          o = s._getCircumference();
        t = Math.min(t, n), e = Math.max(e, n + o);
      }
      return {
        rotation: t,
        circumference: e - t
      };
    }
    update(t) {
      const e = this.chart,
        {
          chartArea: i
        } = e,
        s = this._cachedMeta,
        n = s.data,
        o = this.getMaxBorderWidth() + this.getMaxOffset(n) + this.options.spacing,
        a = Math.max((Math.min(i.width, i.height) - o) / 2, 0),
        r = Math.min(h(this.options.cutout, a), 1),
        l = this._getRingWeight(this.index),
        {
          circumference: d,
          rotation: u
        } = this._getRotationExtents(),
        {
          ratioX: f,
          ratioY: g,
          offsetX: p,
          offsetY: m
        } = function (t, e, i) {
          let s = 1,
            n = 1,
            o = 0,
            a = 0;
          if (e < O) {
            const r = t,
              l = r + e,
              h = Math.cos(r),
              c = Math.sin(r),
              d = Math.cos(l),
              u = Math.sin(l),
              f = (t, e, s) => Z(t, r, l, !0) ? 1 : Math.max(e, e * i, s, s * i),
              g = (t, e, s) => Z(t, r, l, !0) ? -1 : Math.min(e, e * i, s, s * i),
              p = f(0, h, d),
              m = f(E, c, u),
              b = g(C, h, d),
              x = g(C + E, c, u);
            s = (p - b) / 2, n = (m - x) / 2, o = -(p + b) / 2, a = -(m + x) / 2;
          }
          return {
            ratioX: s,
            ratioY: n,
            offsetX: o,
            offsetY: a
          };
        }(u, d, r),
        b = (i.width - o) / f,
        x = (i.height - o) / g,
        _ = Math.max(Math.min(b, x) / 2, 0),
        y = c(this.options.radius, _),
        v = (y - Math.max(y * r, 0)) / this._getVisibleDatasetWeightTotal();
      this.offsetX = p * y, this.offsetY = m * y, s.total = this.calculateTotal(), this.outerRadius = y - v * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - v * l, 0), this.updateElements(n, 0, n.length, t);
    }
    _circumference(t, e) {
      const i = this.options,
        s = this._cachedMeta,
        n = this._getCircumference();
      return e && i.animation.animateRotate || !this.chart.getDataVisibility(t) || null === s._parsed[t] || s.data[t].hidden ? 0 : this.calculateCircumference(s._parsed[t] * n / O);
    }
    updateElements(t, e, i, s) {
      const n = "reset" === s,
        o = this.chart,
        a = o.chartArea,
        r = o.options.animation,
        l = (a.left + a.right) / 2,
        h = (a.top + a.bottom) / 2,
        c = n && r.animateScale,
        d = c ? 0 : this.innerRadius,
        u = c ? 0 : this.outerRadius,
        {
          sharedOptions: f,
          includeOptions: g
        } = this._getSharedOptions(e, s);
      let p,
        m = this._getRotation();
      for (p = 0; p < e; ++p) m += this._circumference(p, n);
      for (p = e; p < e + i; ++p) {
        const e = this._circumference(p, n),
          i = t[p],
          o = {
            x: l + this.offsetX,
            y: h + this.offsetY,
            startAngle: m,
            endAngle: m + e,
            circumference: e,
            outerRadius: u,
            innerRadius: d
          };
        g && (o.options = f || this.resolveDataElementOptions(p, i.active ? "active" : s)), m += e, this.updateElement(i, p, o, s);
      }
    }
    calculateTotal() {
      const t = this._cachedMeta,
        e = t.data;
      let i,
        s = 0;
      for (i = 0; i < e.length; i++) {
        const n = t._parsed[i];
        null === n || isNaN(n) || !this.chart.getDataVisibility(i) || e[i].hidden || (s += Math.abs(n));
      }
      return s;
    }
    calculateCircumference(t) {
      const e = this._cachedMeta.total;
      return e > 0 && !isNaN(t) ? O * (Math.abs(t) / e) : 0;
    }
    getLabelAndValue(t) {
      const e = this._cachedMeta,
        i = this.chart,
        s = i.data.labels || [],
        n = ne(e._parsed[t], i.options.locale);
      return {
        label: s[t] || "",
        value: n
      };
    }
    getMaxBorderWidth(t) {
      let e = 0;
      const i = this.chart;
      let s, n, o, a, r;
      if (!t) for (s = 0, n = i.data.datasets.length; s < n; ++s) if (i.isDatasetVisible(s)) {
        o = i.getDatasetMeta(s), t = o.data, a = o.controller;
        break;
      }
      if (!t) return 0;
      for (s = 0, n = t.length; s < n; ++s) r = a.resolveDataElementOptions(s), "inner" !== r.borderAlign && (e = Math.max(e, r.borderWidth || 0, r.hoverBorderWidth || 0));
      return e;
    }
    getMaxOffset(t) {
      let e = 0;
      for (let i = 0, s = t.length; i < s; ++i) {
        const t = this.resolveDataElementOptions(i);
        e = Math.max(e, t.offset || 0, t.hoverOffset || 0);
      }
      return e;
    }
    _getRingWeightOffset(t) {
      let e = 0;
      for (let i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i));
      return e;
    }
    _getRingWeight(t) {
      return Math.max(l(this.chart.data.datasets[t].weight, 1), 0);
    }
    _getVisibleDatasetWeightTotal() {
      return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
    }
  }
  class jn extends Ns {
    static id = "polarArea";
    static defaults = {
      dataElementType: "arc",
      animation: {
        animateRotate: !0,
        animateScale: !0
      },
      animations: {
        numbers: {
          type: "number",
          properties: ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"]
        }
      },
      indexAxis: "r",
      startAngle: 0
    };
    static overrides = {
      aspectRatio: 1,
      plugins: {
        legend: {
          labels: {
            generateLabels(t) {
              const e = t.data;
              if (e.labels.length && e.datasets.length) {
                const {
                  labels: {
                    pointStyle: i,
                    color: s
                  }
                } = t.legend.options;
                return e.labels.map((e, n) => {
                  const o = t.getDatasetMeta(0).controller.getStyle(n);
                  return {
                    text: e,
                    fillStyle: o.backgroundColor,
                    strokeStyle: o.borderColor,
                    fontColor: s,
                    lineWidth: o.borderWidth,
                    pointStyle: i,
                    hidden: !t.getDataVisibility(n),
                    index: n
                  };
                });
              }
              return [];
            }
          },
          onClick(t, e, i) {
            i.chart.toggleDataVisibility(e.index), i.chart.update();
          }
        }
      },
      scales: {
        r: {
          type: "radialLinear",
          angleLines: {
            display: !1
          },
          beginAtZero: !0,
          grid: {
            circular: !0
          },
          pointLabels: {
            display: !1
          },
          startAngle: 0
        }
      }
    };
    constructor(t, e) {
      super(t, e), this.innerRadius = void 0, this.outerRadius = void 0;
    }
    getLabelAndValue(t) {
      const e = this._cachedMeta,
        i = this.chart,
        s = i.data.labels || [],
        n = ne(e._parsed[t].r, i.options.locale);
      return {
        label: s[t] || "",
        value: n
      };
    }
    parseObjectData(t, e, i, s) {
      return ii.bind(this)(t, e, i, s);
    }
    update(t) {
      const e = this._cachedMeta.data;
      this._updateRadius(), this.updateElements(e, 0, e.length, t);
    }
    getMinMax() {
      const t = this._cachedMeta,
        e = {
          min: Number.POSITIVE_INFINITY,
          max: Number.NEGATIVE_INFINITY
        };
      return t.data.forEach((t, i) => {
        const s = this.getParsed(i).r;
        !isNaN(s) && this.chart.getDataVisibility(i) && (s < e.min && (e.min = s), s > e.max && (e.max = s));
      }), e;
    }
    _updateRadius() {
      const t = this.chart,
        e = t.chartArea,
        i = t.options,
        s = Math.min(e.right - e.left, e.bottom - e.top),
        n = Math.max(s / 2, 0),
        o = (n - Math.max(i.cutoutPercentage ? n / 100 * i.cutoutPercentage : 1, 0)) / t.getVisibleDatasetCount();
      this.outerRadius = n - o * this.index, this.innerRadius = this.outerRadius - o;
    }
    updateElements(t, e, i, s) {
      const n = "reset" === s,
        o = this.chart,
        a = o.options.animation,
        r = this._cachedMeta.rScale,
        l = r.xCenter,
        h = r.yCenter,
        c = r.getIndexAngle(0) - .5 * C;
      let d,
        u = c;
      const f = 360 / this.countVisibleElements();
      for (d = 0; d < e; ++d) u += this._computeAngle(d, s, f);
      for (d = e; d < e + i; d++) {
        const e = t[d];
        let i = u,
          g = u + this._computeAngle(d, s, f),
          p = o.getDataVisibility(d) ? r.getDistanceFromCenterForValue(this.getParsed(d).r) : 0;
        u = g, n && (a.animateScale && (p = 0), a.animateRotate && (i = g = c));
        const m = {
          x: l,
          y: h,
          innerRadius: 0,
          outerRadius: p,
          startAngle: i,
          endAngle: g,
          options: this.resolveDataElementOptions(d, e.active ? "active" : s)
        };
        this.updateElement(e, d, m, s);
      }
    }
    countVisibleElements() {
      const t = this._cachedMeta;
      let e = 0;
      return t.data.forEach((t, i) => {
        !isNaN(this.getParsed(i).r) && this.chart.getDataVisibility(i) && e++;
      }), e;
    }
    _computeAngle(t, e, i) {
      return this.chart.getDataVisibility(t) ? $(this.resolveDataElementOptions(t, e).angle || i) : 0;
    }
  }
  var $n = Object.freeze({
    __proto__: null,
    BarController: class extends Ns {
      static id = "bar";
      static defaults = {
        datasetElementType: !1,
        dataElementType: "bar",
        categoryPercentage: .8,
        barPercentage: .9,
        grouped: !0,
        animations: {
          numbers: {
            type: "number",
            properties: ["x", "y", "base", "width", "height"]
          }
        }
      };
      static overrides = {
        scales: {
          _index_: {
            type: "category",
            offset: !0,
            grid: {
              offset: !0
            }
          },
          _value_: {
            type: "linear",
            beginAtZero: !0
          }
        }
      };
      parsePrimitiveData(t, e, i, s) {
        return zn(t, e, i, s);
      }
      parseArrayData(t, e, i, s) {
        return zn(t, e, i, s);
      }
      parseObjectData(t, e, i, s) {
        const {
            iScale: n,
            vScale: o
          } = t,
          {
            xAxisKey: a = "x",
            yAxisKey: r = "y"
          } = this._parsing,
          l = "x" === n.axis ? a : r,
          h = "x" === o.axis ? a : r,
          c = [];
        let d, u, f, g;
        for (d = i, u = i + s; d < u; ++d) g = e[d], f = {}, f[n.axis] = n.parse(M(g, l), d), c.push(In(M(g, h), f, o, d));
        return c;
      }
      updateRangeFromParsed(t, e, i, s) {
        super.updateRangeFromParsed(t, e, i, s);
        const n = i._custom;
        n && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, n.min), t.max = Math.max(t.max, n.max));
      }
      getMaxOverflow() {
        return 0;
      }
      getLabelAndValue(t) {
        const e = this._cachedMeta,
          {
            iScale: i,
            vScale: s
          } = e,
          n = this.getParsed(t),
          o = n._custom,
          a = Fn(o) ? "[" + o.start + ", " + o.end + "]" : "" + s.getLabelForValue(n[s.axis]);
        return {
          label: "" + i.getLabelForValue(n[i.axis]),
          value: a
        };
      }
      initialize() {
        this.enableOptionSharing = !0, super.initialize();
        this._cachedMeta.stack = this.getDataset().stack;
      }
      update(t) {
        const e = this._cachedMeta;
        this.updateElements(e.data, 0, e.data.length, t);
      }
      updateElements(t, e, i, n) {
        const o = "reset" === n,
          {
            index: a,
            _cachedMeta: {
              vScale: r
            }
          } = this,
          l = r.getBasePixel(),
          h = r.isHorizontal(),
          c = this._getRuler(),
          {
            sharedOptions: d,
            includeOptions: u
          } = this._getSharedOptions(e, n);
        for (let f = e; f < e + i; f++) {
          const e = this.getParsed(f),
            i = o || s(e[r.axis]) ? {
              base: l,
              head: l
            } : this._calculateBarValuePixels(f),
            g = this._calculateBarIndexPixels(f, c),
            p = (e._stacks || {})[r.axis],
            m = {
              horizontal: h,
              base: i.base,
              enableBorderRadius: !p || Fn(e._custom) || a === p._top || a === p._bottom,
              x: h ? i.head : g.center,
              y: h ? g.center : i.head,
              height: h ? g.size : Math.abs(i.size),
              width: h ? Math.abs(i.size) : g.size
            };
          u && (m.options = d || this.resolveDataElementOptions(f, t[f].active ? "active" : n));
          const b = m.options || t[f].options;
          Vn(m, b, p, a), Nn(m, b, c.ratio), this.updateElement(t[f], f, m, n);
        }
      }
      _getStacks(t, e) {
        const {
            iScale: i
          } = this._cachedMeta,
          n = i.getMatchingVisibleMetas(this._type).filter(t => t.controller.options.grouped),
          o = i.options.stacked,
          a = [],
          r = t => {
            const i = t.controller.getParsed(e),
              n = i && i[t.vScale.axis];
            if (s(n) || isNaN(n)) return !0;
          };
        for (const i of n) if ((void 0 === e || !r(i)) && ((!1 === o || -1 === a.indexOf(i.stack) || void 0 === o && void 0 === i.stack) && a.push(i.stack), i.index === t)) break;
        return a.length || a.push(void 0), a;
      }
      _getStackCount(t) {
        return this._getStacks(void 0, t).length;
      }
      _getStackIndex(t, e, i) {
        const s = this._getStacks(t, i),
          n = void 0 !== e ? s.indexOf(e) : -1;
        return -1 === n ? s.length - 1 : n;
      }
      _getRuler() {
        const t = this.options,
          e = this._cachedMeta,
          i = e.iScale,
          s = [];
        let n, o;
        for (n = 0, o = e.data.length; n < o; ++n) s.push(i.getPixelForValue(this.getParsed(n)[i.axis], n));
        const a = t.barThickness;
        return {
          min: a || Rn(e),
          pixels: s,
          start: i._startPixel,
          end: i._endPixel,
          stackCount: this._getStackCount(),
          scale: i,
          grouped: t.grouped,
          ratio: a ? 1 : t.categoryPercentage * t.barPercentage
        };
      }
      _calculateBarValuePixels(t) {
        const {
            _cachedMeta: {
              vScale: e,
              _stacked: i,
              index: n
            },
            options: {
              base: o,
              minBarLength: a
            }
          } = this,
          r = o || 0,
          l = this.getParsed(t),
          h = l._custom,
          c = Fn(h);
        let d,
          u,
          f = l[e.axis],
          g = 0,
          p = i ? this.applyStack(e, l, i) : f;
        p !== f && (g = p - f, p = f), c && (f = h.barStart, p = h.barEnd - h.barStart, 0 !== f && F(f) !== F(h.barEnd) && (g = 0), g += f);
        const m = s(o) || c ? g : o;
        let b = e.getPixelForValue(m);
        if (d = this.chart.getDataVisibility(t) ? e.getPixelForValue(g + p) : b, u = d - b, Math.abs(u) < a) {
          u = function (t, e, i) {
            return 0 !== t ? F(t) : (e.isHorizontal() ? 1 : -1) * (e.min >= i ? 1 : -1);
          }(u, e, r) * a, f === r && (b -= u / 2);
          const t = e.getPixelForDecimal(0),
            s = e.getPixelForDecimal(1),
            o = Math.min(t, s),
            h = Math.max(t, s);
          b = Math.max(Math.min(b, h), o), d = b + u, i && !c && (l._stacks[e.axis]._visualValues[n] = e.getValueForPixel(d) - e.getValueForPixel(b));
        }
        if (b === e.getPixelForValue(r)) {
          const t = F(u) * e.getLineWidthForValue(r) / 2;
          b += t, u -= t;
        }
        return {
          size: u,
          base: b,
          head: d,
          center: d + u / 2
        };
      }
      _calculateBarIndexPixels(t, e) {
        const i = e.scale,
          n = this.options,
          o = n.skipNull,
          a = l(n.maxBarThickness, 1 / 0);
        let r, h;
        if (e.grouped) {
          const i = o ? this._getStackCount(t) : e.stackCount,
            l = "flex" === n.barThickness ? function (t, e, i, s) {
              const n = e.pixels,
                o = n[t];
              let a = t > 0 ? n[t - 1] : null,
                r = t < n.length - 1 ? n[t + 1] : null;
              const l = i.categoryPercentage;
              null === a && (a = o - (null === r ? e.end - e.start : r - o)), null === r && (r = o + o - a);
              const h = o - (o - Math.min(a, r)) / 2 * l;
              return {
                chunk: Math.abs(r - a) / 2 * l / s,
                ratio: i.barPercentage,
                start: h
              };
            }(t, e, n, i) : function (t, e, i, n) {
              const o = i.barThickness;
              let a, r;
              return s(o) ? (a = e.min * i.categoryPercentage, r = i.barPercentage) : (a = o * n, r = 1), {
                chunk: a / n,
                ratio: r,
                start: e.pixels[t] - a / 2
              };
            }(t, e, n, i),
            c = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0);
          r = l.start + l.chunk * c + l.chunk / 2, h = Math.min(a, l.chunk * l.ratio);
        } else r = i.getPixelForValue(this.getParsed(t)[i.axis], t), h = Math.min(a, e.min * e.ratio);
        return {
          base: r - h / 2,
          head: r + h / 2,
          center: r,
          size: h
        };
      }
      draw() {
        const t = this._cachedMeta,
          e = t.vScale,
          i = t.data,
          s = i.length;
        let n = 0;
        for (; n < s; ++n) null !== this.getParsed(n)[e.axis] && i[n].draw(this._ctx);
      }
    },
    BubbleController: class extends Ns {
      static id = "bubble";
      static defaults = {
        datasetElementType: !1,
        dataElementType: "point",
        animations: {
          numbers: {
            type: "number",
            properties: ["x", "y", "borderWidth", "radius"]
          }
        }
      };
      static overrides = {
        scales: {
          x: {
            type: "linear"
          },
          y: {
            type: "linear"
          }
        }
      };
      initialize() {
        this.enableOptionSharing = !0, super.initialize();
      }
      parsePrimitiveData(t, e, i, s) {
        const n = super.parsePrimitiveData(t, e, i, s);
        for (let t = 0; t < n.length; t++) n[t]._custom = this.resolveDataElementOptions(t + i).radius;
        return n;
      }
      parseArrayData(t, e, i, s) {
        const n = super.parseArrayData(t, e, i, s);
        for (let t = 0; t < n.length; t++) {
          const s = e[i + t];
          n[t]._custom = l(s[2], this.resolveDataElementOptions(t + i).radius);
        }
        return n;
      }
      parseObjectData(t, e, i, s) {
        const n = super.parseObjectData(t, e, i, s);
        for (let t = 0; t < n.length; t++) {
          const s = e[i + t];
          n[t]._custom = l(s && s.r && +s.r, this.resolveDataElementOptions(t + i).radius);
        }
        return n;
      }
      getMaxOverflow() {
        const t = this._cachedMeta.data;
        let e = 0;
        for (let i = t.length - 1; i >= 0; --i) e = Math.max(e, t[i].size(this.resolveDataElementOptions(i)) / 2);
        return e > 0 && e;
      }
      getLabelAndValue(t) {
        const e = this._cachedMeta,
          i = this.chart.data.labels || [],
          {
            xScale: s,
            yScale: n
          } = e,
          o = this.getParsed(t),
          a = s.getLabelForValue(o.x),
          r = n.getLabelForValue(o.y),
          l = o._custom;
        return {
          label: i[t] || "",
          value: "(" + a + ", " + r + (l ? ", " + l : "") + ")"
        };
      }
      update(t) {
        const e = this._cachedMeta.data;
        this.updateElements(e, 0, e.length, t);
      }
      updateElements(t, e, i, s) {
        const n = "reset" === s,
          {
            iScale: o,
            vScale: a
          } = this._cachedMeta,
          {
            sharedOptions: r,
            includeOptions: l
          } = this._getSharedOptions(e, s),
          h = o.axis,
          c = a.axis;
        for (let d = e; d < e + i; d++) {
          const e = t[d],
            i = !n && this.getParsed(d),
            u = {},
            f = u[h] = n ? o.getPixelForDecimal(.5) : o.getPixelForValue(i[h]),
            g = u[c] = n ? a.getBasePixel() : a.getPixelForValue(i[c]);
          u.skip = isNaN(f) || isNaN(g), l && (u.options = r || this.resolveDataElementOptions(d, e.active ? "active" : s), n && (u.options.radius = 0)), this.updateElement(e, d, u, s);
        }
      }
      resolveDataElementOptions(t, e) {
        const i = this.getParsed(t);
        let s = super.resolveDataElementOptions(t, e);
        s.$shared && (s = Object.assign({}, s, {
          $shared: !1
        }));
        const n = s.radius;
        return "active" !== e && (s.radius = 0), s.radius += l(i && i._custom, n), s;
      }
    },
    DoughnutController: Hn,
    LineController: class extends Ns {
      static id = "line";
      static defaults = {
        datasetElementType: "line",
        dataElementType: "point",
        showLine: !0,
        spanGaps: !1
      };
      static overrides = {
        scales: {
          _index_: {
            type: "category"
          },
          _value_: {
            type: "linear"
          }
        }
      };
      initialize() {
        this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize();
      }
      update(t) {
        const e = this._cachedMeta,
          {
            dataset: i,
            data: s = [],
            _dataset: n
          } = e,
          o = this.chart._animationsDisabled;
        let {
          start: a,
          count: r
        } = pt(e, s, o);
        this._drawStart = a, this._drawCount = r, mt(e) && (a = 0, r = s.length), i._chart = this.chart, i._datasetIndex = this.index, i._decimated = !!n._decimated, i.points = s.slice(Math.max(this._drawStart - 1, 0), this._drawStart + this._drawCount);
        const l = this.resolveDatasetElementOptions(t);
        this.options.showLine || (l.borderWidth = 0), l.segment = this.options.segment, this.updateElement(i, void 0, {
          animated: !o,
          options: l
        }, t), this.updateElements(s, a, r, t);
      }
      updateElements(t, e, i, n) {
        const o = "reset" === n,
          {
            iScale: a,
            vScale: r,
            _stacked: l,
            _dataset: h
          } = this._cachedMeta,
          {
            sharedOptions: c,
            includeOptions: d
          } = this._getSharedOptions(e, n),
          u = a.axis,
          f = r.axis,
          {
            spanGaps: g,
            segment: p
          } = this.options,
          m = N(g) ? g : Number.POSITIVE_INFINITY,
          b = this.chart._animationsDisabled || o || "none" === n,
          x = e + i,
          _ = t.length;
        let y = e > 0 && this.getParsed(e - 1);
        for (let i = 0; i < _; ++i) {
          const g = t[i],
            _ = b ? g : {};
          if (i < e || i >= x) {
            _.skip = !0;
            continue;
          }
          const v = this.getParsed(i),
            M = s(v[f]),
            w = _[u] = a.getPixelForValue(v[u], i),
            k = _[f] = o || M ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, v, l) : v[f], i);
          _.skip = isNaN(w) || isNaN(k) || M, _.stop = i > 0 && Math.abs(v[u] - y[u]) > m, p && (_.parsed = v, _.raw = h.data[i]), d && (_.options = c || this.resolveDataElementOptions(i, g.active ? "active" : n)), b || this.updateElement(g, i, _, n), y = v;
        }
      }
      getMaxOverflow() {
        const t = this._cachedMeta,
          e = t.dataset,
          i = e.options && e.options.borderWidth || 0,
          s = t.data || [];
        if (!s.length) return i;
        const n = s[0].size(this.resolveDataElementOptions(0)),
          o = s[s.length - 1].size(this.resolveDataElementOptions(s.length - 1));
        return Math.max(i, n, o) / 2;
      }
      draw() {
        const t = this._cachedMeta;
        t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw();
      }
    },
    PieController: class extends Hn {
      static id = "pie";
      static defaults = {
        cutout: 0,
        rotation: 0,
        circumference: 360,
        radius: "100%"
      };
    },
    PolarAreaController: jn,
    RadarController: class extends Ns {
      static id = "radar";
      static defaults = {
        datasetElementType: "line",
        dataElementType: "point",
        indexAxis: "r",
        showLine: !0,
        elements: {
          line: {
            fill: "start"
          }
        }
      };
      static overrides = {
        aspectRatio: 1,
        scales: {
          r: {
            type: "radialLinear"
          }
        }
      };
      getLabelAndValue(t) {
        const e = this._cachedMeta.vScale,
          i = this.getParsed(t);
        return {
          label: e.getLabels()[t],
          value: "" + e.getLabelForValue(i[e.axis])
        };
      }
      parseObjectData(t, e, i, s) {
        return ii.bind(this)(t, e, i, s);
      }
      update(t) {
        const e = this._cachedMeta,
          i = e.dataset,
          s = e.data || [],
          n = e.iScale.getLabels();
        if (i.points = s, "resize" !== t) {
          const e = this.resolveDatasetElementOptions(t);
          this.options.showLine || (e.borderWidth = 0);
          const o = {
            _loop: !0,
            _fullLoop: n.length === s.length,
            options: e
          };
          this.updateElement(i, void 0, o, t);
        }
        this.updateElements(s, 0, s.length, t);
      }
      updateElements(t, e, i, s) {
        const n = this._cachedMeta.rScale,
          o = "reset" === s;
        for (let a = e; a < e + i; a++) {
          const e = t[a],
            i = this.resolveDataElementOptions(a, e.active ? "active" : s),
            r = n.getPointPositionForValue(a, this.getParsed(a).r),
            l = o ? n.xCenter : r.x,
            h = o ? n.yCenter : r.y,
            c = {
              x: l,
              y: h,
              angle: r.angle,
              skip: isNaN(l) || isNaN(h),
              options: i
            };
          this.updateElement(e, a, c, s);
        }
      }
    },
    ScatterController: class extends Ns {
      static id = "scatter";
      static defaults = {
        datasetElementType: !1,
        dataElementType: "point",
        showLine: !1,
        fill: !1
      };
      static overrides = {
        interaction: {
          mode: "point"
        },
        scales: {
          x: {
            type: "linear"
          },
          y: {
            type: "linear"
          }
        }
      };
      getLabelAndValue(t) {
        const e = this._cachedMeta,
          i = this.chart.data.labels || [],
          {
            xScale: s,
            yScale: n
          } = e,
          o = this.getParsed(t),
          a = s.getLabelForValue(o.x),
          r = n.getLabelForValue(o.y);
        return {
          label: i[t] || "",
          value: "(" + a + ", " + r + ")"
        };
      }
      update(t) {
        const e = this._cachedMeta,
          {
            data: i = []
          } = e,
          s = this.chart._animationsDisabled;
        let {
          start: n,
          count: o
        } = pt(e, i, s);
        if (this._drawStart = n, this._drawCount = o, mt(e) && (n = 0, o = i.length), this.options.showLine) {
          this.datasetElementType || this.addElements();
          const {
            dataset: n,
            _dataset: o
          } = e;
          n._chart = this.chart, n._datasetIndex = this.index, n._decimated = !!o._decimated, n.points = i;
          const a = this.resolveDatasetElementOptions(t);
          a.segment = this.options.segment, this.updateElement(n, void 0, {
            animated: !s,
            options: a
          }, t);
        } else this.datasetElementType && (delete e.dataset, this.datasetElementType = !1);
        this.updateElements(i, n, o, t);
      }
      addElements() {
        const {
          showLine: t
        } = this.options;
        !this.datasetElementType && t && (this.datasetElementType = this.chart.registry.getElement("line")), super.addElements();
      }
      updateElements(t, e, i, n) {
        const o = "reset" === n,
          {
            iScale: a,
            vScale: r,
            _stacked: l,
            _dataset: h
          } = this._cachedMeta,
          c = this.resolveDataElementOptions(e, n),
          d = this.getSharedOptions(c),
          u = this.includeOptions(n, d),
          f = a.axis,
          g = r.axis,
          {
            spanGaps: p,
            segment: m
          } = this.options,
          b = N(p) ? p : Number.POSITIVE_INFINITY,
          x = this.chart._animationsDisabled || o || "none" === n;
        let _ = e > 0 && this.getParsed(e - 1);
        for (let c = e; c < e + i; ++c) {
          const e = t[c],
            i = this.getParsed(c),
            p = x ? e : {},
            y = s(i[g]),
            v = p[f] = a.getPixelForValue(i[f], c),
            M = p[g] = o || y ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, i, l) : i[g], c);
          p.skip = isNaN(v) || isNaN(M) || y, p.stop = c > 0 && Math.abs(i[f] - _[f]) > b, m && (p.parsed = i, p.raw = h.data[c]), u && (p.options = d || this.resolveDataElementOptions(c, e.active ? "active" : n)), x || this.updateElement(e, c, p, n), _ = i;
        }
        this.updateSharedOptions(d, n, c);
      }
      getMaxOverflow() {
        const t = this._cachedMeta,
          e = t.data || [];
        if (!this.options.showLine) {
          let t = 0;
          for (let i = e.length - 1; i >= 0; --i) t = Math.max(t, e[i].size(this.resolveDataElementOptions(i)) / 2);
          return t > 0 && t;
        }
        const i = t.dataset,
          s = i.options && i.options.borderWidth || 0;
        if (!e.length) return s;
        const n = e[0].size(this.resolveDataElementOptions(0)),
          o = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1));
        return Math.max(s, n, o) / 2;
      }
    }
  });
  function Yn(t, e, i, s) {
    const n = vi(t.options.borderRadius, ["outerStart", "outerEnd", "innerStart", "innerEnd"]);
    const o = (i - e) / 2,
      a = Math.min(o, s * e / 2),
      r = t => {
        const e = (i - Math.min(o, t)) * s / 2;
        return J(t, 0, Math.min(o, e));
      };
    return {
      outerStart: r(n.outerStart),
      outerEnd: r(n.outerEnd),
      innerStart: J(n.innerStart, 0, a),
      innerEnd: J(n.innerEnd, 0, a)
    };
  }
  function Un(t, e, i, s) {
    return {
      x: i + t * Math.cos(e),
      y: s + t * Math.sin(e)
    };
  }
  function Xn(t, e, i, s, n, o) {
    const {
        x: a,
        y: r,
        startAngle: l,
        pixelMargin: h,
        innerRadius: c
      } = e,
      d = Math.max(e.outerRadius + s + i - h, 0),
      u = c > 0 ? c + s + i + h : 0;
    let f = 0;
    const g = n - l;
    if (s) {
      const t = ((c > 0 ? c - s : 0) + (d > 0 ? d - s : 0)) / 2;
      f = (g - (0 !== t ? g * t / (t + s) : g)) / 2;
    }
    const p = (g - Math.max(.001, g * d - i / C) / d) / 2,
      m = l + p + f,
      b = n - p - f,
      {
        outerStart: x,
        outerEnd: _,
        innerStart: y,
        innerEnd: v
      } = Yn(e, u, d, b - m),
      M = d - x,
      w = d - _,
      k = m + x / M,
      S = b - _ / w,
      P = u + y,
      D = u + v,
      O = m + y / P,
      A = b - v / D;
    if (t.beginPath(), o) {
      const e = (k + S) / 2;
      if (t.arc(a, r, d, k, e), t.arc(a, r, d, e, S), _ > 0) {
        const e = Un(w, S, a, r);
        t.arc(e.x, e.y, _, S, b + E);
      }
      const i = Un(D, b, a, r);
      if (t.lineTo(i.x, i.y), v > 0) {
        const e = Un(D, A, a, r);
        t.arc(e.x, e.y, v, b + E, A + Math.PI);
      }
      const s = (b - v / u + (m + y / u)) / 2;
      if (t.arc(a, r, u, b - v / u, s, !0), t.arc(a, r, u, s, m + y / u, !0), y > 0) {
        const e = Un(P, O, a, r);
        t.arc(e.x, e.y, y, O + Math.PI, m - E);
      }
      const n = Un(M, m, a, r);
      if (t.lineTo(n.x, n.y), x > 0) {
        const e = Un(M, k, a, r);
        t.arc(e.x, e.y, x, m - E, k);
      }
    } else {
      t.moveTo(a, r);
      const e = Math.cos(k) * d + a,
        i = Math.sin(k) * d + r;
      t.lineTo(e, i);
      const s = Math.cos(S) * d + a,
        n = Math.sin(S) * d + r;
      t.lineTo(s, n);
    }
    t.closePath();
  }
  function qn(t, e, i, s, n) {
    const {
        fullCircles: o,
        startAngle: a,
        circumference: r,
        options: l
      } = e,
      {
        borderWidth: h,
        borderJoinStyle: c,
        borderDash: d,
        borderDashOffset: u
      } = l,
      f = "inner" === l.borderAlign;
    if (!h) return;
    t.setLineDash(d || []), t.lineDashOffset = u, f ? (t.lineWidth = 2 * h, t.lineJoin = c || "round") : (t.lineWidth = h, t.lineJoin = c || "bevel");
    let g = e.endAngle;
    if (o) {
      Xn(t, e, i, s, g, n);
      for (let e = 0; e < o; ++e) t.stroke();
      isNaN(r) || (g = a + (r % O || O));
    }
    f && function (t, e, i) {
      const {
        startAngle: s,
        pixelMargin: n,
        x: o,
        y: a,
        outerRadius: r,
        innerRadius: l
      } = e;
      let h = n / r;
      t.beginPath(), t.arc(o, a, r, s - h, i + h), l > n ? (h = n / l, t.arc(o, a, l, i + h, s - h, !0)) : t.arc(o, a, n, i + E, s - E), t.closePath(), t.clip();
    }(t, e, g), o || (Xn(t, e, i, s, g, n), t.stroke());
  }
  function Kn(t, e) {
    let i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : e;
    t.lineCap = l(i.borderCapStyle, e.borderCapStyle), t.setLineDash(l(i.borderDash, e.borderDash)), t.lineDashOffset = l(i.borderDashOffset, e.borderDashOffset), t.lineJoin = l(i.borderJoinStyle, e.borderJoinStyle), t.lineWidth = l(i.borderWidth, e.borderWidth), t.strokeStyle = l(i.borderColor, e.borderColor);
  }
  function Gn(t, e, i) {
    t.lineTo(i.x, i.y);
  }
  function Zn(t, e) {
    let i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const s = t.length,
      {
        start: n = 0,
        end: o = s - 1
      } = i,
      {
        start: a,
        end: r
      } = e,
      l = Math.max(n, a),
      h = Math.min(o, r),
      c = n < a && o < a || n > r && o > r;
    return {
      count: s,
      start: l,
      loop: e.loop,
      ilen: h < l && !c ? s + h - l : h - l
    };
  }
  function Jn(t, e, i, s) {
    const {
        points: n,
        options: o
      } = e,
      {
        count: a,
        start: r,
        loop: l,
        ilen: h
      } = Zn(n, i, s),
      c = function (t) {
        return t.stepped ? Fe : t.tension || "monotone" === t.cubicInterpolationMode ? Ve : Gn;
      }(o);
    let d,
      u,
      f,
      {
        move: g = !0,
        reverse: p
      } = s || {};
    for (d = 0; d <= h; ++d) u = n[(r + (p ? h - d : d)) % a], u.skip || (g ? (t.moveTo(u.x, u.y), g = !1) : c(t, f, u, p, o.stepped), f = u);
    return l && (u = n[(r + (p ? h : 0)) % a], c(t, f, u, p, o.stepped)), !!l;
  }
  function Qn(t, e, i, s) {
    const n = e.points,
      {
        count: o,
        start: a,
        ilen: r
      } = Zn(n, i, s),
      {
        move: l = !0,
        reverse: h
      } = s || {};
    let c,
      d,
      u,
      f,
      g,
      p,
      m = 0,
      b = 0;
    const x = t => (a + (h ? r - t : t)) % o,
      _ = () => {
        f !== g && (t.lineTo(m, g), t.lineTo(m, f), t.lineTo(m, p));
      };
    for (l && (d = n[x(0)], t.moveTo(d.x, d.y)), c = 0; c <= r; ++c) {
      if (d = n[x(c)], d.skip) continue;
      const e = d.x,
        i = d.y,
        s = 0 | e;
      s === u ? (i < f ? f = i : i > g && (g = i), m = (b * m + e) / ++b) : (_(), t.lineTo(e, i), u = s, b = 0, f = g = i), p = i;
    }
    _();
  }
  function to(t) {
    const e = t.options,
      i = e.borderDash && e.borderDash.length;
    return !(t._decimated || t._loop || e.tension || "monotone" === e.cubicInterpolationMode || e.stepped || i) ? Qn : Jn;
  }
  const eo = "function" == typeof Path2D;
  function io(t, e, i, s) {
    eo && !e.options.segment ? function (t, e, i, s) {
      let n = e._path;
      n || (n = e._path = new Path2D(), e.path(n, i, s) && n.closePath()), Kn(t, e.options), t.stroke(n);
    }(t, e, i, s) : function (t, e, i, s) {
      const {
          segments: n,
          options: o
        } = e,
        a = to(e);
      for (const r of n) Kn(t, o, r.style), t.beginPath(), a(t, e, r, {
        start: i,
        end: i + s - 1
      }) && t.closePath(), t.stroke();
    }(t, e, i, s);
  }
  class so extends Hs {
    static id = "line";
    static defaults = {
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0,
      borderJoinStyle: "miter",
      borderWidth: 3,
      capBezierPoints: !0,
      cubicInterpolationMode: "default",
      fill: !1,
      spanGaps: !1,
      stepped: !1,
      tension: 0
    };
    static defaultRoutes = {
      backgroundColor: "backgroundColor",
      borderColor: "borderColor"
    };
    static descriptors = {
      _scriptable: !0,
      _indexable: t => "borderDash" !== t && "fill" !== t
    };
    constructor(t) {
      super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t);
    }
    updateControlPoints(t, e) {
      const i = this.options;
      if ((i.tension || "monotone" === i.cubicInterpolationMode) && !i.stepped && !this._pointsUpdated) {
        const s = i.spanGaps ? this._loop : this._fullLoop;
        hi(this._points, i, t, s, e), this._pointsUpdated = !0;
      }
    }
    set points(t) {
      this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1;
    }
    get points() {
      return this._points;
    }
    get segments() {
      return this._segments || (this._segments = zi(this, this.options.segment));
    }
    first() {
      const t = this.segments,
        e = this.points;
      return t.length && e[t[0].start];
    }
    last() {
      const t = this.segments,
        e = this.points,
        i = t.length;
      return i && e[t[i - 1].end];
    }
    interpolate(t, e) {
      const i = this.options,
        s = t[e],
        n = this.points,
        o = Ii(this, {
          property: e,
          start: s,
          end: s
        });
      if (!o.length) return;
      const a = [],
        r = function (t) {
          return t.stepped ? pi : t.tension || "monotone" === t.cubicInterpolationMode ? mi : gi;
        }(i);
      let l, h;
      for (l = 0, h = o.length; l < h; ++l) {
        const {
            start: h,
            end: c
          } = o[l],
          d = n[h],
          u = n[c];
        if (d === u) {
          a.push(d);
          continue;
        }
        const f = r(d, u, Math.abs((s - d[e]) / (u[e] - d[e])), i.stepped);
        f[e] = t[e], a.push(f);
      }
      return 1 === a.length ? a[0] : a;
    }
    pathSegment(t, e, i) {
      return to(this)(t, this, e, i);
    }
    path(t, e, i) {
      const s = this.segments,
        n = to(this);
      let o = this._loop;
      e = e || 0, i = i || this.points.length - e;
      for (const a of s) o &= n(t, this, a, {
        start: e,
        end: e + i - 1
      });
      return !!o;
    }
    draw(t, e, i, s) {
      const n = this.options || {};
      (this.points || []).length && n.borderWidth && (t.save(), io(t, this, i, s), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
    }
  }
  function no(t, e, i, s) {
    const n = t.options,
      {
        [i]: o
      } = t.getProps([i], s);
    return Math.abs(e - o) < n.radius + n.hitRadius;
  }
  function oo(t, e) {
    const {
      x: i,
      y: s,
      base: n,
      width: o,
      height: a
    } = t.getProps(["x", "y", "base", "width", "height"], e);
    let r, l, h, c, d;
    return t.horizontal ? (d = a / 2, r = Math.min(i, n), l = Math.max(i, n), h = s - d, c = s + d) : (d = o / 2, r = i - d, l = i + d, h = Math.min(s, n), c = Math.max(s, n)), {
      left: r,
      top: h,
      right: l,
      bottom: c
    };
  }
  function ao(t, e, i, s) {
    return t ? 0 : J(e, i, s);
  }
  function ro(t) {
    const e = oo(t),
      i = e.right - e.left,
      s = e.bottom - e.top,
      n = function (t, e, i) {
        const s = t.options.borderWidth,
          n = t.borderSkipped,
          o = Mi(s);
        return {
          t: ao(n.top, o.top, 0, i),
          r: ao(n.right, o.right, 0, e),
          b: ao(n.bottom, o.bottom, 0, i),
          l: ao(n.left, o.left, 0, e)
        };
      }(t, i / 2, s / 2),
      a = function (t, e, i) {
        const {
            enableBorderRadius: s
          } = t.getProps(["enableBorderRadius"]),
          n = t.options.borderRadius,
          a = wi(n),
          r = Math.min(e, i),
          l = t.borderSkipped,
          h = s || o(n);
        return {
          topLeft: ao(!h || l.top || l.left, a.topLeft, 0, r),
          topRight: ao(!h || l.top || l.right, a.topRight, 0, r),
          bottomLeft: ao(!h || l.bottom || l.left, a.bottomLeft, 0, r),
          bottomRight: ao(!h || l.bottom || l.right, a.bottomRight, 0, r)
        };
      }(t, i / 2, s / 2);
    return {
      outer: {
        x: e.left,
        y: e.top,
        w: i,
        h: s,
        radius: a
      },
      inner: {
        x: e.left + n.l,
        y: e.top + n.t,
        w: i - n.l - n.r,
        h: s - n.t - n.b,
        radius: {
          topLeft: Math.max(0, a.topLeft - Math.max(n.t, n.l)),
          topRight: Math.max(0, a.topRight - Math.max(n.t, n.r)),
          bottomLeft: Math.max(0, a.bottomLeft - Math.max(n.b, n.l)),
          bottomRight: Math.max(0, a.bottomRight - Math.max(n.b, n.r))
        }
      }
    };
  }
  function lo(t, e, i, s) {
    const n = null === e,
      o = null === i,
      a = t && !(n && o) && oo(t, s);
    return a && (n || tt(e, a.left, a.right)) && (o || tt(i, a.top, a.bottom));
  }
  function ho(t, e) {
    t.rect(e.x, e.y, e.w, e.h);
  }
  function co(t, e) {
    let i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const s = t.x !== i.x ? -e : 0,
      n = t.y !== i.y ? -e : 0,
      o = (t.x + t.w !== i.x + i.w ? e : 0) - s,
      a = (t.y + t.h !== i.y + i.h ? e : 0) - n;
    return {
      x: t.x + s,
      y: t.y + n,
      w: t.w + o,
      h: t.h + a,
      radius: t.radius
    };
  }
  var uo = Object.freeze({
    __proto__: null,
    ArcElement: class extends Hs {
      static id = "arc";
      static defaults = {
        borderAlign: "center",
        borderColor: "#fff",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: void 0,
        borderRadius: 0,
        borderWidth: 2,
        offset: 0,
        spacing: 0,
        angle: void 0,
        circular: !0
      };
      static defaultRoutes = {
        backgroundColor: "backgroundColor"
      };
      static descriptors = {
        _scriptable: !0,
        _indexable: t => "borderDash" !== t
      };
      circumference;
      endAngle;
      fullCircles;
      innerRadius;
      outerRadius;
      pixelMargin;
      startAngle;
      constructor(t) {
        super(), this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, t && Object.assign(this, t);
      }
      inRange(t, e, i) {
        const s = this.getProps(["x", "y"], i),
          {
            angle: n,
            distance: o
          } = X(s, {
            x: t,
            y: e
          }),
          {
            startAngle: a,
            endAngle: r,
            innerRadius: h,
            outerRadius: c,
            circumference: d
          } = this.getProps(["startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], i),
          u = (this.options.spacing + this.options.borderWidth) / 2,
          f = l(d, r - a) >= O || Z(n, a, r),
          g = tt(o, h + u, c + u);
        return f && g;
      }
      getCenterPoint(t) {
        const {
            x: e,
            y: i,
            startAngle: s,
            endAngle: n,
            innerRadius: o,
            outerRadius: a
          } = this.getProps(["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"], t),
          {
            offset: r,
            spacing: l
          } = this.options,
          h = (s + n) / 2,
          c = (o + a + l + r) / 2;
        return {
          x: e + Math.cos(h) * c,
          y: i + Math.sin(h) * c
        };
      }
      tooltipPosition(t) {
        return this.getCenterPoint(t);
      }
      draw(t) {
        const {
            options: e,
            circumference: i
          } = this,
          s = (e.offset || 0) / 4,
          n = (e.spacing || 0) / 2,
          o = e.circular;
        if (this.pixelMargin = "inner" === e.borderAlign ? .33 : 0, this.fullCircles = i > O ? Math.floor(i / O) : 0, 0 === i || this.innerRadius < 0 || this.outerRadius < 0) return;
        t.save();
        const a = (this.startAngle + this.endAngle) / 2;
        t.translate(Math.cos(a) * s, Math.sin(a) * s);
        const r = s * (1 - Math.sin(Math.min(C, i || 0)));
        t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor, function (t, e, i, s, n) {
          const {
            fullCircles: o,
            startAngle: a,
            circumference: r
          } = e;
          let l = e.endAngle;
          if (o) {
            Xn(t, e, i, s, l, n);
            for (let e = 0; e < o; ++e) t.fill();
            isNaN(r) || (l = a + (r % O || O));
          }
          Xn(t, e, i, s, l, n), t.fill();
        }(t, this, r, n, o), qn(t, this, r, n, o), t.restore();
      }
    },
    BarElement: class extends Hs {
      static id = "bar";
      static defaults = {
        borderSkipped: "start",
        borderWidth: 0,
        borderRadius: 0,
        inflateAmount: "auto",
        pointStyle: void 0
      };
      static defaultRoutes = {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor"
      };
      constructor(t) {
        super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, t && Object.assign(this, t);
      }
      draw(t) {
        const {
            inflateAmount: e,
            options: {
              borderColor: i,
              backgroundColor: s
            }
          } = this,
          {
            inner: n,
            outer: o
          } = ro(this),
          a = (r = o.radius).topLeft || r.topRight || r.bottomLeft || r.bottomRight ? He : ho;
        var r;
        t.save(), o.w === n.w && o.h === n.h || (t.beginPath(), a(t, co(o, e, n)), t.clip(), a(t, co(n, -e, o)), t.fillStyle = i, t.fill("evenodd")), t.beginPath(), a(t, co(n, e)), t.fillStyle = s, t.fill(), t.restore();
      }
      inRange(t, e, i) {
        return lo(this, t, e, i);
      }
      inXRange(t, e) {
        return lo(this, t, null, e);
      }
      inYRange(t, e) {
        return lo(this, null, t, e);
      }
      getCenterPoint(t) {
        const {
          x: e,
          y: i,
          base: s,
          horizontal: n
        } = this.getProps(["x", "y", "base", "horizontal"], t);
        return {
          x: n ? (e + s) / 2 : e,
          y: n ? i : (i + s) / 2
        };
      }
      getRange(t) {
        return "x" === t ? this.width / 2 : this.height / 2;
      }
    },
    LineElement: so,
    PointElement: class extends Hs {
      static id = "point";
      parsed;
      skip;
      stop;
      static defaults = {
        borderWidth: 1,
        hitRadius: 1,
        hoverBorderWidth: 1,
        hoverRadius: 4,
        pointStyle: "circle",
        radius: 3,
        rotation: 0
      };
      static defaultRoutes = {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor"
      };
      constructor(t) {
        super(), this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, t && Object.assign(this, t);
      }
      inRange(t, e, i) {
        const s = this.options,
          {
            x: n,
            y: o
          } = this.getProps(["x", "y"], i);
        return Math.pow(t - n, 2) + Math.pow(e - o, 2) < Math.pow(s.hitRadius + s.radius, 2);
      }
      inXRange(t, e) {
        return no(this, t, "x", e);
      }
      inYRange(t, e) {
        return no(this, t, "y", e);
      }
      getCenterPoint(t) {
        const {
          x: e,
          y: i
        } = this.getProps(["x", "y"], t);
        return {
          x: e,
          y: i
        };
      }
      size(t) {
        let e = (t = t || this.options || {}).radius || 0;
        e = Math.max(e, e && t.hoverRadius || 0);
        return 2 * (e + (e && t.borderWidth || 0));
      }
      draw(t, e) {
        const i = this.options;
        this.skip || i.radius < .1 || !Re(this, e, this.size(i) / 2) || (t.strokeStyle = i.borderColor, t.lineWidth = i.borderWidth, t.fillStyle = i.backgroundColor, Le(t, i, this.x, this.y));
      }
      getRange() {
        const t = this.options || {};
        return t.radius + t.hitRadius;
      }
    }
  });
  function fo(t, e, i, s) {
    const n = t.indexOf(e);
    if (-1 === n) return ((t, e, i, s) => ("string" == typeof e ? (i = t.push(e) - 1, s.unshift({
      index: i,
      label: e
    })) : isNaN(e) && (i = null), i))(t, e, i, s);
    return n !== t.lastIndexOf(e) ? i : n;
  }
  function go(t) {
    const e = this.getLabels();
    return t >= 0 && t < e.length ? e[t] : t;
  }
  function po(t, e, _ref6) {
    let {
      horizontal: i,
      minRotation: s
    } = _ref6;
    const n = $(s),
      o = (i ? Math.sin(n) : Math.cos(n)) || .001,
      a = .75 * e * ("" + t).length;
    return Math.min(e / o, a);
  }
  class mo extends Js {
    constructor(t) {
      super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
    }
    parse(t, e) {
      return s(t) || ("number" == typeof t || t instanceof Number) && !isFinite(+t) ? null : +t;
    }
    handleTickRangeOptions() {
      const {
          beginAtZero: t
        } = this.options,
        {
          minDefined: e,
          maxDefined: i
        } = this.getUserBounds();
      let {
        min: s,
        max: n
      } = this;
      const o = t => s = e ? s : t,
        a = t => n = i ? n : t;
      if (t) {
        const t = F(s),
          e = F(n);
        t < 0 && e < 0 ? a(0) : t > 0 && e > 0 && o(0);
      }
      if (s === n) {
        let e = 0 === n ? 1 : Math.abs(.05 * n);
        a(n + e), t || o(s - e);
      }
      this.min = s, this.max = n;
    }
    getTickLimit() {
      const t = this.options.ticks;
      let e,
        {
          maxTicksLimit: i,
          stepSize: s
        } = t;
      return s ? (e = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1, e > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${e} ticks. Limiting to 1000.`), e = 1e3)) : (e = this.computeTickLimit(), i = i || 11), i && (e = Math.min(i, e)), e;
    }
    computeTickLimit() {
      return Number.POSITIVE_INFINITY;
    }
    buildTicks() {
      const t = this.options,
        e = t.ticks;
      let i = this.getTickLimit();
      i = Math.max(2, i);
      const n = function (t, e) {
        const i = [],
          {
            bounds: n,
            step: o,
            min: a,
            max: r,
            precision: l,
            count: h,
            maxTicks: c,
            maxDigits: d,
            includeBounds: u
          } = t,
          f = o || 1,
          g = c - 1,
          {
            min: p,
            max: m
          } = e,
          b = !s(a),
          x = !s(r),
          _ = !s(h),
          y = (m - p) / (d + 1);
        let v,
          M,
          w,
          k,
          S = B((m - p) / g / f) * f;
        if (S < 1e-14 && !b && !x) return [{
          value: p
        }, {
          value: m
        }];
        k = Math.ceil(m / S) - Math.floor(p / S), k > g && (S = B(k * S / g / f) * f), s(l) || (v = Math.pow(10, l), S = Math.ceil(S * v) / v), "ticks" === n ? (M = Math.floor(p / S) * S, w = Math.ceil(m / S) * S) : (M = p, w = m), b && x && o && H((r - a) / o, S / 1e3) ? (k = Math.round(Math.min((r - a) / S, c)), S = (r - a) / k, M = a, w = r) : _ ? (M = b ? a : M, w = x ? r : w, k = h - 1, S = (w - M) / k) : (k = (w - M) / S, k = V(k, Math.round(k), S / 1e3) ? Math.round(k) : Math.ceil(k));
        const P = Math.max(U(S), U(M));
        v = Math.pow(10, s(l) ? P : l), M = Math.round(M * v) / v, w = Math.round(w * v) / v;
        let D = 0;
        for (b && (u && M !== a ? (i.push({
          value: a
        }), M < a && D++, V(Math.round((M + D * S) * v) / v, a, po(a, y, t)) && D++) : M < a && D++); D < k; ++D) {
          const t = Math.round((M + D * S) * v) / v;
          if (x && t > r) break;
          i.push({
            value: t
          });
        }
        return x && u && w !== r ? i.length && V(i[i.length - 1].value, r, po(r, y, t)) ? i[i.length - 1].value = r : i.push({
          value: r
        }) : x && w !== r || i.push({
          value: w
        }), i;
      }({
        maxTicks: i,
        bounds: t.bounds,
        min: t.min,
        max: t.max,
        precision: e.precision,
        step: e.stepSize,
        count: e.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: e.minRotation || 0,
        includeBounds: !1 !== e.includeBounds
      }, this._range || this);
      return "ticks" === t.bounds && j(n, this, "value"), t.reverse ? (n.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), n;
    }
    configure() {
      const t = this.ticks;
      let e = this.min,
        i = this.max;
      if (super.configure(), this.options.offset && t.length) {
        const s = (i - e) / Math.max(t.length - 1, 1) / 2;
        e -= s, i += s;
      }
      this._startValue = e, this._endValue = i, this._valueRange = i - e;
    }
    getLabelForValue(t) {
      return ne(t, this.chart.options.locale, this.options.ticks.format);
    }
  }
  class bo extends mo {
    static id = "linear";
    static defaults = {
      ticks: {
        callback: ae.formatters.numeric
      }
    };
    determineDataLimits() {
      const {
        min: t,
        max: e
      } = this.getMinMax(!0);
      this.min = a(t) ? t : 0, this.max = a(e) ? e : 1, this.handleTickRangeOptions();
    }
    computeTickLimit() {
      const t = this.isHorizontal(),
        e = t ? this.width : this.height,
        i = $(this.options.ticks.minRotation),
        s = (t ? Math.sin(i) : Math.cos(i)) || .001,
        n = this._resolveTickFontOptions(0);
      return Math.ceil(e / Math.min(40, n.lineHeight / s));
    }
    getPixelForValue(t) {
      return null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
    }
    getValueForPixel(t) {
      return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
    }
  }
  const xo = t => Math.floor(z(t)),
    _o = (t, e) => Math.pow(10, xo(t) + e);
  function yo(t) {
    return 1 === t / Math.pow(10, xo(t));
  }
  function vo(t, e, i) {
    const s = Math.pow(10, i),
      n = Math.floor(t / s);
    return Math.ceil(e / s) - n;
  }
  function Mo(t, _ref7) {
    let {
      min: e,
      max: i
    } = _ref7;
    e = r(t.min, e);
    const s = [],
      n = xo(e);
    let o = function (t, e) {
        let i = xo(e - t);
        for (; vo(t, e, i) > 10;) i++;
        for (; vo(t, e, i) < 10;) i--;
        return Math.min(i, xo(t));
      }(e, i),
      a = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
    const l = Math.pow(10, o),
      h = n > o ? Math.pow(10, n) : 0,
      c = Math.round((e - h) * a) / a,
      d = Math.floor((e - h) / l / 10) * l * 10;
    let u = Math.floor((c - d) / Math.pow(10, o)),
      f = r(t.min, Math.round((h + d + u * Math.pow(10, o)) * a) / a);
    for (; f < i;) s.push({
      value: f,
      major: yo(f),
      significand: u
    }), u >= 10 ? u = u < 15 ? 15 : 20 : u++, u >= 20 && (o++, u = 2, a = o >= 0 ? 1 : a), f = Math.round((h + d + u * Math.pow(10, o)) * a) / a;
    const g = r(t.max, f);
    return s.push({
      value: g,
      major: yo(g),
      significand: u
    }), s;
  }
  class wo extends Js {
    static id = "logarithmic";
    static defaults = {
      ticks: {
        callback: ae.formatters.logarithmic,
        major: {
          enabled: !0
        }
      }
    };
    constructor(t) {
      super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0;
    }
    parse(t, e) {
      const i = mo.prototype.parse.apply(this, [t, e]);
      if (0 !== i) return a(i) && i > 0 ? i : null;
      this._zero = !0;
    }
    determineDataLimits() {
      const {
        min: t,
        max: e
      } = this.getMinMax(!0);
      this.min = a(t) ? Math.max(0, t) : null, this.max = a(e) ? Math.max(0, e) : null, this.options.beginAtZero && (this._zero = !0), this._zero && this.min !== this._suggestedMin && !a(this._userMin) && (this.min = t === _o(this.min, 0) ? _o(this.min, -1) : _o(this.min, 0)), this.handleTickRangeOptions();
    }
    handleTickRangeOptions() {
      const {
        minDefined: t,
        maxDefined: e
      } = this.getUserBounds();
      let i = this.min,
        s = this.max;
      const n = e => i = t ? i : e,
        o = t => s = e ? s : t;
      i === s && (i <= 0 ? (n(1), o(10)) : (n(_o(i, -1)), o(_o(s, 1)))), i <= 0 && n(_o(s, -1)), s <= 0 && o(_o(i, 1)), this.min = i, this.max = s;
    }
    buildTicks() {
      const t = this.options,
        e = Mo({
          min: this._userMin,
          max: this._userMax
        }, this);
      return "ticks" === t.bounds && j(e, this, "value"), t.reverse ? (e.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), e;
    }
    getLabelForValue(t) {
      return void 0 === t ? "0" : ne(t, this.chart.options.locale, this.options.ticks.format);
    }
    configure() {
      const t = this.min;
      super.configure(), this._startValue = z(t), this._valueRange = z(this.max) - z(t);
    }
    getPixelForValue(t) {
      return void 0 !== t && 0 !== t || (t = this.min), null === t || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (z(t) - this._startValue) / this._valueRange);
    }
    getValueForPixel(t) {
      const e = this.getDecimalForPixel(t);
      return Math.pow(10, this._startValue + e * this._valueRange);
    }
  }
  function ko(t) {
    const e = t.ticks;
    if (e.display && t.display) {
      const t = ki(e.backdropPadding);
      return l(e.font && e.font.size, ue.font.size) + t.height;
    }
    return 0;
  }
  function So(t, e, i, s, n) {
    return t === s || t === n ? {
      start: e - i / 2,
      end: e + i / 2
    } : t < s || t > n ? {
      start: e - i,
      end: e
    } : {
      start: e,
      end: e + i
    };
  }
  function Po(t) {
    const e = {
        l: t.left + t._padding.left,
        r: t.right - t._padding.right,
        t: t.top + t._padding.top,
        b: t.bottom - t._padding.bottom
      },
      i = Object.assign({}, e),
      s = [],
      o = [],
      a = t._pointLabels.length,
      r = t.options.pointLabels,
      l = r.centerPointLabels ? C / a : 0;
    for (let u = 0; u < a; u++) {
      const a = r.setContext(t.getPointLabelContext(u));
      o[u] = a.padding;
      const f = t.getPointPosition(u, t.drawingArea + o[u], l),
        g = Si(a.font),
        p = (h = t.ctx, c = g, d = n(d = t._pointLabels[u]) ? d : [d], {
          w: Oe(h, c.string, d),
          h: d.length * c.lineHeight
        });
      s[u] = p;
      const m = G(t.getIndexAngle(u) + l),
        b = Math.round(Y(m));
      Do(i, e, m, So(b, f.x, p.w, 0, 180), So(b, f.y, p.h, 90, 270));
    }
    var h, c, d;
    t.setCenterPoint(e.l - i.l, i.r - e.r, e.t - i.t, i.b - e.b), t._pointLabelItems = function (t, e, i) {
      const s = [],
        n = t._pointLabels.length,
        o = t.options,
        {
          centerPointLabels: a,
          display: r
        } = o.pointLabels,
        l = {
          extra: ko(o) / 2,
          additionalAngle: a ? C / n : 0
        };
      let h;
      for (let o = 0; o < n; o++) {
        l.padding = i[o], l.size = e[o];
        const n = Co(t, o, l);
        s.push(n), "auto" === r && (n.visible = Oo(n, h), n.visible && (h = n));
      }
      return s;
    }(t, s, o);
  }
  function Do(t, e, i, s, n) {
    const o = Math.abs(Math.sin(i)),
      a = Math.abs(Math.cos(i));
    let r = 0,
      l = 0;
    s.start < e.l ? (r = (e.l - s.start) / o, t.l = Math.min(t.l, e.l - r)) : s.end > e.r && (r = (s.end - e.r) / o, t.r = Math.max(t.r, e.r + r)), n.start < e.t ? (l = (e.t - n.start) / a, t.t = Math.min(t.t, e.t - l)) : n.end > e.b && (l = (n.end - e.b) / a, t.b = Math.max(t.b, e.b + l));
  }
  function Co(t, e, i) {
    const s = t.drawingArea,
      {
        extra: n,
        additionalAngle: o,
        padding: a,
        size: r
      } = i,
      l = t.getPointPosition(e, s + n + a, o),
      h = Math.round(Y(G(l.angle + E))),
      c = function (t, e, i) {
        90 === i || 270 === i ? t -= e / 2 : (i > 270 || i < 90) && (t -= e);
        return t;
      }(l.y, r.h, h),
      d = function (t) {
        if (0 === t || 180 === t) return "center";
        if (t < 180) return "left";
        return "right";
      }(h),
      u = function (t, e, i) {
        "right" === i ? t -= e : "center" === i && (t -= e / 2);
        return t;
      }(l.x, r.w, d);
    return {
      visible: !0,
      x: l.x,
      y: c,
      textAlign: d,
      left: u,
      top: c,
      right: u + r.w,
      bottom: c + r.h
    };
  }
  function Oo(t, e) {
    if (!e) return !0;
    const {
      left: i,
      top: s,
      right: n,
      bottom: o
    } = t;
    return !(Re({
      x: i,
      y: s
    }, e) || Re({
      x: i,
      y: o
    }, e) || Re({
      x: n,
      y: s
    }, e) || Re({
      x: n,
      y: o
    }, e));
  }
  function Ao(t, e, i) {
    const {
        left: n,
        top: o,
        right: a,
        bottom: r
      } = i,
      {
        backdropColor: l
      } = e;
    if (!s(l)) {
      const i = wi(e.borderRadius),
        s = ki(e.backdropPadding);
      t.fillStyle = l;
      const h = n - s.left,
        c = o - s.top,
        d = a - n + s.width,
        u = r - o + s.height;
      Object.values(i).some(t => 0 !== t) ? (t.beginPath(), He(t, {
        x: h,
        y: c,
        w: d,
        h: u,
        radius: i
      }), t.fill()) : t.fillRect(h, c, d, u);
    }
  }
  function To(t, e, i, s) {
    const {
      ctx: n
    } = t;
    if (i) n.arc(t.xCenter, t.yCenter, e, 0, O);else {
      let i = t.getPointPosition(0, e);
      n.moveTo(i.x, i.y);
      for (let o = 1; o < s; o++) i = t.getPointPosition(o, e), n.lineTo(i.x, i.y);
    }
  }
  class Lo extends mo {
    static id = "radialLinear";
    static defaults = {
      display: !0,
      animate: !0,
      position: "chartArea",
      angleLines: {
        display: !0,
        lineWidth: 1,
        borderDash: [],
        borderDashOffset: 0
      },
      grid: {
        circular: !1
      },
      startAngle: 0,
      ticks: {
        showLabelBackdrop: !0,
        callback: ae.formatters.numeric
      },
      pointLabels: {
        backdropColor: void 0,
        backdropPadding: 2,
        display: !0,
        font: {
          size: 10
        },
        callback: t => t,
        padding: 5,
        centerPointLabels: !1
      }
    };
    static defaultRoutes = {
      "angleLines.color": "borderColor",
      "pointLabels.color": "color",
      "ticks.color": "color"
    };
    static descriptors = {
      angleLines: {
        _fallback: "grid"
      }
    };
    constructor(t) {
      super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [];
    }
    setDimensions() {
      const t = this._padding = ki(ko(this.options) / 2),
        e = this.width = this.maxWidth - t.width,
        i = this.height = this.maxHeight - t.height;
      this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + i / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, i) / 2);
    }
    determineDataLimits() {
      const {
        min: t,
        max: e
      } = this.getMinMax(!1);
      this.min = a(t) && !isNaN(t) ? t : 0, this.max = a(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions();
    }
    computeTickLimit() {
      return Math.ceil(this.drawingArea / ko(this.options));
    }
    generateTickLabels(t) {
      mo.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((t, e) => {
        const i = d(this.options.pointLabels.callback, [t, e], this);
        return i || 0 === i ? i : "";
      }).filter((t, e) => this.chart.getDataVisibility(e));
    }
    fit() {
      const t = this.options;
      t.display && t.pointLabels.display ? Po(this) : this.setCenterPoint(0, 0, 0, 0);
    }
    setCenterPoint(t, e, i, s) {
      this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((i - s) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, i, s));
    }
    getIndexAngle(t) {
      return G(t * (O / (this._pointLabels.length || 1)) + $(this.options.startAngle || 0));
    }
    getDistanceFromCenterForValue(t) {
      if (s(t)) return NaN;
      const e = this.drawingArea / (this.max - this.min);
      return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
    }
    getValueForDistanceFromCenter(t) {
      if (s(t)) return NaN;
      const e = t / (this.drawingArea / (this.max - this.min));
      return this.options.reverse ? this.max - e : this.min + e;
    }
    getPointLabelContext(t) {
      const e = this._pointLabels || [];
      if (t >= 0 && t < e.length) {
        const i = e[t];
        return function (t, e, i) {
          return Ci(t, {
            label: i,
            index: e,
            type: "pointLabel"
          });
        }(this.getContext(), t, i);
      }
    }
    getPointPosition(t, e) {
      let i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      const s = this.getIndexAngle(t) - E + i;
      return {
        x: Math.cos(s) * e + this.xCenter,
        y: Math.sin(s) * e + this.yCenter,
        angle: s
      };
    }
    getPointPositionForValue(t, e) {
      return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
    }
    getBasePosition(t) {
      return this.getPointPositionForValue(t || 0, this.getBaseValue());
    }
    getPointLabelPosition(t) {
      const {
        left: e,
        top: i,
        right: s,
        bottom: n
      } = this._pointLabelItems[t];
      return {
        left: e,
        top: i,
        right: s,
        bottom: n
      };
    }
    drawBackground() {
      const {
        backgroundColor: t,
        grid: {
          circular: e
        }
      } = this.options;
      if (t) {
        const i = this.ctx;
        i.save(), i.beginPath(), To(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), i.closePath(), i.fillStyle = t, i.fill(), i.restore();
      }
    }
    drawGrid() {
      const t = this.ctx,
        e = this.options,
        {
          angleLines: i,
          grid: s,
          border: n
        } = e,
        o = this._pointLabels.length;
      let a, r, l;
      if (e.pointLabels.display && function (t, e) {
        const {
          ctx: i,
          options: {
            pointLabels: s
          }
        } = t;
        for (let n = e - 1; n >= 0; n--) {
          const e = t._pointLabelItems[n];
          if (!e.visible) continue;
          const o = s.setContext(t.getPointLabelContext(n));
          Ao(i, o, e);
          const a = Si(o.font),
            {
              x: r,
              y: l,
              textAlign: h
            } = e;
          Ne(i, t._pointLabels[n], r, l + a.lineHeight / 2, a, {
            color: o.color,
            textAlign: h,
            textBaseline: "middle"
          });
        }
      }(this, o), s.display && this.ticks.forEach((t, e) => {
        if (0 !== e) {
          r = this.getDistanceFromCenterForValue(t.value);
          const i = this.getContext(e),
            a = s.setContext(i),
            l = n.setContext(i);
          !function (t, e, i, s, n) {
            const o = t.ctx,
              a = e.circular,
              {
                color: r,
                lineWidth: l
              } = e;
            !a && !s || !r || !l || i < 0 || (o.save(), o.strokeStyle = r, o.lineWidth = l, o.setLineDash(n.dash), o.lineDashOffset = n.dashOffset, o.beginPath(), To(t, i, a, s), o.closePath(), o.stroke(), o.restore());
          }(this, a, r, o, l);
        }
      }), i.display) {
        for (t.save(), a = o - 1; a >= 0; a--) {
          const s = i.setContext(this.getPointLabelContext(a)),
            {
              color: n,
              lineWidth: o
            } = s;
          o && n && (t.lineWidth = o, t.strokeStyle = n, t.setLineDash(s.borderDash), t.lineDashOffset = s.borderDashOffset, r = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max), l = this.getPointPosition(a, r), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(l.x, l.y), t.stroke());
        }
        t.restore();
      }
    }
    drawBorder() {}
    drawLabels() {
      const t = this.ctx,
        e = this.options,
        i = e.ticks;
      if (!i.display) return;
      const s = this.getIndexAngle(0);
      let n, o;
      t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(s), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach((s, a) => {
        if (0 === a && !e.reverse) return;
        const r = i.setContext(this.getContext(a)),
          l = Si(r.font);
        if (n = this.getDistanceFromCenterForValue(this.ticks[a].value), r.showLabelBackdrop) {
          t.font = l.string, o = t.measureText(s.label).width, t.fillStyle = r.backdropColor;
          const e = ki(r.backdropPadding);
          t.fillRect(-o / 2 - e.left, -n - l.size / 2 - e.top, o + e.width, l.size + e.height);
        }
        Ne(t, s.label, 0, -n, l, {
          color: r.color,
          strokeColor: r.textStrokeColor,
          strokeWidth: r.textStrokeWidth
        });
      }), t.restore();
    }
    drawTitle() {}
  }
  const Eo = {
      millisecond: {
        common: !0,
        size: 1,
        steps: 1e3
      },
      second: {
        common: !0,
        size: 1e3,
        steps: 60
      },
      minute: {
        common: !0,
        size: 6e4,
        steps: 60
      },
      hour: {
        common: !0,
        size: 36e5,
        steps: 24
      },
      day: {
        common: !0,
        size: 864e5,
        steps: 30
      },
      week: {
        common: !1,
        size: 6048e5,
        steps: 4
      },
      month: {
        common: !0,
        size: 2628e6,
        steps: 12
      },
      quarter: {
        common: !1,
        size: 7884e6,
        steps: 4
      },
      year: {
        common: !0,
        size: 3154e7
      }
    },
    Ro = Object.keys(Eo);
  function Io(t, e) {
    return t - e;
  }
  function zo(t, e) {
    if (s(e)) return null;
    const i = t._adapter,
      {
        parser: n,
        round: o,
        isoWeekday: r
      } = t._parseOpts;
    let l = e;
    return "function" == typeof n && (l = n(l)), a(l) || (l = "string" == typeof n ? i.parse(l, n) : i.parse(l)), null === l ? null : (o && (l = "week" !== o || !N(r) && !0 !== r ? i.startOf(l, o) : i.startOf(l, "isoWeek", r)), +l);
  }
  function Fo(t, e, i, s) {
    const n = Ro.length;
    for (let o = Ro.indexOf(t); o < n - 1; ++o) {
      const t = Eo[Ro[o]],
        n = t.steps ? t.steps : Number.MAX_SAFE_INTEGER;
      if (t.common && Math.ceil((i - e) / (n * t.size)) <= s) return Ro[o];
    }
    return Ro[n - 1];
  }
  function Vo(t, e, i) {
    if (i) {
      if (i.length) {
        const {
          lo: s,
          hi: n
        } = et(i, e);
        t[i[s] >= e ? i[s] : i[n]] = !0;
      }
    } else t[e] = !0;
  }
  function Bo(t, e, i) {
    const s = [],
      n = {},
      o = e.length;
    let a, r;
    for (a = 0; a < o; ++a) r = e[a], n[r] = a, s.push({
      value: r,
      major: !1
    });
    return 0 !== o && i ? function (t, e, i, s) {
      const n = t._adapter,
        o = +n.startOf(e[0].value, s),
        a = e[e.length - 1].value;
      let r, l;
      for (r = o; r <= a; r = +n.add(r, 1, s)) l = i[r], l >= 0 && (e[l].major = !0);
      return e;
    }(t, s, n, i) : s;
  }
  class Wo extends Js {
    static id = "time";
    static defaults = {
      bounds: "data",
      adapters: {},
      time: {
        parser: !1,
        unit: !1,
        round: !1,
        isoWeekday: !1,
        minUnit: "millisecond",
        displayFormats: {}
      },
      ticks: {
        source: "auto",
        callback: !1,
        major: {
          enabled: !1
        }
      }
    };
    constructor(t) {
      super(t), this._cache = {
        data: [],
        labels: [],
        all: []
      }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
    }
    init(t) {
      let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      const i = t.time || (t.time = {}),
        s = this._adapter = new En._date(t.adapters.date);
      s.init(e), x(i.displayFormats, s.formats()), this._parseOpts = {
        parser: i.parser,
        round: i.round,
        isoWeekday: i.isoWeekday
      }, super.init(t), this._normalized = e.normalized;
    }
    parse(t, e) {
      return void 0 === t ? null : zo(this, t);
    }
    beforeLayout() {
      super.beforeLayout(), this._cache = {
        data: [],
        labels: [],
        all: []
      };
    }
    determineDataLimits() {
      const t = this.options,
        e = this._adapter,
        i = t.time.unit || "day";
      let {
        min: s,
        max: n,
        minDefined: o,
        maxDefined: r
      } = this.getUserBounds();
      function l(t) {
        o || isNaN(t.min) || (s = Math.min(s, t.min)), r || isNaN(t.max) || (n = Math.max(n, t.max));
      }
      o && r || (l(this._getLabelBounds()), "ticks" === t.bounds && "labels" === t.ticks.source || l(this.getMinMax(!1))), s = a(s) && !isNaN(s) ? s : +e.startOf(Date.now(), i), n = a(n) && !isNaN(n) ? n : +e.endOf(Date.now(), i) + 1, this.min = Math.min(s, n - 1), this.max = Math.max(s + 1, n);
    }
    _getLabelBounds() {
      const t = this.getLabelTimestamps();
      let e = Number.POSITIVE_INFINITY,
        i = Number.NEGATIVE_INFINITY;
      return t.length && (e = t[0], i = t[t.length - 1]), {
        min: e,
        max: i
      };
    }
    buildTicks() {
      const t = this.options,
        e = t.time,
        i = t.ticks,
        s = "labels" === i.source ? this.getLabelTimestamps() : this._generate();
      "ticks" === t.bounds && s.length && (this.min = this._userMin || s[0], this.max = this._userMax || s[s.length - 1]);
      const n = this.min,
        o = nt(s, n, this.max);
      return this._unit = e.unit || (i.autoSkip ? Fo(e.minUnit, this.min, this.max, this._getLabelCapacity(n)) : function (t, e, i, s, n) {
        for (let o = Ro.length - 1; o >= Ro.indexOf(i); o--) {
          const i = Ro[o];
          if (Eo[i].common && t._adapter.diff(n, s, i) >= e - 1) return i;
        }
        return Ro[i ? Ro.indexOf(i) : 0];
      }(this, o.length, e.minUnit, this.min, this.max)), this._majorUnit = i.major.enabled && "year" !== this._unit ? function (t) {
        for (let e = Ro.indexOf(t) + 1, i = Ro.length; e < i; ++e) if (Eo[Ro[e]].common) return Ro[e];
      }(this._unit) : void 0, this.initOffsets(s), t.reverse && o.reverse(), Bo(this, o, this._majorUnit);
    }
    afterAutoSkip() {
      this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map(t => +t.value));
    }
    initOffsets() {
      let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      let e,
        i,
        s = 0,
        n = 0;
      this.options.offset && t.length && (e = this.getDecimalForValue(t[0]), s = 1 === t.length ? 1 - e : (this.getDecimalForValue(t[1]) - e) / 2, i = this.getDecimalForValue(t[t.length - 1]), n = 1 === t.length ? i : (i - this.getDecimalForValue(t[t.length - 2])) / 2);
      const o = t.length < 3 ? .5 : .25;
      s = J(s, 0, o), n = J(n, 0, o), this._offsets = {
        start: s,
        end: n,
        factor: 1 / (s + 1 + n)
      };
    }
    _generate() {
      const t = this._adapter,
        e = this.min,
        i = this.max,
        s = this.options,
        n = s.time,
        o = n.unit || Fo(n.minUnit, e, i, this._getLabelCapacity(e)),
        a = l(s.ticks.stepSize, 1),
        r = "week" === o && n.isoWeekday,
        h = N(r) || !0 === r,
        c = {};
      let d,
        u,
        f = e;
      if (h && (f = +t.startOf(f, "isoWeek", r)), f = +t.startOf(f, h ? "day" : o), t.diff(i, e, o) > 1e5 * a) throw new Error(e + " and " + i + " are too far apart with stepSize of " + a + " " + o);
      const g = "data" === s.ticks.source && this.getDataTimestamps();
      for (d = f, u = 0; d < i; d = +t.add(d, a, o), u++) Vo(c, d, g);
      return d !== i && "ticks" !== s.bounds && 1 !== u || Vo(c, d, g), Object.keys(c).sort(Io).map(t => +t);
    }
    getLabelForValue(t) {
      const e = this._adapter,
        i = this.options.time;
      return i.tooltipFormat ? e.format(t, i.tooltipFormat) : e.format(t, i.displayFormats.datetime);
    }
    format(t, e) {
      const i = this.options.time.displayFormats,
        s = this._unit,
        n = e || i[s];
      return this._adapter.format(t, n);
    }
    _tickFormatFunction(t, e, i, s) {
      const n = this.options,
        o = n.ticks.callback;
      if (o) return d(o, [t, e, i], this);
      const a = n.time.displayFormats,
        r = this._unit,
        l = this._majorUnit,
        h = r && a[r],
        c = l && a[l],
        u = i[e],
        f = l && c && u && u.major;
      return this._adapter.format(t, s || (f ? c : h));
    }
    generateTickLabels(t) {
      let e, i, s;
      for (e = 0, i = t.length; e < i; ++e) s = t[e], s.label = this._tickFormatFunction(s.value, e, t);
    }
    getDecimalForValue(t) {
      return null === t ? NaN : (t - this.min) / (this.max - this.min);
    }
    getPixelForValue(t) {
      const e = this._offsets,
        i = this.getDecimalForValue(t);
      return this.getPixelForDecimal((e.start + i) * e.factor);
    }
    getValueForPixel(t) {
      const e = this._offsets,
        i = this.getDecimalForPixel(t) / e.factor - e.end;
      return this.min + i * (this.max - this.min);
    }
    _getLabelSize(t) {
      const e = this.options.ticks,
        i = this.ctx.measureText(t).width,
        s = $(this.isHorizontal() ? e.maxRotation : e.minRotation),
        n = Math.cos(s),
        o = Math.sin(s),
        a = this._resolveTickFontOptions(0).size;
      return {
        w: i * n + a * o,
        h: i * o + a * n
      };
    }
    _getLabelCapacity(t) {
      const e = this.options.time,
        i = e.displayFormats,
        s = i[e.unit] || i.millisecond,
        n = this._tickFormatFunction(t, 0, Bo(this, [t], this._majorUnit), s),
        o = this._getLabelSize(n),
        a = Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) - 1;
      return a > 0 ? a : 1;
    }
    getDataTimestamps() {
      let t,
        e,
        i = this._cache.data || [];
      if (i.length) return i;
      const s = this.getMatchingVisibleMetas();
      if (this._normalized && s.length) return this._cache.data = s[0].controller.getAllParsedValues(this);
      for (t = 0, e = s.length; t < e; ++t) i = i.concat(s[t].controller.getAllParsedValues(this));
      return this._cache.data = this.normalize(i);
    }
    getLabelTimestamps() {
      const t = this._cache.labels || [];
      let e, i;
      if (t.length) return t;
      const s = this.getLabels();
      for (e = 0, i = s.length; e < i; ++e) t.push(zo(this, s[e]));
      return this._cache.labels = this._normalized ? t : this.normalize(t);
    }
    normalize(t) {
      return lt(t.sort(Io));
    }
  }
  function No(t, e, i) {
    let s,
      n,
      o,
      a,
      r = 0,
      l = t.length - 1;
    i ? (e >= t[r].pos && e <= t[l].pos && ({
      lo: r,
      hi: l
    } = it(t, "pos", e)), ({
      pos: s,
      time: o
    } = t[r]), ({
      pos: n,
      time: a
    } = t[l])) : (e >= t[r].time && e <= t[l].time && ({
      lo: r,
      hi: l
    } = it(t, "time", e)), ({
      time: s,
      pos: o
    } = t[r]), ({
      time: n,
      pos: a
    } = t[l]));
    const h = n - s;
    return h ? o + (a - o) * (e - s) / h : o;
  }
  var Ho = Object.freeze({
    __proto__: null,
    CategoryScale: class extends Js {
      static id = "category";
      static defaults = {
        ticks: {
          callback: go
        }
      };
      constructor(t) {
        super(t), this._startValue = void 0, this._valueRange = 0, this._addedLabels = [];
      }
      init(t) {
        const e = this._addedLabels;
        if (e.length) {
          const t = this.getLabels();
          for (const {
            index: i,
            label: s
          } of e) t[i] === s && t.splice(i, 1);
          this._addedLabels = [];
        }
        super.init(t);
      }
      parse(t, e) {
        if (s(t)) return null;
        const i = this.getLabels();
        return ((t, e) => null === t ? null : J(Math.round(t), 0, e))(e = isFinite(e) && i[e] === t ? e : fo(i, t, l(e, t), this._addedLabels), i.length - 1);
      }
      determineDataLimits() {
        const {
          minDefined: t,
          maxDefined: e
        } = this.getUserBounds();
        let {
          min: i,
          max: s
        } = this.getMinMax(!0);
        "ticks" === this.options.bounds && (t || (i = 0), e || (s = this.getLabels().length - 1)), this.min = i, this.max = s;
      }
      buildTicks() {
        const t = this.min,
          e = this.max,
          i = this.options.offset,
          s = [];
        let n = this.getLabels();
        n = 0 === t && e === n.length - 1 ? n : n.slice(t, e + 1), this._valueRange = Math.max(n.length - (i ? 0 : 1), 1), this._startValue = this.min - (i ? .5 : 0);
        for (let i = t; i <= e; i++) s.push({
          value: i
        });
        return s;
      }
      getLabelForValue(t) {
        return go.call(this, t);
      }
      configure() {
        super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
      }
      getPixelForValue(t) {
        return "number" != typeof t && (t = this.parse(t)), null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
      }
      getPixelForTick(t) {
        const e = this.ticks;
        return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
      }
      getValueForPixel(t) {
        return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
      }
      getBasePixel() {
        return this.bottom;
      }
    },
    LinearScale: bo,
    LogarithmicScale: wo,
    RadialLinearScale: Lo,
    TimeScale: Wo,
    TimeSeriesScale: class extends Wo {
      static id = "timeseries";
      static defaults = Wo.defaults;
      constructor(t) {
        super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
      }
      initOffsets() {
        const t = this._getTimestampsForTable(),
          e = this._table = this.buildLookupTable(t);
        this._minPos = No(e, this.min), this._tableRange = No(e, this.max) - this._minPos, super.initOffsets(t);
      }
      buildLookupTable(t) {
        const {
            min: e,
            max: i
          } = this,
          s = [],
          n = [];
        let o, a, r, l, h;
        for (o = 0, a = t.length; o < a; ++o) l = t[o], l >= e && l <= i && s.push(l);
        if (s.length < 2) return [{
          time: e,
          pos: 0
        }, {
          time: i,
          pos: 1
        }];
        for (o = 0, a = s.length; o < a; ++o) h = s[o + 1], r = s[o - 1], l = s[o], Math.round((h + r) / 2) !== l && n.push({
          time: l,
          pos: o / (a - 1)
        });
        return n;
      }
      _generate() {
        const t = this.min,
          e = this.max;
        let i = super.getDataTimestamps();
        return i.includes(t) && i.length || i.splice(0, 0, t), i.includes(e) && 1 !== i.length || i.push(e), i.sort((t, e) => t - e);
      }
      _getTimestampsForTable() {
        let t = this._cache.all || [];
        if (t.length) return t;
        const e = this.getDataTimestamps(),
          i = this.getLabelTimestamps();
        return t = e.length && i.length ? this.normalize(e.concat(i)) : e.length ? e : i, t = this._cache.all = t, t;
      }
      getDecimalForValue(t) {
        return (No(this._table, t) - this._minPos) / this._tableRange;
      }
      getValueForPixel(t) {
        const e = this._offsets,
          i = this.getDecimalForPixel(t) / e.factor - e.end;
        return No(this._table, i * this._tableRange + this._minPos, !0);
      }
    }
  });
  const jo = ["rgb(54, 162, 235)", "rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"],
    $o = jo.map(t => t.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
  function Yo(t) {
    return jo[t % jo.length];
  }
  function Uo(t) {
    return $o[t % $o.length];
  }
  function Xo(t) {
    let e = 0;
    return (i, s) => {
      const n = t.getDatasetMeta(s).controller;
      n instanceof Hn ? e = function (t, e) {
        return t.backgroundColor = t.data.map(() => Yo(e++)), e;
      }(i, e) : n instanceof jn ? e = function (t, e) {
        return t.backgroundColor = t.data.map(() => Uo(e++)), e;
      }(i, e) : n && (e = function (t, e) {
        return t.borderColor = Yo(e), t.backgroundColor = Uo(e), ++e;
      }(i, e));
    };
  }
  function qo(t) {
    let e;
    for (e in t) if (t[e].borderColor || t[e].backgroundColor) return !0;
    return !1;
  }
  var Ko = {
    id: "colors",
    defaults: {
      enabled: !0,
      forceOverride: !1
    },
    beforeLayout(t, e, i) {
      if (!i.enabled) return;
      const {
          data: {
            datasets: s
          },
          options: n
        } = t.config,
        {
          elements: o
        } = n;
      if (!i.forceOverride && (qo(s) || (a = n) && (a.borderColor || a.backgroundColor) || o && qo(o))) return;
      var a;
      const r = Xo(t);
      s.forEach(r);
    }
  };
  function Go(t) {
    if (t._decimated) {
      const e = t._data;
      delete t._decimated, delete t._data, Object.defineProperty(t, "data", {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: e
      });
    }
  }
  function Zo(t) {
    t.data.datasets.forEach(t => {
      Go(t);
    });
  }
  var Jo = {
    id: "decimation",
    defaults: {
      algorithm: "min-max",
      enabled: !1
    },
    beforeElementsUpdate: (t, e, i) => {
      if (!i.enabled) return void Zo(t);
      const n = t.width;
      t.data.datasets.forEach((e, o) => {
        const {
            _data: a,
            indexAxis: r
          } = e,
          l = t.getDatasetMeta(o),
          h = a || e.data;
        if ("y" === Pi([r, t.options.indexAxis])) return;
        if (!l.controller.supportsDecimation) return;
        const c = t.scales[l.xAxisID];
        if ("linear" !== c.type && "time" !== c.type) return;
        if (t.options.parsing) return;
        let {
          start: d,
          count: u
        } = function (t, e) {
          const i = e.length;
          let s,
            n = 0;
          const {
              iScale: o
            } = t,
            {
              min: a,
              max: r,
              minDefined: l,
              maxDefined: h
            } = o.getUserBounds();
          return l && (n = J(it(e, o.axis, a).lo, 0, i - 1)), s = h ? J(it(e, o.axis, r).hi + 1, n, i) - n : i - n, {
            start: n,
            count: s
          };
        }(l, h);
        if (u <= (i.threshold || 4 * n)) return void Go(e);
        let f;
        switch (s(a) && (e._data = h, delete e.data, Object.defineProperty(e, "data", {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this._decimated;
          },
          set: function (t) {
            this._data = t;
          }
        })), i.algorithm) {
          case "lttb":
            f = function (t, e, i, s, n) {
              const o = n.samples || s;
              if (o >= i) return t.slice(e, e + i);
              const a = [],
                r = (i - 2) / (o - 2);
              let l = 0;
              const h = e + i - 1;
              let c,
                d,
                u,
                f,
                g,
                p = e;
              for (a[l++] = t[p], c = 0; c < o - 2; c++) {
                let s,
                  n = 0,
                  o = 0;
                const h = Math.floor((c + 1) * r) + 1 + e,
                  m = Math.min(Math.floor((c + 2) * r) + 1, i) + e,
                  b = m - h;
                for (s = h; s < m; s++) n += t[s].x, o += t[s].y;
                n /= b, o /= b;
                const x = Math.floor(c * r) + 1 + e,
                  _ = Math.min(Math.floor((c + 1) * r) + 1, i) + e,
                  {
                    x: y,
                    y: v
                  } = t[p];
                for (u = f = -1, s = x; s < _; s++) f = .5 * Math.abs((y - n) * (t[s].y - v) - (y - t[s].x) * (o - v)), f > u && (u = f, d = t[s], g = s);
                a[l++] = d, p = g;
              }
              return a[l++] = t[h], a;
            }(h, d, u, n, i);
            break;
          case "min-max":
            f = function (t, e, i, n) {
              let o,
                a,
                r,
                l,
                h,
                c,
                d,
                u,
                f,
                g,
                p = 0,
                m = 0;
              const b = [],
                x = e + i - 1,
                _ = t[e].x,
                y = t[x].x - _;
              for (o = e; o < e + i; ++o) {
                a = t[o], r = (a.x - _) / y * n, l = a.y;
                const e = 0 | r;
                if (e === h) l < f ? (f = l, c = o) : l > g && (g = l, d = o), p = (m * p + a.x) / ++m;else {
                  const i = o - 1;
                  if (!s(c) && !s(d)) {
                    const e = Math.min(c, d),
                      s = Math.max(c, d);
                    e !== u && e !== i && b.push({
                      ...t[e],
                      x: p
                    }), s !== u && s !== i && b.push({
                      ...t[s],
                      x: p
                    });
                  }
                  o > 0 && i !== u && b.push(t[i]), b.push(a), h = e, m = 0, f = g = l, c = d = u = o;
                }
              }
              return b;
            }(h, d, u, n);
            break;
          default:
            throw new Error(`Unsupported decimation algorithm '${i.algorithm}'`);
        }
        e._decimated = f;
      });
    },
    destroy(t) {
      Zo(t);
    }
  };
  function Qo(t, e, i, s) {
    if (s) return;
    let n = e[t],
      o = i[t];
    return "angle" === t && (n = G(n), o = G(o)), {
      property: t,
      start: n,
      end: o
    };
  }
  function ta(t, e, i) {
    for (; e > t; e--) {
      const t = i[e];
      if (!isNaN(t.x) && !isNaN(t.y)) break;
    }
    return e;
  }
  function ea(t, e, i, s) {
    return t && e ? s(t[i], e[i]) : t ? t[i] : e ? e[i] : 0;
  }
  function ia(t, e) {
    let i = [],
      s = !1;
    return n(t) ? (s = !0, i = t) : i = function (t, e) {
      const {
          x: i = null,
          y: s = null
        } = t || {},
        n = e.points,
        o = [];
      return e.segments.forEach(_ref8 => {
        let {
          start: t,
          end: e
        } = _ref8;
        e = ta(t, e, n);
        const a = n[t],
          r = n[e];
        null !== s ? (o.push({
          x: a.x,
          y: s
        }), o.push({
          x: r.x,
          y: s
        })) : null !== i && (o.push({
          x: i,
          y: a.y
        }), o.push({
          x: i,
          y: r.y
        }));
      }), o;
    }(t, e), i.length ? new so({
      points: i,
      options: {
        tension: 0
      },
      _loop: s,
      _fullLoop: s
    }) : null;
  }
  function sa(t) {
    return t && !1 !== t.fill;
  }
  function na(t, e, i) {
    let s = t[e].fill;
    const n = [e];
    let o;
    if (!i) return s;
    for (; !1 !== s && -1 === n.indexOf(s);) {
      if (!a(s)) return s;
      if (o = t[s], !o) return !1;
      if (o.visible) return s;
      n.push(s), s = o.fill;
    }
    return !1;
  }
  function oa(t, e, i) {
    const s = function (t) {
      const e = t.options,
        i = e.fill;
      let s = l(i && i.target, i);
      void 0 === s && (s = !!e.backgroundColor);
      if (!1 === s || null === s) return !1;
      if (!0 === s) return "origin";
      return s;
    }(t);
    if (o(s)) return !isNaN(s.value) && s;
    let n = parseFloat(s);
    return a(n) && Math.floor(n) === n ? function (t, e, i, s) {
      "-" !== t && "+" !== t || (i = e + i);
      if (i === e || i < 0 || i >= s) return !1;
      return i;
    }(s[0], e, n, i) : ["origin", "start", "end", "stack", "shape"].indexOf(s) >= 0 && s;
  }
  function aa(t, e, i) {
    const s = [];
    for (let n = 0; n < i.length; n++) {
      const o = i[n],
        {
          first: a,
          last: r,
          point: l
        } = ra(o, e, "x");
      if (!(!l || a && r)) if (a) s.unshift(l);else if (t.push(l), !r) break;
    }
    t.push(...s);
  }
  function ra(t, e, i) {
    const s = t.interpolate(e, i);
    if (!s) return {};
    const n = s[i],
      o = t.segments,
      a = t.points;
    let r = !1,
      l = !1;
    for (let t = 0; t < o.length; t++) {
      const e = o[t],
        s = a[e.start][i],
        h = a[e.end][i];
      if (tt(n, s, h)) {
        r = n === s, l = n === h;
        break;
      }
    }
    return {
      first: r,
      last: l,
      point: s
    };
  }
  class la {
    constructor(t) {
      this.x = t.x, this.y = t.y, this.radius = t.radius;
    }
    pathSegment(t, e, i) {
      const {
        x: s,
        y: n,
        radius: o
      } = this;
      return e = e || {
        start: 0,
        end: O
      }, t.arc(s, n, o, e.end, e.start, !0), !i.bounds;
    }
    interpolate(t) {
      const {
          x: e,
          y: i,
          radius: s
        } = this,
        n = t.angle;
      return {
        x: e + Math.cos(n) * s,
        y: i + Math.sin(n) * s,
        angle: n
      };
    }
  }
  function ha(t) {
    const {
      chart: e,
      fill: i,
      line: s
    } = t;
    if (a(i)) return function (t, e) {
      const i = t.getDatasetMeta(e),
        s = i && t.isDatasetVisible(e);
      return s ? i.dataset : null;
    }(e, i);
    if ("stack" === i) return function (t) {
      const {
          scale: e,
          index: i,
          line: s
        } = t,
        n = [],
        o = s.segments,
        a = s.points,
        r = function (t, e) {
          const i = [],
            s = t.getMatchingVisibleMetas("line");
          for (let t = 0; t < s.length; t++) {
            const n = s[t];
            if (n.index === e) break;
            n.hidden || i.unshift(n.dataset);
          }
          return i;
        }(e, i);
      r.push(ia({
        x: null,
        y: e.bottom
      }, s));
      for (let t = 0; t < o.length; t++) {
        const e = o[t];
        for (let t = e.start; t <= e.end; t++) aa(n, a[t], r);
      }
      return new so({
        points: n,
        options: {}
      });
    }(t);
    if ("shape" === i) return !0;
    const n = function (t) {
      const e = t.scale || {};
      if (e.getPointPositionForValue) return function (t) {
        const {
            scale: e,
            fill: i
          } = t,
          s = e.options,
          n = e.getLabels().length,
          a = s.reverse ? e.max : e.min,
          r = function (t, e, i) {
            let s;
            return s = "start" === t ? i : "end" === t ? e.options.reverse ? e.min : e.max : o(t) ? t.value : e.getBaseValue(), s;
          }(i, e, a),
          l = [];
        if (s.grid.circular) {
          const t = e.getPointPositionForValue(0, a);
          return new la({
            x: t.x,
            y: t.y,
            radius: e.getDistanceFromCenterForValue(r)
          });
        }
        for (let t = 0; t < n; ++t) l.push(e.getPointPositionForValue(t, r));
        return l;
      }(t);
      return function (t) {
        const {
            scale: e = {},
            fill: i
          } = t,
          s = function (t, e) {
            let i = null;
            return "start" === t ? i = e.bottom : "end" === t ? i = e.top : o(t) ? i = e.getPixelForValue(t.value) : e.getBasePixel && (i = e.getBasePixel()), i;
          }(i, e);
        if (a(s)) {
          const t = e.isHorizontal();
          return {
            x: t ? s : null,
            y: t ? null : s
          };
        }
        return null;
      }(t);
    }(t);
    return n instanceof la ? n : ia(n, s);
  }
  function ca(t, e, i) {
    const s = ha(e),
      {
        line: n,
        scale: o,
        axis: a
      } = e,
      r = n.options,
      l = r.fill,
      h = r.backgroundColor,
      {
        above: c = h,
        below: d = h
      } = l || {};
    s && n.points.length && (Ie(t, i), function (t, e) {
      const {
          line: i,
          target: s,
          above: n,
          below: o,
          area: a,
          scale: r
        } = e,
        l = i._loop ? "angle" : e.axis;
      t.save(), "x" === l && o !== n && (da(t, s, a.top), ua(t, {
        line: i,
        target: s,
        color: n,
        scale: r,
        property: l
      }), t.restore(), t.save(), da(t, s, a.bottom));
      ua(t, {
        line: i,
        target: s,
        color: o,
        scale: r,
        property: l
      }), t.restore();
    }(t, {
      line: n,
      target: s,
      above: c,
      below: d,
      area: i,
      scale: o,
      axis: a
    }), ze(t));
  }
  function da(t, e, i) {
    const {
      segments: s,
      points: n
    } = e;
    let o = !0,
      a = !1;
    t.beginPath();
    for (const r of s) {
      const {
          start: s,
          end: l
        } = r,
        h = n[s],
        c = n[ta(s, l, n)];
      o ? (t.moveTo(h.x, h.y), o = !1) : (t.lineTo(h.x, i), t.lineTo(h.x, h.y)), a = !!e.pathSegment(t, r, {
        move: a
      }), a ? t.closePath() : t.lineTo(c.x, i);
    }
    t.lineTo(e.first().x, i), t.closePath(), t.clip();
  }
  function ua(t, e) {
    const {
        line: i,
        target: s,
        property: n,
        color: o,
        scale: a
      } = e,
      r = function (t, e, i) {
        const s = t.segments,
          n = t.points,
          o = e.points,
          a = [];
        for (const t of s) {
          let {
            start: s,
            end: r
          } = t;
          r = ta(s, r, n);
          const l = Qo(i, n[s], n[r], t.loop);
          if (!e.segments) {
            a.push({
              source: t,
              target: l,
              start: n[s],
              end: n[r]
            });
            continue;
          }
          const h = Ii(e, l);
          for (const e of h) {
            const s = Qo(i, o[e.start], o[e.end], e.loop),
              r = Ri(t, n, s);
            for (const t of r) a.push({
              source: t,
              target: e,
              start: {
                [i]: ea(l, s, "start", Math.max)
              },
              end: {
                [i]: ea(l, s, "end", Math.min)
              }
            });
          }
        }
        return a;
      }(i, s, n);
    for (const {
      source: e,
      target: l,
      start: h,
      end: c
    } of r) {
      const {
          style: {
            backgroundColor: r = o
          } = {}
        } = e,
        d = !0 !== s;
      t.save(), t.fillStyle = r, fa(t, a, d && Qo(n, h, c)), t.beginPath();
      const u = !!i.pathSegment(t, e);
      let f;
      if (d) {
        u ? t.closePath() : ga(t, s, c, n);
        const e = !!s.pathSegment(t, l, {
          move: u,
          reverse: !0
        });
        f = u && e, f || ga(t, s, h, n);
      }
      t.closePath(), t.fill(f ? "evenodd" : "nonzero"), t.restore();
    }
  }
  function fa(t, e, i) {
    const {
        top: s,
        bottom: n
      } = e.chart.chartArea,
      {
        property: o,
        start: a,
        end: r
      } = i || {};
    "x" === o && (t.beginPath(), t.rect(a, s, r - a, n - s), t.clip());
  }
  function ga(t, e, i, s) {
    const n = e.interpolate(i, s);
    n && t.lineTo(n.x, n.y);
  }
  var pa = {
    id: "filler",
    afterDatasetsUpdate(t, e, i) {
      const s = (t.data.datasets || []).length,
        n = [];
      let o, a, r, l;
      for (a = 0; a < s; ++a) o = t.getDatasetMeta(a), r = o.dataset, l = null, r && r.options && r instanceof so && (l = {
        visible: t.isDatasetVisible(a),
        index: a,
        fill: oa(r, a, s),
        chart: t,
        axis: o.controller.options.indexAxis,
        scale: o.vScale,
        line: r
      }), o.$filler = l, n.push(l);
      for (a = 0; a < s; ++a) l = n[a], l && !1 !== l.fill && (l.fill = na(n, a, i.propagate));
    },
    beforeDraw(t, e, i) {
      const s = "beforeDraw" === i.drawTime,
        n = t.getSortedVisibleDatasetMetas(),
        o = t.chartArea;
      for (let e = n.length - 1; e >= 0; --e) {
        const i = n[e].$filler;
        i && (i.line.updateControlPoints(o, i.axis), s && i.fill && ca(t.ctx, i, o));
      }
    },
    beforeDatasetsDraw(t, e, i) {
      if ("beforeDatasetsDraw" !== i.drawTime) return;
      const s = t.getSortedVisibleDatasetMetas();
      for (let e = s.length - 1; e >= 0; --e) {
        const i = s[e].$filler;
        sa(i) && ca(t.ctx, i, t.chartArea);
      }
    },
    beforeDatasetDraw(t, e, i) {
      const s = e.meta.$filler;
      sa(s) && "beforeDatasetDraw" === i.drawTime && ca(t.ctx, s, t.chartArea);
    },
    defaults: {
      propagate: !0,
      drawTime: "beforeDatasetDraw"
    }
  };
  const ma = (t, e) => {
    let {
      boxHeight: i = e,
      boxWidth: s = e
    } = t;
    return t.usePointStyle && (i = Math.min(i, e), s = t.pointStyleWidth || Math.min(s, e)), {
      boxWidth: s,
      boxHeight: i,
      itemHeight: Math.max(e, i)
    };
  };
  class ba extends Hs {
    constructor(t) {
      super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
    }
    update(t, e, i) {
      this.maxWidth = t, this.maxHeight = e, this._margins = i, this.setDimensions(), this.buildLabels(), this.fit();
    }
    setDimensions() {
      this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height);
    }
    buildLabels() {
      const t = this.options.labels || {};
      let e = d(t.generateLabels, [this.chart], this) || [];
      t.filter && (e = e.filter(e => t.filter(e, this.chart.data))), t.sort && (e = e.sort((e, i) => t.sort(e, i, this.chart.data))), this.options.reverse && e.reverse(), this.legendItems = e;
    }
    fit() {
      const {
        options: t,
        ctx: e
      } = this;
      if (!t.display) return void (this.width = this.height = 0);
      const i = t.labels,
        s = Si(i.font),
        n = s.size,
        o = this._computeTitleHeight(),
        {
          boxWidth: a,
          itemHeight: r
        } = ma(i, n);
      let l, h;
      e.font = s.string, this.isHorizontal() ? (l = this.maxWidth, h = this._fitRows(o, n, a, r) + 10) : (h = this.maxHeight, l = this._fitCols(o, s, a, r) + 10), this.width = Math.min(l, t.maxWidth || this.maxWidth), this.height = Math.min(h, t.maxHeight || this.maxHeight);
    }
    _fitRows(t, e, i, s) {
      const {
          ctx: n,
          maxWidth: o,
          options: {
            labels: {
              padding: a
            }
          }
        } = this,
        r = this.legendHitBoxes = [],
        l = this.lineWidths = [0],
        h = s + a;
      let c = t;
      n.textAlign = "left", n.textBaseline = "middle";
      let d = -1,
        u = -h;
      return this.legendItems.forEach((t, f) => {
        const g = i + e / 2 + n.measureText(t.text).width;
        (0 === f || l[l.length - 1] + g + 2 * a > o) && (c += h, l[l.length - (f > 0 ? 0 : 1)] = 0, u += h, d++), r[f] = {
          left: 0,
          top: u,
          row: d,
          width: g,
          height: s
        }, l[l.length - 1] += g + a;
      }), c;
    }
    _fitCols(t, e, i, s) {
      const {
          ctx: n,
          maxHeight: o,
          options: {
            labels: {
              padding: a
            }
          }
        } = this,
        r = this.legendHitBoxes = [],
        l = this.columnSizes = [],
        h = o - t;
      let c = a,
        d = 0,
        u = 0,
        f = 0,
        g = 0;
      return this.legendItems.forEach((t, o) => {
        const {
          itemWidth: p,
          itemHeight: m
        } = function (t, e, i, s, n) {
          const o = function (t, e, i, s) {
              let n = t.text;
              n && "string" != typeof n && (n = n.reduce((t, e) => t.length > e.length ? t : e));
              return e + i.size / 2 + s.measureText(n).width;
            }(s, t, e, i),
            a = function (t, e, i) {
              let s = t;
              "string" != typeof e.text && (s = xa(e, i));
              return s;
            }(n, s, e.lineHeight);
          return {
            itemWidth: o,
            itemHeight: a
          };
        }(i, e, n, t, s);
        o > 0 && u + m + 2 * a > h && (c += d + a, l.push({
          width: d,
          height: u
        }), f += d + a, g++, d = u = 0), r[o] = {
          left: f,
          top: u,
          col: g,
          width: p,
          height: m
        }, d = Math.max(d, p), u += m + a;
      }), c += d, l.push({
        width: d,
        height: u
      }), c;
    }
    adjustHitBoxes() {
      if (!this.options.display) return;
      const t = this._computeTitleHeight(),
        {
          legendHitBoxes: e,
          options: {
            align: i,
            labels: {
              padding: s
            },
            rtl: n
          }
        } = this,
        o = Oi(n, this.left, this.width);
      if (this.isHorizontal()) {
        let n = 0,
          a = ft(i, this.left + s, this.right - this.lineWidths[n]);
        for (const r of e) n !== r.row && (n = r.row, a = ft(i, this.left + s, this.right - this.lineWidths[n])), r.top += this.top + t + s, r.left = o.leftForLtr(o.x(a), r.width), a += r.width + s;
      } else {
        let n = 0,
          a = ft(i, this.top + t + s, this.bottom - this.columnSizes[n].height);
        for (const r of e) r.col !== n && (n = r.col, a = ft(i, this.top + t + s, this.bottom - this.columnSizes[n].height)), r.top = a, r.left += this.left + s, r.left = o.leftForLtr(o.x(r.left), r.width), a += r.height + s;
      }
    }
    isHorizontal() {
      return "top" === this.options.position || "bottom" === this.options.position;
    }
    draw() {
      if (this.options.display) {
        const t = this.ctx;
        Ie(t, this), this._draw(), ze(t);
      }
    }
    _draw() {
      const {
          options: t,
          columnSizes: e,
          lineWidths: i,
          ctx: s
        } = this,
        {
          align: n,
          labels: o
        } = t,
        a = ue.color,
        r = Oi(t.rtl, this.left, this.width),
        h = Si(o.font),
        {
          padding: c
        } = o,
        d = h.size,
        u = d / 2;
      let f;
      this.drawTitle(), s.textAlign = r.textAlign("left"), s.textBaseline = "middle", s.lineWidth = .5, s.font = h.string;
      const {
          boxWidth: g,
          boxHeight: p,
          itemHeight: m
        } = ma(o, d),
        b = this.isHorizontal(),
        x = this._computeTitleHeight();
      f = b ? {
        x: ft(n, this.left + c, this.right - i[0]),
        y: this.top + c + x,
        line: 0
      } : {
        x: this.left + c,
        y: ft(n, this.top + x + c, this.bottom - e[0].height),
        line: 0
      }, Ai(this.ctx, t.textDirection);
      const _ = m + c;
      this.legendItems.forEach((y, v) => {
        s.strokeStyle = y.fontColor, s.fillStyle = y.fontColor;
        const M = s.measureText(y.text).width,
          w = r.textAlign(y.textAlign || (y.textAlign = o.textAlign)),
          k = g + u + M;
        let S = f.x,
          P = f.y;
        r.setWidth(this.width), b ? v > 0 && S + k + c > this.right && (P = f.y += _, f.line++, S = f.x = ft(n, this.left + c, this.right - i[f.line])) : v > 0 && P + _ > this.bottom && (S = f.x = S + e[f.line].width + c, f.line++, P = f.y = ft(n, this.top + x + c, this.bottom - e[f.line].height));
        if (function (t, e, i) {
          if (isNaN(g) || g <= 0 || isNaN(p) || p < 0) return;
          s.save();
          const n = l(i.lineWidth, 1);
          if (s.fillStyle = l(i.fillStyle, a), s.lineCap = l(i.lineCap, "butt"), s.lineDashOffset = l(i.lineDashOffset, 0), s.lineJoin = l(i.lineJoin, "miter"), s.lineWidth = n, s.strokeStyle = l(i.strokeStyle, a), s.setLineDash(l(i.lineDash, [])), o.usePointStyle) {
            const a = {
                radius: p * Math.SQRT2 / 2,
                pointStyle: i.pointStyle,
                rotation: i.rotation,
                borderWidth: n
              },
              l = r.xPlus(t, g / 2);
            Ee(s, a, l, e + u, o.pointStyleWidth && g);
          } else {
            const o = e + Math.max((d - p) / 2, 0),
              a = r.leftForLtr(t, g),
              l = wi(i.borderRadius);
            s.beginPath(), Object.values(l).some(t => 0 !== t) ? He(s, {
              x: a,
              y: o,
              w: g,
              h: p,
              radius: l
            }) : s.rect(a, o, g, p), s.fill(), 0 !== n && s.stroke();
          }
          s.restore();
        }(r.x(S), P, y), S = gt(w, S + g + u, b ? S + k : this.right, t.rtl), function (t, e, i) {
          Ne(s, i.text, t, e + m / 2, h, {
            strikethrough: i.hidden,
            textAlign: r.textAlign(i.textAlign)
          });
        }(r.x(S), P, y), b) f.x += k + c;else if ("string" != typeof y.text) {
          const t = h.lineHeight;
          f.y += xa(y, t) + c;
        } else f.y += _;
      }), Ti(this.ctx, t.textDirection);
    }
    drawTitle() {
      const t = this.options,
        e = t.title,
        i = Si(e.font),
        s = ki(e.padding);
      if (!e.display) return;
      const n = Oi(t.rtl, this.left, this.width),
        o = this.ctx,
        a = e.position,
        r = i.size / 2,
        l = s.top + r;
      let h,
        c = this.left,
        d = this.width;
      if (this.isHorizontal()) d = Math.max(...this.lineWidths), h = this.top + l, c = ft(t.align, c, this.right - d);else {
        const e = this.columnSizes.reduce((t, e) => Math.max(t, e.height), 0);
        h = l + ft(t.align, this.top, this.bottom - e - t.labels.padding - this._computeTitleHeight());
      }
      const u = ft(a, c, c + d);
      o.textAlign = n.textAlign(ut(a)), o.textBaseline = "middle", o.strokeStyle = e.color, o.fillStyle = e.color, o.font = i.string, Ne(o, e.text, u, h, i);
    }
    _computeTitleHeight() {
      const t = this.options.title,
        e = Si(t.font),
        i = ki(t.padding);
      return t.display ? e.lineHeight + i.height : 0;
    }
    _getLegendItemAt(t, e) {
      let i, s, n;
      if (tt(t, this.left, this.right) && tt(e, this.top, this.bottom)) for (n = this.legendHitBoxes, i = 0; i < n.length; ++i) if (s = n[i], tt(t, s.left, s.left + s.width) && tt(e, s.top, s.top + s.height)) return this.legendItems[i];
      return null;
    }
    handleEvent(t) {
      const e = this.options;
      if (!function (t, e) {
        if (("mousemove" === t || "mouseout" === t) && (e.onHover || e.onLeave)) return !0;
        if (e.onClick && ("click" === t || "mouseup" === t)) return !0;
        return !1;
      }(t.type, e)) return;
      const i = this._getLegendItemAt(t.x, t.y);
      if ("mousemove" === t.type || "mouseout" === t.type) {
        const o = this._hoveredItem,
          a = (n = i, null !== (s = o) && null !== n && s.datasetIndex === n.datasetIndex && s.index === n.index);
        o && !a && d(e.onLeave, [t, o, this], this), this._hoveredItem = i, i && !a && d(e.onHover, [t, i, this], this);
      } else i && d(e.onClick, [t, i, this], this);
      var s, n;
    }
  }
  function xa(t, e) {
    return e * (t.text ? t.text.length : 0);
  }
  var _a = {
    id: "legend",
    _element: ba,
    start(t, e, i) {
      const s = t.legend = new ba({
        ctx: t.ctx,
        options: i,
        chart: t
      });
      as.configure(t, s, i), as.addBox(t, s);
    },
    stop(t) {
      as.removeBox(t, t.legend), delete t.legend;
    },
    beforeUpdate(t, e, i) {
      const s = t.legend;
      as.configure(t, s, i), s.options = i;
    },
    afterUpdate(t) {
      const e = t.legend;
      e.buildLabels(), e.adjustHitBoxes();
    },
    afterEvent(t, e) {
      e.replay || t.legend.handleEvent(e.event);
    },
    defaults: {
      display: !0,
      position: "top",
      align: "center",
      fullSize: !0,
      reverse: !1,
      weight: 1e3,
      onClick(t, e, i) {
        const s = e.datasetIndex,
          n = i.chart;
        n.isDatasetVisible(s) ? (n.hide(s), e.hidden = !0) : (n.show(s), e.hidden = !1);
      },
      onHover: null,
      onLeave: null,
      labels: {
        color: t => t.chart.options.color,
        boxWidth: 40,
        padding: 10,
        generateLabels(t) {
          const e = t.data.datasets,
            {
              labels: {
                usePointStyle: i,
                pointStyle: s,
                textAlign: n,
                color: o,
                useBorderRadius: a,
                borderRadius: r
              }
            } = t.legend.options;
          return t._getSortedDatasetMetas().map(t => {
            const l = t.controller.getStyle(i ? 0 : void 0),
              h = ki(l.borderWidth);
            return {
              text: e[t.index].label,
              fillStyle: l.backgroundColor,
              fontColor: o,
              hidden: !t.visible,
              lineCap: l.borderCapStyle,
              lineDash: l.borderDash,
              lineDashOffset: l.borderDashOffset,
              lineJoin: l.borderJoinStyle,
              lineWidth: (h.width + h.height) / 4,
              strokeStyle: l.borderColor,
              pointStyle: s || l.pointStyle,
              rotation: l.rotation,
              textAlign: n || l.textAlign,
              borderRadius: a && (r || l.borderRadius),
              datasetIndex: t.index
            };
          }, this);
        }
      },
      title: {
        color: t => t.chart.options.color,
        display: !1,
        position: "center",
        text: ""
      }
    },
    descriptors: {
      _scriptable: t => !t.startsWith("on"),
      labels: {
        _scriptable: t => !["generateLabels", "filter", "sort"].includes(t)
      }
    }
  };
  class ya extends Hs {
    constructor(t) {
      super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
    }
    update(t, e) {
      const i = this.options;
      if (this.left = 0, this.top = 0, !i.display) return void (this.width = this.height = this.right = this.bottom = 0);
      this.width = this.right = t, this.height = this.bottom = e;
      const s = n(i.text) ? i.text.length : 1;
      this._padding = ki(i.padding);
      const o = s * Si(i.font).lineHeight + this._padding.height;
      this.isHorizontal() ? this.height = o : this.width = o;
    }
    isHorizontal() {
      const t = this.options.position;
      return "top" === t || "bottom" === t;
    }
    _drawArgs(t) {
      const {
          top: e,
          left: i,
          bottom: s,
          right: n,
          options: o
        } = this,
        a = o.align;
      let r,
        l,
        h,
        c = 0;
      return this.isHorizontal() ? (l = ft(a, i, n), h = e + t, r = n - i) : ("left" === o.position ? (l = i + t, h = ft(a, s, e), c = -.5 * C) : (l = n - t, h = ft(a, e, s), c = .5 * C), r = s - e), {
        titleX: l,
        titleY: h,
        maxWidth: r,
        rotation: c
      };
    }
    draw() {
      const t = this.ctx,
        e = this.options;
      if (!e.display) return;
      const i = Si(e.font),
        s = i.lineHeight / 2 + this._padding.top,
        {
          titleX: n,
          titleY: o,
          maxWidth: a,
          rotation: r
        } = this._drawArgs(s);
      Ne(t, e.text, 0, 0, i, {
        color: e.color,
        maxWidth: a,
        rotation: r,
        textAlign: ut(e.align),
        textBaseline: "middle",
        translation: [n, o]
      });
    }
  }
  var va = {
    id: "title",
    _element: ya,
    start(t, e, i) {
      !function (t, e) {
        const i = new ya({
          ctx: t.ctx,
          options: e,
          chart: t
        });
        as.configure(t, i, e), as.addBox(t, i), t.titleBlock = i;
      }(t, i);
    },
    stop(t) {
      const e = t.titleBlock;
      as.removeBox(t, e), delete t.titleBlock;
    },
    beforeUpdate(t, e, i) {
      const s = t.titleBlock;
      as.configure(t, s, i), s.options = i;
    },
    defaults: {
      align: "center",
      display: !1,
      font: {
        weight: "bold"
      },
      fullSize: !0,
      padding: 10,
      position: "top",
      text: "",
      weight: 2e3
    },
    defaultRoutes: {
      color: "color"
    },
    descriptors: {
      _scriptable: !0,
      _indexable: !1
    }
  };
  const Ma = new WeakMap();
  var wa = {
    id: "subtitle",
    start(t, e, i) {
      const s = new ya({
        ctx: t.ctx,
        options: i,
        chart: t
      });
      as.configure(t, s, i), as.addBox(t, s), Ma.set(t, s);
    },
    stop(t) {
      as.removeBox(t, Ma.get(t)), Ma.delete(t);
    },
    beforeUpdate(t, e, i) {
      const s = Ma.get(t);
      as.configure(t, s, i), s.options = i;
    },
    defaults: {
      align: "center",
      display: !1,
      font: {
        weight: "normal"
      },
      fullSize: !0,
      padding: 0,
      position: "top",
      text: "",
      weight: 1500
    },
    defaultRoutes: {
      color: "color"
    },
    descriptors: {
      _scriptable: !0,
      _indexable: !1
    }
  };
  const ka = {
    average(t) {
      if (!t.length) return !1;
      let e,
        i,
        s = 0,
        n = 0,
        o = 0;
      for (e = 0, i = t.length; e < i; ++e) {
        const i = t[e].element;
        if (i && i.hasValue()) {
          const t = i.tooltipPosition();
          s += t.x, n += t.y, ++o;
        }
      }
      return {
        x: s / o,
        y: n / o
      };
    },
    nearest(t, e) {
      if (!t.length) return !1;
      let i,
        s,
        n,
        o = e.x,
        a = e.y,
        r = Number.POSITIVE_INFINITY;
      for (i = 0, s = t.length; i < s; ++i) {
        const s = t[i].element;
        if (s && s.hasValue()) {
          const t = q(e, s.getCenterPoint());
          t < r && (r = t, n = s);
        }
      }
      if (n) {
        const t = n.tooltipPosition();
        o = t.x, a = t.y;
      }
      return {
        x: o,
        y: a
      };
    }
  };
  function Sa(t, e) {
    return e && (n(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
  }
  function Pa(t) {
    return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t;
  }
  function Da(t, e) {
    const {
        element: i,
        datasetIndex: s,
        index: n
      } = e,
      o = t.getDatasetMeta(s).controller,
      {
        label: a,
        value: r
      } = o.getLabelAndValue(n);
    return {
      chart: t,
      label: a,
      parsed: o.getParsed(n),
      raw: t.data.datasets[s].data[n],
      formattedValue: r,
      dataset: o.getDataset(),
      dataIndex: n,
      datasetIndex: s,
      element: i
    };
  }
  function Ca(t, e) {
    const i = t.chart.ctx,
      {
        body: s,
        footer: n,
        title: o
      } = t,
      {
        boxWidth: a,
        boxHeight: r
      } = e,
      l = Si(e.bodyFont),
      h = Si(e.titleFont),
      c = Si(e.footerFont),
      d = o.length,
      f = n.length,
      g = s.length,
      p = ki(e.padding);
    let m = p.height,
      b = 0,
      x = s.reduce((t, e) => t + e.before.length + e.lines.length + e.after.length, 0);
    if (x += t.beforeBody.length + t.afterBody.length, d && (m += d * h.lineHeight + (d - 1) * e.titleSpacing + e.titleMarginBottom), x) {
      m += g * (e.displayColors ? Math.max(r, l.lineHeight) : l.lineHeight) + (x - g) * l.lineHeight + (x - 1) * e.bodySpacing;
    }
    f && (m += e.footerMarginTop + f * c.lineHeight + (f - 1) * e.footerSpacing);
    let _ = 0;
    const y = function (t) {
      b = Math.max(b, i.measureText(t).width + _);
    };
    return i.save(), i.font = h.string, u(t.title, y), i.font = l.string, u(t.beforeBody.concat(t.afterBody), y), _ = e.displayColors ? a + 2 + e.boxPadding : 0, u(s, t => {
      u(t.before, y), u(t.lines, y), u(t.after, y);
    }), _ = 0, i.font = c.string, u(t.footer, y), i.restore(), b += p.width, {
      width: b,
      height: m
    };
  }
  function Oa(t, e, i, s) {
    const {
        x: n,
        width: o
      } = i,
      {
        width: a,
        chartArea: {
          left: r,
          right: l
        }
      } = t;
    let h = "center";
    return "center" === s ? h = n <= (r + l) / 2 ? "left" : "right" : n <= o / 2 ? h = "left" : n >= a - o / 2 && (h = "right"), function (t, e, i, s) {
      const {
          x: n,
          width: o
        } = s,
        a = i.caretSize + i.caretPadding;
      return "left" === t && n + o + a > e.width || "right" === t && n - o - a < 0 || void 0;
    }(h, t, e, i) && (h = "center"), h;
  }
  function Aa(t, e, i) {
    const s = i.yAlign || e.yAlign || function (t, e) {
      const {
        y: i,
        height: s
      } = e;
      return i < s / 2 ? "top" : i > t.height - s / 2 ? "bottom" : "center";
    }(t, i);
    return {
      xAlign: i.xAlign || e.xAlign || Oa(t, e, i, s),
      yAlign: s
    };
  }
  function Ta(t, e, i, s) {
    const {
        caretSize: n,
        caretPadding: o,
        cornerRadius: a
      } = t,
      {
        xAlign: r,
        yAlign: l
      } = i,
      h = n + o,
      {
        topLeft: c,
        topRight: d,
        bottomLeft: u,
        bottomRight: f
      } = wi(a);
    let g = function (t, e) {
      let {
        x: i,
        width: s
      } = t;
      return "right" === e ? i -= s : "center" === e && (i -= s / 2), i;
    }(e, r);
    const p = function (t, e, i) {
      let {
        y: s,
        height: n
      } = t;
      return "top" === e ? s += i : s -= "bottom" === e ? n + i : n / 2, s;
    }(e, l, h);
    return "center" === l ? "left" === r ? g += h : "right" === r && (g -= h) : "left" === r ? g -= Math.max(c, u) + n : "right" === r && (g += Math.max(d, f) + n), {
      x: J(g, 0, s.width - e.width),
      y: J(p, 0, s.height - e.height)
    };
  }
  function La(t, e, i) {
    const s = ki(i.padding);
    return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - s.right : t.x + s.left;
  }
  function Ea(t) {
    return Sa([], Pa(t));
  }
  function Ra(t, e) {
    const i = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
    return i ? t.override(i) : t;
  }
  const Ia = {
    beforeTitle: e,
    title(t) {
      if (t.length > 0) {
        const e = t[0],
          i = e.chart.data.labels,
          s = i ? i.length : 0;
        if (this && this.options && "dataset" === this.options.mode) return e.dataset.label || "";
        if (e.label) return e.label;
        if (s > 0 && e.dataIndex < s) return i[e.dataIndex];
      }
      return "";
    },
    afterTitle: e,
    beforeBody: e,
    beforeLabel: e,
    label(t) {
      if (this && this.options && "dataset" === this.options.mode) return t.label + ": " + t.formattedValue || t.formattedValue;
      let e = t.dataset.label || "";
      e && (e += ": ");
      const i = t.formattedValue;
      return s(i) || (e += i), e;
    },
    labelColor(t) {
      const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
      return {
        borderColor: e.borderColor,
        backgroundColor: e.backgroundColor,
        borderWidth: e.borderWidth,
        borderDash: e.borderDash,
        borderDashOffset: e.borderDashOffset,
        borderRadius: 0
      };
    },
    labelTextColor() {
      return this.options.bodyColor;
    },
    labelPointStyle(t) {
      const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
      return {
        pointStyle: e.pointStyle,
        rotation: e.rotation
      };
    },
    afterLabel: e,
    afterBody: e,
    beforeFooter: e,
    footer: e,
    afterFooter: e
  };
  function za(t, e, i, s) {
    const n = t[e].call(i, s);
    return void 0 === n ? Ia[e].call(i, s) : n;
  }
  class Fa extends Hs {
    static positioners = ka;
    constructor(t) {
      super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0;
    }
    initialize(t) {
      this.options = t, this._cachedAnimations = void 0, this.$context = void 0;
    }
    _resolveAnimations() {
      const t = this._cachedAnimations;
      if (t) return t;
      const e = this.chart,
        i = this.options.setContext(this.getContext()),
        s = i.enabled && e.options.animation && i.animations,
        n = new Os(this.chart, s);
      return s._cacheable && (this._cachedAnimations = Object.freeze(n)), n;
    }
    getContext() {
      return this.$context || (this.$context = (t = this.chart.getContext(), e = this, i = this._tooltipItems, Ci(t, {
        tooltip: e,
        tooltipItems: i,
        type: "tooltip"
      })));
      var t, e, i;
    }
    getTitle(t, e) {
      const {
          callbacks: i
        } = e,
        s = za(i, "beforeTitle", this, t),
        n = za(i, "title", this, t),
        o = za(i, "afterTitle", this, t);
      let a = [];
      return a = Sa(a, Pa(s)), a = Sa(a, Pa(n)), a = Sa(a, Pa(o)), a;
    }
    getBeforeBody(t, e) {
      return Ea(za(e.callbacks, "beforeBody", this, t));
    }
    getBody(t, e) {
      const {
          callbacks: i
        } = e,
        s = [];
      return u(t, t => {
        const e = {
            before: [],
            lines: [],
            after: []
          },
          n = Ra(i, t);
        Sa(e.before, Pa(za(n, "beforeLabel", this, t))), Sa(e.lines, za(n, "label", this, t)), Sa(e.after, Pa(za(n, "afterLabel", this, t))), s.push(e);
      }), s;
    }
    getAfterBody(t, e) {
      return Ea(za(e.callbacks, "afterBody", this, t));
    }
    getFooter(t, e) {
      const {
          callbacks: i
        } = e,
        s = za(i, "beforeFooter", this, t),
        n = za(i, "footer", this, t),
        o = za(i, "afterFooter", this, t);
      let a = [];
      return a = Sa(a, Pa(s)), a = Sa(a, Pa(n)), a = Sa(a, Pa(o)), a;
    }
    _createItems(t) {
      const e = this._active,
        i = this.chart.data,
        s = [],
        n = [],
        o = [];
      let a,
        r,
        l = [];
      for (a = 0, r = e.length; a < r; ++a) l.push(Da(this.chart, e[a]));
      return t.filter && (l = l.filter((e, s, n) => t.filter(e, s, n, i))), t.itemSort && (l = l.sort((e, s) => t.itemSort(e, s, i))), u(l, e => {
        const i = Ra(t.callbacks, e);
        s.push(za(i, "labelColor", this, e)), n.push(za(i, "labelPointStyle", this, e)), o.push(za(i, "labelTextColor", this, e));
      }), this.labelColors = s, this.labelPointStyles = n, this.labelTextColors = o, this.dataPoints = l, l;
    }
    update(t, e) {
      const i = this.options.setContext(this.getContext()),
        s = this._active;
      let n,
        o = [];
      if (s.length) {
        const t = ka[i.position].call(this, s, this._eventPosition);
        o = this._createItems(i), this.title = this.getTitle(o, i), this.beforeBody = this.getBeforeBody(o, i), this.body = this.getBody(o, i), this.afterBody = this.getAfterBody(o, i), this.footer = this.getFooter(o, i);
        const e = this._size = Ca(this, i),
          a = Object.assign({}, t, e),
          r = Aa(this.chart, i, a),
          l = Ta(i, a, r, this.chart);
        this.xAlign = r.xAlign, this.yAlign = r.yAlign, n = {
          opacity: 1,
          x: l.x,
          y: l.y,
          width: e.width,
          height: e.height,
          caretX: t.x,
          caretY: t.y
        };
      } else 0 !== this.opacity && (n = {
        opacity: 0
      });
      this._tooltipItems = o, this.$context = void 0, n && this._resolveAnimations().update(this, n), t && i.external && i.external.call(this, {
        chart: this.chart,
        tooltip: this,
        replay: e
      });
    }
    drawCaret(t, e, i, s) {
      const n = this.getCaretPosition(t, i, s);
      e.lineTo(n.x1, n.y1), e.lineTo(n.x2, n.y2), e.lineTo(n.x3, n.y3);
    }
    getCaretPosition(t, e, i) {
      const {
          xAlign: s,
          yAlign: n
        } = this,
        {
          caretSize: o,
          cornerRadius: a
        } = i,
        {
          topLeft: r,
          topRight: l,
          bottomLeft: h,
          bottomRight: c
        } = wi(a),
        {
          x: d,
          y: u
        } = t,
        {
          width: f,
          height: g
        } = e;
      let p, m, b, x, _, y;
      return "center" === n ? (_ = u + g / 2, "left" === s ? (p = d, m = p - o, x = _ + o, y = _ - o) : (p = d + f, m = p + o, x = _ - o, y = _ + o), b = p) : (m = "left" === s ? d + Math.max(r, h) + o : "right" === s ? d + f - Math.max(l, c) - o : this.caretX, "top" === n ? (x = u, _ = x - o, p = m - o, b = m + o) : (x = u + g, _ = x + o, p = m + o, b = m - o), y = x), {
        x1: p,
        x2: m,
        x3: b,
        y1: x,
        y2: _,
        y3: y
      };
    }
    drawTitle(t, e, i) {
      const s = this.title,
        n = s.length;
      let o, a, r;
      if (n) {
        const l = Oi(i.rtl, this.x, this.width);
        for (t.x = La(this, i.titleAlign, i), e.textAlign = l.textAlign(i.titleAlign), e.textBaseline = "middle", o = Si(i.titleFont), a = i.titleSpacing, e.fillStyle = i.titleColor, e.font = o.string, r = 0; r < n; ++r) e.fillText(s[r], l.x(t.x), t.y + o.lineHeight / 2), t.y += o.lineHeight + a, r + 1 === n && (t.y += i.titleMarginBottom - a);
      }
    }
    _drawColorBox(t, e, i, s, n) {
      const a = this.labelColors[i],
        r = this.labelPointStyles[i],
        {
          boxHeight: l,
          boxWidth: h
        } = n,
        c = Si(n.bodyFont),
        d = La(this, "left", n),
        u = s.x(d),
        f = l < c.lineHeight ? (c.lineHeight - l) / 2 : 0,
        g = e.y + f;
      if (n.usePointStyle) {
        const e = {
            radius: Math.min(h, l) / 2,
            pointStyle: r.pointStyle,
            rotation: r.rotation,
            borderWidth: 1
          },
          i = s.leftForLtr(u, h) + h / 2,
          o = g + l / 2;
        t.strokeStyle = n.multiKeyBackground, t.fillStyle = n.multiKeyBackground, Le(t, e, i, o), t.strokeStyle = a.borderColor, t.fillStyle = a.backgroundColor, Le(t, e, i, o);
      } else {
        t.lineWidth = o(a.borderWidth) ? Math.max(...Object.values(a.borderWidth)) : a.borderWidth || 1, t.strokeStyle = a.borderColor, t.setLineDash(a.borderDash || []), t.lineDashOffset = a.borderDashOffset || 0;
        const e = s.leftForLtr(u, h),
          i = s.leftForLtr(s.xPlus(u, 1), h - 2),
          r = wi(a.borderRadius);
        Object.values(r).some(t => 0 !== t) ? (t.beginPath(), t.fillStyle = n.multiKeyBackground, He(t, {
          x: e,
          y: g,
          w: h,
          h: l,
          radius: r
        }), t.fill(), t.stroke(), t.fillStyle = a.backgroundColor, t.beginPath(), He(t, {
          x: i,
          y: g + 1,
          w: h - 2,
          h: l - 2,
          radius: r
        }), t.fill()) : (t.fillStyle = n.multiKeyBackground, t.fillRect(e, g, h, l), t.strokeRect(e, g, h, l), t.fillStyle = a.backgroundColor, t.fillRect(i, g + 1, h - 2, l - 2));
      }
      t.fillStyle = this.labelTextColors[i];
    }
    drawBody(t, e, i) {
      const {
          body: s
        } = this,
        {
          bodySpacing: n,
          bodyAlign: o,
          displayColors: a,
          boxHeight: r,
          boxWidth: l,
          boxPadding: h
        } = i,
        c = Si(i.bodyFont);
      let d = c.lineHeight,
        f = 0;
      const g = Oi(i.rtl, this.x, this.width),
        p = function (i) {
          e.fillText(i, g.x(t.x + f), t.y + d / 2), t.y += d + n;
        },
        m = g.textAlign(o);
      let b, x, _, y, v, M, w;
      for (e.textAlign = o, e.textBaseline = "middle", e.font = c.string, t.x = La(this, m, i), e.fillStyle = i.bodyColor, u(this.beforeBody, p), f = a && "right" !== m ? "center" === o ? l / 2 + h : l + 2 + h : 0, y = 0, M = s.length; y < M; ++y) {
        for (b = s[y], x = this.labelTextColors[y], e.fillStyle = x, u(b.before, p), _ = b.lines, a && _.length && (this._drawColorBox(e, t, y, g, i), d = Math.max(c.lineHeight, r)), v = 0, w = _.length; v < w; ++v) p(_[v]), d = c.lineHeight;
        u(b.after, p);
      }
      f = 0, d = c.lineHeight, u(this.afterBody, p), t.y -= n;
    }
    drawFooter(t, e, i) {
      const s = this.footer,
        n = s.length;
      let o, a;
      if (n) {
        const r = Oi(i.rtl, this.x, this.width);
        for (t.x = La(this, i.footerAlign, i), t.y += i.footerMarginTop, e.textAlign = r.textAlign(i.footerAlign), e.textBaseline = "middle", o = Si(i.footerFont), e.fillStyle = i.footerColor, e.font = o.string, a = 0; a < n; ++a) e.fillText(s[a], r.x(t.x), t.y + o.lineHeight / 2), t.y += o.lineHeight + i.footerSpacing;
      }
    }
    drawBackground(t, e, i, s) {
      const {
          xAlign: n,
          yAlign: o
        } = this,
        {
          x: a,
          y: r
        } = t,
        {
          width: l,
          height: h
        } = i,
        {
          topLeft: c,
          topRight: d,
          bottomLeft: u,
          bottomRight: f
        } = wi(s.cornerRadius);
      e.fillStyle = s.backgroundColor, e.strokeStyle = s.borderColor, e.lineWidth = s.borderWidth, e.beginPath(), e.moveTo(a + c, r), "top" === o && this.drawCaret(t, e, i, s), e.lineTo(a + l - d, r), e.quadraticCurveTo(a + l, r, a + l, r + d), "center" === o && "right" === n && this.drawCaret(t, e, i, s), e.lineTo(a + l, r + h - f), e.quadraticCurveTo(a + l, r + h, a + l - f, r + h), "bottom" === o && this.drawCaret(t, e, i, s), e.lineTo(a + u, r + h), e.quadraticCurveTo(a, r + h, a, r + h - u), "center" === o && "left" === n && this.drawCaret(t, e, i, s), e.lineTo(a, r + c), e.quadraticCurveTo(a, r, a + c, r), e.closePath(), e.fill(), s.borderWidth > 0 && e.stroke();
    }
    _updateAnimationTarget(t) {
      const e = this.chart,
        i = this.$animations,
        s = i && i.x,
        n = i && i.y;
      if (s || n) {
        const i = ka[t.position].call(this, this._active, this._eventPosition);
        if (!i) return;
        const o = this._size = Ca(this, t),
          a = Object.assign({}, i, this._size),
          r = Aa(e, t, a),
          l = Ta(t, a, r, e);
        s._to === l.x && n._to === l.y || (this.xAlign = r.xAlign, this.yAlign = r.yAlign, this.width = o.width, this.height = o.height, this.caretX = i.x, this.caretY = i.y, this._resolveAnimations().update(this, l));
      }
    }
    _willRender() {
      return !!this.opacity;
    }
    draw(t) {
      const e = this.options.setContext(this.getContext());
      let i = this.opacity;
      if (!i) return;
      this._updateAnimationTarget(e);
      const s = {
          width: this.width,
          height: this.height
        },
        n = {
          x: this.x,
          y: this.y
        };
      i = Math.abs(i) < .001 ? 0 : i;
      const o = ki(e.padding),
        a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
      e.enabled && a && (t.save(), t.globalAlpha = i, this.drawBackground(n, t, s, e), Ai(t, e.textDirection), n.y += o.top, this.drawTitle(n, t, e), this.drawBody(n, t, e), this.drawFooter(n, t, e), Ti(t, e.textDirection), t.restore());
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(t, e) {
      const i = this._active,
        s = t.map(_ref9 => {
          let {
            datasetIndex: t,
            index: e
          } = _ref9;
          const i = this.chart.getDatasetMeta(t);
          if (!i) throw new Error("Cannot find a dataset at index " + t);
          return {
            datasetIndex: t,
            element: i.data[e],
            index: e
          };
        }),
        n = !f(i, s),
        o = this._positionChanged(s, e);
      (n || o) && (this._active = s, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0));
    }
    handleEvent(t, e) {
      let i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
      if (e && this._ignoreReplayEvents) return !1;
      this._ignoreReplayEvents = !1;
      const s = this.options,
        n = this._active || [],
        o = this._getActiveElements(t, n, e, i),
        a = this._positionChanged(o, t),
        r = e || !f(o, n) || a;
      return r && (this._active = o, (s.enabled || s.external) && (this._eventPosition = {
        x: t.x,
        y: t.y
      }, this.update(!0, e))), r;
    }
    _getActiveElements(t, e, i, s) {
      const n = this.options;
      if ("mouseout" === t.type) return [];
      if (!s) return e;
      const o = this.chart.getElementsAtEventForMode(t, n.mode, n, i);
      return n.reverse && o.reverse(), o;
    }
    _positionChanged(t, e) {
      const {
          caretX: i,
          caretY: s,
          options: n
        } = this,
        o = ka[n.position].call(this, t, e);
      return !1 !== o && (i !== o.x || s !== o.y);
    }
  }
  var Va = {
    id: "tooltip",
    _element: Fa,
    positioners: ka,
    afterInit(t, e, i) {
      i && (t.tooltip = new Fa({
        chart: t,
        options: i
      }));
    },
    beforeUpdate(t, e, i) {
      t.tooltip && t.tooltip.initialize(i);
    },
    reset(t, e, i) {
      t.tooltip && t.tooltip.initialize(i);
    },
    afterDraw(t) {
      const e = t.tooltip;
      if (e && e._willRender()) {
        const i = {
          tooltip: e
        };
        if (!1 === t.notifyPlugins("beforeTooltipDraw", {
          ...i,
          cancelable: !0
        })) return;
        e.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", i);
      }
    },
    afterEvent(t, e) {
      if (t.tooltip) {
        const i = e.replay;
        t.tooltip.handleEvent(e.event, i, e.inChartArea) && (e.changed = !0);
      }
    },
    defaults: {
      enabled: !0,
      external: null,
      position: "average",
      backgroundColor: "rgba(0,0,0,0.8)",
      titleColor: "#fff",
      titleFont: {
        weight: "bold"
      },
      titleSpacing: 2,
      titleMarginBottom: 6,
      titleAlign: "left",
      bodyColor: "#fff",
      bodySpacing: 2,
      bodyFont: {},
      bodyAlign: "left",
      footerColor: "#fff",
      footerSpacing: 2,
      footerMarginTop: 6,
      footerFont: {
        weight: "bold"
      },
      footerAlign: "left",
      padding: 6,
      caretPadding: 2,
      caretSize: 5,
      cornerRadius: 6,
      boxHeight: (t, e) => e.bodyFont.size,
      boxWidth: (t, e) => e.bodyFont.size,
      multiKeyBackground: "#fff",
      displayColors: !0,
      boxPadding: 0,
      borderColor: "rgba(0,0,0,0)",
      borderWidth: 0,
      animation: {
        duration: 400,
        easing: "easeOutQuart"
      },
      animations: {
        numbers: {
          type: "number",
          properties: ["x", "y", "width", "height", "caretX", "caretY"]
        },
        opacity: {
          easing: "linear",
          duration: 200
        }
      },
      callbacks: Ia
    },
    defaultRoutes: {
      bodyFont: "font",
      footerFont: "font",
      titleFont: "font"
    },
    descriptors: {
      _scriptable: t => "filter" !== t && "itemSort" !== t && "external" !== t,
      _indexable: !1,
      callbacks: {
        _scriptable: !1,
        _indexable: !1
      },
      animation: {
        _fallback: !1
      },
      animations: {
        _fallback: "animation"
      }
    },
    additionalOptionScopes: ["interaction"]
  };
  return On.register($n, Ho, uo, t), On.helpers = {
    ...Wi
  }, On._adapters = En, On.Animation = Cs, On.Animations = Os, On.animator = xt, On.controllers = en.controllers.items, On.DatasetController = Ns, On.Element = Hs, On.elements = uo, On.Interaction = Xi, On.layouts = as, On.platforms = Ss, On.Scale = Js, On.Ticks = ae, Object.assign(On, $n, Ho, uo, t, Ss), On.Chart = On, "undefined" != typeof window && (window.Chart = On), On;
});

/***/ }),

/***/ "./src/js/vendor/focus-visible.js":
/*!****************************************!*\
  !*** ./src/js/vendor/focus-visible.js ***!
  \****************************************/
/***/ (() => {

/**
 * Applies the :focus-visible polyfill at the given scope.
 * A scope in this case is either the top-level Document or a Shadow Root.
 *
 * @param {(Document|ShadowRoot)} scope
 * @see https://github.com/WICG/focus-visible
 */
function applyFocusVisiblePolyfill(scope) {
  var hadKeyboardEvent = true;
  var hadFocusVisibleRecently = false;
  var hadFocusVisibleRecentlyTimeout = null;
  var inputTypesAllowlist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    'datetime-local': true
  };

  /**
   * Helper function for legacy browsers and iframes which sometimes focus
   * elements like document, body, and non-interactive SVG.
   * @param {Element} el
   */
  function isValidFocusTarget(el) {
    if (el && el !== document && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) {
      return true;
    }
    return false;
  }

  /**
   * Computes whether the given element should automatically trigger the
   * `focus-visible` class being added, i.e. whether it should always match
   * `:focus-visible` when focused.
   * @param {Element} el
   * @return {boolean}
   */
  function focusTriggersKeyboardModality(el) {
    var type = el.type;
    var tagName = el.tagName;
    if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {
      return true;
    }
    if (tagName === 'TEXTAREA' && !el.readOnly) {
      return true;
    }
    if (el.isContentEditable) {
      return true;
    }
    return false;
  }

  /**
   * Add the `focus-visible` class to the given element if it was not added by
   * the author.
   * @param {Element} el
   */
  function addFocusVisibleClass(el) {
    if (el.classList.contains('focus-visible')) {
      return;
    }
    el.classList.add('focus-visible');
    el.setAttribute('data-focus-visible-added', '');
  }

  /**
   * Remove the `focus-visible` class from the given element if it was not
   * originally added by the author.
   * @param {Element} el
   */
  function removeFocusVisibleClass(el) {
    if (!el.hasAttribute('data-focus-visible-added')) {
      return;
    }
    el.classList.remove('focus-visible');
    el.removeAttribute('data-focus-visible-added');
  }

  /**
   * If the most recent user interaction was via the keyboard;
   * and the key press did not include a meta, alt/option, or control key;
   * then the modality is keyboard. Otherwise, the modality is not keyboard.
   * Apply `focus-visible` to any current active element and keep track
   * of our keyboard modality state with `hadKeyboardEvent`.
   * @param {KeyboardEvent} e
   */
  function onKeyDown(e) {
    if (e.metaKey || e.altKey || e.ctrlKey) {
      return;
    }
    if (isValidFocusTarget(scope.activeElement)) {
      addFocusVisibleClass(scope.activeElement);
    }
    hadKeyboardEvent = true;
  }

  /**
   * If at any point a user clicks with a pointing device, ensure that we change
   * the modality away from keyboard.
   * This avoids the situation where a user presses a key on an already focused
   * element, and then clicks on a different element, focusing it with a
   * pointing device, while we still think we're in keyboard modality.
   * @param {Event} e
   */
  function onPointerDown(e) {
    hadKeyboardEvent = false;
  }

  /**
   * On `focus`, add the `focus-visible` class to the target if:
   * - the target received focus as a result of keyboard navigation, or
   * - the event target is an element that will likely require interaction
   *   via the keyboard (e.g. a text box)
   * @param {Event} e
   */
  function onFocus(e) {
    // Prevent IE from focusing the document or HTML element.
    if (!isValidFocusTarget(e.target)) {
      return;
    }
    if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
      addFocusVisibleClass(e.target);
    }
  }

  /**
   * On `blur`, remove the `focus-visible` class from the target.
   * @param {Event} e
   */
  function onBlur(e) {
    if (!isValidFocusTarget(e.target)) {
      return;
    }
    if (e.target.classList.contains('focus-visible') || e.target.hasAttribute('data-focus-visible-added')) {
      // To detect a tab/window switch, we look for a blur event followed
      // rapidly by a visibility change.
      // If we don't see a visibility change within 100ms, it's probably a
      // regular focus change.
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
        hadFocusVisibleRecently = false;
      }, 100);
      removeFocusVisibleClass(e.target);
    }
  }

  /**
   * If the user changes tabs, keep track of whether or not the previously
   * focused element had .focus-visible.
   * @param {Event} e
   */
  function onVisibilityChange(e) {
    if (document.visibilityState === 'hidden') {
      // If the tab becomes active again, the browser will handle calling focus
      // on the element (Safari actually calls it twice).
      // If this tab change caused a blur on an element with focus-visible,
      // re-apply the class when the user switches back to the tab.
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }
      addInitialPointerMoveListeners();
    }
  }

  /**
   * Add a group of listeners to detect usage of any pointing devices.
   * These listeners will be added when the polyfill first loads, and anytime
   * the window is blurred, so that they are active when the window regains
   * focus.
   */
  function addInitialPointerMoveListeners() {
    document.addEventListener('mousemove', onInitialPointerMove);
    document.addEventListener('mousedown', onInitialPointerMove);
    document.addEventListener('mouseup', onInitialPointerMove);
    document.addEventListener('pointermove', onInitialPointerMove);
    document.addEventListener('pointerdown', onInitialPointerMove);
    document.addEventListener('pointerup', onInitialPointerMove);
    document.addEventListener('touchmove', onInitialPointerMove);
    document.addEventListener('touchstart', onInitialPointerMove);
    document.addEventListener('touchend', onInitialPointerMove);
  }
  function removeInitialPointerMoveListeners() {
    document.removeEventListener('mousemove', onInitialPointerMove);
    document.removeEventListener('mousedown', onInitialPointerMove);
    document.removeEventListener('mouseup', onInitialPointerMove);
    document.removeEventListener('pointermove', onInitialPointerMove);
    document.removeEventListener('pointerdown', onInitialPointerMove);
    document.removeEventListener('pointerup', onInitialPointerMove);
    document.removeEventListener('touchmove', onInitialPointerMove);
    document.removeEventListener('touchstart', onInitialPointerMove);
    document.removeEventListener('touchend', onInitialPointerMove);
  }

  /**
   * When the polfyill first loads, assume the user is in keyboard modality.
   * If any event is received from a pointing device (e.g. mouse, pointer,
   * touch), turn off keyboard modality.
   * This accounts for situations where focus enters the page from the URL bar.
   * @param {Event} e
   */
  function onInitialPointerMove(e) {
    // Work around a Safari quirk that fires a mousemove on <html> whenever the
    // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
    if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
      return;
    }
    hadKeyboardEvent = false;
    removeInitialPointerMoveListeners();
  }

  // For some kinds of state, we are interested in changes at the global scope
  // only. For example, global pointer input, global key presses and global
  // visibility change should affect the state at every scope:
  document.addEventListener('keydown', onKeyDown, true);
  document.addEventListener('mousedown', onPointerDown, true);
  document.addEventListener('pointerdown', onPointerDown, true);
  document.addEventListener('touchstart', onPointerDown, true);
  document.addEventListener('visibilitychange', onVisibilityChange, true);
  addInitialPointerMoveListeners();

  // For focus and blur, we specifically care about state changes in the local
  // scope. This is because focus / blur events that originate from within a
  // shadow root are not re-dispatched from the host element if it was already
  // the active element in its own scope:
  scope.addEventListener('focus', onFocus, true);
  scope.addEventListener('blur', onBlur, true);

  // We detect that a node is a ShadowRoot by ensuring that it is a
  // DocumentFragment and also has a host property. This check covers native
  // implementation and polyfill implementation transparently. If we only cared
  // about the native implementation, we could just check if the scope was
  // an instance of a ShadowRoot.
  if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
    // Since a ShadowRoot is a special kind of DocumentFragment, it does not
    // have a root element to add a class to. So, we add this attribute to the
    // host element instead:
    scope.host.setAttribute('data-js-focus-visible', '');
  } else if (scope.nodeType === Node.DOCUMENT_NODE) {
    document.documentElement.classList.add('js-focus-visible');
    document.documentElement.setAttribute('data-js-focus-visible', '');
  }
}

// It is important to wrap all references to global window and document in
// these checks to support server-side rendering use cases
// @see https://github.com/WICG/focus-visible/issues/199
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  // Make the polyfill helper globally available. This can be used as a signal
  // to interested libraries that wish to coordinate with the polyfill for e.g.,
  // applying the polyfill to a shadow root:
  window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill;

  // Notify interested libraries of the polyfill's presence, in case the
  // polyfill was loaded lazily:
  var event;
  try {
    event = new CustomEvent('focus-visible-polyfill-ready');
  } catch (error) {
    // IE11 does not support using CustomEvent as a constructor directly:
    event = document.createEvent('CustomEvent');
    event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});
  }
  window.dispatchEvent(event);
}
if (typeof document !== 'undefined') {
  // Apply the polyfill to the global document, so that no JavaScript
  // coordination is required to use the polyfill in the top-level document:
  applyFocusVisiblePolyfill(document);
}

/***/ }),

/***/ "./node_modules/dom7/dom7.esm.js":
/*!***************************************!*\
  !*** ./node_modules/dom7/dom7.esm.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ $),
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   addClass: () => (/* binding */ addClass),
/* harmony export */   animate: () => (/* binding */ animate),
/* harmony export */   animationEnd: () => (/* binding */ animationEnd),
/* harmony export */   append: () => (/* binding */ append),
/* harmony export */   appendTo: () => (/* binding */ appendTo),
/* harmony export */   attr: () => (/* binding */ attr),
/* harmony export */   blur: () => (/* binding */ blur),
/* harmony export */   change: () => (/* binding */ change),
/* harmony export */   children: () => (/* binding */ children),
/* harmony export */   click: () => (/* binding */ click),
/* harmony export */   closest: () => (/* binding */ closest),
/* harmony export */   css: () => (/* binding */ css),
/* harmony export */   data: () => (/* binding */ data),
/* harmony export */   dataset: () => (/* binding */ dataset),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   detach: () => (/* binding */ detach),
/* harmony export */   each: () => (/* binding */ each),
/* harmony export */   empty: () => (/* binding */ empty),
/* harmony export */   eq: () => (/* binding */ eq),
/* harmony export */   filter: () => (/* binding */ filter),
/* harmony export */   find: () => (/* binding */ find),
/* harmony export */   focus: () => (/* binding */ focus),
/* harmony export */   focusin: () => (/* binding */ focusin),
/* harmony export */   focusout: () => (/* binding */ focusout),
/* harmony export */   hasClass: () => (/* binding */ hasClass),
/* harmony export */   height: () => (/* binding */ height),
/* harmony export */   hide: () => (/* binding */ hide),
/* harmony export */   html: () => (/* binding */ html),
/* harmony export */   index: () => (/* binding */ index),
/* harmony export */   insertAfter: () => (/* binding */ insertAfter),
/* harmony export */   insertBefore: () => (/* binding */ insertBefore),
/* harmony export */   is: () => (/* binding */ is),
/* harmony export */   keydown: () => (/* binding */ keydown),
/* harmony export */   keypress: () => (/* binding */ keypress),
/* harmony export */   keyup: () => (/* binding */ keyup),
/* harmony export */   mousedown: () => (/* binding */ mousedown),
/* harmony export */   mouseenter: () => (/* binding */ mouseenter),
/* harmony export */   mouseleave: () => (/* binding */ mouseleave),
/* harmony export */   mousemove: () => (/* binding */ mousemove),
/* harmony export */   mouseout: () => (/* binding */ mouseout),
/* harmony export */   mouseover: () => (/* binding */ mouseover),
/* harmony export */   mouseup: () => (/* binding */ mouseup),
/* harmony export */   next: () => (/* binding */ next),
/* harmony export */   nextAll: () => (/* binding */ nextAll),
/* harmony export */   off: () => (/* binding */ off),
/* harmony export */   offset: () => (/* binding */ offset),
/* harmony export */   on: () => (/* binding */ on),
/* harmony export */   once: () => (/* binding */ once),
/* harmony export */   outerHeight: () => (/* binding */ outerHeight),
/* harmony export */   outerWidth: () => (/* binding */ outerWidth),
/* harmony export */   parent: () => (/* binding */ parent),
/* harmony export */   parents: () => (/* binding */ parents),
/* harmony export */   prepend: () => (/* binding */ prepend),
/* harmony export */   prependTo: () => (/* binding */ prependTo),
/* harmony export */   prev: () => (/* binding */ prev),
/* harmony export */   prevAll: () => (/* binding */ prevAll),
/* harmony export */   prop: () => (/* binding */ prop),
/* harmony export */   remove: () => (/* binding */ remove),
/* harmony export */   removeAttr: () => (/* binding */ removeAttr),
/* harmony export */   removeClass: () => (/* binding */ removeClass),
/* harmony export */   removeData: () => (/* binding */ removeData),
/* harmony export */   resize: () => (/* binding */ resize),
/* harmony export */   scroll: () => (/* binding */ scroll),
/* harmony export */   scrollLeft: () => (/* binding */ scrollLeft),
/* harmony export */   scrollTo: () => (/* binding */ scrollTo),
/* harmony export */   scrollTop: () => (/* binding */ scrollTop),
/* harmony export */   show: () => (/* binding */ show),
/* harmony export */   siblings: () => (/* binding */ siblings),
/* harmony export */   stop: () => (/* binding */ stop),
/* harmony export */   styles: () => (/* binding */ styles),
/* harmony export */   submit: () => (/* binding */ submit),
/* harmony export */   text: () => (/* binding */ text),
/* harmony export */   toggleClass: () => (/* binding */ toggleClass),
/* harmony export */   touchend: () => (/* binding */ touchend),
/* harmony export */   touchmove: () => (/* binding */ touchmove),
/* harmony export */   touchstart: () => (/* binding */ touchstart),
/* harmony export */   transform: () => (/* binding */ transform),
/* harmony export */   transition: () => (/* binding */ transition),
/* harmony export */   transitionEnd: () => (/* binding */ transitionEnd),
/* harmony export */   transitionStart: () => (/* binding */ transitionStart),
/* harmony export */   trigger: () => (/* binding */ trigger),
/* harmony export */   val: () => (/* binding */ val),
/* harmony export */   value: () => (/* binding */ value),
/* harmony export */   width: () => (/* binding */ width)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/**
 * Dom7 4.0.6
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * https://framework7.io/docs/dom7.html
 *
 * Copyright 2023, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: February 2, 2023
 */


/* eslint-disable no-proto */
function makeReactive(obj) {
  const proto = obj.__proto__;
  Object.defineProperty(obj, '__proto__', {
    get() {
      return proto;
    },

    set(value) {
      proto.__proto__ = value;
    }

  });
}

class Dom7 extends Array {
  constructor(items) {
    if (typeof items === 'number') {
      super(items);
    } else {
      super(...(items || []));
      makeReactive(this);
    }
  }

}

function arrayFlat(arr = []) {
  const res = [];
  arr.forEach(el => {
    if (Array.isArray(el)) {
      res.push(...arrayFlat(el));
    } else {
      res.push(el);
    }
  });
  return res;
}
function arrayFilter(arr, callback) {
  return Array.prototype.filter.call(arr, callback);
}
function arrayUnique(arr) {
  const uniqueArray = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
  }

  return uniqueArray;
}
function toCamelCase(string) {
  return string.toLowerCase().replace(/-(.)/g, (match, group) => group.toUpperCase());
}

// eslint-disable-next-line

function qsa(selector, context) {
  if (typeof selector !== 'string') {
    return [selector];
  }

  const a = [];
  const res = context.querySelectorAll(selector);

  for (let i = 0; i < res.length; i += 1) {
    a.push(res[i]);
  }

  return a;
}

function $(selector, context) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  let arr = [];

  if (!context && selector instanceof Dom7) {
    return selector;
  }

  if (!selector) {
    return new Dom7(arr);
  }

  if (typeof selector === 'string') {
    const html = selector.trim();

    if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
      let toCreate = 'div';
      if (html.indexOf('<li') === 0) toCreate = 'ul';
      if (html.indexOf('<tr') === 0) toCreate = 'tbody';
      if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
      if (html.indexOf('<tbody') === 0) toCreate = 'table';
      if (html.indexOf('<option') === 0) toCreate = 'select';
      const tempParent = document.createElement(toCreate);
      tempParent.innerHTML = html;

      for (let i = 0; i < tempParent.childNodes.length; i += 1) {
        arr.push(tempParent.childNodes[i]);
      }
    } else {
      arr = qsa(selector.trim(), context || document);
    } // arr = qsa(selector, document);

  } else if (selector.nodeType || selector === window || selector === document) {
    arr.push(selector);
  } else if (Array.isArray(selector)) {
    if (selector instanceof Dom7) return selector;
    arr = selector;
  }

  return new Dom7(arrayUnique(arr));
}

$.fn = Dom7.prototype;

// eslint-disable-next-line

function addClass(...classes) {
  const classNames = arrayFlat(classes.map(c => c.split(' ')));
  this.forEach(el => {
    el.classList.add(...classNames);
  });
  return this;
}

function removeClass(...classes) {
  const classNames = arrayFlat(classes.map(c => c.split(' ')));
  this.forEach(el => {
    el.classList.remove(...classNames);
  });
  return this;
}

function toggleClass(...classes) {
  const classNames = arrayFlat(classes.map(c => c.split(' ')));
  this.forEach(el => {
    classNames.forEach(className => {
      el.classList.toggle(className);
    });
  });
}

function hasClass(...classes) {
  const classNames = arrayFlat(classes.map(c => c.split(' ')));
  return arrayFilter(this, el => {
    return classNames.filter(className => el.classList.contains(className)).length > 0;
  }).length > 0;
}

function attr(attrs, value) {
  if (arguments.length === 1 && typeof attrs === 'string') {
    // Get attr
    if (this[0]) return this[0].getAttribute(attrs);
    return undefined;
  } // Set attrs


  for (let i = 0; i < this.length; i += 1) {
    if (arguments.length === 2) {
      // String
      this[i].setAttribute(attrs, value);
    } else {
      // Object
      for (const attrName in attrs) {
        this[i][attrName] = attrs[attrName];
        this[i].setAttribute(attrName, attrs[attrName]);
      }
    }
  }

  return this;
}

function removeAttr(attr) {
  for (let i = 0; i < this.length; i += 1) {
    this[i].removeAttribute(attr);
  }

  return this;
}

function prop(props, value) {
  if (arguments.length === 1 && typeof props === 'string') {
    // Get prop
    if (this[0]) return this[0][props];
  } else {
    // Set props
    for (let i = 0; i < this.length; i += 1) {
      if (arguments.length === 2) {
        // String
        this[i][props] = value;
      } else {
        // Object
        for (const propName in props) {
          this[i][propName] = props[propName];
        }
      }
    }

    return this;
  }

  return this;
}

function data(key, value) {
  let el;

  if (typeof value === 'undefined') {
    el = this[0];
    if (!el) return undefined; // Get value

    if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {
      return el.dom7ElementDataStorage[key];
    }

    const dataKey = el.getAttribute(`data-${key}`);

    if (dataKey) {
      return dataKey;
    }

    return undefined;
  } // Set value


  for (let i = 0; i < this.length; i += 1) {
    el = this[i];
    if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
    el.dom7ElementDataStorage[key] = value;
  }

  return this;
}

function removeData(key) {
  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];

    if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
      el.dom7ElementDataStorage[key] = null;
      delete el.dom7ElementDataStorage[key];
    }
  }
}

function dataset() {
  const el = this[0];
  if (!el) return undefined;
  const dataset = {}; // eslint-disable-line

  if (el.dataset) {
    for (const dataKey in el.dataset) {
      dataset[dataKey] = el.dataset[dataKey];
    }
  } else {
    for (let i = 0; i < el.attributes.length; i += 1) {
      const attr = el.attributes[i];

      if (attr.name.indexOf('data-') >= 0) {
        dataset[toCamelCase(attr.name.split('data-')[1])] = attr.value;
      }
    }
  }

  for (const key in dataset) {
    if (dataset[key] === 'false') dataset[key] = false;else if (dataset[key] === 'true') dataset[key] = true;else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;
  }

  return dataset;
}

function val(value) {
  if (typeof value === 'undefined') {
    // get value
    const el = this[0];
    if (!el) return undefined;

    if (el.multiple && el.nodeName.toLowerCase() === 'select') {
      const values = [];

      for (let i = 0; i < el.selectedOptions.length; i += 1) {
        values.push(el.selectedOptions[i].value);
      }

      return values;
    }

    return el.value;
  } // set value


  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];

    if (Array.isArray(value) && el.multiple && el.nodeName.toLowerCase() === 'select') {
      for (let j = 0; j < el.options.length; j += 1) {
        el.options[j].selected = value.indexOf(el.options[j].value) >= 0;
      }
    } else {
      el.value = value;
    }
  }

  return this;
}

function value(value) {
  return this.val(value);
}

function transform(transform) {
  for (let i = 0; i < this.length; i += 1) {
    this[i].style.transform = transform;
  }

  return this;
}

function transition(duration) {
  for (let i = 0; i < this.length; i += 1) {
    this[i].style.transitionDuration = typeof duration !== 'string' ? `${duration}ms` : duration;
  }

  return this;
}

function on(...args) {
  let [eventType, targetSelector, listener, capture] = args;

  if (typeof args[1] === 'function') {
    [eventType, listener, capture] = args;
    targetSelector = undefined;
  }

  if (!capture) capture = false;

  function handleLiveEvent(e) {
    const target = e.target;
    if (!target) return;
    const eventData = e.target.dom7EventData || [];

    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }

    if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
      const parents = $(target).parents(); // eslint-disable-line

      for (let k = 0; k < parents.length; k += 1) {
        if ($(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
      }
    }
  }

  function handleEvent(e) {
    const eventData = e && e.target ? e.target.dom7EventData || [] : [];

    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }

    listener.apply(this, eventData);
  }

  const events = eventType.split(' ');
  let j;

  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];

    if (!targetSelector) {
      for (j = 0; j < events.length; j += 1) {
        const event = events[j];
        if (!el.dom7Listeners) el.dom7Listeners = {};
        if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
        el.dom7Listeners[event].push({
          listener,
          proxyListener: handleEvent
        });
        el.addEventListener(event, handleEvent, capture);
      }
    } else {
      // Live events
      for (j = 0; j < events.length; j += 1) {
        const event = events[j];
        if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
        if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
        el.dom7LiveListeners[event].push({
          listener,
          proxyListener: handleLiveEvent
        });
        el.addEventListener(event, handleLiveEvent, capture);
      }
    }
  }

  return this;
}

function off(...args) {
  let [eventType, targetSelector, listener, capture] = args;

  if (typeof args[1] === 'function') {
    [eventType, listener, capture] = args;
    targetSelector = undefined;
  }

  if (!capture) capture = false;
  const events = eventType.split(' ');

  for (let i = 0; i < events.length; i += 1) {
    const event = events[i];

    for (let j = 0; j < this.length; j += 1) {
      const el = this[j];
      let handlers;

      if (!targetSelector && el.dom7Listeners) {
        handlers = el.dom7Listeners[event];
      } else if (targetSelector && el.dom7LiveListeners) {
        handlers = el.dom7LiveListeners[event];
      }

      if (handlers && handlers.length) {
        for (let k = handlers.length - 1; k >= 0; k -= 1) {
          const handler = handlers[k];

          if (listener && handler.listener === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (!listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          }
        }
      }
    }
  }

  return this;
}

function once(...args) {
  const dom = this;
  let [eventName, targetSelector, listener, capture] = args;

  if (typeof args[1] === 'function') {
    [eventName, listener, capture] = args;
    targetSelector = undefined;
  }

  function onceHandler(...eventArgs) {
    listener.apply(this, eventArgs);
    dom.off(eventName, targetSelector, onceHandler, capture);

    if (onceHandler.dom7proxy) {
      delete onceHandler.dom7proxy;
    }
  }

  onceHandler.dom7proxy = listener;
  return dom.on(eventName, targetSelector, onceHandler, capture);
}

function trigger(...args) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  const events = args[0].split(' ');
  const eventData = args[1];

  for (let i = 0; i < events.length; i += 1) {
    const event = events[i];

    for (let j = 0; j < this.length; j += 1) {
      const el = this[j];

      if (window.CustomEvent) {
        const evt = new window.CustomEvent(event, {
          detail: eventData,
          bubbles: true,
          cancelable: true
        });
        el.dom7EventData = args.filter((data, dataIndex) => dataIndex > 0);
        el.dispatchEvent(evt);
        el.dom7EventData = [];
        delete el.dom7EventData;
      }
    }
  }

  return this;
}

function transitionStart(callback) {
  const dom = this;

  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    dom.off('transitionstart', fireCallBack);
  }

  if (callback) {
    dom.on('transitionstart', fireCallBack);
  }

  return this;
}

function transitionEnd(callback) {
  const dom = this;

  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    dom.off('transitionend', fireCallBack);
  }

  if (callback) {
    dom.on('transitionend', fireCallBack);
  }

  return this;
}

function animationEnd(callback) {
  const dom = this;

  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    dom.off('animationend', fireCallBack);
  }

  if (callback) {
    dom.on('animationend', fireCallBack);
  }

  return this;
}

function width() {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

  if (this[0] === window) {
    return window.innerWidth;
  }

  if (this.length > 0) {
    return parseFloat(this.css('width'));
  }

  return null;
}

function outerWidth(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      const styles = this.styles();
      return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
    }

    return this[0].offsetWidth;
  }

  return null;
}

function height() {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

  if (this[0] === window) {
    return window.innerHeight;
  }

  if (this.length > 0) {
    return parseFloat(this.css('height'));
  }

  return null;
}

function outerHeight(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      const styles = this.styles();
      return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
    }

    return this[0].offsetHeight;
  }

  return null;
}

function offset() {
  if (this.length > 0) {
    const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
    const el = this[0];
    const box = el.getBoundingClientRect();
    const body = document.body;
    const clientTop = el.clientTop || body.clientTop || 0;
    const clientLeft = el.clientLeft || body.clientLeft || 0;
    const scrollTop = el === window ? window.scrollY : el.scrollTop;
    const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
    return {
      top: box.top + scrollTop - clientTop,
      left: box.left + scrollLeft - clientLeft
    };
  }

  return null;
}

function hide() {
  for (let i = 0; i < this.length; i += 1) {
    this[i].style.display = 'none';
  }

  return this;
}

function show() {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];

    if (el.style.display === 'none') {
      el.style.display = '';
    }

    if (window.getComputedStyle(el, null).getPropertyValue('display') === 'none') {
      // Still not visible
      el.style.display = 'block';
    }
  }

  return this;
}

function styles() {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  if (this[0]) return window.getComputedStyle(this[0], null);
  return {};
}

function css(props, value) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  let i;

  if (arguments.length === 1) {
    if (typeof props === 'string') {
      // .css('width')
      if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
    } else {
      // .css({ width: '100px' })
      for (i = 0; i < this.length; i += 1) {
        for (const prop in props) {
          this[i].style[prop] = props[prop];
        }
      }

      return this;
    }
  }

  if (arguments.length === 2 && typeof props === 'string') {
    // .css('width', '100px')
    for (i = 0; i < this.length; i += 1) {
      this[i].style[props] = value;
    }

    return this;
  }

  return this;
}

function each(callback) {
  if (!callback) return this;
  this.forEach((el, index) => {
    callback.apply(el, [el, index]);
  });
  return this;
}

function filter(callback) {
  const result = arrayFilter(this, callback);
  return $(result);
}

function html(html) {
  if (typeof html === 'undefined') {
    return this[0] ? this[0].innerHTML : null;
  }

  for (let i = 0; i < this.length; i += 1) {
    this[i].innerHTML = html;
  }

  return this;
}

function text(text) {
  if (typeof text === 'undefined') {
    return this[0] ? this[0].textContent.trim() : null;
  }

  for (let i = 0; i < this.length; i += 1) {
    this[i].textContent = text;
  }

  return this;
}

function is(selector) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  const el = this[0];
  let compareWith;
  let i;
  if (!el || typeof selector === 'undefined') return false;

  if (typeof selector === 'string') {
    if (el.matches) return el.matches(selector);
    if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
    if (el.msMatchesSelector) return el.msMatchesSelector(selector);
    compareWith = $(selector);

    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }

    return false;
  }

  if (selector === document) {
    return el === document;
  }

  if (selector === window) {
    return el === window;
  }

  if (selector.nodeType || selector instanceof Dom7) {
    compareWith = selector.nodeType ? [selector] : selector;

    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }

    return false;
  }

  return false;
}

function index() {
  let child = this[0];
  let i;

  if (child) {
    i = 0; // eslint-disable-next-line

    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }

    return i;
  }

  return undefined;
}

function eq(index) {
  if (typeof index === 'undefined') return this;
  const length = this.length;

  if (index > length - 1) {
    return $([]);
  }

  if (index < 0) {
    const returnIndex = length + index;
    if (returnIndex < 0) return $([]);
    return $([this[returnIndex]]);
  }

  return $([this[index]]);
}

function append(...els) {
  let newChild;
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();

  for (let k = 0; k < els.length; k += 1) {
    newChild = els[k];

    for (let i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = newChild;

        while (tempDiv.firstChild) {
          this[i].appendChild(tempDiv.firstChild);
        }
      } else if (newChild instanceof Dom7) {
        for (let j = 0; j < newChild.length; j += 1) {
          this[i].appendChild(newChild[j]);
        }
      } else {
        this[i].appendChild(newChild);
      }
    }
  }

  return this;
}

function appendTo(parent) {
  $(parent).append(this);
  return this;
}

function prepend(newChild) {
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  let i;
  let j;

  for (i = 0; i < this.length; i += 1) {
    if (typeof newChild === 'string') {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = newChild;

      for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
      }
    } else if (newChild instanceof Dom7) {
      for (j = 0; j < newChild.length; j += 1) {
        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
      }
    } else {
      this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
  }

  return this;
}

function prependTo(parent) {
  $(parent).prepend(this);
  return this;
}

function insertBefore(selector) {
  const before = $(selector);

  for (let i = 0; i < this.length; i += 1) {
    if (before.length === 1) {
      before[0].parentNode.insertBefore(this[i], before[0]);
    } else if (before.length > 1) {
      for (let j = 0; j < before.length; j += 1) {
        before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
      }
    }
  }
}

function insertAfter(selector) {
  const after = $(selector);

  for (let i = 0; i < this.length; i += 1) {
    if (after.length === 1) {
      after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
    } else if (after.length > 1) {
      for (let j = 0; j < after.length; j += 1) {
        after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
      }
    }
  }
}

function next(selector) {
  if (this.length > 0) {
    if (selector) {
      if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
        return $([this[0].nextElementSibling]);
      }

      return $([]);
    }

    if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
    return $([]);
  }

  return $([]);
}

function nextAll(selector) {
  const nextEls = [];
  let el = this[0];
  if (!el) return $([]);

  while (el.nextElementSibling) {
    const next = el.nextElementSibling; // eslint-disable-line

    if (selector) {
      if ($(next).is(selector)) nextEls.push(next);
    } else nextEls.push(next);

    el = next;
  }

  return $(nextEls);
}

function prev(selector) {
  if (this.length > 0) {
    const el = this[0];

    if (selector) {
      if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
        return $([el.previousElementSibling]);
      }

      return $([]);
    }

    if (el.previousElementSibling) return $([el.previousElementSibling]);
    return $([]);
  }

  return $([]);
}

function prevAll(selector) {
  const prevEls = [];
  let el = this[0];
  if (!el) return $([]);

  while (el.previousElementSibling) {
    const prev = el.previousElementSibling; // eslint-disable-line

    if (selector) {
      if ($(prev).is(selector)) prevEls.push(prev);
    } else prevEls.push(prev);

    el = prev;
  }

  return $(prevEls);
}

function siblings(selector) {
  return this.nextAll(selector).add(this.prevAll(selector));
}

function parent(selector) {
  const parents = []; // eslint-disable-line

  for (let i = 0; i < this.length; i += 1) {
    if (this[i].parentNode !== null) {
      if (selector) {
        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
      } else {
        parents.push(this[i].parentNode);
      }
    }
  }

  return $(parents);
}

function parents(selector) {
  const parents = []; // eslint-disable-line

  for (let i = 0; i < this.length; i += 1) {
    let parent = this[i].parentNode; // eslint-disable-line

    while (parent) {
      if (selector) {
        if ($(parent).is(selector)) parents.push(parent);
      } else {
        parents.push(parent);
      }

      parent = parent.parentNode;
    }
  }

  return $(parents);
}

function closest(selector) {
  let closest = this; // eslint-disable-line

  if (typeof selector === 'undefined') {
    return $([]);
  }

  if (!closest.is(selector)) {
    closest = closest.parents(selector).eq(0);
  }

  return closest;
}

function find(selector) {
  const foundElements = [];

  for (let i = 0; i < this.length; i += 1) {
    const found = this[i].querySelectorAll(selector);

    for (let j = 0; j < found.length; j += 1) {
      foundElements.push(found[j]);
    }
  }

  return $(foundElements);
}

function children(selector) {
  const children = []; // eslint-disable-line

  for (let i = 0; i < this.length; i += 1) {
    const childNodes = this[i].children;

    for (let j = 0; j < childNodes.length; j += 1) {
      if (!selector || $(childNodes[j]).is(selector)) {
        children.push(childNodes[j]);
      }
    }
  }

  return $(children);
}

function remove() {
  for (let i = 0; i < this.length; i += 1) {
    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
  }

  return this;
}

function detach() {
  return this.remove();
}

function add(...els) {
  const dom = this;
  let i;
  let j;

  for (i = 0; i < els.length; i += 1) {
    const toAdd = $(els[i]);

    for (j = 0; j < toAdd.length; j += 1) {
      dom.push(toAdd[j]);
    }
  }

  return dom;
}

function empty() {
  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];

    if (el.nodeType === 1) {
      for (let j = 0; j < el.childNodes.length; j += 1) {
        if (el.childNodes[j].parentNode) {
          el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
        }
      }

      el.textContent = '';
    }
  }

  return this;
}

// eslint-disable-next-line

function scrollTo(...args) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  let [left, top, duration, easing, callback] = args;

  if (args.length === 4 && typeof easing === 'function') {
    callback = easing;
    [left, top, duration, callback, easing] = args;
  }

  if (typeof easing === 'undefined') easing = 'swing';
  return this.each(function animate() {
    const el = this;
    let currentTop;
    let currentLeft;
    let maxTop;
    let maxLeft;
    let newTop;
    let newLeft;
    let scrollTop; // eslint-disable-line

    let scrollLeft; // eslint-disable-line

    let animateTop = top > 0 || top === 0;
    let animateLeft = left > 0 || left === 0;

    if (typeof easing === 'undefined') {
      easing = 'swing';
    }

    if (animateTop) {
      currentTop = el.scrollTop;

      if (!duration) {
        el.scrollTop = top;
      }
    }

    if (animateLeft) {
      currentLeft = el.scrollLeft;

      if (!duration) {
        el.scrollLeft = left;
      }
    }

    if (!duration) return;

    if (animateTop) {
      maxTop = el.scrollHeight - el.offsetHeight;
      newTop = Math.max(Math.min(top, maxTop), 0);
    }

    if (animateLeft) {
      maxLeft = el.scrollWidth - el.offsetWidth;
      newLeft = Math.max(Math.min(left, maxLeft), 0);
    }

    let startTime = null;
    if (animateTop && newTop === currentTop) animateTop = false;
    if (animateLeft && newLeft === currentLeft) animateLeft = false;

    function render(time = new Date().getTime()) {
      if (startTime === null) {
        startTime = time;
      }

      const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      const easeProgress = easing === 'linear' ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
      let done;
      if (animateTop) scrollTop = currentTop + easeProgress * (newTop - currentTop);
      if (animateLeft) scrollLeft = currentLeft + easeProgress * (newLeft - currentLeft);

      if (animateTop && newTop > currentTop && scrollTop >= newTop) {
        el.scrollTop = newTop;
        done = true;
      }

      if (animateTop && newTop < currentTop && scrollTop <= newTop) {
        el.scrollTop = newTop;
        done = true;
      }

      if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (done) {
        if (callback) callback();
        return;
      }

      if (animateTop) el.scrollTop = scrollTop;
      if (animateLeft) el.scrollLeft = scrollLeft;
      window.requestAnimationFrame(render);
    }

    window.requestAnimationFrame(render);
  });
} // scrollTop(top, duration, easing, callback) {


function scrollTop(...args) {
  let [top, duration, easing, callback] = args;

  if (args.length === 3 && typeof easing === 'function') {
    [top, duration, callback, easing] = args;
  }

  const dom = this;

  if (typeof top === 'undefined') {
    if (dom.length > 0) return dom[0].scrollTop;
    return null;
  }

  return dom.scrollTo(undefined, top, duration, easing, callback);
}

function scrollLeft(...args) {
  let [left, duration, easing, callback] = args;

  if (args.length === 3 && typeof easing === 'function') {
    [left, duration, callback, easing] = args;
  }

  const dom = this;

  if (typeof left === 'undefined') {
    if (dom.length > 0) return dom[0].scrollLeft;
    return null;
  }

  return dom.scrollTo(left, undefined, duration, easing, callback);
}

// eslint-disable-next-line

function animate(initialProps, initialParams) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  const els = this;
  const a = {
    props: Object.assign({}, initialProps),
    params: Object.assign({
      duration: 300,
      easing: 'swing' // or 'linear'

      /* Callbacks
      begin(elements)
      complete(elements)
      progress(elements, complete, remaining, start, tweenValue)
      */

    }, initialParams),
    elements: els,
    animating: false,
    que: [],

    easingProgress(easing, progress) {
      if (easing === 'swing') {
        return 0.5 - Math.cos(progress * Math.PI) / 2;
      }

      if (typeof easing === 'function') {
        return easing(progress);
      }

      return progress;
    },

    stop() {
      if (a.frameId) {
        window.cancelAnimationFrame(a.frameId);
      }

      a.animating = false;
      a.elements.each(el => {
        const element = el;
        delete element.dom7AnimateInstance;
      });
      a.que = [];
    },

    done(complete) {
      a.animating = false;
      a.elements.each(el => {
        const element = el;
        delete element.dom7AnimateInstance;
      });
      if (complete) complete(els);

      if (a.que.length > 0) {
        const que = a.que.shift();
        a.animate(que[0], que[1]);
      }
    },

    animate(props, params) {
      if (a.animating) {
        a.que.push([props, params]);
        return a;
      }

      const elements = []; // Define & Cache Initials & Units

      a.elements.each((el, index) => {
        let initialFullValue;
        let initialValue;
        let unit;
        let finalValue;
        let finalFullValue;
        if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;
        elements[index] = {
          container: el
        };
        Object.keys(props).forEach(prop => {
          initialFullValue = window.getComputedStyle(el, null).getPropertyValue(prop).replace(',', '.');
          initialValue = parseFloat(initialFullValue);
          unit = initialFullValue.replace(initialValue, '');
          finalValue = parseFloat(props[prop]);
          finalFullValue = props[prop] + unit;
          elements[index][prop] = {
            initialFullValue,
            initialValue,
            unit,
            finalValue,
            finalFullValue,
            currentValue: initialValue
          };
        });
      });
      let startTime = null;
      let time;
      let elementsDone = 0;
      let propsDone = 0;
      let done;
      let began = false;
      a.animating = true;

      function render() {
        time = new Date().getTime();
        let progress;
        let easeProgress; // let el;

        if (!began) {
          began = true;
          if (params.begin) params.begin(els);
        }

        if (startTime === null) {
          startTime = time;
        }

        if (params.progress) {
          // eslint-disable-next-line
          params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);
        }

        elements.forEach(element => {
          const el = element;
          if (done || el.done) return;
          Object.keys(props).forEach(prop => {
            if (done || el.done) return;
            progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
            easeProgress = a.easingProgress(params.easing, progress);
            const {
              initialValue,
              finalValue,
              unit
            } = el[prop];
            el[prop].currentValue = initialValue + easeProgress * (finalValue - initialValue);
            const currentValue = el[prop].currentValue;

            if (finalValue > initialValue && currentValue >= finalValue || finalValue < initialValue && currentValue <= finalValue) {
              el.container.style[prop] = finalValue + unit;
              propsDone += 1;

              if (propsDone === Object.keys(props).length) {
                el.done = true;
                elementsDone += 1;
              }

              if (elementsDone === elements.length) {
                done = true;
              }
            }

            if (done) {
              a.done(params.complete);
              return;
            }

            el.container.style[prop] = currentValue + unit;
          });
        });
        if (done) return; // Then call

        a.frameId = window.requestAnimationFrame(render);
      }

      a.frameId = window.requestAnimationFrame(render);
      return a;
    }

  };

  if (a.elements.length === 0) {
    return els;
  }

  let animateInstance;

  for (let i = 0; i < a.elements.length; i += 1) {
    if (a.elements[i].dom7AnimateInstance) {
      animateInstance = a.elements[i].dom7AnimateInstance;
    } else a.elements[i].dom7AnimateInstance = a;
  }

  if (!animateInstance) {
    animateInstance = a;
  }

  if (initialProps === 'stop') {
    animateInstance.stop();
  } else {
    animateInstance.animate(a.props, a.params);
  }

  return els;
}

function stop() {
  const els = this;

  for (let i = 0; i < els.length; i += 1) {
    if (els[i].dom7AnimateInstance) {
      els[i].dom7AnimateInstance.stop();
    }
  }
}

const noTrigger = 'resize scroll'.split(' ');

function shortcut(name) {
  function eventHandler(...args) {
    if (typeof args[0] === 'undefined') {
      for (let i = 0; i < this.length; i += 1) {
        if (noTrigger.indexOf(name) < 0) {
          if (name in this[i]) this[i][name]();else {
            $(this[i]).trigger(name);
          }
        }
      }

      return this;
    }

    return this.on(name, ...args);
  }

  return eventHandler;
}

const click = shortcut('click');
const blur = shortcut('blur');
const focus = shortcut('focus');
const focusin = shortcut('focusin');
const focusout = shortcut('focusout');
const keyup = shortcut('keyup');
const keydown = shortcut('keydown');
const keypress = shortcut('keypress');
const submit = shortcut('submit');
const change = shortcut('change');
const mousedown = shortcut('mousedown');
const mousemove = shortcut('mousemove');
const mouseup = shortcut('mouseup');
const mouseenter = shortcut('mouseenter');
const mouseleave = shortcut('mouseleave');
const mouseout = shortcut('mouseout');
const mouseover = shortcut('mouseover');
const touchstart = shortcut('touchstart');
const touchend = shortcut('touchend');
const touchmove = shortcut('touchmove');
const resize = shortcut('resize');
const scroll = shortcut('scroll');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ($);



/***/ }),

/***/ "./node_modules/ssr-window/ssr-window.esm.js":
/*!***************************************************!*\
  !*** ./node_modules/ssr-window/ssr-window.esm.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extend: () => (/* binding */ extend),
/* harmony export */   getDocument: () => (/* binding */ getDocument),
/* harmony export */   getWindow: () => (/* binding */ getWindow),
/* harmony export */   ssrDocument: () => (/* binding */ ssrDocument),
/* harmony export */   ssrWindow: () => (/* binding */ ssrWindow)
/* harmony export */ });
/**
 * SSR Window 4.0.2
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2021, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: December 13, 2021
 */
/* eslint-disable no-param-reassign */
function isObject(obj) {
    return (obj !== null &&
        typeof obj === 'object' &&
        'constructor' in obj &&
        obj.constructor === Object);
}
function extend(target = {}, src = {}) {
    Object.keys(src).forEach((key) => {
        if (typeof target[key] === 'undefined')
            target[key] = src[key];
        else if (isObject(src[key]) &&
            isObject(target[key]) &&
            Object.keys(src[key]).length > 0) {
            extend(target[key], src[key]);
        }
    });
}

const ssrDocument = {
    body: {},
    addEventListener() { },
    removeEventListener() { },
    activeElement: {
        blur() { },
        nodeName: '',
    },
    querySelector() {
        return null;
    },
    querySelectorAll() {
        return [];
    },
    getElementById() {
        return null;
    },
    createEvent() {
        return {
            initEvent() { },
        };
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() { },
            getElementsByTagName() {
                return [];
            },
        };
    },
    createElementNS() {
        return {};
    },
    importNode() {
        return null;
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
    },
};
function getDocument() {
    const doc = typeof document !== 'undefined' ? document : {};
    extend(doc, ssrDocument);
    return doc;
}

const ssrWindow = {
    document: ssrDocument,
    navigator: {
        userAgent: '',
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
    },
    history: {
        replaceState() { },
        pushState() { },
        go() { },
        back() { },
    },
    CustomEvent: function CustomEvent() {
        return this;
    },
    addEventListener() { },
    removeEventListener() { },
    getComputedStyle() {
        return {
            getPropertyValue() {
                return '';
            },
        };
    },
    Image() { },
    Date() { },
    screen: {},
    setTimeout() { },
    clearTimeout() { },
    matchMedia() {
        return {};
    },
    requestAnimationFrame(callback) {
        if (typeof setTimeout === 'undefined') {
            callback();
            return null;
        }
        return setTimeout(callback, 0);
    },
    cancelAnimationFrame(id) {
        if (typeof setTimeout === 'undefined') {
            return;
        }
        clearTimeout(id);
    },
};
function getWindow() {
    const win = typeof window !== 'undefined' ? window : {};
    extend(win, ssrWindow);
    return win;
}




/***/ }),

/***/ "./node_modules/swiper/core/breakpoints/getBreakpoint.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/breakpoints/getBreakpoint.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getBreakpoint)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

function getBreakpoint(breakpoints, base = 'window', containerEl) {
  if (!breakpoints || base === 'container' && !containerEl) return undefined;
  let breakpoint = false;
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
  const points = Object.keys(breakpoints).map(point => {
    if (typeof point === 'string' && point.indexOf('@') === 0) {
      const minRatio = parseFloat(point.substr(1));
      const value = currentHeight * minRatio;
      return {
        value,
        point
      };
    }

    return {
      value: point,
      point
    };
  });
  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));

  for (let i = 0; i < points.length; i += 1) {
    const {
      point,
      value
    } = points[i];

    if (base === 'window') {
      if (window.matchMedia(`(min-width: ${value}px)`).matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }

  return breakpoint || 'max';
}

/***/ }),

/***/ "./node_modules/swiper/core/breakpoints/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/core/breakpoints/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _setBreakpoint_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setBreakpoint.js */ "./node_modules/swiper/core/breakpoints/setBreakpoint.js");
/* harmony import */ var _getBreakpoint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getBreakpoint.js */ "./node_modules/swiper/core/breakpoints/getBreakpoint.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setBreakpoint: _setBreakpoint_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  getBreakpoint: _getBreakpoint_js__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/core/breakpoints/setBreakpoint.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/breakpoints/setBreakpoint.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setBreakpoint)
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");


const isGridEnabled = (swiper, params) => {
  return swiper.grid && params.grid && params.grid.rows > 1;
};

function setBreakpoint() {
  const swiper = this;
  const {
    activeIndex,
    initialized,
    loopedSlides = 0,
    params,
    $el
  } = swiper;
  const breakpoints = params.breakpoints;
  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters

  const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
  const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
  const breakpointParams = breakpointOnlyParams || swiper.originalParams;
  const wasMultiRow = isGridEnabled(swiper, params);
  const isMultiRow = isGridEnabled(swiper, breakpointParams);
  const wasEnabled = params.enabled;

  if (wasMultiRow && !isMultiRow) {
    $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    $el.addClass(`${params.containerModifierClass}grid`);

    if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
      $el.addClass(`${params.containerModifierClass}grid-column`);
    }

    swiper.emitContainerClasses();
  }

  const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

  if (directionChanged && initialized) {
    swiper.changeDirection();
  }

  (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.extend)(swiper.params, breakpointParams);
  const isEnabled = swiper.params.enabled;
  Object.assign(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });

  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }

  swiper.currentBreakpoint = breakpoint;
  swiper.emit('_beforeBreakpoint', breakpointParams);

  if (needsReLoop && initialized) {
    swiper.loopDestroy();
    swiper.loopCreate();
    swiper.updateSlides();
    swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
  }

  swiper.emit('breakpoint', breakpointParams);
}

/***/ }),

/***/ "./node_modules/swiper/core/check-overflow/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/core/check-overflow/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function checkOverflow() {
  const swiper = this;
  const {
    isLocked: wasLocked,
    params
  } = swiper;
  const {
    slidesOffsetBefore
  } = params;

  if (slidesOffsetBefore) {
    const lastSlideIndex = swiper.slides.length - 1;
    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
    swiper.isLocked = swiper.size > lastSlideRightEdge;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }

  if (params.allowSlideNext === true) {
    swiper.allowSlideNext = !swiper.isLocked;
  }

  if (params.allowSlidePrev === true) {
    swiper.allowSlidePrev = !swiper.isLocked;
  }

  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
  }

  if (wasLocked !== swiper.isLocked) {
    swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  checkOverflow
});

/***/ }),

/***/ "./node_modules/swiper/core/classes/addClasses.js":
/*!********************************************************!*\
  !*** ./node_modules/swiper/core/classes/addClasses.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addClasses)
/* harmony export */ });
function prepareClasses(entries, prefix) {
  const resultClasses = [];
  entries.forEach(item => {
    if (typeof item === 'object') {
      Object.keys(item).forEach(classNames => {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === 'string') {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}

function addClasses() {
  const swiper = this;
  const {
    classNames,
    params,
    rtl,
    $el,
    device,
    support
  } = swiper; // prettier-ignore

  const suffixes = prepareClasses(['initialized', params.direction, {
    'pointer-events': !support.touch
  }, {
    'free-mode': swiper.params.freeMode && params.freeMode.enabled
  }, {
    'autoheight': params.autoHeight
  }, {
    'rtl': rtl
  }, {
    'grid': params.grid && params.grid.rows > 1
  }, {
    'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
  }, {
    'android': device.android
  }, {
    'ios': device.ios
  }, {
    'css-mode': params.cssMode
  }, {
    'centered': params.cssMode && params.centeredSlides
  }], params.containerModifierClass);
  classNames.push(...suffixes);
  $el.addClass([...classNames].join(' '));
  swiper.emitContainerClasses();
}

/***/ }),

/***/ "./node_modules/swiper/core/classes/index.js":
/*!***************************************************!*\
  !*** ./node_modules/swiper/core/classes/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addClasses_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addClasses.js */ "./node_modules/swiper/core/classes/addClasses.js");
/* harmony import */ var _removeClasses_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeClasses.js */ "./node_modules/swiper/core/classes/removeClasses.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  addClasses: _addClasses_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  removeClasses: _removeClasses_js__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/core/classes/removeClasses.js":
/*!***********************************************************!*\
  !*** ./node_modules/swiper/core/classes/removeClasses.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeClasses)
/* harmony export */ });
function removeClasses() {
  const swiper = this;
  const {
    $el,
    classNames
  } = swiper;
  $el.removeClass(classNames.join(' '));
  swiper.emitContainerClasses();
}

/***/ }),

/***/ "./node_modules/swiper/core/core.js":
/*!******************************************!*\
  !*** ./node_modules/swiper/core/core.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/swiper/shared/utils.js");
/* harmony import */ var _shared_get_support_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/get-support.js */ "./node_modules/swiper/shared/get-support.js");
/* harmony import */ var _shared_get_device_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/get-device.js */ "./node_modules/swiper/shared/get-device.js");
/* harmony import */ var _shared_get_browser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/get-browser.js */ "./node_modules/swiper/shared/get-browser.js");
/* harmony import */ var _modules_resize_resize_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/resize/resize.js */ "./node_modules/swiper/core/modules/resize/resize.js");
/* harmony import */ var _modules_observer_observer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/observer/observer.js */ "./node_modules/swiper/core/modules/observer/observer.js");
/* harmony import */ var _events_emitter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./events-emitter.js */ "./node_modules/swiper/core/events-emitter.js");
/* harmony import */ var _update_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./update/index.js */ "./node_modules/swiper/core/update/index.js");
/* harmony import */ var _translate_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./translate/index.js */ "./node_modules/swiper/core/translate/index.js");
/* harmony import */ var _transition_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./transition/index.js */ "./node_modules/swiper/core/transition/index.js");
/* harmony import */ var _slide_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./slide/index.js */ "./node_modules/swiper/core/slide/index.js");
/* harmony import */ var _loop_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./loop/index.js */ "./node_modules/swiper/core/loop/index.js");
/* harmony import */ var _grab_cursor_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./grab-cursor/index.js */ "./node_modules/swiper/core/grab-cursor/index.js");
/* harmony import */ var _events_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./events/index.js */ "./node_modules/swiper/core/events/index.js");
/* harmony import */ var _breakpoints_index_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./breakpoints/index.js */ "./node_modules/swiper/core/breakpoints/index.js");
/* harmony import */ var _classes_index_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./classes/index.js */ "./node_modules/swiper/core/classes/index.js");
/* harmony import */ var _images_index_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./images/index.js */ "./node_modules/swiper/core/images/index.js");
/* harmony import */ var _check_overflow_index_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./check-overflow/index.js */ "./node_modules/swiper/core/check-overflow/index.js");
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./defaults.js */ "./node_modules/swiper/core/defaults.js");
/* harmony import */ var _moduleExtendParams_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./moduleExtendParams.js */ "./node_modules/swiper/core/moduleExtendParams.js");
/* eslint no-param-reassign: "off" */






















const prototypes = {
  eventsEmitter: _events_emitter_js__WEBPACK_IMPORTED_MODULE_8__["default"],
  update: _update_index_js__WEBPACK_IMPORTED_MODULE_9__["default"],
  translate: _translate_index_js__WEBPACK_IMPORTED_MODULE_10__["default"],
  transition: _transition_index_js__WEBPACK_IMPORTED_MODULE_11__["default"],
  slide: _slide_index_js__WEBPACK_IMPORTED_MODULE_12__["default"],
  loop: _loop_index_js__WEBPACK_IMPORTED_MODULE_13__["default"],
  grabCursor: _grab_cursor_index_js__WEBPACK_IMPORTED_MODULE_14__["default"],
  events: _events_index_js__WEBPACK_IMPORTED_MODULE_15__["default"],
  breakpoints: _breakpoints_index_js__WEBPACK_IMPORTED_MODULE_16__["default"],
  checkOverflow: _check_overflow_index_js__WEBPACK_IMPORTED_MODULE_19__["default"],
  classes: _classes_index_js__WEBPACK_IMPORTED_MODULE_17__["default"],
  images: _images_index_js__WEBPACK_IMPORTED_MODULE_18__["default"]
};
const extendedDefaults = {};

class Swiper {
  constructor(...args) {
    let el;
    let params;

    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
      params = args[0];
    } else {
      [el, params] = args;
    }

    if (!params) params = {};
    params = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({}, params);
    if (el && !params.el) params.el = el;

    if (params.el && (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(params.el).length > 1) {
      const swipers = [];
      (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(params.el).each(containerEl => {
        const newParams = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      });
      return swipers;
    } // Swiper Instance


    const swiper = this;
    swiper.__swiper__ = true;
    swiper.support = (0,_shared_get_support_js__WEBPACK_IMPORTED_MODULE_3__.getSupport)();
    swiper.device = (0,_shared_get_device_js__WEBPACK_IMPORTED_MODULE_4__.getDevice)({
      userAgent: params.userAgent
    });
    swiper.browser = (0,_shared_get_browser_js__WEBPACK_IMPORTED_MODULE_5__.getBrowser)();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];
    swiper.modules = [...swiper.__modules__];

    if (params.modules && Array.isArray(params.modules)) {
      swiper.modules.push(...params.modules);
    }

    const allModulesParams = {};
    swiper.modules.forEach(mod => {
      mod({
        swiper,
        extendParams: (0,_moduleExtendParams_js__WEBPACK_IMPORTED_MODULE_21__["default"])(params, allModulesParams),
        on: swiper.on.bind(swiper),
        once: swiper.once.bind(swiper),
        off: swiper.off.bind(swiper),
        emit: swiper.emit.bind(swiper)
      });
    }); // Extend defaults with modules params

    const swiperParams = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({}, _defaults_js__WEBPACK_IMPORTED_MODULE_20__["default"], allModulesParams); // Extend defaults with passed params

    swiper.params = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({}, swiper.params);
    swiper.passedParams = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({}, params); // add event listeners

    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach(eventName => {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }

    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    } // Save Dom lib


    swiper.$ = _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"]; // Extend Swiper

    Object.assign(swiper, {
      enabled: swiper.params.enabled,
      el,
      // Classes
      classNames: [],
      // Slides
      slides: (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(),
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],

      // isDirection
      isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },

      isVertical() {
        return swiper.params.direction === 'vertical';
      },

      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEvents: function touchEvents() {
        const touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
        const desktop = ['pointerdown', 'pointermove', 'pointerup'];
        swiper.touchEventsTouch = {
          start: touch[0],
          move: touch[1],
          end: touch[2],
          cancel: touch[3]
        };
        swiper.touchEventsDesktop = {
          start: desktop[0],
          move: desktop[1],
          end: desktop[2]
        };
        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
      }(),
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)(),
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        isTouchEvent: undefined,
        startMoving: undefined
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    });
    swiper.emit('_swiper'); // Init

    if (swiper.params.init) {
      swiper.init();
    } // Return app instance


    return swiper;
  }

  enable() {
    const swiper = this;
    if (swiper.enabled) return;
    swiper.enabled = true;

    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }

    swiper.emit('enable');
  }

  disable() {
    const swiper = this;
    if (!swiper.enabled) return;
    swiper.enabled = false;

    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }

    swiper.emit('disable');
  }

  setProgress(progress, speed) {
    const swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    const min = swiper.minTranslate();
    const max = swiper.maxTranslate();
    const current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }

  emitContainerClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const cls = swiper.el.className.split(' ').filter(className => {
      return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit('_containerClasses', cls.join(' '));
  }

  getSlideClasses(slideEl) {
    const swiper = this;
    return slideEl.className.split(' ').filter(className => {
      return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(' ');
  }

  emitSlidesClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const updates = [];
    swiper.slides.each(slideEl => {
      const classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl,
        classNames
      });
      swiper.emit('_slideClass', slideEl, classNames);
    });
    swiper.emit('_slideClasses', updates);
  }

  slidesPerViewDynamic(view = 'current', exact = false) {
    const swiper = this;
    const {
      params,
      slides,
      slidesGrid,
      slidesSizesGrid,
      size: swiperSize,
      activeIndex
    } = swiper;
    let spv = 1;

    if (params.centeredSlides) {
      let slideSize = slides[activeIndex].swiperSlideSize;
      let breakLoop;

      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }

      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      // eslint-disable-next-line
      if (view === 'current') {
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;

          if (slideInView) {
            spv += 1;
          }
        }
      } else {
        // previous
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;

          if (slideInView) {
            spv += 1;
          }
        }
      }
    }

    return spv;
  }

  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed) return;
    const {
      snapGrid,
      params
    } = swiper; // Breakpoints

    if (params.breakpoints) {
      swiper.setBreakpoint();
    }

    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();

    function setTranslate() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }

    let translated;

    if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
      setTranslate();

      if (swiper.params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
        translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }

      if (!translated) {
        setTranslate();
      }
    }

    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }

    swiper.emit('update');
  }

  changeDirection(newDirection, needUpdate = true) {
    const swiper = this;
    const currentDirection = swiper.params.direction;

    if (!newDirection) {
      // eslint-disable-next-line
      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
    }

    if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
      return swiper;
    }

    swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.each(slideEl => {
      if (newDirection === 'vertical') {
        slideEl.style.width = '';
      } else {
        slideEl.style.height = '';
      }
    });
    swiper.emit('changeDirection');
    if (needUpdate) swiper.update();
    return swiper;
  }

  mount(el) {
    const swiper = this;
    if (swiper.mounted) return true; // Find el

    const $el = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(el || swiper.params.el);
    el = $el[0];

    if (!el) {
      return false;
    }

    el.swiper = swiper;

    const getWrapperSelector = () => {
      return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
    };

    const getWrapper = () => {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        const res = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(el.shadowRoot.querySelector(getWrapperSelector())); // Children needs to return slot items

        res.children = options => $el.children(options);

        return res;
      }

      return $el.children(getWrapperSelector());
    }; // Find Wrapper


    let $wrapperEl = getWrapper();

    if ($wrapperEl.length === 0 && swiper.params.createElements) {
      const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
      const wrapper = document.createElement('div');
      $wrapperEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(wrapper);
      wrapper.className = swiper.params.wrapperClass;
      $el.append(wrapper);
      $el.children(`.${swiper.params.slideClass}`).each(slideEl => {
        $wrapperEl.append(slideEl);
      });
    }

    Object.assign(swiper, {
      $el,
      el,
      $wrapperEl,
      wrapperEl: $wrapperEl[0],
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
      wrongRTL: $wrapperEl.css('display') === '-webkit-box'
    });
    return true;
  }

  init(el) {
    const swiper = this;
    if (swiper.initialized) return swiper;
    const mounted = swiper.mount(el);
    if (mounted === false) return swiper;
    swiper.emit('beforeInit'); // Set breakpoint

    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    } // Add Classes


    swiper.addClasses(); // Create loop

    if (swiper.params.loop) {
      swiper.loopCreate();
    } // Update size


    swiper.updateSize(); // Update slides

    swiper.updateSlides();

    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    } // Set Grab Cursor


    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }

    if (swiper.params.preloadImages) {
      swiper.preloadImages();
    } // Slide To Initial Slide


    if (swiper.params.loop) {
      swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    } // Attach events


    swiper.attachEvents(); // Init Flag

    swiper.initialized = true; // Emit

    swiper.emit('init');
    swiper.emit('afterInit');
    return swiper;
  }

  destroy(deleteInstance = true, cleanStyles = true) {
    const swiper = this;
    const {
      params,
      $el,
      $wrapperEl,
      slides
    } = swiper;

    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
      return null;
    }

    swiper.emit('beforeDestroy'); // Init Flag

    swiper.initialized = false; // Detach events

    swiper.detachEvents(); // Destroy loop

    if (params.loop) {
      swiper.loopDestroy();
    } // Cleanup styles


    if (cleanStyles) {
      swiper.removeClasses();
      $el.removeAttr('style');
      $wrapperEl.removeAttr('style');

      if (slides && slides.length) {
        slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
      }
    }

    swiper.emit('destroy'); // Detach emitter events

    Object.keys(swiper.eventsListeners).forEach(eventName => {
      swiper.off(eventName);
    });

    if (deleteInstance !== false) {
      swiper.$el[0].swiper = null;
      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.deleteProps)(swiper);
    }

    swiper.destroyed = true;
    return null;
  }

  static extendDefaults(newDefaults) {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)(extendedDefaults, newDefaults);
  }

  static get extendedDefaults() {
    return extendedDefaults;
  }

  static get defaults() {
    return _defaults_js__WEBPACK_IMPORTED_MODULE_20__["default"];
  }

  static installModule(mod) {
    if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
    const modules = Swiper.prototype.__modules__;

    if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
      modules.push(mod);
    }
  }

  static use(module) {
    if (Array.isArray(module)) {
      module.forEach(m => Swiper.installModule(m));
      return Swiper;
    }

    Swiper.installModule(module);
    return Swiper;
  }

}

Object.keys(prototypes).forEach(prototypeGroup => {
  Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper.use([_modules_resize_resize_js__WEBPACK_IMPORTED_MODULE_6__["default"], _modules_observer_observer_js__WEBPACK_IMPORTED_MODULE_7__["default"]]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Swiper);

/***/ }),

/***/ "./node_modules/swiper/core/defaults.js":
/*!**********************************************!*\
  !*** ./node_modules/swiper/core/defaults.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  init: true,
  direction: 'horizontal',
  touchEventsTarget: 'wrapper',
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: true,
  nested: false,
  createElements: false,
  enabled: true,
  focusableElements: 'input, select, option, textarea, button, video, label',
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: 'slide',
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: undefined,
  breakpointsBase: 'window',
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: false,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: true,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 0,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // Images
  preloadImages: true,
  updateOnImagesReady: true,
  // loop
  loop: false,
  loopAdditionalSlides: 0,
  loopedSlides: null,
  loopFillGroupWithBlank: false,
  loopPreventsSlide: true,
  // rewind
  rewind: false,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  // NS
  containerModifierClass: 'swiper-',
  // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-invisible-blank',
  slideActiveClass: 'swiper-slide-active',
  slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideDuplicateClass: 'swiper-slide-duplicate',
  slideNextClass: 'swiper-slide-next',
  slideDuplicateNextClass: 'swiper-slide-duplicate-next',
  slidePrevClass: 'swiper-slide-prev',
  slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
  wrapperClass: 'swiper-wrapper',
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
});

/***/ }),

/***/ "./node_modules/swiper/core/events-emitter.js":
/*!****************************************************!*\
  !*** ./node_modules/swiper/core/events-emitter.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-underscore-dangle */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  on(events, handler, priority) {
    const self = this;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(event => {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },

  once(events, handler, priority) {
    const self = this;
    if (typeof handler !== 'function') return self;

    function onceHandler(...args) {
      self.off(events, onceHandler);

      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }

      handler.apply(self, args);
    }

    onceHandler.__emitterProxy = handler;
    return self.on(events, onceHandler, priority);
  },

  onAny(handler, priority) {
    const self = this;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';

    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }

    return self;
  },

  offAny(handler) {
    const self = this;
    if (!self.eventsAnyListeners) return self;
    const index = self.eventsAnyListeners.indexOf(handler);

    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }

    return self;
  },

  off(events, handler) {
    const self = this;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach(event => {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach((eventHandler, index) => {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  },

  emit(...args) {
    const self = this;
    if (!self.eventsListeners) return self;
    let events;
    let data;
    let context;

    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }

    data.unshift(context);
    const eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(event => {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach(eventHandler => {
          eventHandler.apply(context, [event, ...data]);
        });
      }

      if (self.eventsListeners && self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(eventHandler => {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }

});

/***/ }),

/***/ "./node_modules/swiper/core/events/index.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/core/events/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _onTouchStart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onTouchStart.js */ "./node_modules/swiper/core/events/onTouchStart.js");
/* harmony import */ var _onTouchMove_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onTouchMove.js */ "./node_modules/swiper/core/events/onTouchMove.js");
/* harmony import */ var _onTouchEnd_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onTouchEnd.js */ "./node_modules/swiper/core/events/onTouchEnd.js");
/* harmony import */ var _onResize_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onResize.js */ "./node_modules/swiper/core/events/onResize.js");
/* harmony import */ var _onClick_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./onClick.js */ "./node_modules/swiper/core/events/onClick.js");
/* harmony import */ var _onScroll_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onScroll.js */ "./node_modules/swiper/core/events/onScroll.js");







let dummyEventAttached = false;

function dummyEventListener() {}

const events = (swiper, method) => {
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  const {
    params,
    touchEvents,
    el,
    wrapperEl,
    device,
    support
  } = swiper;
  const capture = !!params.nested;
  const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
  const swiperMethod = method; // Touch Events

  if (!support.touch) {
    el[domMethod](touchEvents.start, swiper.onTouchStart, false);
    document[domMethod](touchEvents.move, swiper.onTouchMove, capture);
    document[domMethod](touchEvents.end, swiper.onTouchEnd, false);
  } else {
    const passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
    el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
      passive: false,
      capture
    } : capture);
    el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);

    if (touchEvents.cancel) {
      el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
    }
  } // Prevent Links Clicks


  if (params.preventClicks || params.preventClicksPropagation) {
    el[domMethod]('click', swiper.onClick, true);
  }

  if (params.cssMode) {
    wrapperEl[domMethod]('scroll', swiper.onScroll);
  } // Resize handler


  if (params.updateOnWindowResize) {
    swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', _onResize_js__WEBPACK_IMPORTED_MODULE_4__["default"], true);
  } else {
    swiper[swiperMethod]('observerUpdate', _onResize_js__WEBPACK_IMPORTED_MODULE_4__["default"], true);
  }
};

function attachEvents() {
  const swiper = this;
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  const {
    params,
    support
  } = swiper;
  swiper.onTouchStart = _onTouchStart_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(swiper);
  swiper.onTouchMove = _onTouchMove_js__WEBPACK_IMPORTED_MODULE_2__["default"].bind(swiper);
  swiper.onTouchEnd = _onTouchEnd_js__WEBPACK_IMPORTED_MODULE_3__["default"].bind(swiper);

  if (params.cssMode) {
    swiper.onScroll = _onScroll_js__WEBPACK_IMPORTED_MODULE_6__["default"].bind(swiper);
  }

  swiper.onClick = _onClick_js__WEBPACK_IMPORTED_MODULE_5__["default"].bind(swiper);

  if (support.touch && !dummyEventAttached) {
    document.addEventListener('touchstart', dummyEventListener);
    dummyEventAttached = true;
  }

  events(swiper, 'on');
}

function detachEvents() {
  const swiper = this;
  events(swiper, 'off');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  attachEvents,
  detachEvents
});

/***/ }),

/***/ "./node_modules/swiper/core/events/onClick.js":
/*!****************************************************!*\
  !*** ./node_modules/swiper/core/events/onClick.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onClick)
/* harmony export */ });
function onClick(e) {
  const swiper = this;
  if (!swiper.enabled) return;

  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();

    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/events/onResize.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/core/events/onResize.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onResize)
/* harmony export */ });
function onResize() {
  const swiper = this;
  const {
    params,
    el
  } = swiper;
  if (el && el.offsetWidth === 0) return; // Breakpoints

  if (params.breakpoints) {
    swiper.setBreakpoint();
  } // Save locks


  const {
    allowSlideNext,
    allowSlidePrev,
    snapGrid
  } = swiper; // Disable locks on resize

  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();

  if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    swiper.slideTo(swiper.activeIndex, 0, false, true);
  }

  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    swiper.autoplay.run();
  } // Return locks after resize


  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;

  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/events/onScroll.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/core/events/onScroll.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onScroll)
/* harmony export */ });
function onScroll() {
  const swiper = this;
  const {
    wrapperEl,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled) return;
  swiper.previousTranslate = swiper.translate;

  if (swiper.isHorizontal()) {
    swiper.translate = -wrapperEl.scrollLeft;
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  } // eslint-disable-next-line


  if (swiper.translate === -0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }

  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }

  swiper.emit('setTranslate', swiper.translate, false);
}

/***/ }),

/***/ "./node_modules/swiper/core/events/onTouchEnd.js":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/core/events/onTouchEnd.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onTouchEnd)
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");

function onTouchEnd(event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    slidesGrid,
    enabled
  } = swiper;
  if (!enabled) return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }

  data.allowTouchCallbacks = false;

  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }

    data.isMoved = false;
    data.startMoving = false;
    return;
  } // Return Grab Cursor


  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  } // Time diff


  const touchEndTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.now)();
  const timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

  if (swiper.allowClick) {
    const pathTree = e.path || e.composedPath && e.composedPath();
    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
    swiper.emit('tap click', e);

    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit('doubleTap doubleClick', e);
    }
  }

  data.lastClickTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.now)();
  (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
    if (!swiper.destroyed) swiper.allowClick = true;
  });

  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }

  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  let currentPos;

  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }

  if (params.cssMode) {
    return;
  }

  if (swiper.params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({
      currentPos
    });
    return;
  } // Find current slide


  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];

  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

    if (typeof slidesGrid[i + increment] !== 'undefined') {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
        stopIndex = i;
        groupSize = slidesGrid[i + increment] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  } // Find current slide size


  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
    }

    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);

    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(stopIndex + increment);
      }

      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/events/onTouchMove.js":
/*!********************************************************!*\
  !*** ./node_modules/swiper/core/events/onTouchMove.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onTouchMove)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");



function onTouchMove(event) {
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    enabled
  } = swiper;
  if (!enabled) return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }

    return;
  }

  if (data.isTouchEvent && e.type !== 'touchmove') return;
  const targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
  const pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
  const pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;

  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }

  if (!swiper.allowTouchMove) {
    // isMoved = true;
    swiper.allowClick = false;

    if (data.isTouched) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)();
    }

    return;
  }

  if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }

  if (data.isTouchEvent && document.activeElement) {
    if (e.target === document.activeElement && (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target).is(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }

  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }

  if (e.targetTouches && e.targetTouches.length > 1) return;
  touches.currentX = pageX;
  touches.currentY = pageY;
  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;

  if (typeof data.isScrolling === 'undefined') {
    let touchAngle;

    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }

  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }

  if (typeof data.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }

  if (data.isScrolling) {
    data.isTouched = false;
    return;
  }

  if (!data.startMoving) {
    return;
  }

  swiper.allowClick = false;

  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }

  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }

  if (!data.isMoved) {
    if (params.loop && !params.cssMode) {
      swiper.loopFix();
    }

    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);

    if (swiper.animating) {
      swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
    }

    data.allowMomentumBounce = false; // Grab Cursor

    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }

    swiper.emit('sliderFirstMove', e);
  }

  swiper.emit('sliderMove', e);
  data.isMoved = true;
  let diff = swiper.isHorizontal() ? diffX : diffY;
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) diff = -diff;
  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  data.currentTranslate = diff + data.startTranslate;
  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;

  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }

  if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
  } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
  }

  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  } // Directions locks


  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }

  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }

  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  } // Threshold


  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }

  if (!params.followFinger || params.cssMode) return; // Update active index in free mode

  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }

  if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) {
    swiper.freeMode.onTouchMove();
  } // Update progress


  swiper.updateProgress(data.currentTranslate); // Update translate

  swiper.setTranslate(data.currentTranslate);
}

/***/ }),

/***/ "./node_modules/swiper/core/events/onTouchStart.js":
/*!*********************************************************!*\
  !*** ./node_modules/swiper/core/events/onTouchStart.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onTouchStart)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");


 // Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd

function closestElement(selector, base = this) {
  function __closestFrom(el) {
    if (!el || el === (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)() || el === (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)()) return null;
    if (el.assignedSlot) el = el.assignedSlot;
    const found = el.closest(selector);
    return found || __closestFrom(el.getRootNode().host);
  }

  return __closestFrom(base);
}

function onTouchStart(event) {
  const swiper = this;
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    enabled
  } = swiper;
  if (!enabled) return;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }

  if (!swiper.animating && params.cssMode && params.loop) {
    swiper.loopFix();
  }

  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  let $targetEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target);

  if (params.touchEventsTarget === 'wrapper') {
    if (!$targetEl.closest(swiper.wrapperEl).length) return;
  }

  data.isTouchEvent = e.type === 'touchstart';
  if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
  if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return; // change target el for shadow root component

  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';

  if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) {
    $targetEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(event.path[0]);
  }

  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
  const isTargetShadow = !!(e.target && e.target.shadowRoot); // use closestElement for shadow root element to get the actual closest for nested shadow root element

  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, e.target) : $targetEl.closest(noSwipingSelector)[0])) {
    swiper.allowClick = true;
    return;
  }

  if (params.swipeHandler) {
    if (!$targetEl.closest(params.swipeHandler)[0]) return;
  }

  touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
  touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

  const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === 'prevent') {
      event.preventDefault();
    } else {
      return;
    }
  }

  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;

  if (e.type !== 'touchstart') {
    let preventDefault = true;
    if ($targetEl.is(data.focusableElements)) preventDefault = false;

    if (document.activeElement && (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) {
      document.activeElement.blur();
    }

    const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;

    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
      e.preventDefault();
    }
  }

  swiper.emit('touchStart', e);
}

/***/ }),

/***/ "./node_modules/swiper/core/grab-cursor/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/core/grab-cursor/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _setGrabCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setGrabCursor.js */ "./node_modules/swiper/core/grab-cursor/setGrabCursor.js");
/* harmony import */ var _unsetGrabCursor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unsetGrabCursor.js */ "./node_modules/swiper/core/grab-cursor/unsetGrabCursor.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setGrabCursor: _setGrabCursor_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  unsetGrabCursor: _unsetGrabCursor_js__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/core/grab-cursor/setGrabCursor.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/grab-cursor/setGrabCursor.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setGrabCursor)
/* harmony export */ });
function setGrabCursor(moving) {
  const swiper = this;
  if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
  el.style.cursor = 'move';
  el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
  el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
  el.style.cursor = moving ? 'grabbing' : 'grab';
}

/***/ }),

/***/ "./node_modules/swiper/core/grab-cursor/unsetGrabCursor.js":
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/core/grab-cursor/unsetGrabCursor.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ unsetGrabCursor)
/* harmony export */ });
function unsetGrabCursor() {
  const swiper = this;

  if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }

  swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
}

/***/ }),

/***/ "./node_modules/swiper/core/images/index.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/core/images/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loadImage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadImage.js */ "./node_modules/swiper/core/images/loadImage.js");
/* harmony import */ var _preloadImages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preloadImages.js */ "./node_modules/swiper/core/images/preloadImages.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  loadImage: _loadImage_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  preloadImages: _preloadImages_js__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/core/images/loadImage.js":
/*!******************************************************!*\
  !*** ./node_modules/swiper/core/images/loadImage.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadImage)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");


function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  let image;

  function onReady() {
    if (callback) callback();
  }

  const isPicture = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(imageEl).parent('picture')[0];

  if (!isPicture && (!imageEl.complete || !checkForComplete)) {
    if (src) {
      image = new window.Image();
      image.onload = onReady;
      image.onerror = onReady;

      if (sizes) {
        image.sizes = sizes;
      }

      if (srcset) {
        image.srcset = srcset;
      }

      if (src) {
        image.src = src;
      }
    } else {
      onReady();
    }
  } else {
    // image already loaded...
    onReady();
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/images/preloadImages.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/core/images/preloadImages.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ preloadImages)
/* harmony export */ });
function preloadImages() {
  const swiper = this;
  swiper.imagesToLoad = swiper.$el.find('img');

  function onReady() {
    if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
    if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;

    if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
      if (swiper.params.updateOnImagesReady) swiper.update();
      swiper.emit('imagesReady');
    }
  }

  for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
    const imageEl = swiper.imagesToLoad[i];
    swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/loop/index.js":
/*!************************************************!*\
  !*** ./node_modules/swiper/core/loop/index.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loopCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loopCreate.js */ "./node_modules/swiper/core/loop/loopCreate.js");
/* harmony import */ var _loopFix_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loopFix.js */ "./node_modules/swiper/core/loop/loopFix.js");
/* harmony import */ var _loopDestroy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loopDestroy.js */ "./node_modules/swiper/core/loop/loopDestroy.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  loopCreate: _loopCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  loopFix: _loopFix_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  loopDestroy: _loopDestroy_js__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/core/loop/loopCreate.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/core/loop/loopCreate.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loopCreate)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");


function loopCreate() {
  const swiper = this;
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  const {
    params,
    $wrapperEl
  } = swiper; // Remove duplicated slides

  const $selector = $wrapperEl.children().length > 0 ? (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])($wrapperEl.children()[0].parentNode) : $wrapperEl;
  $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
  let slides = $selector.children(`.${params.slideClass}`);

  if (params.loopFillGroupWithBlank) {
    const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;

    if (blankSlidesNum !== params.slidesPerGroup) {
      for (let i = 0; i < blankSlidesNum; i += 1) {
        const blankNode = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(document.createElement('div')).addClass(`${params.slideClass} ${params.slideBlankClass}`);
        $selector.append(blankNode);
      }

      slides = $selector.children(`.${params.slideClass}`);
    }
  }

  if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
  swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
  swiper.loopedSlides += params.loopAdditionalSlides;

  if (swiper.loopedSlides > slides.length) {
    swiper.loopedSlides = slides.length;
  }

  const prependSlides = [];
  const appendSlides = [];
  slides.each((el, index) => {
    const slide = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(el);

    if (index < swiper.loopedSlides) {
      appendSlides.push(el);
    }

    if (index < slides.length && index >= slides.length - swiper.loopedSlides) {
      prependSlides.push(el);
    }

    slide.attr('data-swiper-slide-index', index);
  });

  for (let i = 0; i < appendSlides.length; i += 1) {
    $selector.append((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
  }

  for (let i = prependSlides.length - 1; i >= 0; i -= 1) {
    $selector.prepend((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/loop/loopDestroy.js":
/*!******************************************************!*\
  !*** ./node_modules/swiper/core/loop/loopDestroy.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loopDestroy)
/* harmony export */ });
function loopDestroy() {
  const swiper = this;
  const {
    $wrapperEl,
    params,
    slides
  } = swiper;
  $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
  slides.removeAttr('data-swiper-slide-index');
}

/***/ }),

/***/ "./node_modules/swiper/core/loop/loopFix.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/core/loop/loopFix.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loopFix)
/* harmony export */ });
function loopFix() {
  const swiper = this;
  swiper.emit('beforeLoopFix');
  const {
    activeIndex,
    slides,
    loopedSlides,
    allowSlidePrev,
    allowSlideNext,
    snapGrid,
    rtlTranslate: rtl
  } = swiper;
  let newIndex;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  const snapTranslate = -snapGrid[activeIndex];
  const diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding

  if (activeIndex < loopedSlides) {
    newIndex = slides.length - loopedSlides * 3 + activeIndex;
    newIndex += loopedSlides;
    const slideChanged = swiper.slideTo(newIndex, 0, false, true);

    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  } else if (activeIndex >= slides.length - loopedSlides) {
    // Fix For Positive Oversliding
    newIndex = -slides.length + activeIndex + loopedSlides;
    newIndex += loopedSlides;
    const slideChanged = swiper.slideTo(newIndex, 0, false, true);

    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  }

  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  swiper.emit('loopFix');
}

/***/ }),

/***/ "./node_modules/swiper/core/moduleExtendParams.js":
/*!********************************************************!*\
  !*** ./node_modules/swiper/core/moduleExtendParams.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ moduleExtendParams)
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/swiper/shared/utils.js");

function moduleExtendParams(params, allModulesParams) {
  return function extendParams(obj = {}) {
    const moduleParamName = Object.keys(obj)[0];
    const moduleParams = obj[moduleParamName];

    if (typeof moduleParams !== 'object' || moduleParams === null) {
      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.extend)(allModulesParams, obj);
      return;
    }

    if (['navigation', 'pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
      params[moduleParamName] = {
        auto: true
      };
    }

    if (!(moduleParamName in params && 'enabled' in moduleParams)) {
      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.extend)(allModulesParams, obj);
      return;
    }

    if (params[moduleParamName] === true) {
      params[moduleParamName] = {
        enabled: true
      };
    }

    if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
      params[moduleParamName].enabled = true;
    }

    if (!params[moduleParamName]) params[moduleParamName] = {
      enabled: false
    };
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.extend)(allModulesParams, obj);
  };
}

/***/ }),

/***/ "./node_modules/swiper/core/modules/observer/observer.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/modules/observer/observer.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Observer)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

function Observer({
  swiper,
  extendParams,
  on,
  emit
}) {
  const observers = [];
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

  const attach = (target, options = {}) => {
    const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
    const observer = new ObserverFunc(mutations => {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (mutations.length === 1) {
        emit('observerUpdate', mutations[0]);
        return;
      }

      const observerUpdate = function observerUpdate() {
        emit('observerUpdate', mutations[0]);
      };

      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(observerUpdate);
      } else {
        window.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: typeof options.childList === 'undefined' ? true : options.childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData
    });
    observers.push(observer);
  };

  const init = () => {
    if (!swiper.params.observer) return;

    if (swiper.params.observeParents) {
      const containerParents = swiper.$el.parents();

      for (let i = 0; i < containerParents.length; i += 1) {
        attach(containerParents[i]);
      }
    } // Observe container


    attach(swiper.$el[0], {
      childList: swiper.params.observeSlideChildren
    }); // Observe wrapper

    attach(swiper.$wrapperEl[0], {
      attributes: false
    });
  };

  const destroy = () => {
    observers.forEach(observer => {
      observer.disconnect();
    });
    observers.splice(0, observers.length);
  };

  extendParams({
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  });
  on('init', init);
  on('destroy', destroy);
}

/***/ }),

/***/ "./node_modules/swiper/core/modules/resize/resize.js":
/*!***********************************************************!*\
  !*** ./node_modules/swiper/core/modules/resize/resize.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Resize)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

function Resize({
  swiper,
  on,
  emit
}) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  let observer = null;

  const resizeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('beforeResize');
    emit('resize');
  };

  const createObserver = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    observer = new ResizeObserver(entries => {
      const {
        width,
        height
      } = swiper;
      let newWidth = width;
      let newHeight = height;
      entries.forEach(({
        contentBoxSize,
        contentRect,
        target
      }) => {
        if (target && target !== swiper.el) return;
        newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
        newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
      });

      if (newWidth !== width || newHeight !== height) {
        resizeHandler();
      }
    });
    observer.observe(swiper.el);
  };

  const removeObserver = () => {
    if (observer && observer.unobserve && swiper.el) {
      observer.unobserve(swiper.el);
      observer = null;
    }
  };

  const orientationChangeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('orientationchange');
  };

  on('init', () => {
    if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
      createObserver();
      return;
    }

    window.addEventListener('resize', resizeHandler);
    window.addEventListener('orientationchange', orientationChangeHandler);
  });
  on('destroy', () => {
    removeObserver();
    window.removeEventListener('resize', resizeHandler);
    window.removeEventListener('orientationchange', orientationChangeHandler);
  });
}

/***/ }),

/***/ "./node_modules/swiper/core/slide/index.js":
/*!*************************************************!*\
  !*** ./node_modules/swiper/core/slide/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _slideTo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slideTo.js */ "./node_modules/swiper/core/slide/slideTo.js");
/* harmony import */ var _slideToLoop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slideToLoop.js */ "./node_modules/swiper/core/slide/slideToLoop.js");
/* harmony import */ var _slideNext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slideNext.js */ "./node_modules/swiper/core/slide/slideNext.js");
/* harmony import */ var _slidePrev_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slidePrev.js */ "./node_modules/swiper/core/slide/slidePrev.js");
/* harmony import */ var _slideReset_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slideReset.js */ "./node_modules/swiper/core/slide/slideReset.js");
/* harmony import */ var _slideToClosest_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slideToClosest.js */ "./node_modules/swiper/core/slide/slideToClosest.js");
/* harmony import */ var _slideToClickedSlide_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slideToClickedSlide.js */ "./node_modules/swiper/core/slide/slideToClickedSlide.js");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  slideTo: _slideTo_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  slideToLoop: _slideToLoop_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  slideNext: _slideNext_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  slidePrev: _slidePrev_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  slideReset: _slideReset_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  slideToClosest: _slideToClosest_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  slideToClickedSlide: _slideToClickedSlide_js__WEBPACK_IMPORTED_MODULE_6__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/core/slide/slideNext.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideNext.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slideNext)
/* harmony export */ });
/* eslint no-unused-vars: "off" */
function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  const {
    animating,
    enabled,
    params
  } = swiper;
  if (!enabled) return swiper;
  let perGroup = params.slidesPerGroup;

  if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
    perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
  }

  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;

  if (params.loop) {
    if (animating && params.loopPreventsSlide) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }

  if (params.rewind && swiper.isEnd) {
    return swiper.slideTo(0, speed, runCallbacks, internal);
  }

  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}

/***/ }),

/***/ "./node_modules/swiper/core/slide/slidePrev.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/core/slide/slidePrev.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slidePrev)
/* harmony export */ });
/* eslint no-unused-vars: "off" */
function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  const {
    params,
    animating,
    snapGrid,
    slidesGrid,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled) return swiper;

  if (params.loop) {
    if (animating && params.loopPreventsSlide) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }

  const translate = rtlTranslate ? swiper.translate : -swiper.translate;

  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }

  const normalizedTranslate = normalize(translate);
  const normalizedSnapGrid = snapGrid.map(val => normalize(val));
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];

  if (typeof prevSnap === 'undefined' && params.cssMode) {
    let prevSnapIndex;
    snapGrid.forEach((snap, snapIndex) => {
      if (normalizedTranslate >= snap) {
        // prevSnap = snap;
        prevSnapIndex = snapIndex;
      }
    });

    if (typeof prevSnapIndex !== 'undefined') {
      prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
  }

  let prevIndex = 0;

  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;

    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
      prevIndex = Math.max(prevIndex, 0);
    }
  }

  if (params.rewind && swiper.isBeginning) {
    return swiper.slideTo(swiper.slides.length - 1, speed, runCallbacks, internal);
  }

  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

/***/ }),

/***/ "./node_modules/swiper/core/slide/slideReset.js":
/*!******************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideReset.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slideReset)
/* harmony export */ });
/* eslint no-unused-vars: "off" */
function slideReset(speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

/***/ }),

/***/ "./node_modules/swiper/core/slide/slideTo.js":
/*!***************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideTo.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slideTo)
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");

function slideTo(index = 0, speed = this.params.speed, runCallbacks = true, internal, initial) {
  if (typeof index !== 'number' && typeof index !== 'string') {
    throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);
  }

  if (typeof index === 'string') {
    /**
     * The `index` argument converted from `string` to `number`.
     * @type {number}
     */
    const indexAsNumber = parseInt(index, 10);
    /**
     * Determines whether the `index` argument is a valid `number`
     * after being converted from the `string` type.
     * @type {boolean}
     */

    const isValidNumber = isFinite(indexAsNumber);

    if (!isValidNumber) {
      throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
    } // Knowing that the converted `index` is a valid number,
    // we can update the original argument's value.


    index = indexAsNumber;
  }

  const swiper = this;
  let slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  const {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl,
    enabled
  } = swiper;

  if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
    return false;
  }

  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }

  const translate = -snapGrid[snapIndex]; // Update progress

  swiper.updateProgress(translate); // Normalize slideIndex

  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      const normalizedTranslate = -Math.floor(translate * 100);
      const normalizedGrid = Math.floor(slidesGrid[i] * 100);
      const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);

      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGrid) {
        slideIndex = i;
      }
    }
  } // Directions locks


  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
      return false;
    }

    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) return false;
    }
  }

  let direction;
  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index

  if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
    swiper.updateActiveIndex(slideIndex); // Update Height

    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }

    swiper.updateSlidesClasses();

    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }

    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }

    return false;
  }

  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    const t = rtl ? translate : -translate;

    if (speed === 0) {
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

      if (isVirtual) {
        swiper.wrapperEl.style.scrollSnapType = 'none';
        swiper._immediateVirtual = true;
      }

      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;

      if (isVirtual) {
        requestAnimationFrame(() => {
          swiper.wrapperEl.style.scrollSnapType = '';
          swiper._swiperImmediateVirtual = false;
        });
      }
    } else {
      if (!swiper.support.smoothScroll) {
        (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.animateCSSModeScroll)({
          swiper,
          targetPosition: t,
          side: isH ? 'left' : 'top'
        });
        return true;
      }

      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: t,
        behavior: 'smooth'
      });
    }

    return true;
  }

  swiper.setTransition(speed);
  swiper.setTranslate(translate);
  swiper.updateActiveIndex(slideIndex);
  swiper.updateSlidesClasses();
  swiper.emit('beforeTransitionStart', speed, internal);
  swiper.transitionStart(runCallbacks, direction);

  if (speed === 0) {
    swiper.transitionEnd(runCallbacks, direction);
  } else if (!swiper.animating) {
    swiper.animating = true;

    if (!swiper.onSlideToWrapperTransitionEnd) {
      swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
        if (!swiper || swiper.destroyed) return;
        if (e.target !== this) return;
        swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
        swiper.onSlideToWrapperTransitionEnd = null;
        delete swiper.onSlideToWrapperTransitionEnd;
        swiper.transitionEnd(runCallbacks, direction);
      };
    }

    swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
    swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
  }

  return true;
}

/***/ }),

/***/ "./node_modules/swiper/core/slide/slideToClickedSlide.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideToClickedSlide.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slideToClickedSlide)
/* harmony export */ });
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");


function slideToClickedSlide() {
  const swiper = this;
  const {
    params,
    $wrapperEl
  } = swiper;
  const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.clickedIndex;
  let realIndex;

  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);

    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
        (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.nextTick)(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.nextTick)(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/slide/slideToClosest.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideToClosest.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slideToClosest)
/* harmony export */ });
/* eslint no-unused-vars: "off" */
function slideToClosest(speed = this.params.speed, runCallbacks = true, internal, threshold = 0.5) {
  const swiper = this;
  let index = swiper.activeIndex;
  const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

  if (translate >= swiper.snapGrid[snapIndex]) {
    // The current translate is on or after the current snap index, so the choice
    // is between the current index and the one after it.
    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];

    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    // The current translate is before the current snap index, so the choice
    // is between the current index and the one before it.
    const prevSnap = swiper.snapGrid[snapIndex - 1];
    const currentSnap = swiper.snapGrid[snapIndex];

    if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }

  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}

/***/ }),

/***/ "./node_modules/swiper/core/slide/slideToLoop.js":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideToLoop.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slideToLoop)
/* harmony export */ });
function slideToLoop(index = 0, speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  let newIndex = index;

  if (swiper.params.loop) {
    newIndex += swiper.loopedSlides;
  }

  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}

/***/ }),

/***/ "./node_modules/swiper/core/transition/index.js":
/*!******************************************************!*\
  !*** ./node_modules/swiper/core/transition/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _setTransition_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setTransition.js */ "./node_modules/swiper/core/transition/setTransition.js");
/* harmony import */ var _transitionStart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitionStart.js */ "./node_modules/swiper/core/transition/transitionStart.js");
/* harmony import */ var _transitionEnd_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transitionEnd.js */ "./node_modules/swiper/core/transition/transitionEnd.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setTransition: _setTransition_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  transitionStart: _transitionStart_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  transitionEnd: _transitionEnd_js__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/core/transition/setTransition.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/core/transition/setTransition.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setTransition)
/* harmony export */ });
function setTransition(duration, byController) {
  const swiper = this;

  if (!swiper.params.cssMode) {
    swiper.$wrapperEl.transition(duration);
  }

  swiper.emit('setTransition', duration, byController);
}

/***/ }),

/***/ "./node_modules/swiper/core/transition/transitionEmit.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/transition/transitionEmit.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ transitionEmit)
/* harmony export */ });
function transitionEmit({
  swiper,
  runCallbacks,
  direction,
  step
}) {
  const {
    activeIndex,
    previousIndex
  } = swiper;
  let dir = direction;

  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }

  swiper.emit(`transition${step}`);

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit(`slideResetTransition${step}`);
      return;
    }

    swiper.emit(`slideChangeTransition${step}`);

    if (dir === 'next') {
      swiper.emit(`slideNextTransition${step}`);
    } else {
      swiper.emit(`slidePrevTransition${step}`);
    }
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/transition/transitionEnd.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/core/transition/transitionEnd.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ transitionEnd)
/* harmony export */ });
/* harmony import */ var _transitionEmit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transitionEmit.js */ "./node_modules/swiper/core/transition/transitionEmit.js");

function transitionEnd(runCallbacks = true, direction) {
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  (0,_transitionEmit_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    swiper,
    runCallbacks,
    direction,
    step: 'End'
  });
}

/***/ }),

/***/ "./node_modules/swiper/core/transition/transitionStart.js":
/*!****************************************************************!*\
  !*** ./node_modules/swiper/core/transition/transitionStart.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ transitionStart)
/* harmony export */ });
/* harmony import */ var _transitionEmit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transitionEmit.js */ "./node_modules/swiper/core/transition/transitionEmit.js");

function transitionStart(runCallbacks = true, direction) {
  const swiper = this;
  const {
    params
  } = swiper;
  if (params.cssMode) return;

  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }

  (0,_transitionEmit_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    swiper,
    runCallbacks,
    direction,
    step: 'Start'
  });
}

/***/ }),

/***/ "./node_modules/swiper/core/translate/getTranslate.js":
/*!************************************************************!*\
  !*** ./node_modules/swiper/core/translate/getTranslate.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getSwiperTranslate)
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");

function getSwiperTranslate(axis = this.isHorizontal() ? 'x' : 'y') {
  const swiper = this;
  const {
    params,
    rtlTranslate: rtl,
    translate,
    $wrapperEl
  } = swiper;

  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }

  if (params.cssMode) {
    return translate;
  }

  let currentTranslate = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.getTranslate)($wrapperEl[0], axis);
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}

/***/ }),

/***/ "./node_modules/swiper/core/translate/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/core/translate/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getTranslate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTranslate.js */ "./node_modules/swiper/core/translate/getTranslate.js");
/* harmony import */ var _setTranslate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setTranslate.js */ "./node_modules/swiper/core/translate/setTranslate.js");
/* harmony import */ var _minTranslate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./minTranslate.js */ "./node_modules/swiper/core/translate/minTranslate.js");
/* harmony import */ var _maxTranslate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maxTranslate.js */ "./node_modules/swiper/core/translate/maxTranslate.js");
/* harmony import */ var _translateTo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./translateTo.js */ "./node_modules/swiper/core/translate/translateTo.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getTranslate: _getTranslate_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  setTranslate: _setTranslate_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  minTranslate: _minTranslate_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  maxTranslate: _maxTranslate_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  translateTo: _translateTo_js__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/core/translate/maxTranslate.js":
/*!************************************************************!*\
  !*** ./node_modules/swiper/core/translate/maxTranslate.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ maxTranslate)
/* harmony export */ });
function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}

/***/ }),

/***/ "./node_modules/swiper/core/translate/minTranslate.js":
/*!************************************************************!*\
  !*** ./node_modules/swiper/core/translate/minTranslate.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ minTranslate)
/* harmony export */ });
function minTranslate() {
  return -this.snapGrid[0];
}

/***/ }),

/***/ "./node_modules/swiper/core/translate/setTranslate.js":
/*!************************************************************!*\
  !*** ./node_modules/swiper/core/translate/setTranslate.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setTranslate)
/* harmony export */ });
function setTranslate(translate, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl,
    params,
    $wrapperEl,
    wrapperEl,
    progress
  } = swiper;
  let x = 0;
  let y = 0;
  const z = 0;

  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }

  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }

  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
  }

  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress

  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / translatesDiff;
  }

  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }

  swiper.emit('setTranslate', swiper.translate, byController);
}

/***/ }),

/***/ "./node_modules/swiper/core/translate/translateTo.js":
/*!***********************************************************!*\
  !*** ./node_modules/swiper/core/translate/translateTo.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ translateTo)
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");

function translateTo(translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
  const swiper = this;
  const {
    params,
    wrapperEl
  } = swiper;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }

  const minTranslate = swiper.minTranslate();
  const maxTranslate = swiper.maxTranslate();
  let newTranslate;
  if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate; // Update progress

  swiper.updateProgress(newTranslate);

  if (params.cssMode) {
    const isH = swiper.isHorizontal();

    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
    } else {
      if (!swiper.support.smoothScroll) {
        (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.animateCSSModeScroll)({
          swiper,
          targetPosition: -newTranslate,
          side: isH ? 'left' : 'top'
        });
        return true;
      }

      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: -newTranslate,
        behavior: 'smooth'
      });
    }

    return true;
  }

  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);

    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionEnd');
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);

    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionStart');
    }

    if (!swiper.animating) {
      swiper.animating = true;

      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;

          if (runCallbacks) {
            swiper.emit('transitionEnd');
          }
        };
      }

      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/swiper/core/update/index.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/core/update/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _updateSize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateSize.js */ "./node_modules/swiper/core/update/updateSize.js");
/* harmony import */ var _updateSlides_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateSlides.js */ "./node_modules/swiper/core/update/updateSlides.js");
/* harmony import */ var _updateAutoHeight_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateAutoHeight.js */ "./node_modules/swiper/core/update/updateAutoHeight.js");
/* harmony import */ var _updateSlidesOffset_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateSlidesOffset.js */ "./node_modules/swiper/core/update/updateSlidesOffset.js");
/* harmony import */ var _updateSlidesProgress_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateSlidesProgress.js */ "./node_modules/swiper/core/update/updateSlidesProgress.js");
/* harmony import */ var _updateProgress_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updateProgress.js */ "./node_modules/swiper/core/update/updateProgress.js");
/* harmony import */ var _updateSlidesClasses_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updateSlidesClasses.js */ "./node_modules/swiper/core/update/updateSlidesClasses.js");
/* harmony import */ var _updateActiveIndex_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./updateActiveIndex.js */ "./node_modules/swiper/core/update/updateActiveIndex.js");
/* harmony import */ var _updateClickedSlide_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./updateClickedSlide.js */ "./node_modules/swiper/core/update/updateClickedSlide.js");









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  updateSize: _updateSize_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  updateSlides: _updateSlides_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  updateAutoHeight: _updateAutoHeight_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  updateSlidesOffset: _updateSlidesOffset_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  updateSlidesProgress: _updateSlidesProgress_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  updateProgress: _updateProgress_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  updateSlidesClasses: _updateSlidesClasses_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  updateActiveIndex: _updateActiveIndex_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  updateClickedSlide: _updateClickedSlide_js__WEBPACK_IMPORTED_MODULE_8__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/core/update/updateActiveIndex.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateActiveIndex.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateActiveIndex)
/* harmony export */ });
function updateActiveIndex(newActiveIndex) {
  const swiper = this;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    slidesGrid,
    snapGrid,
    params,
    activeIndex: previousIndex,
    realIndex: previousRealIndex,
    snapIndex: previousSnapIndex
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;

  if (typeof activeIndex === 'undefined') {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
          activeIndex = i;
        } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate >= slidesGrid[i]) {
        activeIndex = i;
      }
    } // Normalize slideIndex


    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
    }
  }

  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }

  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }

    return;
  } // Get real index


  const realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
  Object.assign(swiper, {
    snapIndex,
    realIndex,
    previousIndex,
    activeIndex
  });
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');

  if (previousRealIndex !== realIndex) {
    swiper.emit('realIndexChange');
  }

  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    swiper.emit('slideChange');
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/update/updateAutoHeight.js":
/*!*************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateAutoHeight.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateAutoHeight)
/* harmony export */ });
function updateAutoHeight(speed) {
  const swiper = this;
  const activeSlides = [];
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  let newHeight = 0;
  let i;

  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }

  const getSlideByIndex = index => {
    if (isVirtual) {
      return swiper.slides.filter(el => parseInt(el.getAttribute('data-swiper-slide-index'), 10) === index)[0];
    }

    return swiper.slides.eq(index)[0];
  }; // Find slides currently in view


  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      swiper.visibleSlides.each(slide => {
        activeSlides.push(slide);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        const index = swiper.activeIndex + i;
        if (index > swiper.slides.length && !isVirtual) break;
        activeSlides.push(getSlideByIndex(index));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  } // Find new height from highest slide in view


  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      const height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  } // Update Height


  if (newHeight || newHeight === 0) swiper.$wrapperEl.css('height', `${newHeight}px`);
}

/***/ }),

/***/ "./node_modules/swiper/core/update/updateClickedSlide.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateClickedSlide.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateClickedSlide)
/* harmony export */ });
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");

function updateClickedSlide(e) {
  const swiper = this;
  const params = swiper.params;
  const slide = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e).closest(`.${params.slideClass}`)[0];
  let slideFound = false;
  let slideIndex;

  if (slide) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }

  if (slide && slideFound) {
    swiper.clickedSlide = slide;

    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(slide).attr('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }

  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/update/updateProgress.js":
/*!***********************************************************!*\
  !*** ./node_modules/swiper/core/update/updateProgress.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateProgress)
/* harmony export */ });
function updateProgress(translate) {
  const swiper = this;

  if (typeof translate === 'undefined') {
    const multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line

    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }

  const params = swiper.params;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let {
    progress,
    isBeginning,
    isEnd
  } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;

  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / translatesDiff;
    isBeginning = progress <= 0;
    isEnd = progress >= 1;
  }

  Object.assign(swiper, {
    progress,
    isBeginning,
    isEnd
  });
  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);

  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }

  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }

  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit('fromEdge');
  }

  swiper.emit('progress', progress);
}

/***/ }),

/***/ "./node_modules/swiper/core/update/updateSize.js":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/core/update/updateSize.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateSize)
/* harmony export */ });
function updateSize() {
  const swiper = this;
  let width;
  let height;
  const $el = swiper.$el;

  if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = $el[0].clientWidth;
  }

  if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = $el[0].clientHeight;
  }

  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  } // Subtract paddings


  width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
  height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  Object.assign(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  });
}

/***/ }),

/***/ "./node_modules/swiper/core/update/updateSlides.js":
/*!*********************************************************!*\
  !*** ./node_modules/swiper/core/update/updateSlides.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateSlides)
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");

function updateSlides() {
  const swiper = this;

  function getDirectionLabel(property) {
    if (swiper.isHorizontal()) {
      return property;
    } // prettier-ignore


    return {
      'width': 'height',
      'margin-top': 'margin-left',
      'margin-bottom ': 'margin-right',
      'margin-left': 'margin-top',
      'margin-right': 'margin-bottom',
      'padding-left': 'padding-top',
      'padding-right': 'padding-bottom',
      'marginRight': 'marginBottom'
    }[property];
  }

  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
  }

  const params = swiper.params;
  const {
    $wrapperEl,
    size: swiperSize,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];
  let offsetBefore = params.slidesOffsetBefore;

  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }

  let offsetAfter = params.slidesOffsetAfter;

  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }

  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.slidesGrid.length;
  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index = 0;

  if (typeof swiperSize === 'undefined') {
    return;
  }

  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
  }

  swiper.virtualSize = -spaceBetween; // reset margins

  if (rtl) slides.css({
    marginLeft: '',
    marginBottom: '',
    marginTop: ''
  });else slides.css({
    marginRight: '',
    marginBottom: '',
    marginTop: ''
  }); // reset cssMode offsets

  if (params.centeredSlides && params.cssMode) {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.setCSSProperty)(swiper.wrapperEl, '--swiper-centered-offset-before', '');
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.setCSSProperty)(swiper.wrapperEl, '--swiper-centered-offset-after', '');
  }

  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;

  if (gridEnabled) {
    swiper.grid.initSlides(slidesLength);
  } // Calc slides


  let slideSize;
  const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
    return typeof params.breakpoints[key].slidesPerView !== 'undefined';
  }).length > 0;

  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    const slide = slides.eq(i);

    if (gridEnabled) {
      swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
    }

    if (slide.css('display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      if (shouldResetSlideSize) {
        slides[i].style[getDirectionLabel('width')] = ``;
      }

      const slideStyles = getComputedStyle(slide[0]);
      const currentTransform = slide[0].style.transform;
      const currentWebKitTransform = slide[0].style.webkitTransform;

      if (currentTransform) {
        slide[0].style.transform = 'none';
      }

      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = 'none';
      }

      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
      } else {
        // eslint-disable-next-line
        const width = getDirectionPropertyValue(slideStyles, 'width');
        const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
        const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
        const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
        const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
        const boxSizing = slideStyles.getPropertyValue('box-sizing');

        if (boxSizing && boxSizing === 'border-box') {
          slideSize = width + marginLeft + marginRight;
        } else {
          const {
            clientWidth,
            offsetWidth
          } = slide[0];
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }

      if (currentTransform) {
        slide[0].style.transform = currentTransform;
      }

      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = currentWebKitTransform;
      }

      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);

      if (slides[i]) {
        slides[i].style[getDirectionLabel('width')] = `${slideSize}px`;
      }
    }

    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }

    slidesSizesGrid.push(slideSize);

    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }

    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }

  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;

  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    $wrapperEl.css({
      width: `${swiper.virtualSize + params.spaceBetween}px`
    });
  }

  if (params.setWrapperSize) {
    $wrapperEl.css({
      [getDirectionLabel('width')]: `${swiper.virtualSize + params.spaceBetween}px`
    });
  }

  if (gridEnabled) {
    swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
  } // Remove last grid elements depending on width


  if (!params.centeredSlides) {
    const newSlidesGrid = [];

    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);

      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }

    snapGrid = newSlidesGrid;

    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }

  if (snapGrid.length === 0) snapGrid = [0];

  if (params.spaceBetween !== 0) {
    const key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
    slides.filter((_, slideIndex) => {
      if (!params.cssMode) return true;

      if (slideIndex === slides.length - 1) {
        return false;
      }

      return true;
    }).css({
      [key]: `${spaceBetween}px`
    });
  }

  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;
    const maxSnap = allSlidesSize - swiperSize;
    snapGrid = snapGrid.map(snap => {
      if (snap < 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }

  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;

    if (allSlidesSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }

  Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  });

  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.setCSSProperty)(swiper.wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.setCSSProperty)(swiper.wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
    const addToSnapGrid = -swiper.snapGrid[0];
    const addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
    swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);
  }

  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }

  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }

  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }

  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/update/updateSlidesClasses.js":
/*!****************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateSlidesClasses.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateSlidesClasses)
/* harmony export */ });
function updateSlidesClasses() {
  const swiper = this;
  const {
    slides,
    params,
    $wrapperEl,
    activeIndex,
    realIndex
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
  let activeSlide;

  if (isVirtual) {
    activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`);
  } else {
    activeSlide = slides.eq(activeIndex);
  } // Active classes


  activeSlide.addClass(params.slideActiveClass);

  if (params.loop) {
    // Duplicate to all looped slides
    if (activeSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
    } else {
      $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
    }
  } // Next Slide


  let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);

  if (params.loop && nextSlide.length === 0) {
    nextSlide = slides.eq(0);
    nextSlide.addClass(params.slideNextClass);
  } // Prev Slide


  let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);

  if (params.loop && prevSlide.length === 0) {
    prevSlide = slides.eq(-1);
    prevSlide.addClass(params.slidePrevClass);
  }

  if (params.loop) {
    // Duplicate to all looped slides
    if (nextSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicateNextClass);
    } else {
      $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicateNextClass);
    }

    if (prevSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicatePrevClass);
    } else {
      $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicatePrevClass);
    }
  }

  swiper.emitSlidesClasses();
}

/***/ }),

/***/ "./node_modules/swiper/core/update/updateSlidesOffset.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateSlidesOffset.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateSlidesOffset)
/* harmony export */ });
function updateSlidesOffset() {
  const swiper = this;
  const slides = swiper.slides;

  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
  }
}

/***/ }),

/***/ "./node_modules/swiper/core/update/updateSlidesProgress.js":
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateSlidesProgress.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateSlidesProgress)
/* harmony export */ });
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");

function updateSlidesProgress(translate = this && this.translate || 0) {
  const swiper = this;
  const params = swiper.params;
  const {
    slides,
    rtlTranslate: rtl,
    snapGrid
  } = swiper;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
  let offsetCenter = -translate;
  if (rtl) offsetCenter = translate; // Visible Slides

  slides.removeClass(params.slideVisibleClass);
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];

  for (let i = 0; i < slides.length; i += 1) {
    const slide = slides[i];
    let slideOffset = slide.swiperSlideOffset;

    if (params.cssMode && params.centeredSlides) {
      slideOffset -= slides[0].swiperSlideOffset;
    }

    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
    const slideBefore = -(offsetCenter - slideOffset);
    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;

    if (isVisible) {
      swiper.visibleSlides.push(slide);
      swiper.visibleSlidesIndexes.push(i);
      slides.eq(i).addClass(params.slideVisibleClass);
    }

    slide.progress = rtl ? -slideProgress : slideProgress;
    slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
  }

  swiper.visibleSlides = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.visibleSlides);
}

/***/ }),

/***/ "./node_modules/swiper/modules/a11y/a11y.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/a11y/a11y.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ A11y)
/* harmony export */ });
/* harmony import */ var _shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/classes-to-selector.js */ "./node_modules/swiper/shared/classes-to-selector.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");


function A11y({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    a11y: {
      enabled: true,
      notificationClass: 'swiper-notification',
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
      slideLabelMessage: '{{index}} / {{slidesLength}}',
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      itemRoleDescriptionMessage: null,
      slideRole: 'group'
    }
  });
  let liveRegion = null;

  function notify(message) {
    const notification = liveRegion;
    if (notification.length === 0) return;
    notification.html('');
    notification.html(message);
  }

  function getRandomNumber(size = 16) {
    const randomChar = () => Math.round(16 * Math.random()).toString(16);

    return 'x'.repeat(size).replace(/x/g, randomChar);
  }

  function makeElFocusable($el) {
    $el.attr('tabIndex', '0');
  }

  function makeElNotFocusable($el) {
    $el.attr('tabIndex', '-1');
  }

  function addElRole($el, role) {
    $el.attr('role', role);
  }

  function addElRoleDescription($el, description) {
    $el.attr('aria-roledescription', description);
  }

  function addElControls($el, controls) {
    $el.attr('aria-controls', controls);
  }

  function addElLabel($el, label) {
    $el.attr('aria-label', label);
  }

  function addElId($el, id) {
    $el.attr('id', id);
  }

  function addElLive($el, live) {
    $el.attr('aria-live', live);
  }

  function disableEl($el) {
    $el.attr('aria-disabled', true);
  }

  function enableEl($el) {
    $el.attr('aria-disabled', false);
  }

  function onEnterOrSpaceKey(e) {
    if (e.keyCode !== 13 && e.keyCode !== 32) return;
    const params = swiper.params.a11y;
    const $targetEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target);

    if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
      if (!(swiper.isEnd && !swiper.params.loop)) {
        swiper.slideNext();
      }

      if (swiper.isEnd) {
        notify(params.lastSlideMessage);
      } else {
        notify(params.nextSlideMessage);
      }
    }

    if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
      if (!(swiper.isBeginning && !swiper.params.loop)) {
        swiper.slidePrev();
      }

      if (swiper.isBeginning) {
        notify(params.firstSlideMessage);
      } else {
        notify(params.prevSlideMessage);
      }
    }

    if (swiper.pagination && $targetEl.is((0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.params.pagination.bulletClass))) {
      $targetEl[0].click();
    }
  }

  function updateNavigation() {
    if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;

    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        disableEl($prevEl);
        makeElNotFocusable($prevEl);
      } else {
        enableEl($prevEl);
        makeElFocusable($prevEl);
      }
    }

    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        disableEl($nextEl);
        makeElNotFocusable($nextEl);
      } else {
        enableEl($nextEl);
        makeElFocusable($nextEl);
      }
    }
  }

  function hasPagination() {
    return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
  }

  function hasClickablePagination() {
    return hasPagination() && swiper.params.pagination.clickable;
  }

  function updatePagination() {
    const params = swiper.params.a11y;
    if (!hasPagination()) return;
    swiper.pagination.bullets.each(bulletEl => {
      const $bulletEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(bulletEl);

      if (swiper.params.pagination.clickable) {
        makeElFocusable($bulletEl);

        if (!swiper.params.pagination.renderBullet) {
          addElRole($bulletEl, 'button');
          addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
        }
      }

      if ($bulletEl.is(`.${swiper.params.pagination.bulletActiveClass}`)) {
        $bulletEl.attr('aria-current', 'true');
      } else {
        $bulletEl.removeAttr('aria-current');
      }
    });
  }

  const initNavEl = ($el, wrapperId, message) => {
    makeElFocusable($el);

    if ($el[0].tagName !== 'BUTTON') {
      addElRole($el, 'button');
      $el.on('keydown', onEnterOrSpaceKey);
    }

    addElLabel($el, message);
    addElControls($el, wrapperId);
  };

  function init() {
    const params = swiper.params.a11y;
    swiper.$el.append(liveRegion); // Container

    const $containerEl = swiper.$el;

    if (params.containerRoleDescriptionMessage) {
      addElRoleDescription($containerEl, params.containerRoleDescriptionMessage);
    }

    if (params.containerMessage) {
      addElLabel($containerEl, params.containerMessage);
    } // Wrapper


    const $wrapperEl = swiper.$wrapperEl;
    const wrapperId = $wrapperEl.attr('id') || `swiper-wrapper-${getRandomNumber(16)}`;
    const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
    addElId($wrapperEl, wrapperId);
    addElLive($wrapperEl, live); // Slide

    if (params.itemRoleDescriptionMessage) {
      addElRoleDescription((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(swiper.slides), params.itemRoleDescriptionMessage);
    }

    addElRole((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(swiper.slides), params.slideRole);
    const slidesLength = swiper.params.loop ? swiper.slides.filter(el => !el.classList.contains(swiper.params.slideDuplicateClass)).length : swiper.slides.length;
    swiper.slides.each((slideEl, index) => {
      const $slideEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(slideEl);
      const slideIndex = swiper.params.loop ? parseInt($slideEl.attr('data-swiper-slide-index'), 10) : index;
      const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
      addElLabel($slideEl, ariaLabelMessage);
    }); // Navigation

    let $nextEl;
    let $prevEl;

    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }

    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }

    if ($nextEl && $nextEl.length) {
      initNavEl($nextEl, wrapperId, params.nextSlideMessage);
    }

    if ($prevEl && $prevEl.length) {
      initNavEl($prevEl, wrapperId, params.prevSlideMessage);
    } // Pagination


    if (hasClickablePagination()) {
      swiper.pagination.$el.on('keydown', (0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
    }
  }

  function destroy() {
    if (liveRegion && liveRegion.length > 0) liveRegion.remove();
    let $nextEl;
    let $prevEl;

    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }

    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }

    if ($nextEl) {
      $nextEl.off('keydown', onEnterOrSpaceKey);
    }

    if ($prevEl) {
      $prevEl.off('keydown', onEnterOrSpaceKey);
    } // Pagination


    if (hasClickablePagination()) {
      swiper.pagination.$el.off('keydown', (0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
    }
  }

  on('beforeInit', () => {
    liveRegion = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(`<span class="${swiper.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`);
  });
  on('afterInit', () => {
    if (!swiper.params.a11y.enabled) return;
    init();
    updateNavigation();
  });
  on('toEdge', () => {
    if (!swiper.params.a11y.enabled) return;
    updateNavigation();
  });
  on('fromEdge', () => {
    if (!swiper.params.a11y.enabled) return;
    updateNavigation();
  });
  on('paginationUpdate', () => {
    if (!swiper.params.a11y.enabled) return;
    updatePagination();
  });
  on('destroy', () => {
    if (!swiper.params.a11y.enabled) return;
    destroy();
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/autoplay/autoplay.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/modules/autoplay/autoplay.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Autoplay)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");
/* eslint no-underscore-dangle: "off" */

/* eslint no-use-before-define: "off" */


function Autoplay({
  swiper,
  extendParams,
  on,
  emit
}) {
  let timeout;
  swiper.autoplay = {
    running: false,
    paused: false
  };
  extendParams({
    autoplay: {
      enabled: false,
      delay: 3000,
      waitForTransition: true,
      disableOnInteraction: true,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    }
  });

  function run() {
    const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
    let delay = swiper.params.autoplay.delay;

    if ($activeSlideEl.attr('data-swiper-autoplay')) {
      delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
    }

    clearTimeout(timeout);
    timeout = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.nextTick)(() => {
      let autoplayResult;

      if (swiper.params.autoplay.reverseDirection) {
        if (swiper.params.loop) {
          swiper.loopFix();
          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
          emit('autoplay');
        } else if (!swiper.isBeginning) {
          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
          emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
          emit('autoplay');
        } else {
          stop();
        }
      } else if (swiper.params.loop) {
        swiper.loopFix();
        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
        emit('autoplay');
      } else if (!swiper.isEnd) {
        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
        emit('autoplay');
      } else if (!swiper.params.autoplay.stopOnLastSlide) {
        autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
        emit('autoplay');
      } else {
        stop();
      }

      if (swiper.params.cssMode && swiper.autoplay.running) run();else if (autoplayResult === false) {
        run();
      }
    }, delay);
  }

  function start() {
    if (typeof timeout !== 'undefined') return false;
    if (swiper.autoplay.running) return false;
    swiper.autoplay.running = true;
    emit('autoplayStart');
    run();
    return true;
  }

  function stop() {
    if (!swiper.autoplay.running) return false;
    if (typeof timeout === 'undefined') return false;

    if (timeout) {
      clearTimeout(timeout);
      timeout = undefined;
    }

    swiper.autoplay.running = false;
    emit('autoplayStop');
    return true;
  }

  function pause(speed) {
    if (!swiper.autoplay.running) return;
    if (swiper.autoplay.paused) return;
    if (timeout) clearTimeout(timeout);
    swiper.autoplay.paused = true;

    if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
      swiper.autoplay.paused = false;
      run();
    } else {
      ['transitionend', 'webkitTransitionEnd'].forEach(event => {
        swiper.$wrapperEl[0].addEventListener(event, onTransitionEnd);
      });
    }
  }

  function onVisibilityChange() {
    const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();

    if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
      pause();
    }

    if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
      run();
      swiper.autoplay.paused = false;
    }
  }

  function onTransitionEnd(e) {
    if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
    if (e.target !== swiper.$wrapperEl[0]) return;
    ['transitionend', 'webkitTransitionEnd'].forEach(event => {
      swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
    });
    swiper.autoplay.paused = false;

    if (!swiper.autoplay.running) {
      stop();
    } else {
      run();
    }
  }

  function onMouseEnter() {
    if (swiper.params.autoplay.disableOnInteraction) {
      stop();
    } else {
      pause();
    }

    ['transitionend', 'webkitTransitionEnd'].forEach(event => {
      swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
    });
  }

  function onMouseLeave() {
    if (swiper.params.autoplay.disableOnInteraction) {
      return;
    }

    swiper.autoplay.paused = false;
    run();
  }

  function attachMouseEvents() {
    if (swiper.params.autoplay.pauseOnMouseEnter) {
      swiper.$el.on('mouseenter', onMouseEnter);
      swiper.$el.on('mouseleave', onMouseLeave);
    }
  }

  function detachMouseEvents() {
    swiper.$el.off('mouseenter', onMouseEnter);
    swiper.$el.off('mouseleave', onMouseLeave);
  }

  on('init', () => {
    if (swiper.params.autoplay.enabled) {
      start();
      const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
      document.addEventListener('visibilitychange', onVisibilityChange);
      attachMouseEvents();
    }
  });
  on('beforeTransitionStart', (_s, speed, internal) => {
    if (swiper.autoplay.running) {
      if (internal || !swiper.params.autoplay.disableOnInteraction) {
        swiper.autoplay.pause(speed);
      } else {
        stop();
      }
    }
  });
  on('sliderFirstMove', () => {
    if (swiper.autoplay.running) {
      if (swiper.params.autoplay.disableOnInteraction) {
        stop();
      } else {
        pause();
      }
    }
  });
  on('touchEnd', () => {
    if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
      run();
    }
  });
  on('destroy', () => {
    detachMouseEvents();

    if (swiper.autoplay.running) {
      stop();
    }

    const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
    document.removeEventListener('visibilitychange', onVisibilityChange);
  });
  Object.assign(swiper.autoplay, {
    pause,
    run,
    start,
    stop
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/controller/controller.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/modules/controller/controller.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");
/* eslint no-bitwise: ["error", { "allow": [">>"] }] */

function Controller({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    controller: {
      control: undefined,
      inverse: false,
      by: 'slide' // or 'container'

    }
  });
  swiper.controller = {
    control: undefined
  };

  function LinearSpline(x, y) {
    const binarySearch = function search() {
      let maxIndex;
      let minIndex;
      let guess;
      return (array, val) => {
        minIndex = -1;
        maxIndex = array.length;

        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;

          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }

        return maxIndex;
      };
    }();

    this.x = x;
    this.y = y;
    this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
    // (x1,y1) is the known point before given value,
    // (x3,y3) is the known point after given value.

    let i1;
    let i3;

    this.interpolate = function interpolate(x2) {
      if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):

      i3 = binarySearch(this.x, x2);
      i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
      // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1

      return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
    };

    return this;
  } // xxx: for now i will just save one spline function to to


  function getInterpolateFunction(c) {
    if (!swiper.controller.spline) {
      swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
    }
  }

  function setTranslate(_t, byController) {
    const controlled = swiper.controller.control;
    let multiplier;
    let controlledTranslate;
    const Swiper = swiper.constructor;

    function setControlledTranslate(c) {
      // this will create an Interpolate function based on the snapGrids
      // x is the Grid of the scrolled scroller and y will be the controlled scroller
      // it makes sense to create this only once and recall it for the interpolation
      // the function does a lot of value caching for performance
      const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;

      if (swiper.params.controller.by === 'slide') {
        getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
        // but it did not work out

        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
      }

      if (!controlledTranslate || swiper.params.controller.by === 'container') {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
        controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
      }

      if (swiper.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }

      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }

    if (Array.isArray(controlled)) {
      for (let i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  }

  function setTransition(duration, byController) {
    const Swiper = swiper.constructor;
    const controlled = swiper.controller.control;
    let i;

    function setControlledTransition(c) {
      c.setTransition(duration, swiper);

      if (duration !== 0) {
        c.transitionStart();

        if (c.params.autoHeight) {
          (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
            c.updateAutoHeight();
          });
        }

        c.$wrapperEl.transitionEnd(() => {
          if (!controlled) return;

          if (c.params.loop && swiper.params.controller.by === 'slide') {
            c.loopFix();
          }

          c.transitionEnd();
        });
      }
    }

    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTransition(controlled);
    }
  }

  function removeSpline() {
    if (!swiper.controller.control) return;

    if (swiper.controller.spline) {
      swiper.controller.spline = undefined;
      delete swiper.controller.spline;
    }
  }

  on('beforeInit', () => {
    swiper.controller.control = swiper.params.controller.control;
  });
  on('update', () => {
    removeSpline();
  });
  on('resize', () => {
    removeSpline();
  });
  on('observerUpdate', () => {
    removeSpline();
  });
  on('setTranslate', (_s, translate, byController) => {
    if (!swiper.controller.control) return;
    swiper.controller.setTranslate(translate, byController);
  });
  on('setTransition', (_s, duration, byController) => {
    if (!swiper.controller.control) return;
    swiper.controller.setTransition(duration, byController);
  });
  Object.assign(swiper.controller, {
    setTranslate,
    setTransition
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/effect-cards/effect-cards.js":
/*!******************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-cards/effect-cards.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectCards)
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/create-shadow.js */ "./node_modules/swiper/shared/create-shadow.js");
/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-init.js */ "./node_modules/swiper/shared/effect-init.js");
/* harmony import */ var _shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/effect-target.js */ "./node_modules/swiper/shared/effect-target.js");
/* harmony import */ var _shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/effect-virtual-transition-end.js */ "./node_modules/swiper/shared/effect-virtual-transition-end.js");




function EffectCards({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    cardsEffect: {
      slideShadows: true,
      transformEl: null
    }
  });

  const setTranslate = () => {
    const {
      slides,
      activeIndex
    } = swiper;
    const params = swiper.params.cardsEffect;
    const {
      startTranslate,
      isTouched
    } = swiper.touchEventsData;
    const currentTranslate = swiper.translate;

    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = slides.eq(i);
      const slideProgress = $slideEl[0].progress;
      const progress = Math.min(Math.max(slideProgress, -4), 4);
      let offset = $slideEl[0].swiperSlideOffset;

      if (swiper.params.centeredSlides && !swiper.params.cssMode) {
        swiper.$wrapperEl.transform(`translateX(${swiper.minTranslate()}px)`);
      }

      if (swiper.params.centeredSlides && swiper.params.cssMode) {
        offset -= slides[0].swiperSlideOffset;
      }

      let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let tY = 0;
      const tZ = -100 * Math.abs(progress);
      let scale = 1;
      let rotate = -2 * progress;
      let tXAdd = 8 - Math.abs(progress) * 0.75;
      const isSwipeToNext = (i === activeIndex || i === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
      const isSwipeToPrev = (i === activeIndex || i === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;

      if (isSwipeToNext || isSwipeToPrev) {
        const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
        rotate += -28 * progress * subProgress;
        scale += -0.5 * subProgress;
        tXAdd += 96 * subProgress;
        tY = `${-25 * subProgress * Math.abs(progress)}%`;
      }

      if (progress < 0) {
        // next
        tX = `calc(${tX}px + (${tXAdd * Math.abs(progress)}%))`;
      } else if (progress > 0) {
        // prev
        tX = `calc(${tX}px + (-${tXAdd * Math.abs(progress)}%))`;
      } else {
        tX = `${tX}px`;
      }

      if (!swiper.isHorizontal()) {
        const prevY = tY;
        tY = tX;
        tX = prevY;
      }

      const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
      const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${rotate}deg)
        scale(${scaleString})
      `;

      if (params.slideShadows) {
        // Set shadows
        let $shadowEl = $slideEl.find('.swiper-slide-shadow');

        if ($shadowEl.length === 0) {
          $shadowEl = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params, $slideEl);
        }

        if ($shadowEl.length) $shadowEl[0].style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
      }

      $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const $targetEl = (0,_shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__["default"])(params, $slideEl);
      $targetEl.transform(transform);
    }
  };

  const setTransition = duration => {
    const {
      transformEl
    } = swiper.params.cardsEffect;
    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
    $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
    (0,_shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__["default"])({
      swiper,
      duration,
      transformEl
    });
  };

  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    effect: 'cards',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/effect-coverflow/effect-coverflow.js":
/*!**************************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-coverflow/effect-coverflow.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectCoverflow)
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/create-shadow.js */ "./node_modules/swiper/shared/create-shadow.js");
/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-init.js */ "./node_modules/swiper/shared/effect-init.js");
/* harmony import */ var _shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/effect-target.js */ "./node_modules/swiper/shared/effect-target.js");



function EffectCoverflow({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: true,
      transformEl: null
    }
  });

  const setTranslate = () => {
    const {
      width: swiperWidth,
      height: swiperHeight,
      slides,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.coverflowEffect;
    const isHorizontal = swiper.isHorizontal();
    const transform = swiper.translate;
    const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
    const rotate = isHorizontal ? params.rotate : -params.rotate;
    const translate = params.depth; // Each slide offset from center

    for (let i = 0, length = slides.length; i < length; i += 1) {
      const $slideEl = slides.eq(i);
      const slideSize = slidesSizesGrid[i];
      const slideOffset = $slideEl[0].swiperSlideOffset;
      const offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;
      let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

      let translateZ = -translate * Math.abs(offsetMultiplier);
      let stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders

      if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
        stretch = parseFloat(params.stretch) / 100 * slideSize;
      }

      let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
      let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
      let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values

      if (Math.abs(translateX) < 0.001) translateX = 0;
      if (Math.abs(translateY) < 0.001) translateY = 0;
      if (Math.abs(translateZ) < 0.001) translateZ = 0;
      if (Math.abs(rotateY) < 0.001) rotateY = 0;
      if (Math.abs(rotateX) < 0.001) rotateX = 0;
      if (Math.abs(scale) < 0.001) scale = 0;
      const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
      const $targetEl = (0,_shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__["default"])(params, $slideEl);
      $targetEl.transform(slideTransform);
      $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

      if (params.slideShadows) {
        // Set shadows
        let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

        if ($shadowBeforeEl.length === 0) {
          $shadowBeforeEl = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params, $slideEl, isHorizontal ? 'left' : 'top');
        }

        if ($shadowAfterEl.length === 0) {
          $shadowAfterEl = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params, $slideEl, isHorizontal ? 'right' : 'bottom');
        }

        if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
        if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
      }
    }
  };

  const setTransition = duration => {
    const {
      transformEl
    } = swiper.params.coverflowEffect;
    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
    $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
  };

  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    effect: 'coverflow',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true
    })
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/effect-creative/effect-creative.js":
/*!************************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-creative/effect-creative.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectCreative)
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/create-shadow.js */ "./node_modules/swiper/shared/create-shadow.js");
/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-init.js */ "./node_modules/swiper/shared/effect-init.js");
/* harmony import */ var _shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/effect-target.js */ "./node_modules/swiper/shared/effect-target.js");
/* harmony import */ var _shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/effect-virtual-transition-end.js */ "./node_modules/swiper/shared/effect-virtual-transition-end.js");




function EffectCreative({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    creativeEffect: {
      transformEl: null,
      limitProgress: 1,
      shadowPerProgress: false,
      progressMultiplier: 1,
      perspective: true,
      prev: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      },
      next: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      }
    }
  });

  const getTranslateValue = value => {
    if (typeof value === 'string') return value;
    return `${value}px`;
  };

  const setTranslate = () => {
    const {
      slides,
      $wrapperEl,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.creativeEffect;
    const {
      progressMultiplier: multiplier
    } = params;
    const isCenteredSlides = swiper.params.centeredSlides;

    if (isCenteredSlides) {
      const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
      $wrapperEl.transform(`translateX(calc(50% - ${margin}px))`);
    }

    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = slides.eq(i);
      const slideProgress = $slideEl[0].progress;
      const progress = Math.min(Math.max($slideEl[0].progress, -params.limitProgress), params.limitProgress);
      let originalProgress = progress;

      if (!isCenteredSlides) {
        originalProgress = Math.min(Math.max($slideEl[0].originalProgress, -params.limitProgress), params.limitProgress);
      }

      const offset = $slideEl[0].swiperSlideOffset;
      const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
      const r = [0, 0, 0];
      let custom = false;

      if (!swiper.isHorizontal()) {
        t[1] = t[0];
        t[0] = 0;
      }

      let data = {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        scale: 1,
        opacity: 1
      };

      if (progress < 0) {
        data = params.next;
        custom = true;
      } else if (progress > 0) {
        data = params.prev;
        custom = true;
      } // set translate


      t.forEach((value, index) => {
        t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
      }); // set rotates

      r.forEach((value, index) => {
        r[index] = data.rotate[index] * Math.abs(progress * multiplier);
      });
      $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const translateString = t.join(', ');
      const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
      const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
      const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
      const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`; // Set shadows

      if (custom && data.shadow || !custom) {
        let $shadowEl = $slideEl.children('.swiper-slide-shadow');

        if ($shadowEl.length === 0 && data.shadow) {
          $shadowEl = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params, $slideEl);
        }

        if ($shadowEl.length) {
          const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
          $shadowEl[0].style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
        }
      }

      const $targetEl = (0,_shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__["default"])(params, $slideEl);
      $targetEl.transform(transform).css({
        opacity: opacityString
      });

      if (data.origin) {
        $targetEl.css('transform-origin', data.origin);
      }
    }
  };

  const setTransition = duration => {
    const {
      transformEl
    } = swiper.params.creativeEffect;
    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
    $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
    (0,_shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__["default"])({
      swiper,
      duration,
      transformEl,
      allSlides: true
    });
  };

  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    effect: 'creative',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => swiper.params.creativeEffect.perspective,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/effect-cube/effect-cube.js":
/*!****************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-cube/effect-cube.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectCube)
/* harmony export */ });
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-init.js */ "./node_modules/swiper/shared/effect-init.js");


function EffectCube({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  });

  const setTranslate = () => {
    const {
      $el,
      $wrapperEl,
      slides,
      width: swiperWidth,
      height: swiperHeight,
      rtlTranslate: rtl,
      size: swiperSize,
      browser
    } = swiper;
    const params = swiper.params.cubeEffect;
    const isHorizontal = swiper.isHorizontal();
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let wrapperRotate = 0;
    let $cubeShadowEl;

    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');

        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])('<div class="swiper-cube-shadow"></div>');
          $wrapperEl.append($cubeShadowEl);
        }

        $cubeShadowEl.css({
          height: `${swiperWidth}px`
        });
      } else {
        $cubeShadowEl = $el.find('.swiper-cube-shadow');

        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])('<div class="swiper-cube-shadow"></div>');
          $el.append($cubeShadowEl);
        }
      }
    }

    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = slides.eq(i);
      let slideIndex = i;

      if (isVirtual) {
        slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
      }

      let slideAngle = slideIndex * 90;
      let round = Math.floor(slideAngle / 360);

      if (rtl) {
        slideAngle = -slideAngle;
        round = Math.floor(-slideAngle / 360);
      }

      const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      let tx = 0;
      let ty = 0;
      let tz = 0;

      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize;
        tz = 0;
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0;
        tz = -round * 4 * swiperSize;
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + round * 4 * swiperSize;
        tz = swiperSize;
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize;
        tz = 3 * swiperSize + swiperSize * 4 * round;
      }

      if (rtl) {
        tx = -tx;
      }

      if (!isHorizontal) {
        ty = tx;
        tx = 0;
      }

      const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;

      if (progress <= 1 && progress > -1) {
        wrapperRotate = slideIndex * 90 + progress * 90;
        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
      }

      $slideEl.transform(transform);

      if (params.slideShadows) {
        // Set shadows
        let shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        let shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

        if (shadowBefore.length === 0) {
          shadowBefore = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
          $slideEl.append(shadowBefore);
        }

        if (shadowAfter.length === 0) {
          shadowAfter = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
          $slideEl.append(shadowAfter);
        }

        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
      }
    }

    $wrapperEl.css({
      '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`,
      'transform-origin': `50% 50% -${swiperSize / 2}px`
    });

    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl.transform(`translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
      } else {
        const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
        const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
        const scale1 = params.shadowScale;
        const scale2 = params.shadowScale / multiplier;
        const offset = params.shadowOffset;
        $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
      }
    }

    const zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;
    $wrapperEl.transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);
  };

  const setTransition = duration => {
    const {
      $el,
      slides
    } = swiper;
    slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
      $el.find('.swiper-cube-shadow').transition(duration);
    }
  };

  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    effect: 'cube',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      resistanceRatio: 0,
      spaceBetween: 0,
      centeredSlides: false,
      virtualTranslate: true
    })
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/effect-fade/effect-fade.js":
/*!****************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-fade/effect-fade.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectFade)
/* harmony export */ });
/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/effect-init.js */ "./node_modules/swiper/shared/effect-init.js");
/* harmony import */ var _shared_effect_target_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-target.js */ "./node_modules/swiper/shared/effect-target.js");
/* harmony import */ var _shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/effect-virtual-transition-end.js */ "./node_modules/swiper/shared/effect-virtual-transition-end.js");



function EffectFade({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    fadeEffect: {
      crossFade: false,
      transformEl: null
    }
  });

  const setTranslate = () => {
    const {
      slides
    } = swiper;
    const params = swiper.params.fadeEffect;

    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = swiper.slides.eq(i);
      const offset = $slideEl[0].swiperSlideOffset;
      let tx = -offset;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      let ty = 0;

      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }

      const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
      const $targetEl = (0,_shared_effect_target_js__WEBPACK_IMPORTED_MODULE_1__["default"])(params, $slideEl);
      $targetEl.css({
        opacity: slideOpacity
      }).transform(`translate3d(${tx}px, ${ty}px, 0px)`);
    }
  };

  const setTransition = duration => {
    const {
      transformEl
    } = swiper.params.fadeEffect;
    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
    $transitionElements.transition(duration);
    (0,_shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_2__["default"])({
      swiper,
      duration,
      transformEl,
      allSlides: true
    });
  };

  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    effect: 'fade',
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/effect-flip/effect-flip.js":
/*!****************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-flip/effect-flip.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectFlip)
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/create-shadow.js */ "./node_modules/swiper/shared/create-shadow.js");
/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-init.js */ "./node_modules/swiper/shared/effect-init.js");
/* harmony import */ var _shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/effect-target.js */ "./node_modules/swiper/shared/effect-target.js");
/* harmony import */ var _shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/effect-virtual-transition-end.js */ "./node_modules/swiper/shared/effect-virtual-transition-end.js");




function EffectFlip({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    flipEffect: {
      slideShadows: true,
      limitRotation: true,
      transformEl: null
    }
  });

  const setTranslate = () => {
    const {
      slides,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.flipEffect;

    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = slides.eq(i);
      let progress = $slideEl[0].progress;

      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      }

      const offset = $slideEl[0].swiperSlideOffset;
      const rotate = -180 * progress;
      let rotateY = rotate;
      let rotateX = 0;
      let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let ty = 0;

      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (rtl) {
        rotateY = -rotateY;
      }

      $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

      if (params.slideShadows) {
        // Set shadows
        let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

        if (shadowBefore.length === 0) {
          shadowBefore = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params, $slideEl, swiper.isHorizontal() ? 'left' : 'top');
        }

        if (shadowAfter.length === 0) {
          shadowAfter = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params, $slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
        }

        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
      }

      const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      const $targetEl = (0,_shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__["default"])(params, $slideEl);
      $targetEl.transform(transform);
    }
  };

  const setTransition = duration => {
    const {
      transformEl
    } = swiper.params.flipEffect;
    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
    $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
    (0,_shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__["default"])({
      swiper,
      duration,
      transformEl
    });
  };

  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    effect: 'flip',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/free-mode/free-mode.js":
/*!************************************************************!*\
  !*** ./node_modules/swiper/modules/free-mode/free-mode.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ freeMode)
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");

function freeMode({
  swiper,
  extendParams,
  emit,
  once
}) {
  extendParams({
    freeMode: {
      enabled: false,
      momentum: true,
      momentumRatio: 1,
      momentumBounce: true,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: false,
      minimumVelocity: 0.02
    }
  });

  function onTouchMove() {
    const {
      touchEventsData: data,
      touches
    } = swiper; // Velocity

    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
        time: data.touchStartTime
      });
    }

    data.velocities.push({
      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
      time: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.now)()
    });
  }

  function onTouchEnd({
    currentPos
  }) {
    const {
      params,
      $wrapperEl,
      rtlTranslate: rtl,
      snapGrid,
      touchEventsData: data
    } = swiper; // Time diff

    const touchEndTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.now)();
    const timeDiff = touchEndTime - data.touchStartTime;

    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }

      return;
    }

    if (params.freeMode.momentum) {
      if (data.velocities.length > 1) {
        const lastMoveEvent = data.velocities.pop();
        const velocityEvent = data.velocities.pop();
        const distance = lastMoveEvent.position - velocityEvent.position;
        const time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;

        if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
          swiper.velocity = 0;
        } // this implies that the user stopped moving a finger then released.
        // There would be no events with distance zero, so the last event is stale.


        if (time > 150 || (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.now)() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }

      swiper.velocity *= params.freeMode.momentumVelocityRatio;
      data.velocities.length = 0;
      let momentumDuration = 1000 * params.freeMode.momentumRatio;
      const momentumDistance = swiper.velocity * momentumDuration;
      let newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;
      let doBounce = false;
      let afterBouncePosition;
      const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
      let needsLoopFix;

      if (newPosition < swiper.maxTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }

          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }

        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }

          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }

        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeMode.sticky) {
        let nextSlide;

        for (let j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }

        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }

        newPosition = -newPosition;
      }

      if (needsLoopFix) {
        once('transitionEnd', () => {
          swiper.loopFix();
        });
      } // Fix duration


      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }

        if (params.freeMode.sticky) {
          // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
          // event, then durations can be 20+ seconds to slide one (or zero!) slides.
          // It's easy to see this when simulating touch with mouse events. To fix this,
          // limit single-slide swipes to the default slide duration. This also has the
          // nice side effect of matching slide speed if the user stopped moving before
          // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
          // For faster swipes, also apply limits (albeit higher ones).
          const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
          const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];

          if (moveDistance < currentSlideSize) {
            momentumDuration = params.speed;
          } else if (moveDistance < 2 * currentSlideSize) {
            momentumDuration = params.speed * 1.5;
          } else {
            momentumDuration = params.speed * 2.5;
          }
        }
      } else if (params.freeMode.sticky) {
        swiper.slideToClosest();
        return;
      }

      if (params.freeMode.momentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        $wrapperEl.transitionEnd(() => {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
          emit('momentumBounce');
          swiper.setTransition(params.speed);
          setTimeout(() => {
            swiper.setTranslate(afterBouncePosition);
            $wrapperEl.transitionEnd(() => {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }, 0);
        });
      } else if (swiper.velocity) {
        emit('_freeModeNoMomentumRelease');
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);

        if (!swiper.animating) {
          swiper.animating = true;
          $wrapperEl.transitionEnd(() => {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.updateProgress(newPosition);
      }

      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeMode.sticky) {
      swiper.slideToClosest();
      return;
    } else if (params.freeMode) {
      emit('_freeModeNoMomentumRelease');
    }

    if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
  }

  Object.assign(swiper, {
    freeMode: {
      onTouchMove,
      onTouchEnd
    }
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/grid/grid.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/grid/grid.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Grid)
/* harmony export */ });
function Grid({
  swiper,
  extendParams
}) {
  extendParams({
    grid: {
      rows: 1,
      fill: 'column'
    }
  });
  let slidesNumberEvenToRows;
  let slidesPerRow;
  let numFullColumns;

  const initSlides = slidesLength => {
    const {
      slidesPerView
    } = swiper.params;
    const {
      rows,
      fill
    } = swiper.params.grid;
    slidesPerRow = slidesNumberEvenToRows / rows;
    numFullColumns = Math.floor(slidesLength / rows);

    if (Math.floor(slidesLength / rows) === slidesLength / rows) {
      slidesNumberEvenToRows = slidesLength;
    } else {
      slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
    }

    if (slidesPerView !== 'auto' && fill === 'row') {
      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
    }
  };

  const updateSlide = (i, slide, slidesLength, getDirectionLabel) => {
    const {
      slidesPerGroup,
      spaceBetween
    } = swiper.params;
    const {
      rows,
      fill
    } = swiper.params.grid; // Set slides order

    let newSlideOrderIndex;
    let column;
    let row;

    if (fill === 'row' && slidesPerGroup > 1) {
      const groupIndex = Math.floor(i / (slidesPerGroup * rows));
      const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
      const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
      row = Math.floor(slideIndexInGroup / columnsInGroup);
      column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
      newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
      slide.css({
        '-webkit-order': newSlideOrderIndex,
        order: newSlideOrderIndex
      });
    } else if (fill === 'column') {
      column = Math.floor(i / rows);
      row = i - column * rows;

      if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
        row += 1;

        if (row >= rows) {
          row = 0;
          column += 1;
        }
      }
    } else {
      row = Math.floor(i / slidesPerRow);
      column = i - row * slidesPerRow;
    }

    slide.css(getDirectionLabel('margin-top'), row !== 0 ? spaceBetween && `${spaceBetween}px` : '');
  };

  const updateWrapperSize = (slideSize, snapGrid, getDirectionLabel) => {
    const {
      spaceBetween,
      centeredSlides,
      roundLengths
    } = swiper.params;
    const {
      rows
    } = swiper.params.grid;
    swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
    swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
    swiper.$wrapperEl.css({
      [getDirectionLabel('width')]: `${swiper.virtualSize + spaceBetween}px`
    });

    if (centeredSlides) {
      snapGrid.splice(0, snapGrid.length);
      const newSlidesGrid = [];

      for (let i = 0; i < snapGrid.length; i += 1) {
        let slidesGridItem = snapGrid[i];
        if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
      }

      snapGrid.push(...newSlidesGrid);
    }
  };

  swiper.grid = {
    initSlides,
    updateSlide,
    updateWrapperSize
  };
}

/***/ }),

/***/ "./node_modules/swiper/modules/hash-navigation/hash-navigation.js":
/*!************************************************************************!*\
  !*** ./node_modules/swiper/modules/hash-navigation/hash-navigation.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HashNavigation)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");


function HashNavigation({
  swiper,
  extendParams,
  emit,
  on
}) {
  let initialized = false;
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  extendParams({
    hashNavigation: {
      enabled: false,
      replaceState: false,
      watchState: false
    }
  });

  const onHashChange = () => {
    emit('hashChange');
    const newHash = document.location.hash.replace('#', '');
    const activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');

    if (newHash !== activeSlideHash) {
      const newIndex = swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-hash="${newHash}"]`).index();
      if (typeof newIndex === 'undefined') return;
      swiper.slideTo(newIndex);
    }
  };

  const setHash = () => {
    if (!initialized || !swiper.params.hashNavigation.enabled) return;

    if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
      window.history.replaceState(null, null, `#${swiper.slides.eq(swiper.activeIndex).attr('data-hash')}` || '');
      emit('hashSet');
    } else {
      const slide = swiper.slides.eq(swiper.activeIndex);
      const hash = slide.attr('data-hash') || slide.attr('data-history');
      document.location.hash = hash || '';
      emit('hashSet');
    }
  };

  const init = () => {
    if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
    initialized = true;
    const hash = document.location.hash.replace('#', '');

    if (hash) {
      const speed = 0;

      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
        const slide = swiper.slides.eq(i);
        const slideHash = slide.attr('data-hash') || slide.attr('data-history');

        if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
          const index = slide.index();
          swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
        }
      }
    }

    if (swiper.params.hashNavigation.watchState) {
      (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(window).on('hashchange', onHashChange);
    }
  };

  const destroy = () => {
    if (swiper.params.hashNavigation.watchState) {
      (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(window).off('hashchange', onHashChange);
    }
  };

  on('init', () => {
    if (swiper.params.hashNavigation.enabled) {
      init();
    }
  });
  on('destroy', () => {
    if (swiper.params.hashNavigation.enabled) {
      destroy();
    }
  });
  on('transitionEnd _freeModeNoMomentumRelease', () => {
    if (initialized) {
      setHash();
    }
  });
  on('slideChange', () => {
    if (initialized && swiper.params.cssMode) {
      setHash();
    }
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/history/history.js":
/*!********************************************************!*\
  !*** ./node_modules/swiper/modules/history/history.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ History)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

function History({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    history: {
      enabled: false,
      root: '',
      replaceState: false,
      key: 'slides'
    }
  });
  let initialized = false;
  let paths = {};

  const slugify = text => {
    return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
  };

  const getPathValues = urlOverride => {
    const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    let location;

    if (urlOverride) {
      location = new URL(urlOverride);
    } else {
      location = window.location;
    }

    const pathArray = location.pathname.slice(1).split('/').filter(part => part !== '');
    const total = pathArray.length;
    const key = pathArray[total - 2];
    const value = pathArray[total - 1];
    return {
      key,
      value
    };
  };

  const setHistory = (key, index) => {
    const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    if (!initialized || !swiper.params.history.enabled) return;
    let location;

    if (swiper.params.url) {
      location = new URL(swiper.params.url);
    } else {
      location = window.location;
    }

    const slide = swiper.slides.eq(index);
    let value = slugify(slide.attr('data-history'));

    if (swiper.params.history.root.length > 0) {
      let root = swiper.params.history.root;
      if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
      value = `${root}/${key}/${value}`;
    } else if (!location.pathname.includes(key)) {
      value = `${key}/${value}`;
    }

    const currentState = window.history.state;

    if (currentState && currentState.value === value) {
      return;
    }

    if (swiper.params.history.replaceState) {
      window.history.replaceState({
        value
      }, null, value);
    } else {
      window.history.pushState({
        value
      }, null, value);
    }
  };

  const scrollToSlide = (speed, value, runCallbacks) => {
    if (value) {
      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
        const slide = swiper.slides.eq(i);
        const slideHistory = slugify(slide.attr('data-history'));

        if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
          const index = slide.index();
          swiper.slideTo(index, speed, runCallbacks);
        }
      }
    } else {
      swiper.slideTo(0, speed, runCallbacks);
    }
  };

  const setHistoryPopState = () => {
    paths = getPathValues(swiper.params.url);
    scrollToSlide(swiper.params.speed, swiper.paths.value, false);
  };

  const init = () => {
    const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    if (!swiper.params.history) return;

    if (!window.history || !window.history.pushState) {
      swiper.params.history.enabled = false;
      swiper.params.hashNavigation.enabled = true;
      return;
    }

    initialized = true;
    paths = getPathValues(swiper.params.url);
    if (!paths.key && !paths.value) return;
    scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);

    if (!swiper.params.history.replaceState) {
      window.addEventListener('popstate', setHistoryPopState);
    }
  };

  const destroy = () => {
    const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

    if (!swiper.params.history.replaceState) {
      window.removeEventListener('popstate', setHistoryPopState);
    }
  };

  on('init', () => {
    if (swiper.params.history.enabled) {
      init();
    }
  });
  on('destroy', () => {
    if (swiper.params.history.enabled) {
      destroy();
    }
  });
  on('transitionEnd _freeModeNoMomentumRelease', () => {
    if (initialized) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
  on('slideChange', () => {
    if (initialized && swiper.params.cssMode) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/keyboard/keyboard.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/modules/keyboard/keyboard.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Keyboard)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* eslint-disable consistent-return */


function Keyboard({
  swiper,
  extendParams,
  on,
  emit
}) {
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  swiper.keyboard = {
    enabled: false
  };
  extendParams({
    keyboard: {
      enabled: false,
      onlyInViewport: true,
      pageUpDown: true
    }
  });

  function handle(event) {
    if (!swiper.enabled) return;
    const {
      rtlTranslate: rtl
    } = swiper;
    let e = event;
    if (e.originalEvent) e = e.originalEvent; // jquery fix

    const kc = e.keyCode || e.charCode;
    const pageUpDown = swiper.params.keyboard.pageUpDown;
    const isPageUp = pageUpDown && kc === 33;
    const isPageDown = pageUpDown && kc === 34;
    const isArrowLeft = kc === 37;
    const isArrowRight = kc === 39;
    const isArrowUp = kc === 38;
    const isArrowDown = kc === 40; // Directions locks

    if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
      return false;
    }

    if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
      return false;
    }

    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
      return undefined;
    }

    if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
      return undefined;
    }

    if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
      let inView = false; // Check that swiper should be inside of visible area of window

      if (swiper.$el.parents(`.${swiper.params.slideClass}`).length > 0 && swiper.$el.parents(`.${swiper.params.slideActiveClass}`).length === 0) {
        return undefined;
      }

      const $el = swiper.$el;
      const swiperWidth = $el[0].clientWidth;
      const swiperHeight = $el[0].clientHeight;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const swiperOffset = swiper.$el.offset();
      if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
      const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];

      for (let i = 0; i < swiperCoord.length; i += 1) {
        const point = swiperCoord[i];

        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
          if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

          inView = true;
        }
      }

      if (!inView) return undefined;
    }

    if (swiper.isHorizontal()) {
      if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }

      if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
      if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
    } else {
      if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }

      if (isPageDown || isArrowDown) swiper.slideNext();
      if (isPageUp || isArrowUp) swiper.slidePrev();
    }

    emit('keyPress', kc);
    return undefined;
  }

  function enable() {
    if (swiper.keyboard.enabled) return;
    (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(document).on('keydown', handle);
    swiper.keyboard.enabled = true;
  }

  function disable() {
    if (!swiper.keyboard.enabled) return;
    (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(document).off('keydown', handle);
    swiper.keyboard.enabled = false;
  }

  on('init', () => {
    if (swiper.params.keyboard.enabled) {
      enable();
    }
  });
  on('destroy', () => {
    if (swiper.keyboard.enabled) {
      disable();
    }
  });
  Object.assign(swiper.keyboard, {
    enable,
    disable
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/lazy/lazy.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/lazy/lazy.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Lazy)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");


function Lazy({
  swiper,
  extendParams,
  on,
  emit
}) {
  extendParams({
    lazy: {
      checkInView: false,
      enabled: false,
      loadPrevNext: false,
      loadPrevNextAmount: 1,
      loadOnTransitionStart: false,
      scrollingElement: '',
      elementClass: 'swiper-lazy',
      loadingClass: 'swiper-lazy-loading',
      loadedClass: 'swiper-lazy-loaded',
      preloaderClass: 'swiper-lazy-preloader'
    }
  });
  swiper.lazy = {};
  let scrollHandlerAttached = false;
  let initialImageLoaded = false;

  function loadInSlide(index, loadInDuplicate = true) {
    const params = swiper.params.lazy;
    if (typeof index === 'undefined') return;
    if (swiper.slides.length === 0) return;
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    const $slideEl = isVirtual ? swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-swiper-slide-index="${index}"]`) : swiper.slides.eq(index);
    const $images = $slideEl.find(`.${params.elementClass}:not(.${params.loadedClass}):not(.${params.loadingClass})`);

    if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
      $images.push($slideEl[0]);
    }

    if ($images.length === 0) return;
    $images.each(imageEl => {
      const $imageEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(imageEl);
      $imageEl.addClass(params.loadingClass);
      const background = $imageEl.attr('data-background');
      const src = $imageEl.attr('data-src');
      const srcset = $imageEl.attr('data-srcset');
      const sizes = $imageEl.attr('data-sizes');
      const $pictureEl = $imageEl.parent('picture');
      swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, () => {
        if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;

        if (background) {
          $imageEl.css('background-image', `url("${background}")`);
          $imageEl.removeAttr('data-background');
        } else {
          if (srcset) {
            $imageEl.attr('srcset', srcset);
            $imageEl.removeAttr('data-srcset');
          }

          if (sizes) {
            $imageEl.attr('sizes', sizes);
            $imageEl.removeAttr('data-sizes');
          }

          if ($pictureEl.length) {
            $pictureEl.children('source').each(sourceEl => {
              const $source = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(sourceEl);

              if ($source.attr('data-srcset')) {
                $source.attr('srcset', $source.attr('data-srcset'));
                $source.removeAttr('data-srcset');
              }
            });
          }

          if (src) {
            $imageEl.attr('src', src);
            $imageEl.removeAttr('data-src');
          }
        }

        $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
        $slideEl.find(`.${params.preloaderClass}`).remove();

        if (swiper.params.loop && loadInDuplicate) {
          const slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');

          if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
            const originalSlide = swiper.$wrapperEl.children(`[data-swiper-slide-index="${slideOriginalIndex}"]:not(.${swiper.params.slideDuplicateClass})`);
            loadInSlide(originalSlide.index(), false);
          } else {
            const duplicatedSlide = swiper.$wrapperEl.children(`.${swiper.params.slideDuplicateClass}[data-swiper-slide-index="${slideOriginalIndex}"]`);
            loadInSlide(duplicatedSlide.index(), false);
          }
        }

        emit('lazyImageReady', $slideEl[0], $imageEl[0]);

        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      });
      emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
    });
  }

  function load() {
    const {
      $wrapperEl,
      params: swiperParams,
      slides,
      activeIndex
    } = swiper;
    const isVirtual = swiper.virtual && swiperParams.virtual.enabled;
    const params = swiperParams.lazy;
    let slidesPerView = swiperParams.slidesPerView;

    if (slidesPerView === 'auto') {
      slidesPerView = 0;
    }

    function slideExist(index) {
      if (isVirtual) {
        if ($wrapperEl.children(`.${swiperParams.slideClass}[data-swiper-slide-index="${index}"]`).length) {
          return true;
        }
      } else if (slides[index]) return true;

      return false;
    }

    function slideIndex(slideEl) {
      if (isVirtual) {
        return (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(slideEl).attr('data-swiper-slide-index');
      }

      return (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(slideEl).index();
    }

    if (!initialImageLoaded) initialImageLoaded = true;

    if (swiper.params.watchSlidesProgress) {
      $wrapperEl.children(`.${swiperParams.slideVisibleClass}`).each(slideEl => {
        const index = isVirtual ? (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(slideEl).attr('data-swiper-slide-index') : (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(slideEl).index();
        loadInSlide(index);
      });
    } else if (slidesPerView > 1) {
      for (let i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
        if (slideExist(i)) loadInSlide(i);
      }
    } else {
      loadInSlide(activeIndex);
    }

    if (params.loadPrevNext) {
      if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
        const amount = params.loadPrevNextAmount;
        const spv = slidesPerView;
        const maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
        const minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides

        for (let i = activeIndex + slidesPerView; i < maxIndex; i += 1) {
          if (slideExist(i)) loadInSlide(i);
        } // Prev Slides


        for (let i = minIndex; i < activeIndex; i += 1) {
          if (slideExist(i)) loadInSlide(i);
        }
      } else {
        const nextSlide = $wrapperEl.children(`.${swiperParams.slideNextClass}`);
        if (nextSlide.length > 0) loadInSlide(slideIndex(nextSlide));
        const prevSlide = $wrapperEl.children(`.${swiperParams.slidePrevClass}`);
        if (prevSlide.length > 0) loadInSlide(slideIndex(prevSlide));
      }
    }
  }

  function checkInViewOnLoad() {
    const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    if (!swiper || swiper.destroyed) return;
    const $scrollElement = swiper.params.lazy.scrollingElement ? (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(swiper.params.lazy.scrollingElement) : (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(window);
    const isWindow = $scrollElement[0] === window;
    const scrollElementWidth = isWindow ? window.innerWidth : $scrollElement[0].offsetWidth;
    const scrollElementHeight = isWindow ? window.innerHeight : $scrollElement[0].offsetHeight;
    const swiperOffset = swiper.$el.offset();
    const {
      rtlTranslate: rtl
    } = swiper;
    let inView = false;
    if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
    const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];

    for (let i = 0; i < swiperCoord.length; i += 1) {
      const point = swiperCoord[i];

      if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {
        if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

        inView = true;
      }
    }

    const passiveListener = swiper.touchEvents.start === 'touchstart' && swiper.support.passiveListener && swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;

    if (inView) {
      load();
      $scrollElement.off('scroll', checkInViewOnLoad, passiveListener);
    } else if (!scrollHandlerAttached) {
      scrollHandlerAttached = true;
      $scrollElement.on('scroll', checkInViewOnLoad, passiveListener);
    }
  }

  on('beforeInit', () => {
    if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
      swiper.params.preloadImages = false;
    }
  });
  on('init', () => {
    if (swiper.params.lazy.enabled) {
      if (swiper.params.lazy.checkInView) {
        checkInViewOnLoad();
      } else {
        load();
      }
    }
  });
  on('scroll', () => {
    if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.freeMode.sticky) {
      load();
    }
  });
  on('scrollbarDragMove resize _freeModeNoMomentumRelease', () => {
    if (swiper.params.lazy.enabled) {
      if (swiper.params.lazy.checkInView) {
        checkInViewOnLoad();
      } else {
        load();
      }
    }
  });
  on('transitionStart', () => {
    if (swiper.params.lazy.enabled) {
      if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !initialImageLoaded) {
        if (swiper.params.lazy.checkInView) {
          checkInViewOnLoad();
        } else {
          load();
        }
      }
    }
  });
  on('transitionEnd', () => {
    if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
      if (swiper.params.lazy.checkInView) {
        checkInViewOnLoad();
      } else {
        load();
      }
    }
  });
  on('slideChange', () => {
    const {
      lazy,
      cssMode,
      watchSlidesProgress,
      touchReleaseOnEdges,
      resistanceRatio
    } = swiper.params;

    if (lazy.enabled && (cssMode || watchSlidesProgress && (touchReleaseOnEdges || resistanceRatio === 0))) {
      load();
    }
  });
  Object.assign(swiper.lazy, {
    load,
    loadInSlide
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/manipulation/manipulation.js":
/*!******************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/manipulation.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Manipulation)
/* harmony export */ });
/* harmony import */ var _methods_appendSlide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methods/appendSlide.js */ "./node_modules/swiper/modules/manipulation/methods/appendSlide.js");
/* harmony import */ var _methods_prependSlide_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/prependSlide.js */ "./node_modules/swiper/modules/manipulation/methods/prependSlide.js");
/* harmony import */ var _methods_addSlide_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods/addSlide.js */ "./node_modules/swiper/modules/manipulation/methods/addSlide.js");
/* harmony import */ var _methods_removeSlide_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./methods/removeSlide.js */ "./node_modules/swiper/modules/manipulation/methods/removeSlide.js");
/* harmony import */ var _methods_removeAllSlides_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./methods/removeAllSlides.js */ "./node_modules/swiper/modules/manipulation/methods/removeAllSlides.js");





function Manipulation({
  swiper
}) {
  Object.assign(swiper, {
    appendSlide: _methods_appendSlide_js__WEBPACK_IMPORTED_MODULE_0__["default"].bind(swiper),
    prependSlide: _methods_prependSlide_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(swiper),
    addSlide: _methods_addSlide_js__WEBPACK_IMPORTED_MODULE_2__["default"].bind(swiper),
    removeSlide: _methods_removeSlide_js__WEBPACK_IMPORTED_MODULE_3__["default"].bind(swiper),
    removeAllSlides: _methods_removeAllSlides_js__WEBPACK_IMPORTED_MODULE_4__["default"].bind(swiper)
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/manipulation/methods/addSlide.js":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/methods/addSlide.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addSlide)
/* harmony export */ });
function addSlide(index, slides) {
  const swiper = this;
  const {
    $wrapperEl,
    params,
    activeIndex
  } = swiper;
  let activeIndexBuffer = activeIndex;

  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
  }

  const baseLength = swiper.slides.length;

  if (index <= 0) {
    swiper.prependSlide(slides);
    return;
  }

  if (index >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }

  let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
  const slidesBuffer = [];

  for (let i = baseLength - 1; i >= index; i -= 1) {
    const currentSlide = swiper.slides.eq(i);
    currentSlide.remove();
    slidesBuffer.unshift(currentSlide);
  }

  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.append(slides[i]);
    }

    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else {
    $wrapperEl.append(slides);
  }

  for (let i = 0; i < slidesBuffer.length; i += 1) {
    $wrapperEl.append(slidesBuffer[i]);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!params.observer) {
    swiper.update();
  }

  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

/***/ }),

/***/ "./node_modules/swiper/modules/manipulation/methods/appendSlide.js":
/*!*************************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/methods/appendSlide.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ appendSlide)
/* harmony export */ });
function appendSlide(slides) {
  const swiper = this;
  const {
    $wrapperEl,
    params
  } = swiper;

  if (params.loop) {
    swiper.loopDestroy();
  }

  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.append(slides[i]);
    }
  } else {
    $wrapperEl.append(slides);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!params.observer) {
    swiper.update();
  }
}

/***/ }),

/***/ "./node_modules/swiper/modules/manipulation/methods/prependSlide.js":
/*!**************************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/methods/prependSlide.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ prependSlide)
/* harmony export */ });
function prependSlide(slides) {
  const swiper = this;
  const {
    params,
    $wrapperEl,
    activeIndex
  } = swiper;

  if (params.loop) {
    swiper.loopDestroy();
  }

  let newActiveIndex = activeIndex + 1;

  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.prepend(slides[i]);
    }

    newActiveIndex = activeIndex + slides.length;
  } else {
    $wrapperEl.prepend(slides);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!params.observer) {
    swiper.update();
  }

  swiper.slideTo(newActiveIndex, 0, false);
}

/***/ }),

/***/ "./node_modules/swiper/modules/manipulation/methods/removeAllSlides.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/methods/removeAllSlides.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeAllSlides)
/* harmony export */ });
function removeAllSlides() {
  const swiper = this;
  const slidesIndexes = [];

  for (let i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }

  swiper.removeSlide(slidesIndexes);
}

/***/ }),

/***/ "./node_modules/swiper/modules/manipulation/methods/removeSlide.js":
/*!*************************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/methods/removeSlide.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeSlide)
/* harmony export */ });
function removeSlide(slidesIndexes) {
  const swiper = this;
  const {
    params,
    $wrapperEl,
    activeIndex
  } = swiper;
  let activeIndexBuffer = activeIndex;

  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
  }

  let newActiveIndex = activeIndexBuffer;
  let indexToRemove;

  if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
    for (let i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    }

    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    newActiveIndex = Math.max(newActiveIndex, 0);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!params.observer) {
    swiper.update();
  }

  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

/***/ }),

/***/ "./node_modules/swiper/modules/mousewheel/mousewheel.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/modules/mousewheel/mousewheel.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Mousewheel)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");
/* eslint-disable consistent-return */



function Mousewheel({
  swiper,
  extendParams,
  on,
  emit
}) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  extendParams({
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarget: 'container',
      thresholdDelta: null,
      thresholdTime: null
    }
  });
  swiper.mousewheel = {
    enabled: false
  };
  let timeout;
  let lastScrollTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)();
  let lastEventBeforeSnap;
  const recentWheelEvents = [];

  function normalize(e) {
    // Reasonable defaults
    const PIXEL_STEP = 10;
    const LINE_HEIGHT = 40;
    const PAGE_HEIGHT = 800;
    let sX = 0;
    let sY = 0; // spinX, spinY

    let pX = 0;
    let pY = 0; // pixelX, pixelY
    // Legacy

    if ('detail' in e) {
      sY = e.detail;
    }

    if ('wheelDelta' in e) {
      sY = -e.wheelDelta / 120;
    }

    if ('wheelDeltaY' in e) {
      sY = -e.wheelDeltaY / 120;
    }

    if ('wheelDeltaX' in e) {
      sX = -e.wheelDeltaX / 120;
    } // side scrolling on FF with DOMMouseScroll


    if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }

    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;

    if ('deltaY' in e) {
      pY = e.deltaY;
    }

    if ('deltaX' in e) {
      pX = e.deltaX;
    }

    if (e.shiftKey && !pX) {
      // if user scrolls with shift he wants horizontal scroll
      pX = pY;
      pY = 0;
    }

    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) {
        // delta in LINE units
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        // delta in PAGE units
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    } // Fall-back if spin cannot be determined


    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }

    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }

    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  }

  function handleMouseEnter() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = true;
  }

  function handleMouseLeave() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = false;
  }

  function animateSlider(newEvent) {
    if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
      // Prevent if delta of wheel scroll delta is below configured threshold
      return false;
    }

    if (swiper.params.mousewheel.thresholdTime && (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
      // Prevent if time between scrolls is below configured threshold
      return false;
    } // If the movement is NOT big enough and
    // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
    //   Don't go any further (avoid insignificant scroll movement).


    if (newEvent.delta >= 6 && (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)() - lastScrollTime < 60) {
      // Return false as a default
      return true;
    } // If user is scrolling towards the end:
    //   If the slider hasn't hit the latest slide or
    //   if the slider is a loop and
    //   if the slider isn't moving right now:
    //     Go to next slide and
    //     emit a scroll event.
    // Else (the user is scrolling towards the beginning) and
    // if the slider hasn't hit the first slide or
    // if the slider is a loop and
    // if the slider isn't moving right now:
    //   Go to prev slide and
    //   emit a scroll event.


    if (newEvent.direction < 0) {
      if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
        swiper.slideNext();
        emit('scroll', newEvent.raw);
      }
    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
      swiper.slidePrev();
      emit('scroll', newEvent.raw);
    } // If you got here is because an animation has been triggered so store the current time


    lastScrollTime = new window.Date().getTime(); // Return false as a default

    return false;
  }

  function releaseScroll(newEvent) {
    const params = swiper.params.mousewheel;

    if (newEvent.direction < 0) {
      if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
        // Return true to animate scroll on edges
        return true;
      }
    } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
      // Return true to animate scroll on edges
      return true;
    }

    return false;
  }

  function handle(event) {
    let e = event;
    let disableParentSwiper = true;
    if (!swiper.enabled) return;
    const params = swiper.params.mousewheel;

    if (swiper.params.cssMode) {
      e.preventDefault();
    }

    let target = swiper.$el;

    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      target = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(swiper.params.mousewheel.eventsTarget);
    }

    if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
    if (e.originalEvent) e = e.originalEvent; // jquery fix

    let delta = 0;
    const rtlFactor = swiper.rtlTranslate ? -1 : 1;
    const data = normalize(e);

    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
    } else {
      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
    }

    if (delta === 0) return true;
    if (params.invert) delta = -delta; // Get the scroll positions

    let positions = swiper.getTranslate() + delta * params.sensitivity;
    if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
    if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate(); // When loop is true:
    //     the disableParentSwiper will be true.
    // When loop is false:
    //     if the scroll positions is not on edge,
    //     then the disableParentSwiper will be true.
    //     if the scroll on edge positions,
    //     then the disableParentSwiper will be false.

    disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
    if (disableParentSwiper && swiper.params.nested) e.stopPropagation();

    if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
      // Register the new event in a variable which stores the relevant data
      const newEvent = {
        time: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)(),
        delta: Math.abs(delta),
        direction: Math.sign(delta),
        raw: event
      }; // Keep the most recent events

      if (recentWheelEvents.length >= 2) {
        recentWheelEvents.shift(); // only store the last N events
      }

      const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
      recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
      //   If direction has changed or
      //   if the scroll is quicker than the previous one:
      //     Animate the slider.
      // Else (this is the first time the wheel is moved):
      //     Animate the slider.

      if (prevEvent) {
        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
          animateSlider(newEvent);
        }
      } else {
        animateSlider(newEvent);
      } // If it's time to release the scroll:
      //   Return now so you don't hit the preventDefault.


      if (releaseScroll(newEvent)) {
        return true;
      }
    } else {
      // Freemode or scrollContainer:
      // If we recently snapped after a momentum scroll, then ignore wheel events
      // to give time for the deceleration to finish. Stop ignoring after 500 msecs
      // or if it's a new scroll (larger delta or inverse sign as last event before
      // an end-of-momentum snap).
      const newEvent = {
        time: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)(),
        delta: Math.abs(delta),
        direction: Math.sign(delta)
      };
      const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;

      if (!ignoreWheelEvents) {
        lastEventBeforeSnap = undefined;

        if (swiper.params.loop) {
          swiper.loopFix();
        }

        let position = swiper.getTranslate() + delta * params.sensitivity;
        const wasBeginning = swiper.isBeginning;
        const wasEnd = swiper.isEnd;
        if (position >= swiper.minTranslate()) position = swiper.minTranslate();
        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();

        if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
          swiper.updateSlidesClasses();
        }

        if (swiper.params.freeMode.sticky) {
          // When wheel scrolling starts with sticky (aka snap) enabled, then detect
          // the end of a momentum scroll by storing recent (N=15?) wheel events.
          // 1. do all N events have decreasing or same (absolute value) delta?
          // 2. did all N events arrive in the last M (M=500?) msecs?
          // 3. does the earliest event have an (absolute value) delta that's
          //    at least P (P=1?) larger than the most recent event's delta?
          // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
          // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
          // Snap immediately and ignore remaining wheel events in this scroll.
          // See comment above for "remaining wheel events in this scroll" determination.
          // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
          clearTimeout(timeout);
          timeout = undefined;

          if (recentWheelEvents.length >= 15) {
            recentWheelEvents.shift(); // only store the last N events
          }

          const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
          const firstEvent = recentWheelEvents[0];
          recentWheelEvents.push(newEvent);

          if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
            // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
            recentWheelEvents.splice(0);
          } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
            // We're at the end of the deceleration of a momentum scroll, so there's no need
            // to wait for more events. Snap ASAP on the next tick.
            // Also, because there's some remaining momentum we'll bias the snap in the
            // direction of the ongoing scroll because it's better UX for the scroll to snap
            // in the same direction as the scroll instead of reversing to snap.  Therefore,
            // if it's already scrolled more than 20% in the current direction, keep going.
            const snapToThreshold = delta > 0 ? 0.8 : 0.2;
            lastEventBeforeSnap = newEvent;
            recentWheelEvents.splice(0);
            timeout = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.nextTick)(() => {
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 0); // no delay; move on next tick
          }

          if (!timeout) {
            // if we get here, then we haven't detected the end of a momentum scroll, so
            // we'll consider a scroll "complete" when there haven't been any wheel events
            // for 500ms.
            timeout = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.nextTick)(() => {
              const snapToThreshold = 0.5;
              lastEventBeforeSnap = newEvent;
              recentWheelEvents.splice(0);
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 500);
          }
        } // Emit event


        if (!ignoreWheelEvents) emit('scroll', e); // Stop autoplay

        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions

        if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
      }
    }

    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    return false;
  }

  function events(method) {
    let target = swiper.$el;

    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      target = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(swiper.params.mousewheel.eventsTarget);
    }

    target[method]('mouseenter', handleMouseEnter);
    target[method]('mouseleave', handleMouseLeave);
    target[method]('wheel', handle);
  }

  function enable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.removeEventListener('wheel', handle);
      return true;
    }

    if (swiper.mousewheel.enabled) return false;
    events('on');
    swiper.mousewheel.enabled = true;
    return true;
  }

  function disable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.addEventListener(event, handle);
      return true;
    }

    if (!swiper.mousewheel.enabled) return false;
    events('off');
    swiper.mousewheel.enabled = false;
    return true;
  }

  on('init', () => {
    if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
      disable();
    }

    if (swiper.params.mousewheel.enabled) enable();
  });
  on('destroy', () => {
    if (swiper.params.cssMode) {
      enable();
    }

    if (swiper.mousewheel.enabled) disable();
  });
  Object.assign(swiper.mousewheel, {
    enable,
    disable
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/navigation/navigation.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/modules/navigation/navigation.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var _shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/create-element-if-not-defined.js */ "./node_modules/swiper/shared/create-element-if-not-defined.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");


function Navigation({
  swiper,
  extendParams,
  on,
  emit
}) {
  extendParams({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock'
    }
  });
  swiper.navigation = {
    nextEl: null,
    $nextEl: null,
    prevEl: null,
    $prevEl: null
  };

  function getEl(el) {
    let $el;

    if (el) {
      $el = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(el);

      if (swiper.params.uniqueNavElements && typeof el === 'string' && $el.length > 1 && swiper.$el.find(el).length === 1) {
        $el = swiper.$el.find(el);
      }
    }

    return $el;
  }

  function toggleEl($el, disabled) {
    const params = swiper.params.navigation;

    if ($el && $el.length > 0) {
      $el[disabled ? 'addClass' : 'removeClass'](params.disabledClass);
      if ($el[0] && $el[0].tagName === 'BUTTON') $el[0].disabled = disabled;

      if (swiper.params.watchOverflow && swiper.enabled) {
        $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
    }
  }

  function update() {
    // Update Navigation Buttons
    if (swiper.params.loop) return;
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;
    toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
    toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
  }

  function onPrevClick(e) {
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slidePrev();
  }

  function onNextClick(e) {
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slideNext();
  }

  function init() {
    const params = swiper.params.navigation;
    swiper.params.navigation = (0,_shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
      nextEl: 'swiper-button-next',
      prevEl: 'swiper-button-prev'
    });
    if (!(params.nextEl || params.prevEl)) return;
    const $nextEl = getEl(params.nextEl);
    const $prevEl = getEl(params.prevEl);

    if ($nextEl && $nextEl.length > 0) {
      $nextEl.on('click', onNextClick);
    }

    if ($prevEl && $prevEl.length > 0) {
      $prevEl.on('click', onPrevClick);
    }

    Object.assign(swiper.navigation, {
      $nextEl,
      nextEl: $nextEl && $nextEl[0],
      $prevEl,
      prevEl: $prevEl && $prevEl[0]
    });

    if (!swiper.enabled) {
      if ($nextEl) $nextEl.addClass(params.lockClass);
      if ($prevEl) $prevEl.addClass(params.lockClass);
    }
  }

  function destroy() {
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;

    if ($nextEl && $nextEl.length) {
      $nextEl.off('click', onNextClick);
      $nextEl.removeClass(swiper.params.navigation.disabledClass);
    }

    if ($prevEl && $prevEl.length) {
      $prevEl.off('click', onPrevClick);
      $prevEl.removeClass(swiper.params.navigation.disabledClass);
    }
  }

  on('init', () => {
    init();
    update();
  });
  on('toEdge fromEdge lock unlock', () => {
    update();
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;

    if ($nextEl) {
      $nextEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
    }

    if ($prevEl) {
      $prevEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
    }
  });
  on('click', (_s, e) => {
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;
    const targetEl = e.target;

    if (swiper.params.navigation.hideOnClick && !(0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(targetEl).is($prevEl) && !(0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(targetEl).is($nextEl)) {
      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
      let isHidden;

      if ($nextEl) {
        isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
      } else if ($prevEl) {
        isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
      }

      if (isHidden === true) {
        emit('navigationShow');
      } else {
        emit('navigationHide');
      }

      if ($nextEl) {
        $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
      }

      if ($prevEl) {
        $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
      }
    }
  });
  Object.assign(swiper.navigation, {
    update,
    init,
    destroy
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/pagination/pagination.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/modules/pagination/pagination.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pagination)
/* harmony export */ });
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/classes-to-selector.js */ "./node_modules/swiper/shared/classes-to-selector.js");
/* harmony import */ var _shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/create-element-if-not-defined.js */ "./node_modules/swiper/shared/create-element-if-not-defined.js");



function Pagination({
  swiper,
  extendParams,
  on,
  emit
}) {
  const pfx = 'swiper-pagination';
  extendParams({
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: 'bullets',
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: number => number,
      formatFractionTotal: number => number,
      bulletClass: `${pfx}-bullet`,
      bulletActiveClass: `${pfx}-bullet-active`,
      modifierClass: `${pfx}-`,
      currentClass: `${pfx}-current`,
      totalClass: `${pfx}-total`,
      hiddenClass: `${pfx}-hidden`,
      progressbarFillClass: `${pfx}-progressbar-fill`,
      progressbarOppositeClass: `${pfx}-progressbar-opposite`,
      clickableClass: `${pfx}-clickable`,
      lockClass: `${pfx}-lock`,
      horizontalClass: `${pfx}-horizontal`,
      verticalClass: `${pfx}-vertical`
    }
  });
  swiper.pagination = {
    el: null,
    $el: null,
    bullets: []
  };
  let bulletSize;
  let dynamicBulletIndex = 0;

  function isPaginationDisabled() {
    return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0;
  }

  function setSideBullets($bulletEl, position) {
    const {
      bulletActiveClass
    } = swiper.params.pagination;
    $bulletEl[position]().addClass(`${bulletActiveClass}-${position}`)[position]().addClass(`${bulletActiveClass}-${position}-${position}`);
  }

  function update() {
    // Render || Update Pagination bullets/items
    const rtl = swiper.rtl;
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const $el = swiper.pagination.$el; // Current/Total

    let current;
    const total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

    if (swiper.params.loop) {
      current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);

      if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
        current -= slidesLength - swiper.loopedSlides * 2;
      }

      if (current > total - 1) current -= total;
      if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex;
    } else {
      current = swiper.activeIndex || 0;
    } // Types


    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      const bullets = swiper.pagination.bullets;
      let firstIndex;
      let lastIndex;
      let midIndex;

      if (params.dynamicBullets) {
        bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
        $el.css(swiper.isHorizontal() ? 'width' : 'height', `${bulletSize * (params.dynamicMainBullets + 4)}px`);

        if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
          dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0);

          if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
            dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (dynamicBulletIndex < 0) {
            dynamicBulletIndex = 0;
          }
        }

        firstIndex = Math.max(current - dynamicBulletIndex, 0);
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }

      bullets.removeClass(['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(suffix => `${params.bulletActiveClass}${suffix}`).join(' '));

      if ($el.length > 1) {
        bullets.each(bullet => {
          const $bullet = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(bullet);
          const bulletIndex = $bullet.index();

          if (bulletIndex === current) {
            $bullet.addClass(params.bulletActiveClass);
          }

          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              $bullet.addClass(`${params.bulletActiveClass}-main`);
            }

            if (bulletIndex === firstIndex) {
              setSideBullets($bullet, 'prev');
            }

            if (bulletIndex === lastIndex) {
              setSideBullets($bullet, 'next');
            }
          }
        });
      } else {
        const $bullet = bullets.eq(current);
        const bulletIndex = $bullet.index();
        $bullet.addClass(params.bulletActiveClass);

        if (params.dynamicBullets) {
          const $firstDisplayedBullet = bullets.eq(firstIndex);
          const $lastDisplayedBullet = bullets.eq(lastIndex);

          for (let i = firstIndex; i <= lastIndex; i += 1) {
            bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
          }

          if (swiper.params.loop) {
            if (bulletIndex >= bullets.length) {
              for (let i = params.dynamicMainBullets; i >= 0; i -= 1) {
                bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);
              }

              bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
            } else {
              setSideBullets($firstDisplayedBullet, 'prev');
              setSideBullets($lastDisplayedBullet, 'next');
            }
          } else {
            setSideBullets($firstDisplayedBullet, 'prev');
            setSideBullets($lastDisplayedBullet, 'next');
          }
        }
      }

      if (params.dynamicBullets) {
        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
        const offsetProp = rtl ? 'right' : 'left';
        bullets.css(swiper.isHorizontal() ? offsetProp : 'top', `${bulletsOffset}px`);
      }
    }

    if (params.type === 'fraction') {
      $el.find((0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__["default"])(params.currentClass)).text(params.formatFractionCurrent(current + 1));
      $el.find((0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__["default"])(params.totalClass)).text(params.formatFractionTotal(total));
    }

    if (params.type === 'progressbar') {
      let progressbarDirection;

      if (params.progressbarOpposite) {
        progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
      } else {
        progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
      }

      const scale = (current + 1) / total;
      let scaleX = 1;
      let scaleY = 1;

      if (progressbarDirection === 'horizontal') {
        scaleX = scale;
      } else {
        scaleY = scale;
      }

      $el.find((0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__["default"])(params.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
    }

    if (params.type === 'custom' && params.renderCustom) {
      $el.html(params.renderCustom(swiper, current + 1, total));
      emit('paginationRender', $el[0]);
    } else {
      emit('paginationUpdate', $el[0]);
    }

    if (swiper.params.watchOverflow && swiper.enabled) {
      $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }
  }

  function render() {
    // Render Container
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const $el = swiper.pagination.$el;
    let paginationHTML = '';

    if (params.type === 'bullets') {
      let numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

      if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) {
        numberOfBullets = slidesLength;
      }

      for (let i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
        }
      }

      $el.html(paginationHTML);
      swiper.pagination.bullets = $el.find((0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__["default"])(params.bulletClass));
    }

    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
      }

      $el.html(paginationHTML);
    }

    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
      }

      $el.html(paginationHTML);
    }

    if (params.type !== 'custom') {
      emit('paginationRender', swiper.pagination.$el[0]);
    }
  }

  function init() {
    swiper.params.pagination = (0,_shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_2__["default"])(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
      el: 'swiper-pagination'
    });
    const params = swiper.params.pagination;
    if (!params.el) return;
    let $el = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params.el);
    if ($el.length === 0) return;

    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
      $el = swiper.$el.find(params.el); // check if it belongs to another nested Swiper

      if ($el.length > 1) {
        $el = $el.filter(el => {
          if ((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(el).parents('.swiper')[0] !== swiper.el) return false;
          return true;
        });
      }
    }

    if (params.type === 'bullets' && params.clickable) {
      $el.addClass(params.clickableClass);
    }

    $el.addClass(params.modifierClass + params.type);
    $el.addClass(params.modifierClass + swiper.params.direction);

    if (params.type === 'bullets' && params.dynamicBullets) {
      $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
      dynamicBulletIndex = 0;

      if (params.dynamicMainBullets < 1) {
        params.dynamicMainBullets = 1;
      }
    }

    if (params.type === 'progressbar' && params.progressbarOpposite) {
      $el.addClass(params.progressbarOppositeClass);
    }

    if (params.clickable) {
      $el.on('click', (0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__["default"])(params.bulletClass), function onClick(e) {
        e.preventDefault();
        let index = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this).index() * swiper.params.slidesPerGroup;
        if (swiper.params.loop) index += swiper.loopedSlides;
        swiper.slideTo(index);
      });
    }

    Object.assign(swiper.pagination, {
      $el,
      el: $el[0]
    });

    if (!swiper.enabled) {
      $el.addClass(params.lockClass);
    }
  }

  function destroy() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    const $el = swiper.pagination.$el;
    $el.removeClass(params.hiddenClass);
    $el.removeClass(params.modifierClass + params.type);
    $el.removeClass(params.modifierClass + swiper.params.direction);
    if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass) swiper.pagination.bullets.removeClass(params.bulletActiveClass);

    if (params.clickable) {
      $el.off('click', (0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__["default"])(params.bulletClass));
    }
  }

  on('init', () => {
    init();
    render();
    update();
  });
  on('activeIndexChange', () => {
    if (swiper.params.loop) {
      update();
    } else if (typeof swiper.snapIndex === 'undefined') {
      update();
    }
  });
  on('snapIndexChange', () => {
    if (!swiper.params.loop) {
      update();
    }
  });
  on('slidesLengthChange', () => {
    if (swiper.params.loop) {
      render();
      update();
    }
  });
  on('snapGridLengthChange', () => {
    if (!swiper.params.loop) {
      render();
      update();
    }
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    const {
      $el
    } = swiper.pagination;

    if ($el) {
      $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.pagination.lockClass);
    }
  });
  on('lock unlock', () => {
    update();
  });
  on('click', (_s, e) => {
    const targetEl = e.target;
    const {
      $el
    } = swiper.pagination;

    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el.length > 0 && !(0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
      if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
      const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);

      if (isHidden === true) {
        emit('paginationShow');
      } else {
        emit('paginationHide');
      }

      $el.toggleClass(swiper.params.pagination.hiddenClass);
    }
  });
  Object.assign(swiper.pagination, {
    render,
    update,
    init,
    destroy
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/parallax/parallax.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/modules/parallax/parallax.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Parallax)
/* harmony export */ });
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");

function Parallax({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    parallax: {
      enabled: false
    }
  });

  const setTransform = (el, progress) => {
    const {
      rtl
    } = swiper;
    const $el = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(el);
    const rtlFactor = rtl ? -1 : 1;
    const p = $el.attr('data-swiper-parallax') || '0';
    let x = $el.attr('data-swiper-parallax-x');
    let y = $el.attr('data-swiper-parallax-y');
    const scale = $el.attr('data-swiper-parallax-scale');
    const opacity = $el.attr('data-swiper-parallax-opacity');

    if (x || y) {
      x = x || '0';
      y = y || '0';
    } else if (swiper.isHorizontal()) {
      x = p;
      y = '0';
    } else {
      y = p;
      x = '0';
    }

    if (x.indexOf('%') >= 0) {
      x = `${parseInt(x, 10) * progress * rtlFactor}%`;
    } else {
      x = `${x * progress * rtlFactor}px`;
    }

    if (y.indexOf('%') >= 0) {
      y = `${parseInt(y, 10) * progress}%`;
    } else {
      y = `${y * progress}px`;
    }

    if (typeof opacity !== 'undefined' && opacity !== null) {
      const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
      $el[0].style.opacity = currentOpacity;
    }

    if (typeof scale === 'undefined' || scale === null) {
      $el.transform(`translate3d(${x}, ${y}, 0px)`);
    } else {
      const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
      $el.transform(`translate3d(${x}, ${y}, 0px) scale(${currentScale})`);
    }
  };

  const setTranslate = () => {
    const {
      $el,
      slides,
      progress,
      snapGrid
    } = swiper;
    $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(el => {
      setTransform(el, progress);
    });
    slides.each((slideEl, slideIndex) => {
      let slideProgress = slideEl.progress;

      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
        slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
      }

      slideProgress = Math.min(Math.max(slideProgress, -1), 1);
      (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(el => {
        setTransform(el, slideProgress);
      });
    });
  };

  const setTransition = (duration = swiper.params.speed) => {
    const {
      $el
    } = swiper;
    $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(parallaxEl => {
      const $parallaxEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(parallaxEl);
      let parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
      if (duration === 0) parallaxDuration = 0;
      $parallaxEl.transition(parallaxDuration);
    });
  };

  on('beforeInit', () => {
    if (!swiper.params.parallax.enabled) return;
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;
  });
  on('init', () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate();
  });
  on('setTranslate', () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate();
  });
  on('setTransition', (_swiper, duration) => {
    if (!swiper.params.parallax.enabled) return;
    setTransition(duration);
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/scrollbar/scrollbar.js":
/*!************************************************************!*\
  !*** ./node_modules/swiper/modules/scrollbar/scrollbar.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Scrollbar)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");
/* harmony import */ var _shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/create-element-if-not-defined.js */ "./node_modules/swiper/shared/create-element-if-not-defined.js");




function Scrollbar({
  swiper,
  extendParams,
  on,
  emit
}) {
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  let isTouched = false;
  let timeout = null;
  let dragTimeout = null;
  let dragStartPos;
  let dragSize;
  let trackSize;
  let divider;
  extendParams({
    scrollbar: {
      el: null,
      dragSize: 'auto',
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: 'swiper-scrollbar-lock',
      dragClass: 'swiper-scrollbar-drag'
    }
  });
  swiper.scrollbar = {
    el: null,
    dragEl: null,
    $el: null,
    $dragEl: null
  };

  function setTranslate() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar,
      rtlTranslate: rtl,
      progress
    } = swiper;
    const {
      $dragEl,
      $el
    } = scrollbar;
    const params = swiper.params.scrollbar;
    let newSize = dragSize;
    let newPos = (trackSize - dragSize) * progress;

    if (rtl) {
      newPos = -newPos;

      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }

    if (swiper.isHorizontal()) {
      $dragEl.transform(`translate3d(${newPos}px, 0, 0)`);
      $dragEl[0].style.width = `${newSize}px`;
    } else {
      $dragEl.transform(`translate3d(0px, ${newPos}px, 0)`);
      $dragEl[0].style.height = `${newSize}px`;
    }

    if (params.hide) {
      clearTimeout(timeout);
      $el[0].style.opacity = 1;
      timeout = setTimeout(() => {
        $el[0].style.opacity = 0;
        $el.transition(400);
      }, 1000);
    }
  }

  function setTransition(duration) {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    swiper.scrollbar.$dragEl.transition(duration);
  }

  function updateSize() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar
    } = swiper;
    const {
      $dragEl,
      $el
    } = scrollbar;
    $dragEl[0].style.width = '';
    $dragEl[0].style.height = '';
    trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
    divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));

    if (swiper.params.scrollbar.dragSize === 'auto') {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }

    if (swiper.isHorizontal()) {
      $dragEl[0].style.width = `${dragSize}px`;
    } else {
      $dragEl[0].style.height = `${dragSize}px`;
    }

    if (divider >= 1) {
      $el[0].style.display = 'none';
    } else {
      $el[0].style.display = '';
    }

    if (swiper.params.scrollbar.hide) {
      $el[0].style.opacity = 0;
    }

    if (swiper.params.watchOverflow && swiper.enabled) {
      scrollbar.$el[swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
    }
  }

  function getPointerPosition(e) {
    if (swiper.isHorizontal()) {
      return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
    }

    return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
  }

  function setDragPosition(e) {
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      $el
    } = scrollbar;
    let positionRatio;
    positionRatio = (getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);

    if (rtl) {
      positionRatio = 1 - positionRatio;
    }

    const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }

  function onDragStart(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      $wrapperEl
    } = swiper;
    const {
      $el,
      $dragEl
    } = scrollbar;
    isTouched = true;
    dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
    e.preventDefault();
    e.stopPropagation();
    $wrapperEl.transition(100);
    $dragEl.transition(100);
    setDragPosition(e);
    clearTimeout(dragTimeout);
    $el.transition(0);

    if (params.hide) {
      $el.css('opacity', 1);
    }

    if (swiper.params.cssMode) {
      swiper.$wrapperEl.css('scroll-snap-type', 'none');
    }

    emit('scrollbarDragStart', e);
  }

  function onDragMove(e) {
    const {
      scrollbar,
      $wrapperEl
    } = swiper;
    const {
      $el,
      $dragEl
    } = scrollbar;
    if (!isTouched) return;
    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    setDragPosition(e);
    $wrapperEl.transition(0);
    $el.transition(0);
    $dragEl.transition(0);
    emit('scrollbarDragMove', e);
  }

  function onDragEnd(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      $wrapperEl
    } = swiper;
    const {
      $el
    } = scrollbar;
    if (!isTouched) return;
    isTouched = false;

    if (swiper.params.cssMode) {
      swiper.$wrapperEl.css('scroll-snap-type', '');
      $wrapperEl.transition('');
    }

    if (params.hide) {
      clearTimeout(dragTimeout);
      dragTimeout = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.nextTick)(() => {
        $el.css('opacity', 0);
        $el.transition(400);
      }, 1000);
    }

    emit('scrollbarDragEnd', e);

    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  }

  function events(method) {
    const {
      scrollbar,
      touchEventsTouch,
      touchEventsDesktop,
      params,
      support
    } = swiper;
    const $el = scrollbar.$el;
    const target = $el[0];
    const activeListener = support.passiveListener && params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    const passiveListener = support.passiveListener && params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    if (!target) return;
    const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';

    if (!support.touch) {
      target[eventMethod](touchEventsDesktop.start, onDragStart, activeListener);
      document[eventMethod](touchEventsDesktop.move, onDragMove, activeListener);
      document[eventMethod](touchEventsDesktop.end, onDragEnd, passiveListener);
    } else {
      target[eventMethod](touchEventsTouch.start, onDragStart, activeListener);
      target[eventMethod](touchEventsTouch.move, onDragMove, activeListener);
      target[eventMethod](touchEventsTouch.end, onDragEnd, passiveListener);
    }
  }

  function enableDraggable() {
    if (!swiper.params.scrollbar.el) return;
    events('on');
  }

  function disableDraggable() {
    if (!swiper.params.scrollbar.el) return;
    events('off');
  }

  function init() {
    const {
      scrollbar,
      $el: $swiperEl
    } = swiper;
    swiper.params.scrollbar = (0,_shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_3__["default"])(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
      el: 'swiper-scrollbar'
    });
    const params = swiper.params.scrollbar;
    if (!params.el) return;
    let $el = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(params.el);

    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
      $el = $swiperEl.find(params.el);
    }

    let $dragEl = $el.find(`.${swiper.params.scrollbar.dragClass}`);

    if ($dragEl.length === 0) {
      $dragEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(`<div class="${swiper.params.scrollbar.dragClass}"></div>`);
      $el.append($dragEl);
    }

    Object.assign(scrollbar, {
      $el,
      el: $el[0],
      $dragEl,
      dragEl: $dragEl[0]
    });

    if (params.draggable) {
      enableDraggable();
    }

    if ($el) {
      $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
    }
  }

  function destroy() {
    disableDraggable();
  }

  on('init', () => {
    init();
    updateSize();
    setTranslate();
  });
  on('update resize observerUpdate lock unlock', () => {
    updateSize();
  });
  on('setTranslate', () => {
    setTranslate();
  });
  on('setTransition', (_s, duration) => {
    setTransition(duration);
  });
  on('enable disable', () => {
    const {
      $el
    } = swiper.scrollbar;

    if ($el) {
      $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
    }
  });
  on('destroy', () => {
    destroy();
  });
  Object.assign(swiper.scrollbar, {
    updateSize,
    setTranslate,
    init,
    destroy
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/thumbs/thumbs.js":
/*!******************************************************!*\
  !*** ./node_modules/swiper/modules/thumbs/thumbs.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Thumb)
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");


function Thumb({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: true,
      autoScrollOffset: 0,
      slideThumbActiveClass: 'swiper-slide-thumb-active',
      thumbsContainerClass: 'swiper-thumbs'
    }
  });
  let initialized = false;
  let swiperCreated = false;
  swiper.thumbs = {
    swiper: null
  };

  function onThumbClick() {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper) return;
    const clickedIndex = thumbsSwiper.clickedIndex;
    const clickedSlide = thumbsSwiper.clickedSlide;
    if (clickedSlide && (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
    if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
    let slideToIndex;

    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
    } else {
      slideToIndex = clickedIndex;
    }

    if (swiper.params.loop) {
      let currentIndex = swiper.activeIndex;

      if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
        swiper.loopFix(); // eslint-disable-next-line

        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
        currentIndex = swiper.activeIndex;
      }

      const prevIndex = swiper.slides.eq(currentIndex).prevAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
      const nextIndex = swiper.slides.eq(currentIndex).nextAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
      if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;else slideToIndex = prevIndex;
    }

    swiper.slideTo(slideToIndex);
  }

  function init() {
    const {
      thumbs: thumbsParams
    } = swiper.params;
    if (initialized) return false;
    initialized = true;
    const SwiperClass = swiper.constructor;

    if (thumbsParams.swiper instanceof SwiperClass) {
      swiper.thumbs.swiper = thumbsParams.swiper;
      Object.assign(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      Object.assign(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
    } else if ((0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(thumbsParams.swiper)) {
      const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
      Object.assign(thumbsSwiperParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
      swiperCreated = true;
    }

    swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
    swiper.thumbs.swiper.on('tap', onThumbClick);
    return true;
  }

  function update(initial) {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper) return;
    const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
    const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
    const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;

    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
      let currentThumbsIndex = thumbsSwiper.activeIndex;
      let newThumbsIndex;
      let direction;

      if (thumbsSwiper.params.loop) {
        if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
          thumbsSwiper.loopFix(); // eslint-disable-next-line

          thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
          currentThumbsIndex = thumbsSwiper.activeIndex;
        } // Find actual thumbs index to slide to


        const prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
        const nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();

        if (typeof prevThumbsIndex === 'undefined') {
          newThumbsIndex = nextThumbsIndex;
        } else if (typeof nextThumbsIndex === 'undefined') {
          newThumbsIndex = prevThumbsIndex;
        } else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) {
          newThumbsIndex = thumbsSwiper.params.slidesPerGroup > 1 ? nextThumbsIndex : currentThumbsIndex;
        } else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) {
          newThumbsIndex = nextThumbsIndex;
        } else {
          newThumbsIndex = prevThumbsIndex;
        }

        direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
      } else {
        newThumbsIndex = swiper.realIndex;
        direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
      }

      if (useOffset) {
        newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
      }

      if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) {// newThumbsIndex = newThumbsIndex - slidesPerView + 1;
        }

        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
      }
    } // Activate thumbs


    let thumbsToActivate = 1;
    const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }

    if (!swiper.params.thumbs.multipleActiveThumbs) {
      thumbsToActivate = 1;
    }

    thumbsToActivate = Math.floor(thumbsToActivate);
    thumbsSwiper.slides.removeClass(thumbActiveClass);

    if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        thumbsSwiper.$wrapperEl.children(`[data-swiper-slide-index="${swiper.realIndex + i}"]`).addClass(thumbActiveClass);
      }
    } else {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        thumbsSwiper.slides.eq(swiper.realIndex + i).addClass(thumbActiveClass);
      }
    }
  }

  on('beforeInit', () => {
    const {
      thumbs
    } = swiper.params;
    if (!thumbs || !thumbs.swiper) return;
    init();
    update(true);
  });
  on('slideChange update resize observerUpdate', () => {
    if (!swiper.thumbs.swiper) return;
    update();
  });
  on('setTransition', (_s, duration) => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper) return;
    thumbsSwiper.setTransition(duration);
  });
  on('beforeDestroy', () => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper) return;

    if (swiperCreated && thumbsSwiper) {
      thumbsSwiper.destroy();
    }
  });
  Object.assign(swiper.thumbs, {
    init,
    update
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/virtual/virtual.js":
/*!********************************************************!*\
  !*** ./node_modules/swiper/modules/virtual/virtual.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Virtual)
/* harmony export */ });
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");


function Virtual({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    virtual: {
      enabled: false,
      slides: [],
      cache: true,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: true,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  });
  let cssModeTimeout;
  swiper.virtual = {
    cache: {},
    from: undefined,
    to: undefined,
    slides: [],
    offset: 0,
    slidesGrid: []
  };

  function renderSlide(slide, index) {
    const params = swiper.params.virtual;

    if (params.cache && swiper.virtual.cache[index]) {
      return swiper.virtual.cache[index];
    }

    const $slideEl = params.renderSlide ? (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params.renderSlide.call(swiper, slide, index)) : (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(`<div class="${swiper.params.slideClass}" data-swiper-slide-index="${index}">${slide}</div>`);
    if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
    if (params.cache) swiper.virtual.cache[index] = $slideEl;
    return $slideEl;
  }

  function update(force) {
    const {
      slidesPerView,
      slidesPerGroup,
      centeredSlides
    } = swiper.params;
    const {
      addSlidesBefore,
      addSlidesAfter
    } = swiper.params.virtual;
    const {
      from: previousFrom,
      to: previousTo,
      slides,
      slidesGrid: previousSlidesGrid,
      offset: previousOffset
    } = swiper.virtual;

    if (!swiper.params.cssMode) {
      swiper.updateActiveIndex();
    }

    const activeIndex = swiper.activeIndex || 0;
    let offsetProp;
    if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
    let slidesAfter;
    let slidesBefore;

    if (centeredSlides) {
      slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
      slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
    } else {
      slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
      slidesBefore = slidesPerGroup + addSlidesBefore;
    }

    const from = Math.max((activeIndex || 0) - slidesBefore, 0);
    const to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
    const offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
    Object.assign(swiper.virtual, {
      from,
      to,
      offset,
      slidesGrid: swiper.slidesGrid
    });

    function onRendered() {
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();

      if (swiper.lazy && swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    }

    if (previousFrom === from && previousTo === to && !force) {
      if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
        swiper.slides.css(offsetProp, `${offset}px`);
      }

      swiper.updateProgress();
      return;
    }

    if (swiper.params.virtual.renderExternal) {
      swiper.params.virtual.renderExternal.call(swiper, {
        offset,
        from,
        to,
        slides: function getSlides() {
          const slidesToRender = [];

          for (let i = from; i <= to; i += 1) {
            slidesToRender.push(slides[i]);
          }

          return slidesToRender;
        }()
      });

      if (swiper.params.virtual.renderExternalUpdate) {
        onRendered();
      }

      return;
    }

    const prependIndexes = [];
    const appendIndexes = [];

    if (force) {
      swiper.$wrapperEl.find(`.${swiper.params.slideClass}`).remove();
    } else {
      for (let i = previousFrom; i <= previousTo; i += 1) {
        if (i < from || i > to) {
          swiper.$wrapperEl.find(`.${swiper.params.slideClass}[data-swiper-slide-index="${i}"]`).remove();
        }
      }
    }

    for (let i = 0; i < slides.length; i += 1) {
      if (i >= from && i <= to) {
        if (typeof previousTo === 'undefined' || force) {
          appendIndexes.push(i);
        } else {
          if (i > previousTo) appendIndexes.push(i);
          if (i < previousFrom) prependIndexes.push(i);
        }
      }
    }

    appendIndexes.forEach(index => {
      swiper.$wrapperEl.append(renderSlide(slides[index], index));
    });
    prependIndexes.sort((a, b) => b - a).forEach(index => {
      swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
    });
    swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, `${offset}px`);
    onRendered();
  }

  function appendSlide(slides) {
    if (typeof slides === 'object' && 'length' in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.push(slides[i]);
      }
    } else {
      swiper.virtual.slides.push(slides);
    }

    update(true);
  }

  function prependSlide(slides) {
    const activeIndex = swiper.activeIndex;
    let newActiveIndex = activeIndex + 1;
    let numberOfNewSlides = 1;

    if (Array.isArray(slides)) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
      }

      newActiveIndex = activeIndex + slides.length;
      numberOfNewSlides = slides.length;
    } else {
      swiper.virtual.slides.unshift(slides);
    }

    if (swiper.params.virtual.cache) {
      const cache = swiper.virtual.cache;
      const newCache = {};
      Object.keys(cache).forEach(cachedIndex => {
        const $cachedEl = cache[cachedIndex];
        const cachedElIndex = $cachedEl.attr('data-swiper-slide-index');

        if (cachedElIndex) {
          $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);
        }

        newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
      });
      swiper.virtual.cache = newCache;
    }

    update(true);
    swiper.slideTo(newActiveIndex, 0);
  }

  function removeSlide(slidesIndexes) {
    if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
    let activeIndex = swiper.activeIndex;

    if (Array.isArray(slidesIndexes)) {
      for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
        swiper.virtual.slides.splice(slidesIndexes[i], 1);

        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes[i]];
        }

        if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
    } else {
      swiper.virtual.slides.splice(slidesIndexes, 1);

      if (swiper.params.virtual.cache) {
        delete swiper.virtual.cache[slidesIndexes];
      }

      if (slidesIndexes < activeIndex) activeIndex -= 1;
      activeIndex = Math.max(activeIndex, 0);
    }

    update(true);
    swiper.slideTo(activeIndex, 0);
  }

  function removeAllSlides() {
    swiper.virtual.slides = [];

    if (swiper.params.virtual.cache) {
      swiper.virtual.cache = {};
    }

    update(true);
    swiper.slideTo(0, 0);
  }

  on('beforeInit', () => {
    if (!swiper.params.virtual.enabled) return;
    swiper.virtual.slides = swiper.params.virtual.slides;
    swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;

    if (!swiper.params.initialSlide) {
      update();
    }
  });
  on('setTranslate', () => {
    if (!swiper.params.virtual.enabled) return;

    if (swiper.params.cssMode && !swiper._immediateVirtual) {
      clearTimeout(cssModeTimeout);
      cssModeTimeout = setTimeout(() => {
        update();
      }, 100);
    } else {
      update();
    }
  });
  on('init update resize', () => {
    if (!swiper.params.virtual.enabled) return;

    if (swiper.params.cssMode) {
      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.setCSSProperty)(swiper.wrapperEl, '--swiper-virtual-size', `${swiper.virtualSize}px`);
    }
  });
  Object.assign(swiper.virtual, {
    appendSlide,
    prependSlide,
    removeSlide,
    removeAllSlides,
    update
  });
}

/***/ }),

/***/ "./node_modules/swiper/modules/zoom/zoom.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/zoom/zoom.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Zoom)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");



function Zoom({
  swiper,
  extendParams,
  on,
  emit
}) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  extendParams({
    zoom: {
      enabled: false,
      maxRatio: 3,
      minRatio: 1,
      toggle: true,
      containerClass: 'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed'
    }
  });
  swiper.zoom = {
    enabled: false
  };
  let currentScale = 1;
  let isScaling = false;
  let gesturesEnabled;
  let fakeGestureTouched;
  let fakeGestureMoved;
  const gesture = {
    $slideEl: undefined,
    slideWidth: undefined,
    slideHeight: undefined,
    $imageEl: undefined,
    $imageWrapEl: undefined,
    maxRatio: 3
  };
  const image = {
    isTouched: undefined,
    isMoved: undefined,
    currentX: undefined,
    currentY: undefined,
    minX: undefined,
    minY: undefined,
    maxX: undefined,
    maxY: undefined,
    width: undefined,
    height: undefined,
    startX: undefined,
    startY: undefined,
    touchesStart: {},
    touchesCurrent: {}
  };
  const velocity = {
    x: undefined,
    y: undefined,
    prevPositionX: undefined,
    prevPositionY: undefined,
    prevTime: undefined
  };
  let scale = 1;
  Object.defineProperty(swiper.zoom, 'scale', {
    get() {
      return scale;
    },

    set(value) {
      if (scale !== value) {
        const imageEl = gesture.$imageEl ? gesture.$imageEl[0] : undefined;
        const slideEl = gesture.$slideEl ? gesture.$slideEl[0] : undefined;
        emit('zoomChange', value, imageEl, slideEl);
      }

      scale = value;
    }

  });

  function getDistanceBetweenTouches(e) {
    if (e.targetTouches.length < 2) return 1;
    const x1 = e.targetTouches[0].pageX;
    const y1 = e.targetTouches[0].pageY;
    const x2 = e.targetTouches[1].pageX;
    const y2 = e.targetTouches[1].pageY;
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return distance;
  } // Events


  function onGestureStart(e) {
    const support = swiper.support;
    const params = swiper.params.zoom;
    fakeGestureTouched = false;
    fakeGestureMoved = false;

    if (!support.gestures) {
      if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
        return;
      }

      fakeGestureTouched = true;
      gesture.scaleStart = getDistanceBetweenTouches(e);
    }

    if (!gesture.$slideEl || !gesture.$slideEl.length) {
      gesture.$slideEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target).closest(`.${swiper.params.slideClass}`);
      if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
      gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
      gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

      if (gesture.$imageWrapEl.length === 0) {
        gesture.$imageEl = undefined;
        return;
      }
    }

    if (gesture.$imageEl) {
      gesture.$imageEl.transition(0);
    }

    isScaling = true;
  }

  function onGestureChange(e) {
    const support = swiper.support;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;

    if (!support.gestures) {
      if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
        return;
      }

      fakeGestureMoved = true;
      gesture.scaleMove = getDistanceBetweenTouches(e);
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
      if (e.type === 'gesturechange') onGestureStart(e);
      return;
    }

    if (support.gestures) {
      zoom.scale = e.scale * currentScale;
    } else {
      zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
    }

    if (zoom.scale > gesture.maxRatio) {
      zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
    }

    if (zoom.scale < params.minRatio) {
      zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
    }

    gesture.$imageEl.transform(`translate3d(0,0,0) scale(${zoom.scale})`);
  }

  function onGestureEnd(e) {
    const device = swiper.device;
    const support = swiper.support;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;

    if (!support.gestures) {
      if (!fakeGestureTouched || !fakeGestureMoved) {
        return;
      }

      if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !device.android) {
        return;
      }

      fakeGestureTouched = false;
      fakeGestureMoved = false;
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
    gesture.$imageEl.transition(swiper.params.speed).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
    currentScale = zoom.scale;
    isScaling = false;
    if (zoom.scale === 1) gesture.$slideEl = undefined;
  }

  function onTouchStart(e) {
    const device = swiper.device;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    if (image.isTouched) return;
    if (device.android && e.cancelable) e.preventDefault();
    image.isTouched = true;
    image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  }

  function onTouchMove(e) {
    const zoom = swiper.zoom;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    swiper.allowClick = false;
    if (!image.isTouched || !gesture.$slideEl) return;

    if (!image.isMoved) {
      image.width = gesture.$imageEl[0].offsetWidth;
      image.height = gesture.$imageEl[0].offsetHeight;
      image.startX = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.getTranslate)(gesture.$imageWrapEl[0], 'x') || 0;
      image.startY = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.getTranslate)(gesture.$imageWrapEl[0], 'y') || 0;
      gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
      gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
      gesture.$imageWrapEl.transition(0);
    } // Define if we need image drag


    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

    if (!image.isMoved && !isScaling) {
      if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
        image.isTouched = false;
        return;
      }

      if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
        image.isTouched = false;
        return;
      }
    }

    if (e.cancelable) {
      e.preventDefault();
    }

    e.stopPropagation();
    image.isMoved = true;
    image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
    image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;

    if (image.currentX < image.minX) {
      image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
    }

    if (image.currentX > image.maxX) {
      image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
    }

    if (image.currentY < image.minY) {
      image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
    }

    if (image.currentY > image.maxY) {
      image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
    } // Velocity


    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
    if (!velocity.prevTime) velocity.prevTime = Date.now();
    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
    velocity.prevPositionX = image.touchesCurrent.x;
    velocity.prevPositionY = image.touchesCurrent.y;
    velocity.prevTime = Date.now();
    gesture.$imageWrapEl.transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
  }

  function onTouchEnd() {
    const zoom = swiper.zoom;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

    if (!image.isTouched || !image.isMoved) {
      image.isTouched = false;
      image.isMoved = false;
      return;
    }

    image.isTouched = false;
    image.isMoved = false;
    let momentumDurationX = 300;
    let momentumDurationY = 300;
    const momentumDistanceX = velocity.x * momentumDurationX;
    const newPositionX = image.currentX + momentumDistanceX;
    const momentumDistanceY = velocity.y * momentumDurationY;
    const newPositionY = image.currentY + momentumDistanceY; // Fix duration

    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
    const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
    image.currentX = newPositionX;
    image.currentY = newPositionY; // Define if we need image drag

    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
    gesture.$imageWrapEl.transition(momentumDuration).transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
  }

  function onTransitionEnd() {
    const zoom = swiper.zoom;

    if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
      if (gesture.$imageEl) {
        gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
      }

      if (gesture.$imageWrapEl) {
        gesture.$imageWrapEl.transform('translate3d(0,0,0)');
      }

      zoom.scale = 1;
      currentScale = 1;
      gesture.$slideEl = undefined;
      gesture.$imageEl = undefined;
      gesture.$imageWrapEl = undefined;
    }
  }

  function zoomIn(e) {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;

    if (!gesture.$slideEl) {
      if (e && e.target) {
        gesture.$slideEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target).closest(`.${swiper.params.slideClass}`);
      }

      if (!gesture.$slideEl) {
        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
          gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
        } else {
          gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
        }
      }

      gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
      gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;

    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.touchAction = 'none';
    }

    gesture.$slideEl.addClass(`${params.zoomedSlideClass}`);
    let touchX;
    let touchY;
    let offsetX;
    let offsetY;
    let diffX;
    let diffY;
    let translateX;
    let translateY;
    let imageWidth;
    let imageHeight;
    let scaledWidth;
    let scaledHeight;
    let translateMinX;
    let translateMinY;
    let translateMaxX;
    let translateMaxY;
    let slideWidth;
    let slideHeight;

    if (typeof image.touchesStart.x === 'undefined' && e) {
      touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
      touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
    } else {
      touchX = image.touchesStart.x;
      touchY = image.touchesStart.y;
    }

    zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
    currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

    if (e) {
      slideWidth = gesture.$slideEl[0].offsetWidth;
      slideHeight = gesture.$slideEl[0].offsetHeight;
      offsetX = gesture.$slideEl.offset().left + window.scrollX;
      offsetY = gesture.$slideEl.offset().top + window.scrollY;
      diffX = offsetX + slideWidth / 2 - touchX;
      diffY = offsetY + slideHeight / 2 - touchY;
      imageWidth = gesture.$imageEl[0].offsetWidth;
      imageHeight = gesture.$imageEl[0].offsetHeight;
      scaledWidth = imageWidth * zoom.scale;
      scaledHeight = imageHeight * zoom.scale;
      translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
      translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
      translateMaxX = -translateMinX;
      translateMaxY = -translateMinY;
      translateX = diffX * zoom.scale;
      translateY = diffY * zoom.scale;

      if (translateX < translateMinX) {
        translateX = translateMinX;
      }

      if (translateX > translateMaxX) {
        translateX = translateMaxX;
      }

      if (translateY < translateMinY) {
        translateY = translateMinY;
      }

      if (translateY > translateMaxY) {
        translateY = translateMaxY;
      }
    } else {
      translateX = 0;
      translateY = 0;
    }

    gesture.$imageWrapEl.transition(300).transform(`translate3d(${translateX}px, ${translateY}px,0)`);
    gesture.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
  }

  function zoomOut() {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;

    if (!gesture.$slideEl) {
      if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
        gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
      } else {
        gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      }

      gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
      gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;

    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = '';
      swiper.wrapperEl.style.touchAction = '';
    }

    zoom.scale = 1;
    currentScale = 1;
    gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
    gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
    gesture.$slideEl.removeClass(`${params.zoomedSlideClass}`);
    gesture.$slideEl = undefined;
  } // Toggle Zoom


  function zoomToggle(e) {
    const zoom = swiper.zoom;

    if (zoom.scale && zoom.scale !== 1) {
      // Zoom Out
      zoomOut();
    } else {
      // Zoom In
      zoomIn(e);
    }
  }

  function getListeners() {
    const support = swiper.support;
    const passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    const activeListenerWithCapture = support.passiveListener ? {
      passive: false,
      capture: true
    } : true;
    return {
      passiveListener,
      activeListenerWithCapture
    };
  }

  function getSlideSelector() {
    return `.${swiper.params.slideClass}`;
  }

  function toggleGestures(method) {
    const {
      passiveListener
    } = getListeners();
    const slideSelector = getSlideSelector();
    swiper.$wrapperEl[method]('gesturestart', slideSelector, onGestureStart, passiveListener);
    swiper.$wrapperEl[method]('gesturechange', slideSelector, onGestureChange, passiveListener);
    swiper.$wrapperEl[method]('gestureend', slideSelector, onGestureEnd, passiveListener);
  }

  function enableGestures() {
    if (gesturesEnabled) return;
    gesturesEnabled = true;
    toggleGestures('on');
  }

  function disableGestures() {
    if (!gesturesEnabled) return;
    gesturesEnabled = false;
    toggleGestures('off');
  } // Attach/Detach Events


  function enable() {
    const zoom = swiper.zoom;
    if (zoom.enabled) return;
    zoom.enabled = true;
    const support = swiper.support;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();
    const slideSelector = getSlideSelector(); // Scale image

    if (support.gestures) {
      swiper.$wrapperEl.on(swiper.touchEvents.start, enableGestures, passiveListener);
      swiper.$wrapperEl.on(swiper.touchEvents.end, disableGestures, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
      swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
      swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);

      if (swiper.touchEvents.cancel) {
        swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
      }
    } // Move image


    swiper.$wrapperEl.on(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);
  }

  function disable() {
    const zoom = swiper.zoom;
    if (!zoom.enabled) return;
    const support = swiper.support;
    zoom.enabled = false;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();
    const slideSelector = getSlideSelector(); // Scale image

    if (support.gestures) {
      swiper.$wrapperEl.off(swiper.touchEvents.start, enableGestures, passiveListener);
      swiper.$wrapperEl.off(swiper.touchEvents.end, disableGestures, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
      swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
      swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);

      if (swiper.touchEvents.cancel) {
        swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
      }
    } // Move image


    swiper.$wrapperEl.off(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);
  }

  on('init', () => {
    if (swiper.params.zoom.enabled) {
      enable();
    }
  });
  on('destroy', () => {
    disable();
  });
  on('touchStart', (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchStart(e);
  });
  on('touchEnd', (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchEnd(e);
  });
  on('doubleTap', (_s, e) => {
    if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
      zoomToggle(e);
    }
  });
  on('transitionEnd', () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
      onTransitionEnd();
    }
  });
  on('slideChange', () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
      onTransitionEnd();
    }
  });
  Object.assign(swiper.zoom, {
    enable,
    disable,
    in: zoomIn,
    out: zoomOut,
    toggle: zoomToggle
  });
}

/***/ }),

/***/ "./node_modules/swiper/shared/classes-to-selector.js":
/*!***********************************************************!*\
  !*** ./node_modules/swiper/shared/classes-to-selector.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ classesToSelector)
/* harmony export */ });
function classesToSelector(classes = '') {
  return `.${classes.trim().replace(/([\.:!\/])/g, '\\$1') // eslint-disable-line
  .replace(/ /g, '.')}`;
}

/***/ }),

/***/ "./node_modules/swiper/shared/create-element-if-not-defined.js":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/shared/create-element-if-not-defined.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createElementIfNotDefined)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();

  if (swiper.params.createElements) {
    Object.keys(checkProps).forEach(key => {
      if (!params[key] && params.auto === true) {
        let element = swiper.$el.children(`.${checkProps[key]}`)[0];

        if (!element) {
          element = document.createElement('div');
          element.className = checkProps[key];
          swiper.$el.append(element);
        }

        params[key] = element;
        originalParams[key] = element;
      }
    });
  }

  return params;
}

/***/ }),

/***/ "./node_modules/swiper/shared/create-shadow.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/shared/create-shadow.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createShadow)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/swiper/shared/dom.js");

function createShadow(params, $slideEl, side) {
  const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}`;
  const $shadowContainer = params.transformEl ? $slideEl.find(params.transformEl) : $slideEl;
  let $shadowEl = $shadowContainer.children(`.${shadowClass}`);

  if (!$shadowEl.length) {
    $shadowEl = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(`<div class="swiper-slide-shadow${side ? `-${side}` : ''}"></div>`);
    $shadowContainer.append($shadowEl);
  }

  return $shadowEl;
}

/***/ }),

/***/ "./node_modules/swiper/shared/dom.js":
/*!*******************************************!*\
  !*** ./node_modules/swiper/shared/dom.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dom7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom7 */ "./node_modules/dom7/dom7.esm.js");

const Methods = {
  addClass: dom7__WEBPACK_IMPORTED_MODULE_0__.addClass,
  removeClass: dom7__WEBPACK_IMPORTED_MODULE_0__.removeClass,
  hasClass: dom7__WEBPACK_IMPORTED_MODULE_0__.hasClass,
  toggleClass: dom7__WEBPACK_IMPORTED_MODULE_0__.toggleClass,
  attr: dom7__WEBPACK_IMPORTED_MODULE_0__.attr,
  removeAttr: dom7__WEBPACK_IMPORTED_MODULE_0__.removeAttr,
  transform: dom7__WEBPACK_IMPORTED_MODULE_0__.transform,
  transition: dom7__WEBPACK_IMPORTED_MODULE_0__.transition,
  on: dom7__WEBPACK_IMPORTED_MODULE_0__.on,
  off: dom7__WEBPACK_IMPORTED_MODULE_0__.off,
  trigger: dom7__WEBPACK_IMPORTED_MODULE_0__.trigger,
  transitionEnd: dom7__WEBPACK_IMPORTED_MODULE_0__.transitionEnd,
  outerWidth: dom7__WEBPACK_IMPORTED_MODULE_0__.outerWidth,
  outerHeight: dom7__WEBPACK_IMPORTED_MODULE_0__.outerHeight,
  styles: dom7__WEBPACK_IMPORTED_MODULE_0__.styles,
  offset: dom7__WEBPACK_IMPORTED_MODULE_0__.offset,
  css: dom7__WEBPACK_IMPORTED_MODULE_0__.css,
  each: dom7__WEBPACK_IMPORTED_MODULE_0__.each,
  html: dom7__WEBPACK_IMPORTED_MODULE_0__.html,
  text: dom7__WEBPACK_IMPORTED_MODULE_0__.text,
  is: dom7__WEBPACK_IMPORTED_MODULE_0__.is,
  index: dom7__WEBPACK_IMPORTED_MODULE_0__.index,
  eq: dom7__WEBPACK_IMPORTED_MODULE_0__.eq,
  append: dom7__WEBPACK_IMPORTED_MODULE_0__.append,
  prepend: dom7__WEBPACK_IMPORTED_MODULE_0__.prepend,
  next: dom7__WEBPACK_IMPORTED_MODULE_0__.next,
  nextAll: dom7__WEBPACK_IMPORTED_MODULE_0__.nextAll,
  prev: dom7__WEBPACK_IMPORTED_MODULE_0__.prev,
  prevAll: dom7__WEBPACK_IMPORTED_MODULE_0__.prevAll,
  parent: dom7__WEBPACK_IMPORTED_MODULE_0__.parent,
  parents: dom7__WEBPACK_IMPORTED_MODULE_0__.parents,
  closest: dom7__WEBPACK_IMPORTED_MODULE_0__.closest,
  find: dom7__WEBPACK_IMPORTED_MODULE_0__.find,
  children: dom7__WEBPACK_IMPORTED_MODULE_0__.children,
  filter: dom7__WEBPACK_IMPORTED_MODULE_0__.filter,
  remove: dom7__WEBPACK_IMPORTED_MODULE_0__.remove
};
Object.keys(Methods).forEach(methodName => {
  Object.defineProperty(dom7__WEBPACK_IMPORTED_MODULE_0__.$.fn, methodName, {
    value: Methods[methodName],
    writable: true
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom7__WEBPACK_IMPORTED_MODULE_0__.$);

/***/ }),

/***/ "./node_modules/swiper/shared/effect-init.js":
/*!***************************************************!*\
  !*** ./node_modules/swiper/shared/effect-init.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ effectInit)
/* harmony export */ });
function effectInit(params) {
  const {
    effect,
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams,
    perspective
  } = params;
  on('beforeInit', () => {
    if (swiper.params.effect !== effect) return;
    swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);

    if (perspective && perspective()) {
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
    }

    const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
    Object.assign(swiper.params, overwriteParamsResult);
    Object.assign(swiper.originalParams, overwriteParamsResult);
  });
  on('setTranslate', () => {
    if (swiper.params.effect !== effect) return;
    setTranslate();
  });
  on('setTransition', (_s, duration) => {
    if (swiper.params.effect !== effect) return;
    setTransition(duration);
  });
}

/***/ }),

/***/ "./node_modules/swiper/shared/effect-target.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/shared/effect-target.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ effectTarget)
/* harmony export */ });
function effectTarget(effectParams, $slideEl) {
  if (effectParams.transformEl) {
    return $slideEl.find(effectParams.transformEl).css({
      'backface-visibility': 'hidden',
      '-webkit-backface-visibility': 'hidden'
    });
  }

  return $slideEl;
}

/***/ }),

/***/ "./node_modules/swiper/shared/effect-virtual-transition-end.js":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/shared/effect-virtual-transition-end.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ effectVirtualTransitionEnd)
/* harmony export */ });
function effectVirtualTransitionEnd({
  swiper,
  duration,
  transformEl,
  allSlides
}) {
  const {
    slides,
    activeIndex,
    $wrapperEl
  } = swiper;

  if (swiper.params.virtualTranslate && duration !== 0) {
    let eventTriggered = false;
    let $transitionEndTarget;

    if (allSlides) {
      $transitionEndTarget = transformEl ? slides.find(transformEl) : slides;
    } else {
      $transitionEndTarget = transformEl ? slides.eq(activeIndex).find(transformEl) : slides.eq(activeIndex);
    }

    $transitionEndTarget.transitionEnd(() => {
      if (eventTriggered) return;
      if (!swiper || swiper.destroyed) return;
      eventTriggered = true;
      swiper.animating = false;
      const triggerEvents = ['webkitTransitionEnd', 'transitionend'];

      for (let i = 0; i < triggerEvents.length; i += 1) {
        $wrapperEl.trigger(triggerEvents[i]);
      }
    });
  }
}

/***/ }),

/***/ "./node_modules/swiper/shared/get-browser.js":
/*!***************************************************!*\
  !*** ./node_modules/swiper/shared/get-browser.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBrowser: () => (/* binding */ getBrowser)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

let browser;

function calcBrowser() {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

  function isSafari() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
  }

  return {
    isSafari: isSafari(),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
  };
}

function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }

  return browser;
}



/***/ }),

/***/ "./node_modules/swiper/shared/get-device.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/shared/get-device.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDevice: () => (/* binding */ getDevice)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _get_support_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-support.js */ "./node_modules/swiper/shared/get-support.js");


let deviceCached;

function calcDevice({
  userAgent
} = {}) {
  const support = (0,_get_support_js__WEBPACK_IMPORTED_MODULE_1__.getSupport)();
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  const platform = window.navigator.platform;
  const ua = userAgent || window.navigator.userAgent;
  const device = {
    ios: false,
    android: false
  };
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  const windows = platform === 'Win32';
  let macos = platform === 'MacIntel'; // iPadOs 13 fix

  const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];

  if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, '13_0_0'];
    macos = false;
  } // Android


  if (android && !windows) {
    device.os = 'android';
    device.android = true;
  }

  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  } // Export object


  return device;
}

function getDevice(overrides = {}) {
  if (!deviceCached) {
    deviceCached = calcDevice(overrides);
  }

  return deviceCached;
}



/***/ }),

/***/ "./node_modules/swiper/shared/get-support.js":
/*!***************************************************!*\
  !*** ./node_modules/swiper/shared/get-support.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSupport: () => (/* binding */ getSupport)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

let support;

function calcSupport() {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  return {
    smoothScroll: document.documentElement && 'scrollBehavior' in document.documentElement.style,
    touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
    passiveListener: function checkPassiveListener() {
      let supportsPassive = false;

      try {
        const opts = Object.defineProperty({}, 'passive', {
          // eslint-disable-next-line
          get() {
            supportsPassive = true;
          }

        });
        window.addEventListener('testPassiveListener', null, opts);
      } catch (e) {// No support
      }

      return supportsPassive;
    }(),
    gestures: function checkGestures() {
      return 'ongesturestart' in window;
    }()
  };
}

function getSupport() {
  if (!support) {
    support = calcSupport();
  }

  return support;
}



/***/ }),

/***/ "./node_modules/swiper/shared/utils.js":
/*!*********************************************!*\
  !*** ./node_modules/swiper/shared/utils.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animateCSSModeScroll: () => (/* binding */ animateCSSModeScroll),
/* harmony export */   deleteProps: () => (/* binding */ deleteProps),
/* harmony export */   extend: () => (/* binding */ extend),
/* harmony export */   getComputedStyle: () => (/* binding */ getComputedStyle),
/* harmony export */   getTranslate: () => (/* binding */ getTranslate),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   nextTick: () => (/* binding */ nextTick),
/* harmony export */   now: () => (/* binding */ now),
/* harmony export */   setCSSProperty: () => (/* binding */ setCSSProperty)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");


function deleteProps(obj) {
  const object = obj;
  Object.keys(object).forEach(key => {
    try {
      object[key] = null;
    } catch (e) {// no getter for object
    }

    try {
      delete object[key];
    } catch (e) {// something got wrong
    }
  });
}

function nextTick(callback, delay = 0) {
  return setTimeout(callback, delay);
}

function now() {
  return Date.now();
}

function getComputedStyle(el) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  let style;

  if (window.getComputedStyle) {
    style = window.getComputedStyle(el, null);
  }

  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }

  if (!style) {
    style = el.style;
  }

  return style;
}

function getTranslate(el, axis = 'x') {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  let matrix;
  let curTransform;
  let transformMatrix;
  const curStyle = getComputedStyle(el, null);

  if (window.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;

    if (curTransform.split(',').length > 6) {
      curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
    } // Some old versions of Webkit choke when 'none' is passed; pass
    // empty string instead in this case


    transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
    matrix = transformMatrix.toString().split(',');
  }

  if (axis === 'x') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
    else curTransform = parseFloat(matrix[4]);
  }

  if (axis === 'y') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
    else curTransform = parseFloat(matrix[5]);
  }

  return curTransform || 0;
}

function isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}

function isNode(node) {
  // eslint-disable-next-line
  if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
    return node instanceof HTMLElement;
  }

  return node && (node.nodeType === 1 || node.nodeType === 11);
}

function extend(...args) {
  const to = Object(args[0]);
  const noExtend = ['__proto__', 'constructor', 'prototype'];

  for (let i = 1; i < args.length; i += 1) {
    const nextSource = args[i];

    if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
      const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);

      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

        if (desc !== undefined && desc.enumerable) {
          if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            to[nextKey] = {};

            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }

  return to;
}

function setCSSProperty(el, varName, varValue) {
  el.style.setProperty(varName, varValue);
}

function animateCSSModeScroll({
  swiper,
  targetPosition,
  side
}) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  const startPosition = -swiper.translate;
  let startTime = null;
  let time;
  const duration = swiper.params.speed;
  swiper.wrapperEl.style.scrollSnapType = 'none';
  window.cancelAnimationFrame(swiper.cssModeFrameID);
  const dir = targetPosition > startPosition ? 'next' : 'prev';

  const isOutOfBound = (current, target) => {
    return dir === 'next' && current >= target || dir === 'prev' && current <= target;
  };

  const animate = () => {
    time = new Date().getTime();

    if (startTime === null) {
      startTime = time;
    }

    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);

    if (isOutOfBound(currentPosition, targetPosition)) {
      currentPosition = targetPosition;
    }

    swiper.wrapperEl.scrollTo({
      [side]: currentPosition
    });

    if (isOutOfBound(currentPosition, targetPosition)) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.scrollSnapType = '';
      setTimeout(() => {
        swiper.wrapperEl.style.overflow = '';
        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });
      });
      window.cancelAnimationFrame(swiper.cssModeFrameID);
      return;
    }

    swiper.cssModeFrameID = window.requestAnimationFrame(animate);
  };

  animate();
}



/***/ }),

/***/ "./node_modules/swiper/swiper-bundle.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/swiper-bundle.esm.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Swiper: () => (/* reexport safe */ _core_core_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (/* reexport safe */ _core_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _core_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/core.js */ "./node_modules/swiper/core/core.js");
/* harmony import */ var _modules_virtual_virtual_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/virtual/virtual.js */ "./node_modules/swiper/modules/virtual/virtual.js");
/* harmony import */ var _modules_keyboard_keyboard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/keyboard/keyboard.js */ "./node_modules/swiper/modules/keyboard/keyboard.js");
/* harmony import */ var _modules_mousewheel_mousewheel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mousewheel/mousewheel.js */ "./node_modules/swiper/modules/mousewheel/mousewheel.js");
/* harmony import */ var _modules_navigation_navigation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/navigation/navigation.js */ "./node_modules/swiper/modules/navigation/navigation.js");
/* harmony import */ var _modules_pagination_pagination_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/pagination/pagination.js */ "./node_modules/swiper/modules/pagination/pagination.js");
/* harmony import */ var _modules_scrollbar_scrollbar_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/scrollbar/scrollbar.js */ "./node_modules/swiper/modules/scrollbar/scrollbar.js");
/* harmony import */ var _modules_parallax_parallax_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/parallax/parallax.js */ "./node_modules/swiper/modules/parallax/parallax.js");
/* harmony import */ var _modules_zoom_zoom_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/zoom/zoom.js */ "./node_modules/swiper/modules/zoom/zoom.js");
/* harmony import */ var _modules_lazy_lazy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/lazy/lazy.js */ "./node_modules/swiper/modules/lazy/lazy.js");
/* harmony import */ var _modules_controller_controller_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/controller/controller.js */ "./node_modules/swiper/modules/controller/controller.js");
/* harmony import */ var _modules_a11y_a11y_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/a11y/a11y.js */ "./node_modules/swiper/modules/a11y/a11y.js");
/* harmony import */ var _modules_history_history_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/history/history.js */ "./node_modules/swiper/modules/history/history.js");
/* harmony import */ var _modules_hash_navigation_hash_navigation_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/hash-navigation/hash-navigation.js */ "./node_modules/swiper/modules/hash-navigation/hash-navigation.js");
/* harmony import */ var _modules_autoplay_autoplay_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/autoplay/autoplay.js */ "./node_modules/swiper/modules/autoplay/autoplay.js");
/* harmony import */ var _modules_thumbs_thumbs_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/thumbs/thumbs.js */ "./node_modules/swiper/modules/thumbs/thumbs.js");
/* harmony import */ var _modules_free_mode_free_mode_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/free-mode/free-mode.js */ "./node_modules/swiper/modules/free-mode/free-mode.js");
/* harmony import */ var _modules_grid_grid_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/grid/grid.js */ "./node_modules/swiper/modules/grid/grid.js");
/* harmony import */ var _modules_manipulation_manipulation_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/manipulation/manipulation.js */ "./node_modules/swiper/modules/manipulation/manipulation.js");
/* harmony import */ var _modules_effect_fade_effect_fade_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/effect-fade/effect-fade.js */ "./node_modules/swiper/modules/effect-fade/effect-fade.js");
/* harmony import */ var _modules_effect_cube_effect_cube_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modules/effect-cube/effect-cube.js */ "./node_modules/swiper/modules/effect-cube/effect-cube.js");
/* harmony import */ var _modules_effect_flip_effect_flip_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/effect-flip/effect-flip.js */ "./node_modules/swiper/modules/effect-flip/effect-flip.js");
/* harmony import */ var _modules_effect_coverflow_effect_coverflow_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/effect-coverflow/effect-coverflow.js */ "./node_modules/swiper/modules/effect-coverflow/effect-coverflow.js");
/* harmony import */ var _modules_effect_creative_effect_creative_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modules/effect-creative/effect-creative.js */ "./node_modules/swiper/modules/effect-creative/effect-creative.js");
/* harmony import */ var _modules_effect_cards_effect_cards_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modules/effect-cards/effect-cards.js */ "./node_modules/swiper/modules/effect-cards/effect-cards.js");
/**
 * Swiper 7.4.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: December 24, 2021
 */




























// Swiper Class
const modules = [_modules_virtual_virtual_js__WEBPACK_IMPORTED_MODULE_1__["default"], _modules_keyboard_keyboard_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modules_mousewheel_mousewheel_js__WEBPACK_IMPORTED_MODULE_3__["default"], _modules_navigation_navigation_js__WEBPACK_IMPORTED_MODULE_4__["default"], _modules_pagination_pagination_js__WEBPACK_IMPORTED_MODULE_5__["default"], _modules_scrollbar_scrollbar_js__WEBPACK_IMPORTED_MODULE_6__["default"], _modules_parallax_parallax_js__WEBPACK_IMPORTED_MODULE_7__["default"], _modules_zoom_zoom_js__WEBPACK_IMPORTED_MODULE_8__["default"], _modules_lazy_lazy_js__WEBPACK_IMPORTED_MODULE_9__["default"], _modules_controller_controller_js__WEBPACK_IMPORTED_MODULE_10__["default"], _modules_a11y_a11y_js__WEBPACK_IMPORTED_MODULE_11__["default"], _modules_history_history_js__WEBPACK_IMPORTED_MODULE_12__["default"], _modules_hash_navigation_hash_navigation_js__WEBPACK_IMPORTED_MODULE_13__["default"], _modules_autoplay_autoplay_js__WEBPACK_IMPORTED_MODULE_14__["default"], _modules_thumbs_thumbs_js__WEBPACK_IMPORTED_MODULE_15__["default"], _modules_free_mode_free_mode_js__WEBPACK_IMPORTED_MODULE_16__["default"], _modules_grid_grid_js__WEBPACK_IMPORTED_MODULE_17__["default"], _modules_manipulation_manipulation_js__WEBPACK_IMPORTED_MODULE_18__["default"], _modules_effect_fade_effect_fade_js__WEBPACK_IMPORTED_MODULE_19__["default"], _modules_effect_cube_effect_cube_js__WEBPACK_IMPORTED_MODULE_20__["default"], _modules_effect_flip_effect_flip_js__WEBPACK_IMPORTED_MODULE_21__["default"], _modules_effect_coverflow_effect_coverflow_js__WEBPACK_IMPORTED_MODULE_22__["default"], _modules_effect_creative_effect_creative_js__WEBPACK_IMPORTED_MODULE_23__["default"], _modules_effect_cards_effect_cards_js__WEBPACK_IMPORTED_MODULE_24__["default"]];
_core_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].use(modules);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vendor */ "./src/js/_vendor.js");
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_vars */ "./src/js/_vars.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_functions */ "./src/js/_functions.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");




})();

/******/ })()
;
//# sourceMappingURL=main.js.map