// /bunker/auth.js - Sistema de Acceso Nivel 3
const PASSWORD_SECRET = "TU_LLAVE_MAESTRA"; // CAMBIA ESTO A TU CLAVE SECRETA

function checkAccess() {
    const sessionToken = localStorage.getItem("titan_session");
    if (sessionToken !== PASSWORD_SECRET) {
        const input = prompt("PROTOCOLO DE SEGURIDAD: Ingrese credencial de acceso:");
        if (input === PASSWORD_SECRET) {
            localStorage.setItem("titan_session", PASSWORD_SECRET);
            return true;
        } else {
            alert("ACCESO DENEGADO.");
            window.location.href = "../public/index.html";
            return false;
        }
    }
    return true;
}

// Ejecutar al cargar la página
if (checkAccess()) {
    console.log("SISTEMA OPERATIVO: Acceso autorizado. Iniciando agentes...");
}
