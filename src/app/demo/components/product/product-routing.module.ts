import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BlocksComponent} from "../primeblocks/blocks/blocks.component";
import {ProductComponent} from "./product.component";

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ProductComponent }
    ])],
    exports: [RouterModule]
})
export class ProductRoutingModule { }
