import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionUpdateComponent } from './transaccion-update.component';

describe('TransaccionUpdateComponent', () => {
  let component: TransaccionUpdateComponent;
  let fixture: ComponentFixture<TransaccionUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransaccionUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransaccionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
