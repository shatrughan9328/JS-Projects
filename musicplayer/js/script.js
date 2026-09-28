
let audio = document.getElementById("audio");
let i=0;
let song=[
{
    song:"BG Music tone",
    path:"./images/music/music/Azizs Introduction-128kbps.mp3",
    image:"./images/img/img/ishq.jpg",
},
{
     song:"Something else music",
    path:"../images/music/music/Barbaad Reprise Female-320kbps.mp3",
    image:"./images/img/img/pehle.webp",
},

{
     song:"BG Music tone",
    path:"./images/music/music/song1 (2).mp3",
    image:"./images/img/img/soulmate.jpg",

}

]
function pre(){
   i=i-1;
    if(i<0){
        i=song.length-1;
    }
    audio.src=song[i].path;
    aplay();
    document.querySelector('.img img').src=song[i].image
    document.querySelector('marquee').innerHTML=song[i].song;                                            
}
function aplay(){
audio.play();
document.querySelector(".button .fa-play").style.display = "none";
document.querySelector(".button .fa-pause").style.display = "block";
}
function apause(){
    audio.pause();
    document.querySelector(".button .fa-play").style.display = "block";
    document.querySelector(".button .fa-pause").style.display = "none";

}
function nxt(){
    i=i+1;
    if(i==song.length){
        i=0;
    }
    audio.src=song[i].path;
    aplay();
    document.querySelector('.img img').src=song[i].image
    document.querySelector('marquee').innerHTML=song[i].song;

}
