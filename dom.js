// function for when the user clicks on the button
// allow toggle between hiding and showing the dropdown items

const dropButton = document.querySelector(".drop-button");
const dropItems = document.querySelector(".dropDownItems");


// function to toggle show to classlist on menu items container
function toggleDropdown() {
    dropItems.classList.toggle("show");
}; 



// open and close the dropdown 
dropButton.addEventListener("click", function(e){
    e.stopPropagation();
    toggleDropdown();
});

// Close dropdown when dom element is clicked

 document.documentElement.addEventListener("click", function () {
    if (dropItems.classList.contains("show")) {
    toggleDropdown();
  }
}); 


//EXERCISE 2 - ADD ROW TO AN EMPTY TABLE

let addRowButton = document.querySelector("#add-row-button");
let table = document.querySelector("table");
let rowCount = 1;
addRowButton.addEventListener("click", () => {
    table.innerHTML += `<tr>Row ${rowCount++}</tr>`;
});

// EXERCISE 3 ADD A PROGRESS BAR UPDATING WITH TASK COMPLETION

const taskButton = document.querySelector(".task-btn");
const completedTasksText = document.querySelector(".completed-tasks");
const totalTasksText = document.querySelector(".total-tasks");
const progressUpdate = document.querySelector(".progress-bar-filled");

let totalTasks = 10;
let completedTasks = 0;

window.addEventListener("load", () => {
    totalTasksText.innerHTML = totalTasks;
    taskButton.addEventListener("click", () =>{
        if(!(completedTasks >= totalTasks)) {
            completedTasks++;
            completedTasksText.innerHTML = completedTasks;

            progressUpdate.style.width = (completedTasks / totalTasks * 100) + "%";
        }
    });
});

// EXERCISE 4 SLIDESHOW WITH NEXT & PREVIOUS BUTTONS

let slideIndex = 1;
showSlides(slideIndex);

// Next and previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slideImages");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


// EXERCISE 5 BUTTONS THAT REVEAL A MESSAGE
//test message button
const testButton = document.getElementById("test-button");
testButton.addEventListener("click", testMessageFunction);

function testMessageFunction () {
    document.getElementById("test-message").innerHTML 
    = "Code is like humor. <br/>If you have to explain it, <br/>it's bad.";
}

//4 buttons and  message

const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const btn3 = document.getElementById("button3");
const btn4 = document.getElementById("button4");

const clickedButtons = {
    button1:false,
    button2:false,
    button3:false,
    button4:false
}

btn1.addEventListener("click", ()=> {
    btn1.style.backgroundColor = "pink";
});

btn2.addEventListener("click", ()=> {
    btn2.style.backgroundColor = "pink";
});

btn3.addEventListener("click", ()=> {
    btn3.style.backgroundColor = "pink";
});

btn4.addEventListener("click", ()=> {
    btn4.style.backgroundColor = "pink";
});

const revealMessageContainer = document.getElementById("reveal-message-container");


btn1.addEventListener("click", ()=> messageFunction("button1"));
btn2.addEventListener("click", ()=> messageFunction("button2"));
btn3.addEventListener("click", ()=> messageFunction("button3"));
btn4.addEventListener("click", ()=> messageFunction("button4"));    


function messageFunction(buttonId) {
    clickedButtons[buttonId] = true;

    if (Object.values(clickedButtons).every(value => value)) {
        document.getElementById("reveal-message").innerHTML ="Any fool can write code that a computer can understand. Good programmers write code that humans can understand.🩷 <br/><br/> P.S <br/><br/> Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, meanwhile the Universe trying to produce bigger and better idiots. So far, the Universe is winning.🤣";
    }
}




/* button.addEventListener("click", (e)=> {
    var bool = true
    if (e.target.classList.contains("button")) {
        e.target.setAttribute("value", "true")
    }
    buttons = document.getElementsByClassName(button)
    for (let i = 0; i < buttons.length; i++) {
        console.log(buttons[i].getAttribute("value"))
        if (buttons[i].getAttribute("value") == "false") {
            bool = false
        }
    }
    if (bool == true) {
        document.getElementById("message").innerHTML = "congrats!!!";
    }
}); */