/**
 * ARIZONA TITAN - ENGINE MASTER v1.0
 * Protocolo: Centralización y Orquestación de Agentes
 */

// Importación de todos los módulos de agentes
import { TitanOrchestrator } from './orchestrator.js';
import { AmazonAgent } from './amazonAgent.js';
import { TitanNexusAgent } from './titanNexusAgent.js';
import { GravitonAgent } from './gravitonAgent.js';
import { IdentityAgent } from './identityAgent.js';
import { FinanceAgent } from './financeAgent.js';
import { HandymanAgent } from './handymanAgent.js';
import { LegacyAgent } from './legacyAgent.js';

// Inicialización del Motor Central
const TitanEngine = {
    agents: {},

    init() {
        console.log("◈ INICIANDO NÚCLEO ARIZONA TITAN ◈");
        this.registerAgent('ORCHESTRATOR', new TitanOrchestrator());
        this.registerAgent('AMAZON_HUB', new AmazonAgent());
        this.registerAgent('TITAN_NEXUS', new TitanNexusAgent());
        this.registerAgent('GRAVITON', new GravitonAgent());
        this.registerAgent('IDENTITY', new IdentityAgent());
        this.registerAgent('FINANCE', new FinanceAgent());
        this.registerAgent('HANDYMAN', new HandymanAgent());
        this.registerAgent('LEGACY', new LegacyAgent());
        console.log("◈ TODOS LOS AGENTES ESTÁN EN LÍNEA ◈");
    },

    registerAgent(id, instance) {
        this.agents[id] = instance;
        console.log(`[ENGINE] Agente ${id} registrado correctamente.`);
    },

    dispatch(id, command, params) {
        if (this.agents[id]) {
            return this.agents[id].execute(command, params);
        } else {
            console.error(`[ENGINE] Agente ${id} no encontrado en el protocolo.`);
            return null;
        }
    }
};

// Inicializar el sistema al cargar
TitanEngine.init();

// Hacerlo accesible globalmente para tus botones en index.html
window.TitanEngine = TitanEngine;
export default TitanEngine;
