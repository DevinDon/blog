import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { ArticleComponent } from './article/article.component';
import { ImageComponent } from './image/image.component';
import { MaterialModule } from './module/material.module';
import { RouteReuseHandler, RoutingModule } from './module/routing.module';
import { SharedModule } from './module/shared.module';
import { NavComponent } from './nav/nav.component';
import { SongComponent } from './song/song.component';
import { VideoComponent } from './video/video.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    AboutComponent,
    ImageComponent,
    ArticleComponent,
    SongComponent,
    VideoComponent,
    NavComponent
  ],
  imports: [
    SharedModule,
    RoutingModule,
    MaterialModule
  ],
  providers: [
    AppService,
    { provide: RouteReuseStrategy, useClass: RouteReuseHandler }
  ]
})
export class AppModule { }
