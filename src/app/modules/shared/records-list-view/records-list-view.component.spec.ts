import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsListViewComponent } from './records-list-view.component';

describe('RecordsListViewComponent', () => {
  let component: RecordsListViewComponent;
  let fixture: ComponentFixture<RecordsListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordsListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
