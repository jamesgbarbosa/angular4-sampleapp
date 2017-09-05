import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
      new Recipe('Banjo Shark','Yummy 1!!','https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Banjo_Shark_recipe.jpg/1024px-Banjo_Shark_recipe.jpg'),
      new Recipe('Menudo','Delicious food','https://2.bp.blogspot.com/-k6t0H64ikSQ/TdXXdCG6FcI/AAAAAAAAAMo/gtmm5PIl-jA/s1600/food%2Bpic%2BC%2B004.JPG')
      
  ];      
  constructor() {
  
  }

  ngOnInit() {
  }

}
