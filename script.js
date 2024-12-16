
const navBar = document.getElementById("navBar");
const toggleBtn = document.querySelector(".fas");

toggleBtn.addEventListener("click", () => {
    navBar.querySelector(".nav-links").classList.toggle("show");
});

// For the popup animation till line 38

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// header container
ScrollReveal().reveal(".container-ai h1", scrollRevealOption);

ScrollReveal().reveal(".header__container p", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header__container label", {
    ...scrollRevealOption,
    delay: 1000,
});

// About Us Container
ScrollReveal().reveal(".container", scrollRevealOption);

ScrollReveal().reveal(".container .sub-title", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".container #card", {
    ...scrollRevealOption,
    delay: 1000,
});

// ScrollReveal().reveal(".about__container .btn", {
//     ...scrollRevealOption,
//     delay: 1500,
// });

// // Discover Container

// ScrollReveal().reveal(".discover__card", {
//     ...scrollRevealOption,
//     interval: 500,
// })

// ScrollReveal().reveal(".discover__card__content", {
//     ...scrollRevealOption,
//     interval: 500,
//     delay: 200,
// })

// // Blogs Container
// ScrollReveal().reveal(".blogs__card", {
//     duration: 1000,
//     interval: 400,
// });

// Sarthi BOT

let prompt = document.querySelector('#prompt');
let chatContainer = document.querySelector('.chat-container');

let user={
    data:null,
}

const Api_URL="https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyDQvTMLfR7XtwGuFNjvoaPqN-xE0Bm8Hi0"

async function generateResponse(aiChatBox) {
    let text=aiChatBox.querySelector(".ai-chat-area")
    let RequestOption={
        method: "POST",
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({
            "contents": [{
              "parts":[{"text": user.data}]
              }]
            })
    }

    try{
        let response = await fetch(Api_URL, RequestOption);
        let data = await response.json();
        let apiResponse=data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g,"$1").trim()
        text.innerHTML=apiResponse
    }
    catch(error){
        console.error(error);
    }
    finally{
        chatContainer.scrollTo({top:chatContainer.scrollHeight,behavior:"smooth"})
    }
}

function createChatBox(html,classes){
    let div=document.createElement("div")
    div.innerHTML=html
    div.classList.add(classes)
    return div
}

function handlechatResponse(message){
    user.data=message
    let html=`<img src="./assets/images/user.png" alt="User" width="30" id="UserImage">
<div class="user-chat-area">
${user.data}
</div>`
prompt.value=""

let userChatBox = createChatBox(html,"user-chat")
chatContainer.appendChild(userChatBox)
chatContainer.scrollTo({top:chatContainer.scrollHeight,behavior:"smooth"})

setTimeout(()=>{
    let html=`<img src="./assets/images/Screenshot_2024-12-15_165204-removebg.png" alt="AI" width="90" id="AIImage">
        <div class="ai-chat-area">
        <img src="./assets/images/LOADING.webp" 
                alt="LOADING-DARK.webp" 
                class="load" width="35px">
        </div>`
    let aiChatBox = createChatBox(html,"ai-chat")
    chatContainer.appendChild(aiChatBox)
    generateResponse(aiChatBox)
},200)
}

prompt.addEventListener("keydown",(e)=>{
    if(e.key === "Enter"){
        handlechatResponse(prompt.value);
    }
})