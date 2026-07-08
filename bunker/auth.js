// /bunker/auth.js - Protocolo de Seguridad Nivel 3 (Blindado)
const AuthManager = (() => {
    const SECRET_KEY = "TU_LLAVE_MAESTRA"; // Reemplaza con tu clave secreta real

    const encrypt = (val) => btoa(val + "_TITAN_SECURE");
    const decrypt = (val) => atob(val).replace("_TITAN_SECURE", "");

    const isAuthenticated = () => {
        const stored = localStorage.getItem("titan_session");
        return stored && decrypt(stored) === graviton;
    };

    const init = () => {
        if (!isAuthenticated()) {
            const pass = prompt("PROTOCOL: BÚNKER AZIZONA TITAN. INGRESE CLAVE:");
            if (pass === SECRET_KEY) {
                localStorage.setItem("titan_session", encrypt(pass));
                console.log("ACCESO AUTORIZADO: Iniciando agentes...");
                return true;
            } else {
                alert("ERROR: ACCESO DENEGADO. REDIRIGIENDO...");
                window.location.href = "../public/index.html";
                return false;
            }
        }
        return true;
    };

    return { init, isAuthenticated };
})();

// Control de flujo: Si no está autenticado, detiene la carga del búnker
if (AuthManager.init()) {
    // Aquí puedes disparar la carga de agentes
    console.log("NÚCLEO ACTIVO: Todos los agentes están operativos.");
}
