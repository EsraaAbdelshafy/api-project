import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsService } from '../products.service';
import { IProducts } from '../IProducts';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent implements OnInit{
  title = 'project';
  // imgpath:string='https://image.tmdb.org/t/p/w500';

constructor(private _ProductsService:ProductsService){}
role:string="men's clothing"

 products:IProducts[]=[]
ngOnInit(): void {
    this._ProductsService.getProducts().subscribe(
      {
        next:(res:any)=>{
      this.products=res
        },
        error:(err)=>{console.log(err)}
      }
    )
}
}
