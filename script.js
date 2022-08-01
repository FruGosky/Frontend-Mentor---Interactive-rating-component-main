function button1() {
    document.getElementById("1").className = "button2"; // 1
    document.getElementById("2").className = "button1";
    document.getElementById("3").className = "button1";
    document.getElementById("4").className = "button1";
    document.getElementById("5").className = "button1";
    return z = 1;
}
function button2() {
    document.getElementById("1").className = "button1";
    document.getElementById("2").className = "button2"; // 2
    document.getElementById("3").className = "button1";
    document.getElementById("4").className = "button1";
    document.getElementById("5").className = "button1";
    return z = 2;
}
function button3() {
    document.getElementById("1").className = "button1";
    document.getElementById("2").className = "button1";
    document.getElementById("3").className = "button2"; // 3
    document.getElementById("4").className = "button1";
    document.getElementById("5").className = "button1";
    return z = 3;
}
function button4() {
    document.getElementById("1").className = "button1";
    document.getElementById("2").className = "button1";
    document.getElementById("3").className = "button1";
    document.getElementById("4").className = "button1";
    document.getElementById("4").className = "button2"; // 4
    document.getElementById("5").className = "button1";
    return z = 4;
}
function button5() {
    document.getElementById("1").className = "button1";
    document.getElementById("2").className = "button1";
    document.getElementById("3").className = "button1";
    document.getElementById("4").className = "button1";
    document.getElementById("5").className = "button2"; // 5
    return z = 5;
}

function imgChange() {
    document.getElementsByClassName("star")[0].className = "star1";
    document.getElementById("star").src = "./images/illustration-thank-you.svg";
    document.getElementById("star").alt = "illustration-thank-you.svg";
    document.getElementById("star").id = "star1";
    document.getElementsByClassName("text-pos1")[0].className = "text text-pos2";
    document.getElementById("title").innerHTML = "Thank you!";
    document.getElementById("text").innerHTML = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";
    let selectValue = "You selected " + z + " out of 5";
    document.getElementById("answer").innerHTML = selectValue;
    document.getElementsByClassName("buttonMenu")[0].innerHTML = "";
    document.getElementsByClassName("buttonSubmitMenu")[0].innerHTML = "";
    console.log(z);
}