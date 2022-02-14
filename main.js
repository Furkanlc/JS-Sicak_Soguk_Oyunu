const guessBtn = document.getElementById("guessBtn");
const result = document.getElementById("result");
const restartBtn = document.getElementById("restartBtn");
const Guess = document.getElementById("guess");
const guessDiv = document.querySelector(".lastGuess");
const form = document.querySelector("form");

/* 1-100 arası sayı seçiyoruz  */
let number = Math.floor(Math.random() * 100);
let guessArray = [];


form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (Guess.value === "" || guessArray.includes(Guess.value)) {
        result.style.color = "tomato";
        result.textContent =guessArray.includes(Guess.value)? "Aynı Tahmin Girildi": "Lütfen Bir Sayı Giriniz";
        setTimeout(() => result.textContent = "", 2000);
    } else {
        console.log(Guess.value, number);
        result.style.color = "green";
        guessArray.push(Guess.value);
        let diff = Math.abs(Guess.value - number);
        printLastGuess();
        getDiff(diff);




    }

})
restartBtn.addEventListener("click", restart);

function getDiff(diff) {
    //tahminle numberi kıyaslama


    if (diff == 0) {
        result.textContent = "Doğru Tahmin Tebriklerr";
        restartBtn.style.display = "block";


    } else if (diff > 5) result.textContent = "Çok Sıcak";
    else if (diff < 15) result.textContent = "Ilık";
    else if (diff < 27) result.textContent = "Yaklaşıyorsun";
    else if (diff < 40) result.textContent = "Soğuk az daha dene";
    else if (diff < 700) result.textContent = "Çok Soğuk oldu buralar";
    else result.textContent = "Burası Antarktika";







}

function printLastGuess() {
    //son tahminleri yazdır 

    let index = guessArray.length - 1;
    let li = document.createElement("li");
    li.textContent = guessArray[index];
    guessDiv.appendChild(li);
}


function restart() {
    //oyunu yeniden başlat
    restartBtn.style.display="none";
    result.textContent = "";
    guessDiv.textContent = "";
    form.reset();
    number = Math.floor(Math.random() * 100);



}