 
 //boutton suivant
 let suivbtn=document.getElementById("suiv");
//boutton precedent 
let prebtn=document.getElementById("pre");
//selectionner tous les images
let images=document.querySelectorAll(".card img");
//tableau des noms
 let noms=["ALGER","ANNABA","ORAN","SKIKDA","TIMIMOUN ","TIZI OUZOU","TIPAZA"];
//  //tableau des couleurs
//  let couleur=["red","bleu","#80000076","#00ffff4c","#312002","#012b01","#f5f5f5"];
//  //recuper l id du body
//  let body=document.getElementById["body"];
 //recuperation nom
 let n=document.getElementById("nom");
//init le compteur pour images et noms
 let cpt=0;
 //le nom du timer
 let interval=0;
 //1 ere section

 //fontion initialisation
 
 function init(){
    images[cpt].classList.add("show");
    
   n.innerHTML=noms[cpt];
 
    // interval=setInterval(suivant,2000);
 }
 //fonction display
 function display(cpt){
   

for(let i=0;i<images.length;i++){
    images[i].classList.remove("show");
}
    images[cpt].classList.add("show");
 }
 //fonction du boutton suivant
suivbtn.addEventListener("click",suivant)
function suivant() {
   
cpt++;
if(cpt >= images.length){
    cpt=0;}

    display(cpt);
    n.innerHTML=noms[cpt];
};




prebtn.addEventListener("click",precedent);
function precedent(){
    // clearInterval(interval);
    cpt--;
    if(cpt < 0){
        cpt=images.length-1;
    }

    display(cpt);
    n.innerHTML=noms[cpt];


}
//appel de lafonction init
init();