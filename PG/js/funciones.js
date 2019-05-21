
  window.onload = function() {
               document.getElementById('formularioRegistro').style.display = 'none';
            }

function cambiarARegistrar(){
	 document.getElementById('Registrarse').onclick = function () {
                     document.getElementById('formularioRegistro').style.display = 'block';
                      document.getElementById('formularioInicioSesion').style.display = 'none';
                }
}  

function cambiarAInicio(){
	 document.getElementById('irIniciar').onclick = function () {
                     document.getElementById('formularioInicioSesion').style.display = 'block';
                      document.getElementById('formularioRegistro').style.display = 'none';
                }
}       