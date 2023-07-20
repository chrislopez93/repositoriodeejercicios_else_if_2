function action(){
    const pesovar = parseFloat(document.querySelector('.peso').value);
    const alturavar = parseFloat(document.querySelector('.altura').value);
    const imc = pesovar/(alturavar * alturavar);
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