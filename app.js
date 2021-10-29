const order_btn = document.querySelectorAll(".order-btn");
const options_form = document.querySelectorAll("option");
const quantity = document.querySelector("#num");

for(let i = 0; i < order_btn.length; i++){
    order_btn[i].addEventListener("click", scrollDown);
    order_btn[i].addEventListener("click", startForm);
}

function scrollDown(){
    window.scroll({
        top: 3540,
        left: 0,
        behavior: "smooth"
    })
}

let arrayOfPrices = [6.10, 6.30, 6.80, 5.30, 7.00, 6.50, 4.50, 2.50, 7.50]

const total_price_element = document.querySelector("#total-price");

let valueName = "Pepperoni Pizza"; 
let price = 6.30;
function startForm(e){
    let parent = e.target.parentElement;
    valueName = parent.children[1].innerHTML;
    //price = parent.children[3].innerHTML;

    for(let i = 0; i < options_form.length; i++){
        if(options_form[i].innerHTML == valueName){
            options_form[i].selected = "selected";
            price = arrayOfPrices[i];
        }
    }
    quantity.value = 1;
}

const add_btn = document.querySelector("#add-btn");

add_btn.addEventListener("click", validateInput);

function validateInput(){
    if(quantity.value == ""){
        alert("Please Enter Quantity!");
    } else{
        makeItem()
    }
}
let arrayOfItems = [];

const orders_container = document.querySelector("#orders-container")

let deleteBtn;
let total_price = 0;
let counter = 0;
function makeItem(){
    //let header = listItemHeader();

    let master_container = document.createElement("div");

    let paraValue = document.createElement("p");
    let node = document.createTextNode(valueName);
    paraValue.appendChild(node);
    paraValue.classList.add("list-item-header-child")

    let qValuePara = document.createElement("p");
    let qValueNode = document.createTextNode(quantity.value);
    qValuePara.appendChild(qValueNode);
    qValuePara.classList.add("list-item-header-child")

    let priceValuePara = document.createElement("p");
    let n = calculate().toFixed(2);
    total_price += parseFloat(n);
    total_price_element.innerHTML = "$" + total_price.toFixed(2);
    n.toString();
    let priceValueNode = document.createTextNode(n);
    priceValuePara.appendChild(priceValueNode);
    priceValuePara.classList.add("list-item-header-child")

    deleteBtn = document.createElement("button");
    let btnText = document.createTextNode("Delete");
    deleteBtn.appendChild(btnText);
    deleteBtn.classList.add("list-item-header-child")
    deleteBtn.classList.add("delete-btn")
    deleteBtn.addEventListener("click", deleteItem);

    let children = document.createElement("div");
    children.appendChild(paraValue);
    children.appendChild(qValuePara);
    children.appendChild(priceValuePara);
    children.appendChild(deleteBtn)
    children.classList.add("list-item-header")

    //master_container.appendChild(header);
    master_container.appendChild(children);
    master_container.classList.add("master")

    counter++;
    if(arrayOfItems.length <= 10){
        arrayOfItems.push(master_container);
    } else {
        alert("Shopping Cart Is Full!");
    }
    displayItems()
}

function calculate(){
    return price * quantity.value;
}

function displayItems(){
    for(let i = 0; i < arrayOfItems.length; i++){
        orders_container.appendChild(arrayOfItems[i]);
    }
}

function deleteItem(e){
    counter--;
    let parent = e.target.parentElement;
    let masterParent = parent.parentElement;
    for(let i = 0; i < arrayOfItems.length; i++){
        if(arrayOfItems[i] == masterParent){
            arrayOfItems[i].remove();
            arrayOfItems.splice(i, 1);
            if(arrayOfItems.length == 0){
                total_price = 0.00;
                total_price_element.innerHTML = "$" + total_price;
                counter = 0;
            }
        }
    }
    displayItems();
}

const delete_all = document.querySelector("#delete-all");
delete_all.addEventListener("click", deleteAllItems);

function deleteAllItems(){
    for(let i = 0; i < arrayOfItems.length; i++){
        arrayOfItems[i].remove();
    }
    arrayOfItems.length = 0; 
    total_price = 0.00;
    total_price_element.innerHTML = "$" + total_price;
    counter = 0;
}

// KAJ ŠE MORAM SPROGRAMIRATI?

/*
Če uporabnik takoj na začetku scrolla dol in izbere neko opcijo, se nameValue updata na to opcijo
*/