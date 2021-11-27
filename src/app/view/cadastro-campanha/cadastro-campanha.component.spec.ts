import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCampanhaComponent } from './cadastro-campanha.component';

describe('CadastroCampanhaComponent', () => {
  let component: CadastroCampanhaComponent;
  let fixture: ComponentFixture<CadastroCampanhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroCampanhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroCampanhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
