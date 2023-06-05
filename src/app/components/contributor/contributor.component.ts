import { Component, OnInit } from '@angular/core';
import { TipoContribuyenteService } from 'src/app/services/contribuyente.service';

@Component({
  selector: 'app-contributor',
  templateUrl: './contributor.component.html',
  styleUrls: ['./contributor.component.css'],
})
export class ContributorComponent {
  tipoContribuyentes: any[] = [];
  newTipoContribuyente: any = {};
  selectedTipoContribuyente: any = {};

  constructor(private tipoContribuyenteService: TipoContribuyenteService) {}

  updateTipoContribuyente(id: number) {
    this.tipoContribuyenteService
      .updateTipoContribuyente(id, this.selectedTipoContribuyente)
      .subscribe((data) => {
        const index = this.tipoContribuyentes.findIndex(
          (t) => t.idTipoContribuyente === id
        );
        if (index !== -1) {
          this.tipoContribuyentes[index] = data;
        }
      });
  }
}
