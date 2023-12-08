function toggle(elem){
    elem.classList.toggle("svg-check-active");
    let li = elem.closest("li");
    if(li){
        let input = li.querySelector("input");
        if(input) input.checked = !input.checked;
        let noCheck = li.querySelector(".svg-no-check");
        if(noCheck) noCheck.classList.toggle("svg-no-check-active")
    }
}

function clickHandler(e){
    if(e.target.matches("svg.svg-check")){
        toggle(e.target)
    }else if(e.target.matches("svg.svg-check path")){
        toggle(e.target.parentNode)
    }
}
document.addEventListener("click",clickHandler);