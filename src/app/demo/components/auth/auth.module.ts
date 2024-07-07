import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import {InputTextModule} from "primeng/inputtext";

@NgModule({
    imports: [
        InputTextModule,
        CommonModule,
        AuthRoutingModule
    ]
})
export class AuthModule { }
