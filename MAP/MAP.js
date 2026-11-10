document.getElementById("button").addEventListener("click", onclick)

function onclick () {
    let p = document.getElementById("loan").valueAsNumber
    let n = document.getElementById("year").valueAsNumber * 12
    let r = document.getElementById("rate").valueAsNumber / 12 / 100
    let A = p * r*(1+r)**n/((1+r)**n - 1)
    let totalPay = A * n
    let totalInt = totalPay - p
    let result = "The monthly payment is $" + A.toFixed(2)
                + ".<br>The total payment is $" + totalPay.toFixed(2)
                + ".<br>The total interest is $" + totalInt.toFixed(2) + "."
    document.getElementById("result").innerHTML = result
}