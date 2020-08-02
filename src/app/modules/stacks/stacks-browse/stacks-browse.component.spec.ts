import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StacksBrowseComponent } from './stacks-browse.component';

describe('StacksBrowseComponent', () => {
  let component: StacksBrowseComponent;
  let fixture: ComponentFixture<StacksBrowseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StacksBrowseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StacksBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
