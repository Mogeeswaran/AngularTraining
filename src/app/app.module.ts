import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';
import { CpbComponent } from './cpb/cpb.component';
import { CebComponent } from './ceb/ceb.component';

// @NgModule is a function-->decorator, which has below parameter passed.
@NgModule({
  declarations: [ 
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    CpbComponent,
    CebComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]  //Step 3: AppModule bootstraps AppComponent
})
export class AppModule { }
