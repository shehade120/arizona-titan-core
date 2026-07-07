/**
 * Agente 7: HandymanAgent
 * Función: Gestión operativa, presupuestos y control de servicios técnicos en campo.
 */
export class HandymanAgent {
    constructor() {
        this.id = 'HANDYMAN';
        this.activeJobs = [];
    }

    execute(command, params) {
        switch(command) {
            case "CREATE_JOB":
                return this.registerJob(params);
            case "CALCULATE_ESTIMATE":
                return this.calculateEstimate(params);
            case "LIST_JOBS":
                return this.getJobs();
            default:
                return `[HANDYMAN] Comando ${command} no reconocido.`;
        }
    }

    registerJob(jobData) {
        // jobData: { client: string, service: string, date: string }
        this.activeJobs.push({ id: Date.now(), ...jobData, status: "PENDING" });
        console.log(`[HANDYMAN] Servicio registrado: ${jobData.service} para ${jobData.client}`);
        return `Servicio agendado correctamente.`;
    }

    calculateEstimate(params) {
        // params: { hours: number, complexity: number }
        const total = (params.hours * 50) * params.complexity; // Protocolo 50/50
        console.log(`[HANDYMAN] Presupuesto generado: $${total}`);
        return `Presupuesto estimado: $${total}.`;
    }

    getJobs() {
        return this.activeJobs;
    }
}
