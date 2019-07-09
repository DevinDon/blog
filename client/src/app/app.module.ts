import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { CategoryComponent } from './category/category.component';
import { ContentModule } from './content/content.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './module/material.module';
import { RouteReuseHandler, RoutingModule } from './module/routing.module';
import { SharedModule } from './module/shared.module';
import { NavComponent } from './nav/nav.component';
import { WaveComponent } from './wave/wave.component';
import { AboutContactComponent } from './about/about-contact/about-contact.component';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    NavComponent,
    HomeComponent,
    CategoryComponent,
    WaveComponent,
    AboutContactComponent
  ],
  entryComponents: [
    AboutContactComponent,
  ],
  imports: [
    SharedModule,
    RoutingModule,
    MaterialModule,
    ContentModule
  ],
  providers: [
    AppService,
    { provide: RouteReuseStrategy, useClass: RouteReuseHandler }
  ]
})
export class AppModule { }
