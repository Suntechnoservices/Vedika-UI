import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserloginComponent } from './home/login/user/userlogin.component';
import { OwnerloginComponent } from './home/login/owner/ownerlogin.component';
import { SignupComponent } from './home/signup/signup.component';
import { UserhelpComponent } from './home/help/user/userhelp.component';
import { OwnerhelpComponent } from './home/help/owner/ownerhelp.component';
import { SearchComponent } from './home/search/search.component';
import { FooterComponent } from './home/footer/footer.component';
import { HeaderComponent } from './home/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent,
    OwnerloginComponent,
    UserhelpComponent,
    OwnerhelpComponent,
    SignupComponent,
  
    SearchComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
