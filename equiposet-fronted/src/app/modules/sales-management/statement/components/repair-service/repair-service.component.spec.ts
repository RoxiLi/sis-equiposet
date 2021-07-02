import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairServiceComponent } from './repair-service.component';

describe('RepairServiceComponent', () => {
  let component: RepairServiceComponent;
  let fixture: ComponentFixture<RepairServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
