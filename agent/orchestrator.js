/**
 * @file orchestrator.js
 * @description Motor central del Proyecto Arizona Titan. 
 * Implementa recuperación semántica (RAG) para consulta de conocimiento histórico.
 */

import { ChromaClient } from 'chromadb';

export class Orchestrator {
    constructor() {
        // Inicializamos la conexión a la base de conocimiento vectorial
        this.client = new ChromaClient();
        this.collection = null;
        
        // Registro de Agentes Especializados
        this.agents = {
            finance: null, // Asignaremos instancias aquí
            graviton: null,
            handyman: null
        };
        
        this.init();
    }

    async init() {
        // Conexión a la colección de datos 'titan-knowledge'
        this.collection = await this.client.getOrCreateCollection({
            name: "titan-knowledge"
        });
    }

    /**
     * Procesamiento de alta precisión
     * @param {string} userQuery - La consulta del usuario
     */
    async processQuery(userQuery) {
        console.log(`[Titan Core] Analizando: ${userQuery}`);

        // 1. Recuperación de Contexto (El "Chispazo" de memoria)
        const results = await this.collection.query({
            queryTexts: [userQuery],
            nResults: 3 // Extraemos los 3 fragmentos más relevantes del historial
        });

        const context = results.documents[0].join("\n");

        // 2. Ruteo inteligente
        const targetAgent = this.routeQuery(userQuery);

        // 3. Ejecución con contexto inyectado
        return await this.executeAgentTask(targetAgent, userQuery, context);
    }

    routeQuery(query) {
        const q = query.toLowerCase();
        if (q.includes('dinero') || q.includes('trading')) return 'finance';
        if (q.includes('física') || q.includes('gravitón') || q.includes('juego')) return 'graviton';
        if (q.includes('reparar') || q.includes('manual')) return 'handyman';
        return 'general';
    }

    async executeAgentTask(agentName, query, context) {
        // Aquí llamarías a la ejecución específica de cada agente
        // pasando el 'context' para que tengan acceso a toda tu historia.
        return `Agente ${agentName} ejecutando con contexto: ${context.substring(0, 50)}...`;
    }
}
