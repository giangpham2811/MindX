var song_container = document.getElementById("song_container");
var songs = song_container.getElementsByClassName("song");
//get info in target
for (var i = 0 ; i < songs.length; i++){
  console.log(songs[i]);
  var title = songs[i].getElementsByClassName("title");
  console.log("Title  : "  + title[0].innerText);
  var artist = songs[i].getElementsByClassName("artist");
  console.log("Artist : "  + artist[0].innerText);
}
//create button
var btn_delete = document.getElementsByClassName("btn_delete");
var btn_edit = document.getElementsByClassName("btn_edit");
var btn_more = document.getElementsByClassName("btn_more");
//delete
for (let i = 0; i < btn_delete.length; i++) {
  btn_delete[i].addEventListener('click',(e) => {
    var btn = e.target;
    var div = btn.parentNode;
    div.remove();
  });
}
//edit
for (let i = 0; i < btn_edit.length; i++) {
  btn_edit[i].addEventListener('click',(e) => {
    var btn = e.target;
    var div = btn.parentNode;
    console.log("Song ID : " + div.getAttribute("song_id"));
  });
}
//more
for (let i = 0; i < btn_more.length; i++) {
  btn_more[i].addEventListener('click',(e) => {
    var btn = e.target;
    var div = btn.parentNode;
    console.log("Song ID : " + div.getAttribute("song_id"));
    let title = songs[i].getElementsByClassName("title");
    console.log("Song name : " +title[0].innerText);
    let artist = songs[i].getElementsByClassName("artist");
    console.log("Artist : " + artist[0].innerText);
  });
}
//add
var btn = document.createElement("button");
  document.body.appendChild(btn);
  btn.innerHTML = "Add";
//
btn.addEventListener ("click", function() {
  alert("This funtion is not finnish yet=))");
});
