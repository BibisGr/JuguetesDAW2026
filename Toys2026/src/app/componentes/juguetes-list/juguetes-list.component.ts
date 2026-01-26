import {Component, inject} from '@angular/core';
import {JuguetesService} from '../../service/juguetes.service';
import {ApiResponseJuguetes, Juguete} from '../../common/juguetes';
import {NgbPagination} from '@ng-bootstrap/ng-bootstrap';
import {RouterLink} from '@angular/router';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-juguetes-list',
  imports: [
    NgbPagination,
    RouterLink,
    CurrencyPipe
  ],
  templateUrl: './juguetes-list.component.html',
  styleUrl: './juguetes-list.component.css'
})
export class JuguetesListComponent {

  private readonly jugueteService: JuguetesService =
    inject(JuguetesService);

  apiData!: ApiResponseJuguetes;
  juguetes: Juguete[] = [];
  currentePage: number = 1;
  faTrashCan: any;

  constructor() {
    this.loadAllToys();
  }

  private loadAllToys() {
    this.jugueteService.getJuguetesPaged(this.currentePage).subscribe({
      next: data => {
        this.apiData = data;
        this.juguetes = this.apiData.juguetes.juguetes;
      },
      error: err =>
        console.error('Error fetching toys:', err),
      complete: () => {
        console.log('Toys fetched successfully');
      }
    })
  }
}
