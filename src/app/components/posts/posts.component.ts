import { Component, OnInit } from "@angular/core";
import { Post } from "../../models/Post";
import { PostService } from "../../services/post.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  posts: Post[];
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
  deletePost(post: Post) {
    //Remove from UI
    this.posts = this.posts.filter(p => p.id !== post.id);
    //Remove from Server
    this.postService.deletePost(post).subscribe();
  }
  addPost(post: Post) {
    this.postService.addPost(post).subscribe(post => {
      this.posts.push(post);
    });
  }
}
