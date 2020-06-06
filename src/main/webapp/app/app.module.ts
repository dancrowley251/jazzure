import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JazzureSharedModule } from 'app/shared/shared.module';
import { JazzureCoreModule } from 'app/core/core.module';
import { JazzureAppRoutingModule } from './app-routing.module';
import { JazzureHomeModule } from './home/home.module';
import { JazzureEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JazzureSharedModule,
    JazzureCoreModule,
    JazzureHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JazzureEntityModule,
    JazzureAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class JazzureAppModule {}
