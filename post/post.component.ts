import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
postForm : FormGroup;
posts:any;
error: any = null;
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postForm = new FormGroup ({
      title : new FormControl ('',Validators.required),
      content : new FormControl ('',Validators.required)
    })
    this.getData()
  }
  getData(){
    // this.http.get(`https://angular-guide-c4d58-default-rtdb.firebaseio.com/posts.json`)
    // .pipe(map((response:any) => {
    //   let posts = [];
    //   for(let key in response){
    //     posts.push({...response[key],key})
    //   }
    //   return posts;
    // }))
    // .subscribe(response=>{
    //   this.posts = response;
    // })
    this.postService.fetchPost().subscribe((response:any) => {
      this.posts = response
    },
    (error) => {
      this.error = error.message;
    }
    )
  }
  onCreatePost(){
const postData = this.postForm.value
  //   this.http.post('https://angular-guide-c4d58-default-rtdb.firebaseio.com/posts.json',postData).subscribe(response =>{
  //     this.getData();  // without using subscribe you can't post data in server
  //   });
  //   this.postForm.reset()
  this.postService.createPost(postData).subscribe((response:any) => {
    this.getData();
    this.postForm.reset();
  })
  }
  onClearPost(event:Event){
    event.preventDefault();
    this.postService.clearPost().subscribe();
    this.posts = [];
  }
}
