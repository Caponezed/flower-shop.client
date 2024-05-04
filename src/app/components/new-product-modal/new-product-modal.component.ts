import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { take } from 'rxjs/internal/operators/take';
import { DbProduct } from 'src/app/model/DbProduct';
import { Product } from 'src/app/model/product';
import ProductService from 'src/app/services/product.service';

@Component({
  selector: 'app-new-product-modal',
  templateUrl: './new-product-modal.component.html',
  styleUrls: ['./new-product-modal.component.css'],
})
export class NewProductModalComponent {
  @Input({ required: true }) public isModalOpened!: boolean;
  @Input({ required: true }) public categoryId!: number;
  @Input({ required: true }) public categoryName!: string;
  @Output() public modalClosed = new EventEmitter();
  @Output() public newProductAdded = new EventEmitter();
  public newProductForm!: FormGroup;

  constructor(
    private readonly productService: ProductService,
    private readonly formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.newProductForm = this.formBuilder.group({
      productName: [null, Validators.required],
      productDescription: [''],
      price: [null, Validators.required],
      imgUrl: [
        '../../../assets/images/example-flower.jpg',
        Validators.required,
      ],
      totalQuantity: [null, Validators.required],
    });
  }

  public createNewDbProduct(): DbProduct {
    const newProduct = {
      dbProductName: this.newProductForm.value['productName'],
      dbProductDescription: this.newProductForm.value['productDescription'],
      price: this.newProductForm.value['price'],
      imgUrl: this.newProductForm.value['imgUrl'],
      totalQuantity: this.newProductForm.value['totalQuantity'],
      categoryId: this.categoryId,
    };

    return newProduct;
  }

  public postNewProduct(): void {
    const newDbProduct = this.createNewDbProduct();
    this.productService
      .postNewDbProduct(newDbProduct)
      .pipe(take(1))
      .subscribe((newProducts) => {
        this.newProductAdded.emit(newProducts);
        this.modalClosed.emit();
      });
  }
}
