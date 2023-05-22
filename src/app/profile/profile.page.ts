import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from "@angular/common/http";



@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  providers:[

  ],
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule]
})
export class ProfilePage implements OnInit {

  profileId: string | null |undefined;
  movie:any;
  constructor(
    private activate:ActivatedRoute, 
    private http:HttpClient
    ) { }

  ngOnInit() {
    this.profileId = this.activate.snapshot.paramMap.get('id');
    this.http.get('https://api.themoviedb.org/3/movie/'+this.profileId+'?api_key=f94aa13f0bf3664d4f542fa08948a210&language=en-US')
    .subscribe(res=>{
      this.movie = res;
      console.log(res);
    })
  }

 


}
