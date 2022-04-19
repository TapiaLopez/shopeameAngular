/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.scss']
})
export class ProductoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
*/

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { comparePassword } from 'src/app/validations/custom-validator';
import { ProductInterface } from '../../models/producto.interface';
import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/service.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.scss']
})
export class ProductoListComponent implements OnInit {
	// Incialización del formulario
  public productForm: FormGroup;
	// variable submitted a false
	public submitted: boolean = false;

	// Inicializamos FormBuilder en el constructor
  constructor(private formBuilder: FormBuilder, private requestService: RequestService) {
    // Nuestro formulario - sin campos por defecto
    // Podemos meter valores por defecto en las comillas


    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      image: ['', [Validators.required, Validators.maxLength(50)]],
      price: ['', [Validators.required, Validators.maxLength(20)]],
      description: ['', [Validators.required, Validators.maxLength(80)]],
      stars : ['', [Validators.required, Validators.maxLength(20)]],
    })
  }

	// El OnInit -> Vacío
	ngOnInit() {}

	//Función accionada al clickar en submit
	public onSubmit(): void {
    // El usuario ha pulsado en submit->cambia a true submitted
    this.submitted = true;
    // Si el formulario es valido
    console.log("antes de valido")
    if (this.productForm.valid) {
      console.log("despues de valido")

      // Creamos un producto y lo emitimos
      const producto: ProductInterface = {
        id: 0,
        name: this.productForm.get('name')?.value,
        image: this.productForm.get('image')?.value,
        price: this.productForm.get('price')?.value,
        description: this.productForm.get('description')?.value,
        stars: this.productForm.get('stars')?.value,
      };
      console.log(producto);
      // Reseteamos todos los campos y el indicador de envío o submitted
      this.productForm.reset();
      this.submitted = false;

      let response = this.requestService.postProduct(producto).subscribe(result => console.log(result));
      console.log(response)
    }
  }
}

