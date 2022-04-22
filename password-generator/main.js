const charUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const charLowercase = "abcdefghijklmnopqrstuvwxyz"
const charactersNumbers = "0123456789";
const charctersSymbols = "$%&*()-'@£~#?!=+";

function generatePassword(){
    let password = ""
    let characters = ""
    let passwordLength = parseInt(document.getElementById("passwordLength").innerHTML);

    
    if(document.getElementById("incNumbers").checked){
        characters +=charactersNumbers
    }

    if(document.getElementById("incSymbols").checked){
        characters +=charctersSymbols
    }

    if(document.getElementById("incLowercase").checked){
        characters +=charLowercase
    }

    if(document.getElementById("incUppercase").checked){
        characters +=charUppercase
    }

    if(characters.length>0){
        for ( let i = 0; i <= passwordLength; i++ ) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
    }else{
        password += "Please select at least one criteria"    
    }

    

    document.getElementById("securePassword").innerHTML = password
}


