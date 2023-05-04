// dropdown
function toggle(id) {
  let el = document.querySelector(id)
  let dropdown = el.querySelector('#dropdown')
  dropdown.classList.toggle('none')
}

// carousel 1
const arrowUp = document.getElementById("arrow-up")
const arrowDown = document.getElementById("arrow-down")
const sliderWrap = document.getElementById("slider-wrap")

arrowUp.addEventListener("click", () => {
  moveSlider("up")
})
arrowDown.addEventListener("click", () => {
  moveSlider("down")
})

const SLIDES = sliderWrap.children.length
const MAX_DOWN_MOVING_COUNT = SLIDES - 2
let movingCount = 0
let slideHeigth = sliderWrap.children[0].clientHeight
let slideStep = slideHeigth + 70

window.addEventListener("resize", calcSlideStep)


function moveSlider(direction) {
  let oldTop = Number(sliderWrap.style.top.slice(0,-2))
  let newTop = oldTop
    
  if (direction === "up" && oldTop !== 0) {
    movingCount = movingCount - 1
    newTop = newTop + slideStep + "px"   
    sliderWrap.style.top = newTop 
  } else if (direction === "down" && movingCount < MAX_DOWN_MOVING_COUNT) {
    movingCount = movingCount + 1
    newTop = newTop - slideStep + "px"
    sliderWrap.style.top = newTop 
  }
}

function calcSlideStep() {
  slideHeigth = sliderWrap.children[0].clientHeight
  slideStep = slideHeigth + 70
}

// carousel 2

const horizontalSliderWrap = document.getElementById("horizontalSliderWrap")
const IMAGES = horizontalSliderWrap.children
console.log(IMAGES)

let activeSlideIdx = 1
 
function listToSlide(idx) {
  if (idx === activeSlideIdx) return
  let oldLeft = Number(horizontalSliderWrap.style.left.slice(0,-2))
  if (idx < activeSlideIdx) {
    horizontalSliderWrap.style.left = oldLeft + 130 + "px"
    activeSlideIdx = activeSlideIdx - 1
  } else {
    horizontalSliderWrap.style.left = oldLeft - 130 + "px"
    activeSlideIdx = activeSlideIdx + 1
  }
  changeSlideText(idx)
}

for (let i = 0; i < IMAGES.length; i++) {
  IMAGES[i].addEventListener("click", () => {
    listToSlide(i)
  })
}


let horizontalSliderContent = [
  {
    title: "title one",
    paragraph: "paragraph oneparagraph oneparagraph oneparagraph oneparagraph oneparagraph oneparagraph oneparagraph oneparagraph one"
  },
  {
    title: "title second",
    paragraph: "paragraph oneparagraph oneparagraph oneparadflzbijndf;obxdgbndgnxfghh oneparagraph one"
  },
  {
    title: "title third",
    paragraph: "paragraph oneparagraph oneparagraph oneparagraph ogkguukfgujdsdrneparagrap oneparagraph oneparagrap oneparagraph oneparagrap oneparagraph oneparagraph oneparagraph oneparagraph oneparagraph oneparagraph one"
  },
  {
    title: "title fourth",
    paragraph: "paragraph oneparagraph onefgsdfgsdfgsdfgparagraph ononeparagraph oneparagraph oneparagraph oneparagraph one"
  },
  {
    title: "title fith",
    paragraph: "paragraph oneparagsdfsgsdfgsdgrew65e7ywraph oph oneparagraph oneparagraph one"
  },
]

let slideTitle = document.getElementById("sliderTitle")
let slideParagraph = document.getElementById("sliderParagraph")

function changeSlideText(idx) {
  slideTitle.innerHTML = horizontalSliderContent[idx].title
  slideParagraph.innerHTML = horizontalSliderContent[idx].paragraph
}
console.log(slideTitle)

// validation

let regName = /^[a-zA-Z ]+$/;
let regNickName = /^[a-zA-Z ]+$ + [0-9]/;
let regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
let regPhone = /[0-9]{11}/;
let regPassword = /^[a-zA-Z ]+$ + [0-9]/;


let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let email = document.getElementById("email")
let phone = document.getElementById("phone")
let nickname = document.getElementById("nickname")
let password = document.getElementById("password")

firstName.addEventListener("input", () => {
  validateName(regName, firstName)
})
lastName.addEventListener("input", () => {
  validateName(regName, lastName)
})
email.addEventListener("input", () => {
  validateName(regEmail, email)
})
phone.addEventListener("input", () => {
  validateName(regPhone, phone)
})
nickname.addEventListener("input", () => {
  validateName(regNickName, nickname)
})
password.addEventListener("input", () => {
  validateName(regPassword, password)
})

function validateName(regex, elem) {
  let value = elem.value
  if (regex.test(value)) {
    elem.classList.add("valid")
    elem.classList.remove("error")
  } else {
    elem.classList.add("error")
    elem.classList.remove("valid")
  }
}

