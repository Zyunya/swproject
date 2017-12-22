import { TestBed, async } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {AppComponent} from './app.component';
import { MaterialModule } from '@angular/material';
import {AppRoutingModule,RoutingComponents} from "../app.routing";


var bll = true;

////////////////DESCRIBE_1
describe('Sample Test 1', () => {
 it('true is true', () => expect(bll).toBe(true));// проверяет является ли bll равной true
});

////////////////DESCRIBE_2

describe('AppComponent', () => {
 beforeEach(function() {
     
     TestBed.configureTestingModule({ //Конфигурация тестирования и тестировочного модуля
      imports: [ MaterialModule,AppRoutingModule],
      declarations: [AppComponent, RoutingComponents],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
 });
 })

 it('should have asdasd property', function() {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
   expect(app.hello).toBe('asdasd');//ПРоверяет есть ли в классе AppCombonent переменная с содержаниеем asdasd
 });

   it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');//ПРоверяет есть ли в AppCombonent тег h1 с текстом Welcome to app!
  }));
});