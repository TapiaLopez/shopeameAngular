import { Component, OnInit } from '@angular/core';
import { ProductInterface, ProductResponseInterface } from '../../models/producto.interface';
import { RequestService } from '../../services/service.service';

@Component({
  selector: 'app-producto-new',
  templateUrl: './producto-new.component.html',
  styleUrls: ['./producto-new.component.scss']
})


export class ProductoNewComponent implements OnInit {

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
  deleteProduct(myId : any) {
    this.requestService.deleteProductos(myId).subscribe((data : any) => {

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

    })
  }
}
