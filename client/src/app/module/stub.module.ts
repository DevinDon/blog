import { Component, NgModule } from '@angular/core';
import { AppService } from '../app.service';

// tslint:disable: component-selector

@Component({ selector: 'mat-icon', template: '' })
export class MatIconStubComponent { }

@Component({ selector: 'router-outlet', template: '' })
export class RouterOutletStubComponent { }

export const appServiceStub: Partial<AppService> = {
  title: 'Template'
};

@NgModule({
  declarations: [
    MatIconStubComponent,
    RouterOutletStubComponent
  ]
})
export class StubModule { }
