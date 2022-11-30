var contador = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    proxima_imagem();
}, 7000)

function proxima_imagem(){
    contador++;
    if(contador > 3){
        contador = 1;
    }

    document.getElementById("radio" + contador).checked = true;
    
}