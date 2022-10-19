import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosCriarComponent } from './produtos-criar.component';

describe('ProdutosCriarComponent', () => {
  let component: ProdutosCriarComponent;
  let fixture: ComponentFixture<ProdutosCriarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutosCriarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutosCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
