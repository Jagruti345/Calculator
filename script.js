function clearWholeDispaly(){
    document.getElementById('ans').value = '';
}

function deleteLastVal(){
    let val=document.getElementById('ans');
    val.value=val.value.slice(0,-1);
}

function appendDisplay(value){
    document.getElementById('ans').value += value;
}

function calculateResult(){
    let val = document.getElementById('ans');
    try{
        val.value = eval(val.value);
    }catch(error){
        val.value = 'Error';
    }
}

