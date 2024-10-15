// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const heartLike = document.querySelectorAll(".like-glyph");

function selectHeart(event) {
  const item = event.target;
  mimicServerCall("bogusUrl")
    .then(function() {
      if (item.innerText === EMPTY_HEART) {
        item.innerText = FULL_HEART;
        item.className = "activated-heart";
      } else {
        item.innerText = EMPTY_HEART;
        item.className = "";
      }
    })
    .catch(function(error) {
      const varModal = document.getElementById("modal");
      varModal.className = ""; 
      varModal.innerText = error; 
      setTimeout(() => varModal.className = "hidden", 3000); 
    });
}

for (const glyph of heartLike) {
  glyph.addEventListener("click", selectHeart);
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
