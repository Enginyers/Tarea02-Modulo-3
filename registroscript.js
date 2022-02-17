
function registrar(){

    
    var nombre = document.getElementById('txtNombre').value;
    var apellido = document.getElementById('txtApellido').value;
    var telefono = document.getElementById('txtTelefono').value;
    var direccion = document.getElementById('txtDireccion').value;


if(nombre.length > 0 && apellido.length > 0 && telefono.length > 0 && direccion.length > 0 )
   {
    
    
    var form = document.getElementById("formulario").elements;

for(var i = 0; i<= form.length - 1; i++)
{

    if(form[i].type != 'submit' )   
    {
        //imprimir en consola el valor
        console.log(form[i].value);
        localStorage.setItem(form[i].id, JSON.stringify(form[i].value));
    }
  
}

    window.alert("Registro exitoso");
  }



}

console.log(localStorage.getItem('txtNombre')); 
console.log(localStorage.getItem('txtApellido')); 
console.log(localStorage.getItem('txtTelefono'));
console.log(localStorage.getItem('txtDireccion'));

