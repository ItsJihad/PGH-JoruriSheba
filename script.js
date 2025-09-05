const heartIcon = document.querySelectorAll(".hearticon");
let heartBucket = document.getElementById("heartbucket");
let heartcount = 0;
heartIcon.forEach((heart) => {
  heart.addEventListener("click", function () {
    heartcount += 1;
    document.getElementById("heartbucket").innerText = heartcount;
    document.getElementById("heartbucket-mobi").innerText = heartcount;
  });
});
// -----------------------------Reusable Function--------------------------------------------------
// function heartCounter(icon,bucket){
//     let inco=document.querySelectorAll(icon)
//     let buck=document.getElementById(bucket)
//     let count = 0;
//     inco.forEach((icon)=>{
//         icon.addEventListener("click",function(){
//             count+=1
//             document.getElementById(bucket).innerText=count
//         })
//     })
    
// }
// heartCounter(".hearticon","heartbucket")
// heartCounter(".hearticon","heartbucket-mobi")


// ---------------------------------------------------------------------
const copyBtn = document.querySelectorAll(".CopyClip");
let copySpan = document.getElementById("copy-span");

let copycount = 0;

copyBtn.forEach((copy,index) => {
  copy.addEventListener("click", function () {
    copycount += 1;
    document.getElementById("copy-span").innerText = copycount;
    document.getElementById("copy-span-mobi").innerText = copycount;
    navigator.clipboard.writeText(document.querySelectorAll(".service-number")[index].innerText)
    alert(`Copied The Number ${document.querySelectorAll(".service-number")[index].innerText}`)
  });
});
// -------------------------Reusable Function -----------------------------------

// function Copier(id,selector){
//         let copySpan = document.getElementById(id);
//     const copyBtn = document.querySelectorAll(selector);

//     let count=0

//     copyBtn.forEach((copy,index)=>{
//         copy.addEventListener("click",function(){
//             count+=1
//             copySpan.innerText=count
//     navigator.clipboard.writeText(document.querySelectorAll(selector)[index].innerText)
//     alert(`Copied The Number ${document.querySelectorAll(selector)[index].innerText}`)
//         })
//     })
// }

// Copier("copy-span",".CopyClip")
// Copier("copy-span-mobi",".CopyClip")

// ----------------------------------------------------------------
let callHistory = document.getElementById("call-history");
let historyPC=document.querySelector(".call-history-pc")
let historyMobile=document.querySelector(".call-history-mobile")
let ServiceTitle = document.querySelectorAll(".service-title");
let ServiceNumber = document.querySelectorAll(".service-number");
let ContextTime = document.getElementById("context-time");

const callBtn = document.querySelectorAll(".CallClip");
let callSpan = document.getElementById("call-btn");
let coinBucket = parseInt(document.getElementById("coins").innerText);

callBtn.forEach((call,index) => {
  call.addEventListener("click", function () {
    if (coinBucket <= 0) {
      callSpan.disabled = true;
      alert("You don't Have Coin Left")
    } else {
      coinBucket -= 20;
      alert(`Calling ${ServiceTitle[index].innerText} , ${ServiceNumber[index].innerText}`)

      const innerContext = document.createElement("div");
      innerContext.className =
        "flex gap-2 mt-4 p-4  items-center self-stretch rounded-[8px] bg-[#FAFAFA] font-['Hind_Madurai']";

      let title = document.createElement("h1");
      title.innerText = ServiceTitle[index].innerText;

      let servnumber = document.createElement("h2");
      servnumber.innerText = ServiceNumber[index].innerText;

      let time = document.createElement("time");
      time.innerText = new Date().toLocaleTimeString();

      innerContext.appendChild(title);
      innerContext.appendChild(servnumber);
      innerContext.appendChild(time);
        if ( historyPC)  historyPC.appendChild(innerContext.cloneNode(true));
      if (historyMobile) historyMobile.appendChild(innerContext.cloneNode(true))
      

    }
    let total = coinBucket;
    document.getElementById("coins").innerText = total;
    document.getElementById("coins-mobi").innerText = total;
    //

  });
});
// --------------------------------------------------------------------
const clearBtn=document.getElementById("clearBtn")
    clearBtn.addEventListener("click",function(){
        callHistory.innerHTML=""
         document.querySelector(".call-history-pc").innerHTML=""
        alert("Call History Cleared")
        histo.classList.toggle("hidden");
    })

const clearPC=document.getElementById("clearBtnPC")
clearPC.addEventListener("click",function(){
    document.querySelector(".call-history-pc").innerHTML=""
    callHistory.innerHTML=""
    alert("Call History Cleared")
})





// ---------------------------------------------------------------------

const pop=document.getElementById("mobile-history")
let histo=document.getElementById("callHistories")

pop.addEventListener("click",function(){
    histo.classList.toggle("hidden");
})