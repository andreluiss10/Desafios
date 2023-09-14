var N1 = 4;
var N2 = 2;
var N3 = 1;
var N4= 4;
var N5 = 2;
var N6 = 2;
var N7 = 4;
var N8 = 3;
var N9 = 1;

var elemento1;
var elemento2;
var elemento3;

if (N1 !==4 && N2!==4 && N4!==4 && N5!==4 && N6!==4 && N8 !==4){
    elemento1 = 4;
} else if (N1 !==3 && N2!==3 && N4!==3 && N5!==3 && N6!==3 && N8 !==3) {
    elemento1 = 3;

} else if (N1 !==2 && N2!==2 && N4!==2 && N5!==2 && N6!==2 && N8 !==2) {
    elemento1 = 2;
} else {
    elemento1 = 1;
}


if (N3 !==4 && N5!==4 && N6!==4 && N7!==4){
    elemento2 = 4;
} else if (N3 !==3 && N5!==3 && N6!==3 && N7!==3) {
    elemento2 = 3;

} else if (N3 !==2 && N5!==2 && N6!==2 && N7!==2) {
    elemento2 = 2;
} else {
    elemento2 = 1;
}


if (N8 !==4 && N9!==4 && N4!==4 && elemento2!==4){
    elemento3 = 4;
} else if (N8 !==3 && N9!==3 && N4!==3  && elemento2!==3) {
    elemento3 = 3;

} else if (N8 !==2 && N9!==2 && N4!==2 && elemento2!==2) {
    elemento3 = 2;
} else {
    elemento3 = 1;
}

output(elemento1+elemento2+elemento3);













