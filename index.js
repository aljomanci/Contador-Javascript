let buttonValue ;

decreaseNumber = () => {
    buttonValue = parseInt ( document.getElementById("contar").innerHTML) - 1 ;
    document.getElementById("contar").innerHTML = buttonValue ;
    
}
increaseNumber = () => {
    buttonValue = parseInt ( document.getElementById("contar").innerHTML) + 1 ; 
    document.getElementById("contar").innerHTML = buttonValue ;
    
}

resetNumber = () => {
    document.getElementById("contar").innerHTML = 0 ;
    
}