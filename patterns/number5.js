let n = 5;

for (let i = 1; i <= n; i++) {
    let num = "";

    for (let j = 1; j <= n - i; j++) {
        num += "  ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
        num += j + " ";
    }

    console.log(num);
}

for (let i = n - 1; i >= 1; i--) {
    let num = "";

    for (let j = 1; j <= n - i; j++) {
        num += "  ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
        num += j + " ";
    }

    console.log(num);
}
