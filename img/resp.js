burger = document.querySelector('.burger')
navbar =document.querySelector('.navbar')
navlist =document.querySelector('.nav-list')
rightNav =document.querySelector('.rightNav')


burger.addEventListener('click',()=>{
  rightNav.classlist.toggle('v-class-resp');
  navlist.classlist.toggle('v-class-resp');
  navbar.classlist.toggle('h-nav-resp');
})