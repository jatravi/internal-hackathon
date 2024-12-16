
const navBar = document.getElementById("navBar");
const toggleBtn = document.querySelector(".fas");

toggleBtn.addEventListener("click", () => {
    navBar.querySelector(".nav-links").classList.toggle("show");
});



// Sarthi BOT

let prompt = document.querySelector('#prompt');
let chatContainer = document.querySelector('.chat-container');

let user={
    data:null,
}

const Api_URL="https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyABGS3fgQJ0kEDkgCo53uqtIC-yLnWbV8E"

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
    let html=`<img src="user.png" alt="User" width="30" id="UserImage">
<div class="user-chat-area">
${user.data}
</div>`
prompt.value=""

let userChatBox = createChatBox(html,"user-chat")
chatContainer.appendChild(userChatBox)
chatContainer.scrollTo({top:chatContainer.scrollHeight,behavior:"smooth"})

setTimeout(()=>{
    let html=`<img src="ai.png" alt="AI" width="45" id="AIImage">
        <div class="ai-chat-area">
        <img src="LOADING.webp" 
                alt="LOADING-DARK.webp" 
                class="load" width="35px">
        </div>`
    let aiChatBox = createChatBox(html,"ai-chat")
    chatContainer.appendChild(aiChatBox)
    generateResponse(aiChatBox)
},600)
}

prompt.addEventListener("keydown",(e)=>{
    if(e.key === "Enter"){
        handlechatResponse(prompt.value);
    }
})