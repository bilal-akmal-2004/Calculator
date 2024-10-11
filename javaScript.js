let inputBox = document.getElementsByClassName('input')[0]; 
function getValue(value){
      if(value=== "="){
              inputBox.innerText = eval(inputBox.innerText)
      }else if(value=== "AC"){
             inputBox.innerText = ""
       }else if(value=== "DEL"){
            inputBox.innerText = inputBox.innerText.slice(0,inputBox.innerText.length-1)
       } else{
        inputBox.innerText += value;
      }
}