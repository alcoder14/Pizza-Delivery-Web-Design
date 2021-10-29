const pizzas_scroll = document.querySelector("#pizzas-scroll")
const special_offers_scroll = document.querySelector("#special-offers");
const delivery_scroll = document.querySelector("#delivery-scroll")
const contact_scroll = document.querySelector("#contact-scroll")
const about_us_scroll = document.querySelector("#about-us")
const order_now_scroll = document.querySelector("#order-now");



pizzas_scroll.addEventListener("click", ()=>{
    window.scroll({
        top: 773,
        left: 0,
        behavior: "smooth"
    })
    trigger()
});
special_offers_scroll.addEventListener("click", ()=>{
    window.scroll({
        top: 2562,
        left: 0,
        behavior: "smooth"
    })
    trigger3()
});
delivery_scroll.addEventListener("click", ()=>{
    window.scroll({
        top: 3400,
        left: 0,
        behavior: "smooth"
    })
});
contact_scroll.addEventListener("click", ()=>{
    window.scroll({
        top: 4500,
        left: 0,
        behavior: "smooth"
    })
});
about_us_scroll.addEventListener("click", ()=>{
    window.scroll({
        top: 5290,
        left: 0,
        behavior: "smooth"
    })
})
order_now_scroll.addEventListener("click", ()=>{
    window.scroll({
        top: 3500,
        left: 0,
        behavior: "smooth"
    })
})

const up_btn = document.querySelector("#up")

window.onscroll = function(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
        up_btn.style.display = "flex"
    } else{
        up_btn.style.display = "none"
    }
}

up_btn.addEventListener("click", ()=>{
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})

const boxes = document.querySelectorAll(".box");

function trigger(){
    for(let i = 0; i < 6; i++){
        boxes[i].classList.add("box-animation")
    }
}

function trigger3(){
    for(let i = 6; i < 9; i++){
        boxes[i].classList.add("box-animation")
    }
}

window.addEventListener("resize", ()=>{
    //console.log(window.innerWidth);
    if(window.innerWidth > 1000 && has_been_closed){
        navigation.style.display = "block";
    } else if(window.innerWidth < 1000 && has_been_closed){
        navigation.style.display = "none";
    }
})

window.addEventListener("resize", ()=>{
    console.log(window.innerWidth);
    if(window.innerWidth > 750){
        if(res_navbar_shown){
            hideNavbar()
        }
    }
})

window.onscroll = () => console.log(window.scrollY)

const burger_menu = document.querySelector("#burger-menu");
const lines = Array.from(document.querySelectorAll(".burger-line"));
const navigation_items = document.querySelector("#nav-container");
const bg_header = document.querySelector("header")
const body = document.querySelector("body");
const menu_options = document.querySelectorAll(".nav-item");

const list_items = document.querySelectorAll(".nav-item");
let has_been_closed = false; 

const upper_line = burger_menu.children[0];
console.log(upper_line)
const middle_line = burger_menu.children[1];
const lower_line = burger_menu.children[2];

burger_menu.addEventListener("click", manage_navbar)


let elem;
let res_navbar_shown = false;

let x_node;
function manage_navbar(){
    if(!res_navbar_shown){
        elem = document.createElement("div");
        elem.classList.add("responsive_navbar");
        appendToBody()
        body.insertBefore(elem, bg_header);
        for(let i = 0; i < lines.length; i++){
            lines[i].remove();
        }

        x_node = document.createTextNode("X");
        burger_menu.appendChild(x_node);
        res_navbar_shown = true;
    } else {
        hideNavbar()
    }
}

function hideNavbar(){
    x_node.remove()

    for(let i = 0; i < lines.length; i++){
        burger_menu.appendChild(lines[i]);
    }

    elem.remove()
    res_navbar_shown = false;
}

let linksArray = ["pizza", "#special-offer", "#delivery", "#contact", "#about-us"];

function appendToBody(){
    console.log(list_items.length)
    for(let i = 0; i < list_items.length; i++){

        let link = document.createElement("a");
        link.href = linksArray[i];
        
        console.log(link);
        link.addEventListener("click", ()=>{
            hideNavbar();
        })

        let newButton = document.createElement("div")
        link.classList.add("list-item-responsive")
        let textNode = document.createTextNode(list_items[i].innerHTML);
        newButton.appendChild(textNode)
        link.appendChild(newButton);
        elem.appendChild(link); 
    }
}


