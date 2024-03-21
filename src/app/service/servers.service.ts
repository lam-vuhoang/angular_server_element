import { Injectable, EventEmitter, Output } from "@angular/core";
import { LoggingService } from "./logging.service";
import { ServerType } from "../shared/server.type";

@Injectable()
export class ServersService {
    servers: ServerType[] = [
        { id: "r37PveTZv2hGhLOs", name: 'Server 1', status: true },
        { id: "qhZMm1VCC6tthFSY", name: 'Server 2', status: false },
    ];

    constructor(private loggingService: LoggingService) {}

    onAddServer(server: ServerType) {
        this.servers.push(server);
        this.loggingService.logCreateNewServer(server);      
    }

    onChangeStatus(id: string, status: boolean) {
        const index = this.servers.findIndex((s: ServerType) => s.id === id);
        if (index !== -1) {
            this.servers[index].status = status;
            this.loggingService.logChangeStatus(this.servers[index]);
        }
    }

    getRandomId(length: number) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
    
        return result;
    }

    getInitialServer() : ServerType {
        return {
            id: this.getRandomId(16),
            name: '',
            status: false
        };
    }
}