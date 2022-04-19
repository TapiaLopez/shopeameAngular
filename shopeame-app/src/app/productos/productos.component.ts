import { Component, OnInit } from '@angular/core';
import { ProductInterface, ProductResponseInterface } from '../models/producto.interface';
import { RequestService } from '../services/service.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductComponent implements OnInit {

  productList: ProductInterface[] = [];
  mySearch = ''


  constructor(private requestService: RequestService)  { }

  ngOnInit()  {

    this.requestService.getProductos().subscribe((data : any) => {
      const results: ProductInterface[] = data;
      console.log(data);
      console.log(results);
      const formattedResults = results.map(({ id, name, image, price, description, stars }) => ({
        id,
        image,
        name,
        price,
        description,
        stars
      }));
      this.productList = formattedResults;
    })
  }

  searchChange = (mySearch : any) => {
    console.log(mySearch.target.value);
    this.requestService.searchProductos(mySearch.target.value).subscribe((data : any) => {
      const results: ProductInterface[] = data;
      console.log(data);
      console.log(results);
      const formattedResults = results.map(({ id, name, image, price, description, stars }) => ({
        id,
        image,
        name,
        price,
        description,
        stars
      }));
      this.productList = formattedResults;
    })

  };


}




