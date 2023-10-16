import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AAlemanComponent } from './AAleman.component';

describe('AAlemanComponent', () => {
  let component: AAlemanComponent;
  let fixture: ComponentFixture<AAlemanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AAlemanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AAlemanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
