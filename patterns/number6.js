let a = 1;

for (let i = 1; i <= 5; i++) {
    let num = [];
    for (let j = 0; j < i; j++) {
        num.push(a);
        a++;
    }
    if (i % 2 === 0) {
        num.reverse();
    }
    let row = "";
    for (let k = 0; k < num.length; k++) {
        row += num[k] + " ";
    }

    console.log(row);
}
