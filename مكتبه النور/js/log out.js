alert("welcome sign-up here please");


let userinput = document.querySelector("[name='username']");
let emailinput = document.querySelector(" [name='email']");
let passinput = document.querySelector(" [name='pass']");
let countryinput = document.querySelector(" [name='country']");

document.forms[0].onsubmit = function(oma)

{
    let namevalid = false;
    let emailvalid = false;
    let passvalid = false;
    let countryvalid = false;

    if (userinput.value !== "" && userinput.value.length <= 12) {


        namevalid = true;
    }
    if (passinput.value !== "" && passinput.value.length <= 15) {

        passvalid = true;
    }
    if (countryinput.value !== "") {

        countryvalid = true;
    }
    if (emailinput.value !== "") {

        emailvalid = true;
    }

    if (passvalid === false || namevalid === false || emailvalid === false || countryvalid === false) {
        alert("un correct");

        oma.preventdefault();
    }




};