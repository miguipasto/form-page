function checkName(){
    var nombre = document.getElementById("cname").value;

    var pattern = /(^[A-Za-zñáéíóúÑÁÉÍÓÚ]{3,}\s+[A-Za-zñáéíóúÑÁÉÍÓÚ]{3,})$/;

    var resultado = pattern.test(nombre);
    if(nombre==""){
        return true;
    } else if (resultado == false){
        document.getElementById("errorName").innerHTML = "Introduce un formato correcto";
        document.getElementById("formatName").innerHTML = "El formato es: Dos palabras compuestas por al menos 3 caracteres (sólo letras mayúsculas y minúsculas, incluida la ñ y las vocales con acento simple).";
        document.getElementById("correctName").innerHTML = "";
       return false;
    }
    else{
        document.getElementById("errorName").innerHTML = "";
        document.getElementById("formatName").innerHTML = "";
        document.getElementById("correctName").innerHTML = "Correcto";
        
        return true;
    }
}
function checkLogin(){
    var login = document.getElementById("clogin").value;

    var pattern = /^([a-z0-9]){4,8}$/;

    var resultado = pattern.test(login);
    if(login==""){
        return true;
    }else if (resultado == false){
        document.getElementById("errorLogin").innerHTML = "Introduce un formato correcto";
        document.getElementById("formatLogin").innerHTML = "Entre 4 y 8 caracteres: sólo números y las letras minúsculas del código ASCII y una letra adicional mayúscula del código ASCII.";
        document.getElementById("correctLogin").innerHTML = "";
        return false;
    }
    else{
        document.getElementById("errorLogin").innerHTML = "";
        document.getElementById("formatLogin").innerHTML = "";
        document.getElementById("correctLogin").innerHTML = "Correcto";
        return true;
    }
}


function checkPswd(){
    var pswd = document.getElementById("cpswd").value;

    var pattern =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[+,+,-,/]).*$/

    var resultado = pattern.test(pswd);
    if(pswd==""){
        return true;
    } else if (pswd.length < 6){
        document.getElementById("errorPswd").innerHTML = "Contraseña demasiado corta";
        document.getElementById("formatPswd").innerHTML = "Entre 6 y 12 caracteres: al menos una mayúscula y una minúscula limitando ambas a letras ASCII, sin acentos, un número, y un símbolo del conjunto “+-*/”.";
        document.getElementById("correctPswd").innerHTML = ""
        return false;
    }   
    else if( pswd.length > 12 ){
        document.getElementById("errorPswd").innerHTML = "Contraseña demasiado larga";
        document.getElementById("formatPswd").innerHTML = "Entre 6 y 12 caracteres: al menos una mayúscula y una minúscula limitando ambas a letras ASCII, sin acentos, un número, y un símbolo del conjunto “+-*/”.";
        document.getElementById("correctPswd").innerHTML = "";
        return false;
    }
    else if( resultado == false ){
        document.getElementById("errorPswd").innerHTML = "Introduce un formato correcto";
        document.getElementById("formatPswd").innerHTML = "Entre 6 y 12 caracteres: al menos una mayúscula y una minúscula limitando ambas a letras ASCII, sin acentos, un número, y un símbolo del conjunto “+-*/”.";
        document.getElementById("correctPswd").innerHTML = "";
        return false;
    }
    else{
        document.getElementById("errorPswd").innerHTML = "";
        document.getElementById("formatPswd").innerHTML = "";
        document.getElementById("correctPswd").innerHTML = "Correcto";
        return true;
    }
}
function checkDNI(){
    var dni = document.getElementById("cdni").value;

    var pattern = /^[0-7]{1}[0-9]{7}[A-Z]{1}$/;

    var resultado_dni = pattern.test(dni);
    if(dni==""){
        return true;
    } else if (dni.length!=9){
        document.getElementById("errorDNI").innerHTML = "Introduce un dni de 8 dígitos y un carácter";
        document.getElementById("formatDNI").innerHTML = "8 dígitos: comenzando por un número entre 0 y 7, ambos inclusive";
        document.getElementById("correctDNI").innerHTML = "";
        return false;
    } else if (resultado_dni == false){
        document.getElementById("errorDNI").innerHTML = "Introduce un DNI con el formato correcto";
        document.getElementById("formatDNI").innerHTML = "8 dígitos: comenzando por un número entre 0 y 7, ambos inclusive";
        document.getElementById("correctDNI").innerHTML = "";
        return false;
    } else{
        document.getElementById("errorDNI").innerHTML = "";
        document.getElementById("formatDNI").innerHTML = "";
        document.getElementById("correctDNI").innerHTML = "Correcto";
        return true;
    }
}

function checkAll(){
    document.querySelectorAll('#checkmark input[type=checkbox]').forEach(function(checkElement){
        checkElement.checked = true;
        $noCheck = document.querySelector("#noUnCheck");
        $noCheck.checked = false;
    });
}

function uncheckAll(){
    document.querySelectorAll('#checkmark input[type=checkbox]').forEach(function(checkElement){
        checkElement.checked = false;
        $noCheck = document.querySelector("#noUnCheck");
        $noCheck.checked = true;
    });
}

function checkOne(){
    document.querySelectorAll('#checkmark input[type=checkbox]').forEach(function(checkElement){
        $uncheckAll = document.querySelector("#noUnCheck");
        $uncheckAll.checked = false;

        $checkAll = document.querySelector("#check");
        $checkAll.checked = false;
    });
}

function checkPost(){
    document.getElementById("multipart").disabled=false;
}

function checkGet(){
	document.getElementById("urlencoded").checked=true;
	document.getElementById("multipart").checked=false;
	document.getElementById("multipart").disabled=true;
}

function restart(){
    
    document.getElementById("errorName").innerHTML = "";
    document.getElementById("errorLogin").innerHTML = "";
    document.getElementById("errorDNI").innerHTML = "";
    document.getElementById("errorPswd").innerHTML = "";
    document.getElementById("correctName").innerHTML = "";
    document.getElementById("correctLogin").innerHTML = "";
    document.getElementById("correctDNI").innerHTML = "";
    document.getElementById("correctPswd").innerHTML = "";
    document.getElementById("formatName").innerHTML = "";
    document.getElementById("formatLogin").innerHTML = "";
    document.getElementById("formatDNI").innerHTML = "";
    document.getElementById("formatPswd").innerHTML = "";
    alert("Se han puesto por defecto todos los valores del fomulario")
    document.getElementById('formulario').reset();
}

function enviar(){
    if(checkName()){
        if(checkLogin()){
            if(checkDNI()){
                if(checkPswd()){
                    if(document.getElementById("metodGet").checked){
                        document.getElementById("formulario").method="GET";
                        document.getElementById("formulario").enctype="application/x-www-form-urlencoded";
                
                    }else if(document.getElementById("metodPost").checked){
                        if(document.getElementById("urlencoded").checked){
                            document.getElementById("formulario").method="POST";
                            document.getElementById("formulario").enctype="application/x-www-form-urlencoded";
                        }else if(document.getElementById("multipart").checked){
                            document.getElementById("formulario").method="POST";
                            document.getElementById("formulario").enctype="multipart/form-data";
                        }
                    }

                    var idioma = navigator.language;
                    var plataforma = navigator.platform;
                    var cookies = navigator.cookieEnabled;
                    document.getElementById("cbrowser").value = "Idioma "+idioma.toString() +" Plataforma: "+plataforma.toString()+" Cookies :"+cookies.toString();
                    
                    var ahora = new Date();
                    var fecha = ahora.toLocaleDateString('en-US');
                    var hora = ahora.toLocaleTimeString('en-US');
                    document.getElementById("cdate").value = fecha+", "+hora;


                    return true;
                }else{
                    return false;
                }
            }else{
                return false;
            }
        }else {
            return false;
        }
    }else{
        return false;
    }

}
