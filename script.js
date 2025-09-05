let heartBucket = document.getElementById("heartbucket");
const heartIcon = document.getElementById("hearticon");

heartBucket = 1;
heartIcon.addEventListener("click", function heartCalc() {
  let total = heartBucket++;
  document.getElementById("heartbucket").innerText = total;
});

let copySpan = document.getElementById("copy-span");
let copyBtn = document.getElementById("copy-btn");

copySpan = 1;
copyBtn.addEventListener("click", function () {
  let total = copySpan++;
  document.getElementById("copy-span").innerText = total;
});

let coinBucket = parseInt(document.getElementById("coins").innerText);
let callBtn = document.getElementById("call-btn");

callBtn.addEventListener("click", function () {
  if(coinBucket<=0){
    callBtn.disabled = true;
    callBtn.style.border = "2px solid red";
    }else{
        coinBucket -= 10;
    }
    let total = coinBucket;
  document.getElementById("coins").innerText = total;
});
