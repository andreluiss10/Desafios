var antes;
var atual;
var depois;
var fotos = 0;
var n = input();
var i = 0;
while (i < n){
    depois = input();
    if (depois > atual && depois > antes){
        fotos = fotos + 1;
    }
    antes = atual;
    atual = depois;
    i = i +1;
}

output(fotos);