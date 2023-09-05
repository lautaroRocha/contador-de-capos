//este es un ejemplo
let tolerance = true;
const result = document.querySelector('#result')
let amountOfBoludos = 0;
const btn = document.querySelector('#counter-btn')

const checkTolerance = () => {
  if(amountOfBoludos > 20){
    console.log('enough')
    tolerance = false
    }
    
}

const exerciseTolerance = () => {
    let quote = `Hoy atendí ${amountOfBoludos}`;
    result.textContent = quote;
}
  
const chooseViolence = () => {
  const p = document.querySelector('p')
  p.textContent = '¡AAAAAAAAAH! NO AGUANTO MÁS!';
  result.textContent = "NO AGUANTO MÁS"
}
  
const actAccordingly = () => {
    if(tolerance){
        exerciseTolerance();
    }else{  
        chooseViolence();
    }   
}
  
const addOneBoludo = () => {
    amountOfBoludos++;
    checkTolerance();
    actAccordingly();
}

btn.onclick = addOneBoludo;














