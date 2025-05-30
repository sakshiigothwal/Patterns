let i, j, k;
let l = 9;

for (i = 1; i <= 5; i++) {
    let row = "";

    for (j = 1; j < i; j++) {
        row += "  ";
    }
    
    for (k = 1; k <= l; k++) {
        row += "* ";
    }
    
    l -= 2;
    console.log(row);
}
