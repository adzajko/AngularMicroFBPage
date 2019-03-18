import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Post } from "../models/Post";
const HttpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
@Injectable({
  providedIn: "root"
})
export class PostService {
  postsUrl: string = "http://jsonplaceholder.typicode.com/photos";
  postsLimit = "?_limit=7";
  constructor(private http: HttpClient) {}

  //Get all the posts
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.postsUrl}${this.postsLimit}`);
  }
  //Delete a post
  deletePost(post: Post): Observable<Post> {
    const url = `${this.postsUrl}/${post.id}`;
    return this.http.delete<Post>(url, HttpOptions);
  }
  //Edit title of post
  updateTitle(post: Post): Observable<any> {
    const url = `${this.postsUrl}/${post.id}`;
    return this.http.put(url, post, HttpOptions);
  }
  //Add Post
  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post, HttpOptions);
  }
}
