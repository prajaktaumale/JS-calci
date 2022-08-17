function display(value){
    document.getElementById('textarea').value+=value //+ is used to display previous input also
}
function calculate(){
    var value = document.getElementById('textarea').value
    var answer = eval(value)  //evalute
    document.getElementById('textarea').value = answer
}
function clr(){
    document.getElementById('textarea').value=''
}