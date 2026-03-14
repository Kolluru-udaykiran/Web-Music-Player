const songs = [
{
    title:"Jayagananayaka",
    src:"songs/06 - Jayagananayaka - SenSongsMp3.Co.mp3"
},
{
    title:"Kathaa Naayaka",
    src:"songs/Kathaa Naayaka - SenSongsMp3.Co.mp3"
},
{
title:"srikarulu",
src:"songs/01 - Srikarulu - SenSongsMp3.Co.mp3"
},

{
title:"lalli lala",
src:"songs/02 - Lalli Lala - SenSongsMp3.Co.mp3"
},

{
title:"matthu vadalara",
src:"songs/02 - Matthu Vadalara - SenSongsMp3.Co.mp3"
},

{
title:"changure bangaru raja",
src:"songs/03 - Changure Bangaru - SenSongsMp3.Co.mp3"
},

{
title:"jayeebhava",
src:"songs/03 - Jayeebhava [www.SenSongsMp3.Co].mp3"
},

{
title:"neevena nanu talachinadi",
src:"songs/03 - Track 3 - SenSongsMp3.Co.mp3"
},

{
title:"dialogues",
src:"songs/04 - Dialogues [www.SenSongsMp3.co].mp3"
},

{
title:"vinnavaa yesodamma",
src:"songs/04 - Vinnavaa Yesodamma - SenSongsMp3.Co.mp3"
},

{
title:"Chitram Bhalare",
src:"songs/05 - Chithram Bhalare  [www.SenSongsMp3.Co].mp3"
},
{
title:"Choopulu kalasina",
src:"songs/05 - Choopulu Kalasina - SenSongsMp3.Co.mp3"
},
{
title:"Laahiri Laahiri Laahirilo",
src:"songs/06 - Laahiri Laahiri Laahirilo - SenSongsMp3.Co.mp3"
},

{
title:"Bhala Bhali Naa Bandi",
src:"songs/07 - Bhala Bhali Naa Bandi - SenSongsMp3.Co.mp3"
},

{
title:"Bhali Bhali Devaa",
src:"songs/07 - Bhali Bhali Devaa - SenSongsMp3.Co.mp3"
},

{
title:"Aalapinchana Eevela",
src:"songs/08 Aalapinchana Eevela - SenSongsMp3.Co.mp3"
},

{
title:"Dayacheyandi",
src:"songs/09 - Dayacheyandi - SenSongsMp3.Co.mp3"
},

{
title:"Ahanaa Pelliyanta",
src:"songs/10 - Ahanaa Pelliyanta - SenSongsMp3.Co.mp3"
},
{
title:"Sundari Neevanti",
src:"songs/11 - Sundari Neevanti - SenSongsMp3.Co.mp3"
},
{
title:"Dariki Raaboku",
src:"songs/12 - Dariki Raaboku - SenSongsMp3.Co.mp3"
},

{
title:"Vivaha Bhojanambu",
src:"songs/12 - Vivaha Bhojanambu - SenSongsMp3.Co.mp3"
},
{
title:"narthanshala dialogues",
src:"songs/14 - Dialogues & Padyams (Uthara Gograhanam Scene) - SenSongsMp3.Co.mp3"
},

];

let audio = document.getElementById("audio");
let playlist = document.getElementById("playlist");
let progress = document.getElementById("progress");
let volume = document.getElementById("volume");

let current = document.getElementById("current");
let duration = document.getElementById("duration");

let index = 0;

function loadPlaylist(){

playlist.innerHTML="";

songs.forEach((song,i)=>{

let li=document.createElement("li");

li.innerText=song.title;

li.onclick=()=>{
index=i;
playSong();
};

playlist.appendChild(li);

});

}

function playSong(){

audio.src=songs[index].src;
audio.play();

}

function playPause(){

if(audio.paused)
audio.play();
else
audio.pause();

}

function nextSong(){

index++;

if(index>=songs.length)
index=0;

playSong();

}

function prevSong(){

index--;

if(index<0)
index=songs.length-1;

playSong();

}

audio.addEventListener("timeupdate",()=>{

progress.value=(audio.currentTime/audio.duration)*100;

current.innerText=formatTime(audio.currentTime);

duration.innerText=formatTime(audio.duration);

});

progress.addEventListener("input",()=>{

audio.currentTime=(progress.value/100)*audio.duration;

});

volume.addEventListener("input",()=>{

audio.volume=volume.value;

});

function formatTime(sec){

if(isNaN(sec)) return "0:00";

let m=Math.floor(sec/60);
let s=Math.floor(sec%60);

if(s<10) s="0"+s;

return m+":"+s;

}

function shuffleSongs(){

for(let i=songs.length-1;i>0;i--){

let j=Math.floor(Math.random()*(i+1));

[songs[i],songs[j]]=[songs[j],songs[i]];

}

loadPlaylist();

}

audio.addEventListener("ended",nextSong);

loadPlaylist();
