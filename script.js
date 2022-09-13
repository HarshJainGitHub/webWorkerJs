const worker = new Worker("worker.js");

const sumButton = document.querySelector("#sumButton");
const bgButton = document.querySelector("#bgButton");

sumButton.addEventListener("click", (event) => {
  worker.postMessage("hello");
});

worker.onmessage = function(message) {
  console.log(message);
  alert(`The Sum of i is ${message.data}`);
}

bgButton.addEventListener("click" , (event) => {
  if(document.body.style.background !== "green") {
    document.body.style.background = "green";
  }
  else {
    document.body.style.background = "blue";
  }
});