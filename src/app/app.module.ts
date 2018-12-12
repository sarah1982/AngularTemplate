
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SectionheaderComponent } from './components/sectionheader/sectionheader.component';
import { CompanyComponent } from './components/company/company.component';
import { TabbedpageComponent } from './components/specialities/tabbedpage/tabbedpage.component';
import { TabbedcarouselComponent } from './components/specialities/tabbedcarousel/tabbedcarousel.component';
import { SpecialitiesComponent } from './components/specialities/specialities.component';
import {PassDataService} from './service/pass-data.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    SectionheaderComponent,
    CompanyComponent,
    TabbedpageComponent,
    TabbedcarouselComponent,
    SpecialitiesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PassDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }