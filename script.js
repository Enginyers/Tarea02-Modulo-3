



let peli1 = ['Proyecto Rampage','Errementari (El Herrero y el Diablo)','Dead Pool','Ready Player One','Tomb Raider','Juego de Ladrones','Vengadores: Infinity War'];

peli1.forEach(carga);
  
    /* carga las imagenes de las peliculas */
    document.getElementById("titulo1").innerHTML += peli1[0];
    document.getElementById("titulo2").innerHTML += peli1[1]; 
    document.getElementById("titulo3").innerHTML += peli1[2]; 
    document.getElementById("titulo4").innerHTML += peli1[3];
    document.getElementById("titulo5").innerHTML += peli1[4]; 
    document.getElementById("titulo6").innerHTML += peli1[5]; 
    document.getElementById("titulo7").innerHTML += peli1[6]; 

    /* carga titulos */
function carga(item,index){
      
    var cont= index+1;
   
   

    if(isNaN(cont)==false)
    {
      document.getElementById("img"+cont+"").src="img/slider"+cont+".jpg";
    } 
}
/* 
localStorage.clear();
  */



 
