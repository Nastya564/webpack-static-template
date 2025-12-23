import '../scss/style.scss'

// Инициализация Swiper на мобильных для брендов
let swiper = null

function initSwiper() {
  if (window.innerWidth <= 429 && !swiper) {
    swiper = new Swiper('.swiper-container', {
      simulateTouch: true,
      allowTouchMove: true,
      noSwiping: false,
      preventInteractionOnTransition: false,
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination',
        enabled: true, // Явно включаем
        clickable: true,
        type: 'bullets', // Явно указываем тип
        dynamicBullets: false // Для простых буллетов
      }
    })
  } else if (window.innerWidth > 430 && swiper) {
    swiper.destroy()
    swiper = null
  }
}

// Инициализация Swiper при загрузке и ресайзе
window.addEventListener('load', initSwiper)
window.addEventListener('resize', initSwiper)

// Обработка кнопки "Читать далее"/"Скрыть"
const btnReadMore = document.getElementById('btn-read-more')
const infoText = document.querySelector('.main__info-text')
const svgElement = document.getElementById('btn-read-more-svg')

btnReadMore.addEventListener('click', function () {
  const isExpanded = infoText.classList.contains('expanded')

  if (isExpanded) {
    infoText.classList.remove('expanded')
    btnReadMore.textContent = 'Читать далее'
    svgElement.style.transform = ''
  } else {
    infoText.classList.add('expanded')
    btnReadMore.textContent = 'Скрыть'
    svgElement.style.transform = 'rotate(180deg)'
  }
})

// Обработка кнопки "Показать все"/"Скрыть для брендов"
const btnShowAll = document.getElementById('show-all-btn')
const brandsGrid = document.querySelector('.brands-grid')
const svgElem = document.getElementById('btn-show-all-svg')

btnShowAll.addEventListener('click', function () {
  const isExpanded = brandsGrid.classList.contains('expanded')

  if (isExpanded) {
    brandsGrid.classList.remove('expanded')
    btnShowAll.textContent = 'Показать все'
    svgElem.style.transform = ''
  } else {
    brandsGrid.classList.add('expanded')
    btnShowAll.textContent = 'Скрыть'
    svgElem.style.transform = 'rotate(180deg)'
  }
})

// Обработка кнопки "Показать все"/"Скрыть для видов техники"
const btnShow = document.getElementById('show-all-repair-btn')
const repairGrid = document.getElementById('repair-grid')
const svgElemRep = document.getElementById('btn-show-all-repair-svg')

btnShow.addEventListener('click', function () {
  const isExpanded = repairGrid.classList.contains('expanded')

  if (isExpanded) {
    repairGrid.classList.remove('expanded')
    btnShow.textContent = 'Показать все'
    svgElemRep.style.transform = ''
  } else {
    repairGrid.classList.add('expanded')
    btnShow.textContent = 'Скрыть'
    svgElemRep.style.transform = 'rotate(180deg)'
  }
})
