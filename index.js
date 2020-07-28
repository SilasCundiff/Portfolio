

/*************Projects page***************/

// TODO This code is a temp solution.
// Bug: When the "ALL PROJECTS" filter is active, all elements have the class "disable assigned to them"
// When you click off of all projects onto another button, the transition doesn't work because the class is removed immediately
// Click between on of the filters and any other filter to see example of working transition

// Potential solution: implement a toggle so the class is never "removed", just changed to a different class

filterType("all");

function filterType(filterSelected) {
    let card = document.getElementsByClassName("projects__grid--card");
    if (filterSelected == "all") filterSelected = "";
    for (let i = 0; i < card.length; i++) {
        addClass(card[i], "disable");
        if (card[i].className.indexOf(filterSelected) > -1) removeClass(card[i], "disable");
    }
}

function addClass(element, name) {

    let element_name = element.className.split(" ");
    let class_name = name.split(" ");

    for (let i = 0; i < class_name.length; i++) {
        if (element_name.indexOf(class_name[i]) == -1) {
            element.className += " " + class_name[i];
        }
    }
}

function removeClass(element, name) {

    let element_name = element.className.split(" ");
    let class_name = name.split(" ");

    for (let i = 0; i < class_name.length; i++) {
        while (element_name.indexOf(class_name[i]) > -1) {
            element_name.splice(element_name.indexOf(class_name[i]), 1);
        }

    }

    element.className = element_name.join(" ");
}

let buttonContainer = document.getElementById("projects__button-container");
let buttons = buttonContainer.getElementsByClassName("btn");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("btn--active");
        current[0].className = current[0].className.replace(" btn--active", "");
        this.className += " btn--active";
    });
}


/*********************footer***************************/

let date = new Date();
document.getElementById("copyrite_year").innerHTML = date.getFullYear();