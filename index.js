var clicked = 0;
var text1;

document.querySelector("#myButton").onclick = function(){

    const p = document.querySelector('#myP');

    if (clicked % 2 == 0) {
        text1 = "TESTING";
    }else{
        text1 = "Clicked again?";
    }

    if (clicked == 8){
        text1 = "How many times you wanna click?";
        clicked = 0;
    }

    p.innerText = text1
    clicked++;
    console.log (clicked);

}