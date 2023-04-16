function calculate() {
    let totalMoney = document.getElementById("totalMoney").value;
    let zakatMinimum = (totalMoney * 0.025).toFixed(2);
    if (zakatMinimum <= 30) {
        document.getElementById("zakatMinimum").innerHTML = zakatMinimum;
        document.getElementById("myAlert").style.display = "block";
    } else {
        document.getElementById("myAlert").style.display = "none";
        document.getElementById("zakatMinimum").innerHTML = zakatMinimum;
    }
document.getElementById("result").style.display = "block";
}
