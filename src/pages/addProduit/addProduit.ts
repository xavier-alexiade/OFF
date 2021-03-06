import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RecherchePage} from "../recherche/recherche";

@Component({
  selector: 'page-addProduit',
  templateUrl: 'addProduit.html'
})
export class AddProduitPage {
  code = null;
  url: String = "";
  creator: String = "IUT Lan";
  created_datetime = new Date().toDateString();
  last_modified_datetime = new Date().toDateString();
  product_name: String  = "";
  brands: String  = "";
  countries_fr: String ;
  ingredients_text: String ;
  serving_size = null;
  additives_n = null;
  additives_fr = null;
  ingredients_from_palm_oil_n = null;
  ingredients_that_may_be_from_palm_oil_n = null;
  nutrition_grade_fr: String;
  states_fr = "";
  energy_100g = null;
  fat_100g = null;
  saturated_fat_100g = null;
  trans_fat_100g = null;
  cholesterol_100g = null;
  carbohydrates_100g = null;
  sugars_100g = null;
  fiber_100g = null;
  proteins_100g = null;
  salt_100g = null;
  sodium_100g = null;
  vitamin_a_100g = null;
  vitamin_c_100g = null;
  calcium_100g = null;
  iron_100g = null;
  nutrition_score_fr_100g = null;

  constructor(public navCtrl: NavController) {
  }

  addProd() {
    this.navCtrl.setRoot(RecherchePage, {
      item: {
        "code": this.code,
        "url": this.url,
        "creator": this.creator,
        "created_datetime": this.created_datetime,
        "last_modified_datetime": this.last_modified_datetime,
        "product_name": this.product_name,
        "brands": this.brands,
        "countries_fr": this.countries_fr,
        "ingredients_text": this.ingredients_text,
        "serving_size": this.serving_size,
        "additives_n": this.additives_n,
        "additives_fr": this.additives_fr,
        "ingredients_from_palm_oil_n": this.ingredients_from_palm_oil_n,
        "ingredients_that_may_be_from_palm_oil_n": this.ingredients_that_may_be_from_palm_oil_n,
        "nutrition_grade_fr": this.nutrition_grade_fr,
        "states_fr": this.states_fr,
        "energy_100g": this.energy_100g,
        "fat_100g": this.fat_100g,
        "saturated_fat_100g": this.saturated_fat_100g,
        "trans_fat_100g": this.trans_fat_100g,
        "cholesterol_100g": this.cholesterol_100g,
        "carbohydrates_100g": this.carbohydrates_100g,
        "sugars_100g": this.sugars_100g,
        "fiber_100g": this.fiber_100g,
        "proteins_100g": this.proteins_100g,
        "salt_100g": this.salt_100g,
        "sodium_100g": this.sodium_100g,
        "vitamin_a_100g": this.vitamin_a_100g,
        "vitamin_c_100g": this.vitamin_c_100g,
        "calcium_100g": this.calcium_100g,
        "iron_100g": this.iron_100g,
        "nutrition_score_fr_100g": this.nutrition_score_fr_100g
      }
    });
  }
}
