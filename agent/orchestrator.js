// agent/orchestrator.js
import { FinanceAgent } from './financeAgent.js';
import { GravitonAgent } from './gravitonAgent.js';
import { HandymanAgent } from './handymanAgent.js';
// ... importar los demás

export class Orchestrator {
    constructor() {
        // Inicializamos el mapa de agentes
        this.agents = {
            finance: new FinanceAgent(),
            graviton: new GravitonAgent(),
            handyman: new HandymanAgent()
            // ... registrar los otros
        };
    }

    /**
     * El "Chispazo": Punto de decisión lógica
     * @param {string} userQuery - Lo que tú le pides al sistema
     */
    async boot(userQuery) {
        console.log("Analizando intención del Proyecto Arizona Titan...");
        
        // 1. Clasificación de la intención (Aquí aplicarías lógica de IA)
        const targetAgent = this.routeQuery(userQuery);

        // 2. Ejecución delegada
        if (this.agents[targetAgent]) {
            return await this.agents[targetAgent].execute(userQuery);
        } else {
            return "El Proyecto Arizona Titan no reconoce esta solicitud.";
        }
    }

    routeQuery(query) {
        // Lógica de ruteo básica (se puede mejorar con un LLM pequeño)
        if (query.includes('dinero') || query.includes('presupuesto')) return 'finance';
        if (query.includes('física') || query.includes('juego')) return 'graviton';
        if (query.includes('reparar') || query.includes('trabajo')) return 'handyman';
        return 'general';
    }
}
