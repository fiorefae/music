// MUSIC PLAYER BY FIOREFAE 

window.onload = function() {
  var audio = document.getElementById("myMusic");
  var playBtn = document.querySelector(".playy");
  var pauseBtn = document.querySelector(".pausee");
  playBtn.addEventListener("click", function() {
    playBtn.style.display = "none";
    pauseBtn.style.display = "block";
    audio.play();
  });
  pauseBtn.addEventListener("click", function() {
    pauseBtn.style.display = "none";
    playBtn.style.display = "block";
    audio.pause();
  });

  audio.onended = function() {
    pauseBtn.style.display = "none";
    playBtn.style.display = "block";
  };
};
