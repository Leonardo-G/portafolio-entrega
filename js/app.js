const plusButton = document.querySelectorAll(".course__plus");
const info = document.querySelectorAll(".line");
const course = document.querySelectorAll(".infoCourse");
const button = document.querySelector(".nav__button");
const navResponsive = document.querySelector("#nav-responsive");
const body = document.querySelector("body");
const linksResponsive = document.querySelectorAll(".responsive--links a");

const handleClickPlusButton = (e) => {
    const indexButton = e.target.dataset.button;

    const lineCourse = info[indexButton];
    const infoCourse = course[indexButton];

    e.target.classList.toggle("rotate");
    lineCourse.classList.toggle("line--activated");
    infoCourse.classList.toggle("infoCourse--activated");
}

const handleNavResponsive = () => {
    navResponsive.classList.toggle("responsive--actived");
    body.classList.toggle("body");
}

const handleHiddenNav = () => {
    navResponsive.classList.toggle("responsive--actived");
    body.classList.toggle("body");
}

plusButton.forEach( p => {
    p.addEventListener( "click", handleClickPlusButton );
} )

linksResponsive.forEach( l => {
    l.addEventListener( "click", handleHiddenNav );
})
button.addEventListener( "click", handleNavResponsive );
