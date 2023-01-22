const plusButton = document.querySelectorAll(".course__plus");
const info = document.querySelectorAll(".line");
const course = document.querySelectorAll(".infoCourse");

const handleClickPlusButton = (e) => {
    const indexButton = e.target.dataset.button;

    const lineCourse = info[indexButton];
    const infoCourse = course[indexButton];

    e.target.classList.toggle("rotate");
    lineCourse.classList.toggle("line--activated");
    infoCourse.classList.toggle("infoCourse--activated");
}

plusButton.forEach( p => {
    p.addEventListener( "click", handleClickPlusButton );
} )
