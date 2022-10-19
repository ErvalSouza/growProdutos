import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoVencerComponent } from './produto-vencer.component';

describe('ProdutoVencerComponent', () => {
  let component: ProdutoVencerComponent;
  let fixture: ComponentFixture<ProdutoVencerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoVencerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoVencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
