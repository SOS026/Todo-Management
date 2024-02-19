import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { TodoComponent } from './pages/todo/todo.component';
import { TodoCardComponent } from './shared/components/todo-card/todo-card.component';
import { MasterComponent } from './shared/layouts/master/master.component';
import { HeaderComponent } from './shared/layouts/header/header.component';
import { DefaultComponent } from './shared/layouts/default/default.component';
import { AlertComponent } from './shared/ui/alert/alert.component';
import { SlidePanelComponent } from './shared/ui/slide-panel/slide-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodoComponent,
    TodoCardComponent,
    // MasterComponent,
    // HeaderComponent,
    // DefaultComponent,
    AlertComponent,
    SlidePanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
