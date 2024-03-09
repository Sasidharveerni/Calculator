
    
const val = document.getElementsByClassName("btn")
// console.log(val)



function showValues(event) {
    // console.log(this.innerText)
    const value = this.innerText;
    const display = document.getElementsByClassName("child-1")[0]; // Access the display element
    
    var elements = document.getElementsByClassName("child-1");
    if(display.innerText.length > 32){
        for (var i = 0; i < elements.length; i++) {
                elements[i].style.fontSize = "1.75em";
            }

    }

    // Check if the clicked button is the RESET button
    if (this.id === 'reset') {
        display.innerHTML = ""; // Clear the display
    } 
      else if (this.id === 'equal') {
        // console.log(display.innerText);
        try {
            // console.log(display.innerText.length);
            // console.log(display.innerText);
            const calculation = display.innerText.replace(/[^-()\d/*+.]/g, ''); // Basic cleanup to ensure only valid characters are processed
            const res = eval(calculation);
            display.innerHTML = `<span style='color: #fff;'>${res}</span>`;
            
        } catch (error) {
            display.innerHTML = `<span style='color: #fff;'>Error</span>`; // Display error message or handle errors as needed
        }
    } 

    else if(this.id === 'del') {
        let currentText = display.innerText; // Get the current text
        // Remove the last character from the string
        let newText = currentText.slice(0, -1);
        // Update the display with the new string
        display.innerHTML = `<span style='color: #fff;'>${newText}</span>`;
    }
     
    else{

        display.innerHTML += `<span style='color: #fff;'> ${value} </span>`;
    }

    

}





for(var i = 0; i < val.length; i++) {
    val[i].addEventListener("click", showValues)
}