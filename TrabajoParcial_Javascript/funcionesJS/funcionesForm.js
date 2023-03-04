function validarFormClient(){
    let namClient = document.getElementById('nameClient').value;

     if (namClient==null || namClient.length==0) {
     //alert('Faltan datos');
     //document.getElementById('correo').style.borderColor="red";
     document.getElementById('text1').innerHTML="Ingresar nombre";
     document.getElementById('text1').style.color="red";
     document.getElementById('nameClient').focus();
     $(document).ready(function () {
        $("#nameClient").focus(function () {
            $(this).css("background-color", "#cccccc");
        });
        $("#nameClient").blur(function () {
            $(this).css("background-color", "#ffffff");
        });
    });
    
     return false;

     }
     document.getElementById('text1').innerHTML="";
     

     let surClient = document.getElementById('surnameClient').value;

     if (surClient==null || surClient.length==0) {
     //alert('Faltan datos');
     //document.getElementById('correo').style.borderColor="red";
     document.getElementById('text2').innerHTML="Ingresar apellido";
     document.getElementById('text2').style.color="red";
     document.getElementById('surnameClient').focus();
     $(document).ready(function () {
        $("#surnameClient").focus(function () {
            $(this).css("background-color", "#cccccc");
        });
        $("#surnameClient").blur(function () {
            $(this).css("background-color", "#ffffff");
        });
    });
     return false;

     } 
     document.getElementById('text2').innerHTML="";

     let correo= document.getElementById('correoClient').value;
     let validarCorreo =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if(validarCorreo.test(correo)!==true){
        document.getElementById('text3').innerHTML="Ingresar completamente";
        document.getElementById('text3').style.color="red";
        document.getElementById('correoClient').focus();
        $(document).ready(function () {
            $("#correoClient").focus(function () {
                $(this).css("background-color", "#cccccc");
            });
            $("#correoClient").blur(function () {
                $(this).css("background-color", "#ffffff");
            });
        });
        return false;
    }
    document.getElementById('text3').innerHTML="";

    let bornClient  = Number(document.getElementById('generoClient').selectedIndex);
    let valor = document.getElementById('generoClient').options[bornClient].text;
    if (bornClient==0) {
        document.getElementById('text4').innerHTML="Debe seleccionar un sexo";
        document.getElementById('text4').style.color="red";
        document.getElementById('generoClient').focus();
        $(document).ready(function () {
            $("#generoClient").focus(function () {
                $(this).css("background-color", "#cccccc");
            });
            $("#generoClient").blur(function () {
                $(this).css("background-color", "#ffffff");
            });
        });
        return false;
    } 

    document.getElementById('text4').innerHTML="";

    let fechNac= document.getElementById('feBorn').value;
    if (fechNac==null || fechNac.length==0) {
        document.getElementById('text5').innerHTML="Ingresar fecha de nacimiento";
        document.getElementById('text5').style.color="red";
        document.getElementById('feBorn').focus();
        $(document).ready(function () {
            $("#feBorn").focus(function () {
                $(this).css("background-color", "#cccccc");
            });
            $("#feBorn").blur(function () {
                $(this).css("background-color", "#ffffff");
            });
        });
        return false;
   
        } 
        document.getElementById('text5').innerHTML="";

        let telef= document.getElementById('telClient').value;
    if (telef==null || telef.length==0) {
        document.getElementById('text6').innerHTML="Ingresar numero de telefono";
        document.getElementById('text6').style.color="red";
        document.getElementById('telClient').focus();
        $(document).ready(function () {
            $("#telClient").focus(function () {
                $(this).css("background-color", "#cccccc");
            });
            $("#telClient").blur(function () {
                $(this).css("background-color", "#ffffff");
            });
        });
        return false;
   
        } 
        document.getElementById('text6').innerHTML="";


     alert("Nombre del cliente: "+namClient +"\nApellido del cliente: "
     +surClient+"\nCorreo del cliente: "+correo+"\nGenero del cliente: "+
     valor+"\nFecha de Nacimiento del cliente: "+fechNac+"\nTelefono del cliente: "+ telef); 
     

}