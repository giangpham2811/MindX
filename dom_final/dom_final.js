var song_container = document.getElementById("song_container");
var songs = song_container.getElementsByClassName("song");
for (var i = 0 ; i < songs.length; i++){
  console.log(songs[i]);
  var title = songs[i].getElementsByClassName("title");
  console.log("Title  : "  + title[0].innerText);
  var artist = songs[i].getElementsByClassName("artist");
  console.log("Artist : "  + artist[0].innerText);
}
