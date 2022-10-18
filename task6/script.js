function hide_all(){
    var on_bread_div = document.getElementById("on_bread_div");
    var on_coffee_div = document.getElementById("on_coffee_div");

    on_bread_div.hidden = true;
    on_coffee_div.hidden = true;
}

function on_bread(){
    var on_bread_div = document.getElementById("on_bread_div");
    on_bread_div.hidden = false;

    var bread_type1_rb = document.getElementById("bread_type1_rb");
    var bread_type2_rb = document.getElementById("bread_type2_rb");
    var bread_types = [bread_type1_rb, bread_type2_rb];

    var add_price = 0;

    for (type of bread_types){
        if (type.checked){
            add_price = type.dataset.addprice;
        }
    }
    
    return add_price;
}

function on_coffee(){
    var on_coffee_div = document.getElementById("on_coffee_div");
    on_coffee_div.hidden = false;

    var with_sugar_checkbox = document.getElementById("with_sugar_checkbox");
    
    if (with_sugar_checkbox.checked){
        return with_sugar_checkbox.dataset.addprice;
    } else {
        return 0;
    }
}

function changed_amount_recount(price, add_price){
    var amount_input = document.getElementById("amount_input");
    var answer_element = document.getElementById("answer_element");

    var check_is_number = /^[0-9]+$/;
    
    var wrong_data = "Неправильный формат ввода! Вводить только цифры!";

    var check1 = check_is_number.test(amount_input.value);
    var check2 = check_is_number.test(price);
    var check3 = check_is_number.test(add_price);

    var ans = 0;

    if (check1 && check2 && check3){
        ans = ((Number(price) + Number(add_price)) * Number(amount_input.value));
        answer_element.innerText = "Ответ: " + ans;
    } else {
        answer_element.innerText = wrong_data;
    }
}


function changed_select(){
    var product_select = document.getElementById("product_select");
    var selected = product_select.options[product_select.selectedIndex];
    hide_all();

    switch (product_select.value){
        case "random_book":
            changed_amount_recount(selected.dataset.price, 0);
        break;

        case "bread":
            changed_amount_recount(selected.dataset.price, on_bread());
        break;
        
        case "coffee":
            changed_amount_recount(selected.dataset.price, on_coffee());
        break;
    }
    
}

function changed_amount() {
    changed_select();
}

function main() {
    var amount_input = document.getElementById("amount_input");
    amount_input.addEventListener("keyup", changed_amount);

    var product_select = document.getElementById("product_select");
    product_select.addEventListener("change", changed_select);

    var bread_type1_rb = document.getElementById("bread_type1_rb");
    var bread_type2_rb = document.getElementById("bread_type2_rb");
    var on_coffee_div = document.getElementById("on_coffee_div");
    bread_type1_rb.addEventListener("change", changed_select);
    bread_type2_rb.addEventListener("change", changed_select);
    on_coffee_div.addEventListener("change", changed_select);
}

document.addEventListener("DOMContentLoaded", main);