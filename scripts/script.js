function validarForm(){

       	//valido el nombre
           if (document.formulario_contacto.nombre.value.length==0){
            alert("Por favor escriba su nombre")
            document.formulario_contacto.nombre.focus()
            return 0;
     }
  
     //valido el apellido
     if (document.formulario_contacto.apellido.value.length==0){
        alert("Por favor escriba su apellido")
        document.formulario_contacto.apellido.focus()
        return 0;
     }
     //valido el texto
     if (document.formulario_contacto.mensaje.value==0){
            alert("Por favor escribanos su mensaje")
            document.fvalida.interes.focus()
            return 0;
     }
  
     //el formulario se envia
     alert("Muchas gracias por enviar el formulario");
     document.formulario_contacto.submit();
    
}

