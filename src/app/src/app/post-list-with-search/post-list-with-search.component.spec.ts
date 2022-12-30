import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListWithSearchComponent } from './post-list-with-search.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('PostListWithSearchComponent', () => {
  let component: PostListWithSearchComponent;
  let fixture: ComponentFixture<PostListWithSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostListWithSearchComponent ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
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
