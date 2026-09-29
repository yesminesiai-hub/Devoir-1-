import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './produits.component.html',
  
})
export class ProduitsComponent {
  produits! : Produit[]; 
  constructor(private produitService: ProduitService ) {
    this.produits = produitService.listeProduits();

   }
   supprimerProduit(prod: Produit) { 
      //console.log(p); 
      let conf = confirm("Etes-vous sûr ?"); 
      if (conf) {
        this.produitService.supprimerProduit(prod);
      }
  }
    

}