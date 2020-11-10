var student = {
    name="",
    type = "student"
};

document.addEventListener('DomContentLoaded', contentLoaded);

function contentLoaded(event){
    document.getElementById('fullName').addEventListener("keyup", keyUp);
}

function keyUp(event){
    calculateNumericOutput();
}

function calculateNumericOutput(){

    // rubish code.
    student.name = document.getElementById('name').value;

    for (var i=0 ; i< student.name.length;i++){
        totalNameValue += student.name.charCodeAt(i);
    }

    var output = "Valor do nome = " + totalNameValue;
    document.getElementById('output').innetText = output;
}