let signinbtn = document.getElementById("signinbtn");
let signupbtn = document.getElementById("signupbtn");
let title = document.getElementById("title");
let namefield = document.getElementById("namefield");

signinbtn.onclick = function () {
    namefield.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signupbtn.classList.add("disabled");
    signinbtn.classList.remove("disabled");
};

signupbtn.onclick = function () {
    namefield.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    signupbtn.classList.remove("disabled");
    signinbtn.classList.add("disabled");
};
