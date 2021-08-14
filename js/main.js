const hamburger = document.querySelector('.hamburger')
const hamburgerMenu = document.querySelector('.hamburger-menu')
const navigation = document.querySelector('.nav')

hamburger.addEventListener('click', () =>{
    hamburgerMenu.addClass('active');
    navigation.classList.toggle('active')
})
