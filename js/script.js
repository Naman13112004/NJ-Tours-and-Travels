const submit = document.querySelector('#contact form');
const about = document.querySelector('#readMore');
const aboutPara = document.querySelector('#aboutPara a');

function formSubmit(){
    alert("Thank You for your response. We will get back to you soon!");
}


function readMore(){
    console.log("readMore function called");
    if(about.style.display === "none"){
        console.log("about is hidden, so showing it");
        about.style.display = "block";
        aboutPara.innerHTML = "Read Less...";
    }
    else{
        console.log("about is visible, so hiding it");
        about.style.display = "none";
        aboutPara.innerHTML = "Read More...";
    }
    console.log("readMore function ended");
}

submit.addEventListener("submit" , formSubmit);
aboutPara.addEventListener("click" , readMore);