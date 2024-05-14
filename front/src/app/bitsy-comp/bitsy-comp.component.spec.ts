import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitsyCompComponent } from './bitsy-comp.component';

describe('BitsyCompComponent', () => {
  let component: BitsyCompComponent;
  let fixture: ComponentFixture<BitsyCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BitsyCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BitsyCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
