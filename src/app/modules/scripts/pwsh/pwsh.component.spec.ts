import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwshComponent } from './pwsh.component';

describe('PwshComponent', () => {
  let component: PwshComponent;
  let fixture: ComponentFixture<PwshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
