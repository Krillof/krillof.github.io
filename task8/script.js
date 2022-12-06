
function changePopupHiddenState(isHidden){
    var popup_background = document.getElementById("popup_background");
    popup_background.hidden = isHidden;
}

function startPopup(e){
    e.preventDefault();
    changePopupHiddenState(false);
    
    window.history.forward();
}

function closePopup(e){
    e.preventDefault();
    changePopupHiddenState(true);

    window.history.back();
}


function formSubmit(e){
    e.preventDefault();

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://formcarry.com/s/iiSFErjCD', false);
    xhr.send();

    if (xhr.status == 200){
        console.log("success")
    } else {
        console.log("failure")
    }
}

function nameInputSaving(){
    var nameInput = document.getElementById("nameInput");
    localStorage['nameinputdata'] = nameInput.value;
}

function emailInputSaving(){
    var emailInput = document.getElementById("emailInput");
    localStorage['emailinputdata'] = emailInput.value;
}

function textInputSaving(){
    var textInput = document.getElementById("textInput");
    localStorage['textinputdata'] = textInput.value;
}

function personalDataCheckboxSaving(){
    var personalDataCheckbox = document.getElementById("personalDataCheckbox");
    localStorage['personaldatacheckboxdata'] = personalDataCheckbox.checked;
}


function main(){
    
    window.history.replaceState({page:"nopopup"}, "", "nopopup");
    window.history.pushState({page:"popup"}, "", "popup");


    var justbutton = document.getElementById("justbutton");
    justbutton.onclick = startPopup;
    var closebutton = document.getElementById("closebutton");
    closebutton.onclick = closePopup;
    var justform = document.getElementById("justform");
    justform.onsubmit = formSubmit;

    var nameInput = document.getElementById("nameInput");
    var emailInput = document.getElementById("emailInput");
    var textInput = document.getElementById("textInput");
    var personalDataCheckbox = document.getElementById("personalDataCheckbox");

    if (localStorage['nameinputdata']){
        nameInput.value = localStorage['nameinputdata'];
    }

    if (localStorage['emailinputdata']){
        emailInput.value = localStorage['emailinputdata'];
    }

    if (localStorage['textinputdata']){
        textInput.value = localStorage['textinputdata'];
    }

    if (localStorage['personaldatacheckboxdata']){
        personalDataCheckbox.checked = localStorage['personaldatacheckboxdata'] == 'true';
    }

    nameInput.onkeyup = nameInputSaving;
    emailInput.onkeyup = emailInputSaving;
    textInput.onkeyup = textInputSaving;
    personalDataCheckbox.onclick = personalDataCheckboxSaving;
}

function changeState(){
    if (history.state.page == "nopopup"){
        changePopupHiddenState(true);
    }
}

document.addEventListener("DOMContentLoaded", main);
window.addEventListener("onpopstate", changeState)