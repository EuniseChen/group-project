
// 滑鼠一開始滾動，navbar的樣式就發生改變
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

// 店內環境區塊的放大效果
const fullScreen_1 = document.querySelector('.full-screen-1')
const fullScreen_2 = document.querySelector('.full-screen-2')
const fullScreen_3 = document.querySelector('.full-screen-3')
const closeBtn = document.querySelector('.close-btn')

// 點擊圖片1/2/3,就會打開full-screen
fullScreen_1.addEventListener('click', () => openModal(3))
fullScreen_2.addEventListener('click', () => openModal(2))
fullScreen_3.addEventListener('click', () => openModal(3))


// 打開full-screen的函數
function openModal(img) {
  const mask = document.querySelector('#mask')
  const modal = document.querySelector('#modal')

  fadeIn(mask, modal)

  mask.style.display = 'block'

  modal.style.backgroundImage = `url(./images/店家環境/shop0${img}.JPG)`

  closeBtn.addEventListener('click', () => {
    mask.style.display = 'none'
    modal.style.opacity = '0'
  })

}

// 漸入效果：剛開始opacity為0.1，每次增加（opacity*0.1）
function fadeIn(mask, modal) {
  let modalOpacity = 0.1 // initial modal opacity
  mask.style.display = 'block'

  // 設置定時器，當opacity變為1的時候停止
  const timer = setInterval(() => {
    if (modalOpacity >= 1) clearInterval(timer)

    modal.style.opacity = modalOpacity
    modalOpacity += modalOpacity * 0.1
  }, 10)
}

