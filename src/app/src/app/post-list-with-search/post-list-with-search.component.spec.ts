import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListWithSearchComponent } from './post-list-with-search.component';

describe('PostListWithSearchComponent', () => {
  let component: PostListWithSearchComponent;
  let fixture: ComponentFixture<PostListWithSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostListWithSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostListWithSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
