import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SessionService } from './session.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [SessionService, { provide: LocationStrategy, useClass: HashLocationStrategy },],
  bootstrap: [AppComponent]
})
export class AppModule { }
