import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, DetachedRouteHandle, Route, RouteReuseStrategy, RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ArticleComponent } from '../article/article.component';
import { HomeComponent } from '../home/home.component';
import { ImageComponent } from '../image/image.component';
import { NavComponent } from '../nav/nav.component';
import { SongComponent } from '../song/song.component';
import { VideoComponent } from '../video/video.component';

export const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'image', component: ImageComponent },
  { path: 'nav', component: NavComponent },
  { path: 'song', component: SongComponent },
  { path: 'video', component: VideoComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }

export class RouteReuseHandler implements RouteReuseStrategy {

  private cache: Map<string, DetachedRouteHandle> = new Map();

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return !route.data.reload;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    this.cache.set(route.routeConfig.path, handle);
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return this.cache.has(route.routeConfig.path);
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    return this.cache.get(route.routeConfig.path);
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }

}
