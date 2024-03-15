export class LoggingService {
  logCreateNewServer(server: {
    id: string,
    name: string,
    status: boolean
  }) {
    console.log(`Objectcreated: `, server);
  }

  logChangeStatus(server: {
    id: string,
    name: string,
    status: boolean
  }) {
    console.log(`${server.name} status changed to ${server.status}`);
  }
}