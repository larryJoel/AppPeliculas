import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CarteleraResponse } from '../interface/cartelera_response';
import { HttpClient,HttpClientModule } from "@angular/common/http";
@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,HttpClientModule]
})
export class BuscarPage implements OnInit {
 
  peliculas: any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  buscarPelicula(texto: String){
    texto = texto.trim();
    if(texto.length === 0){
      return;
    }
    this.http.get<CarteleraResponse>('https://api.themoviedb.org/3/search/movie?api_key=f94aa13f0bf3664d4f542fa08948a210&language=en-US&query='+texto+'&page=1&include_adult=false')
    .subscribe((data: any)=>{
      console.log(data);
      this.peliculas=data.results;
      const miCampo = document.getElementById("miCampo") as HTMLInputElement;
    miCampo.value = "";
    })
    console.log(texto);
  }

}
