function changeColor(item){
    var color = item.getAttribute('value');
    console.log(item.parentElement.previousElementSibling );
    var buttonColor = item.parentElement.previousElementSibling;
    // color
    buttonColor.style.backgroundColor = `${color}`;
    if(color == "white")
        buttonColor.style.color = "black";
    else buttonColor.style.color = "white";
    // text
    buttonColor.querySelector('span').innerText = item.innerText ;

}