

function main(){
    var make_answer_button = document.getElementById("make_answer_button");

    make_answer_button.addEventListener("click", ()=>{
        var price_input = document.getElementById("price_input");
        var amount_input =  document.getElementById("amount_input");
        var answer_element = document.getElementById("answer_element");

        var check_is_number = /^[0-9]+$/;

        if (check_is_number.test(price_input.value) 
            && check_is_number.test(amount_input.value)){
                var a = Number(price_input.value);
                var b = Number(amount_input.value);
                answer_element.innerText = "Ответ: " + (a + b);
            } else {
                alert("Неправильный формат ввода! Вводить только цифры!");
            }
    })

}

document.addEventListener("DOMContentLoaded", main);