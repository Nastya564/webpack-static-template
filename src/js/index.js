import '../scss/style.scss'

const btnReadMore = document.getElementById('btn-read-more')
const infoText = document.querySelector('.main__info-text')
const svgElement = document.getElementById('btn-read-more-svg')

btnReadMore.addEventListener('click', function () {
  const isExpanded = infoText.classList.contains('expanded')

  if (isExpanded) {
    infoText.classList.remove('expanded')
    btnReadMore.textContent = 'Показать все'
    svgElement.style.transform = ''
  } else {
    infoText.classList.add('expanded')
    btnReadMore.textContent = 'Скрыть'
    svgElement.style.transform = 'rotate(180deg)'
  }
})
