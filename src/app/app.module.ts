import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './src/app/header/header.component';
import { FooterComponent } from './src/app/footer/footer.component';
import { PostListWithSearchComponent } from './src/app/post-list-with-search/post-list-with-search.component';
import { CreatePostComponent } from './src/app/create-post/create-post.component';
import { PostListComponent } from './src/app/post-list/post-list.component';
import { RemovedPostComponent } from './src/app/removed-post/removed-post.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PostListWithSearchComponent,
    CreatePostComponent,
    PostListComponent,
    RemovedPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
