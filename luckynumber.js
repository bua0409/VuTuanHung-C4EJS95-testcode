const numberFillOut = document.getElementById("number");
const button = document.getElementById("btn")
let arrNumber = Math.floor(Math.random() * 10) + 1;
let countSubmit = 0
while (0<= numberFillOut.value && numberFillOut.value<= 10){
button.addEventListener('click', function() {
    countSubmit += 1;
    if (countSubmit == 3) {
        alert ('it has only 3 times for you. Thank you')
    }
    if (0<= numberFillOut.value && numberFillOut.value<= 10){
    if (numberFillOut.value !== arrNumber) {
        alert("Wrong number. Try agin"); }
    else if (numberFillOut.value === arrNumber) {
        alert("Congratulations"); }
}
})
};
while ( numberFillOut.value<=0 && numberFillOut.value >= 10) {
    button.addEventListener('click', function() {
        alert("please fill a number from 0 to 10")
        countSubmit += 1;
        if (countSubmit == 3) {
            alert ('it has only 3 times for you. Thank you')
        }
    
    }   
    )}