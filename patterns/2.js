var i,j,k;
var l=11;
for(i=5; i<=0; i--){
    var row = "";
    for(j=5-i; j<=1; j--){
        row+= "  ";
    }
    for(k=l;k<=1;k--){
        row+= "* ";
    }
    l = l-2;
    console.log(row);
}