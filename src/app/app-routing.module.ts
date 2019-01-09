import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';

const app_route:Routes=[

  {path:'home', component: PortfolioComponent},
  {path:'about', component: AboutComponent},
  {path:'**', pathMatch:'full', redirectTo:'home'}

]

@NgModule({
  imports:[
    RouterModule.forRoot(app_route, {useHash:true})
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouting{

}