let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let displayValue="";
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText=e.target.innerText;
        console.log('button text is' , buttonText);
        if(buttonText =='x'){
            buttonText ='*';
            displayValue+=buttonText;
            screen.value=displayValue;
        }
        else if(buttonText=='='){
        screen.value=eval(displayValue);
        }
        else if(buttonText=='ac'){
            displayValue="";
            screen.value=displayValue;
        }
        else if(buttonText=='del'){
            screen.value=screen.value.slice(0,-1);
        }
        else if(buttonText=='%'){
            screen.value=eval(displayValue);
            }


        else{
            displayValue+=buttonText;
            screen.value=displayValue;
        }

    })
}