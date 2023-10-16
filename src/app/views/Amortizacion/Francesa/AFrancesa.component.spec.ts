import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFrancesaComponent } from './AFrancesa.component';

describe('AFrancesaComponent', () => {
  let component: AFrancesaComponent;
  let fixture: ComponentFixture<AFrancesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AFrancesaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AFrancesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
