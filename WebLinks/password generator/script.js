let rangeBox = document.querySelector("#rangeBox");
let showsliderValue = document.querySelector("#showsliderValue");
let showinputResult = document.querySelector("#showinputResult");
let lowercase = document.querySelector("#lowercase");
let uppercase = document.querySelector("#uppercase");
let Symbols = document.querySelector("#Symbols");
let numbers = document.querySelector("#numbers");
let genbtn = document.querySelector("#genbtn");
let copyIcon = document.querySelector("#copyIcon");

// show slider value
showsliderValue.textContent = rangeBox.value;
rangeBox.addEventListener("input",()=>{
    showsliderValue.textContent = rangeBox.value;
})

genbtn.addEventListener("click",()=>{
    showinputResult.value = generatePassword();
})

// generate password function
let upperChar = "ABCDEGHIHKLMOPQRSTUVWXYZ"
    let lowerChar = "abcdefghijklmnopqrstuvwxyz"
    let numChar = "0123456789"
    let symbolChar = "!@#$%^&*()_+=-{}[]|;':\",.<>/?"
let generatePassword = ()=>{
    let genPass = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChar : "";
    allChars += uppercase.checked ? upperChar : "";
    allChars += numbers.checked ? numChar : "";
    allChars += Symbols.checked ? symbolChar : "";
   for(let i = 1; i<=rangeBox.value; i++){
    genPass += allChars.charAt(Math.floor(Math.random() * allChars.length))
   }
    /* genPass += allChars.charAt(Math.floor(Math.random() * allChars.length)) */
    return genPass;
}


copyIcon.addEventListener("click",()=>{
    if(showinputResult.value !== ""|| showinputResult.value>=1){
        navigator.clipboard.writeText(showinputResult.value);
        copyIcon.title = "Password copied"
    } else{
        copyIcon.title = "No password to copy"
    }
})