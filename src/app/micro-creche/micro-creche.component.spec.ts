import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroCrecheComponent } from './micro-creche.component';

describe('MicroCrecheComponent', () => {
  let component: MicroCrecheComponent;
  let fixture: ComponentFixture<MicroCrecheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicroCrecheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicroCrecheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
