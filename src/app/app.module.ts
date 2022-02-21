import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainsectionComponent } from './mainsection/mainsection.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { ProjectSectionComponent } from './project-section/project-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MainpageComponent } from './mainpage/mainpage.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainsectionComponent,
    SkillsSectionComponent,
    ProjectSectionComponent,
    AboutSectionComponent,
    ContactSectionComponent,
    FooterComponent,
    ImprintComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
