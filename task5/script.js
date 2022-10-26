function isNumberString(n){
    return !isNaN(n);
}

function answer_click_event() {
    var price_input = document.getElementById("price_input");
    var amount_input = document.getElementById("amount_input");
    var answer_element = document.getElementById("answer_element");
    var a = 0;
    var b = 0;
    //var check_is_number = /^[0-9]+$/;

    
    //var check_a = check_is_number.test(price_input.value);
    //var check_b = check_is_number.test(amount_input.value);
    var check_a = isNumberString(price_input.value);
    var check_b = isNumberString(amount_input.value);
    var wrong_data = "Неправильный формат ввода! Вводить только цифры!";
    var not_negative = "Значения должны быть положительными!";

    var ans = 0;

    if (check_a && check_b) {
        a = Number(price_input.value);
        b = Number(amount_input.value);
        if (a >= 0 && b >= 0){
            ans = (a + b);
            answer_element.innerText = "Ответ: " + ans;
        } else {
            answer_element.innerText = not_negative;
        }
        
    } else {
        answer_element.innerText = wrong_data;
    }
}

function main() {
    var make_answer_button = document.getElementById("make_answer_button");
    make_answer_button.addEventListener("click", answer_click_event);

}

document.addEventListener("DOMContentLoaded", main);
