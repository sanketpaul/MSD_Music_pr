console.log("welcome to msd sanket")
let songIndex=0;
let Target;
let audioElements=new Audio('songs/1.mp3')
let masterplay=document.getElementById('play')
let myprogressbar=document.getElementById('myprogressbar')
let songx=Array.from(document.getElementsByClassName('songx'));
let sng=document.querySelector('.songbottomname')

let songs=[
    {songName:"Dharma de naam", filePath:"songs/1.mp3",coverPath:"cover/1.jpg"},
    { songName: " Baapu", filePath: "songs/2.mp3", coverPath: "cover/2.jpg" },
    { songName: " Ai-chapo", filePath: "songs/3.mp3", coverPath: "cover/3.jpg" },
    { songName: " Bitch I-am back", filePath: "songs/4.mp3", coverPath: "cover/4.jpg" },
    { songName: " Just Listen", filePath: "songs/5.mp3", coverPath: "cover/5.jpg" },
    { songName: " Punjab", filePath: "songs/6.mp3", coverPath: "cover/6.jpg" },
    { songName: " samebeef", filePath: "songs/7.mp3", coverPath: "cover/7.jpg" },
    { songName: " sanju", filePath: "songs/8.mp3", coverPath: "cover/8.jpg" },
    { songName: " seen", filePath: "songs/9.mp3", coverPath: "cover/9.jpg" },
    { songName: " so-high", filePath: "songs/10.mp3", coverPath: "cover/10.jpg"}
]

songx.forEach((element,i)=>{
    console.log(element,i)
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songxname')[0].innerHTML=songs[i].songName;

})

masterplay.addEventListener('click',(e)=>{
    
    if(audioElements.paused||audioElements.currentTime<=0){
        audioElements.play()
        masterplay.classList.remove('fa-play')
        masterplay.classList.add('fa-pause')
        gif.style.opacity=1;
        sng.innerHTML=songs[songIndex].songName;
 

    }
    else{
        audioElements.pause()
        masterplay.classList.add('fa-play')
        masterplay.classList.remove('fa-pause')
        gif.style.opacity=0;
        sng.innerHTML=songs[songIndex].songName;
        
    }
})

//listinging the events

audioElements.addEventListener('timeupdate',()=>{
console.log('timeupdate')
progress=parseInt((audioElements.currentTime/audioElements.duration)*100)
console.log(progress)
myprogressbar.value=progress;
})
myprogressbar.addEventListener('change',()=>{
    audioElements.currentTime=(myprogressbar.value*audioElements.duration)/100;
})

const makeallplays=()=>{
    Array.from(document.getElementsByClassName('itemplay')).forEach((element)=>{
           

                element.classList.add('fa-play')
                element.classList.remove('fa-pause')
             
       
    })
}
Array.from(document.getElementsByClassName('itemplay')).forEach(element=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target)
        Target=e.target;
        makeallplays()
        songIndex=parseInt(e.target.id)
        e.target.classList.add('fa-pause')
        e.target.classList.remove('fa-play')
        audioElements.currentTime=0;
        audioElements.src=`songs/${songIndex+1}.mp3`
        sng.innerHTML=songs[songIndex].songName;
       audioElements.play()
       masterplay.classList.add('fa-pause')
    masterplay.classList.remove('fa-play')
    })
})


document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElements.currentTime=0;
    audioElements.src=`songs/${songIndex+1}.mp3`
    sng.innerHTML=songs[songIndex].songName;
    audioElements.play()
    masterplay.classList.add('fa-pause')
 masterplay.classList.remove('fa-play')

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    // Target.classList.add('fa-pause')
    audioElements.currentTime=0;
    audioElements.src=`songs/${songIndex+1}.mp3`
    sng.innerHTML=songs[songIndex].songName;
    audioElements.play()
    
    masterplay.classList.add('fa-pause')
    masterplay.classList.remove('fa-play')
})

