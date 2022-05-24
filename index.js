const elForm = document.querySelector(".form");
const elSumma = document.getElementById("summa");
const elSelect = document.getElementById("select");
const elSom = document.getElementById("result");

const usd = 11102;
const eur = 11769;
const rubl = 188;
const dinor = 2944777

elForm.addEventListener("click", function(e){
    e.preventDefault();

    let inputValue = elSumma.value;

    if(elSelect.value === "usd"){
        elSom.value = inputValue * usd;
    } else if (elSelect.value === "eur"){
        elSom.value = inputValue * eur;
    } else if(elSelect.value === "rubl"){
        elSom.value = inputValue + rubl;
    } else if(elSelect.value === "dinor") {
        elSom.value = inputValue * dinor
    }

})