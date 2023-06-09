import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoContribuyente } from 'src/app/services/contribuyente/contribuyente.model';
import { TipoContribuyenteService } from 'src/app/services/contribuyente/contribuyente.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  newTipoContribuyente: TipoContribuyente = {} as TipoContribuyente;
  isEditMode: boolean = false;

  constructor(
    private tipoContribuyenteService: TipoContribuyenteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['id']) {
        this.isEditMode = true;
        this.getTipoContribuyenteById(params['id']);
      }
    });
  }

  getTipoContribuyenteById(id: number) {
    this.tipoContribuyenteService
      .getTipoContribuyenteById(id)
      .subscribe((data) => {
        this.newTipoContribuyente = data;
      });
  }

  createTipoContribuyente() {
    this.tipoContribuyenteService
      .createTipoContribuyente(this.newTipoContribuyente)
      .subscribe((data) => {
        this.newTipoContribuyente = {} as TipoContribuyente;
        this.router.navigate(['/contributor']);
      });
  }

  updateTipoContribuyente() {
    const id = this.newTipoContribuyente.idTipoContribuyente;
    this.tipoContribuyenteService
      .updateTipoContribuyente(id, this.newTipoContribuyente)
      .subscribe((data) => {
        this.router.navigate(['/contributor']);
      });
  }
}
