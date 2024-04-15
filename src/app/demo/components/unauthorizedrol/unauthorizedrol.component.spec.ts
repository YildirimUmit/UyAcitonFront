import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthorizedrolComponent } from './unauthorizedrol.component';

describe('UnauthorizedrolComponent', () => {
  let component: UnauthorizedrolComponent;
  let fixture: ComponentFixture<UnauthorizedrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnauthorizedrolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnauthorizedrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
