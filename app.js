let header = document.querySelector('.main-nav');
let leftNav = document.querySelector('.left-nav');
let jakob = document.querySelector('.jakob');
let rightNav = document.querySelector('.right-nav');
let link1 = document.querySelector('.link1');
let link2 = document.querySelector('.link2');
let link3 = document.querySelector('.link3');
let link4 = document.querySelector('.link4');

document.addEventListener('scroll', function () {
  let scrollPos = window.pageYOffset;

  if (scrollPos > 200) {
    header.style.backgroundColor = "white";
    header.style.transition = "all .5s";
    jakob.style.color = "black";
    leftNav.style.color = "black";
    leftNav.style.paddingRight = "80px";
    leftNav.style.transition = "all .5s";
    rightNav.style.transition = "all .5s";
    rightNav.style.paddingLeft = "100px";
    link1.style.color = "black";
    link2.style.color = "black";
    link3.style.color = "black";
    link4.style.color = "black";
    link1.style.transition = "all .5s";
    link2.style.transition = "all .5s";
    link3.style.transition = "all .5s";
    link4.style.transition = "all .5s";
  } else {
    header.style.backgroundColor = "transparent";
    jakob.style.color = "white";
    leftNav.style.color = "white";
    leftNav.style.paddingRight = "50px";
    rightNav.style.paddingLeft = "50px";
    link1.style.color = "white";
    link2.style.color = "white";
    link3.style.color = "white";
    link4.style.color = "white";
  }
});

//Previous Work Filter
var filterTabs = document.querySelectorAll('.link-nav ul li');
var all = document.querySelectorAll('.all');
var musics = document.querySelectorAll('.music');
var films = document.querySelectorAll('.film');
var lives = document.querySelectorAll('.live');

filterTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    filterTabs.forEach((tab) => {
      tab.classList.remove("active");
    })
    tab.classList.add("active");

    var tabval = tab.getAttribute("data-tabs");

    all.forEach((all) => {
      all.style.display = "none";
    })

    if (tabval == "music") {
      musics.forEach((music) => {
        music.style.display = "block";
      })
    } else if (tabval == "film") {
      films.forEach((film) => {
        film.style.display = "block";
      })
    } else if (tabval == "live") {
      lives.forEach((live) => {
        live.style.display = "block";
      })
    } else {
      all.forEach((all) => {
        all.style.display = "block";
      })
    }

  })
})