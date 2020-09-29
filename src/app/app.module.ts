import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Modules
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { NgZorroModule } from './ng-zorro/ng-zorro.module';
// Routes
import { AppRoutingModule } from './app.routing';
// Guards
import { GuardsModule } from './guards/guards.module';
// Services
import { ServicesModule } from './services/services.module';
// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    AuthModule,
    PagesModule,
    SharedModule,
    NgZorroModule,
    ServicesModule,
    GuardsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
