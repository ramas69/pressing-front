import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalArticleComponent } from './modal-article.component';

describe('ModalArticleComponent', () => {
  let component: ModalArticleComponent;
  let fixture: ComponentFixture<ModalArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalArticleComponent]
    });
    fixture = TestBed.createComponent(ModalArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
