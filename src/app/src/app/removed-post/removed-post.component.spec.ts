import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovedPostComponent } from './removed-post.component';

describe('RemovedPostComponent', () => {
  let component: RemovedPostComponent;
  let fixture: ComponentFixture<RemovedPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovedPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemovedPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
