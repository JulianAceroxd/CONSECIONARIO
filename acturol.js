$(document).ready(function(){
alert("Hola");
    $('.botons').on('click',function(){

    let btn=$('.botons').index(this);
    let Valor=$('.controls').eq(btn);
  
  
   
    let n=Valor.val();
    
     alert(n);
if(n=="No"){
    alert("Su Opcion Fue No, Sera Redireccionado a su vista.")
    location.href="/Vistavendedor";
}else if(n=="Si"){

   alert("RECIBIENDO DATOS")

   location.href="/login";
    
    $.ajax({
        type:"POST",
        url:'/actualizarrol',
        data:{
            nn:n
        }
    });
}
    });

});


