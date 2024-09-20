const display=document.getElementById("display")

function doCala(input){
    display.value += input;
}

function equOpr(){
    try{
        display.value=eval(display.value);
    }

    catch(error)
    {
        display.value="error";
    }
}

function clearScr(){
  display.value="";
}