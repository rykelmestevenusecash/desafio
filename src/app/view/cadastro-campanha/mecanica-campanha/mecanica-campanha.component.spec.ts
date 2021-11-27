import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MecanicaCampanhaComponent } from './mecanica-campanha.component';

describe('MecanicaCampanhaComponent', () => {
  let component: MecanicaCampanhaComponent;
  let fixture: ComponentFixture<MecanicaCampanhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MecanicaCampanhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MecanicaCampanhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
