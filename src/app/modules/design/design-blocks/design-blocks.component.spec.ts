import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignBlocksComponent } from './design-blocks.component';

describe('DesignBlocksComponent', () => {
  let component: DesignBlocksComponent;
  let fixture: ComponentFixture<DesignBlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignBlocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
