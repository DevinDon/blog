import { Component } from '@angular/core';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppService } from './app.service';

// tslint:disable: component-selector
@Component({ selector: 'router-outlet', template: '' })
class RouterOutletComponent { }

const appServiceStub: Partial<AppService> = {
  title: 'Template'
};

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RouterOutletComponent
      ],
      providers: [{ provide: AppService, useValue: appServiceStub }]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    app = fixture.debugElement.componentInstance;
    element = fixture.debugElement.nativeElement;
  }));

  it('should be created', () => {
    expect(app).toBeTruthy();
  });

});
