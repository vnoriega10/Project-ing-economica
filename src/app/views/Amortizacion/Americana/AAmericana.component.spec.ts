import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AAmericanaComponent } from './AAmericana.component';

describe('AAmericanaComponent', () => {
  let component: AAmericanaComponent;
  let fixture: ComponentFixture<AAmericanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AAmericanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AAmericanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
