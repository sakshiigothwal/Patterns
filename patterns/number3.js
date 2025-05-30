for (let i = 1; i <= 5; i++) {
    let num = "";

    for (let j = 1; j <= 5 - i; j++) {
        num += "  ";
    }

    for (let k = 1; k <= i; k++) {
        num += k + " ";
    }

    for (let k = i - 1; k >= 1; k--) {
        num += k + " ";
    }

    console.log(num);
}
