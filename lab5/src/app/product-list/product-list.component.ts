import { Component, OnInit} from '@angular/core';

import { products } from '../products';
import {add_like} from "../products";
import { Product } from "../products";

import {chosen_c} from "../categories";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{
  products = [...products].filter(x => x.cat == chosen_c);
  update({chosen_c}: { chosen_c: any })
  {
      this.products = [...products].filter(x => x.cat == chosen_c);
  }
  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  liked(x: Product)
  {
    add_like(x);
  }
  remove(x: Product)
  {
    x.cat = -1;
  }
}
