import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirVideoComponent } from './subir-video.component';

describe('SubirVideoComponent', () => {
  let component: SubirVideoComponent;
  let fixture: ComponentFixture<SubirVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubirVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubirVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
