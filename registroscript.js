const botonenviar = !!document.getElementById('btnenviar');


if (botonenviar==true) {
    document.getElementById("btnenviar").addEventListener("click", registrar); 

    
    

function registrar(){

    

    
    var form = document.getElementById("formulario").elements;
 
for(var i = 0; i<= form.length - 1; i++)
{

    if(form[i].type != 'button' )   
    {
        //imprimir en consola el valor
        console.log(form[i].value);
        localStorage.setItem(form[i].id, JSON.stringify(form[i].value));
    }
  
} 

if (localStorage.length > 0) 
    {
        window.alert("Revisar en consola.");
       
    }

}

sessionStorage.clear;
}
