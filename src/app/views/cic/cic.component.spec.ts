import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicComponent } from './cic.component';

describe('CicComponent', () => {
  let component: CicComponent;
  let fixture: ComponentFixture<CicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CicComponent]
    });
    fixture = TestBed.createComponent(CicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
