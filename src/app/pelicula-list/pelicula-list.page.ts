import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule,HttpClient } from "@angular/common/http";
import { CarteleraResponse } from "../interface/cartelera_response";

@Component({
  selector: 'app-pelicula-list',
  templateUrl: './pelicula-list.page.html',
  styleUrls: ['./pelicula-list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule]
})
export class PeliculaListPage implements OnInit {

  peliculas: any; 
  constructor(
    private http:HttpClient
  ) { }

  ngOnInit() {
    this.http.get<CarteleraResponse>('https://api.themoviedb.org/3/movie/now_playing?api_key=f94aa13f0bf3664d4f542fa08948a210&language=en-US&page=1')
    .subscribe(res =>{
      console.log(res);
      this.peliculas = res.results;
    })
  }
}
