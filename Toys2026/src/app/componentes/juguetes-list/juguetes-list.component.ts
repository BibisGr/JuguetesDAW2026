import {Component, inject} from '@angular/core';
import {JuguetesService} from '../../service/juguetes.service';
import {ApiResponseJuguetes, Juguete} from '../../common/juguetes';
import {RouterLink} from '@angular/router';
import {CurrencyPipe} from '@angular/common';
import {NgbPagination} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-juguetes-list',
  imports: [
    NgbPagination,
    RouterLink,
    CurrencyPipe,
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


  constructor() {
    this.loadAllToys();
  }

  protected loadAllToys() {
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

  deleteJuguetes(juguete: Juguete) {
    if (confirm('Desea Borrar el juguete: ' + juguete.nombre + '?')) {
      this.jugueteService.deleteJuguete(juguete._id).subscribe(
        {
          next: data => {
            console.log(data);
            // alert(data.message)
          },
          error: err => {
            console.log(err);
          }
        }
      )
    }

  }
}
