let userinput = document.querySelector("[name='username']");
let passinput = document.querySelector(" [name='pass']");
let j = 0;
document.forms[0].onsubmit = function(oma)

{
    let namevalid = false;
    let passvalid = false;

    if (userinput.value !== "" && userinput.value.length <= 12) {


        namevalid = true;
    }
    if (passinput.value !== "" && passinput.value.length <= 15) {

        passvalid = true;
    }
    if (passvalid === false || namevalid === false) {
        alert("un correct please enter the correct data");
        oma.preventdefault();
    }

};