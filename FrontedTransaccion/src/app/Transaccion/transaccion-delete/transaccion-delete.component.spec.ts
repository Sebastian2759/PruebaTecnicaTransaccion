import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionDeleteComponent } from './transaccion-delete.component';

describe('TransaccionDeleteComponent', () => {
  let component: TransaccionDeleteComponent;
  let fixture: ComponentFixture<TransaccionDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransaccionDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransaccionDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
