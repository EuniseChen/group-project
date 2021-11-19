// ------------navbar的樣式改變--------------------------------------
let navTimer = null // timer重新開始運作

window.addEventListener('scroll', () => {
  // 滑鼠一開始滾動，navbar的樣式就發生改變
  const nav = document.querySelector('.nav')
  const logoItem = document.querySelector('.logo-item')
  window.clearTimeout(navTimer) // clear timer

  if (this.scrollY > 0) {
    nav.style.backgroundColor = `rgba(0, 0, 0, 0.8)`
    nav.style.height = '80px'
    logoItem.style.display = 'block'
    nav.style.opacity = 1 // initial nav opacity every time while scroll event starting

    navTimer = setTimeout(() => {
      // hide nav while scroll event stopping after 2 sec
      nav.style.opacity = 0
    }, 2000)
  } else {
    nav.style.backgroundColor = `transparent`
    logoItem.style.display = 'none'
    nav.style.height = '200px'
  }
})

// ----------店內環境區塊的放大效果----------------------------
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

function fadeIn(mask, modal) {
  // 漸入效果：剛開始opacity為0.1，每次增加（opacity*0.1）
  let modalOpacity = 0.1 // initial modal opacity
  mask.style.display = 'block'

  /*  const timer = setInterval(() => { // 設置定時器，當opacity變為1的時候停止
    if (modalOpacity >= 1) clearInterval(timer)

    modal.style.opacity = modalOpacity
    modalOpacity += modalOpacity * 0.1
  }, 10) */

  function showModal() {
    //as above but using requestAnimationFrame
    if (modalOpacity <= 1) {
      modal.style.opacity = modalOpacity
      modalOpacity += modalOpacity * 0.1
      requestAnimationFrame(showModal)
    }
  }
  showModal()
}

// -----------菜單頁簽的製作--------------
const menuItems = document.querySelectorAll('.menu-item')
const contents = document.querySelectorAll('.content')

menuItems.forEach((menuItem, index) => {
  menuItem.onclick = () => {
// 每次點擊菜單頁簽，就會全部去除active和now的屬性
    menuItems.forEach((menuItem) => {
      menuItem.classList.remove('active')
      contents.forEach((content) => content.classList.remove('now'))
    })
    // 全部去掉active和now後，再逐個增加
    menuItem.classList.add('active')
    contents[index].classList.add('now')
  }
})



/* function typing() {
  const container = document.querySelector('#content')
  const data = `乘興南遊不戒嚴，九重誰省諫書函。

                宓妃愁坐芝田館，用盡陳王八斗才。

                一尺深紅勝麴塵，天生舊物不如新。

                十年身事各如萍，白首相逢淚滿纓。

                北畔是山南畔海，只堪圖畫不堪行。
                `.split('')
  let index = 0

  function writing() {
    if (index < data.length) {
      container.innerHTML += data[index++]
      requestAnimationFrame(writing)
    }
  }
  writing()
}

typing() */
