import { AddProduitComponent } from './add-produit/add-produit.component';
import { ProduitsComponent } from './produits/produits.component'; 
import { Routes } from '@angular/router';
export const routes: Routes = [
    {path: "produits", component : ProduitsComponent},
    {path: "add-produit", component : AddProduitComponent},
    {path: "", redirectTo: "produits", pathMatch: "full"} 
];
