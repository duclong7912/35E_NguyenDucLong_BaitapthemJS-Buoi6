function checkSNT(n) {
    if (n <= 1) {
        return false;
    }
        
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }

    return true;
}

function baitap1() {
    var n = +document.getElementById("soBatKy").value;
    var result = "";
    for (var i = 2; i <= n; i++) {
        if (checkSNT(i)) {
            result += i + ' ';
        }
    }
    output = 'Số nguyên tố: ' + result;
    document.getElementById("showSo").innerHTML = output;
}
