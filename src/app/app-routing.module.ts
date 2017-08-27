import { GumConsultancyComponent } from './gum-consultancy/gum-consultancy.component';
import { MixingRequirementComponent } from './mixing-requirement/mixing-requirement.component';
import { ContactComponent } from './contact/contact.component';
import { EdgeAdhesivesComponent } from './product-portfolio/edge-adhesives/edge-adhesives.component';
import { PaperAdhesivesComponent } from './product-portfolio/paper-adhesives/paper-adhesives.component';
import { BoxAddictivesComponent } from './product-portfolio/box-addictives/box-addictives.component';
import { BoxAdhesivesComponent } from './product-portfolio/box-adhesives/box-adhesives.component';
import { ProductPortfolioComponent } from './product-portfolio/product-portfolio.component';
import { NgModule } from '@angular/core';
import {
  RouterModule, Routes,
} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductPortfolioComponent,
    children: [
      {
        path: 'boxadhesives',
        component: BoxAdhesivesComponent,
        pathMatch: 'full'
      },
      {
        path: 'boxaddictives',
        component: BoxAddictivesComponent,
        pathMatch: 'full'
      },
      {
        path: 'paperadhesives',
        component: PaperAdhesivesComponent,
        pathMatch: 'full'
      },
      {
        path: 'edgeadhesives',
        component: EdgeAdhesivesComponent,
        pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: 'boxadhesives',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'mixingrequirements',
    component: MixingRequirementComponent,
    pathMatch: 'full'
  },
  {
    path: 'gumconsultancy',
    component: GumConsultancyComponent,
    pathMatch: 'full'
  },
  {
    path: 'contact',
    component: ContactComponent,
    pathMatch: 'full'
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRoutingModule {

}
