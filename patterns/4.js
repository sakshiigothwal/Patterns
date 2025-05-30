var i,j,k;
var l=1;
for(i=1; i<=5; i++){
    var star= "";
    for(j=1; j<=5-i; j++){
        star+= "  ";
    }
    for(k=1;k<=l;k++){
        star+= "* ";
    }
    l = l+2;
    console.log(star);
}
let m = 9;

for (i = 1; i <= 5; i++) {
    let star= "";

    for (j = 1; j <= i; j++) {
        star+= "  ";
    }
    
    for (k = 2; k <= m; k++) {
        star+= "* ";
    }
    
    m -= 2;
    console.log(star);
}
