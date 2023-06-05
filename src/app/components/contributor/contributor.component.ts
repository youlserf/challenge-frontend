import { Component, OnInit } from '@angular/core';
import { TipoContribuyenteService } from 'src/app/services/contribuyente.service';

@Component({
  selector: 'app-contributor',
  templateUrl: './contributor.component.html',
  styleUrls: ['./contributor.component.css'],
})
export class ContributorComponent implements OnInit {
  tipoContribuyentes: any[] = [];
  newTipoContribuyente: any = {};
  selectedTipoContribuyente: any = {};

  constructor(private tipoContribuyenteService: TipoContribuyenteService) {}

  ngOnInit() {
    this.getAllTipoContribuyentes();
  }

  getAllTipoContribuyentes() {
    this.tipoContribuyenteService
      .getAllTipoContribuyentes()
      .subscribe((data) => {
        this.tipoContribuyentes = data;
      });
  }

  getTipoContribuyenteById(id: number) {
    this.tipoContribuyenteService
      .getTipoContribuyenteById(id)
      .subscribe((data) => {
        this.selectedTipoContribuyente = data;
      });
  }

  createTipoContribuyente() {
    this.tipoContribuyenteService
      .createTipoContribuyente(this.newTipoContribuyente)
      .subscribe((data) => {
        this.tipoContribuyentes.push(data);
        this.newTipoContribuyente = {};
      });
  }

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

  deleteTipoContribuyente(id: number) {
    this.tipoContribuyenteService.deleteTipoContribuyente(id).subscribe(() => {
      this.tipoContribuyentes = this.tipoContribuyentes.filter(
        (t) => t.idTipoContribuyente !== id
      );
    });
  }
}
