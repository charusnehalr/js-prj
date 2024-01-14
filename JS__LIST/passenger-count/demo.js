let countEl = document.getElementById("count-el")
let count = 0
function increment(){
  count = count+1
  countEl.innerText = count
}

let saveEl = document.getElementById("save-el")
 function save(){
    let ppl = count + '-'
    saveEl.textContent += ppl
    count = 0
    countEl.textContent = count
 }

let welcomeEl = document.getElementById("welcome-el")
let name= 'charu'
let greet= ' Hello gurl,'
welcomeEl.textContent = name +greet




