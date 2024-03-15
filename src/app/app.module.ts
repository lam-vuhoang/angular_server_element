import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { LoggingService } from './service/logging.service';
import { ServersService } from './service/servers.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainBoardComponent } from './main-board/main-board.component';
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [
    AppComponent,
    MainBoardComponent,
    ServerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    LoggingService,
    ServersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
