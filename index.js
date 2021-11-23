// ------------navbar的樣式改變--------------------------------------
let navTimer = null // timer重新開始運作

window.addEventListener('scroll', () => {
  // 滑鼠一開始滾動，navbar的樣式就發生改變
  const nav = document.querySelector('.nav'),
    logoItem = document.querySelector('.logo-item')

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
const fullScreen_1 = document.querySelector('.full-screen-1'),
  fullScreen_2 = document.querySelector('.full-screen-2'),
  fullScreen_3 = document.querySelector('.full-screen-3'),
  closeBtn = document.querySelector('.close-btn')

// 點擊圖片1/2/3,就會打開full-screen
fullScreen_1.addEventListener('click', () => openModal(1))
fullScreen_2.addEventListener('click', () => openModal(2))
fullScreen_3.addEventListener('click', () => openModal(3))

// 打開full-screen的函數
function openModal(img) {
  const mask = document.querySelector('#mask'),
    modal = document.querySelector('#modal')

  fadeIn(mask, modal)

  mask.style.display = 'block'
  modal.style.backgroundImage = `url(./images/店家環境/shop0${img}.JPG)`
  modal.style.backgroundSize = 'contain'
  modal.style.backgroundRepeat = 'no-repeat'

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
const menuItems = document.querySelectorAll('.menu-item'),
  contents = document.querySelectorAll('.content')

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

// -----------寵物認養--------------
const question_1 = document.querySelector('.btn-q1'),
  question_2 = document.querySelector('.btn-q2'),
  question_3 = document.querySelector('.btn-q3'),
  customer = document.querySelector('.from-customers'),
  us_1 = document.querySelector('.from-us-1'),
  us_2 = document.querySelector('.from-us-2')

let timer_us_1 = null,
  timer_us_2 = null

us_2.style.display = 'none'

question_1.addEventListener('click', () => {
  window.clearTimeout(timer_us_1)
  window.clearTimeout(timer_us_2)
  typing(
    `
    哈囉！我想請問貴店領養毛孩的流程和手續~
    `,
    `歡迎預約來現場看過貓狗🙂有認養意願後找老闆談談詢問相關細節（聊聊天）<br>
     以下是認養流程：<br>
     🐾一週冷靜期<br>
     🐾思考後確定自己真的想養<br>
     🐾主動聯繫老闆<br>
     🐾帶貓狗回家一起過一輩子😎
     `,
    ``
  )
  us_2.style.display = 'none'
})

question_2.addEventListener('click', () => {
  window.clearTimeout(timer_us_1)
  window.clearTimeout(timer_us_2)
  typing(
    `
    那我想請問認養有甚麼身份資格的限制嗎？
    `,
    `
    我們並不會禁止情侶或是學生領養喔，但是學生的話會需要您先跟家長溝通，
    家長同意後也會讓您挑選心愛的毛孩帶回家喔！
    `,
    `
    雖然本店認養上沒有身份資格的限制，但希望所有確定要認養的主人們，
    都一定要有一個能夠為你領養的毛孩，負責一輩子的決心喔
    `
  )
  us_2.style.display = 'none'
})

question_3.addEventListener('click', () => {
  window.clearTimeout(timer_us_1)
  window.clearTimeout(timer_us_2)
  typing(
    `
    那在領養上，還有甚麼我必須注意的事情嗎？
    `,
    `
    希望您在七天的冷靜期能可以先好好卸下衝動後，冷靜思考你真的準備好了嗎？這不是幾個月甚至幾年而已，
    你未來的所有規劃都必須多考慮一個生命喔！
    `,
    `
    而且在一週冷靜期中有問題都可以隨時跟老闆聯繫，或覺得您已經準備好了，請主動打電話告知老闆，
    在思考後還是決定想要領養牠的認養人，才會是我們未來的親家喔！
    最後無論有沒有跟我們領養，都是很棒的事！我們會很期待接到您的提親電話！
    `
  )
  us_2.style.display = 'none'
})

function typing(fromCustomer, fromUs, fromUs2) {
  const data_customer = fromCustomer.split('')
  let index_customer = 0

  customer.innerHTML = ''
  us_1.innerHTML = ''
  us_2.innerHTML = ''

  function writing() {
    if (index_customer < data_customer.length) {
      customer.innerHTML += data_customer[index_customer++]
      requestAnimationFrame(writing)
    }
  }

  timer_us_1 = setTimeout(() => (us_1.innerHTML += fromUs), 800)

  timer_us_2 = setTimeout(() => {
    us_2.innerHTML += fromUs2
    if (us_2.innerHTML.length > 0) us_2.style.display = 'block'
  }, 1600)

  writing()
}

AOS.init() // AOS

// Initialize Swiper
var swiper = new Swiper('.mySwiper', {
  autoplay: {
    disableOnInteraction: true
  },
  speed: 400,
  spaceBetween: 100,
  slidesPerView: 1.2,
  spaceBetween: 30,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  
  breakpoints: {
    
    //  >576px 條件如下
    576: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }

})
//輪播設計結束





