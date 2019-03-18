import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PostsComponent } from "./components/posts/posts.component";
import { PostSingleComponent } from "./components/post-single/post-single.component";
import { HeaderComponent } from "./components/layout/header/header.component";
import { FooterComponent } from "./components/layout/footer/footer.component";
import { AddPostComponent } from "./components/add-post/add-post.component";
import { EditPostComponent } from "./components/edit-post/edit-post.component";

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostSingleComponent,
    HeaderComponent,
    FooterComponent,
    AddPostComponent,
    EditPostComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
