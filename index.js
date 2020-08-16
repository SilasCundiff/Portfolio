
/*************Projects page***************/

// TODO This code is a temp solution.
// Bug: When the "ALL PROJECTS" filter is active, all elements have the class "disable assigned to them"
// * When you click off of all projects onto another button, the transition doesn't work because the class is removed immediately
// Click between on of the filters and any other filter to see example of working transition
// ? Potential solution: implement a toggle so the class is never "removed", just changed to a different class

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

/*********************mobile nav***************************/
$('.nav-toggle').on("click", function () {
    $(this).toggleClass('open');
    $('.navigation').toggleClass('navigation--closed').toggleClass('navigation--open');
});

$('.navigation__link').on("click", function () {
    $('.nav-toggle').removeClass('open');
    $('.navigation').toggleClass('navigation--closed').toggleClass('navigation--open');
});


/**************in viewport testing**************/

let home = document.getElementById("home");
let home_bounding = home.getBoundingClientRect();
let projects = document.getElementById("projects");
let projects_bounding = projects.getBoundingClientRect();
let about = document.getElementById("about");
let about_bounding = about.getBoundingClientRect();
let contact = document.getElementById("contact");
let contact_bounding = contact.getBoundingClientRect();




let scrollWrapper = document.getElementById("scroll-wrapper__outter");
let scrollWrapperInner = document.getElementById("scroll-wrapper__inner");

let didScroll = false;
$(scrollWrapper).scroll(function() {
    didScroll = true;
});
 

function checkPosition() {
    home_bounding = home.getBoundingClientRect();
    projects_bounding = projects.getBoundingClientRect();
    about_bounding = about.getBoundingClientRect();
    contact_bounding = contact.getBoundingClientRect();
         if (home_bounding.left <= 0 && home_bounding.left >= -10 && home_bounding.top <= 0 && home_bounding.top >= -10) {
             console.log("activated!");
             activatePageStyles('home');
         }
         else if (projects_bounding.left <= 0 && projects_bounding.left >= -10 && projects_bounding.top <= 0 && projects_bounding.top >= -10) {
             activatePageStyles('projects');
         }
         else if (about_bounding.left <= 0 && about_bounding.left >= -10 && about_bounding.top <= 0 && about_bounding.top >= -10) {
             activatePageStyles('about');
         }
         else if (contact_bounding.left <= 0 && contact_bounding.left >= -10 && contact_bounding.top <= 0 && contact_bounding.top >= -10) {
             activatePageStyles('contact');
         }
 }

 checkPosition();
setInterval(function() {
    if ( didScroll ) {
        didScroll = false;
    checkPosition();
    }
}, 250);






function activatePageStyles(current_page) {
    backgroundUpdater(current_page);
    addFooterClass(current_page + '__footer');
}


// replace $('.tree').css("fill", "rgba(var(--spring-dark-rgb), .8)"); with function calls
function backgroundUpdater(current_page) {
    sanitizeImageClasses();
    switch (current_page) {
        case 'home':
            $('.sakura-image').addClass('show-image');
            break;
        case 'projects':
             $('.apple-image').addClass('show-image');
            break;
        case 'about':
             $('.maple-image').addClass('show-image');
            break;
        case 'contact':
             $('.snow-image').addClass('show-image');
            break;
        default:
             $('.sakura-image').addClass('show-image');
            break;
    }
}
function sanitizeImageClasses() {
    $('.sakura-image').removeClass('show-image');
    $('.apple-image').removeClass('show-image');
    $('.maple-image').removeClass('show-image');
    $('.snow-image').removeClass('show-image');
}
function sanitizeFooterClasses() {
    $('footer').removeClass('home__footer');
    $('footer').removeClass('projects__footer');
    $('footer').removeClass('about__footer');
    $('footer').removeClass('contact__footer');
}
function addFooterClass(page_pos) {
    sanitizeFooterClasses();
    $('footer').addClass(page_pos);
}




