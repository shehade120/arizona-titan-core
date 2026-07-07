/**
 * ARIZONA TITAN - MOTOR DE AGENTES v1.0
 * Protocolo: Centralización de Procesos Autónomos
 */

const TitanEngine = {
    agents: {},

    registerAgent(id, instance) {
        this.agents[id] = instance;
        console.log(`[ENGINE] Agente ${id} registrado en el núcleo.`);
    },

    dispatch(id, command, params) {
        if (this.agents[id]) {
            return this.agents[id].execute(command, params);
        } else {
            console.error(`[ENGINE] Agente ${id} no encontrado.`);
        }
    }
};

// Estructura Base para cada Agente
class BaseAgent {
    constructor(id) {
        this.id = id;
    }
    execute(command, params) {
        throw new Error("El método execute debe ser implementado");
    }
}
