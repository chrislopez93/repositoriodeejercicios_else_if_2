function action(){
    const pesovar = document.querySelector('.peso').value;
    const alturavar = document.querySelector('.altura').value;
    const imc = (alturavar * alturavar)/ pesovar;
    pvar = document.querySelector('.p');
    pvar.innerHTML = imc;
}