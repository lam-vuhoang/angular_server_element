import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";
import { ServerType } from "../shared/server.type";

@Injectable()
export class ServersService {
    servers: ServerType[] = [
        { id: this.getRandomId(16), name: 'Server 1', status: true },
        { id: this.getRandomId(16), name: 'Server 2', status: false },
    ];

    constructor(private loggingService: LoggingService) {}

    onAddServer(server: ServerType) {
        this.servers.push(server);
        this.loggingService.logCreateNewServer(server);      
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