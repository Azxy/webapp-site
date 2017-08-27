import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ProductPortfolioComponent } from './product-portfolio/product-portfolio.component';
import { MixingRequirementComponent } from './mixing-requirement/mixing-requirement.component';
import { GumConsultancyComponent } from './gum-consultancy/gum-consultancy.component';
import { ContactComponent } from './contact/contact.component';
import { BoxAdhesivesComponent } from './product-portfolio/box-adhesives/box-adhesives.component';
import { BoxAddictivesComponent } from './product-portfolio/box-addictives/box-addictives.component';
import { PaperAdhesivesComponent } from './product-portfolio/paper-adhesives/paper-adhesives.component';
import { EdgeAdhesivesComponent } from './product-portfolio/edge-adhesives/edge-adhesives.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    ProductPortfolioComponent,
    MixingRequirementComponent,
    GumConsultancyComponent,
    ContactComponent,
    BoxAdhesivesComponent,
    BoxAddictivesComponent,
    PaperAdhesivesComponent,
    EdgeAdhesivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
