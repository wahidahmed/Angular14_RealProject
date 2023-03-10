/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Error_notFoundComponent } from './error_notFound.component';

describe('Error_notFoundComponent', () => {
  let component: Error_notFoundComponent;
  let fixture: ComponentFixture<Error_notFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Error_notFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Error_notFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
