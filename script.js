function action(){
    const pesovar = document.querySelector('.peso').value;
    const alturavar = document.querySelector('.altura').value;
    const imc = (pesovar/(alturavar * alturavar))*10000;
    pvar = document.querySelector('.p');
    pvar.innerHTML = imc;
    if (imc < 18.5){
        tipovar = document.querySelector('.tipo');
        tipovar.innerHTML= "Tiene un IMC anormal";
    }else if(imc <= 25){
        tipovar = document.querySelector('.tipo');
        tipovar.innerHTML= "Tiene un IMC normal";
    } else {
        tipovar = document.querySelector('.tipo');
        tipovar.innerHTML= "Tiene un IMC anormal";
    }
}