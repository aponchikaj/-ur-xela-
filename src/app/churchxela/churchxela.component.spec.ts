import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchxelaComponent } from './churchxela.component';

describe('ChurchxelaComponent', () => {
  let component: ChurchxelaComponent;
  let fixture: ComponentFixture<ChurchxelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChurchxelaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChurchxelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
