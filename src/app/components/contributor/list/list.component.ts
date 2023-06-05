import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoContribuyenteService } from 'src/app/services/contribuyente.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  tipoContribuyentes: any[] = [];
  newTipoContribuyente: any = {};
  selectedTipoContribuyente: any = {};

  constructor(
    private tipoContribuyenteService: TipoContribuyenteService,
    private router: Router
  ) {}

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

  editTipoContribuyente(id: number) {
    this.router.navigate(['/contributor/update'], { queryParams: { id: id } });
  }

  deleteTipoContribuyente(id: number) {
    this.tipoContribuyenteService.deleteTipoContribuyente(id).subscribe(() => {
      this.tipoContribuyentes = this.tipoContribuyentes.filter(
        (t) => t.idTipoContribuyente !== id
      );
    });
  }
}
