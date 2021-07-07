const navBtn = document.getElementsByClassName("checkbtn")[0];
const navrLi = document.getElementsByClassName("nav-links");
navBtn.addEventListener('click',function() {
    for(let i=0 ; i<navrLi.length ; i++)
    navrLi[i].classList.toggle('activited')
});