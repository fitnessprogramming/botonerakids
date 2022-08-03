function sonido(animal) {
    
}
let click=0
function playAudio(){
    click=click+1
    console.log(click);
    let audio= new Audio("oveja001.mp3")
//audio.src  ="COW2.mp3"
audio.play("oveja001.mp3");
//para cuando tengamos que poner en pausa un audio :)
if(click==2){
    click=0
    console.log(click)
}
}

let vaquita = document.querySelector(".vaca")
console.log(vaquita)
