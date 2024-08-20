import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FlowersComponent } from '../flowers/flowers.component';
import { FoodComponent } from '../food/food.component';
import { AnimalsComponent } from '../animals/animals.component';
import { MoviesService } from '../movies.service';
import { Imovies } from '../imovies';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterOutlet,RouterLink,FlowersComponent,FoodComponent,AnimalsComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  title = 'project';


  constructor(private _MoviesService:MoviesService){}
imgbase:string="https://image.tmdb.org/t/p/w500";

movies:Imovies[]=[]

ngOnInit(): void {
    this._MoviesService.getmovies().subscribe(
      {
        next:(res:any)=>{
          this.movies=res.results;
        },
        error:(err)=>{console.log(err)},
      }
    )
}



}
