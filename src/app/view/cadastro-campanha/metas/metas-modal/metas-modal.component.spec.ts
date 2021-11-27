import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetasModalComponent } from './metas-modal.component';

describe('MetasModalComponent', () => {
  let component: MetasModalComponent;
  let fixture: ComponentFixture<MetasModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetasModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetasModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
