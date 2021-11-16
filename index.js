window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav')
  const logoItem = document.querySelector('.logo-item')

  if (this.scrollY > 0) {
    nav.style.backgroundColor = `rgba(0, 0, 0, 0.8)`
    nav.style.height = '80px'
    logoItem.style.display = 'block'
  } else {
    nav.style.backgroundColor = `transparent`
    logoItem.style.display = 'none'
    nav.style.height = '200px'
  }
})

const fullScreen_1 = document.querySelector('.full-screen-1')
const fullScreen_2 = document.querySelector('.full-screen-2')
const fullScreen_3 = document.querySelector('.full-screen-3')
const closeBtn = document.querySelector('.close-btn')

fullScreen_1.addEventListener('click', () => {
  const mask = document.querySelector('#mask')
  const modal = document.querySelector('#modal')
  mask.style.display = 'block'
  modal.style.backgroundImage = `url(../images/店家環境/shop03.JPG)`
})
fullScreen_2.addEventListener('click', () => {
  const mask = document.querySelector('#mask')
  const modal = document.querySelector('#modal')
  mask.style.display = 'block'
  modal.style.backgroundImage = `url(../images/店家環境/shop02.JPG)`
})
fullScreen_3.addEventListener('click', () => {
  const mask = document.querySelector('#mask')
  const modal = document.querySelector('#modal')
  mask.style.display = 'block'
  modal.style.backgroundImage = `url(../images/店家環境/shop03.JPG)`
})
closeBtn.addEventListener('click', () => {
  mask.style.display = 'none'
})