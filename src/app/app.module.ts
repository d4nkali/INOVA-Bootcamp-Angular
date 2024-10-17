import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "./shared/material/material.module";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from "ngx-mask";
import { ClienteModule } from "./pages/cliente/cliente.module";

@NgModule({
  declarations: [
  AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    NgxMaskDirective,
    NgxMaskPipe,
    ClienteModule
  ],
  providers: [provideNgxMask()],

  bootstrap: [AppComponent]
  })
  export class AppModule { }
