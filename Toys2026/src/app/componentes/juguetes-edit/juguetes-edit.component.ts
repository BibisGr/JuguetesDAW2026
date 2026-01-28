import {Component, inject, Input, OnInit} from '@angular/core';
import {JuguetesService} from '../../service/juguetes.service';
import {Router, RouterLink} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-juguetes-edit',
  imports: [
    CurrencyPipe,
    ReactiveFormsModule
  ],
  templateUrl: './juguetes-edit.component.html',
  styleUrl: './juguetes-edit.component.css'
})
export class JuguetesEditComponent implements OnInit{
  ngOnInit(): void {
      if (this.id){
        this.loadJueguete();
        this.editar = true;
        this.loading = false
      }
      else {
        this.formJuguetes.reset()
        this.editar = false;
        this.loading = false;
      }
  }
  @Input('id') id!: string;

  private readonly jugueteService: JuguetesService =
    inject(JuguetesService);
  private readonly router: Router =
    inject(Router);
  private readonly formBuilder:FormBuilder =
    inject(FormBuilder);

  editar: boolean = false
  protected loading: boolean = true

  formJuguetes: FormGroup = this.formBuilder.group({
    _id: ['', [Validators.required]],
    nombre: ['',[Validators.required]],
    imagen: ['',[Validators.required]],
    categoria: ['',[Validators.required]],
    edadMinima: [0, [Validators.required]],
    precio: [0, [Validators.required]]
  })

  get iid():any{
    return this.formJuguetes.get('_id')
  }
  get nombre():any{
    return this.formJuguetes.get('nombre')
  }
  get imagen():any{
    return this.formJuguetes.get('imagen')
  }
  get categoria():any{
    return this.formJuguetes.get('categoria')
  }
  get edadMinima():any{
    return this.formJuguetes.get('edadMinima')
  }
  get precio():any{
    return this.formJuguetes.get('precio')
  }

  protected loadJueguete(){
    this.jugueteService.getOneJuguete(this.id).subscribe(
      {
        next:data=>{
          this.formJuguetes.setValue(data)
        },
        error:error=>{
          console.log('Error cargando el juguete: '+error)
        },
        complete:()=>{
          console.log('Juguete cargado correctamente')
        }
      }
    )
  }
}
