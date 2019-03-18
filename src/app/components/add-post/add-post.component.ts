import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-add-post",
  templateUrl: "./add-post.component.html",
  styleUrls: ["./add-post.component.css"]
})
export class AddPostComponent implements OnInit {
  @Output() addPost: EventEmitter<any> = new EventEmitter();
  title: string;
  thumbnailUrl: string;
  constructor() {}

  ngOnInit() {}
  onSubmit() {
    const post = {
      title: this.title,
      thumbnailUrl: this.thumbnailUrl
    };
    this.addPost.emit(post);
  }
}
