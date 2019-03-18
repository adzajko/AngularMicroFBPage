import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Post } from "src/app/models/Post";
import { PostService } from "../../services/post.service";

@Component({
  selector: "app-post-single",
  templateUrl: "./post-single.component.html",
  styleUrls: ["./post-single.component.css"]
})
export class PostSingleComponent implements OnInit {
  @Input() post: Post;
  constructor(private postService: PostService) {}
  @Output() deletePost: EventEmitter<Post> = new EventEmitter();

  ngOnInit() {}
  //set dynamic classes
  setClasses() {
    let classes = {
      post: true,
      title: this.post.title
    };
    return classes;
  }
  onDelete(post) {
    this.deletePost.emit(post);
  }
  onRender(post) {
    this.postService
      .updateTitle(post)
      .subscribe(post => console.log(post => console.log(post)));
  }
}
