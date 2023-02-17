document.querySelector(".rate-block").style.display = "none";
const stars = document.querySelectorAll(".stars a");
let c = document.querySelector("#btn-change");
function mode() {
    let element = document.body;
    element.classList.toggle("light-mode");
}

function dclick() {
    document.querySelector(".main-block").style.display = "none";
    document.querySelector(".rate-block").style.display = "block";
}





stars.forEach((star, clickI) => {


    star.addEventListener("click", () => {

        document.querySelector("#show").innerHTML = (clickI + 1);



    });

});


