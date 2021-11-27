import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosCampanhaComponent } from './produtos-campanha.component';

describe('ProdutosCampanhaComponent', () => {
  let component: ProdutosCampanhaComponent;
  let fixture: ComponentFixture<ProdutosCampanhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutosCampanhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosCampanhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
