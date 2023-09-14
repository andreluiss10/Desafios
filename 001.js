var x;
var y = 1;
var a;
x = input();
while(x !==0){
    if (x === 9 || x ===10){
        x = input();
    } else {
    if( x % 2 ===0){
        a = 2;
    } else {
        a = 3
    }
    x = input();
    if(x % 2 === 0 && a === 3 && x === 0){
        y = 0;
    } else if(a === 3) {
        y = 0;
    }
}
}

output(y);