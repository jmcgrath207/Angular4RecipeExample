import {Component, EventEmitter, Output} from '@angular/core';
import {DataStorageService} from '../SharedModel/data-storage.service';
import { Response } from '@angular/http';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
/*  @Output() featureSelected = new EventEmitter<string>();*/

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) { }


/*  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }*/

  onSaveData() {
    return this.dataStorageService.storeRecipes().subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }

}
