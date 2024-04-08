
// Player(play/pause/stop) using JavaScript:

// var audio = document.getElementById('audio');
// var playpause = document.getElementById('playpause');
// var count = 0;


// function playPause() {
//   if (count == 0) {
//     count = 1;
//     audio.play();
//     playpause.innerHTML = "Play &#9208;";

//   }
//   else {
//     count = 0;
//     audio.pause();
//     playpause.innerHTML = "Play &#9658;";
//   }
// }

// function stop() {
//   playPause()
//   audio.pause();
//   audio.currentTime = 0;
//   playpause.innerHTML = "Play &#9658;";
// }
//ending of player


//Triggering the player using checkbox:
var audio = document.getElementById('audio');

Swal.fire({
  text: 'لتجربة أفضل يرجى تفعيل امكانية الوصول للصوت',
  confirmButtonText: 'حسناً',
  confirmButtonColor: '#0b4f69'
}).then((result) => {
  if (result.isConfirmed) {
    $('input[type="checkbox"]').attr("checked", true);
    audio.play();
  }
  $('input[type="checkbox"]').attr("checked", true);
    audio.play();
});

$('input[type="checkbox"]').click(function () {
  if ($(this).prop("checked") == true) {
    audio.play();
  }
  else if ($(this).prop("checked") == false) {
    audio.pause();
    audio.currentTime = 0;
  }
});



