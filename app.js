// --------------------------------------------- Password Generator Project -----------------------------------------------


let slider = document.getElementById("lengthInput");

let display = document.getElementById("lengthValue");

slider.addEventListener("input", function (){
    display.innerText = slider.value;
})




function GeneratePassword() {
    
    let slider0 = document.getElementById("lengthInput").value;

    let upper0 = document.getElementById("upperCase").checked;

    let lower0 = document.getElementById("lowerCase").checked;

    let number0 = document.getElementById("number").checked;

    let symbol0 = document.getElementById("symbol").checked;

    
    
    let chars = "";
    
    
    
    
    let upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerSet = "abcdefghijklmnopqrstuvwxyz";
    let numberSet = "0123456789";
    let symbolSet = "!@#$%^&*()_+=?}|?:<>/";
    
    
    
    
    
    if (upper0) {
        chars += upperSet;
    }
    
    if (lower0) {
        chars += lowerSet;
    }
    
    if (number0) {
        chars += numberSet;
    }
    
    
    if (symbol0) {
        chars += symbolSet;
    }
    
    
    
    
    if (chars === "") {
        alert("Please select at least one character type!");
        return
    }




    let password1 = "";



    for (let i = 0; i < slider0; i++) {
        let randIndex = Math.floor(Math.random() * chars.length);
        password1 += chars[randIndex];
    }


    document.getElementById("passwordOutput").value = password1;
}


document.getElementById("CopyPassword").addEventListener("click", function() {
    
    let text = document.getElementById("passwordOutput").value;

    navigator.clipboard.writeText(text)
    .then(() => {
        alert("Copied Successfully!")
    })
    .catch(() => {
        alert("Copied Failed! Try Again")
    })
})