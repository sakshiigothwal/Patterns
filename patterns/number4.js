let count = 1;
for (let i = 1; i <= 5; i++) {
    let num = "";
    for (let j = 1; j <= i; j++) {
        num += count + " ";
        count++;
    }
    console.log(num);
}
