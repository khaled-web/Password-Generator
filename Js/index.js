//variables
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const upperCaseEl = document.getElementById('uppercase');
const lowerCaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generate = document.getElementById('generate');
const clipboard = document.getElementById('clipboard')

//EventListener
generate.addEventListener('click', () => {
 const length = +lengthEl.value;
 const hasLower = lowerCaseEl.checked;
 const hasUpper = upperCaseEl.checked;
 const hasNumber = numbersEl.checked;
 const hasSymbol = symbolsEl.checked;
 resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})



//GetRandomLower_Function
function getRandomLower() {
 return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//GetRandomUpper_Function
function getRandomUpper() {
 return String.fromCharCode(Math.floor(Math.random() * 26) + 64);
}

//GetRandomNumbers_Function
function getRandomNumbers() {
 return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

//GetRandomSymbols_Function
function getRandomSymbols() {
 const symbols = '!@#$%^&*(){}[]=<>/,.'
 return symbols[Math.floor(Math.random() * symbols.length)]
}

//Store RandomFunctions
const randomFunction = {
 lower: getRandomLower,
 upper: getRandomUpper,
 number: getRandomNumbers,
 symbol: getRandomSymbols
}

//generatePassword
function generatePassword(lower, upper, number, symbol, length) {
 let generatedPassword = '';
 const typeCount = lower + upper + number + symbol;
 const typesArr = [{
  lower
 }, {
  upper
 }, {
  number
 }, {
  symbol
 }].filter(item => Object.values(item)[0])

 if (typeCount === 0) {
  return ''
 }

 for (let i = 0; i < length; i += typeCount) {
  typesArr.forEach(type => {
   const funcName = Object.keys(type)[0];
   generatedPassword += randomFunction[funcName]()
  })
 }

 const finalPassword = generatedPassword.slice(0, length);
 return finalPassword;
}