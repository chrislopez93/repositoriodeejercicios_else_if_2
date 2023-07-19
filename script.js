function action(){
    const pesovar = document.querySelector('.peso').value;
    const alturavar = document.querySelector('.altura').value;
    const imc = (pesovar/(alturavar * alturavar))*10000;
    pvar = document.querySelector('.p');
    pvar.innerHTML = imc;
}