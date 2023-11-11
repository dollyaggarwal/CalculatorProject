// fetching input field and result field using it's ID's
const input=document.getElementById('number-input');
const result=document.getElementById('result');

//function to perform click event on number and operators buttons and calculate results

function handleClickButton(el){
    // console.log(el.innerText);
    const exp=`${input.value}${el.innerText}`;
    input.value=exp;

    if(["+","-","*","/"].includes(el.innerText))
    return;
    result.value=eval(exp); //evaluates expression and executes it
}
//function to perform click event on clear button and clears both input and result fields
function reset(){
    input.value="";
    result.value="";
}