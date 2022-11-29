function isNumberString(n){
    return !isNaN(n);
}

function hide_all() {
    var on_bread_div = document.getElementById("on_bread_div");
    var on_coffee_div = document.getElementById("on_coffee_div");

    on_bread_div.hidden = true;
    on_coffee_div.hidden = true;
}

function on_bread() {
    var on_bread_div = document.getElementById("on_bread_div");
    var bread_type1_rb = document.getElementById("bread_type1_rb");
    var bread_type2_rb = document.getElementById("bread_type2_rb");
    var add_price = 0;

    on_bread_div.hidden = false;

    if (bread_type1_rb.checked) {
        add_price = bread_type1_rb.dataset.addprice;
    }
    if (bread_type2_rb.checked) {
        add_price = bread_type2_rb.dataset.addprice;
    }
    return add_price;
}

function on_coffee() {
    var on_coffee_div = document.getElementById("on_coffee_div");
    var with_sugar_checkbox = document.getElementById("with_sugar_checkbox");

    on_coffee_div.hidden = false;
    if (with_sugar_checkbox.checked) {
        return with_sugar_checkbox.dataset.addprice;
    } else {
        return 0;
    }
}

function changed_amount_recount(price, add_price) {
    var amount_input = document.getElementById("amount_input");
    var answer_element = document.getElementById("answer_element");

    var check_is_number = /^[0-9]+$/;
    var wrong_data = "Неправильный формат ввода! Вводить только цифры!";
    var not_negative = "Значения должны быть положительными!";
    
    var check1 = isNumberString(amount_input.value);
    var check2 = isNumberString(price);
    var check3 = isNumberString(add_price);

    var ans = 0;
    var a;
    var b;
    var c;

    if (check1 && check2 && check3) {
        a = Number(price);
        b = Number(add_price);
        c = Number(amount_input.value);
        if (a >= 0 && b >= 0 && c >= 0){
            ans = ((a + b) * c);
            answer_element.innerText = "Ответ: " + ans;
        } else {
            answer_element.innerText = not_negative;
        }
    } else {
        answer_element.innerText = wrong_data;
    }
}


function changed_select() {
    var product_select = document.getElementById("product_select");
    var selected = product_select.options[product_select.selectedIndex];
    hide_all();

    switch (product_select.value) {
    case "bread":
        changed_amount_recount(selected.dataset.price, on_bread());
        break;
    case "coffee":
        changed_amount_recount(selected.dataset.price, on_coffee());
        break;
    case "random_book":
        changed_amount_recount(selected.dataset.price, 0);
        break;
    }
}

function changed_amount() {
    changed_select();
}

function main() {
    var amount_input = document.getElementById("amount_input");
    var product_select = document.getElementById("product_select");
    var bread_type1_rb = document.getElementById("bread_type1_rb");
    var bread_type2_rb = document.getElementById("bread_type2_rb");
    var on_coffee_div = document.getElementById("on_coffee_div");

    amount_input.addEventListener("keyup", changed_amount);
    product_select.addEventListener("change", changed_select);
    bread_type1_rb.addEventListener("change", changed_select);
    bread_type2_rb.addEventListener("change", changed_select);
    on_coffee_div.addEventListener("change", changed_select);
}

document.addEventListener("DOMContentLoaded", main);
