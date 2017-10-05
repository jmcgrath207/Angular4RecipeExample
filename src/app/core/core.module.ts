

import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {SharedModule} from '../Shared/shared.module';
import {AppRoutingModule} from '../app-routing.module';
import {ShoppingListService} from '../services/shoppingList.service';
import {RecipeService} from '../services/recipe.service';
import {DataStorageService} from '../Shared/data-storage.service';
import {AuthService} from '../auth/auth.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from '../Shared/auth.interceptor';

@NgModule({
  declarations : [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [ShoppingListService, RecipeService,
    DataStorageService, AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
})
export class CoreModule {}
