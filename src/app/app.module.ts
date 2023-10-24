import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { FormCategoryComponent } from './form-category/form-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import localeFR from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { MajPipe } from './maj.pipe';
import { TtcPipe } from './ttc.pipe';
import { ArticleComponent } from './article/article.component';
import { FilterPipe } from './filter.pipe';
import { ModalArticleComponent } from './modal-article/modal-article.component';

registerLocaleData(localeFR);

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    FormCategoryComponent,
    HomeComponent,
    MajPipe,
    TtcPipe,
    ArticleComponent,
    FilterPipe,
    ModalArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {provide :LOCALE_ID, useValue:'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
