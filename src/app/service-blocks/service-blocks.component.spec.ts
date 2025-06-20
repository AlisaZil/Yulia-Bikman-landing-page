import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBlocksComponent } from './service-blocks.component';

describe('ServiceBlocksComponent', () => {
  let component: ServiceBlocksComponent;
  let fixture: ComponentFixture<ServiceBlocksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceBlocksComponent]
    });
    fixture = TestBed.createComponent(ServiceBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
