import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, DetachedRouteHandle, Route, RouteReuseStrategy, RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ArticleComponent } from '../content/article/article.component';
import { ContentComponent } from '../content/content.component';
import { ImageComponent } from '../content/image/image.component';
import { QuestionComponent } from '../content/question/question.component';
import { SongComponent } from '../content/song/song.component';
import { VideoComponent } from '../content/video/video.component';
import { HomeComponent } from '../home/home.component';
import { CategoryComponent } from '../category/category.component';

export const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'content', component: ContentComponent },
  { path: 'content/:category', component: ContentComponent },
  { path: 'article/:id', component: ArticleComponent },
  { path: 'image/:id', component: ImageComponent },
  { path: 'question/:id', component: QuestionComponent },
  { path: 'song/:id', component: SongComponent },
  { path: 'video/:id', component: VideoComponent }
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
