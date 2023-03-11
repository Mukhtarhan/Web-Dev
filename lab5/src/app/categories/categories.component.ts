import { Component } from '@angular/core';
import { categories} from "../categories";
import {set_cat, get_cat} from "../categories";
import {ProductListComponent} from "../product-list/product-list.component";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent {

  categories = [...categories];
  change_cat(x: number)
  {
    set_cat(x);
  }

}
